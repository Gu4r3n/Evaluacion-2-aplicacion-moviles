import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators,FormBuilder } from '@angular/forms';
import { AlertController, NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  formularioRegistro: FormGroup;

  constructor(public fb: FormBuilder,
    public alertController: AlertController,
    public navCtrl : NavController,
    private storage: Storage
    ){ 
    this.formularioRegistro = this.fb.group({
      'nombre': new FormControl("",Validators.required),
      'password': new FormControl("",Validators.required),
      'rut' : new FormControl("",Validators.required),
      'gmail' : new FormControl ("",Validators.required),
      'fecha' : new FormControl ("",Validators.required)
    })
}

  async ngOnInit() { await this.storage.create();
  }

  async guardar(){
    var f = this.formularioRegistro.value;

    if(this.formularioRegistro.invalid){
      const alert = await this.alertController.create({
        message: 'Ingrese todos los datos',
        buttons: ['Aceptar']
      });
      await alert.present();
      return;
    }
    else {this.navCtrl.navigateRoot('login');}
    /* trabajar el else para el return*/
    var usuario = {
      nombre: f.nombre,
      password: f.password,
      rut : f.rut,
      gmail : f.gmail,
      fecha : f.fecha
    }
    this.storage.set('usuario',usuario) //o this.storage.set('usuario',JSON.stringify(usuario))
    //localStorage.setItem('usuario',JSON.stringify(usuario));
    
  }
  
}
