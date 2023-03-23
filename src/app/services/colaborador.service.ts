import { Injectable } from '@angular/core';
import { enviroment } from 'src/enviroments/enviroment';
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class ColaboradorService {
   base_url = enviroment.base_url;
  constructor(private http : HttpClient) { }


  login(data:any){
    return  this.http.post(`${this.base_url}auth/login`,data);
  }
  create(data:any){
    return  this.http.post(`${this.base_url}colaborador`,data);
  }

  obtenerColaboradores(){
    return  this.http.get(`${this.base_url}colaborador`);
  }

}
