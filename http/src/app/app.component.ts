import { Component, Injectable, OnDestroy, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from './post.model';
import { PostsService } from './posts.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit  , OnDestroy{
  loadedPosts : Post[] = [];
  isFetching = false ;
  error : any = null;
  private errorSub!: Subscription;

  constructor( 
    private http: HttpClient ,
    private postService : PostsService
    ) {}      

  ngOnInit() {


   this.errorSub =  this.postService.error.subscribe(
      errorMessage => { this.error = errorMessage }
    );



    this.postService.fetchPost().subscribe(
      posts =>
       {
        this.isFetching = false ;
        this.loadedPosts = posts;
         console.log(posts);
         } 
        //  ,
        //    error  => { 
        //   console.log(error);

        //     this.error = error.message
        //    }                                  // Handling error as secod arguments while subscribing 

     );
  }

  onCreatePost(postData:Post) {
    this.postService.createAndStore(postData);

  }
  onFetchPosts() {
    console.log(this.loadedPosts.length);
    
    this.isFetching = true ;
    this.postService.fetchPost().subscribe(
      posts =>
       {
        this.isFetching = false ;
        this.loadedPosts = posts;
         console.log(posts);
         },
         error => { 
          this.error = error.message
          
         }           // Handling error as secod arguments while subscribing 
     )
   
  }

  onClearPosts() {
    // Send Http request
    this.postService.clearPost().subscribe(
     () => {
     this.loadedPosts = [] ;
     }
   
    );
  }

  onAvoidError(){
    this.error=null;
  }

  ngOnDestroy(): void {
    this.errorSub.unsubscribe();
  }



}
