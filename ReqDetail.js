let schema = {
  name: 'ReqDetail',
  type: 'record',
  doc: 'client 請求詳細資料, id=20',
  fields: [
    {name: 'cmd',  type: 'int'},
    {name: 'mac',  type: 'string'},
    {name: 'type', type: 'string'}, // 'ram' | 'cpu' | 'net' | 'proc'
  ]
};
export { schema }
