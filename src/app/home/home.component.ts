import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { RouterModule, Routes, Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  diseaseList: any = ['achalasia'];
  title = 'aida';
  page: any;
  form = new FormGroup({
    disease: new FormControl('', Validators.required)
  });
   
  get f(){
    return this.form.controls;
  }
   
  submit(){
    console.log(this.form.value);
    console.log(this.page);
    this.router.navigate([this.page]);
  }
  changeWebsite(e: any) {
    this.page=e.target.value;
  }

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

}
