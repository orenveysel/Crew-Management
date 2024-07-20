import { Component} from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { AgGridAngular } from 'ag-grid-angular';
import { ColDef } from 'ag-grid-community';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-quartz.css';
import { CardComponent } from './buttons/card.component';
import { ActionsComponent } from './buttons/actions.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule, AgGridAngular],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent{
  
  crews = [
    { id: 1,
      First_Name: "Ahmet", 
      Last_Name: "Yılmaz", 
      Nationality: "France", 
      Title: "Captain",
      Days_On_Board: "A",
      Daily_Rate: "B",
      Currency: "C",
      Total_Income: "D"
    },

    { id: 2,
      First_Name: "Mehmet", 
      Last_Name: "Kaya", 
      Nationality: "German", 
      Title: "Engineer",
      Days_On_Board: "A",
      Daily_Rate: "B",
      Currency: "C",
      Total_Income: "D"
    },

    { id: 3,
      First_Name: "Mustafa", 
      Last_Name: "Demir", 
      Nationality: "Italian", 
      Title: "Cooker",
      Days_On_Board: "A",
      Daily_Rate: "B",
      Currency: "C",
      Total_Income: "D"
    },

    { id: 4,
      First_Name: "Fatma", 
      Last_Name: "Şahin", 
      Nationality: "Turkish", 
      Title: "Mechanicer",
      Days_On_Board: "A",
      Daily_Rate: "B",
      Currency: "C",
      Total_Income: "D"
    },

    { id: 5,
      First_Name: "Fatih", 
      Last_Name: "Çelik", 
      Nationality: "Madagascar", 
      Title: "Flap Jack",
      Days_On_Board: "A",
      Daily_Rate: "B",
      Currency: "C",
      Total_Income: "D"
    },

    { id: 6,
      Total_Income: "TOTAL INCOME"
    }
  ];

  colDefs: ColDef[] = [
    {
      field: "Card_Page",
      cellRenderer: CardComponent
    },
    {
      field: "Actions",
      cellRenderer: ActionsComponent
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

  onClick() {
    alert("Tıklandı");
  }
}
