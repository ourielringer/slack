import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { datdService } from 'src/app/servises/servisdatd.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  signin = new FormGroup({
    username: new FormControl('', [Validators.required,Validators.minLength(2)])
  })                

  constructor(private svc:datdService) { }



  ngOnInit(): void {
  }

  onSubmit(){
    console.log("is work");

    this.svc.dataArr.push(this.signin.value)
    console.log(this.svc.dataArr);
    
  }
}
