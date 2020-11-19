import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderBlogComponent } from './components/header-blog/header-blog.component';
import {RouterModule, Routes} from '@angular/router';
import { BlogViewComponent } from './pages/blog-view/blog-view.component';
import { ArticleCardComponent } from './components/article-card/article-card.component';
import {ReactiveFormsModule} from "@angular/forms";

const appRoutes: Routes = [
  { path: '', component: BlogViewComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderBlogComponent,
    BlogViewComponent,
    ArticleCardComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        RouterModule.forRoot(appRoutes),
        ReactiveFormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
