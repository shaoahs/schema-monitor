let schema = {
  name: 'ServerInfo',
  type: 'record',
  doc: 'server 啟動資訊',
  fields: [
    { name: 'cmd',        type: 'int' },
    { name: 'started_at', type: 'string' },
  ]
}
export { schema }
