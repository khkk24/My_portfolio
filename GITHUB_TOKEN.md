# Configuração de Token do GitHub

Para buscar **repositórios privados** do GitHub, siga estes passos:

## 1. Criar um Personal Access Token (PAT) no GitHub

1. Acesse: https://github.com/settings/tokens
2. Clique em **"Generate new token"** → **"Generate new token (classic)"**
3. Dê um nome descritivo (ex: "Portfolio Website")
4. Selecione o escopo: **`repo`** (acesso completo a repositórios privados)
5. Clique em **"Generate token"**
6. **Copie o token** (você não poderá vê-lo novamente!)

## 2. Adicionar o Token ao Projeto

Edite o arquivo `.env.local` na raiz do projeto:

```bash
NEXT_PUBLIC_GITHUB_TOKEN=seu_token_aqui
```

**Exemplo:**
```bash
NEXT_PUBLIC_GITHUB_TOKEN=ghp_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

## 3. Reiniciar o Servidor

Pare o servidor (Ctrl+C) e inicie novamente:

```bash
npm run dev
```

## 4. Resultado

✅ Agora a API buscará **todos os repositórios** (públicos + privados)
✅ O parâmetro `type=all` foi adicionado automaticamente

## ⚠️ Segurança

- **NUNCA** faça commit do arquivo `.env.local` no Git
- O arquivo já está no `.gitignore` para proteção
- Para produção (Vercel, Netlify, etc.), adicione a variável de ambiente nas configurações da plataforma

## Sem Token

Se não adicionar o token, o sistema continuará funcionando normalmente, mas mostrará apenas repositórios **públicos**.
