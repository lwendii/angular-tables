import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { PeriodicElement } from '../_shared/models/periodic-element';
import { PeriodicElementParameter } from '../_shared/models/periodic-element-parameter';

// const ELEMENT_DATA: PeriodicElement[] = [
//   {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
//   {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
//   {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
//   {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
//   {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
//   {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
//   {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
//   {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
//   {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
//   {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
// ];

const COMPLEX_DATA: PeriodicElement[] = [
  { name: 'Hydrogen', parameters: [ { parameterName: 'weight', parameterValue: 1.0079, parameterDisplayName: 'Weight' }, { parameterName: 'symbol', parameterValue: 'H', parameterDisplayName: 'Symbol' } ] },
  { name: 'Helium', parameters: [ { parameterName: 'weight', parameterValue: 4.0026, parameterDisplayName: 'Weight' }, { parameterName: 'symbol', parameterValue: 'He', parameterDisplayName: 'Symbol'} ] },
  { name: 'Lithium', parameters: [ { parameterName: 'weight', parameterValue: 6.941, parameterDisplayName: 'Weight' }, { parameterName: 'symbol', parameterValue: 'Li', parameterDisplayName: 'Symbol'} ] },
];

@Component({
  selector: 'app-dynamic-table',
  templateUrl: './dynamic-table.component.html',
  styleUrls: ['./dynamic-table.component.scss']
})
export class DynamicTableComponent {
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  columns: any[] = [
    // {
    //   columnDef: 'position',
    //   header: 'No.',
    //   cell: (element: PeriodicElement) => `${element.position}`,
    // }
  ];
  dataSource = new MatTableDataSource<PeriodicElement>(COMPLEX_DATA);
  displayedColumns = this.columns.map(c => c.columnDef);

  ngOnInit() {
    COMPLEX_DATA[0].parameters.forEach((param: PeriodicElementParameter) => {
      let colDef = { 
        columnDef: param.parameterName, 
        header: param.parameterDisplayName, 
        cell: (element: PeriodicElement) => `${element.parameters.find((x: PeriodicElementParameter) => x.parameterName === param.parameterName)?.parameterValue}`
      }

        console.log('param name', param.parameterName)
        console.log('param name []', COMPLEX_DATA[0].parameters.find((x: PeriodicElementParameter) => x.parameterName === param.parameterName)?.parameterValue)
        this.columns.push(colDef);
    });

    console.log(this.columns);

    this.displayedColumns = this.columns.map(c => c.columnDef);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}
