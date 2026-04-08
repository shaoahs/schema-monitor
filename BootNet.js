let schema = {
  name: 'BootNet',
  type: 'record',
  doc: '網路開機 ipxe, id=1',
  fields: [
    {name: 'cmd', type: 'int'},
    {name: 'timestamp', type: 'string'},
    {name: 'mac', type: 'string'},
    {name: 'ip', type: 'string'},
    {name: 'bootfile', type: 'string'}
  ]
};
export {
    schema
}