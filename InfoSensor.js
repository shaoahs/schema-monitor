let schema = {
  name: 'InfoSensor',
  type: 'record',
  doc: '溫度感測器資訊, id=16',
  fields: [
    {name: 'cmd',     type: 'int'},
    {name: 'mac',     type: 'string'},
    {name: 'sensors', type: {type: 'array', items: {
      type: 'record', name: 'SensorEntry',
      fields: [
        {name: 'label',   type: 'string'},
        {name: 'celsius', type: 'float'},
      ]
    }}},
  ]
};
export { schema }
