import {Injectable, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class PostsService {
    constructor(private http: HttpClient) {}

    create(post): Observable<any> {
        return this.http.post(``, post)
    }

    fetch(): Observable<any[]> {
        return this.http.get<any[]>(``)
    }

    remove(id: number | string): Observable<any> {
        return this.http.delete<any>(`${id}`)
    }
}
