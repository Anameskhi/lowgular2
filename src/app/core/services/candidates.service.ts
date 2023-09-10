import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { Observable, Subject } from 'rxjs';
import { iCandidates } from '../interfaces/candidates';
import { IStatus } from '../interfaces/status';
import { ISkill } from '../interfaces/skill_Ids';

@Injectable({
  providedIn: 'root'
})
export class CandidatesService extends BaseService {

  usrSub$:Subject<iCandidates> = new Subject<iCandidates>()

  getAllUsers():Observable<iCandidates[]>{
    return this.get('candidates')
  }

  getCurrentUser(id: number):Observable<iCandidates>{
    return this.get(`candidates/${id}`)
  }

  getClientStatus():Observable<IStatus[]>{
    return this.get('client-statuses')
  }

  getSkills():Observable<ISkill[]>{
    return this.get('skills')
  }

  updateUser(userId:number,body: iCandidates):Observable<iCandidates>{
    return this.put(`candidates/${userId}`, body)
  }

}
