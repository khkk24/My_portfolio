import { IProfileRepository } from '@domain/repositories/IProfileRepository';
import { Profile } from '@domain/entities/Profile';

export class GetProfile {
  constructor(private readonly profileRepository: IProfileRepository) {}

  async execute(): Promise<Profile> {
    return await this.profileRepository.get();
  }
}
