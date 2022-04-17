import { Jogos } from './../../models/jogos';
import { JogosService } from './../../services/jogos.service';
import { Component, OnInit } from '@angular/core';
import { ThisReceiver } from '@angular/compiler';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private JogosService: JogosService) { }

  listaJogos =  [] as Jogos[]

  ngOnInit(): void {
    this.carregarJogos()
  }

  carregarJogos(){
    this.jogosService.getJogos().subscribe( (jogosRecebidos: Jogos[]) => {
      this.listaJogos = jogosRecebidos;
      console.log(this.listaJogos);
    })
  }

}
