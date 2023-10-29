import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { BudgetService } from '../services/budget.service';

@Component({
  selector: 'panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})

export class PanelComponent implements OnInit{
  pageValue: number = 1;
  languageValue: number = 1;
  totalWeb: number = 30;

  constructor( public BudgetService: BudgetService){}

  ngOnInit(): void {
    this.panelForm.setValue({
      numPages: '1',
      numLanguages: '1'
    });

  }


  public panelForm = new FormGroup({
    numPages: new FormControl('1', [Validators.required, Validators.min(1)]),
    numLanguages: new FormControl('1', [Validators.required, Validators.min(1)]),
  });

  @Output()
  sendTotalWeb : EventEmitter<number> = new EventEmitter();

  counter(id: string){
    if (id == 'page-') {
      if (this.pageValue <= 0) return;
      this.pageValue--;
      this.BudgetService.panelFormValues[0].num = this.pageValue;
    } else if (id == 'page+'){
      this.pageValue++;
      this.BudgetService.panelFormValues[0].num = this.pageValue;
    } else if (id == 'language-'){
      if (this.languageValue <= 0) return;
      this.languageValue--;
      this.BudgetService.panelFormValues[1].num = this.languageValue;
    } else if (id == 'language+'){
      this.languageValue++;
      this.BudgetService.panelFormValues[1].num = this.languageValue;
    }
  }


  emitTotalWeb(): void{
    this.totalWeb = this.pageValue * this.languageValue *30;
    this.sendTotalWeb.emit(this.totalWeb);
  }

}




