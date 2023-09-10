import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CandidatesService } from '../../core/services/candidates.service';
import { Observable } from 'rxjs';
import { iCandidates } from 'src/app/core/interfaces/candidates';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss']
})
export class UserEditComponent implements OnInit {
  getCurrUsr$!: Observable<iCandidates>;
  getClientStatus$ = this.candidateSrvc.getClientStatus();
  getSkills$ = this.candidateSrvc.getSkills();
  currentId!: number;

  constructor(
    private activateRoute: ActivatedRoute,
    private candidateSrvc: CandidatesService,
    private router: Router
  ) {}

  form: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    surname: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    statusId: new FormControl('', Validators.required),
    skillIds: new FormArray([], Validators.required)
  });

  ngOnInit(): void {
    this.activateRoute.params.subscribe(params => {
      this.currentId = params['id'];
      this.getCurrUsr$ = this.candidateSrvc.getCurrentUser(this.currentId);
      this.getCurrUsr$.subscribe(res => {
        this.form.patchValue(res);

        const skillIds = res.skillIds || [];
        const skillIdsFormArray = this.form.get('skillIds') as FormArray;
        skillIds.forEach(skillId => {
          skillIdsFormArray.push(new FormControl(skillId));
        });
      });
    });
  }

  isChecked(skillId: string): boolean {
    const skillIdsFormArray = this.form.get('skillIds') as FormArray;
    return skillIdsFormArray.value.includes(skillId);
  }

  toggleSkill(skillId: string): void {
    const skillIdsFormArray = this.form.get('skillIds') as FormArray;
    const index = skillIdsFormArray.value.indexOf(skillId);
    
    if (index !== -1) {
      skillIdsFormArray.removeAt(index);
    } else {
      skillIdsFormArray.push(new FormControl(skillId));
    }
  }
  

  submit() {
    this.form.markAllAsTouched();
    console.log(this.form.value);
    if(this.form.valid){
      this.candidateSrvc.updateUser(this.currentId, {...this.form.value})
      .subscribe((res) => {
        this.form.reset();
        this.router.navigate(['candidates']);
        // this.toastSrv.success({ detail: "Success Message", summary: "ToDo successfully updated", duration: 3000 })
      });
    }
  }
}
