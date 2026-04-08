let schema = {
  name: 'InfoProc',
  type: 'record',
  doc: '前20筆程式使用量, id=15',
  fields: [
    {name: 'cmd', type: 'int'},
    {name: 'mac', type: 'string'},
    {name: 'procs', type: {
      type: 'array',
      items: {
        name: 'ProcEntry',
        type: 'record',
        fields: [
          {name: 'pid',      type: 'int'},
          {name: 'name',     type: 'string'},
          {name: 'cpu_pct',  type: 'double'},
          {name: 'ram_bytes',type: 'long'},
        ]
      }
    }},
  ]
};
export { schema }
