/**
 * @license
 * Copyright Neekware Inc. All Rights Reserved.
 *
 * Use of this source code is governed by a proprietary notice
 * that can be found at http://neekware.com/license/PRI.html
 */

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ApplicationConfig, ConfigModule } from '@fullerstack/ngx-config';
import { GqlModule } from '@fullerstack/ngx-gql';
import { makeMockI18nModule } from '@fullerstack/ngx-i18n/mock';
import { JwtModule } from '@fullerstack/ngx-jwt';
import { LogLevels, LoggerModule } from '@fullerstack/ngx-logger';
import { MsgModule } from '@fullerstack/ngx-msg';
import { NgxsModule } from '@ngxs/store';

import { AuthModule } from '../auth.module';
import { AuthEffectsService } from './auth-state.effect';

export const environment: ApplicationConfig = {
  appName: 'Fullerstack',
  production: false,
  logger: { level: LogLevels.trace },
  gql: { endpoint: '/graphql' },
};

// disable console log during test
jest.spyOn(console, 'log').mockImplementation(() => undefined);

describe('Auth: AuthEffectsService', () => {
  let service: AuthEffectsService;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [
          HttpClientTestingModule,
          RouterTestingModule,
          NgxsModule.forRoot([]),
          NgxsModule.forFeature([]),
          ConfigModule.forRoot(environment),
          LoggerModule,
          ...makeMockI18nModule(),
          JwtModule,
          GqlModule,
          MsgModule,
          AuthModule,
        ],
        providers: [AuthEffectsService],
      });

      service = TestBed.inject(AuthEffectsService);
    })
  );

  afterAll(() => {
    service = null;
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
