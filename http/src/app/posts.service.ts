import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from "rxjs/operators";
import { Post } from "./post.model";
import { Subject } from 'rxjs';

@Injectable( { providedIn : 'root'} )

export class PostsService{

   constructor(
    private http : HttpClient
   ){}

   isFetching = true ;
   loadedPosts : Post[] = [];

   error = new Subject<string>();

    createAndStore( postData : Post ){
        this.http.post<{name : string}>(
            'https://http-request-learning-40dca-default-rtdb.europe-west1.firebasedatabase.app/posts.json',
           postData
          ).subscribe(
        responseData => { console.log(responseData) }   , 
        (error) => { this.error.next(error.message) }
          );
    }


    fetchPost(){
        return this.http.get<{ [key:string] : Post }>(
            'https://http-request-learning-40dca-default-rtdb.europe-west1.firebasedatabase.app/posts.json'
           ).
           pipe( 
            map(
              
              responseData  => { 
              const postArray : Post[] = [] ;
               for (const key in responseData){
      
                if(responseData.hasOwnProperty(key)){
                  
                postArray.push( { ...responseData[key] , id:key } );
               }
               }
              return postArray;
            }
                )
             )                                 // Using pipe method 
    
        
    }

    clearPost(){        
     return this.http.delete < { [key:string] : Post } > (
        'https://http-request-learning-40dca-default-rtdb.europe-west1.firebasedatabase.app/posts.json',
      )
      
    }

}