import { Injectable } from '@angular/core';
import { Leader } from '../shared/leader';
import { Observable, of } from 'rxjs';
import { map,catchError } from 'rxjs/operators';
import { ProcessHTTPMsgService } from './process-httpmsg.service';
import { HttpClient } from '@angular/common/http';
import { baseURL } from '../shared/baseurl';

@Injectable({
  providedIn: 'root'
})
export class LeaderService {

  getLeaders(): Observable<Leader[]> {
    return this.http.get<Leader[]>(baseURL+'leadership')
    .pipe(catchError(this.processHTTPMsgService.handleError));

  }

  getLeader(id: string): Observable<Leader> {
    return this.http.get<Leader>(baseURL+'leadership/'+id)
    .pipe(catchError(this.processHTTPMsgService.handleError));

  }

  getFeaturedLeader(): Observable<Leader> {
    return this.http.get<Leader[]>(baseURL+'leadership?featured=true')
    .pipe(map(leaders=>leaders[0]))
    .pipe(catchError(this.processHTTPMsgService.handleError));

  }

  constructor(private http: HttpClient,
    private processHTTPMsgService: ProcessHTTPMsgService ) {}
}
