import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/models/Client';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-list-client',
  templateUrl: './list-client.component.html',
  styleUrls: ['./list-client.component.css']
})
export class ListClientComponent implements OnInit {

  total: number = 0;
  search: string = "";
  clients: Client[] = [];
  oldClients: Client[] = [];

  constructor(  private clientService: ClientService) { }

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
  totalBalance() {
    this.total = this.clients.reduce((total, client) => {
      return total + parseFloat( client.balance.toString());
    }, 0)
  }

}
