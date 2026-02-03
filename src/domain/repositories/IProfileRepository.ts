import { Profile } from '@domain/entities/Profile';

export interface IProfileRepository {
  get(): Promise<Profile>;
}
