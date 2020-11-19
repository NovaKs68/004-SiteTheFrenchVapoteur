import { Component, OnInit } from '@angular/core';
import {ArticlesService} from '../../services/articles.service';

@Component({
  selector: 'app-header-blog',
  templateUrl: './header-blog.component.html',
  styleUrls: ['./header-blog.component.scss']
})
export class HeaderBlogComponent implements OnInit {
  colorHexaRedOrBlack: string;
  constructor(private articlesService: ArticlesService) { }

  ngOnInit(): void {
  }

  requestSend(): void {
    // this.articlesService.postArticle('Le nouvel article', 'Je vous coneil fortement de lire cette article !', 'ok' , 8, 'Je pense que c\'est un bon article. Achetez le !', '2020/11/16', null, 'ok' )
  }

}
