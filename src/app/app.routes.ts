import { Routes } from '@angular/router';
import { UserComponent } from './Components/user/user.component';
import { AddUserComponent } from './Components/add-user/add-user.component';

export const routes: Routes = [
    {
        path:'userList',
        component: UserComponent
    },
    {
        path:'newUser',
        component:AddUserComponent
    }

];

