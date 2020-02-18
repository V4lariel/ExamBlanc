import { Component, OnInit } from '@angular/core';
import {Shoes} from "../../models/shoes";
import {ActivatedRoute, Router} from "@angular/router";
import {ShoesService} from "../../services/shoes.service";

@Component({
  selector: 'app-edit-shoes',
  templateUrl: './edit-shoes.component.html',
  styleUrls: ['./edit-shoes.component.css']
})
export class EditShoesComponent implements OnInit {
shoesForm: Shoes;
isLoading: boolean;
  constructor(private shoesService: ShoesService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
  this.isLoading = true;
  this.shoesService.getShoeByID(+this.route.snapshot.paramMap.get('id')).subscribe((data) => {
    this.shoesForm = data;
    this.isLoading = false;
    });
  }
  onSubmit() {
    this.shoesService.edit(this.shoesForm).subscribe(data => {
      this.router.navigate(['home']);
    });
  }
}
