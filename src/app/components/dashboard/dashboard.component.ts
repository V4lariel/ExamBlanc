import { Component, OnInit } from '@angular/core';
import {ShoesService} from "../../services/shoes.service";
import {Shoes} from "../../models/shoes";
import {faEdit} from '@fortawesome/free-solid-svg-icons/faEdit';
import {faTrash} from '@fortawesome/free-solid-svg-icons';
import {Observable} from "rxjs";
import {datepickerAnimation} from "ngx-bootstrap/datepicker/datepicker-animations";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
shoes: Shoes[];
faEdit = faEdit;
faTrash = faTrash;
isLoading: boolean;

  constructor(private shoesService: ShoesService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.isLoading = true;
    this.shoesService.getAllShoes().subscribe((data: Shoes[]) => {
      this.shoes = data;
      this.isLoading = false;
    })
  }
  deleteShoe(id: number) {
    this.shoesService.deleteShoe(id).subscribe(data => {
      this.router.navigate(['home']);
    });
  }
}
