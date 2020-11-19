import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import {Form, FormControl, FormGroup} from '@angular/forms';
import {ArticlesService} from '../../services/articles.service';
import { Article } from '../../models/article.model';

@Component({
  selector: 'app-article-card',
  templateUrl: './article-card.component.html',
  styleUrls: ['./article-card.component.scss']
})
export class ArticleCardComponent implements OnInit {

  imageFile: {link: string, file: any, name: string};
  files = [];
  public imagePreview: string;
  file: any;
  currentImage;
  articleForm = new FormGroup({
    titleMain: new FormControl(' '),
    resume: new FormControl(' '),
    imageMain: new FormControl(' '),
    grade: new FormControl(' '),
    opinion: new FormControl(' '),
    dateCreation: new FormControl(' '),
    dateModification: new FormControl(' '),
    images: new FormControl(' ')
  });

  constructor(private articlesService: ArticlesService) { }

  ngOnInit(): void {
  }

  onSubmit(): void {

    const article = new Article();
    article.titleMain = this.articleForm.get('titleMain').value;
    article.resume = this.articleForm.get('resume').value;
    article.grade = this.articleForm.get('grade').value;
    article.opinion = this.articleForm.get('opinion').value;
    article.dateCreation = this.articleForm.get('dateCreation').value;
    article.dateModification = this.articleForm.get('dateModification').value;

    this.articlesService.postArticle(article, this.files);

    console.log(this.files);
    console.warn(this.articleForm.value);
  }

  onUpload(event): void {
    if (event.target.files && event.target.files[0]) {
      const file = (event.target as HTMLInputElement).files[0];
      const reader = new FileReader();
      reader.onload = (rdr) => {
        this.currentImage = reader.result;
      };
      reader.readAsDataURL(event.target.files[0]);
      console.log(file);
    }
  }

  imagesPreview(event): Promise<any> {
    return new Promise(resolve => {
      if (event.target.files && event.target.files[0]) {
        const reader = new FileReader();
        reader.onload = (_event: any) => {
          const imageFile = {
            link: _event.target.result,
            file: event.srcElement.files[0],
            name: event.srcElement.files[0].name
          };
          resolve(imageFile);
        };
        reader.readAsDataURL(event.target.files[0]);
      }
    })
      .then((value) => {
        this.files.push(value);
        return value;
      });
  }


  save(): void {
    /*const formData = new FormData();
    formData.append('myImageToSend', this.imageFile.file);
    formData.append('title', 'Set your title name here');
    formData.append('description', 'Set your title description here');

    console.log(formData);
    // this.clientService.create(formData).subscribe(data => {});*/
  }
}



/*onUpload(event): void {
  if (event.target.files && event.target.files[0]) {
  const file = (event.target as HTMLInputElement).files[0];
  this.file.get('image').patchValue(file);
  this.file.get('image').updateValueAndValidity();
  const reader = new FileReader();
  reader.onload = (rdr) => {
    if (this.file.get('image').valid) {
      this.currentImage = reader.result as string;
    } else {
      this.currentImage = null;
    }
  };
  reader.readAsDataURL(event.target.files[0]);
}
}*/
