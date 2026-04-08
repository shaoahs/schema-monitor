let schema = {
  name: 'AnsibleHosts',
  type: 'record',
  doc: 'ansible 可用狀態, id=33',
  fields: [
    { name: 'cmd',     type: 'int' },
    { name: 'mac',     type: 'string' },
    { name: 'enabled', type: 'boolean' },
  ]
};
export { schema };
