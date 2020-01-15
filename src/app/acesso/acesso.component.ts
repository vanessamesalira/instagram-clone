import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';

@Component({
  selector: 'app-acesso',
  templateUrl: './acesso.component.html',
  styleUrls: ['./acesso.component.scss'],
  animations: [
    trigger('animacao-banner', [
      state('criado', style({
        opacity: 1
      })),
      transition('void => criado', [
        style(
          {
            opacity: 0,
            transform: 'translate(-50px, 0)'
          }
        ),
        animate('500ms 0s ease-in-out') //duração, delay e aceleração
      ])
    ]),
    trigger('animacao-painel', [
      state('criado', style({
        opacity: 1
      })),
      transition('void => criado', [
        style(
          {
            opacity: 0,
            transform: 'translate(50px, 0)'
          }
        ),
        animate('1500ms 0s ease-in-out', keyframes([
          style({offset: 0.15, opacity:1, transform: 'translateX(0)'}),
          style({offset: 0.66, opacity:1, transform: 'translateX(0)'}),

          style({offset: 0.68, opacity:1, transform: 'translateY(-10px)'}),
          style({offset: 0.70, opacity:1, transform: 'translateY(10px)'}),
          style({offset: 0.75, opacity:1, transform: 'translateY(-10px)'}),
          style({offset: 0.80, opacity:1, transform: 'translateY(10px)'}),
          style({offset: 0.85, opacity:1, transform: 'translateY(-10px)'}),
          style({offset: 0.90, opacity:1, transform: 'translateY(10px)'}),

          style({offset: 1, opacity:1, transform: 'translateY(0)'})
        ])) //d
      ])
    ])
  ]
})
export class AcessoComponent implements OnInit {

  public estadoBanner: string = "criado"
  public estadoPainel: string = "criado"

  public cadastro: boolean = false

  constructor() { }

  ngOnInit() {
  }

  public exibirPainel(event: string): void {
    this.cadastro = event === 'cadastro' ? true: false
    this.cadastro = event === 'login' ? false: true
  }

  public inicioAnimacao(): void{
    console.log("Inicio da animacao")
  }

  public fimAnimacao(): void{
    console.log("Fim da animacao")
  }

}
