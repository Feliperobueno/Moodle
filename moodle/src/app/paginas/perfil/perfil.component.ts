import { PrimeNGConfig } from 'primeng/api';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent implements OnInit {

  nome:any = 'Felipe Rodrigues Bueno Fernandes';
  cpf:any = '70261577107';
  dataNacimento:any = '18031998';
  email:any = 'feliperodriguesbueno@hotmail.com';
  telefone:any = '62981852465';
  telefoneAdicional:any = '62981852465';
  cargo:any = 'AGR';
  senhaAntiga:any;
  senhaNova:any;
  senhaNovaConfirmar:any;

  ModalCertificados: boolean = false;
  ModalSenha: boolean = false;

  showModalCertificados() {
        this.ModalCertificados = true;
    }

    showModalSenha() {
      this.ModalSenha = true;
  }


  

  constructor(private config: PrimeNGConfig) { 
  }

  ngOnInit(): void {

    this.config.setTranslation({
      weak: 'Fraca',
      medium: 'Bom',
      strong: 'Forte',
      passwordPrompt: 'digite sua senha'
      //translations

      
  });
  }
  

}
