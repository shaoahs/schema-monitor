let schema = {
  name: 'UsageRAMInit',
  type: 'record',
  doc: '記憶體初始化（連線時送一次）, id=11',
  fields: [
    {name: 'cmd',        type: 'int'},
    {name: 'mac',        type: 'string'},
    {name: 'total_bytes',type: 'long'},
  ]
};
export { schema }
