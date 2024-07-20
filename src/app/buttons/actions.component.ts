import { Component} from "@angular/core";
import { ICellRendererAngularComp } from "ag-grid-angular";
import { ICellRendererParams } from "ag-grid-community";

@Component({
  standalone: true,
  template: `<button (click)="onDeleteButton()">Delete</button>`
   + `<button (click)="onUpdateButton()">Update</button>`,
})
export class ActionsComponent implements ICellRendererAngularComp {
  agInit(params: ICellRendererParams): void {}
  refresh(params: ICellRendererParams) {
      return true;
  }

  onDeleteButton() {
    alert("Delete");
  }

  onUpdateButton() {
    alert("Update");
  }

}