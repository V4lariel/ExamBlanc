import { Component, OnInit } from '@angular/core';
import {Shoes} from "../../models/shoes";
import {ShoesService} from "../../services/shoes.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-shoes',
  templateUrl: './add-shoes.component.html',
  styleUrls: ['./add-shoes.component.css']
})
export class AddShoesComponent implements OnInit {
  shoesForm: Shoes;
  isLoading: boolean;
  constructor(private shoesService: ShoesService,
              private router: Router) { }

  ngOnInit(): void {
    this.shoesForm = new Shoes();
  }
  onSubmit() {
    this.shoesService.add(this.shoesForm).subscribe(data => {
      this.router.navigate(['/home'])
    })
  }
}
