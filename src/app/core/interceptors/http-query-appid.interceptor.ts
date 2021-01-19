import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpResponse, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ConfigurationService } from '@core/configuration';

@Injectable()
export class HttpQueryAppidInterceptor implements HttpInterceptor {

  constructor(
    private configuration: ConfigurationService
  ) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<HttpResponse<any>>> {
    return next.handle(req.clone({
      setParams: {
        appid: this.configuration.appId
      }
    }));
  }
}
