let schema = {
  name: 'UsageCPU',
  type: 'record',
  doc: 'CPU使用量（更新）, id=4',
  fields: [
    {name: 'cmd', type: 'int'},
    {name: 'mac', type: 'string'},
    {name: 'pct', type: 'double'},
    {name: 'mhz', type: 'int'},
  ]
};
export { schema }
