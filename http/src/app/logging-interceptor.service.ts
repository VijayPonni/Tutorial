import { HttpEvent, HttpEventType, HttpHandler, HttpInterceptor ,HttpRequest,HTTP_INTERCEPTORS } from "@angular/common/http"
import { Observable } from "rxjs"
import { tap } from "rxjs/operators"

export class LoggingInterceptorServices implements HttpInterceptor{
 intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log("I am logging Interceptor");
    
     return next.handle(req).pipe(
      tap(event => {
        console.log(event);
        if(event.type === HttpEventType.Response){
            console.log("Incoming response : ");
            console.log(event.body);
            
        }
        
      })
     )
 }
}