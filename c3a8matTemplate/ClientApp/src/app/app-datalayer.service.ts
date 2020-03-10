import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { from, Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class AppDatalayerService {
    Url: string;
    token: string;
    header: any;

    constructor(private http: HttpClient) {

        this.Url = 'https://localhost:44310'; //Validar contra variable de "en desarrollo" vs "en producción".

        const headerSettings: { [name: string]: string | string[]; } = {};
        this.header = new HttpHeaders(headerSettings);

    }

    // Http Headers
    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })
    }

    errorHandl(error) {
            let errorMessage = '';
            if (error.error instanceof ErrorEvent) {
                // Get client-side error
                errorMessage = error.error.message;
            } else {
                // Get server-side error
                errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
            }
            console.log(errorMessage);
            return throwError(errorMessage);

        }
    }
