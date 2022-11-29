import { Component } from '@angular/core';

@Component({
  selector: 'app-reg',
  templateUrl: './reg.component.html',
  styleUrls: ['./reg.component.css']
})
export class RegComponent {
  name=""
  adhaar=""
  address=""
  pincode=""
  dob=""
  email=""
  phonenumber=""
  username=""
  password=""
  confirmpassword=""

  readValues=()=>
  {
    let data:any={"name":this.name,"adhaar":this.adhaar,"address":this.address,"pincode":this.pincode,"dob":this.dob,"email":this.email,"phonenumber":this.phonenumber,"username":this.username,"password":this.password,"confirmpassword":this.confirmpassword}
    console.log(data)
  }
}
