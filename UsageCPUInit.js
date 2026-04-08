let schema = {
  name: 'UsageCPUInit',
  type: 'record',
  doc: 'CPU初始化（連線時送一次）, id=12',
  fields: [
    {name: 'cmd',     type: 'int'},
    {name: 'mac',     type: 'string'},
    {name: 'max_mhz', type: 'int'},
  ]
};
export { schema }
