let schema = {
  name: 'DetailRAM',
  type: 'record',
  doc: 'RAM 詳細資訊（按需）, id=21',
  fields: [
    {name: 'cmd', type: 'int'},
    {name: 'mac', type: 'string'},
    {name: 'slots', type: {
      type: 'array',
      items: {
        name: 'RAMSlotDetail',
        type: 'record',
        fields: [
          {name: 'slot',         type: 'string'},
          {name: 'empty',        type: 'boolean'},
          {name: 'size',         type: 'string'},
          {name: 'type',         type: 'string'},
          {name: 'speed',        type: 'string'},
          {name: 'manufacturer', type: 'string'},
          {name: 'part',         type: 'string'},
        ]
      }
    }},
  ]
};
export { schema }
