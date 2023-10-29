import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BudgetService } from '../services/budget.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit, OnChanges {
  public total: number = 0;
  public totalWeb: number = 0;

  showPanel(){
    return (this.BudgetService.formValues[2].state) ? true : false;
  }

  constructor(public BudgetService: BudgetService){}
  ngOnChanges(changes: SimpleChanges): void {
    throw new Error('Method not implemented.');
  }

  ngOnInit(): void {
    this.budgetForm;
    this.initializeForm();
  }

  public budgetForm = new FormGroup ({
    seo: new FormControl(false),
    ads: new FormControl(false),
    web: new FormControl(false),
  });

  initializeForm(){
    this.BudgetService.formValues.forEach( (object, index) => {
      this.budgetForm.get(object.id)?.valueChanges.subscribe(
        currentState => {
          object.state = currentState;
          if (currentState == true){
            this.total += object.value;
            if (object.id == 'web') this.totalWeb = 30;
          } else {
            if (object.id == 'web') this.totalWeb = 0;
            this.total -= object.value;
          }
        })
      }
  )
  }

  functionTotalWeb(value: number): void{
    this.totalWeb = value;
  }



}



