import { Component, OnInit} from '@angular/core';


@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.scss']
})
export class RequestComponent implements OnInit {

  
  name: string
  phone: string

  constructor() { }

  sendRequest(){
    console.log(this.name)
    console.log(this.phone)
  }

  ngOnInit(): void {

  }



}
