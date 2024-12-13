import { Component,OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenubarModule } from 'primeng/menubar';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,MenubarModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  items: MenuItem[] | undefined;
  
  ngOnInit(): void {
    this.items = [
        {
            label: 'Home',
            icon: 'pi pi-home',
            
        },
        {
            label: 'Admin',
            items: [
                {
                    label: 'Add User',
                    icon: 'pi pi-user-plus',
                    routerLink:['/newUser']
                    
                },
                {
                    label: 'User Details',
                    icon: 'pi pi-user-edit',
                    routerLink:['/userList']
                    
                },
            ]
       
        },
        {
            label: 'User',
            icon: 'pi pi-search',
            items: [
                {
                    label: 'User Registration',
                    icon: 'pi pi-user'
                },
                {
                    label: 'User Login',
                    icon:'pi pi-users'
                },
                {
                    label: 'UI Kit',
                    icon: 'pi pi-pencil'
                },
                
            ]
        },
        {
            label: 'Contact',
            icon: 'pi pi-envelope'
        }
    ]
  }
}
