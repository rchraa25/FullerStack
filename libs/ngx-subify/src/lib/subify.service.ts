import { Injectable, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { SubifyManager } from './subify.manager';

/** An injectable service class that handles auto cancellation of subscriptions */
@Injectable()
export class SubifyService extends SubifyManager implements OnDestroy {
  destroy$ = new Subject<boolean>();

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
    this.unsubscribe();
  }
}
