import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams} from 'ionic-angular';
import { Modal, ModalController, ViewController } from 'ionic-angular';


/**
 * Generated class for the ModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modal',
  templateUrl: 'modal.html',
})
export class ModalPage {
  contents: any;
  constructor(public navCtrl: NavController, public navParams: NavParams,  public view: ViewController ) {

    
    this.contents= [
      {titleName:'Education', icon: '../../assets/imgs/graduation2.png', box: [{iconName: 'icon1', descriptionName: 'refiloe'}] },
      {titleName:'Housing', icon: '../../assets/imgs/house.jfif', box: [{iconName: 'icon2', descriptionName: '2'}] },
      {titleName:'Insurance', icon: '../../assets/imgs/insurance2.png', box: [{iconName: 'icon3', descriptionName: '3'}] },
      {titleName:'Immigration', icon: '../../assets/imgs/immigration2.png', box: [{iconName: 'icon4', descriptionName: '4'}] },
      {titleName:'Employment', icon: '../../assets/imgs/emloyment1.png', box: [{iconName: 'icon5', descriptionName: '5'}] },
      {titleName:'Counselling', icon: '../../assets/imgs/counselling1.png', box: [{iconName: 'icon6', descriptionName: '6'}] },
  {titleName:'Enviroment', icon: '../../assets/imgs/house2.png', box: [{iconName: 'icon7', descriptionName: '7'}] },
  {titleName:'Health', icon: '../../assets/imgs/house2.png', box: [{iconName: 'icon8', descriptionName: '8'}] },
  {titleName:'Transportation', icon: '../../assets/imgs/house2.png', box: [{iconName: 'icon9', descriptionName: '9'}] },
  {titleName:'Culture & Recreation', icon: '../../assets/imgs/house2.png', box: [{iconName: 'icon10', descriptionName: '10'}] },
  {titleName:'Pets & Wildlife', icon: '../../assets/imgs/house2.png', box: [{iconName: 'icon11', descriptionName: '11'}] },
  {titleName:'Public Safety', icon: '../../assets/imgs/house2.png', box: [{iconName: 'icon12', descriptionName: '12'}] },
  {titleName:'Garbage & Recycling', icon: '../../assets/imgs/house2.png', box: [{iconName: 'icon12', descriptionName: '12'}] },
  {titleName:'Government & Elections', icon: '../../assets/imgs/house2.png', box: [{iconName: 'icon12', descriptionName: '12'}] },
  {titleName:'Courts & Law', icon: '../../assets/imgs/house2.png', box: [{iconName: 'icon12', descriptionName: '12'}] },
  {titleName:'Records', icon: '../../assets/imgs/house2.png', box: [{iconName: 'icon12', descriptionName: '12'}] },
  {titleName:'Taxes', icon: '../../assets/imgs/house2.png', box: [{iconName: 'icon12', descriptionName: '12'}] },
  {titleName:'Businesses ', icon: '../../assets/imgs/house2.png', box: [{iconName: 'icon12', descriptionName: '12'}] }, 
 ]
  }

 
  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalPage');
  }

  modalDismiss() {
    this.view.dismiss();
  }

}
