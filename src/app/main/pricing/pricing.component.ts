import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.scss']
})
export class PricingComponent implements OnInit {

  constructor() { }
  
  cardData: { title: string, cost: number, description: string, imageLink: string , todos: string[]}[] = [
    {
      title : 'Экономный',
      cost : 500,
      description: 'Бюджетное решение, повышающее ваши шансы устроиться на желаемую работу ',
      imageLink: '../../assets/images/simple.png',
      todos: ['Составление резюме', 'Консультация со специалистом единоразово']
    },
    {
      title : 'Базовый',
      cost : 1000,
      description: 'Оптимальное решение для большинства людей',
      imageLink: '../../assets/images/basic.png',
      todos: ['Составление резюме', 'Консультация ограниченное количество раз']
    },
    {
      title : 'Продвинутый',
      cost : 1500,
      description: 'Комплексное решение, которое гарантированно доведет вас до желаемого результата',
      imageLink: '../../assets/images/pro.png',
      todos: ['Составление резюме', 'Консультация перед каждым собеседованием', 'Проведение учебного собеседования онлайн', 'База возможных вопросов']
    }
  ]

  ngOnInit(): void {
    
  }

}
