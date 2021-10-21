import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  fieldArray: Array<any> = [];
  newAttribute: any = {};

  firstField = true;
  firstFieldName = 'First Item name';
  isEditItems!: boolean;

  addFieldValue() {
    if (this.fieldArray.length <= 2) {
      this.fieldArray.push(this.newAttribute);
      this.newAttribute = {};
    } else {
      
    }
  }

  deleteFieldValue(index: any) {
    this.fieldArray.splice(index, 1);
  }

  onEditCloseItems() {
    this.isEditItems = !this.isEditItems;
  }
}
