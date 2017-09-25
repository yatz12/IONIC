import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from "rxjs/Rx";
import{ENV}from'../app/env'
@Injectable()
export class Security {
    constructor(public http: Http) {
        console.log('Hello Security Provider');
    }


    chathistory(room)
    {

return this.http.post('http://europa.promaticstechnologies.com/bidwork/api/getMsgs',{
room:room
})
.timeout(ENV.timeout)
.map((data)=>{
  return data.json()
})


    }
    LOGOUT(email){
return this.http.post(ENV.mainApi+'/logout',{
email:email
})
.timeout(ENV.timeout)
.map((data)=>{
  return data.json()
})
    }
    custonline(email)
    {
return this.http.post(ENV.mainApi+'/online/users',{
email:email
})
.timeout(ENV.timeout)
.map((data)=>{
        return data.json()
      })
    }
tradesconversation(custid,tradesid){
return this.http.post(ENV.mainApi+'/chat/conversations',{
cust_email:custid,
trad_email:tradesid
})
.timeout(ENV.timeout)
.map((data)=>{
        return data.json()
      })

}

conversation(tradesid,custid){
return this.http.post(ENV.mainApi+'/chat/conversations',{
cust_email:custid,
trad_email:tradesid
})
.timeout(ENV.timeout)
.map((data)=>{
        return data.json()
      })

}
payplan(unique_id,
email,
intent,
amount,
state,
createtime,
planid):Observable<any>
{
return this.http.post(ENV.mainApi+'/payment/form',{
unique_id:unique_id,
email:email,
intent:intent,
price:amount,
state:state,
create_time:createtime,
plan_id:planid
})
.timeout(ENV.timeout)
.map((data)=>{
        return data.json()
      })
}
report(jobid,email,message):Observable<any>
{
return this.http.post(ENV.mainApi+'/claim/admin',{
 job_id:jobid,
email:email,
message:message
})
.timeout(ENV.timeout)
.map((data)=>{
return data.json()
})
}

    subscribeplans():Observable<any>{
      return this.http.get(ENV.mainApi+'/subscription/plans',{

      })
      .timeout(ENV.timeout)
      .map((data)=>{
        return data.json()
      })
    }
    contact(type,email,phone,message):Observable<any>{
      return this.http.post(ENV.mainApi+'/contact/form',{
 email:email,
message:message,
type:type,
phone_number:phone
      })
      .timeout(ENV.timeout)
      .map((data)=>{
        return data.json()
      })
    }
    Signup(firstname, lastname, address, phone_number, email, password): Observable < any > {
        return this.http.post(ENV.mainApi + '/signup', {
                firstname: firstname,
                lastname: lastname,
                address: address,
                phone_number: phone_number,
                email: email,
                password: password,
                type:1
            })
            .timeout(ENV.timeout)
            .map((data) => {
                return data.json()
            })
    }
checkappointement(email):Observable<any>
{
return this.http.post(ENV.mainApi+'/check/appointment',{
trad_email:email
})
.timeout(ENV.timeout)
.map((data)=>{
return data.json()
})
}
nearby(email,
latitude,
longitude,event):Observable<any>
{
  return this.http.post(ENV.mainApi+'/nearbylocation',{
 email:email,
latitude:latitude,
longitude:longitude,
miles:event
  })
  .timeout(ENV.timeout)
  .map((data)=>{
    return data.json()
  })
}

mybids(email):Observable<any>{
  return this.http.post(ENV.mainApi+'/bids',{
email:email
  })
  .timeout(ENV.timeout)
  .map((data)=>{
    return data.json()
  })
}

listofBids(email):Observable<any>{
  return this.http.post(ENV.mainApi+'/list/bid',{
email:email
  })
  .timeout(ENV.timeout)
  .map((data)=>{
    return data.json()
  })
}

feedbackphrase():Observable<any>{
return this.http.get(ENV.mainApi+'/feedback',{

})
.timeout(ENV.timeout)
.map((data)=>{
  return data.json()
})
}
Bidappointement(datepick,timepick,feedbackphrase,email,job_id,email1):Observable<any>{
  return this.http.post(ENV.mainApi+'/appointment',{
date:datepick,
time:timepick,
feedback_phrase:feedbackphrase,
cust_email:email,
job_id:job_id,
trad_email:email1
})
  .timeout(ENV.timeout)
.map((data)=>{
  return data.json()
})
}


Highestbiding(id):Observable<any>
{
  return this.http.post(ENV.mainApi+'/highest/bid',{
    job_id:id
  })
  .timeout(ENV.timeout)
  .map((data)=>{
    return data.json()
  })

}

tradesmancategory(event,email):Observable<any>{
return this.http.post(ENV.mainApi+'/filter/jobs',{
 type:event,
 email:email
})
.timeout(ENV.timeout)
.map((data)=>
{
  return data.json()
})


}
bid(jobid,heart,rating,price,email):Observable<any>{
  return this.http.post(ENV.mainApi+'/bid',{
    job_id:jobid,
    price:price,
    email:email,
    rating:rating,
    heart:heart
})
  .timeout(ENV.timeout)
  .map((data)=>
  {
    return data.json()
  })
}
tradesmancategory1(event,email):Observable<any>{
return this.http.post(ENV.mainApi+'/filter/jobs',{
 category_name:event,
 email:email
})
.timeout(ENV.timeout)
.map((data)=>
{
  return data.json()
})


}




tradesmanfilter(min,max):Observable<any>{
return this.http.post(ENV.mainApi+'/filter/jobs',{
min_range:min,
max_range:max
})
.timeout(ENV.timeout)
.map((data)=>{
  return data.json()
})

}


