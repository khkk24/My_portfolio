# Guia Completo: Ativar GitHub Pages

## 📋 Passo a Passo Detalhado

### 1️⃣ Acesse as Configurações do Repositório

1. Vá para: **https://github.com/khkk24/My_portfolio**
2. Clique na aba **"Settings"** (Configurações) no topo da página
   - É a última aba, com um ícone de engrenagem ⚙️

### 2️⃣ Ative o GitHub Pages

1. No menu lateral esquerdo, role para baixo até encontrar **"Pages"**
2. Clique em **"Pages"**
3. Na seção **"Source"** (Fonte):
   - Selecione: **"GitHub Actions"**
   - NÃO selecione "Deploy from a branch"

### 3️⃣ Aguarde o Workflow Executar

1. Vá para a aba **"Actions"** no repositório
2. Você verá um workflow chamado **"Deploy to GitHub Pages"**
3. Aguarde até aparecer um ✅ verde (pode levar 1-2 minutos)
4. Se aparecer ❌ vermelho, clique nele para ver o erro

### 4️⃣ Acesse o Site

Após o workflow terminar com sucesso:
- **URL do site**: https://khkk24.github.io/My_portfolio/

---

## 🔐 Configurar Token do GitHub (OPCIONAL)

### Para incluir repositórios privados:

1. Vá em: **https://github.com/khkk24/My_portfolio**
2. Clique em **Settings** (configurações do repositório)
3. No menu lateral esquerdo:
   - Expanda **"Secrets and variables"** (clique na setinha ▼)
   - Clique em **"Actions"**
4. Clique em **"New repository secret"**
5. Preencha:
   - **Name**: `GITHUB_TOKEN_PERSONAL`
   - **Secret**: Cole seu token do GitHub
6. Clique em **"Add secret"**

---

## ❗ Solução de Problemas

### Se o workflow falhar:

1. Vá em **Actions** → Clique no workflow que falhou
2. Veja os logs de erro
3. Possíveis soluções:
   - Execute: `npm run build` localmente para testar
   - Verifique se todas as dependências estão no package.json
   - Certifique-se que não há erros de TypeScript

### Se ainda mostrar 404:

1. Verifique se o workflow executou com sucesso (✅ verde)
2. Aguarde 5 minutos após o deploy
3. Tente acessar: https://khkk24.github.io/My_portfolio/
4. Limpe o cache do navegador (Ctrl + Shift + R)

---

## 📸 Onde Encontrar Cada Item

### Settings do Repositório:
```
github.com/khkk24/My_portfolio
     ↓
[< > Code] [Issues] [Pull requests] [Actions] [Projects] [Wiki] [Security] [Insights] [Settings] ← CLIQUE AQUI
```

### Menu Pages:
```
Settings → Menu Lateral Esquerdo:
├── General
├── Access
├── ...
├── Code and automation
│   ├── Pages ← CLIQUE AQUI
│   ├── ...
```

### Menu Secrets:
```
Settings → Menu Lateral Esquerdo:
├── ...
├── Secrets and variables ▼ ← CLIQUE NA SETINHA
│   ├── Actions ← CLIQUE AQUI
│   ├── Codespaces
│   └── Dependabot
```

---

## ✅ Checklist Final

- [ ] Settings → Pages → Source = "GitHub Actions"
- [ ] Aba Actions mostra workflow rodando
- [ ] Workflow terminou com ✅ verde
- [ ] Site acessível em: https://khkk24.github.io/My_portfolio/

---

## 🆘 Precisa de Ajuda?

Se nada funcionar, me avise qual erro aparece em:
1. Aba **Actions** (se houver ❌ vermelho)
2. O que está aparecendo quando acessa o link do site
