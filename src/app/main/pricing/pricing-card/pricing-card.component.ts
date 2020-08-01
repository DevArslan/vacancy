import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RequestComponent } from "../../request/request.component";

@Component({
  selector: 'app-pricing-card',
  templateUrl: './pricing-card.component.html',
  styleUrls: ['./pricing-card.component.scss']
})
export class PricingCardComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  @Input() data: {title: string, cost: number, description: string, imageLink: string, todos: string[]};

  openModal(){
    const dialogRef = this.dialog.open(RequestComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  ngOnInit(): void {
    
  }

}
