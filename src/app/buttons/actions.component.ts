import { Component} from "@angular/core";
import { ICellRendererAngularComp } from "ag-grid-angular";
import { ICellRendererParams } from "ag-grid-community";

@Component({
  standalone: true,
  templateUrl: './actions.component.html'
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