import { Component, OnInit} from '@angular/core';
import { ApiService } from "../../shared/api.service";

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.scss']
})
export class RequestComponent implements OnInit {

  
  name: string
  phone: string
  // gender: boolean
  messenger: string
  messengers: string[] = ['Позвоните мне','WhatsApp','Telegram','Viber']

  constructor(private API : ApiService) { }

  sendRequest(){
    this.API.sendToTelegram(this.name, this.phone, this.messenger)
  }

  ngOnInit(): void {

  }



}
