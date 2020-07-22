import { ApiService } from './../../services/api.service';
import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-http-posts',
  templateUrl: './http-posts.component.html',
})
export class HttpPostsComponent implements OnInit {
  posts;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getPost().subscribe((res) => {
      console.log(' res : ', res.json());
      this.posts = res.json();
    });
  }

  createPost(newTitle: HTMLInputElement) {
    console.clear();
    console.log('newTitle : ', newTitle);

    let post = { title: newTitle.value };
    this.apiService.sendPost(post).subscribe((res) => {
      console.log('res : ', res.json());
      let title = res.json().title;
      let id = res.json().id;
      // this.posts.push({ id, title });

      this.posts.splice(0, 0, { id, title });
    });
  }

  updatePost(post) {
    console.clear();
    console.log(' post : ', post);

    let obj = {
      id: 1,
      userId: 10,
      title: 'dummy data',
      body: 'some text',
    };
    // .put(this.url + '/' + post.id, obj)

    let myData = JSON.stringify(obj);
    this.apiService.putPost(post.id, { title: 'new data' }).subscribe((res) => {
      console.log('res', res.json());

      let index = this.posts.indexOf(post);
      console.log('HttpPostsComponent -> updatePost -> index', index);

      let updatedPost = {
        id: res.json().id,
        title: res.json().title,
        // userId: res.json().userId,
        // body: res.json().body,
      };
      this.posts.splice(index, 1, updatedPost);
    });
  }

  deletePost(post) {
    this.apiService.deletePost(post.id).subscribe((res) => {
      let index = this.posts.indexOf(post);
      this.posts.splice(index, 1);
    });
  }
}

// prom -> suc or err
// pay ->  -  or err
