import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import { BoxData } from '../../app/model/properties';
import { MyproviverProvider } from '../../providers/myproviver/myproviver';
import { ModalPage } from '../modal/modal';
import { InformationPage } from '../../pages/information/information'




@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
Data = BoxData;
education: any;

  constructor(public navCtrl: NavController, public navParams: NavParams , private provider:  MyproviverProvider, public modal: ModalController) {
    
  
  

  }
/* searchEducation(){
  
  this.provider.education().subscribe(res => {
    this.education = res;
    console.log(this.education);
    
  });
  
} */
modalShow(){
  console.log('open modal');
  
  const modal = this.modal.create(ModalPage);
  
  modal.present();
    
 
}

//function to view contents from boxes
viewContent(o){
  this.navCtrl.push('InformationPage');
  console.log(o);
}
ionViewDidLoad(){
  this.provider.education().subscribe(val =>{
    console.log(val);
  })
  
  
}


}
