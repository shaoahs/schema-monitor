let schema = {
  name: 'InfoStatus',
  type: 'record',
  doc: '狀態資訊（hashrate pool + NFS）, id=14',
  fields: [
    {name: 'cmd',           type: 'int'},
    {name: 'mac',           type: 'string'},
    {name: 'pool',          type: 'string'},
    {name: 'pool_failures', type: 'int'},
    {name: 'app_nfs',       type: 'boolean'},
  ]
};
export { schema }
