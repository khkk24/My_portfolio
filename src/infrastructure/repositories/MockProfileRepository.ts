import { IProfileRepository } from '@domain/repositories/IProfileRepository';
import { Profile } from '@domain/entities/Profile';

export class MockProfileRepository implements IProfileRepository {
  async get(): Promise<Profile> {
    return {
      id: '1',
      name: 'Kokouvi Hola Kanyi Kodjovi',
      title: 'Computer Scientist | AI & Data Science Specialist',
      subtitle: 'Academic Researcher | Master\'s Student in Computer Vision',
      bio: `Cientista da computação com sólida formação acadêmica e experiência profissional em Inteligência Artificial e Ciência de Dados. Atualmente mestrando com foco em Visão Computacional, com histórico comprovado no desenvolvimento de soluções de IA para empresas. Combinando rigor acadêmico com aplicação prática, busco contribuir para o avanço da tecnologia através de pesquisa inovadora e desenvolvimento de sistemas inteligentes.`,
      avatar: '/avatar.jpg',
      email: 'franciscokn3@gmail.com',
      github: 'https://github.com/khkk24',
      linkedin: 'https://linkedin.com/in/seu-usuario',
    };
  }
}
