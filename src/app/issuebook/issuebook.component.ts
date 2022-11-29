import { Component } from '@angular/core';

@Component({
  selector: 'app-issuebook',
  templateUrl: './issuebook.component.html',
  styleUrls: ['./issuebook.component.css']
})
export class IssuebookComponent {
  title=""
  name=""
  date=""
  membership=""

  readValues=()=>
  {
    let data:any={
    "title":this.title,"name":this.name,"date":this.date,"membership":this.membership}
    console.log(data)
  }
}
