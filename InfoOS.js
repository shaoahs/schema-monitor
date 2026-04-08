let schema = {
  name: 'InfoOS',
  type: 'record',
  doc: '作業系統資訊, id=9',
  fields: [
    {name: 'cmd',     type: 'int'},
    {name: 'mac',     type: 'string'},
    {name: 'os',      type: 'string'},
    {name: 'app_nfs', type: 'boolean'},
  ]
};
export { schema }
