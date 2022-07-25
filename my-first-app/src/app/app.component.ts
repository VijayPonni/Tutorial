import { Component } from '@angular/core';
import { bufferToggle } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent {
  title = 'vijay';
 
  serverElements = [ { type:'server',name : 'testderver' , content : 'Just a test' } ];

  onServerAdded( serverData:{ serverName:string , serverContent:string } ){
    this.serverElements.push({
      type:'server',
      name:serverData.serverName,
      content:serverData.serverContent,
    })

  }

  onBlueprintAdded( serverData :{ blueprintName:string , blueprintContent:string }){
    this.serverElements.push({
      type:'blueprint',
      name:serverData.blueprintName,
      content:serverData.blueprintContent,
    })
 }

 onChangeFirst(){
  console.log("name changing works");
  this.serverElements[0].name="changed";
   
 }
 onDestroyFirst(){
  console.log("onDestroyFirst method works");
  this.serverElements.splice(0,1);
  
 }

}
