let schema = {
  name: 'UsageNET',
  type: 'record',
  doc: '網路使用量（更新）, id=5',
  fields: [
    {name: 'cmd', type: 'int'},
    {name: 'mac', type: 'string'},
    {name: 'ifaces', type: {
      type: 'array',
      items: {
        name: 'NetIface',
        type: 'record',
        fields: [
          {name: 'iface',  type: 'string'},
          {name: 'rx_bps', type: 'long'},
          {name: 'tx_bps', type: 'long'},
        ]
      }
    }},
  ]
};
export { schema }
