module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        ':aaa',
        ':bug:',
        ':art:',
        ':tada:',
        ':bento:',
        'test'
      ]
    ],
    'type-case': [0, 'never', 'lower-case'],
    'subject-case': [2, 'always', 'sentence-case'],
    'subject-empty': [0, 'never']
  }
};
