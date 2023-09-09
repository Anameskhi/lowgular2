import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserInfoRoutingModule } from './user-info-routing.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox'; 


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    UserInfoRoutingModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    MatCheckboxModule
  ]
})
export class UserInfoModule { }
