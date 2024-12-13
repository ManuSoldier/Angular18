import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CardModule } from 'primeng/card';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [TableModule, HttpClientModule, CardModule],
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  userList: any = { ml_userRegistration: [] };

  constructor(private http: HttpClient) {
    this.getUserDetails();
  }

  ngOnInit(): void {}

  getUserDetails() {
    
    this.http.get('https://localhost:44384/api/UserRegistration/GetUser').subscribe((res: any) => {
      this.userList = res;  
    });
  }

  editUser(user: any) {
    console.log('Editing user:', user);
   
  }

  saveUser(user: any) {
    this.http.put(`https://localhost:44384/api/UserRegistration/UpdateUser`, user).subscribe(
      (res: any) => {
        console.log('User saved:', res);
      }
    );
  }

  deleteUser(user: any) {
    this.http.delete(`https://your-api-url.com/api/users/${user.u_ID}`).subscribe(
      () => {
        const index = this.userList.ml_userRegistration.indexOf(user);
        if (index > -1) {
          this.userList.ml_userRegistration.splice(index, 1);
        }
        console.log('User deleted');
      }
    );
  }
}
