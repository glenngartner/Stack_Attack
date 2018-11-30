import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpParams, HttpResponse} from '@angular/common/http';
import {StackQuestion, StackReply} from './generic/interfaces';
import {Observable, throwError} from 'rxjs';
import {catchError, retry} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StackExchangeService {

  constructor(private http: HttpClient) {
  }

  searchForQuestions(inTitle: string): Observable<StackReply> {
    inTitle = inTitle.trim();
    const url = `https://api.stackexchange.com/2.2/search?order=desc&sort=activity&intitle=${inTitle}&site=stackoverflow&filter=withbody`;
    return this.http.get<StackReply>(url)
      .pipe(
        retry(3),
        catchError(this.ErrorHandler)
      );
  }
  private ErrorHandler(error: HttpErrorResponse) {
    // check for client side error
    if (error.error instanceof ErrorEvent) {
      console.log(`ERROR: ${error.error.message}`);
    } else { // check for server side response error
      console.error(`Server response error ${error.status}, body was: ${error.error}`);
    }
    // tell the user an error occurred
    return throwError(`An Error Occurred. Please try again, now or later. Check the console for details`);
  }
}

