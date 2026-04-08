let schema = {
  name: 'AnsibleDone',
  type: 'record',
  doc: 'server 回傳 ansible 執行完成, id=32',
  fields: [
    { name: 'cmd',         type: 'int' },
    { name: 'mac',         type: 'string' },
    { name: 'hostname',    type: 'string' },
    { name: 'ok',          type: 'int' },
    { name: 'changed',     type: 'int' },
    { name: 'failed',      type: 'int' },
    { name: 'unreachable', type: 'int' },
    { name: 'started_at',  type: 'long' }, // ms timestamp
    { name: 'finished_at', type: 'long' }, // ms timestamp
  ]
};
export { schema }
