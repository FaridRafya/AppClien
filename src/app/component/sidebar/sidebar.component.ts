import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/models/Client';
import { ClientService } from 'src/app/services/client.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

 
  total: number = 0;
  search: string = "";
  clients: Client[] = [];
  oldClients: Client[] = [];

  constructor(
    private toastr: ToastrService,
    private clientService: ClientService) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.clientService._getAll()
        .subscribe((res: Client[]) => {
          this.oldClients = this.clients = res
          this.totalBalance();
        })
  }

  destroyClient(id: string) {
    this.clientService.delete(id)
        .then(() => this.toastr.info('Ce client a été supprimé avec succès', 'Suppression', {
          positionClass: 'toast-bottom-left'
        }))
        .catch(err => this.toastr.warning(err.message, 'Erreur', {
          positionClass: 'toast-bottom-left'
        }))
  }

  searchClient() {

     if(!this.search) {
       this.clients = this.oldClients;
       this.totalBalance();
       return;
     }

    this.clients = this.clients
       .filter(client => client.firstName.includes(this.search) ||
          client.lastName.includes(this.search) || 
          client.phone.includes(this.search) || 
          client.email.includes(this.search))

          this.totalBalance();
     
  }

  totalBalance() {
    this.total = this.clients.reduce((total, client) => {
      return total + client.balance;
    }, 0)
  }

}
