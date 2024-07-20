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
      Nationality: "French", 
      Title: "Captain",
      Days_On_Board: 496,
      Daily_Rate: 600,
      Currency: "USD",
      Total_Income: "297.600"
    },

    { id: 2,
      First_Name: "Mehmet", 
      Last_Name: "Kaya", 
      Nationality: "German", 
      Title: "Engineer",
      Days_On_Board: 244,
      Daily_Rate: 450,
      Currency: "EUR",
      Total_Income: "109.800"
    },

    { id: 3,
      First_Name: "Mustafa", 
      Last_Name: "Demir", 
      Nationality: "Canadian", 
      Title: "Cooker",
      Days_On_Board: 421,
      Daily_Rate: 380,
      Currency: "USD",
      Total_Income: "159.980"
    },

    { id: 4,
      First_Name: "Fatma", 
      Last_Name: "Şahin", 
      Nationality: "Turkish", 
      Title: "Mechanicer",
      Days_On_Board: 328,
      Daily_Rate: 240,
      Currency: "EUR",
      Total_Income: "78.720"
    },

    { id: 5,
      First_Name: "Fatih", 
      Last_Name: "Çelik", 
      Nationality: "Japanese", 
      Title: "Doctor",
      Days_On_Board: 93,
      Daily_Rate: 550,
      Currency: "USD",
      Total_Income: "51.150"
    },

    { id: 6,
      Total_Income: "508.730 USD + 188.520 EUR"
    }
  ];

  colDefs: ColDef[] = [
    {
      field: "Card_Page",
      cellRenderer: CardComponent,
      flex: 0.8
    },
    {
      field: "Actions",
      cellRenderer: ActionsComponent
    },
    { field: "First_Name" },
    { field: "Last_Name" },
    { field: "Nationality" },
    { field: "Title" },
    { field: "Days_On_Board",
      flex: 0.8
     },
    { field: "Daily_Rate",
      flex: 0.8
     },
    { field: "Currency",
      flex: 0.8
     },
    { field: "Total_Income",
      flex: 1.5
     },
    // { field: "" },
  ];

  onClick() {
    alert("Tıklandı");
  }
}
