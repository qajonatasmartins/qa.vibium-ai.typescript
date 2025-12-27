# Husky Hooks

Este projeto utiliza o Husky para garantir qualidade e consistência do código através de hooks Git.

## Hooks Configurados

### 🔍 pre-commit
Executado antes de cada commit:
- Valida e corrige código com ESLint (apenas arquivos staged)
- Verifica tipos TypeScript

### 📝 commit-msg
Valida a mensagem de commit seguindo o padrão Conventional Commits:
- Formato: `tipo(escopo): descrição`
- Tipos permitidos: `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`, `perf`, `ci`, `build`, `revert`

**Exemplos válidos:**
```
feat: adiciona novo teste de login
fix: corrige erro de validação
test: adiciona testes para menu
docs: atualiza README
refactor: melhora estrutura de custom commands
```

### 🚀 pre-push
Executado antes de cada push:
- Executa todos os testes
- Verifica se o build está funcionando

## Como Funciona

1. **Ao fazer commit**: O código é validado automaticamente
2. **Se houver erros**: O commit é bloqueado até que sejam corrigidos
3. **Ao fazer push**: Os testes são executados para garantir que tudo está funcionando

## Pular Validações (Não Recomendado)

Se precisar pular as validações (apenas em casos excepcionais):

```bash
# Pular pre-commit
git commit --no-verify -m "mensagem"

# Pular pre-push
git push --no-verify
```

⚠️ **Atenção**: Use apenas em casos excepcionais e com conhecimento do impacto.

