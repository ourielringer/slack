import { Component, OnInit } from '@angular/core';
import { datdService } from 'src/app/servises/servisdatd.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-pasword',
  templateUrl: './pasword.component.html',
  styleUrls: ['./pasword.component.css']
})
export class PaswordComponent implements OnInit {

  constructor(private svc:datdService) { }

  signin = new FormGroup({
    pasword: new FormControl('', [Validators.required,Validators.minLength(2)])
  })                


  ngOnInit(): void {
  }

  onSubmit(){
    console.log("is work");

    this.svc.dataArr.push(this.signin.value)
    console.log(this.svc.dataArr);
  }

}
