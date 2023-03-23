import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-aside-cliente',
  templateUrl: './aside-cliente.component.html',
  styleUrls: ['./aside-cliente.component.css']
})
export class AsideClienteComponent {

  id:any;

  constructor( private route :ActivatedRoute){
    this.route.params.subscribe(
      (params)=>{
        this.id = params['id'];
        console.log(this.id);
        
      }
    )
  }
}
