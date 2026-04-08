# monitor schema

各服務共用的 Avro schema，定義 WebSocket 傳輸的資料格式。

## cmd 命令清單

| cmd | schema | 方向 | 說明 |
|-----|--------|------|------|
| 1 | BootNet | device→server | 網路開機（iPXE 請求時記錄） |
| 2 | BootOS | device→server | OS 開機（hostname, os, ip, boot_net，連線後立刻送） |
| 3 | UsageRAM | device→server | 記憶體使用量（used_bytes, total_bytes），每 5 秒 |
| 4 | UsageCPU | device→server | CPU 使用率 + 目前頻率（pct, mhz），每 5 秒 |
| 5 | UsageNET | device→server | 網路使用量（ifaces array: iface, rx_bps, tx_bps），每 5 秒 |
| 6 | InfoHardware | device→server | 主機板、RAM slots、PCIe 裝置（lshw + dmidecode） |
| 7 | InfoCPU | device→server | CPU 型號、核心數、執行緒數、最高頻率（lscpu） |
| 8 | InfoBIOS | device→server | BIOS 廠商、版本、日期（dmidecode） |
| 9 | InfoOS | device→server | 作業系統名稱、/app NFS 狀態 |
| 10 | InfoHashrate | device→server | xmrig hashrate（HTTP API） |
| 11 | UsageRAMInit | device→server | 記憶體初始化（total_bytes，連線時送一次） |
| 12 | UsageCPUInit | device→server | CPU 初始化（max_mhz，連線時送一次） |
| 13 | UsageNETInit | device→server | 網路初始化（ifaces array: iface, link_mbps，連線時送一次） |
| 14 | InfoStatus | device→server | Pool 狀態、失敗次數、NFS 狀態，每 5 分鐘 |
| 15 | InfoProc | device→server | 前 20 筆程式使用量（依 CPU 排序，按需回傳） |
| 20 | ReqDetail | client→device | client 請求詳細資料（type: ram/cpu/net/proc），由 server 轉發 |
| 21 | DetailRAM | device→client | RAM slot 詳細（容量/類型/速度/製造商/型號，按需回傳） |
| 22 | DetailCPU | device→client | CPU 詳細（flags/快取/NUMA/Socket，按需回傳） |
| 23 | DetailNET | device→client | 網卡詳細（MAC/IP/Driver/Vendor/最大速度，按需回傳） |
| 24 | Offline | server→client | 設備離線通知（device WebSocket 斷線時廣播） |
| 30 | AnsibleRun | client→server | 執行 ansible（hostname, monero_mode） |
| 31 | AnsibleProgress | server→client | ansible 執行進度（hostname, task） |
| 32 | AnsibleDone | server→client | ansible 執行完成（ok, changed, failed, unreachable, started_at, finished_at） |
| 33 | AnsibleHosts | server→client | ansible checkbox 開關（mac, enabled），client 連線時補送 + BootOS 後廣播 |

## 快取規則

- cmd 1–14：server/monitor 快取最新一筆，新 client 連線時補送
- cmd 15、21–23：不快取，直接廣播（按需資料，每次請求重新收集）
- cmd 24、31、32：不快取，即時廣播
- cmd 33：不快取，client 連線時由 server 從 ansibleHost map 補送

## 所有 schema 欄位

所有 schema 都包含 `cmd`（int）和 `mac`（string）欄位，用於識別來源機器。

## 開機時間計算

```
bootDuration = BootOS.timestamp - BootNet.timestamp
```

- `BootNet.timestamp` — server/monitor 收到 BootNet 的時間（ms）
- `BootOS.timestamp` — server/monitor 收到 BootOS 的時間（ms）
- `BootOS.boot_net` — server/monitor 從持久化資料填入的 BootNet timestamp，供 server 重啟後仍能正確計算開機時間

> 兩個 timestamp 均由 server/monitor 在收到時以 `Date.now()` 覆蓋，避免跨機器時鐘差異。

## Ansible checkbox 開關邏輯

收到 BootOS 後，server/monitor 用 IP 最後一碼組成 `pc_XX`（個位數補零，如 `pc_02`），
檢查 `host_vars/pc_XX.yml` 是否存在，存在則廣播 `AnsibleHosts(cmd=33, mac, enabled=true)`。
