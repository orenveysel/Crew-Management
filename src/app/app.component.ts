import { Component, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AgGridAngular } from 'ag-grid-angular';
import { ColDef } from 'ag-grid-community';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-quartz.css';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AgGridAngular],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  
  crews = [
    { First_Name: "Ahmet", 
      Last_Name: "Yılmaz", 
      Nationality: "France", 
      Title: "Captain",
      Days_On_Board: "A",
      Daily_Rate: "B",
      Currency: "C",
      Total_Income: "D"
    },

    { First_Name: "Mehmet", 
      Last_Name: "Kaya", 
      Nationality: "German", 
      Title: "Engineer",
      Days_On_Board: "A",
      Daily_Rate: "B",
      Currency: "C",
      Total_Income: "D"
    },

    { First_Name: "Mustafa", 
      Last_Name: "Demir", 
      Nationality: "Italian", 
      Title: "Cooker",
      Days_On_Board: "A",
      Daily_Rate: "B",
      Currency: "C",
      Total_Income: "D"
    },

    { First_Name: "Fatma", 
      Last_Name: "Şahin", 
      Nationality: "Turkish", 
      Title: "Mechanicer",
      Days_On_Board: "A",
      Daily_Rate: "B",
      Currency: "C",
      Total_Income: "D"
    },

    { Card_Page: "Card",
      Edit_Page: "Edit",  
      Delete_Crew: "Delete",
      First_Name: "Fatih", 
      Last_Name: "Çelik", 
      Nationality: "Madagascar", 
      Title: "Flap Jack",
      Days_On_Board: "A",
      Daily_Rate: "B",
      Currency: "C",
      Total_Income: "D"
    },

    {
      Total_Income: "TOTAL INCOME"
    }
  ];

  colDefs: ColDef[] = [
    {
      field: 'Card_Page',
      cellRenderer: (params: any) => {
        return `
          <button (click)="onCardClick(${params.rowIndex})">Card</button>
        `;
      }
    },
    {
      field: 'Edit_Page',
      cellRenderer: (params: any) => {
        return `
          <button (click)="onEditClick(${params.rowIndex})">Edit</button>
        `;
      }
    },
    {
      field: 'Delete_Crew',
      cellRenderer: (params: any) => {
        return `
          <button (click)="onDeleteClick(${params.rowIndex})">Delete</button>
        `;
      }
    },
    { field: "First_Name" },
    { field: "Last_Name" },
    { field: "Nationality" },
    { field: "Title" },
    { field: "Days_On_Board" },
    { field: "Daily_Rate" },
    { field: "Currency" },
    { field: "Total_Income" },
    // { field: "" },
  ];

  constructor() {}

  ngOnInit(): void {}

  onCardClick(rowIndex: any) {
    const rowData = this.crews[rowIndex];
    alert('Card button clicked for: ' + rowData.First_Name);
  }

  onEditClick(rowIndex: any) {
    const rowData = this.crews[rowIndex];
    alert('Edit button clicked for: ' + rowData.First_Name);
  }

  onDeleteClick(rowIndex: any) {
    const rowData = this.crews[rowIndex];
    alert('Delete button clicked for: ' + rowData.First_Name);
  }
}
