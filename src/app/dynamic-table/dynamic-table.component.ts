import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { PeriodicElement } from '../_shared/models/periodic-element';
import { PeriodicElementParameter } from '../_shared/models/periodic-element-parameter';

const COMPLEX_DATA: PeriodicElement[] = [
  { name: 'Hydrogen', parameters: [ { parameterName: 'weight', parameterValue: 1.0079, parameterDisplayName: 'Weight' }, { parameterName: 'symbol', parameterValue: 'H', parameterDisplayName: 'Symbol' }, { parameterName: 'position', parameterValue: 1, parameterDisplayName: 'No.'} ] },
  { name: 'Helium', parameters: [ { parameterName: 'weight', parameterValue: 4.0026, parameterDisplayName: 'Weight' }, { parameterName: 'symbol', parameterValue: 'He', parameterDisplayName: 'Symbol'}, { parameterName: 'position', parameterValue: 2, parameterDisplayName: 'No.'} ] },
  { name: 'Lithium', parameters: [ { parameterName: 'weight', parameterValue: 6.941, parameterDisplayName: 'Weight' }, { parameterName: 'symbol', parameterValue: 'Li', parameterDisplayName: 'Symbol'}, { parameterName: 'position', parameterValue: 3, parameterDisplayName: 'No.'} ] },
  { name: 'Beryllium', parameters: [ { parameterName: 'weight', parameterValue: 9.0122, parameterDisplayName: 'Weight' }, { parameterName: 'symbol', parameterValue: 'Be', parameterDisplayName: 'Symbol'}, { parameterName: 'position', parameterValue: 4, parameterDisplayName: 'No.'} ] },
  { name: 'Boron', parameters: [ { parameterName: 'weight', parameterValue: 10.811, parameterDisplayName: 'Weight' }, { parameterName: 'symbol', parameterValue: 'B', parameterDisplayName: 'Symbol'}, { parameterName: 'position', parameterValue: 5, parameterDisplayName: 'No.'} ] },
  { name: 'Carbon', parameters: [ { parameterName: 'weight', parameterValue: 12.0107, parameterDisplayName: 'Weight' }, { parameterName: 'symbol', parameterValue: 'C', parameterDisplayName: 'Symbol'}, { parameterName: 'position', parameterValue: 6, parameterDisplayName: 'No.'} ] },
  { name: 'Nitrogen', parameters: [ { parameterName: 'weight', parameterValue: 14.0067, parameterDisplayName: 'Weight' }, { parameterName: 'symbol', parameterValue: 'N', parameterDisplayName: 'Symbol'}, { parameterName: 'position', parameterValue: 7, parameterDisplayName: 'No.'} ] },
  { name: 'Oxygen', parameters: [ { parameterName: 'weight', parameterValue: 15.9994, parameterDisplayName: 'Weight' }, { parameterName: 'symbol', parameterValue: 'O', parameterDisplayName: 'Symbol'} ] },
  { name: 'Fluorine', parameters: [ { parameterName: 'weight', parameterValue: 18.9984, parameterDisplayName: 'Weight' }, { parameterName: 'symbol', parameterValue: 'F', parameterDisplayName: 'Symbol'} ] },
  { name: 'Neon', parameters: [ { parameterName: 'weight', parameterValue: 20.1797, parameterDisplayName: 'Weight' }, { parameterName: 'symbol', parameterValue: 'Ne', parameterDisplayName: 'Symbol'} ] },
];

@Component({
  selector: 'app-dynamic-table',
  templateUrl: './dynamic-table.component.html',
  styleUrls: ['./dynamic-table.component.scss']
})
export class DynamicTableComponent implements AfterViewInit{
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

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
    console.log('matsort', this.sort)
    COMPLEX_DATA[0].parameters.forEach((param: PeriodicElementParameter) => {
      let colDef = { 
        columnDef: param.parameterName, 
        header: param.parameterDisplayName, 
        cell: (element: PeriodicElement) => {
          const value = element.parameters.find((x: PeriodicElementParameter) => x.parameterName === param.parameterName)?.parameterValue;
          return `${value ? value : 'nA'}`
        }
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
    this.dataSource.sort = this.sort;

    this.dataSource.sortingDataAccessor = (item, property) => {
      switch(property) {
        case 'weight': return item.parameters.find((x: PeriodicElementParameter) => x.parameterName === 'weight').parameterValue;
        case 'symbol': return item.parameters.find((x: PeriodicElementParameter) => x.parameterName === 'symbol').parameterValue;
        default: return item.parameters.find((x: PeriodicElementParameter) => x.parameterName === property);
      }
    }
  }
}
