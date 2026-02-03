import { IAcademicRepository } from '@domain/repositories/IAcademicRepository';
import { Academic } from '@domain/entities/Academic';

export class MockAcademicRepository implements IAcademicRepository {
  private academics: Academic[] = [
    {
      id: '1',
      type: 'certification',
      title: 'Data Science Bootcamp of Excel by EBANX',
      institution: 'EBANX',
      description: 'Bootcamp intensivo de seis meses em Data Science focado em machine learning, análise de dados e ferramentas estatísticas. Desenvolvimento prático de projetos de ciência de dados com aplicações reais.',
      startDate: new Date('2025-07-01'),
      endDate: new Date('2025-12-20'),
      current: false,
      location: 'Curitiba, Brasil',
      fieldOfStudy: 'Data Science',
    },
    {
      id: '2',
      type: 'degree',
      title: 'Pós-Graduação em Processamento de Linguagem Natural',
      institution: 'Universidade Federal do Paraná (UFPR)',
      description: 'Especialização em técnicas avançadas de Processamento de Linguagem Natural (NLP), incluindo modelos de linguagem, análise semântica e aplicações práticas em IA conversacional.',
      startDate: new Date('2024-02-01'),
      current: true,
      location: 'Curitiba, Brasil',
      degree: 'Pós-Graduação',
      fieldOfStudy: 'Natural Language Processing (NLP)',
    },
    {
      id: '3',
      type: 'degree',
      title: 'Bacharelado em Ciência da Computação',
      institution: 'Universidade Federal do Paraná (UFPR)',
      description: 'Formação completa em Ciência da Computação com pesquisa em Processamento de Linguagem Natural focada em Navegação Semântica de Palavras (Word Semantic Navigation) para o contexto Sertão-Baiano.',
      startDate: new Date('2017-02-01'),
      current: true,
      location: 'Curitiba, Brasil',
      degree: 'Bacharel',
      fieldOfStudy: 'Ciência da Computação',
    },
    {
      id: '4',
      type: 'degree',
      title: 'Mestrado Profissional em Informática',
      institution: 'Universidade Tecnológica Federal do Paraná (UTFPR)',
      description: 'Mestrado focado em aplicações práticas de informática e desenvolvimento de soluções tecnológicas inovadoras. Projeto final envolvendo o desenvolvimento de um sistema inteligente para análise de dados.',
      startDate: new Date('2025-07-15'),
      current: true,
      location: 'Cornelio Procopio, Brasil',
      degree: 'Mestrado',
      fieldOfStudy: 'Ciência da Computação',
    },
    {
      id: '5',
      type: 'certification',
      title: 'CELIN-BRAS - Certificação de Proficiência em Português',
      institution: 'Centro de Línguas e Interculturalidade (CELIN)',
      description: 'Participação no Seminário de Português e certificação oficial brasileira de proficiência em língua portuguesa (CELPE-BRAS).',
      startDate: new Date('2017-01-01'),
      endDate: new Date('2017-01-31'),
      current: false,
      location: 'Curitiba, Brasil',
      fieldOfStudy: 'Língua Portuguesa',
    },
  ];

  async getAll(): Promise<Academic[]> {
    return this.academics;
  }

  async getByType(type: string): Promise<Academic[]> {
    return this.academics.filter((academic) => academic.type === type);
  }

  async getTimeline(): Promise<Academic[]> {
    return this.academics.sort((a, b) => {
      return new Date(b.startDate).getTime() - new Date(a.startDate).getTime();
    });
  }
}
