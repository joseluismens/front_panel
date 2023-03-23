import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ClienteService } from 'src/app/services/cliente.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-create-cliente',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateClienteComponent {


  clienteForm : FormGroup;

  constructor(private fb:FormBuilder, private clienteService: ClienteService,
     private toastService:ToastService,
     private router:Router
     
     ){

    this.clienteForm =  this.fb.group({
      nombres:['', Validators.required],
      apellidos:['', Validators.required],
      telefono:['', Validators.required],
      email:['', Validators.required],
     // fecha_nac:['',Validators.required],
      genero:['', Validators.required],
      n_doc:[''],
      pais:[''],
      ciudad:[''],
      asesor:[localStorage.getItem('id')]


    })
  }

  submit(){
    console.log(this.clienteForm.valid);
    
    if (this.clienteForm.valid){
      this.clienteService.create(this.clienteForm.value).subscribe((res:any)=>{
        if (res != undefined) {
          this.toastService.showSuccess('cliente registrado exitosamente!');
          this.router.navigate(['/cliente']);          
        }
      })
    }else{
      this.toastService.showError('Algunos campos son requeridos!');

    }
  }
}
