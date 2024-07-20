import { Component} from "@angular/core";
import { ICellRendererAngularComp } from "ag-grid-angular";
import { ICellRendererParams } from "ag-grid-community";

@Component({
  standalone: true,
  template: `<button (click)="onEditButton()">Edit</button>`
   + `<button (click)="onDeleteButton()">Delete</button>`,
})
export class ActionsComponent implements ICellRendererAngularComp {
  agInit(params: ICellRendererParams): void {}
  refresh(params: ICellRendererParams) {
      return true;
  }

  onEditButton() {
    alert("Edit");
  }

  onDeleteButton() {
    alert("Delete");
  }

}