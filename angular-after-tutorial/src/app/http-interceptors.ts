import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {NoopInterceptor} from "./noop-interceptor";
import {AuthorizationInterceptor} from "./authorization-interceptor";

// providerの定義順にInterceptorが実行されるので、一箇所に集約する
export function provideHttpInterceptors() {
  return [
    {provide: HTTP_INTERCEPTORS, useClass: NoopInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: AuthorizationInterceptor, multi: true},
  ]
}
