import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms'

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit {

  @Output() public exibirPainel: EventEmitter<string> = new EventEmitter<string>()

  formulario: FormGroup = new FormGroup({
    'email': new FormControl(null),

  })

  constructor() { }

  ngOnInit() {
  }

  public exibirPainelLogin(): void{
    this.exibirPainel.emit('login')
    console.log("chegamos")
  }
}
