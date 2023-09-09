import { Component } from '@angular/core';
import { CandidatesService } from '../../core/services/candidates.service';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.scss']
})
export class AllUsersComponent {

  getAllCandidates$ = this.candidateSrvc.getAllUsers()

  constructor(
    private candidateSrvc: CandidatesService
  ){}

}
