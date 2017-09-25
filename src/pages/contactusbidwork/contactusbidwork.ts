import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController ,AlertController} from 'ionic-angular';
import{Observable}from'rxjs/Rx'
import{Security}from'../../providers/security'
import{FormBuilder,FormGroup,Validators}from'@angular/forms'
import{FormControl}from'@angular/forms'
/**
 * Generated class for the Contactusbidwork page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage({
	name:'Contactusbidwork',
	segment:'Contactusbidwork'

})
@Component({
  selector: 'page-contactusbidwork',
  templateUrl: 'contactusbidwork.html',
})
export class Contactusbidwork {
useremail
phoneno
message
  Bidform3:FormGroup
  constructor(public formbuilder:FormBuilder,public securityprovider:Security,public alertCtrl:AlertController,public loadingCtrl:LoadingController,public navCtrl: NavController, public navParams: NavParams) {
    let emailRegex =/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  this.Bidform3=formbuilder.group({
    Email: ['', Validators.compose([Validators.maxLength(50), Validators.pattern(emailRegex), Validators.required])],
    message:['', Validators.compose([Validators.required])],
    Phoneno:['',Contactusbidwork.isValid]
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
    console.log('ionViewDidLoad Contactusbidwork');
  }
submit(){
// let partial={
//   useremail:this.useremail,
//   phoneno:this.phoneno,
//   message:this.message
//   // price:this.Price
// }
// let mandatoryfields:string[]=[];
// if(!partial.useremail)
// {
//   mandatoryfields.push('Email')
// }
// if(!partial.phoneno)
// {
//   mandatoryfields.push('Phone')
// }
// if(!partial.message)
// {
//   mandatoryfields.push('Message')
// }
// // if(!partial.price)
// // {
// //   mandatoryfields.push('price')
// // }
//  if(mandatoryfields.length>0)
//  {
// let alertctr=this.alertCtrl.create({
//   title:'Mandatory Feilds!',
//   message:mandatoryfields.join(','),
//     buttons:['Ok']
// })
// alertctr.present();
//  }





// else{






let loading=this.loadingCtrl.create({
	content:'Please Wait..'
})
Observable.of(loading).flatMap(loading=>loading.present())
// .flatMap(()=>this.securityprovider.contact(localStorage['contactid'],this.useremail,this.phoneno,this.message))
.flatMap(()=>this.securityprovider.contact(localStorage['contactid'],this.Bidform3.controls["Email"].value,this.Bidform3.controls["Phoneno"].value,this.Bidform3.controls["message"].value))
.subscribe(data=>{
	loading.dismiss()
	let alertctr=this.alertCtrl.create({
  title:'Thank You',
  message:data.result.message,
    buttons:['Ok']
})
alertctr.present();

this.navCtrl.setRoot('Contactusbidwork')
})
// }

}
}
