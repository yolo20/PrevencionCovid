import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PruevasCovid } from '../shared/pruevas-covid';

@Injectable({
  providedIn: 'root'
})
export class PruebasCovidService {


  // https://services.arcgis.com/BQTQBNBsmxjF8vus/ArcGIS/rest/services/Colombia_COVID19V/FeatureServer/2/query?where=1%3D1&outFields=*&outSR=4326&f=json

  url_Base_Pruevas: string = 'https://www.datos.gov.co/resource/8835-5baf.json';
  // url_Casos_Positivos: string = 'https://www.datos.gov.co/resource/gt2j-8ykr.json';
  date: Date = new Date()

  constructor(
    private http: HttpClient, private datePipe: DatePipe
  ) {

  }


  getJsonPruebasCovid() {
    this.date.setDate(this.date.getDate() - 1)
    var date = this.datePipe.transform(this.date, "yyyy-MM-dd")
    return this.http.get<PruevasCovid>(this.url_Base_Pruevas + '?' + 'fecha=' + date + 'T00:00:00.000').subscribe(data => {
        console.log(data);
      })
  }

  // getJsonCasosPositivos() {
  //   this.date.setDate(this.date.getDate() - 1)
  //   var date = this.datePipe.transform(this.date, "d/M/yyyy")
  //   return this.http.get<PruevasCovid>(this.url_Casos_Positivos + '?' + 'fecha_reporte_web=' + date + ' 0:00:00').subscribe(data => {
  //       console.log(data);
  //     })
  // }
  
  ​​​
}