import { Injectable } from '@angular/core';
import { enviroment } from 'src/enviroments/enviroment';
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class ClienteService {
   base_url = enviroment.base_url;
  constructor(private http : HttpClient) { }



  create(data:any){
    return  this.http.post(`${this.base_url}cliente`,data);
  }

  obtenerClientes(){
    return  this.http.get(`${this.base_url}cliente`);
  }

}
