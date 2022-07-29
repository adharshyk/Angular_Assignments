import { Component, OnInit } from '@angular/core';
import { Salesperson } from '../salesperson';

@Component({
  selector: 'app-sales-person-list',
  templateUrl: './sales-person-list.component.html',
  styleUrls: ['./sales-person-list.component.css']
})
export class SalesPersonListComponent implements OnInit {

  // name: string = "Adharsh";

  salesPersonList: Salesperson[] = [new Salesperson("Adharsh", "K", "adharsh@gmail.com", 20000, "300"),
  new Salesperson("Ajina", "Joy", "ajina@gmail.com", 30000, "249"),
  new Salesperson("Reksha", "Prakash", "prakashrekha@gmail.com", 37000, "100"),
  new Salesperson("Rey","John","rey@gmail.com",40000,"200")
  ]

  salesPersonModel:Salesperson = new Salesperson("","","",0,"")

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.salesPersonList.push(this.salesPersonModel)
  }
}
