import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Client } from 'src/app/models/Client';
import { ClientService } from 'src/app/services/client.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css']
})
export class AddClientComponent implements OnInit {

  clientForm = new FormGroup({
    firstName: new FormControl("", [Validators.required, Validators.minLength(3)]),
    lastName: new FormControl("", Validators.required),
    phone: new FormControl("", Validators.required),
    email: new FormControl("", [Validators.required, Validators.email]),
    balance: new FormControl(0, Validators.pattern('[0-9]*')),
  })
  client : Client ={
    firstName :"",
    lastName:"",
    email:"" ,
    phone:"",
    balance:0
  };
  constructor( private toastr: ToastrService,  private router: Router, 
    private clientService: ClientService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.clientService.save(this.client);
    return this.router.navigate(['/']);
  }

 
}
