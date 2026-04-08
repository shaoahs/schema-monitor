let schema = {
  name: 'UsageRAM',
  type: 'record',
  doc: '記憶體使用量（更新）, id=3',
  fields: [
    {name: 'cmd',        type: 'int'},
    {name: 'mac',        type: 'string'},
    {name: 'used_bytes', type: 'long'},
    {name: 'total_bytes',type: 'long'},
  ]
};
export { schema }
