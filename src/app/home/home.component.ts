import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { formValues } from '../interfaces/formValues.interfaces';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit{
  public totalBudgetValue: number = 0;

  public formValues: formValues[] = [
    {
      id: 'seo',
      state: false,
      value: 300
    },
    {
      id: 'ads',
      state: false,
      value: 400
    },
    {
      id: 'web',
      state: false,
      value: 500
    }
  ];

  public budgetForm = new FormGroup ({
    seo: new FormControl(false),
    ads: new FormControl(false),
    web: new FormControl(false),
  });

constructor() {}

ngOnInit(): void {
  this.formValues.forEach( (object, index) => {
    // this.budgetForm.get(`checkbox${index+1}`)?.valueChanges.subscribe ( currentState => {
      this.budgetForm.get(object.id)?.valueChanges.subscribe(
        currentState => {
        object.state = currentState;
        if (currentState == true){
          (this.totalBudgetValue += object.value);
      } else {
          (this.totalBudgetValue -= object.value);
      }
      console.log(object.state);
      })
  }
  )
}

}



