import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrl: './servers.component.css'
})
export class ServersComponent {
  allowNewServers = false;
  serverCreationStatus = 'No server was created'
  serverName = 'TestServer'


  constructor(){
    setTimeout(()=>{
      this.allowNewServers = true;
    },2000)

  }
  ngOnInit() {
    //throw new Error('Method not implemented.');
  }

  onCreateServer(){
    this.serverCreationStatus = 'Server was created. Name is ' + this.serverName
  }

}
