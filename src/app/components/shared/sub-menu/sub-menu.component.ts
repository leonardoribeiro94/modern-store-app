import { Component, OnInit } from '@angular/core';
import { CartService } from './../../../services/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sub-menu',
  templateUrl: './sub-menu.component.html'
})
export class SubMenuComponent implements OnInit {

  public totalItems: number = 0;
  public user: string;

  constructor(private cartService: CartService, private router: Router) {
    this.cartService.cartChange.subscribe((data) => {
      console.log(data);
      this.totalItems = data.length;
    });

    let data: any = JSON.parse(localStorage.getItem("mws.user"));
    if (data) {
      this.user = data.name;
    }
  }

  ngOnInit() {

  }

  logout(): void {
     //localStorage.clear();
     localStorage.removeItem("mws.token");
     localStorage.removeItem("mws.user");
     
    this.router.navigateByUrl("/");
  }
}
