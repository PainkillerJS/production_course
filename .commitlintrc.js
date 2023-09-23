module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    // Перечислим все возможные варианты коммитов
    'type-enum': [
      2,
      'always',
      ['build', 'docs', 'feat', 'fix', 'refactor', 'revert', 'style', 'test']
    ]
  }
};
