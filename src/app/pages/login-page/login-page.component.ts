import { FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

//adicionado manualmente
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { CustomValidator } from './../../validators/custom.validator';
import { DataService } from './../../services/data.service';
import { Ui } from './../../utils/ui';
import { resource } from 'selenium-webdriver/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  providers: [Ui, DataService]
})
export class LoginPageComponent implements OnInit {

  public form: FormGroup;
  public badNotifications: any = [];

  constructor(private fb: FormBuilder, private ui: Ui,
    private dataService: DataService, private router: Router) {

    let token = localStorage.getItem("mws.token");
    if (token) {
      this.router.navigateByUrl("/home");
    }

    this.form = this.fb.group({
      username: ["", Validators.compose([
        Validators.minLength(5),
        Validators.maxLength(160),
        Validators.required
        // CustomValidator.EmailValidator
      ])],

      password: ["", Validators.compose([
        Validators.minLength(6),
        Validators.maxLength(20),
        Validators.required
      ])]
    });
  }

  ngOnInit() {
    // this.dataService.getCourses().subscribe(result => {
    //   console.log(result);
    // }, error => {
    //   console.log(error);
    // });
  }

  showModal = () => {
    this.ui.setActive("modal");
  }

  hideModal = () => {
    this.ui.setInactive("modal");
  }

  submit = () => {
    this.dataService
      .authenticate(this.form.value).subscribe(
      result => {
        localStorage.setItem("mws.token", result.token);
        localStorage.setItem("mws.user", JSON.stringify(result.user))

        this.router.navigateByUrl("/home")
      }, error => {
        this.badNotifications = JSON.parse(error._body).errors;
      }
      );
  }
}
