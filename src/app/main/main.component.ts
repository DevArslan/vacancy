import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RequestComponent } from "./request/request.component";
import { ApiService } from "../shared/api.service";
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor(public dialog: MatDialog, private API : ApiService, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.API.checkUserToTelegram()

    this.API.requestOK.subscribe((response) => {
      console.log('asdasds')
      this.snackBar.open(response, 'OK', {
        duration: 2000,
        verticalPosition: 'top',
        panelClass: ['success-snackbar'],
      });
    });
  }

  openModal(){
    const dialogRef = this.dialog.open(RequestComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
