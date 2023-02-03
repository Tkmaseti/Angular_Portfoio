import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Mail } from '../_interface/mail';



@Injectable({
  providedIn: 'root'
})
export class MailService {
  private mailurl = 'http://localhost:3000/sendmail'

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };


  constructor( 
    private http: HttpClient
  ) { }
  sendMail(mail: Mail): Observable<Mail> {
    return this.http.post<Mail>(this.mailurl, mail, this.httpOptions).pipe(
      tap((newMail: Mail) => window.alert(`added product title with:${newMail.usermail}`)),
      catchError(this.handleError<Mail>('sent'))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
  log(arg0: string) {
    throw new Error('Method not implemented.');
  }
}
