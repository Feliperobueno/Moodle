import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cursos-chatguru',
  templateUrl: './cursos-chatguru.component.html',
  styleUrls: ['./cursos-chatguru.component.scss']
})
export class CursosChatguruComponent implements OnInit {

  percentProgress: number = 10;

  formatSubtitle = (percent: number) : string => {
    if(percent >= 100){
      return "Congratulations!"
    }else if(percent >= 50){
      return "Half"
    }else if(percent > 0){
      return "Just began"
    }else {
      return "Not started"
    }
  }

  constructor() {
    
   }

  ngOnInit(): void {
  }

}
