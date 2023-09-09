import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CandidatesService } from '../../core/services/candidates.service';
import { Observable } from 'rxjs';
import { iCandidates } from 'src/app/core/interfaces/candidates';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent implements OnInit {
  
  getCurrUsr$!: Observable<iCandidates>
  getClientStatus$ = this.candidateSrvc.getClientStatus()
  getSkills$ = this.candidateSrvc.getSkills()
  currentId!: number
  constructor(
    private activateRoute: ActivatedRoute,
    private candidateSrvc: CandidatesService
  ){}

  ngOnInit(): void {
    this.activateRoute.params.subscribe(params=>{
       this.currentId = params['id']
     this.getCurrUsr$ =  this.candidateSrvc.getCurrentUser(this.currentId)
    })
  

    console.log(this.currentId)
  }



}
