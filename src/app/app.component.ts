import { Component, OnInit } from '@angular/core';
import { Route, Router, RouterModule, RouterOutlet } from '@angular/router';
import { AgGridAngular, AgGridModule } from 'ag-grid-angular';
import { ColDef } from 'ag-grid-community';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-quartz.css';
import { CardComponent } from './buttons/card.component';
import { ActionsComponent } from './buttons/actions.component';
import { ButtonRendererComponent } from './buttons/button-render.component';
import { CrewService } from './services/crew.service';
import { CommonModule } from '@angular/common';
import { GridApi } from 'ag-grid-community';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, // Layout işlemleri modülü
    RouterModule, // yönlendirme modulü
    CommonModule, // NgFor NgStyle gibi ana angular bileşenleri için bunu aç
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {}
