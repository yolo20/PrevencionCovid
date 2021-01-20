import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CifrasGenerales } from '../shared/cifras-generales';
import { PruevasCovid } from '../shared/pruevas-covid';

@Injectable({
  providedIn: 'root'
})
export class PruebasCovidService {


  url_Datos_Generales: string = 'https://opendata.arcgis.com/datasets/62f980982cb244e183aa7113c6ad3d93_2.geojson'

  url_Base_Pruevas: string = 'https://www.datos.gov.co/resource/8835-5baf.json';

  date: Date = new Date()

  constructor(
    private http: HttpClient, private datePipe: DatePipe
  ) {

  }


  getJsonPruebasCovid() {
    this.date.setDate(this.date.getDate() - 1)
    var date = this.datePipe.transform(this.date, "yyyy-MM-dd")
    return this.http.get<any>(this.url_Base_Pruevas + '?' + 'fecha=' + date + 'T00:00:00.000');
  }

  getCifrasGenerales() {
    return this.http.get<CifrasGenerales>(this.url_Datos_Generales);
  }
  

  
  // return this.http.get<CifrasGenerales>(this.url_Datos_Generales).subscribe(data => {
  //   data.features.forEach(element => {
  //     console.log(element.properties);
  //     console.log(element.properties.ACTIVOS_COL)
  //   });
  // })
  ​​​
}