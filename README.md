<<<<<<< HEAD
# Portfolio Profissional

Site portfólio profissional construído com Next.js, TypeScript e arquitetura DDD + Atomic Design.

## 🚀 Tecnologias

- **Next.js 14** - Framework React com SSR/SSG
- **TypeScript** - Tipagem estática
- **TailwindCSS** - Estilização
- **React Query** - Gerenciamento de estado assíncrono
- **i18next** - Internacionalização (PT, FR, EN)
- **Framer Motion** - Animações
- **Lucide React** - Ícones

## 📁 Arquitetura

### DDD (Domain-Driven Design)

```
src/
├── domain/              # Entidades e regras de negócio
│   ├── entities/
│   └── repositories/
├── application/         # Casos de uso
│   └── usecases/
├── infrastructure/      # Implementações técnicas
│   ├── repositories/
│   └── i18n/
└── presentation/        # Componentes visuais
    ├── components/
    ├── hooks/
    └── pages/
```

### Atomic Design

```
components/
├── atoms/           # Componentes básicos (Button, Text, Icon)
├── molecules/       # Combinações simples (Card, NavItem)
├── organisms/       # Componentes complexos (Navbar, Timeline)
└── templates/       # Layouts
```

## 🎨 Features

- ✅ Design minimalista preto e branco
- ✅ Totalmente responsivo
- ✅ Multilíngue (PT, FR, EN)
- ✅ Integração com GitHub API
- ✅ Animações sutis com Framer Motion
- ✅ Timeline profissional
- ✅ Grid de projetos do GitHub
- ✅ Banner de estatísticas
- ✅ SEO otimizado

## 🛠️ Instalação

```bash
# Instalar dependências
npm install

# Desenvolvimento
npm run dev

# Build de produção
npm run build

# Iniciar produção
npm start
```

## ⚙️ Configuração

### Dados Pessoais

Edite os arquivos em `src/infrastructure/repositories/`:

1. **MockProfileRepository.ts** - Seus dados pessoais
2. **MockExperienceRepository.ts** - Sua trajetória profissional
3. **useProjects.ts** - Seu username do GitHub

### Traduções

Os arquivos de tradução estão em `src/infrastructure/i18n/locales/`:
- `pt.json` - Português
- `fr.json` - Francês
- `en.json` - Inglês

### Avatar

Coloque sua foto em `public/avatar.jpg`

## 📊 Estatísticas

As estatísticas são configuradas em `src/app/page.tsx`:

```typescript
const stats = {
  projectsCount: 15,
  yearsExperience: 5,
  publications: 8,
  institutions: ['UFPR', 'UTFPR'],
};
```

## 🌐 Deploy

### Vercel (Recomendado)

```bash
npm i -g vercel
vercel
```

### Outros

O projeto pode ser deployado em qualquer plataforma que suporte Next.js:
- Netlify
- AWS Amplify
- Digital Ocean
- Railway

## 📝 Personalização

### Cores

As cores estão definidas em `tailwind.config.ts`:

```typescript
colors: {
  primary: '#000000',    // Preto
  secondary: '#ffffff',  // Branco
  accent: '#333333',     // Cinza
}
```

### Fontes

A fonte padrão é Inter. Para alterar, edite `src/app/layout.tsx`

## 🔧 Estrutura de Componentes

### Atoms
- `Button` - Botão com variantes (primary, secondary, outline)
- `Text` - Tipografia (h1, h2, h3, h4, body, small)
- `Icon` - Wrapper para ícones

### Molecules
- `Card` - Container com estilo
- `NavItem` - Item de navegação
- `SocialLinks` - Links sociais
- `StatCard` - Card de estatística
- `ProjectCard` - Card de projeto

### Organisms
- `Navbar` - Navegação principal
- `HeroBanner` - Banner hero com foto
- `StatsBanner` - Banner de estatísticas
- `AboutSection` - Seção sobre
- `Timeline` - Timeline vertical
- `ProjectsGrid` - Grid de projetos
- `Footer` - Rodapé

## 📱 Responsividade

O site é totalmente responsivo com breakpoints:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## ⚡ Performance

- Code splitting automático
- Lazy loading de imagens
- Cache de requisições (React Query)
- Revalidação da GitHub API a cada 1 hora

## 🌍 Internacionalização

Troca de idioma com persistência em localStorage:
- Detector automático de idioma do navegador
- Seletor manual no navbar
- Textos completamente separados do código

## 📄 Licença

MIT

## 👤 Autor

Seu Nome - [GitHub](https://github.com/khkk24)
=======
# My_portfolio
Meu link Profissional
>>>>>>> 3797b79fe54d35cb472b38e4332b88a21dd91349
