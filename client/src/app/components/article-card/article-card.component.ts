import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ArticlesService} from '../../services/articles.service';
import { Article } from '../../models/article.model';
import { mimeType } from '../../mime-type.validator';

@Component({
  selector: 'app-article-card',
  templateUrl: './article-card.component.html',
  styleUrls: ['./article-card.component.scss']
})
export class ArticleCardComponent implements OnInit {

  public articleForm: FormGroup;
  imageFile: {link: string, file: any, name: string};
  files = [];
  public imagePreview: string;
  file: any;
  currentImage;

  constructor(private articlesService: ArticlesService,
              private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.articleForm = this.formBuilder.group({
      titleMain: [null, Validators.required],
      resume: [null, Validators.required],
      grade: [0, Validators.required],
      opinion: [0, Validators.required],
      dateCreation: [0, Validators.required],
      dateModification: [0, Validators.required],
      image: [null, Validators.required, mimeType]
    });
  }

  onSubmit(): void {

    const article = new Article();
    article.titleMain = this.articleForm.get('titleMain').value;
    article.resume = this.articleForm.get('resume').value;
    article.grade = this.articleForm.get('grade').value;
    article.opinion = this.articleForm.get('opinion').value;
    article.dateCreation = this.articleForm.get('dateCreation').value;
    article.dateModification = this.articleForm.get('dateModification').value;

    console.log('Le contre file ' + this.files);
    console.log( 'le file ' + this.articleForm.get('image').value);


    this.articlesService.postArticle(article, this.files);

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
    });
  }

  onImagePick(event: Event): any {
    const file = (event.target as HTMLInputElement).files[0];
    this.articleForm.get('image').patchValue(file);
    this.articleForm.get('image').updateValueAndValidity();
    const reader = new FileReader();
    reader.onload = () => {
      if (this.articleForm.get('image').valid) {
        this.imagePreview = reader.result as string;
      } else {
        this.imagePreview = null;
      }
    };
    reader.readAsDataURL(file);
    this.files.push(file);
    console.log(this.files);
  }
}

