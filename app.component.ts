import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  sidebarCollapsed = false;

  toggleSidebar() {
    this.sidebarCollapsed = !this.sidebarCollapsed;
  }

  // Example data for ag-Grid
  colDefs = [
    { field: 'id', headerName: 'ID' },
    { field: 'name', headerName: 'Name' },
    { field: 'status', headerName: 'Status' },
  ];

  rowData = [
    { id: 1, name: 'John Doe', status: 'Approved' },
    { id: 2, name: 'Jane Smith', status: 'Pending' },
    { id: 3, name: 'Sam Wilson', status: 'Rejected' },
  ];
}
