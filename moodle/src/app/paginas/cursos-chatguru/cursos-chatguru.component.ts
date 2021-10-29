import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cursos-chatguru',
  templateUrl: './cursos-chatguru.component.html',
  styleUrls: ['./cursos-chatguru.component.scss']
})
export class CursosChatguruComponent implements OnInit {


  NomeCurso = "ChatGuru";

  DescricaoCurso = "Curso sobre o sistema de mensagens utilizado pela AC CONSULTI BRASIL."

  dtInicio = "29/10/2021"

  dtTermino = "01/10/2021"

  FinalizarCurso: Boolean = false;

  showModalFinalizarCurso() {
    this.FinalizarCurso = true;
  }

  percentProgress: any = 10;



  constructor() {

  }

  ngOnInit(): void {
  }

}
