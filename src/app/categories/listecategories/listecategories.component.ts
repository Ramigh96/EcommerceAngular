import { Component } from '@angular/core';
import { Categories } from 'src/app/models/categories';
import { CategoriesService } from 'src/app/services/categories.service';
@Component({
  selector: 'app-listecategories',
  templateUrl: './listecategories.component.html',
  styleUrls: ['./listecategories.component.css']
})
export class ListecategoriesComponent {
  categories : Categories[]
  constructor(private catserv:CategoriesService){}
  ngOnInit(){
    return this.catserv.ListCategories().subscribe(data =>this.categories = data),
    (err:any)=>console.log(err)
  }
}
