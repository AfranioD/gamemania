import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Jogos } from '../models/jogos';

@Injectable({
  providedIn: 'root'
})
export class JogosService {
  url = "http://localhost:3000/jogos"

  constructor(private httpClient: HttpClient) { }

  getJogos(): Observable<Jogos[]>{
    return this.httpClient.get<Jogos[]>(this.url)
  }
}
 