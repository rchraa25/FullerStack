import { PrismaService } from '@fullerstack/nsx-prisma';
import { ConfigService } from '@nestjs/config';
import { Test } from '@nestjs/testing';
import { SecurityService } from './auth.security.service';
import { AuthGuardGql } from './auth.guard.gql';

describe('AuthGuardGql', () => {
  let service: AuthGuardGql;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [PrismaService, ConfigService, SecurityService, AuthGuardGql],
    }).compile();

    service = module.get(AuthGuardGql);
  });

  it('should be defined', () => {
    expect(service).toBeTruthy();
  });
});