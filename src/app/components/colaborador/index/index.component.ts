import { Component } from '@angular/core';
import { ColaboradorService } from 'src/app/services/colaborador.service';

@Component({
  selector: 'app-index-colaborador',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexColaboradorComponent {

  filter:string = '';
  colaboradores: any ;
  colaboradores_const: any ;

  constructor(private colaboradorService:ColaboradorService){

    this.colaboradorService.obtenerColaboradores().subscribe((data:any)=>{
      console.log(data);
      
      this.colaboradores = data;
      this.colaboradores_const = data;

    })
    
  }

  search(){
    var term = new RegExp(this.filter, 'i');
    this.colaboradores = this.colaboradores_const;
    this.colaboradores=this.colaboradores.filter((item:any)=> term.test(item.nombres) || 
                                            term.test(item.apellidos) ||
                                            term.test(item.email) ||
                                            term.test(item.telefono) 


    )
  }

}
