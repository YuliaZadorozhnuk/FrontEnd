import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {AccordionModule, BsDropdownModule, ModalModule, TooltipModule} from 'ngx-bootstrap';
import {EntryRequisitionComponent} from './entry-requisition/entry-requisition.component';
import {RouterModule, Routes} from '@angular/router';
import {CreateRequisitionComponent} from './create-requisition/create-requisition.component';
import {CompanyComponent} from './company/company.component';
import {UsersComponent} from './users/users.component';
import {UserAddComponent} from './user-add/user-add.component';
import {DriversComponent} from './drivers/drivers.component';
import {RequisitionComponent} from './requisition/requisition.component';
import {ViewRequisitionComponent} from './view-requisition/view-requisition.component';
import {EditUserComponent} from './edit-user/edit-user.component';
import {RegistrationComponent} from './registration/registration.component';
import {AuthorizationComponent} from './authorization/authorization.component';
import {HttpClientModule} from '@angular/common/http';
import {UsersService} from './users/users.service';
import {DriversService} from './drivers/drivers.service';
import {FormsModule} from '@angular/forms';
import { DriverAddComponent } from './driver-add/driver-add.component';
import { EditDriverComponent } from './edit-driver/edit-driver.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {InputMaskModule} from 'primeng/primeng';

const appRoutes: Routes = [
  { path: '', component: CompanyComponent},
  { path: 'entry-requisition', component: EntryRequisitionComponent},
  { path: 'create-requisition', component: CreateRequisitionComponent},
  { path: 'users', component: UsersComponent},
  { path: 'user-add', component: UserAddComponent},
  { path: 'registration', component: RegistrationComponent},
  { path: 'authorization', component: AuthorizationComponent},
  { path: 'drivers', component: DriversComponent},
  { path: 'requisition/:id', component: RequisitionComponent},
  { path: 'view-requisition', component: ViewRequisitionComponent},
  { path: 'edit-user', component: EditUserComponent},
  { path: 'driver-add', component: DriverAddComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    EntryRequisitionComponent,
    CreateRequisitionComponent,
    RegistrationComponent,
    CompanyComponent,
    UsersComponent,
    UserAddComponent,
    DriversComponent,
    RequisitionComponent,
    ViewRequisitionComponent,
    EditUserComponent,
    RegistrationComponent,
    AuthorizationComponent,
    DriverAddComponent,
    EditDriverComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    AccordionModule,
    BrowserAnimationsModule,
    InputMaskModule
  ],
  entryComponents: [EditDriverComponent],
  providers: [UsersService, DriversService],
  bootstrap: [AppComponent]
})
export class AppModule { }
