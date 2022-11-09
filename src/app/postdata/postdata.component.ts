import { Component, OnInit } from '@angular/core';
import { UserdataService } from '../userdata.service';

@Component({
  selector: 'postdata',
  templateUrl: './postdata.component.html',
  styleUrls: ['./postdata.component.css']
})
export class PostdataComponent implements OnInit {

  constructor(
    private userdataService: UserdataService
  ) { }

  ngOnInit(): void {
  }

  postData(name:string, job:string) {
    this.userdataService.postData(name, job).subscribe((data) => {
      console.log(data);
    });
  }

  onSubmit(form:any) {
    this.postData(form.value.name, form.value.job);
    console.log(`Name: ${form.value.name}, Job: ${form.value.job} submitted successfully!`);
  }

  isSubmitted(form:any) {
    return form.submitted;
  }
}