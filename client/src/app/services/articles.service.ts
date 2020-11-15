import { Injectable } from '@angular/core';

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
}
