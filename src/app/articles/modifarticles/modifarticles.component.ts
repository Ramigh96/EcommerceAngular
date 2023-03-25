import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { data } from 'jquery';
import { Articles } from 'src/app/models/articles';
import { ArticlesService } from 'src/app/services/articles.service';

@Component({
  selector: 'app-modifarticles',
  templateUrl: './modifarticles.component.html',
  styleUrls: ['./modifarticles.component.css']
})
export class ModifarticlesComponent {
  id:object
article:Articles = new Articles()
constructor(private artserv: ArticlesService , private router:Router,private activateroute:ActivatedRoute){}
ngOnInit(){
  this.id=this.activateroute.snapshot.params['id'];
  this.artserv.GetArticle(this.id).subscribe(data=>this.article=data)
}
modifarticle(){
  this.artserv.UpdateArticle(this.id,this.article).subscribe(art=>this.router.navigate(["larticles"]))
}
}
