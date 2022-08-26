import { HttpClient, HttpEventType, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, map ,tap} from "rxjs/operators";
import { Post } from "./post.model";
import { Subject, throwError } from 'rxjs';

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
           postData,
           {
            observe : 'response'         // observe : 'response' to get full response data with extra information .
           }
          ).subscribe(
        responseData => { 
            console.log(responseData.body)      // Specify which property you need to access in the response data.
            console.log(responseData.status);
            console.log(responseData.headers);
            console.log(responseData.statusText);
            }   ,      
        (error) => { this.error.next(error.message) }
          );
    }


    fetchPost(){
        let searchParams = new HttpParams();
        searchParams = searchParams.append('print', 'pretty');
        searchParams = searchParams.append('custom', 'params');

        return this.http.get<{ [key:string] : Post }>(
            'https://http-request-learning-40dca-default-rtdb.europe-west1.firebasedatabase.app/posts.json',
            {
            headers : new HttpHeaders( { "customeHeader" : "vijay Header"}) , // Setting custom headers 
            params : searchParams 
            // params : new HttpParams().set('print','pretty'),
            }
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
          ),
          catchError( errorRes => {
            // Send analytic to server 
            return throwError(errorRes)
          })
)                                  
}

    clearPost(){        
     return this.http.delete < { [key:string] : Post } > (
        'https://http-request-learning-40dca-default-rtdb.europe-west1.firebasedatabase.app/posts.json',
        {
            observe : 'events'           // Using 'events'
        }
      ).pipe(
        tap( 
            event => {
                // if(event.type === HttpEventType){
                    
                // }
                console.log(event);            // Displaying the response data events in console 
        } )
      )
      
    }

}