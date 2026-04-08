let schema = {
  name: 'UsageNETInit',
  type: 'record',
  doc: '網路初始化（連線時送一次）, id=13',
  fields: [
    {name: 'cmd', type: 'int'},
    {name: 'mac', type: 'string'},
    {name: 'ifaces', type: {
      type: 'array',
      items: {
        name: 'NetIfaceInit',
        type: 'record',
        fields: [
          {name: 'iface',    type: 'string'},
          {name: 'link_mbps',type: 'int'},
        ]
      }
    }},
  ]
};
export { schema }
