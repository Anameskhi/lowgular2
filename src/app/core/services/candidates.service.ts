import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { Observable } from 'rxjs';
import { iCandidates } from '../interfaces/candidates';
import { IStatus } from '../interfaces/status';
import { ISkillId } from '../interfaces/skill_Ids';

@Injectable({
  providedIn: 'root'
})
export class CandidatesService extends BaseService {

  getAllUsers():Observable<iCandidates[]>{
    return this.get('candidates')
  }

  getCurrentUser(id: number):Observable<iCandidates>{
    return this.get(`candidates/${id}`)
  }

  getClientStatus():Observable<IStatus[]>{
    return this.get('client-statuses')
  }

  getSkills():Observable<ISkillId[]>{
    return this.get('skills')
  }

}
