import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-validator',
  templateUrl: './validator.component.html',
  styleUrls: ['./validator.component.css']
})
export class ValidatorComponent implements OnInit {

  constructor() { }

  @Input() validator:FormControl

  ngOnInit(): void {
  }

}
