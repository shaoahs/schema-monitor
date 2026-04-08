let schema = {
  name: 'DetailNET',
  type: 'record',
  doc: '網路詳細資訊（按需）, id=23',
  fields: [
    {name: 'cmd', type: 'int'},
    {name: 'mac', type: 'string'},
    {name: 'ifaces', type: {
      type: 'array',
      items: {
        name: 'NetIfaceDetail',
        type: 'record',
        fields: [
          {name: 'iface',      type: 'string'},
          {name: 'mac_addr',   type: 'string'},
          {name: 'driver',     type: 'string'},
          {name: 'vendor',     type: 'string'},
          {name: 'link_mbps',  type: 'int'},
          {name: 'max_mbps',   type: 'int'},
          {name: 'ip',         type: 'string'},
        ]
      }
    }},
  ]
};
export { schema }
