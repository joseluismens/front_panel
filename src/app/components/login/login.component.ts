import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ColaboradorService } from 'src/app/services/colaborador.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {


  //validar que ya se haya logeado
  //generar toast dinamic y controllar error 
  loginForm:FormGroup ;
  constructor(private fb: FormBuilder, private colaboradorService:ColaboradorService, private router : Router) {
    this.loginForm= this.fb.group({

      email:['',[Validators.required]],
      password:['',[Validators.required]]
  
    })
   }

  submit(){
    console.log(this.loginForm.value);

    if (this.loginForm.valid) {
       this.colaboradorService.login(this.loginForm.value).subscribe((res:any)=>{
        localStorage.setItem('token',res.token);
        localStorage.setItem('id',res.user._id);
        localStorage.setItem('nombres',`${res.user.nombres} ${res.user.apellidos}`);
        localStorage.setItem('rol',res.user.rol);
        localStorage.setItem('email',res.user.email);

          this.router.navigate(['dashboard']);

          console.log(res);
          
       },(error)=> console.log(error))
       
       
    }
    
  }
}
