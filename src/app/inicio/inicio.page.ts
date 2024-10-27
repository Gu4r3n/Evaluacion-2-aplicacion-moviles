import { Component, OnInit } from '@angular/core';
import { NavController,AlertController } from '@ionic/angular';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  
  
  constructor(public navCtrl : NavController,
    public alertController: AlertController,
    ) {}

  ngOnInit() {
  }

  

  
salir(){localStorage.removeItem('ingresado'); 
  this.navCtrl.navigateRoot('login');};


  async mensaje(){const alert = await this.alertController.create({
  header: 'No funcional',
  message: 'Por el momento no se encuentra disponible esta opcion',
  buttons: ['Aceptar'],
});
await alert.present();}

name(){
  var usuarioN = localStorage.getItem('nombre');
  return usuarioN}
}
