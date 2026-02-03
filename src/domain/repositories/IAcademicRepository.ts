import { Academic } from '@domain/entities/Academic';

export interface IAcademicRepository {
  getAll(): Promise<Academic[]>;
  getByType(type: string): Promise<Academic[]>;
  getTimeline(): Promise<Academic[]>;
}
