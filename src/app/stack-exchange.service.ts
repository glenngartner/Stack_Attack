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

  /**
   * Searches the Stack API for specific questions that contain a string value
   * @param inTitle
   */
  searchForQuestions(inTitle: string): Observable<StackReply> {
    inTitle = inTitle.trim();
    const url = `https://api.stackexchange.com/2.2/search?order=desc&sort=activity&intitle=${inTitle}&site=stackoverflow&filter=withbody&key=Sc0KoR2)q6dLbPmnwF2ovg((`;
    return this.http.get<StackReply>(url)
      .pipe(
        retry(3),
        catchError(this.ErrorHandler)
      );
  }

  /**
   * Search the Stack API for answers using a specific question ID
   * @param questionID
   */
  searchForAnswersToQuestion(questionID: number): Observable<StackReply> {
    const url = `https://api.stackexchange.com/2.2/questions/${questionID}/answers?order=desc&sort=activity&site=stackoverflow&filter=withbody&key=Sc0KoR2)q6dLbPmnwF2ovg((`;
    return this.http.get<StackReply>(url)
      .pipe(
        retry(3),
        catchError(this.ErrorHandler)
      );
  }

  /**
   * Search the stack API for the accepted answer, using the accepted answer ID belonging to a question, if it exists
   * @param answerID
   */
  public getAcceptedAnswerByID(answerID: number): Observable<StackReply> {
    const url = `https://api.stackexchange.com/2.2/answers/${answerID}?order=desc&sort=activity&site=stackoverflow&key=Sc0KoR2)q6dLbPmnwF2ovg((`;
    return this.http.get<StackReply>(url)
      .pipe(
        retry(3),
        catchError(this.ErrorHandler)
      );
  }

  /**
   * Handles errors with the Stack API search, and prints the results to the browser console
   * @param error
   * @constructor
   */
  private ErrorHandler(error: HttpErrorResponse) {
    // check for client side error
    if (error.error instanceof ErrorEvent) {
      console.log(`ERROR: ${error.error.message}`);
    } else { // check for server side response error
      console.error(`Server response error ${error.status}, body was: ${error.error}`, error.error);
    }
    // tell the user an error occurred
    return throwError(`An Error Occurred. Please try again, now or later. Check the console for details`);
  }
}

