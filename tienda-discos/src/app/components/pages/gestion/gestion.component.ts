import { Router, Routes } from '@angular/router';
import { ServicioService } from './../../../services/servicio.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-gestion',
  templateUrl: './gestion.component.html',
  styleUrls: ['./gestion.component.scss']
})
export class GestionComponent {
discoRegister! : FormGroup;

  constructor (
    private FormBuilder: FormBuilder,
    private servicioService: ServicioService,
    private router: Router) {

  }

  public newDisco = this.servicioService.discoData;
  public discoId = this.servicioService.discoData.id;

  ngOnInit() :void {
    this.discoRegister = this.FormBuilder.group({
      name:[this.newDisco.name,[Validators.required,Validators.maxLength(30)]],
      price:[this.newDisco.price,[Validators.required]],
      author:[this.newDisco.author,[Validators.required]],
      stars:[this.newDisco.stars,[Validators.required,Validators.min(0),Validators.max(5)]],
      image:[this.newDisco.image,[Validators.required]],
    });

    this.discoRegister.valueChanges.subscribe(changes => {
      this.newDisco = changes
    })
  }

  onSubmit() {
    // console.log(this.newDisco)
    this.servicioService.postDisco(this.newDisco).subscribe((data)=> {
      this.router.navigate(["/productos"])
    })

    this.discoRegister.reset()
  }
}
