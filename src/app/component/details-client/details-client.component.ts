import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Client } from 'src/app/models/Client';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-details-client',
  templateUrl: './details-client.component.html',
  styleUrls: ['./details-client.component.css']
})
export class DetailsClientComponent implements OnInit {
id :string="" ;
showBalnace :boolean =false  ;
client : any ;
  constructor(private clients:ClientService,
   private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id =this.route.snapshot.params['id'];
    this.clients.getOne(this.id).subscribe(client =>{
      this.client=client ; 
      console.log(this.client);
    }
      
    )
  }
  updateBalance(){
    this.client.id =this.id ;
    this.clients.update(this.client) ;
  }

}
