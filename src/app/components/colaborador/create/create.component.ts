import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ColaboradorService } from 'src/app/services/colaborador.service';

@Component({
  selector: 'app-create-colaborador',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateColaboradorComponent {

  colaboradorForm:FormGroup;

  constructor(private formBuilder: FormBuilder , private colaboradorService: ColaboradorService,
    private router: Router){

    this.colaboradorForm = this.formBuilder.group({
      nombres:['', Validators.required],
      apellidos:['', Validators.required],
      genero:['', Validators.required],
      email:['', Validators.required],
      telefono:['', Validators.required],
      n_doc:['', Validators.required],
      rol:['', Validators.required],
      pais:['', Validators.required]







    })

  }

  submit(){
    if (this.colaboradorForm.valid) {
      this.colaboradorService.create(this.colaboradorForm.value).subscribe((res)=>{
          if (res!=undefined) {
            this.router.navigate(['/colaborador']);
          }

          
      })
    }
    
  }
}
