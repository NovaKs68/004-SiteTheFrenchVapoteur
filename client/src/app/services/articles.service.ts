import { Injectable } from '@angular/core';
import {ArrayType} from "@angular/compiler";
import {Article} from "../models/article.model";

@Injectable({
  providedIn: 'root'
})

export class ArticlesService {

  constructor() {  }

  getAllArticles(): any {
    return new Promise((resolve, reject) => {
      fetch('http://localhost:8080/api/articles/', {
        method: 'GET',
        headers: { 'Content-type': 'application/json; charset=UTF-8' }
      })
        .then((response) => {
          response.json().then((data) => {
            console.log(data);
            resolve(data);
          });
        })
        .catch((err) => {
          console.log('Fetch Error : ', err);
          reject(err);
        });
    });
  }

  getOneArticle(idArticles: number): any {
    return new Promise((resolve, reject) => {
      fetch('http://localhost:8080/api/articles/' + idArticles, {
        method: 'GET',
        headers: { 'Content-type': 'application/json; charset=UTF-8' }
      })
        .then((response) => {
          response.json().then((data) => {
            console.log(data);
            resolve(data);
          });
        })
        .catch((err) => {
          console.log('Fetch Error : ', err);
          reject(err);
        });
    });
  }

  // titleMain: string, resume: string, imageMain: File, grade: number, opinion: string, dateCreation: string, dateModification: string, images: File[]

  postArticle(article: Article, files: File[]): any {
    return new Promise((resolve, reject) => {
      const articleData = new FormData();
      articleData.append('article', JSON.stringify({ article }));
      files.forEach(file => {
        articleData.append('image', file);
      });
      fetch('http://localhost:8080/api/articles/', {
        method: 'POST',
        body: articleData
      })
        .then((response) => {
          console.log(response);
          resolve(response.status);
        })
        .catch((err) => {
          console.log('Fetch Error : ', err);
          reject(err);
        });
    });
  }
}
