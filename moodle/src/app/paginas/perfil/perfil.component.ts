import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent implements OnInit {

  nome:any;
  cpf:any;
  dataNacimento:any;
  email:any;
  telefone:any;
  telefoneAdicional:any;
  cargo:any;

  ModalCertificados: boolean = false;

  showModalCertificados() {
        this.ModalCertificados = true;
    }

  constructor() { }

  ngOnInit(): void {
  }

}
