let schema = {
  name: 'DetailCPU',
  type: 'record',
  doc: 'CPU 詳細資訊（按需）, id=22',
  fields: [
    {name: 'cmd',        type: 'int'},
    {name: 'mac',        type: 'string'},
    {name: 'flags',      type: 'string'},
    {name: 'cache_l1d',  type: 'string'},
    {name: 'cache_l1i',  type: 'string'},
    {name: 'cache_l2',   type: 'string'},
    {name: 'cache_l3',   type: 'string'},
    {name: 'numa_nodes', type: 'int'},
    {name: 'sockets',    type: 'int'},
  ]
};
export { schema }
