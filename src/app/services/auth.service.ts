import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private http = inject(HttpClient);
  private endpoint = "http://efood-api.test/driver";

  public login(email: string, password: string) {
    return this.http.post(this.endpoint + '/auth/login', { email, password });
  }
}
