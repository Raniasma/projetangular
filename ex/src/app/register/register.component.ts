import { Component, OnInit , EventEmitter, Output} from '@angular/core';
import {FormsModule, Validators,FormGroup,FormBuilder} from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  connected: boolean;
  regform : FormGroup;
  clicked: boolean;
  @Output() onchange = new EventEmitter<boolean>()
  constructor (private rg :FormBuilder)
 {this.regform=this.rg.group({
    name:['',[Validators.required,Validators.minLength(4)]],
    prenom:['',[Validators.required, Validators.minLength(4)]],
    email:['',[Validators.required,Validators.email]],
    password: ['', [Validators.required, Validators.minLength(4)]],
    sexe:['',[Validators.required]],
    pays:['',[Validators.required]]
    })
}

  ngOnInit() {
    this.clicked = false;
  }

  get email(){return this.regform.get("email")}
  get sexe(){return this.regform.get("sexe")}
  get prenom(){return this.regform.get("prenom")}
  get name(){return this.regform.get("name")}
  get password() { return this.regform.get("password") }

 envoyer(){
   if(this.regform.valid)
           {   this.connected=true
            this.onchange.emit(this.connected)

        }else this.connected=false
  }
}
