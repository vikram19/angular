import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: any;
  password: any;

  constructor(
    public http: HttpClient
  ) { }

  ngOnInit() {
  }

  onSubmit(e) {
    console.log(e);
    console.log(this.username);

    console.log(this.password);

    var data = {
      username: 'vikram',
      password: 'pass'
    };

    const headers = new HttpHeaders;
    headers.append('content', 'application/json');

    this.http.post('http://localhost:8080/users/authenticate', data, { headers: headers}).subscribe(data => {
      console.log(data);
    });
  }
}
