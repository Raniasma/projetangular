import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  islogged: boolean;
  
  title = 'ex';

ngOnInit() {
  this.islogged=false;
}
connect(event){
  this.islogged=event;
}
deconnecter(){this.islogged=false;}
}

