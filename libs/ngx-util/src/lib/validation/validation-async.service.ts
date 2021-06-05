import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidatorFn, ValidationErrors } from '@angular/forms';
import { GqlService } from '@fullerstack/ngx-gql';
import { Observable, from, of as observableOf, of, timer } from 'rxjs';
import { catchError, map, switchMapTo, take } from 'rxjs/operators';

@Injectable()
export class ValidationAsyncService {
  constructor(readonly gql: GqlService) {}

  validateEmailAvailability(debounce = 600): AsyncValidatorFn {
    return (
      control: AbstractControl
    ): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> => {
      return timer(debounce).pipe(
        switchMapTo(
          from(
            of({ data: { emailFound: false } })
            // this.gql.client.query<schema.EmailFoundQuery>({
            //   query: EmailFoundQueryNode,
            //   variables: { email: control.value },
            // })
          ).pipe(map(({ data }) => data.emailFound))
        ),
        map((exists) => (exists ? { emailInUse: true } : null)),
        catchError((error) => {
          console.error(error);
          return observableOf({ serverError: true });
        }),
        take(1)
      );
    };
  }
}