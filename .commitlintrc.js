module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    // Перечислим все возможные варианты коммитов
    'type-enum': [2, 'always', ['docs', 'feat', 'fix', 'refactor', 'revert', 'style', 'test']],
    // Тип всегда только в нижнем регистре
    'type-case': [2, 'always', 'lower-case'],
    // Максимальная длина заголовка 100 символа
    'header-max-length': [2, 'always', 100],
    // Описание не может быть пустым
    'subject-empty': [2, 'never'],
    // Описание не должно заканчиваться '.'
    'subject-full-stop': [2, 'never', '.'],
    // Тип не может быть пустым
    'type-empty': [2, 'never']
  }
};
