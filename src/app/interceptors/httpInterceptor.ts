import { HttpEvent, HttpHandlerFn, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

export function httpInterceptor(req: HttpRequest<unknown>, next: HttpHandlerFn): Observable<HttpEvent<unknown>> {
    // Add authorization header with token if available
    const token = localStorage.getItem('token');
    if (token) {
        req = req.clone({
            setHeaders: {
                Authorization: `Bearer ${token}`
            }
        });
    }

    // Add location header with coordinates if available
    const location = localStorage.getItem('location');
    if (location) {
        const { latitude, longitude } = JSON.parse(location);
        req = req.clone({
            setHeaders: {
                'X-Location': `${latitude},${longitude}`
            }
        });
    }
    
    return next(req);
}