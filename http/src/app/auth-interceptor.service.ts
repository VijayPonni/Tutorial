import { HttpEvent, HttpEventType, HttpHandler, HttpInterceptor, HttpRequest  } from "@angular/common/http";
import { Observable } from "rxjs";

export class AuthInterceptorService implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
         const modifiedRequest  = req.clone( 
            { headers : req.headers.append( 'abc' , 'vijayHeader') }   // Appending the new header with old header
             )
        return next.handle(modifiedRequest)
    }
}