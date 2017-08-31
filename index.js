const rules = {
  'interface-name': [true, 'never-prefix'],
  'member-ordering': [true, { order: 'instance-sandwich' }],
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
