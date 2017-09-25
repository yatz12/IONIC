import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import{ModalController}from'ionic-angular'
import{FormBuilder,FormGroup,Validators}from'@angular/forms'
import{FormControl}from'@angular/forms'
/**
 * Generated class for the Signup page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage({
  name:'Signup',
  segment:'Signup-page'
})
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class Signup {
  Bidform:FormGroup
  constructor(public formbuilder:FormBuilder,public modalctrl:ModalController,public navCtrl: NavController, public navParams: NavParams) {
  this.Bidform=formbuilder.group({
    firstName: ['', Validators.compose([Validators.maxLength(15), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
    lastName:['', Validators.compose([Validators.maxLength(15), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
    // Address:['', ],
    Phoneno:['',Signup.isValid]
       })
  }
static isValid(control: FormControl): any {
 
        if(isNaN(control.value)){
            return {
                "not a number": true
            };
        }
 
        if(control.value % 1 !== 0){
            return {
                "not a whole number": true
            };
        }
 
        if(control.value < 1000000000){
            return {
                "too young": true
            };
        }

        return null;
    }
  ionViewDidLoad() {
    console.log('ionViewDidLoad Signup');
  }
  next()
  {
    // alert(this.Bidform.controls["firstName"].value+','+this.Bidform.controls["lastName"].value)
  this.navCtrl.push('Signupnext',{firstName:this.Bidform.controls["firstName"].value,lastName:this.Bidform.controls["lastName"].value,Phoneno:this.Bidform.controls["Phoneno"].value})
  }

}
