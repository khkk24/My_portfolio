# Personalização do Portfolio

## 1. Dados Pessoais

### Avatar
Adicione sua foto profissional em:
```
public/avatar.jpg
```

### Informações Básicas
Edite `/src/infrastructure/repositories/MockProfileRepository.ts`:

```typescript
return {
  id: '1',
  name: 'SEU NOME COMPLETO',
  title: 'Computer Scientist | AI & Data Science Specialist',
  subtitle: 'Academic Researcher | Master\'s Student in Computer Vision',
  bio: `SUA BIOGRAFIA COMPLETA AQUI`,
  avatar: '/avatar.jpg',
  email: 'seu.email@example.com',
  github: 'https://github.com/seu-usuario',
  linkedin: 'https://linkedin.com/in/seu-usuario',
};
```

## 2. Experiências e Timeline

Edite `/src/infrastructure/repositories/MockExperienceRepository.ts`:

```typescript
{
  id: '1',
  type: 'academic', // 'professional' | 'academic' | 'project' | 'achievement'
  title: 'Título da Posição',
  organization: 'Nome da Organização',
  description: 'Descrição detalhada',
  startDate: new Date('2023-03-01'),
  endDate: new Date('2024-12-31'), // Opcional se current: true
  current: false,
  location: 'Cidade, Estado',
  tags: ['Tag1', 'Tag2', 'Tag3'],
}
```

## 3. Projetos do GitHub

Edite `/src/presentation/hooks/useProjects.ts`:

```typescript
const GITHUB_USERNAME = 'seu-usuario-github';
```

Os projetos serão carregados automaticamente da API do GitHub.

## 4. Estatísticas

Edite `/src/app/page.tsx`:

```typescript
const stats = {
  projectsCount: 15,        // Número de projetos
  yearsExperience: 5,       // Anos de experiência
  publications: 8,          // Publicações acadêmicas
  institutions: ['UFPR', 'UTFPR'], // Instituições
};
```

## 5. Traduções

### Português (`src/infrastructure/i18n/locales/pt.json`)
### Francês (`src/infrastructure/i18n/locales/fr.json`)
### Inglês (`src/infrastructure/i18n/locales/en.json`)

Estrutura:
```json
{
  "nav": {
    "home": "Início",
    "projects": "Projetos",
    ...
  },
  "hero": {
    "greeting": "Olá, eu sou",
    ...
  }
}
```

## 6. Cores e Tema

Edite `tailwind.config.ts`:

```typescript
colors: {
  primary: {
    DEFAULT: '#000000',  // Cor principal
    light: '#1a1a1a',
    dark: '#000000',
  },
  secondary: {
    DEFAULT: '#ffffff',  // Cor secundária
    light: '#f5f5f5',
    dark: '#e5e5e5',
  },
  accent: {
    DEFAULT: '#333333',  // Cor de destaque
    light: '#666666',
    dark: '#1a1a1a',
  },
}
```

## 7. SEO e Metadados

Edite `src/app/layout.tsx`:

```typescript
export const metadata: Metadata = {
  title: 'Seu Título',
  description: 'Sua Descrição',
  keywords: 'suas, palavras, chave',
};
```

## 8. Animações

As animações estão configuradas com Framer Motion. Para ajustar:

```typescript
// Duração
transition={{ duration: 0.6 }}

// Delay
transition={{ delay: 0.2 }}

// Tipo
initial={{ opacity: 0, y: 20 }}
animate={{ opacity: 1, y: 0 }}
```

## 9. Fontes

Para alterar a fonte, edite `src/app/layout.tsx`:

```typescript
import { Inter } from 'next/font/google';
// Substitua por sua fonte preferida

const suaFonte = Inter({ subsets: ['latin'] });
```

## 10. Links do Navbar

Para adicionar/remover links, edite `src/presentation/components/organisms/Navbar.tsx`:

```typescript
const navItems = [
  { href: '#home', label: t('nav.home') },
  { href: '#projects', label: t('nav.projects') },
  // Adicione aqui
];
```

## 11. Redes Sociais

Para adicionar mais redes, edite `src/presentation/components/molecules/SocialLinks.tsx`:

```typescript
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

// Adicione novos ícones
<a href={twitter}>
  <Twitter size={iconSize} />
</a>
```

## 12. Favicon

Adicione seu favicon em:
```
public/favicon.ico
```

## Comandos Úteis

```bash
# Instalar dependências
npm install

# Desenvolvimento
npm run dev

# Build
npm run build

# Verificar tipos
npm run type-check

# Lint
npm run lint
```
