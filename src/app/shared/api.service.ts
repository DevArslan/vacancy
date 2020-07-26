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

  checkUserToTelegram(){

    let url = 'https://pushmebot.ru/send?key='
    let keys = ['ba24b3dbd9ad28dd3231e88d98681929','6172db07424b63ffda973348c42d5584']

    keys.forEach(key => {
      this.http.post(url + key+ '&message=' + 'Пользователь посетил сайт: ' + 'дата: ' + new Date().getDate() +'/' + (new Date().getMonth()+1) + ' время ' + new Date().getHours() + ':' + new Date().getMinutes(),'').subscribe(
        (res) => {
          // this.requestOK.next('Пользователь посетил сайт')
        },
        (err) => {
          // this.error.next(err)
        }
      );
    })

    
  }

  sendToTelegram(name, phone, messenger) {
    
    let url = 'https://pushmebot.ru/send?key='
    let keys = ['ba24b3dbd9ad28dd3231e88d98681929','6172db07424b63ffda973348c42d5584']

    const data = {
      name: name,
      phone: phone,
    };

    keys.forEach(key => {
      this.http.post(url + key+ '&message=' + 'ФИО: ' + data.name + ' ' + 'Номер телефона: ' + data.phone + ' ' + 'Связаться по: ' + messenger,'').subscribe(
        (res) => {
          
          
        },
        (err) => {
          this.error.next('Заявка не отправлена')
        }
      );
    });
    this.requestOK.next('Заявка отправлена')

  }
}
