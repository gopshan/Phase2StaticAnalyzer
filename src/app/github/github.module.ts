import {NgModule} from '@angular/core';

import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

import { from } from 'rxjs';

import { PmdModule } from '../pmdTool/pmd.module';
import { GithubComponent } from './github.component';
import { PmdComponent } from '../pmdTool/pmd.component';
import { AppModule } from '../app.module';
import { CsComponent } from '../chechStyleTool/cs.component';
import { GithubService } from './github.service';



@NgModule({
declarations:[PmdComponent,CsComponent],
imports:[CommonModule,HttpClientModule,FormsModule,PmdModule],
exports:[CsComponent],
providers:[GithubService],
bootstrap: [GithubComponent,CsComponent]
})

export class GithubModule{
}