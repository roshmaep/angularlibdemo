import { Component } from '@angular/core';

@Component({
  selector: 'app-bookentry',
  templateUrl: './bookentry.component.html',
  styleUrls: ['./bookentry.component.css']
})
export class BookentryComponent {
title=""
author=""
description=""
publisher=""
language=""
distributor=""
releasedyear=""
price=""
image=""
readValues=()=>
  {
    let data:any={"image":this.image,
    "title":this.title,
    "author":this.author,"description":this.description,"publisher":this.publisher,"language":this.language,"distributor":this.distributor,"releasedyear":this.releasedyear,"price":this.price}
   console.log(data)
  }
}

