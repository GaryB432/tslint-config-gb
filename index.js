const rules = {
  'interface-name': [true, 'never-prefix'],
  'member-ordering': [true, { order: 'instance-sandwich' }],
  "object-literal-sort-keys": true,
  'variable-name': [
    true,
    'ban-keywords',
    'check-format',
    'allow-leading-underscore',
  ],
};

module.exports = {
  rules,
};
