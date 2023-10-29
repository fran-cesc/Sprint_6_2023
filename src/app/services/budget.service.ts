import { Injectable, OnInit } from '@angular/core';
import { formValues, panelFormValues } from '../interfaces/formValues.interfaces';

@Injectable({
  providedIn: 'root'
})
export class BudgetService{
  // public totalBudgetValue: number = 0;

  constructor() { }

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


  public panelFormValues: panelFormValues[] = [
    {
      id: 'pages',
      num: 1
    },
    {
      id: 'languages',
      num: 1
    }
  ]


}
