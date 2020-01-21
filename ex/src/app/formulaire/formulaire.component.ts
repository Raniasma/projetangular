import { Component, OnInit } from '@angular/core';
import {FormsModule, Validators,FormGroup,FormBuilder} from '@angular/forms';
@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css']
})
export class FormulaireComponent implements OnInit {
  formEnvoi : FormGroup;
  constructor (private fb :FormBuilder)
 {this.formEnvoi=this.fb.group({
      name:['',[Validators.required,Validators.minLength(4)]],
    prenom:['',[Validators.required]],
    mail:['',[Validators.required,Validators.email]],
    sexe:['',[Validators.required]],
  pays:['',[Validators.required]]
    })
  }
  ngOnInit(){
    
  }
 

  get mail(){return this.formEnvoi.get("mail")}
  get sexe(){return this.formEnvoi.get("sexe")}

  get prenom(){return this.formEnvoi.get("prenom")}

  get name(){return this.formEnvoi.get("name")}

  envoyer(){
   if(this.formEnvoi.valid)
           {  console.log(this.formEnvoi.value)}
  }
}
