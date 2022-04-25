import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {NoopInterceptor} from "./noop-interceptor";

export function provideHttpInterceptors() {
  return [
    {provide: HTTP_INTERCEPTORS, useClass: NoopInterceptor, multi: true},
  ]
}
