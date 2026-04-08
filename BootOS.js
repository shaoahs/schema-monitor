let schema = {
  name: 'BootOS',
  type: 'record',
  doc: '作業系統開機, id=2',
  fields: [
    {name: 'cmd',       type: 'int'},
    {name: 'timestamp', type: 'string'},
    {name: 'mac',       type: 'string'},
    {name: 'hostname',  type: 'string'},
    {name: 'os',        type: 'string'},
    {name: 'ip',        type: 'string', default: ''},
    {name: 'boot_net',  type: 'string', default: ''},
  ]
};
export {
    schema
}