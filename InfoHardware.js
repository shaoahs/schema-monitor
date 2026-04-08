let schema = {
  name: 'InfoHardware',
  type: 'record',
  doc: '硬體資訊, id=6',
  fields: [
    {name: 'cmd',       type: 'int'},
    {name: 'mac',       type: 'string'},
    {name: 'board',     type: 'string'},
    {name: 'ram_slots', type: 'string'},
    {name: 'pcie',      type: 'string'},
  ]
};
export { schema }
