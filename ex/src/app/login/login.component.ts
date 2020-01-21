import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormsModule, Validators, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  confirmed = false;
  validtab = [{ "email": "ran@gmail.com", "password": "azerty" }, { "email": "sama@gmail.com", "password": "qsdfg" }]
  connected: boolean;
  haveaccount:boolean;
  @Output() onchange = new EventEmitter<boolean>()
  formulaire: FormGroup;
  clicked: boolean;
  constructor(private fb: FormBuilder) {
  this.formulaire = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(4)]]

  })
  }
 
  ngOnInit() {
    this.clicked = false;
    this.haveaccount=true;
  }
  get email() { return this.formulaire.get("email") }
  get password() { return this.formulaire.get("password") }
  confirmer() {
    return this.confirmed = true;
  }
  edit(){
    this.connected=true
  }
  register(){
    this.haveaccount=false;
  }
  envoyer() {
    if (this.formulaire.valid) {

      for (var i = 0; i < this.validtab.length; i++) {
        if (this.validtab[i].email == this.formulaire.value.email && this.validtab[i].password == this.formulaire.value.password) {
           this.connected=true
            this.onchange.emit(this.connected)

        }else this.connected=false
       
      }

    }

  }
}
