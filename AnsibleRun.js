let schema = {
  name: 'AnsibleRun',
  type: 'record',
  doc: 'client 請求執行 ansible, id=30',
  fields: [
    { name: 'cmd',         type: 'int' },
    { name: 'mac',         type: 'string' },
    { name: 'hostname',    type: 'string' },
    { name: 'monero_mode', type: 'string' }, // 'solo' | 'pool'
    { name: 'tags',        type: 'string' }, // ansible --tags, empty = no tag
  ]
};
export { schema }
