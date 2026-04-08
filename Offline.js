let schema = {
  name: 'Offline',
  type: 'record',
  doc: '設備離線通知, id=24',
  fields: [
    { name: 'cmd', type: 'int' },
    { name: 'mac', type: 'string' },
  ]
};
export { schema }
