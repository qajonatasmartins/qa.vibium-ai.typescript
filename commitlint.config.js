module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'feat',     // Nova funcionalidade
        'fix',      // Correção de bug
        'docs',     // Documentação
        'style',    // Formatação, ponto e vírgula faltando, etc
        'refactor', // Refatoração de código
        'test',     // Adicionando testes
        'chore',    // Manutenção de build, dependências, etc
        'perf',     // Melhorias de performance
        'ci',       // Mudanças em CI/CD
        'build',    // Mudanças no sistema de build
        'revert'    // Reverter um commit anterior
      ]
    ],
    'type-case': [2, 'always', 'lower-case'],
    'type-empty': [2, 'never'],
    'scope-case': [2, 'always', 'lower-case'],
    'subject-empty': [2, 'never'],
    'subject-full-stop': [2, 'never', '.'],
    'header-max-length': [2, 'always', 100],
    'body-leading-blank': [2, 'always'],
    'body-max-line-length': [2, 'always', 200]
  }
};

