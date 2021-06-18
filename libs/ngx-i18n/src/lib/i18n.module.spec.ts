/**
 * @license
 * Copyright Neekware Inc. All Rights Reserved.
 *
 * Use of this source code is governed by a proprietary notice
 * that can be found at http://neekware.com/license/PRI.html
 */

import { TestBed, waitForAsync } from '@angular/core/testing';

import { I18nModule } from './i18n.module';

describe('I18nModule', () => {
  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [I18nModule],
      }).compileComponents();
    })
  );

  it('should have a module definition', () => {
    expect(I18nModule).toBeDefined();
  });
});
