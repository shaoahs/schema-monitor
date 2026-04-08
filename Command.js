let schema = {
  name: 'Command',
  type: 'record',
  doc: '命令代碼',
  fields: [
    { name: 'cmd', type: 'int'},
  ]
}
export {
    schema
}