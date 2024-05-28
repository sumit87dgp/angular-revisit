import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrl: './servers.component.css'
})
export class ServersComponent implements OnInit {
  allowNewServers = false;

  constructor(){
    setTimeout(()=>{
      this.allowNewServers = true;
    },2000)

  }
  ngOnInit() {
    //throw new Error('Method not implemented.');
  }

}
