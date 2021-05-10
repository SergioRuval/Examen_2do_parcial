import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  nombre:string = "";
  email:string = "";
  isMsg = false;
  isEmail = false;
  isName = false;
  msg = "";
  eMsg = "";
  nMsg = "";
  regex = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
  regexN = new RegExp(/^[a-z ,.'-]+$/i);

  constructor() { }

  ngOnInit(): void {
  }

  validar() {
    if(this.nombre == "" || this.email == ""){
      this.isMsg = true;
      this.msg = "No puedes dejar campos vacíos";
    }else {
      this.isMsg = false;
      this.msg = "";
    }
  }

  validaEmail(event:any){
    if(!this.regex.test(this.email)){
      this.eMsg = "formato de email incorrecto";
      this.isEmail = true;
    }else{
      this.isEmail = false;
      this.eMsg = "";
    }
    
  }

  validaNombre(event:any){
    if(!this.regexN.test(this.nombre)){
      this.nMsg = "Nombre no puede tener caracteres especiales";
      this.isName = true;
    }else{
      this.isName = false;
      this.nMsg = "";
    }
  }

}
