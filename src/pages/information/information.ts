import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the InformationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-information',
  templateUrl: 'information.html',
})
export class InformationPage {
info: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.info = [
      {titleName:'Addict Medical Emergency', description: 'Report an addict who needs medical help right away.', link:'https://portal.311.nyc.gov/article/?kanumber=KA-01514', box: [{iconName: 'icon1', descriptionName: 'refiloe'}] },
      {titleName:'Adult Vaccination and Immunization', description: 'Find a clinic for adult vaccinations and immunization.',  link:'https://portal.311.nyc.gov/article/?kanumber=KA-02548', box: [{iconName: 'icon2', descriptionName: '2'}] },
      {titleName:'Ambulance Complaint', description: 'Report a problem with an ambulance.',  link:'https://portal.311.nyc.gov/article/?kanumber=KA-02558', box: [{iconName: 'icon3', descriptionName: '3'}] },
      {titleName:'Blindness and Low Vision Support', description: 'Learn about services and rights for people who are blind or low vision.', link:'https://portal.311.nyc.gov/article/?kanumber=KA-02582',  box: [{iconName: 'icon4', descriptionName: '4'}] },
      {titleName:'Cancer', description: 'Learn about cancer and how to prevent it.',  link:'https://portal.311.nyc.gov/article/?kanumber=KA-01521', box: [{iconName: 'icon5',  descriptionName: '5'}] },
      {titleName:'Child with Special Health Care Needs', description: 'Request for medical referrals, health insurance, and resources for chronically ill or disabled children under 21 years old.', link:'https://portal.311.nyc.gov/article/?kanumber=KA-01528' , box: [{iconName: 'icon6', descriptionName: '6'}] },
      {titleName:'Donate Organs or Tissue', description: 'Register to be an organ and tissue donor.',  link:'https://portal.311.nyc.gov/article/?kanumber=KA-01420',  box: [{iconName: 'icon7', descriptionName: '7'}] },
      {titleName:'Drug and Alcohol Treatment', description: 'Get free, confidential help with drug or alcohol addiction, such as crisis services and treatment referrals. Make a drug/alcohol rehab facility complaint.',  link:'https://portal.311.nyc.gov/article/?kanumber=KA-02698', box: [{iconName: 'icon8', descriptionName: '8'}] },
      {titleName:'Senior Caregiving Support', description: 'Get referrals for support and services for family or friends caring for a person 60 or older, or for seniors caring for a person of any age.',  link:'https://portal.311.nyc.gov/article/?kanumber=KA-02045', box: [{iconName: 'icon9', descriptionName: '9'}] },
      {titleName:'Women NYC', description: 'Learn about programs, resources, and support for women.',  link:'https://portal.311.nyc.gov/article/?kanumber=KA-03099', box: [{iconName: 'icon10', descriptionName: '10'}] },
      {titleName:'New Mother Home Visit', description: 'Learn about the program that provides home visits and free cribs to eligible new mothers in Brooklyn, Manhattan and the Bronx.',  link:'https://portal.311.nyc.gov/article/?kanumber=KA-01514', box: [{iconName: 'icon11', descriptionName: '11'}] },
      {titleName:'World Trade Center Health Program', description: 'Learn about the World Trade Center Health Program.',   link:'https://portal.311.nyc.gov/article/?kanumber=KA-01514',box: [{iconName: 'icon12', descriptionName: '12'}] },
      {titleName:'Hospitals', description: 'Get locations, hours, and contact information for public hospitals.',  link:'https://portal.311.nyc.gov/article/?kanumber=KA-01514', box: [{iconName: 'icon12', descriptionName: '12'}] },
      {titleName:'Health Screenings', description: 'Get locations, hours, and contact information for a clinic to get a low cost health screening for diabetes, heart disease, and other chronic diseases.',  link:'https://portal.311.nyc.gov/article/?kanumber=KA-01514', box: [{iconName: 'icon12', descriptionName: '12'}] },
      {titleName:'Youth Services and Counseling', description: 'Get resources for young people, troubled youth, and their families. Includes Youth Connect, walk-in centers, and NYC Teen website',  link:'https://portal.311.nyc.gov/article/?kanumber=KA-01514', box: [{iconName: 'icon12', descriptionName: '12'}] },
      {titleName:'LGBTQ Services and Resources', description: 'Learn about services and resources for lesbian, gay, bisexual, transgender, and queer (LGBTQ) individuals, parents, and youth.',   link:'https://portal.311.nyc.gov/article/?kanumber=KA-01514',box: [{iconName: 'icon12', descriptionName: '12'}] },
      {titleName:'TPeople with Disabilities Services', description: 'Learn about resources, referrals, and information about programs for people with disabilities.',  link:'https://portal.311.nyc.gov/article/?kanumber=KA-01514', box: [{iconName: 'icon12', descriptionName: '12'}] },
      {titleName:'Sexual Assault Victim Support', description: 'Request social services and emergency assistance for victims of rape, incest, and sexual assault.',   link:'https://portal.311.nyc.gov/article/?kanumber=KA-01514',box: [{iconName: 'icon12', descriptionName: '12'}] }, 
     ]

  }
  

  ionViewDidLoad() {
    console.log('ionViewDidLoad InformationPage');
  }

}
