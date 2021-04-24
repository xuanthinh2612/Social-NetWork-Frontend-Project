import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {catchError, tap} from "rxjs/operators";
import {Observable, of} from 'rxjs';
import {JwtService} from './auth/jwt.service';
import {IAppUser} from '../model/IAppUser';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient, private jwtService: JwtService) {

  }

  private userUrl = environment.URL + 'users';

  getUser() {
    return this.findUserById(this.jwtService.currentUserValue.id);
  }

  findUserById(id: number) {
    return this.http.get(this.userUrl + '/findUserById/' + id).pipe(
      tap(
        user => JSON.stringify(user)),
      catchError(err => of([]))
    );
  }

  findAllUser() : Observable<IAppUser[]>{
    return this.http.get<IAppUser[]>(this.userUrl + '/').pipe(
      tap(users => JSON.stringify(users),
        catchError(err => of([]))
      )
    )
  }
}
