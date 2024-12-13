import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { CardModule } from 'primeng/card';


interface City {
  name: string;
  code: string;
}

@Component({
  selector: 'app-add-user',
  standalone: true,    
  imports: [DropdownModule,FormsModule, InputTextModule,CardModule],  
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']  
})
export class AddUserComponent {

  user = {
    name: '',
    email: '',
    phone: '',
    role: '',
  };

  roles = [
    { label: 'User', value: 'User' },
    { label: 'DepartmentAdmin', value: 'DepartmentAdmin' },
  ];

  onSubmit() {
    console.log('New User Details:', this.user);
    // Here, you can integrate your API call to save the new user details
    
    alert('User added successfully!');
    this.resetForm();
  }

  resetForm() {
    this.user = {
      name: '',
      email: '',
      phone: '',
      role: '',
    };
  }
}