    postdetailscategory(id,fbstatus,event):Observable<any>{
      return this.http.post(ENV.mainApi+'/filter',{
            email:id,
         fb_status:fbstatus,
         category_name:event
      })
      .timeout(ENV.timeout)
     .map((data) => {
                return data.json()
            })
    }
    authenticatefb(fbtoken):Observable<any>{
      return this.http.post(ENV.mainApi+'/fb_token',{
         fb_token:fbtoken
      }).timeout(ENV.timeout)
      .map((data)=>{
        return data.json()
      })
    }
    tradesmansignup(firstname,lastname,pic,email,password,address,phoneno):Observable<any>{
return this.http.post(ENV.mainApi+'/signup',{
firstname: firstname,
 lastname: lastname,
  address:address,
 phone_number: phoneno,
 license:pic,
 email:email,
 password:password,
 type:2
})
.timeout(ENV.timeout)
.map((data)=>{
  return data.json()
})
 }
    aboutus():Observable<any>{
      return this.http.get(ENV.mainApi+'/aboutus',{})
      .timeout(ENV.timeout)
      .map((data)=>{return data.json()})
    }
        jobSearch(email):Observable<any>{
      return this.http.post(ENV.mainApi+'/jobs',{
        email:email
      })
      .timeout(ENV.timeout)
      .map((data)=>{return data.json()})
    }
     howitworks():Observable<any>{
      return this.http.get(ENV.mainApi+'/howitworks',{})
      .timeout(ENV.timeout)
      .map((data)=>{return data.json()})
    }
    login(email, password,fb_status2): Observable < any > {
        return this.http.post(ENV.mainApi + '/login', {
                email: email,
                password: password,
                fb_status:fb_status2
            })
            .timeout(ENV.timeout)
            .map((data) => {
                return data.json()
            })
    }

        faq(): Observable < any > {
        return this.http.get(ENV.mainApi + '/faqs', {
            })
            .timeout(ENV.timeout)
            .map((data) => {
                return data.json()
            })
    }


       filter(id,fbstatus,lower,upper):Observable<any>{
        return this.http.post(ENV.mainApi+'/filter',{
         email:id,
         fb_status:fbstatus, 
         min_range:lower,
         max_range:upper
  })
        .timeout(ENV.timeout)
        .map((data)=>{
            return data.json()
        })
          
       }
       pricedetailsort(id,fbstatus,event):Observable<any>{
         return this.http.post(ENV.mainApi+'/filter',{
        email:id,
         fb_status:fbstatus,
         type:event 
         
  })
         .timeout(ENV.timeout)
          .map((data)=>{
            return data.json()
          }) 

 }

 delpost(userid,fbstatus,id):Observable<any>
       {
 return this.http.post(ENV.mainApi+'/job/destroy',{
    email:userid,
  fb_status:fbstatus,
  id:id  
 })
           

       }

    loginWithFb(unique_id,username,fb_status1,emailfb,image):Observable<any>{
return this.http.post(ENV.mainApi+'/login',{
    unique_id:unique_id,
    username:username,
    fb_status:fb_status1,
      email:emailfb,
     link:image
})
.timeout(ENV.timeout)
            .map((data) => {
                return data.json()
            })
    }
        loginWithFb1(unique_id,username,fb_status1,email,pic,fb_type):Observable<any>{
return this.http.post(ENV.mainApi+'/login',{
    unique_id:unique_id,
    username:username,
    fb_status:fb_status1,
    email:email,
  license:pic,
  fb_type:fb_type

})
.timeout(ENV.timeout)
            .map((data) => {
                return data.json()
            })
    }
    forgetpassword(email): Observable < any > {
        return this.http.post(ENV.mainApi + '/forgot/password', {
                email: email,
            })
            .timeout(ENV.timeout)
            .map((data) => {
                return data.json()
            })
    }
    userData(id):Observable < any > {
        return this.http.post(ENV.mainApi + '/edit/profile', {
                user_id: id,
            })
            .timeout(ENV.timeout)
            .map((data) => {
                return data.json()
            })
    }
    editProfile(data):Observable < any > {
        return this.http.post(ENV.mainApi + '/update/profile', data)
            .timeout(ENV.timeout)
            .map((data) => {
                return data.json()
            })
    }
       jobcategory():Observable<any>{
        return this.http.get(ENV.mainApi+'/job/category',{})
        .timeout(ENV.timeout)
        .map((data)=>{
            return data.json()
        })
          
       }
    
       jobbpostservice(id,
job_title,
job_category,
job_description,
price,
address,
lat,
lng,
image1,
image2,
image3,
date,
start_time,
end_time,
fbstaus):Observable<any>{
           return this.http.post(ENV.mainApi+'/post/job',{

email:id,
job_title:job_title,
job_category:job_category,
job_description:job_description,
price:price,
job_location:address,
latitude:lat,
longitude:lng,
image1:image1,
image2:image2,
image3:image3,
date:date,
start_time:start_time,
end_time:end_time,
fb_status:fbstaus
})
           .timeout(ENV.timeout)
           .map((data)=>{
               return data.json()  
           })
       }

       postdetails(userid,fbstatus):Observable<any>{
           return this.http.post(ENV.mainApi+'/job/details',{
             email:userid,
             fb_status:fbstatus
           })
           .timeout(ENV.timeout)
           .map((data)=>{
               return data.json()
           })
       }
   


}