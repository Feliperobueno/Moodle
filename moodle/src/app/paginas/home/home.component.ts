import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [MessageService]
})
export class HomeComponent implements OnInit {

  nomeCliente:String = 'Thiago';
  nomeCurso: String = 'Chatguru'

  value: number = 0;

  

  constructor(private messageService: MessageService) { }

  ngOnInit(): void {
    
      let interval = setInterval(() => {
          this.value = this.value + Math.floor(Math.random() * 10) + 1;
          if (this.value >= 100) {
              this.value = 100;
              this.messageService.add({severity: 'success', summary: 'Parabéns', detail: 'Curso completado com sucesso'});
              clearInterval(interval);
          }
      }, 2000);
  

}
  }


