import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController,AlertController } from 'ionic-angular';
import{FormBuilder,FormGroup,Validators}from'@angular/forms'
import { Observable} from "rxjs/Rx";
import{Security}from'../../../providers/security'
import{FormControl}from'@angular/forms'
/**
 * Generated class for the Signupnext page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage({
  name:'Signupnext',
  segment:'Signupnext-page'
})
@Component({
  selector: 'page-signupnext',
  templateUrl: 'signupnext.html',
})
export class Signupnext {

  Bidform1:FormGroup
FirstName
 LastName
Address='null'
Phoneno
a:boolean
checktest
  constructor(public alertCtrl:AlertController,private securityProvider:Security,public loadingCtrl: LoadingController,public navCtrl: NavController, public navParams: NavParams,public formBuilder:FormBuilder) {
   
     let emailRegex =/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
           this.Bidform1 = formBuilder.group({

      Email: ['', Validators.compose([Validators.maxLength(50), Validators.pattern(emailRegex), Validators.required])],
   password:['', Validators.compose( [Validators.maxLength(25),Validators.minLength(6),Validators.pattern(''), Validators.required])] 
    // check:['', Signupnext.isValid]


  });
   this.FirstName=this.navParams.get("firstName")
   this.LastName=this.navParams.get("lastName")
   // this.Address=this.navParams.get("address")
   this.Phoneno=this.navParams.get("Phoneno")
this.checktest=false

  }
  terms(){
    // alert(this.checktest)
    this.navCtrl.push('Termsnconditions')

  }
static isValid(control: FormControl): any {
 
    
 
     
 
        if(control.value==false){
            return {
                "too young": true
            };
        }

        return null;
    }
  ionViewDidLoad() {
    console.log('ionViewDidLoad Signupnext');
  }
  // bidregister(){
  // 	this.navCtrl.setRoot('Bidwork')
  // }

  login(){

  
    this.navCtrl.push('HomePage')
  }
bidregister(){
if(this.checktest==false)
{
let alert=this.alertCtrl.create({
          subTitle:'Please Accept Terms and Conditions To Continue!',
          buttons:['ok']
        })
        alert.present();
}
else if(this.checktest==true)
{
        let loading = this.loadingCtrl.create({content: 'wait'});
      Observable.of(loading).flatMap(loading => loading.present())
    .flatMap(() => this.securityProvider.Signup(this.FirstName,this.LastName,this.Address,this.Phoneno,this.Bidform1.controls["Email"].value,this.Bidform1.controls["password"].value))
    .subscribe(data=>{
        loading.dismiss();
        if(data.result.status==1){

        let alert=this.alertCtrl.create({
          subTitle:'SignIn Successfully!',
          buttons:['ok']
        })
        alert.present();


            this.navCtrl.push('HomePage')            
        }
        else if(data.result.status==0)
        {

        let alert=this.alertCtrl.create({
          subTitle:'Email is already registered!',
          buttons:['ok']
        })
        alert.present();
        }
        
    })
 }   

  }
}
