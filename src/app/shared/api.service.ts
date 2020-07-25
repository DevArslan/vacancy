import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(public http : HttpClient) { }

  requestOK = new Subject<string>()
  error = new Subject<string>()

  sendToTelegram(name, phone) {
    
    const url = 'https://pushmebot.ru/send?key=ba24b3dbd9ad28dd3231e88d98681929&message='

    const data = {
      name: name,
      phone: phone,
    };

    this.http.post(url + 'ФИО: ' + data.name + ' ' + 'Номер телефона: ' + data.phone ,'').subscribe(
      (res) => {
        this.requestOK.next('Заявка отправлена')
      },
      (err) => {
        this.error.next('Заявка не отправлена')
      }
    );
  }
}
