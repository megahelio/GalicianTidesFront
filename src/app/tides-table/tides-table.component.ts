import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { TidesService } from '../service/tides.service';
import { from } from 'rxjs/internal/observable/from';
import { Tide } from '../entities/tide';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TideDto } from '../entities/tide-dto';


@Component({
  selector: 'app-tides-table',
  templateUrl: './tides-table.component.html',
  styleUrls: ['./tides-table.component.css']
})
export class TidesTableComponent {
  protected dataColumns = ['dia', 'detalles']
  protected subcolumns = ['estado', 'hora', 'altura'];
  name?: string;

  protected dataSource = new MatTableDataSource<Tide>();
  constructor(private readonly tidesService: TidesService, private http: HttpClient) {
  }


  ngOnInit(): void {
    const params: Map<string, string> = new Map();
    params.set("idPorto", "7")
    params.set("dataIni", new Date().toLocaleDateString())
    
    params.set("dataFin", "28/10/2023")//TODO añadir una semana a dataIni
    this.tidesService.giveMe(params).subscribe((tideDto: TideDto) => {
      console.log(tideDto);
      console.log(tideDto.tides)
      this.dataSource.data = tideDto.tides;
    })
  }

}
