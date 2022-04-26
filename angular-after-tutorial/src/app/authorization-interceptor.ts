import {Injectable} from "@angular/core";
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable()
export class AuthorizationInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // reqはimmutableなのでcloneメソッドでリクエストを改変する
    const newReq = req.clone({
      headers: req.headers.set('Authorization', "認証後のToken")
    });
    return next.handle(newReq);
  }
}
