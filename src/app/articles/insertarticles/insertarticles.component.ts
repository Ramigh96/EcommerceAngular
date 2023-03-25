import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Articles } from 'src/app/models/articles';
import { Scategories } from 'src/app/models/scategories';
import { ArticlesService } from 'src/app/services/articles.service';
import { ScategoriesService } from 'src/app/services/scategories.service';
@Component({
  selector: 'app-insertarticles',
  templateUrl: './insertarticles.component.html',
  styleUrls: ['./insertarticles.component.css']
})
export class InsertarticlesComponent {
  article: Articles = new Articles()
  scategorie: Scategories[]
  constructor(private artserv: ArticlesService, private router: Router,private scatserv: ScategoriesService) { }
  ngOnInit() {
    this.loadscategorie()
   }
    loadscategorie(){
      return this.scatserv.ListCategories().subscribe(data =>this.scategorie=data),
      (error:any)=>console.log(error)
  }
  
  ajoutproduit = () => {
    this.artserv.Addarticle(this.article).subscribe()
  }
}

