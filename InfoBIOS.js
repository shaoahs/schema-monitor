let schema = {
  name: 'InfoBIOS',
  type: 'record',
  doc: 'BIOS 資訊, id=8',
  fields: [
    {name: 'cmd',     type: 'int'},
    {name: 'mac',     type: 'string'},
    {name: 'vendor',  type: 'string'},
    {name: 'version', type: 'string'},
    {name: 'date',    type: 'string'},
  ]
};
export { schema }
