module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'gitmoji-rule': [2, 'always'],
    'type-empty': [0, 'never'],
    'subject-empty': [2, 'always']
  },
  plugins: [
    {
      rules: {
        'gitmoji-rule': ({raw}) => {
          const type = raw.match(/.*:/)[0]
          return [
            gitmojiTypes.find(x => x === type),
            `This type (${type}) is not available.`,
          ];
        }
      },
    },
  ],
};

const gitmojiTypes = [
  ':bug:',
  ':+1:',
  ':sparkles:',
  ':books:',
  ':up:',
  ':skull:',
  ':hammer:',
  ':+1::books:',
  ':sparkles::books:',
  ':hammer::books:',
]