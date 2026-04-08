let schema = {
  name: 'InfoCPU',
  type: 'record',
  doc: 'CPU 資訊, id=7',
  fields: [
    {name: 'cmd',      type: 'int'},
    {name: 'mac',      type: 'string'},
    {name: 'model',    type: 'string'},
    {name: 'cores',    type: 'int'},
    {name: 'threads',  type: 'int'},
    {name: 'max_mhz',  type: 'string'},
  ]
};
export { schema }
