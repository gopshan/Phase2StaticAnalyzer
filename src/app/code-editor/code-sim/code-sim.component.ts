import { Component, OnInit } from '@angular/core';
import { CodeSimService } from './CodeSim.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-code-sim',
  templateUrl: './code-sim.component.html',
  styleUrls: ['./code-sim.component.css']
})
export class CodeSimComponent implements OnInit {

  userCode: string;
  simRep:any;
  router: Router;
 constructor(private SimService: CodeSimService) { 
   this.userCode = window.history.state.data;
   this.getSimReport();
 }

 ngOnInit() {
   

  
 }

 public async getSimReport() {

 
   this.simRep =( await this.SimService.getSimReport(this.userCode)).data;
   console.log("Sim : ", this.simRep);
 }


}
