import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/internal/Observable';
import { Tide } from '../entities/tide';
import { HttpClient } from '@angular/common/http';
import { TideDto } from '../entities/tide-dto';

@Injectable({
  providedIn: 'root'
})
export class TidesService {


  constructor(protected http: HttpClient) { }

  public giveMe(queryParams: Map<string, string>): Observable<TideDto> {
    let url = "http://localhost:8080/api/tides";
    if (queryParams.size > 0) {
      url += '?';
      const parametros: string[] = [];
      queryParams.forEach((valor, clave) => {
        return parametros.push(`${clave}=${encodeURIComponent(valor)}`);
      });
      url += parametros.join('&');
    }

    return this.http.get<TideDto>(url);

  }
}



