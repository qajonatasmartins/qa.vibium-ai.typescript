# 🐺 Configuração do Husky

O Husky foi configurado no projeto para garantir qualidade e consistência do código. Siga os passos abaixo para finalizar a instalação.

## 📦 Instalação das Dependências

Execute o seguinte comando para instalar todas as dependências necessárias:

```bash
npm install --save-dev husky lint-staged @commitlint/cli @commitlint/config-conventional eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin
```

## 🔧 Inicialização do Husky

Após instalar as dependências, inicialize o Husky:

```bash
npx husky init
```

Ou se preferir fazer manualmente:

```bash
npx husky install
```

## ✅ Verificação

Para verificar se tudo está funcionando:

1. **Teste o pre-commit:**
   ```bash
   git add .
   git commit -m "test: verifica configuração do husky"
   ```

2. **Teste o commit-msg (deve falhar com mensagem inválida):**
   ```bash
   git commit -m "mensagem inválida"
   # Deve mostrar erro do commitlint
   ```

3. **Teste o commit-msg (deve passar com mensagem válida):**
   ```bash
   git commit -m "test: verifica configuração do husky"
   # Deve passar
   ```

## 📋 Padrão de Commits

O projeto utiliza o padrão **Conventional Commits**. Suas mensagens de commit devem seguir o formato:

```
tipo(escopo opcional): descrição

corpo opcional

rodapé opcional
```

### Tipos Permitidos:
- `feat`: Nova funcionalidade
- `fix`: Correção de bug
- `docs`: Documentação
- `style`: Formatação, ponto e vírgula faltando, etc
- `refactor`: Refatoração de código
- `test`: Adicionando testes
- `chore`: Manutenção de build, dependências, etc
- `perf`: Melhorias de performance
- `ci`: Mudanças em CI/CD
- `build`: Mudanças no sistema de build
- `revert`: Reverter um commit anterior

### Exemplos:

✅ **Válidos:**
```
feat: adiciona novo teste de login
fix: corrige erro de validação no menu
test: adiciona testes para componente de login
docs: atualiza documentação do projeto
refactor: melhora estrutura de custom commands
chore: atualiza dependências
```

❌ **Inválidos:**
```
adiciona teste
fix bug
teste
WIP
```

## 🎯 O que cada Hook faz

### pre-commit
- Executa ESLint nos arquivos TypeScript staged
- Verifica tipos TypeScript (`tsc --noEmit`)
- Bloqueia o commit se houver erros

### commit-msg
- Valida o formato da mensagem de commit
- Garante que segue o padrão Conventional Commits
- Bloqueia o commit se a mensagem for inválida

### pre-push
- Executa todos os testes (`npm test`)
- Verifica se o build está funcionando (`npm run build`)
- Bloqueia o push se houver falhas

## 🚨 Troubleshooting

### Erro: "command not found: husky"
Execute: `npm install` para instalar as dependências.

### Erro: "husky: command not found"
Certifique-se de que o script `prepare` está no `package.json` e execute `npm install`.

### Hooks não estão executando
1. Verifique se a pasta `.husky` existe
2. Verifique se os arquivos têm permissão de execução: `chmod +x .husky/*`
3. Execute `npx husky install` novamente

### Pular validações (não recomendado)
```bash
# Pular pre-commit
git commit --no-verify -m "mensagem"

# Pular pre-push
git push --no-verify
```

## 📚 Documentação Adicional

- [Husky](https://typicode.github.io/husky/)
- [lint-staged](https://github.com/okonet/lint-staged)
- [commitlint](https://commitlint.js.org/)
- [Conventional Commits](https://www.conventionalcommits.org/)

