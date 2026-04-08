let schema = {
  name: 'InfoHashrate',
  type: 'record',
  doc: 'hashrate資訊, id=10',
  fields: [
    {name: 'cmd',  type: 'int'},
    {name: 'mac',  type: 'string'},
    {name: 'info', type: 'string'},
  ]
};
export { schema }