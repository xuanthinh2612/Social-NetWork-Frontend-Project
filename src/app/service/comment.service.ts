import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Comment} from '../model/comment';

const API_URL = `${environment.URL}`;

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private httpClient: HttpClient) {
  }

  getAllComment(postId: number): Observable<Comment[]> {
    return this.httpClient.get<Comment[]>(API_URL + `comments/show/` + postId);
  }

  createComment( comment: Comment): Observable<Comment> {
    return this.httpClient.post<Comment>(API_URL + `comments/create`, comment);
  }

  getById(id: number): Observable<Comment> {
    return this.httpClient.get<Comment>(API_URL + `comments/${id}`);
  }

  updateComment(id: number, comment: Comment): Observable<Comment> {
    return this.httpClient.put<Comment>(API_URL + `comments/editComment/${id}`, comment);
  }

  deleteComment(id: number): Observable<Comment> {
    return this.httpClient.delete<Comment>(API_URL + `comments/delete/${id}`);
  }
}
