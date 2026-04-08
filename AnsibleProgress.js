let schema = {
  name: 'AnsibleProgress',
  type: 'record',
  doc: 'server 回傳 ansible 執行進度, id=31',
  fields: [
    { name: 'cmd',      type: 'int' },
    { name: 'mac',      type: 'string' },
    { name: 'hostname', type: 'string' },
    { name: 'task',     type: 'string' },
  ]
};
export { schema }
