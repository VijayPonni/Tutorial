# Welcome to Angular tutorial #

<img src="images/angulae-logo.png">


Hi everyone! In this tutorial i am going to learn the angular cource from the video reference which i have got.So i prepared this document for my future reference.

 Let's leran with the video

# Section 1 : Getting statrted #

## video: 1 What is angular? ##

        Angular is the javascript frameork which allows us to build reactive single page applications[SPA].

        SPA --> Single Page Application.
            --> It is the application inwhich we only contain one HTML and bunches of javascript file
                used to navigate among may pages without generating new html pages.
            --> It increases User experience.
            --> It is fast.
            --> To identify the SPA , refresh icon will not work when we navigate to other pages in this
                Single Page  Application.

## Video : 2 Angular Versions ##
     
<center><img src="images/angular-version1.jpg"></center>
      

* First AngularJS is created  But it contains many disadvantages ( So it is omitted )

* And later Angular2 is rewritted.It is completely different from angularJS. ( Wirks well)

* Later lot of angular versions came to play with slight changes in small,increamental,compatiable 
  changes in library files.After that , every six months , angular was updated with this small changes.But
  nothing to worry about the versions , we can even program easily eith any version of angular as the coding
  most likely similar to all.

<center><img src="images/angularversion2.jpeg" width="350px"></center>

## Video : 3 Project setup ##

### PreRequests for angular projects ###

* Nodejs --> It is used to bundle and optimize(Rearrange) the project.

* npm    --> It is Node Package Manager.
         --> It is used to manage different dependencies(particular order that must be followed to a process).
        
### Commands to check the node and npm versions in your device ###  

```javascript
node -v
```
* Sample Output may look like below:

```javascript
npm -v
```
<img src="images/node _cmds.png">

<b style="color:red"> NOTE : Install the node and npm in device to process the angular </b>

## Step by Step procedures to start a angular project ##

### Step : 1 Install angular cli by followinf command in terminal. ###

```javascript
npm install -g @angular/cli
```
OR

```javascript
npm install -g @angular/cli@latest
```
### Step : 2  To check angular version. ###

```javascript
ng version
```
* The sample screen may look like below:
<img src="images/ng serve commands.png">

### Step : 3 Go to the directory to create a project ###

### Step : 4 Command to generate the new project ###

```javascript
ng new project_name
```
* It will ask for strictness , routing initially give NO to them.
* Just choose the styles which you want.

* Sample Screen when project has been generated in your machine.

<img src="images/project_creation.png">

### Step : 5 Verify wheather it is successfully installed or not ###

### Step : 6 Go to the project directory by below command ###

```javascript
cd project_name
```
### Step : 7 To serve the application in local host ###

```javascript
ng serve
```
OR

```javascript
ng serve -o
```
OR

```javascript
ng s -o
```
<img src="images/ng serve.png">

 * Output screen in localhost:4200 :

 <img src="images/localscreen.png">

# Video : 5 Editing the first-app #

Before going to develope an application , we must aware of the installed files when we generated the new project using angular cli.

<img src="images/appthings.png">

Let's have look on important files in the project and work on it.

* package.JSON file --> It contains every dependencies and dev-dependencies of our project.

* e2e --> It is end to end testing (Need Not to worry about it).     

* node_modules --> It contains all the dependencies that package.JSON have.

* src file --> It contains the bunch of our configurartions (Need Not to worry about it). 

* app file  --> Inside the src , app folder contains the five files as 

   * app.component.html --> It contains the page.

   * app.component.css  --> Style the html.

   * app.component.TS  --> It helps to interact with html for delevering data.

   * app.component.specs.ts --> It is for testing (It is not required).

* app.component.TS --> It is most important file in the application.It contains the app-root selector which is 
                       part of index.html.

                   --> We can add multiple components using the app.component.TS to link many html pages.

* Index.html   --> It is the root file of our application.It only first geneartes the 
                   application. We can see it in INSPECT (browser dev tools)        

<img src="images/root-browser.png">   <img src="images/rootvs.png">                           

## EX : ##

## Simple editing with html and ts file with input field  ##

* Let's have a input field with simple type="text" and a para text.

* Then we should make it dynamicly change the content of the paragraph according to the input.

* We can achieve this by using the [(ngModule)]="variable_name" in angular.

### ngModel directive ###

* It is tool of angular FormsModule or directive which is used to store anything that type in the input field in  the provided variable name.

* The ngmodel directive binds the value of HTML controls (input, select, textarea) to application data. 

### Syntax ###

```javascript
[(ngModel)]="variable_name"
```
* It uses two way binding and we can learn what they are in further video.

### Requirements to use ngModel ###

* To utilize the ngModel directive , We must import the FormsModule from library in app.module.ts file.

* app.component.html
```javascript
<input type="text" [(ngModel)]="title">
<p > {{ title }} </p>
```

* app.component.ts
```javascript
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'vijay';
}

```

* app.module.ts
```javascript
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

```

* Otherwise , It will show error.

### Here you can see the output ###
<video controls>
 <source src="videos/ngModel-output.webm" type="video/webm">
</video>

## video : 6 Type Script ##

* TypeScript is the another type of javascript which allows to define types of variables.

* Angular code should be wriiten in typescript.

* To learn angular , we don't want to learn typescript it will be understandable.

* Typescript does not run in browser , So it is converted to javascript and it is carried out by angular cli.
  And this process is very fast.

## video : 7 A project setup to add bootstrap styling ##

### Step : 1 Install the bootsrap file in project (locally) by following command ###

* Go to the project directory (make sure that you are in correct project directory) and type below command.

```javascript
npm install --save bootstrap
```
* Below is the Output Screen :

<img src="images/bootstrap_inst.png">

### <div style="color:red">NOTE : It wll install the bootstrap file in the node_modules folder of our application </div> ###

### Step : 2 Configure the new file in the angular.JSON file in application ###

* First of all , we have successfully installed the bootstrap styling file in our application.

* We can find it in node_modules -> bootstrap -> dist -> css -> bootstrap.min.css

* To use the imported file , we need to configure the file in angular.JSON file as below styles to overcome older style ( Append the imported in top )

<img src="images/adding in angular.json.png">

### Step : 3 Rerun the server to bundle the package ###

* Save angular.json and other files and again use ng serve command to rerun .

### Step : 4 Verify the availability of bootstrap in browser ###

* Go to the localHost in the browser and check in the inspecrt page sources wheather the style.css contains the bootsrap vetrsion . If it is , everythiong worked  fine .

<img src="images/verify_bootsrapinlocalhiost.png">

## video : 8 Angular app get loading and starting ##

* Atfirst , every angular application is getting started with the main.ts file . In main.ts file , The app.module.ts file is connected by the bootstrap.

```javascript

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

```

* It will go for app.module.ts file. In app.module.ts file , it has been provided to the components

```javascript
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
```
* In will visit the app.component.ts file for the first ,  It will have the selector to 'app-root' and templateurl as 'app.component.html'.The app.componen.html is the screen we see in browser contents.

```javascript

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

```
* Then the selector was called in index.html as <app-root></app-root> in the body.

```javascript
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>MyFirstApp</title>
  <base href="/">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="icon" type="image/x-icon" href="favicon.ico">
</head>
<body>
  <app-root></app-root>
</body>
</html>

```

* This is the HTML page that we could see in the browser developement tool (inspect).

* NOTE: It will also contains the javascript bundles run the angular application.

<img src="images/insex.htmlwithjsbundles.png">

# Section : 2 The Basics  #

## Video : 1 Components ##

* Components are the key feature of angular (i.e) We can build our whole application with multiple components.

* Each component will have it's own :
    
    * HTML file.
    * Styles file.
    * Ts file ( Contains its own business logic ).

* Componets are reusable ( Design , Styles , logics ).

* It is is used to splinting up into many parts of our complete application.

## Video : 2 Creating new componets mannually ##

### app component ###

* Before going to other components we must aware about appComponet which is root component.

* appComponents will also have html.styles,specs and ts file with that.

* The speciality is , the appComponent is one which has been provided in the bootstrap[] in app.module.ts which reprents that the app component is the one holds project.

<img src="images/appcomponent.png">

* We don't want to add other components in index.html.

* We just need other components in the app.components.html itself.

* The only selector which is added in the index.html is appComponent as below :

<img src="images/app-root.png">

### Very basic component features ###

* When we say component , the .ts file is the building block . So the xxx.component.ts is the first thing , we should concern.

* We have to do all operations in the app folder . SO we must create our compinents inside the app folder with ifferent names .

* As we are going to understand only the simple features in components , we can create an seperate folder inside the app folder .

* In the Demo component , we should create an file with extension .TS with proper naming.

* Every component.ts file must contatin the following data 

```javascript

import { Component } from "@angular/core";

@Component({
 selector : 'app-demo',
 template : './demp.component.html'
}
)


export class DemoComponent{

}

```

* 1) --> class

     --> class is the maditory field in an component throughwhich the functionality of an component is decided ( business logic )

     --> We must export the class with export keyword before that , inorder to import it anyother file or component.

     --> class name should be meaningfull , first part should contain name and second part should 
         contatin description.

           Demo is the name and Component is the description.  ( DemoComponent ) .

* 2 ) --> Decorator 
 
      --> Decorator is the typescript feature which enhances the class or other elements .

      --> Decorator always starts with @ symbol.

      --> Decorator need to configured by passing javascript objects to it. Here are the most basic two configurartions.

        1 ) --> Selector 

            --> selector should be in staring .

            --> It contains the name to utilize the component in another component .

            --> The selector name should be unique.

        2 ) -->  Templateurl 

            --> This is the reference to the another file which contains the template html of our .ts file.

            --> This html file must be created with the same folder with .html extension.

* 3 ) --> import component .

      --> To use the component decorator , we must import it from angular/core library file.


## Video : 3 Understanding the role of appModueles ##

* app.module is the very important to any angular project which is like the parent of a family.

## Modules ##

* Modules are used to bundles the different spieces( components ) of any application into packeges.

## Very basic things in module ##


<img src="images/modulebasic.png">


* Here , we can identify the following features in module.

* 1 ) --> An empty typescript class with export ( Same as Component )

* 2 ) --> Decorator : 

      --> Module decorator consists of @NgModule keyword in the beginning and it must be imported from 
          angular/core library file.

      --> Specially app.module.ts contains four basic properties and values as it's javascript object format 
          similar to component.

* 3 ) --> Decorator partitions :

      --> 1) bootstrap :

          --> It is responsible for angular to execute the first component when the app get started which
              is appcomponent.    

      --> 2 ) Declarations : 

          --> In declarations section , we must add the compoents that we created.

          --> The angular does not know the existance of component . So we need to update the every
              components presence in module.ts to get results.

          --> Once we added the component in declaration , it will ask to import the component from the 
              specified  path we should import it.

      --> 3 ) imports :

          --> Imports section allow us to import the other modules.

       --> 4 ) providers :

          --> It is used for services.

* Adding the democomponet in app.module.ts to make it use in project: 


<img src="images/import_component_in_module.png">

## video 4 : Using custom component ##

* We can create custom components according to our need . 

* Component can be also updated in the app.module.ts file.

* But , we can not see it in the bowser.

* For example : I have created a component named demo with simple .ts and .html which contains only simple text.

* .html

<img src="images/customcomponent_html.png">

* .ts 

<img src="images/custom component_ts.png">

* Also i attached the component in app.module.ts succssfully as below:

<img src="images/import_component_in_module.png">

* But , we can't see this in browser . As we know , the angular flow will be start from index.html . In index.html ,
only the root ( app module ) is connected .

* In the app.component.html only contains the simple text . To link our new custom component in app , we must add our new component in app.component.html as an element.

* To do so , we should use the selector of our custom component and utilize it in app.component.html as weee require.

* For Example , I have used the selector of demoComponent in app.component.html as this.

* app.component.html:

```javascript

<h1>Hi i am vijay's app componet</h1>
<app-demo></app-demo>

```

* democomponent.ts

```javascript

import { Component } from "@angular/core";

@Component({
 selector : 'app-demo',
 templateUrl : 'demo.component.html'
}
)


export class DemoComponent{

}

```
* Output :

* Before using selctor as element in app.component.html:
<br>

<img src="images/before_using_selector_as_ele.png">

* After using selector as element in app.component.html :

<img src="images/after_using_selector_as_ele.png">



## Video : 5 Creating component with cli and nesting components ##

* We can create components with angular cli command :

```javascript

ng generate component component-name

```
* The shortcut of this command is :

```javascript

ng g c component-name

```

* These angular/cli command create a new folder in app folder with the 1 .html ,1 .style ,1 .spec and 1 .ts file with basic templates.

* We need to update the existence of new component in app.module.ts

<img src="images/cli_component.png">

## Nesting component ##

* Nesting means , using one component within other using the selector as element in the .html.

* Angular allows repeat the components in same or different components .

* app.component.html :

```javascript
<h1>Hi i am vijay's app componet</h1>
<app-demo></app-demo>
<app-cli-component></app-cli-component>
```

* cli.component.html : 

```javascript

<p>I am cli-component </p>
<app-demo></app-demo>

```

## video : 6 Working with component Templates ##

* A component contains not only three properies such as selector ,TemplateUrl and Stylesurl but these are all the basics,

* Template is one of the most significant component decorartor property which allows internal html elements instaed connects the different .html file .

* template is used to do inline template if it very simple . It is string type .

* If code exists single element then we can use  ` ` { Back tick } symbol to denote the string as we do javascript.

```javascript

@Component({
 selector : 'app-demo',
 template : '<app-cli-component></app-cli-component>'  //here it is not link . it is used as element 
}
)

```


```javascript
@Component({
 selector : 'app-demo',
 template : 
 `<app-cli-component></app-cli-component>   
 <app-cli-component></app-cli-component>`    //multiple lines
}
)
```
```javascript

@Component({
 selector : 'app-demo',
 template : 
`<h1> Hello everyone in ...<h1>`
}
)
```
## Video : 7 Working with component styles ##

* styles is the another inportant component decorator which helps to inline styling ,

* It is basically an array . So that we can add more than one style or inline styles .

* In array , we should declare the ` ` { Back tick } to get results .

* It is just inline styling nothing different .

* It is slight differnt from styleUrl . styleUrl requires the seperate stylesheets to style but it is inline styling.
  But , both are array format.

```javascript

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css'],
  styles : [
`
.h1{
  color:blue;       
}
`                 //  Using inlie styles
]
})

```

## Video : 8 Full understanding of component selector ##

* selector is the main component decorator property to understand .

* It is the source to connect the components .

* Basically , a selector acts like CSS selector which only uses the element name to style .

### Normal method ###

app.component.html

```javascript
<div class="container">
    <div class="row">
     <div class="clo-xs-12">
        <h1 class="h1">Hi i am vijay's app componet</h1>
        <hr>
        <app-demo></app-demo>     <!-- It is look like an HTML element -->
        <app-cli-component></app-cli-component> 
     </div>
    </div>
</div>
```

demo.component.ts file :

```javascript
import { Component } from "@angular/core";

@Component({
 selector : 'app-demo',   // Here we selected the element by it's name as we do in CSS
 templateUrl : 'demo.component.html'
}
)


export class DemoComponent{

}
```

### Attribute method  ###

* We can also use other method to utilize this selector which means attribute selector as follows :

* app.component.html :

```javascript
<div class="container">
    <div class="row">
     <div class="clo-xs-12">
        <h1 class="h1">Hi i am vijay's app componet</h1>
        <hr>
        <app-demo></app-demo>     <!-- It is look like an HTML element -->
        <div app-cli></div>      <!-- We can select it by attribute name in .ts file -->
      </div>
    </div>
</div>
```

* Using the attribute name in .ts file with [] notation :

```javascript
import { Component, OnInit } from '@angular/core';

@Component({
  // selector: 'app-cli-component',
  selector : '[app-cli]',     // Using the attribute name as selector by [] notation
  templateUrl: './cli-component.component.html',
  styleUrls: ['./cli-component.component.css']
})
export class CliComponentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
```

### class method ###

* We can also use the notation in .ts file as selector by using the element with class.

* app.component.html file :

```javascript
<div class="container">
    <div class="row">
     <div class="clo-xs-12">
        <h1 class="h1">Hi i am vijay's app componet</h1>
        <hr>
        <app-demo></app-demo>     <!-- It is look like an HTML element -->
        <div app-cli></div>      <!-- We can select it by attribute name in .ts file -->
        <div class="app-cli"><div>  <!-- We can select by the class name in .ts file -->
      </div>
    </div>
</div>
```

* .ts file :

```javascript
import { Component, OnInit } from '@angular/core';

@Component({
  // selector: 'app-cli-component',
  // selector : '[app-cli]',     // Using the attribute name as selector by [] notation
  selector : '.app-cli',     // Using the class name with . notation .
  templateUrl: './cli-component.component.html',
  styleUrls: ['./cli-component.component.css']
})
export class CliComponentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
```

### NOTE ###

* We cannot access selectors with id .

* We cannot access the selectors by pseudo selectors like :hover or etc .

## Video : 9 Data Binding ##

* Data-Binding is the communication between the Typescript code ( Business Logic ) and the Template ( HTML ) in a component.

* The template is only visible to user ( HTML ) . Inorder to show the data dynamically , data-binding came to play to connect the typescript and template ( HTML ).

* There are some type of data-bindings available as below :

### One way Data-binding ###

<img src="images/one_way_data-binding.png">

### Two-way Data-binding ###

<img src="images/two-way-data-binding.png">

## Video : 10 String Interpolation ##

* String interpolation is the simple data-binding which is used to pass the data dynamically from typescript to template ( HTML ).

* In string interpolation , all data are converted to strinng in the end .

* It uses the syntax <b style="color:blue">  {{ Typescript variable name OR Property name  }} </b>

* We cannot use the multiline expressions in the {{ }} syntax .

## Example : ##

* .html file :

```javascript
<h3> Data Binding </h3>

<h4> String interpolation </h4>

<p> I am going to explain data-binding type : {{ type }} which is {{ name }} </p>

<p> {{ getStringInterpolation() }}</p>
```

* .ts file :

```javascript
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {
  type: number = 1;
  name: string = "string interpolation";

  getStringInterpolation(){
    return "I am the string interpolation method who binds the method to html template from typescript";
  }
constructor() { }

  ngOnInit(): void {}

}

```

* OUTPUT:

<img src="images/stringInterpolation.png">

## Video : 11 Property Binding ##

* Property binding is used to connect the attributes of an HTML element to the typescript file ( .TS file ).

* The property-binding method changes the DOM { Document Object Model } of the specified html element.

* We can bind the attributes of our html element by with the following syntax :

* <b> [ Varible or name property name to bind ]   </b>

## Example : ##

* Now , we take a button element with the attribute disabled earlier.

* Inorder to change the disabled  attribute with dynamic data from typescript , we must bind the attribute with [] symbol.

* So , We can change the disabled attribute variale value to "true" to make it enable with typescript .

* .html ( disabled property is binded with the variable status )

```javascript
<button
 class="btn btn-success"
 [disabled]="status"  
> Disable me </button>
```
* .ts file ( Here we set variable true initially to keep it disable . After 1000 milliseconds we make the variabke to false to enable)

```javascript
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {
  type: number = 1;
  name: string = "string interpolation";
  status: boolean =true; 

  getStringInterpolation(){
    return "I am the string interpolation method who binds the method to html template from typescript";
  }
constructor() { 
  setTimeout(()=>{
     this.status=false;
  },1000)
}

  ngOnInit(): void {}

}
```

## Video : 12 Property binding VS String interpolation ##

* When we want to output somethong dynamically from template we must use "String-interpolation" and If we want to change the DOM content of an element , we must go for "Property binding".

* But , We cannot use both the property-binding and string-interpolation together.

## Video : 13 Event binding ##

* Event binding is the process of adding some functionalities to the HTML elements when certain events occured as click,mouseover , onkeypress , etc.

* These events shoul be binded with the HTMl element by  <b style="color:blue"> ( event name ) = " method name () "  </b>

* The method we assigned is need to be described the functionality to a event occured in the template elements in Typescript file.

## Example : ##

* Let us assign a button to a click event with some method which can change the button color text .

* .HTML file :

```javascript

<button 
class="btn btn-warning"
(click)="changeColor()"
>
Button 
</button>
<p> My color is {{ color }} </p>
```

.Ts file :

```javascript
  color:string ="red";

  changeColor(){
    this.color="blue";
   }

```
## VIdeo : 14 Passing and using Data with Event binding ( $event ) ##

* Event binding is very important in binding . In this we can get the information on several events with the help of $event.

* By passing the $event as as argument to event in HTML . We can get the possible events available by console it in the method.

* After that we can choose our event according to our need .


<img src="images/console.$events.png">


## Example : ##

* We can take the values to display in the paragraph from the events .

* Let us write the event like below:

```javascript
  para :string ='';
onShow( event : any ){
   this.para = (<HTMLInputElement>event.target).value;   // To access the correct value from the DOM.
}
```
* We can bind the event with the HTML like below :

```javascript
<input
type="text"
class="form-control"
(input)="onShow($event)"
/>
<p> {{ para }}</p>
```

<img src="images/events.png">


## Video : 15 Two-way databinding ##

* Two-way data binding is the process of binding the value from both ends with the help of directives.

* We must use the ([ ])=" property name " --> to two way binding.

* It is simply like getting data from user and stores in a variable and utilize it for furthuer references.

* ngModel --> The one of the most frequently used directive in formsModule.

* We should have imported the FormsModule from angular form in the imports section and app.module.ts file.

* .html 

``Javascript
<input 
type="text"
class="form-control"
[(ngModel)]="content"
/>

<p>{{ content }}</p>
```

* .ts file :

```javascript
content ='vijay';
```

## Video : 16 Combining all forms of data-binding ##

* Here we can set an assignment to us .

* We must create an input field and a button.

* By clicking button the value which is obtained from the input filed must be displayed and the button must be enable only a 2 seconds when the page gets loaded.

## Video : 17 Directives ##

* Directives are Instructions in the DOM ( Document Object Model ).

* EXAMPLE :

  * components --> Components are also directives with templates which tells the component to locate in particular place .

* ngIF and more and more...

## Video : 18 Using ngIf to output data conditionally ##

* *ngIf is the directive which acts like a normal if class .

* It is structural directive which structures the DOM .

* It should be used in elements attribute with an expression / variable / method that should return either true or false.

* According to the value it determines wheather the element need to be displayed or not.

* For example , ` <p *ngIf="false"> It will not show </p> `

## Video : 19 Enhancing ngIf with an else condition ##

* The else condition can be implemented if the value returns false in the angular element attribute.

* To achieve this , we could make use of locators in html <ng-template> < #locatorName ></> </ng-template>

* This portion will be displayed if the given condition is not satisfied.

```javascript

<p> Your name is :<span *ngIf="select; else notClicked"> {{ yourName }}     </span>
</p>

<ng-template #notClicked>
<p>Button is not clicked </p>
</ng-template>
```

```javascript
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {

  yourName:String='';
  select=false;

  display(){
    this.select=true;
  }

  constructor() { }

  ngOnInit(): void {
   
    
  }

}

```

## Video : 20 Styling elements dynamically with ngStyle ##

* ngStyle --> It is not the structural directives like ngIf . It is an attribute directive which only changes the element's position. It will not control the element's presence like structural directives.

* we should use the directive in an element with property binding to configure the styling .

* It dynamically updates the style.

```javascript
 <p [ngStyle]="{ background-color : black ;}">  </p> OR

 <p  [ngStyle]="{backgroundColor : 'black' }"></p>  OR

 <p [ngStyle]="getcolor()"></p> 

 ``` 

## Video : 21 Applying CSS classes dynamically with ngClass ##

* ngClass allows us to create or remove styles dynamically .

* It is also acts like a ngIf , if the certain condition is true only , the style will be applied otherwise the style will not apply to elemnt.

```javascript

* <h1 [ngClass]="{ className : variable === true OR condition }"></h1>

```


## Video : 22 Outputting lists with ngFor ##

* The syntax is *ngFor="let variable_name of array_name"

* For example ,

```javascript
 <p *ngFor="let name of names">jchgsdty</p>

```

* The array will be in typesscript file .

## Video : 23 Getting the index when using ngFor ##

* We can identify the index value in for loop.

* Syntax:

```javascript

 <div *ngFor="let variable_name of array_name ; let index_variable_name = index" >
....
</div>

```

* We can control the each items with the index value.

## Notes while making application ## 

## Model ##

* Model is just a typescript file.
 
* There is no decorartor for model.

* It is used to collect the data and store it as blueprint for later use in another component( app.component.ts ) .


## Debugging Code ##

* Read error message carefully.

* If the error is not shown and something is not working then , there is a possibility of logical error.
  To get rid of this , we can go for dev-tools in browser.In the sources part we can run our application 
  with beakponit where we are able to identify the mistake we had done.

* Augury angular - Install this tool from browser to get better understanding of our angular project with   
  graphical illustration . 


# Section 5 : Understanding component interaction and data Bindiing #

## @Input() decorator ##

* @Input() decorator is used to bind the the property/variable of one component in any component which requires the 
   property or value.

* It must be imported from angular/core library file.

## @Input(' ... ') ##

* We can also pass name as an argument which we want to use in anothercomponent.

* If we pass a name in @Input() decorator in one component , we can utilize it the name to binding it
  in other component.

## Local references ##

* Local references are very useful and easy to get value from the element and connect to typescript especially
  in input field.

* We can use it in any elements .

* But it is only accessable in template(HTML) . If we want to access it in typescript file , we need to pass his
  an argument in any method.

* Otherwise , we can access the elements properties with ViewChild method in typescript directly.

* We can access all properties attached with the element in typescript .


##  ng-content ##

* This is an atribute which is used to connect two components while parent component needs to add extra content with open and closing tag of it.If So , we need to provide the  

```javascript 
<ng-content></ng-content> 
```

in child component.


# Component life cycle hooks #

* Every angular component contains phases of executing the component when it is initiated . 

* The life-cycle hooks decides the order of phase that means which method is executable first and next and so on.

* By implementing the life cycle hook methods in our component will help us to control the flow of our component.

* The very important life-cycle methods are listed below:

  * ngOnChanges           --> Called after a bound input property changes.

  * ngOnInit              --> Called when the compoennt in initialized,

  * ngDoCheck             --> Called during every change detection run.

  * ngAfterContentInit    -->  Called after content (ng0-content) has been projected into views.

  * ngAfterContentChecked --> Called everytime the projected content has been checked.

  * ngAfterViewInit       -->  Called after the componen's view ( and child views )  has been initialized.

  * ngafterViewChecked    --> Called everytime the view ( and child view ) has been checked.

  * ngOnDestroy           --> Called once the component is about to be destroyed.

# Attribute and Structural Directives #

## Attribute Directive ##

* Looking like a normal HTML attribute ( Possibly with databinding or eventBinding ).

* Only change/affect the element that they are added to.


## Structural Directive ##

* Looklike a normal HTML attribute but have a leading *(desugauring / principally )

* Affects whole area in the DOM ( Elements get added/removed ).

## Use Attribute directive from outside of template ##

* We can create a seperate typescript file with extension called directive.ts or we can generate through the angular cli by below command :

```javascript

ng g d directive-name

```
* We can access the DOM elements by binding the selector of this typescript with any DOM element which we want to access.

* This element shoul be obtained with Elementref datatype in directive and functionality is also implemented in directive .

```javascript
import { Directive , ElementRef, OnInit } from "@angular/core";

@Directive({
    selector:'[appBasicHighlight]',
})

export class BasicHighlightDirective implements OnInit{
    constructor( private elementref : ElementRef){

    }

    ngOnInit(){
        this.elementref.nativeElement.style.backgroundColor='Orange';
        this.elementref.nativeElement.style.fontSize="30px";
    }

}
```

* We can simply bind the selector with DOM element like below:

```javascript
      <p appBasicHighlight> HERE is the para which is done with directive </p>

```

## Renderer directive  ##

* renderer directive method is merely similar to  above method.

* But , renderer method is considered to be better than that because it helps to access the DOM elements even in the services where we are unable to get the DOM elements connecton directly.

```javascript
import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appRenderHighligh]'
})
export class RenderHighlighDirective implements OnInit {

  constructor(private elementRef:ElementRef,private renderer:Renderer2) { }

  ngOnInit(){
  this.renderer.setStyle(this.elementRef.nativeElement,'backgroundColor','green');
  this.renderer.setStyle(this.elementRef.nativeElement,'fontSize','50px');

  }

}
```
* We can simply bind the selector with DOM element like below:

```javascript
           <p appRenderHighligh>It is a  para which uses the renderer directive </p>

```

## HostListener events ##

* @HostListener is the imporatne decorator from angular/core library which is used to control several events in directive .

* We can use this to add some functionality to our DOM element.

```javascript

    @HostListener('mouseenter') moouse(){
   this.elementref.nativeElement.style.color="yellow";
    }
```
* There are many library events availabe in HostListener , we mostly use "click" , "mouseenter" , "mouseleave"

## @HostBinding events ##

* HostBinding is another decorator which simplifies the DOM access even more easier like below:

```javascript
  @HostBinding('style.backgroundColor') backgroundColor:string='green';

  @HostListener('mouseenter') mouseenter(){
    this.elementRef.nativeElement.style.backgroundColor='blue';
    this.elementRef.nativeElement.style.fontSize='40px'
  }
  @HostListener('mouseleave') mouseleave(){
    this.elementRef.nativeElement.style.backgroundColor='green';
    this.elementRef.nativeElement.style.fontSize='25px'

  }
```
# Services #

* Services are centralizd code or class that helps to duplication of code and Data storage among the components.

* It is basically a Normal Typescript Class which contaiins methods or data incommon for all components.

## Using services in different ways : ##

* We can make use of services class in differnet ways :

  * 1 --> Creating Instances .

  * 2 --> Hierarchial Injector .

### Creating Instance method  ###  

* We can make use of the class by simply creating instance in the required components as below : 

* Servicefile:

```javascript

export class LoggingService{
    logStatusChange(status:string){
  console.log("A server staus Changed , new Staus : " + status);
   
    }
}
```

* This is the simple method which logs some data in console .  

* We need to use this method in two differnt Components. For that we should do the following:

  * import the services class to our component.

  * Create instance with new keyword and assign it to another variable.

  * Using the variable , we can call the methd .

```javascript
.
.
.
  import { LoggingService } from '../logging.services';
.
.
.
const variable = new LoggingService();
variable.logStatusChange(accountStatus);

```
* It works as same as consoling directly in all other compponents ( We should create instance in every components to use the service ).

* But we should not use this method because angular provides inject method which is more comfortable for complex application.


### Heirarchial Injector method ###

* Heirarchial injector is also known as dependncy injection which means that a particular class is depend on another class or method.

* In this method the instanec process is carried out by the angular itself . To initiate that , we should make somethings in component where we need to to use the services .

* Fisrt In the component , we must initialice constructor function and in that constructor we should define the variabke with service class.

* And then , we must import it .

* And most importantly , we must provide the providers array in the component's decorator to make the angular to create the instance.Otherwise it will show error.

* These are the things we need to do to instantiate our service in our component.

* After instantiating , we need to use the variable to accedd the method in service in required place .

```javascript
.
.
.
import { LoggingService  } from '../logging.services';
.
.
.
@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  providers:[LoggingService]
})
.
.
.
  constructor(public variabel : LoggingService) { }
.
.
.
  this.variabel.logStatusChange(status);
.
.
.

```
### Heirarchial Quality ###

* Using services in components will follow heirarchy ( Order ) to use the instances .

* For Example , We shoul use the instance of parent component to the child component also.

* It is like a tree format where the flow is only downwards not in upwards which means , we cannot use any child component's instance to it's parent.

## Services inServices / @Injectable ##

* We can use the services in component,directive or whatever which contains the decorartor.

* But service is just a typescript file and does not contain any decorator . So , inorder to make communication between tow service files , we want to have special decorator called @Injectable .
which should be import from angular/core.

* We should provide the @Injectable decorator in both sending and receiving services typescript files.Otherwise , it will show error.

* NOTE : Make sure that all services are in app.module.ts providers array.

# Changing pages with Routing #

* To display particular page as main page in an application or website , we need to do routiing.

* Angular provides Single Page Application ( SPA ) which helps to render one HTML file and loads displays dynamic page contents using the javascript bundles in the background.

* With the help of Routing , we can navigate different pages with unique path setups ( URL's ) but still it is a Single Page Application.

* We have a Domain URl for our application . We can naviagte to other page by adding some path followed by domain name in the browser's URL.

## Navigation by changing the url address  ##

## app.module.ts file ##

### Step : 1  ###

* As Routing is responsible for the whole application , we need to do our procedure in our app.module.ts which acts as the leader of the angular application.

* To setup routing , first need to declare a variable of type <b> Routes </b> .

* It should ba an array format.

* That array need to have javascript objects as elements.

* Each Object element should have two basic properties as default. They are :

 * path : 
  
 --> It is the main property that every object element should contain which describes the Url of the loading page.

 --> For example , the domain url is localHost:4200 , we want to load the sample page as main in application and also wants to set the URL to localHost:4200/sample , we need to set the path property value to 'sample'

 --> { path : 'sample' ,  }   //  URL : localhost:4200/sample 
 
* Componet :

--> It is teh another main property to choose which page need to be displayed.

--> For exapmle , the sample component is need to be displayed in the path localhost:4200/sample , then we should give the value as SampleComponent

--> { path : 'sample' , Component : SampleCompoent }

### Example : app.module.ts ###


```javascript

import { Routes } from '@angular/router';

.
.
.


const appRoutes : Routes = [
  { path : '' , component : HomeComponent } ,
  { path : 'user' , component : UserComponent } ,
  { path : 'server' , component : ServerComponent } ,
  
];

.
.
.

```

* NOTE : This alone will not do anything.

### Step : 2 ###

* we have set pathe for our components but stil now , we didn't use the variable to actvate it .

* To make use of the variabe , we need to import the RouterModule which is also belonged to @angulat/router .

* In the @NgModule decorator within the imports section , we should import the Routermodule with it's specific method forRoot()

* We should pass the variable which we created for our path selection as an arguments to the forRoot() method as below to register our routing path.

```javascript

import { RouterModule, Routes } from '@angular/router';

.
.
.

@NgModule({
  declarations: [
.
.
.

const appRoutes : Routes = [
  { path : '' , component : HomeComponent } ,
  { path : 'user' , component : UserComponent } ,
  { path : 'server' , component : ServerComponent } ,
  
];

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)   //Adding the variable in RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})



```
## app.component.html ##

## Choose where to display the page with " router-outlet " directive ##

* We have regitered our Routes in the app.module.ts file but we must choose where to display the pages .

* The first page is displayed by angular application is app.component.html . So We need to use the <router-outlet></router-outlet> decorator to view the exact pages.

```javascript
.
.
.

  <div class="row">
    <div class="col-xs-12 col-sm-10 col-md-8 col-sm-offset-1 col-md-offset-2">
       <router-outlet></router-outlet>
    </div>
  </div>
  .
  .
  .

```

### NOTE : We can only navigate between pages by changing the url only not by clicking option ###

## Navigation using clicking a link ##

* By changing the url address we can navigate between our pages but that is not efficient way to do it.

* We should provide the navigation links to the user to navigate between multiple pages .

* Inorder to do this , we should follow the same procedure in the last method but the one thing we should add is  setting the navigation links with our Routes.

* We can achieve it by simply setting the anchor tag's href="#" to the router path like below in app.component.html

```javascript
.
.
.
    <ul class="nav nav-tabs">
        <li role="presentation" class="active nav-item"><a href="/" class="nav-link"> Home </a></li>
        <li role="Presentation" class="nav-item"><a href="/server" class="nav-link"> Servers </a></li>
        <li role="Presentation" class="nav-item"><a href="/user" class="nav-link"> Users </a></li>
      </ul>
.
.
.
       <router-outlet></router-outlet>
.
.

```
### NOTE : But this method is not good as it reloads every time we click the link . we should avoid this. ###

## Using routerlink attribute in links to navigate  ##

* Angular provides specific directive to avoid the reloading of application everytime we click a link to navigate between pages .

* The ddirective is native-link as an attribute to the anchor tag which alternates the href as below :

```javascript
.
.
.
        <ul class="nav nav-tabs">
        <li role="presentation" class="active nav-item"><a routerLink="/" class="nav-link"> Home </a></li>
        <li role="Presentation" class="nav-item"><a routerLink="/server" class="nav-link"> Servers </a></li>
        <li role="Presentation" class="nav-item"><a routerLink="/user" class="nav-link"> Users </a></li>
      </ul>
.
.
.
       <router-outlet></router-outlet>
.
.

```

### NOTE : This works fine as expected (i.e) we can navigate between pages by clicking links without reloading our application ###

## MArkin active router link ##

* We can specify the active router link with routerlinkActive attribute as follows .

* By setting the default home page link with [routerLinkActiceOptions]="exact:true"  , we can get rid of collapse of active the deafault page .

```javascript
      <ul class="nav nav-tabs">

        <li role="presentation" class="nav-item"> 
          <a 
          routerLink="/" 
           class="nav-link" 
           routerLinkActive="active"
           [routerLinkActiveOptions]="{ exact : true }"
           > Home </a>
          </li>

        <li role="Presentation" class="nav-item" >
          <a 
          routerLink="/server" 
          class="nav-link" 
          routerLinkActive="active"
          > Servers </a>
        </li>

        <li role="Presentation" class="nav-item">
          <a routerLink="/user"
           class="nav-link"
            routerLinkActive="active"
            > Users </a>
          </li>

      </ul>
```

## Programatic rouing ##

* We can route to another component by clicking a button or particular action is getting completed.

* This is done with typescript file .

* We need to initialize the method to trigger it .

* .html ( Triggering an event )

```javascript
.
.
.

<button class="btn btn-primary" (click)="onLoadServers()"> Load Servers </button>

.
.
.


```

* .ts file ( process the navigation with Router )

```javascript
import { Router } from '@angular/router';

.
.
.
  constructor(private route : Router) { }

.
.
.

  onLoadServers(){
    //spme process may be ..
    this.route.navigate(['/server']);   //route to particular path 
    
  }
  .
  .
  .

```
## Routing with relative path ##

* We can still identify the current acyive path and set our navigate path acording to it .

* To get the current active routing path in navigate method , we should do add twothings in above code .

```javascript
.
.
.

  constructor( private router : Router ,
               private relative : ActivatedRoute   // To get the current Active path
               ) { }

  ngOnInit(): void {
  }

  onReload(){
    this.router.navigate(['server']  ,{ relativeTo: this.relative});   // Use the variable to decide the navigation path

  }
.
.
.

```

# Dynamic Path Segmentation By changing URL / Passing parameters to Route   #

* We can navigate to another pages with dynamic data provided in the path segmentation as below :

* app.module.ts

```javascript
.
.
{ path : 'users' , component : UsersComponent } ,     // It is parent

{ path : 'users/:id' , component : UserComponent } ,    // loading other component with dynamic 
.
.

```
* We can see the content of user component by changing the URL with any data 

<img src="images/dynamic_page_routing.png">


# Fetching Route Parameters #

* We have passed some parameters in routing path and fetched the component in the screen by changing the URL .

* But , to get the data in our component . we need to access the params in our child component.

```javascript

export class UserComponent implements OnInit {

  user! : { id: number , name : string}

  constructor(private route : ActivatedRoute) { }    // It gives the currently active route that means id 
  
  ngOnInit(): void {

    this.user = {
      id:     this.route.snapshot.params['id'] ,    // The data passed is given in the path app.module.ts
      name :  this.route.snapshot.params['name']     
    }

  }

```
* Now , we can get the data in the compoent by changing the path and binding the variables to the .html .

# Fetching Route parameters with Router link #

* We can get the data with the help of router link attribute also .

* We can use the routerLink in template of the child component as below :

```javascript
.
.

<a [routerLink]="['/users/',3,'meera']">Meera Id 3</a> 
<!-- Here we should pass the routerlink with parameters id and name -->
.
.

```

### NOTE : The URL is changes but the content is not changed accordingly .   ###

## Changing the data also with subscribe method which is belongs to observable  ##

* By providing the RouterLink in template , It gets the data in the path provided and get the url correctlty . 

* But , we only iitiated the data in typescript file by snapshot property . So angular does not reload the page we already in .

* To make the angular to aware the content updatation , we must subscribe to it in typescript .

* <b> Observable  </b>  --> The concept to do asynchrounous task . <b> Params </b> is the Observable property .

                        --> Observable do not wait for some action but executes when it happens .

                        --> Here we don't know when the id and name get changed . So we utilize the 
                            Observable concept .

* <b >Subscribe </b>    --> Subscribe is the method used to capture the updated data in params by   
                            passing function as argument .

* typescript file : 

```javascript

  user! : { id: number , name : string}

  constructor(private route : ActivatedRoute) { }    // It gives the currently active route that means id 
  
  ngOnInit(): void {

    this.user = {
      id:     this.route.snapshot.params['id'] ,    // The data passed is given in the path app.module.ts
      name :  this.route.snapshot.params['name']     
    }
  this.route.params.subscribe(
    (params : Params ) => {                     // To update the data in Template when it updated in real time
           this.user.id = params['id'];
           this.user.name = params['name'];
    }
  );

  }

``` 

# Unsubscribing to Observable subscription #

* When we create subscription to update the data in using Params the subscription will not get releive even the component is destroyed .

* So we need to Unsubscribe this .

* To unsubscribe this , we need to initialize a variable of type Subscription that is imported from 'rxjs' .

* We need to assign it to the function where we subscribe in ngOninit()  .

* In ngOndestroy() we need to unsubscribe() the variable as below :

```javascript
.
.
.

import { Subscription } from 'rxjs';
.
.
.


  paramsSub !: Subscription;

  .
  .
  .
ngOnInit(): void {


  this.paramsSub = this.route.params.subscribe(            // Assigning to the method where we subscribe 
    (params : Params ) => {
           this.user.id = params['id'];
           this.user.name = params['name'];
    }
  );

  }

  ngOnDestroy(): void {
    this.paramsSub.unsubscribe();    //Unsubscribe
  }

}


```
# Query params #

* Query params are extra information provided in the link that follows by ? symbol .

* Fragement is also a information about the currently loaded page in the URL follows by # symbol .

# Query params in RouterLink #

* Make sure that the router link is available in module .

```javascript
.
.
.
{ path : 'servers/:id/edit' , component : EditServerComponent  }
.
.
.
```
* We can add queryParams and fragment in our routerLink parameter as required .

```javascript
.
.
       <a href="#"
            [routerLink]="['/servers', 5 , 'edit' ]"
            [queryParams]="{allowEdit : '1'}"          
            fragment="loading"
            class="list-group-item"               
            *ngFor="let server of servers"
            >
            {{ server }}
           </a>
.
.

```

* We can also add queryParams in the typescript as required :

```javascript
.
.
.
  onLoadServer(id : number){
    //spme process may be ..
    this.route.navigate( ['/servers', id , 'edit'] , { queryParams : { allowedit : '1'}  ,  fragment : 'loading'});   //route to particular path 
    
  }
.
.
.

```

### Note : This is only method of creating queryparams in URL . Not fetching data ###

# Queryparams and fragments usage in typescript with activated route # 

* There are two ways to use the queryparams and frangemnts . The one is snapshot method and another is subscribe method :

```javascript
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit {

  constructor(
    private router :ActivatedRoute
  ) { }

  ngOnInit(): void {
    console.log(this.router.snapshot.queryParams);   // Printing the queryparams of currently active route with snapshot
    console.log(this.router.snapshot.fragment);      // Printing the fragment of currently active route with snapshot

    this.router.queryParams.subscribe();             // Accessing the queryparams wih subscribe method .
    this.router.fragment.subscribe();                 // Accessing the fragment wih subscribe method .
  }

  updateQuery(){
    console.log(" QueryUpdated successfully !");
    
  }

}

```
* These things will not change anything but we can handle the queryparams like thses methods in typescript .

# Practising some common ethics of navigation #

* This is one of the methods to navigate to another component with the id .

* This method involves seperate component ( Template and TS ) to show the page when partcular link is clicked .

* The link is set with routerLink attribute which consists of routes with specific data path in app.module.TS .

* The typescript of the navigated page should have the specific data with it's own datatype that may be number ( Here id is specific data and that is number ) .

* APP.MODULE.TS :

```javascript
.
.
.

{ path : 'servers' , component : ServerComponent } ,
{ path : 'servers/:id' , component : SingleServerComponent } ,

.
.
.

```
* singleserver.component.TS :

```javascript
.
.
.
export class SingleServerComponent implements OnInit {

 server: { id: number; name: string; status: string; } | any;

  constructor(
    private serversService : ServersService ,
    private route : ActivatedRoute
    ) { }

    ngOnInit() {
      const id = +this.route.snapshot.params['id'];  
      // Add + symbol to represent type as number because it has been considered as string as the router link is string
      // If we use without + symbol , it will show error .
      this.server = this.serversService.getServer(id);

.
.
.
    }
}
```

# Setting up nested Routes ( Child Routes ) #

* Nested routing is adding child routing to the parent router instead of creating the brand new component as routing .

* This method reduces the duplication of parent routing and ease understanding of code .

## Implementing child routing process ##

* We should implement child or nested routing in the app.module.ts where we have declared the routing for each components .

* We should identify the parent route and child route to make it nested .

* Below is the app.module.ts BEFORE NESTED ROUTING :

```javascript
.
.
.

const appRoutes : Routes = [
  { path : '' , component : HomeComponent } ,
  { path : 'users' , component : UsersComponent } ,
  { path : 'users/:id/:name' , component : UserComponent } ,
  { path : 'servers' , component : ServerComponent } ,
  { path : 'servers/:id' , component : SingleServerComponent } ,
  { path : 'servers/:id/edit' , component : EditServerComponent  }
  
];

.
.
.

```
## 1 : Add children attribute in the parent route ##

* children is the attribute which is used to make nested routes which is of type Array .

* This attribute need to be attached in parent route .

## Example : ##

* In this example , we have servers and users as parent routes .

* users/:id/:name is children for user parent route .

* servers/:id and servers/:id/edit are children of servers parent route .

* So we must add the children attribute in both parent routes as below :

```javascript
.
.
.
const appRoutes : Routes = [
  { path : '' , component : HomeComponent } ,
  { path : 'users' , component : UsersComponent , children : [] } ,
  { path : 'users/:id/:name' , component : UserComponent } ,
  { path : 'servers' , component : ServerComponent , children : [] } ,
  { path : 'servers/:id' , component : SingleServerComponent } ,
  { path : 'servers/:id/edit' , component : EditServerComponent  }
  
];
.
.
.

```
 
## 2 : Pass the children routes as elements to the parent rout's children array [] ##

* We have children attribute as empty array . So we need to give all the children routes or routes we need to nest inside the parent inside the array .

* While giving as elements , we should avoid the parent identification in path attribute of all child routes .

* Because , the children of parent route is itself denotes that they belongs to this parent . So we don't want to mention it again.

## Example : ##

* In our app.module.ts we have inset the child routes inside the children array of parents .

```javascript
.
.
.
const appRoutes : Routes = [
  { path : '' , component : HomeComponent } ,
  { path : 'users' , component : UsersComponent , children : [
     { path : ':id/:name' , component : UserComponent } 
  ] } ,
  { path : 'servers' , component : ServerComponent , children : [
    { path : ':id' , component : SingleServerComponent } ,
    { path : ':id/edit' , component : EditServerComponent  }
  ] } 
 
];
.
.
.
```
## 3 : Loading child routes with router-outlet ##

* router-outlet is an html tag which controls the loading of all routes given in app.module.ts .

* The children routes will not listen to the parent's router-outlet .

* So , we need to add router-outlet for all children routes where we need to load these components .

* Otherwise we cannot use children route .

## Example : ##

* Here , we have two parent routes one is user and another one is server .

* We have only used the router-outlet in app.component.html to load all routs as parent before .

* But , we have inserted nested routes . So we should add router-outlet tag in necessary html where we should call the child component .

* First In Userscomponent template , insted of calling the usercomponent , we must call router-outlet as follows :

```javascript

<div class="row">

    <div class="col-xs-6 col-sm-4 col-md-6 col-lg-6">

        <div class="list-group">
            <a 
            [routerLink]="['/users', user.id , user.name ]"
            href="#"
            class="list-group-item"
            *ngFor="let user of users"
            > {{ user.name }}</a>
        </div>

        </div>

        <div class="col-xs-6 col-sm-4 col-md-6 col-lg-6">
        <!-- <app-user></app-user> -->
          <router-outlet></router-outlet>
        </div>
    </div>

```

* Next , we have server component as parent and it has two children . So , we need to call the router-outlet in serverComponents template instead of calling the child components .

```javascript
<p>server works!</p>
<div class="row">
    <div class="col-xs-12 col-sm-4">
        <div class="list-group">
            <a href="#"
            [routerLink]="['/servers', server.id]"
            [queryParams]="{allowEdit : '1'}"
            fragment="loading"
            class="list-group-item"
            *ngFor="let server of servers"
            >
            {{ server.name }}
           </a>
        </div>
    </div>
    <div class="col-xs-12 col-sm-4">

        <router-outlet></router-outlet>

        <!-- <button class="btn btn-primary" (click)="onReload()"> Reload Page </button>

        <app-edit-server></app-edit-server>
        <hr>
        
        <app-single-server></app-single-server> -->

    </div>
</div>
```
# Using Query parameters #

* We can access the queryParams of one component in another component with subscribe method as follows :

```javascript
.
.
.
this.router.queryParams.subscribe(                // Accessing the queryparams wih subscribe method .
        (queryParams : Params )  => {
          this.allowEdit = queryParams['allowEdit'] === '1' ? true : false ;
        }

    ); 
.
.
.
```

# QueryParams configuration navigation with queryParamsHandling property #

* queryParamsHandling is the javascript property to handle the queryparams which takes string as input .

* There are two string values avaiable : 

  * 1) merge --> It adds the new querParams with old one .

  * 2) preserve --> It keeps the old queryParams and transfer it to anothe navigation .

* We should use this queryParamshandling property where we need to navigate with the same queryParams .

## Example : ##

* We should keep the queryParams of singleseverver component to editserver component to identify which is having edit access .

* So , we should use the queryparams in singleServerComponent while navigating with preserve . 

```javascript
.
.
.
onEdit(){
this.router.navigate( ['edit'] , { relativeTo : this.route ,  queryParamsHandling : 'preserve'} );      
}
.
.
.

```
# Redirecting and wildcard routs #

* These routes controls the application if the wrong or unwanted url is clicked or changed .

* This method helps to navigate to seperate " Page Not Found " component if Provided url is invalid .

* To do this , first we should have special component which contains "page Not found" message or some animations according to developer .

* We must have one default page-not found route with it's component .

* After that , we should redirect the component to all other wrong url 's by setting the path to ** .

* It is important to set the path ** to notify the angular to move other url to page-not-found component .

## redirectTo ##

* redirectTo is the important parameter in routes which redircts to the path which we need to use existing component .

* It is used as alternative to the component property in case we need to use same component .

* It is mostly used in page-not-found method . But , we can use it for other components also .

## Example : ##

```javascript
.
.
.

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const appRoutes : Routes = [
  { path : '' , component : HomeComponent } ,
  { path : 'users' , component : UsersComponent , children : [
     { path : ':id/:name' , component : UserComponent } 
  ] } ,
  { path : 'servers' , component : ServerComponent , children : [
    { path : ':id' , component : SingleServerComponent } ,
    { path : ':id/edit' , component : EditServerComponent  }
  ] } ,
  { path : 'not-found' , component : PageNotFoundComponent},
  { path : '**' , redirectTo: '/not-found'}                          // Alwys use it in last
 
];
.
.
.

```
### NOTE : ###

* Always use the redirective route in last . If it use in anywhere else , it will collapse other routing with page not found component .

# Outsourcing router configurations #

* For a compex application it is difficult to have all the routes in the app.module.ts .

* So , we can handle all our routes in a seperate file called app-routing.module.ts with the same behaviour .

* It will improve redability and better understanding on routing for complex application .

## Procedure ##

* Transfer all the routes declared in app.module.ts to app-routing.module.ts .

* import all the missing modules in app-routing.module.ts .

* Shift the routermodule from imports array of app.module.ts to imports array of app-routing.module.ts .

* Kindly import Router Module in app-routing.module.ts and remove it in app.module.ts if it is not necessary .

* In app-routing.module.ts file , add an exports array to export the Router Module .

* The exports array in module decorator used to tell angular to accept the module which is exported here where it is get imported .

* So , inorder to tell the app.module.ts file to use RouterModule , we should import the AppRoutingModule in app.module.ts .

## Example : ##

### app.module.ts ###

```javascript
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ServerComponent } from './servers/server/server.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './users/user/user.component';
import { SingleServerComponent } from './servers/server/single-server/single-server.component';
import { ServersService } from './servers/server/server.service';
import { FormsModule } from '@angular/forms';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AppRoutingModule } from './app-routing.module';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ServerComponent,
    EditServerComponent,
    UsersComponent,
    UserComponent,
    SingleServerComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    ServersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

```

### app-routing.module.ts ###

```javascript
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { EditServerComponent } from "./servers/edit-server/edit-server.component";
import { ServerComponent } from "./servers/server/server.component";
import { SingleServerComponent } from "./servers/server/single-server/single-server.component";
import { UserComponent } from "./users/user/user.component";
import { UsersComponent } from "./users/users.component";



const appRoutes : Routes = [
    { path : '' , component : HomeComponent } ,
    { path : 'users' , component : UsersComponent , children : [
       { path : ':id/:name' , component : UserComponent } 
    ] } ,
    { path : 'servers' , component : ServerComponent , children : [
      { path : ':id' , component : SingleServerComponent } ,
      { path : ':id/edit' , component : EditServerComponent  }
    ] } ,
    { path : 'not-found' , component : PageNotFoundComponent},
    { path : '**' , redirectTo: '/not-found'}
   
  ];

@NgModule({
    imports : [
        RouterModule.forRoot(appRoutes)
    ] ,
    exports : [
        RouterModule
    ]

})

export class AppRoutingModule {}
```
# Guard #

## CanActivate ##

* CanActivate is an interface which provided by anglar routr package .

* It forces to have CanActivat method in it's class .

* CanActivate method will have two arguments as follows :

 * ActivatedRouteSnapshot .

 * RouterStateSnapshot .

* These arguments need to be imported form anglar/router and they are provided by angular to handle guarding while routing .

* CanActivate method may return :

    * Observable of type boolean => Observable<boolean>  |
    * Promise<boolean> | 
    * boolean

* CanActivate can be run as both  Asynchronously ( Which returns Observable or Promise )  and Synchronously ( Which returns boolean ) .

### Synchronous ###

* Synchronos means sequence .

* It will only run line by line .


### Asynchronous ###

* Asynchronous means non-sequence .

* It will not wait for previous line get executed .

* Usually , setTimeout() , setInterval() are asynchrnous .

## Promise ##

* A JavaScript Promise object contains both the producing code and calls to the consuming code .

### syntax ###

```javascript
let myPromise = new Promise(function(myResolve, myReject) {
// "Producing Code" (May take some time)

  myResolve(); // when successful
  myReject();  // when error
});

// "Consuming Code" (Must wait for a fulfilled Promise)
myPromise.then(
  function(value) { /* code if successful */ },
  function(error) { /* code if some error */ }
);
```

### Use of Promise ###

```javascript
myPromise.then(
  function(value) { /* code if successful */ },
  function(error) { /* code if some error */ }
);
```
* Promise.then() takes two arguments, a callback for success and another for failure.

* Both are optional, so you can add a callback for success or failure only.

## Example : ##

### auth.service.ts ###

```javascript
export class AuthService {
    loggedIn = false ;

isAuthenticated(){
    const promise = new Promise(
        (resolve,reject) => {
            setTimeout(
                () => {
                    resolve(this.loggedIn);
                },800)
        }
    )
    return promise;
}


login(){
    this.loggedIn = true ;
}

logout(){
    this.loggedIn = false ;
}

}
```

### auth-guard.service.ts ###

```javascript
import { Injectable } from "@angular/core";
import { ActivatedRoute, ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree  } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "./auth.service";


@Injectable()
export class AuthGuard implements CanActivate {


    constructor( private authService : AuthService , private router : Router){}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): 
    boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | any
        
    // canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
    //  Observable<boolean> | Promise<boolean> | boolean | 
    
      {
  return this.authService.isAuthenticated()
  .then(
        (authenticated : boolean) => {
            if(authenticated ){
                return true ;
            }
            else {
                this.router.navigate(['/']);
            }
        }
    )
        
    }

}

```

# Using canActivate in app-routing.module.ts #

* canActivate is an property which is a type of array that takes the guard service as value in app-routing.module.ts .

```javascript
.
.
.

const appRoutes : Routes = [
    { path : '' , component : HomeComponent } ,
    { path : 'users' , component : UsersComponent , children : [
       { path : ':id/:name' , component : UserComponent } 
    ] } ,
    { path : 'servers' , canActivate : [AuthGuard] ,component : ServerComponent , children : [
      { path : ':id' , component : SingleServerComponent } ,
      { path : ':id/edit' , component : EditServerComponent  }
    ] } ,
    { path : 'not-found' , component : PageNotFoundComponent},
    { path : '**' , redirectTo: '/not-found'}
   
  ];
  .
  .
  .

```
# canActivateChild #

* canActivateChild is the guard which is used inside the children routes .

* It is similar to the canActivate method .

## Example : ##

### auth-gurad.service.ts ###

```javascript
import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot, UrlTree  } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "./auth.service";


@Injectable()
export class AuthGuard implements CanActivate , CanActivateChild{


    constructor( private authService : AuthService , private router : Router){}

canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
 boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {

    return this.authService.isAuthenticated()
    .then(
        (authenticated):boolean => {
            if (authenticated) {
                return true;
            }
            else {
                this.router.navigate(['/']);
                return false;
            }
        },
    );
}

canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree>{

    return this.canActivate(route,state);
}

}


```

### app-routing.module.ts ###

```javascript
.
.
.

const appRoutes : Routes = [
    { path : '' , component : HomeComponent } ,
    { path : 'users' , component : UsersComponent , children : [
       { path : ':id/:name' , component : UserComponent } 
    ] } ,
    { path : 'servers' ,
    // canActivate : [AuthGuard],
     canActivateChild : [AuthGuard] ,
     component : ServerComponent ,
      children : [
      { path : ':id' , component : SingleServerComponent } ,
      { path : ':id/edit' , component : EditServerComponent  }
    ] } ,

    { path : 'not-found' , component : PageNotFoundComponent},
    { path : '**' , redirectTo: '/not-found'}
   
  ];
.
.
.

```

# canDeactivate #

* It is process to add extra guard to certain component by sending an confirmation message that they need to leave the page with changes or not .

* It is slightly similar to canActivate method .

* It is also needed to be done with seperate service file .

### can-deactivate-guard.service.ts file ###

```javascript
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs"

export interface CanComponentDeactivate {
    canDeactivate : () =>  Observable<boolean> | Promise<boolean> | boolean ;
}

export class CanDeactivateGuard implements CanDeactivate<CanComponentDeactivate> {
    canDeactivate(component: CanComponentDeactivate,
                 currentRoute: ActivatedRouteSnapshot,
                  currentState: RouterStateSnapshot, 
                  nextState?: RouterStateSnapshot | undefined): boolean | UrlTree | Observable<boolean | UrlTree> | 
                                                                 Promise<boolean | UrlTree> 
                {
                return component.canDeactivate();
               }
}
```
* It should be collaborated with interface which should be implemented in the required component where we want to do deactive guard .

### edit-server.component.ts file ###

```javascript
.
.
.

import { CanComponentDeactivate } from './can-deactivate-guard.service';

...

export class EditServerComponent implements OnInit , CanComponentDeactivate {

...

  allowEdit = false ;
  changesSaved = false ;

...

    onUpdateServer(){
    this.serversService.updateServer(this.server.id , { name : this.serverName , status : this.serverStatus});
    this.changesSaved = true ;
    this.route.navigate(['../']  , {relativeTo : this.router});
  }


  canDeactivate() : boolean | Observable<boolean> | Promise<boolean> {    // The exact consition to execute deactivate guard

    if(!this.allowEdit){
      return true;
    }
    
    if( (this.serverName === this.serverName || (this.serverName === this.serverName) ) && !this.changesSaved){
    return confirm("Do you want to discard the changes ? ");
  }
  else {
    return true;
  }

   


  }
 



}

```
* We must add the candeactivate parameter in routing as canactivate . 

### app-routing.module.ts file ###

```javascript

...

     component : ServerComponent ,
      children : [
      { path : ':id' , component : SingleServerComponent } ,
      { path : ':id/edit' , component : EditServerComponent , canDeactivate : [ CanDeactivateGuard ] }
    ] } ,

...

  
```

* Kindly import all service files in app.module.ts file .

# Passing static data to a route #

* Consider that we have a default message to show over all the other routes and need to be called when it needed .

* We can use data attribute in routes to use this .

## Example : ##

* We should show a error message if wrong url is entered .

* It is reusable .

```javascript
.
.
.
    { path : 'not-found' , component : ErrorPageComponent , data : { message : "An error occured ! " } },
    { path : '**' , redirectTo: '/not-found'}
.
.
.

```

* we can use this data in another component where we need it by calling it as bellow : 

```javascript
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';

@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html',
  styleUrls: ['./error-page.component.css']
})
export class ErrorPageComponent implements OnInit {

  errorMessage!: string;

  constructor(
    private route : ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.errorMessage = this.route.snapshot.data['message'];

    // this.route.data.subscribe(
    //   (data : Data) => {
    //     this.errorMessage = data['message']
    //   }
    // );

  }

}

```
# Resolve method #

* Resolve is the concept which loads the dynamci data of particular component in faster way and it is mainly used for asynchronous data .

* To do this , e should have seperate service file .

### server-resolver.service.ts ###

```javascript
import { Injectable } from "@angular/core";
import { ActivatedRoute, ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { ServersService } from "../server.service";

interface Server{
    id : number;
    name : string ;
    status : string ;
}

@Injectable()
export class ServerResolver implements Resolve<Server> {
    
    constructor(
        private service : ServersService
    ){ }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): 
    Server | Observable<Server> | Promise<Server> | any {
        return this.service.getServer(+route.params['id']);
    }
 

}
```

### app-routing.module.ts ###

```javascript

...


    { path : 'servers' ,
    // canActivate : [AuthGuard],
     canActivateChild : [AuthGuard] ,
     component : ServerComponent ,
      children : [
      { path : ':id' , component : SingleServerComponent , resolve : { server : ServerResolver} } ,
      { path : ':id/edit' , component : EditServerComponent , canDeactivate : [ CanDeactivateGuard ] }
    ] } ,


  ...

```

### Recieving data in single-server.component.ts file ###

```javascript
...


    ngOnInit() {

      this.route.data.subscribe(
        (data:Data) => {
          this.server = data['server'];
        }
      );

    }

...
```

# useHash routing #

* To make our routing support to all web , we need to set the usehash routing to true .

### app-routing.module.ts file ###

```javascript 
...

 imports : [
        RouterModule.forRoot(appRoutes , {useHash : true})
    ] ,
    
...
```

# Understanding Observables #

* Observable are basically a part of data-sorce .

## Various data sources ##

* Http request .
* (UserInput) Events .

* In angular application , we use the rxjs which is 3rd party package to use observables .

## Parts of Observable ##

* Observable and Observer .

* As we noted above Observable is the data-source which we need .

* Observer is simply our code / us who utilizes the source .

* These two different things are seperated by a streaming timeline .

## 3 Ways of handling data ##

* Handle Data .

* Handle Error .

* Handle Completion .

# Creating own Observable # 

### Observables are belongs to the rxjs library ###

* To create own Observables we need to import necessary files from rxjs . But this is not requied when we use subscribe method in params observable ( Common Observable )

## Using interval method ##

* import interval from rxjs .

* interval is like an function that emits an event to every particular time we fixed .

* This is an example for Observable that we need to subscribe with the event .

* It will leads to unwanted memory leaks even the component get destroyed .

* So to avoid the unwanted memory leakage , we need to unsubscribe the subscription .

## Example : ##

* We have created an interval observable which generates an number for every one second .

* We should subscibe to the Observable and unsubscribe when we leave the component to avoid unwanted memory leaks in application .

* For , Angular Observables ( Ex : Params ) , we don't need to unsubscribe but angular takes care of that . It may differ in differnt situations .

```javascript
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit , OnDestroy{

  private firstObsSubscribe!: Subscription;

  constructor(private route: Router) { }

  ngOnInit(): void {

    this.firstObsSubscribe = interval(1000).subscribe(
      count => { console.log(count);
      }
    );
  }

  ngOnDestroy(): void {
    this.firstObsSubscribe.unsubscribe();
  }

  goUser(){
  this.route.navigate(['user']);
  }

}
```

# Creating new custom Observable #

* 1 -->  import Observable from rxjs .

* 2 -->  Call the Observable with create method which accepts another function( anonymous arrow function ) an arguments .

```javascript
import Observable from 'rxjs';
.
.
.

const var_name = Observable.create(
  () => {}                       //function
);

.
.
.

```

* 3 --> The arrow function will automatically get an argument of observer .

```javascript
.
.
.
const var_name = Observable.create( observer => { } );    //observer argument from rxjs
.  
.
.

```

### observer argument ###

* Observer is responsible for listening to data , error and completion of observable .

* It has three types of methods as follows :

 * observer.next()     --> It is used to emit a new value .
 * observer.error()    --> It is used to throw an error .
 * observer.complete() --> It is used to identify wheather some event is done .

 * 4 --> subscribe to the custome Observable .as below :

 ```javascript
 ...
this.variable_name = var_name.subscribe( data   => console.log(data); ) 
 ...

 ```

 ## Example : ##

 ```javascript
 ...

 ngOnInit(): void {

    // this.firstObsSubscribe = interval(1000).subscribe(
    //   count => { console.log(count);
    //   }
    // );

    const customObservable = Observable.create(
      (      observer: { next: (arg0: number) => void; }) => { 
        let count =0;
        setInterval(
          () => {
            observer.next(count);
            count++;
          },1000
          );
      }
    );

    this.firstObsSubscribe = customObservable.subscribe(
      (data: any) => { console.log(data);
      }
    );


  }

...

 ```

## observer.error ##

* here is simple explanatio to handle error .

```javascript
...

        setInterval(
          () => {
            observer.next(count);
            if(count>3){
              observer.error( new Error( ' Count is greater than 3 ! ') );
            }
            count++;
          },1000
        )

...
```
## observer.complete() ##

```javascript
...
  if(count===2){
              observer.complete();
            }
...
    this.firstObsSubscribe = customObservable.subscribe(
      (data: any) => { console.log(data);
      },
      ( error: any) => {console.log(error);
        alert(error.message);
      },
      () => {
        console.log("completed!");
        
      }
    );


  ...
```
# Operators # 

* Operators are acts as intermediate which is used to handle the raw data from observable .

* Sometimes , we don't want to use the exact data from observable , we may add extra infomation on it or somethingelse we need to alter.

* In this case , operartors came inti play which is used to handle the data before subscribe to it .

* We can also do this insude subscription method but for complex problems it will be inconvenient .

<img src="images\observable-operator.png">

* Operators have lots of methos within it . We can use according to our need .

* Befor using operartor in our observable , it is manditory to import them from rxjs/operators .

## Some most often used operators : ##

* map 

* filter 

* SwitchMap

* MergeMap

* Merge

* ForkJoin

* CombineLatest

* DistinctUntilChanged

## pipe() method ##

* Every observable uses pipe method .

* It is built in to rxjs .

```javascript
.
.


    customObservable.pipe();

.
.

```

## Using of Operators in pipe() ##

* Operatoes are methods which implemets our own function on the original data within the pipe method .

* It shoud return the data in required format .

```javascript
...
 customObservable.pipe(
      map( data => { return "Round:" + ( data ) + 1 } )    //map opearator to add Round text infront of data observable
    );
...
```
* Only creating the observable wil not add the changes in output .

* We need to subscribe to the piped observable . so that only we are able to get the desired output as below :

```javascript
.
.


    this.firstObsSubscribe =   customObservable.pipe(
      map( data => { return "Round:" + ( data ) + 1 } )    
    ). subscribe(                                       //Subscribing to piped observable with required opearator .
      (data: any) => { console.log(data);
      },
      ..
    )
.
.

```

* With the help of pipe , we can use more than one operator for data .

* We can seperate them by comma and need to import every operators from  rxjs/operators .



## Example : ##

* Consider in our customObservable , we nedd to add text infront of the data and used two operators map and filter before subscribing to it .

```javascript
.
.
import { map , filter } from 'rxjs/operators'

.
.
.

    this.firstObsSubscribe =   customObservable.pipe(
      filter( (data:number) =>{ return data >0 }  )  ,
      map( (data:number) => { return "Round:" + ( data + 1) } )   ,
    ). subscribe(                                                  //Subscribing to piped observable with required opearator .
      (data: any) => { console.log(data);
      },
      ( error: any) => {console.log(error);
        alert(error.message);
      },
      () => { 
        console.log("completed!");
        
      }
    );

.
.
.

```

# Subjects #

* Subjects are alternative to EventEmitters .

* Subjects need to be imported form rxjs.

* It is mostly similar to Eventemiiters but efficeint .

```javascript
import { EventEmitter, Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable( { providedIn:'root' } )     //It is an alternative way to tell angular that service is added ( instead of add the new service file in providers array in appmdule.ts file we can use this approach )
 
export class Userservice {
    // activatedEmitter = new EventEmitter<boolean>();      // Using eentEmitters 
    activatedEmitter = new Subject<boolean>();              // Using subject 

}
```

* While using subjects , we should not use emit to listen to the event . Alternative to emit is next because Subject is the special kind of observable .


```javascript
.
.
.

onActivate(){
  // this.userService.activatedEmitter.emit(true);           // Calling normal EventEmitter using emit()
  this.userService.activatedEmitter.next(true);              // Calling the subject using next()
}
.
.
.

```

* We can trigger the observable from outside .

<img src="images\subject-observable.png">

## Important Notes on Subject ##

* We should also unsubscribe to subject as any observable .

* We can only use subjects where we mannually generate EventEmitters which means we cannot use this for angular builtin fnctionalities like @Output likw that . 

# Forms # 

# Forms and Angular #

* Basicaly , forms need to be validated before submiting it. To help in validating and other extra features in forms we should use javascript .

* We should have form details in objects notation in typescript code to work with it .

* The object notation should have value which is an object that contains key , value pairs of form details .

* The object notation should also have metadata ( extra information on data ) that checks validity .

### Example : Object Notation ###

```javascript
{
  value : {
    name : "...",
    email : "..."
  }
  valid : true;
}
```
# Approaches of handling forms #

* Angular allows two different approaches in handling forms :
 
 * Template-driven approach.

 * Reactive approach .

## Template-driven approach ##

* Angular infers the form object from the DOM ( Template ).

## Reactive approach ##

* Form is created programaticaly and synchronised with the DOM .

# Template-driven Forms #

* import FormsModule .

* The imported FormsModule will create dynamic javascript object representation of the forms which is used in HTML template .

## input field control of Forms using ngModel  ##

* ngModel is directive which is used to store the value of input field .

* The user entered value is stored in the ngModel directive which is offered by FormsModule .

* name attribute and ngModel attribute are property and value of javascript format of any Forms .

## Submitting Forms using (ngSubmit)="method()" ##

### The correct place to all submit method ( with Form submit logic ) in template ###

* If we already have a submit button  with type="submit" , then it is not correct place to call the our submit method logic as the type="submit" will automtically call an javascript submit which is builtin in HTML .

* But , Angular provides the ngSubmit directive to use the control the submition of form .

* We should use the ngSubmit directive in the form tag itself binded with our submit method .

```javascript

  <form (ngSubmit)="onSubmit()">
  ...
</form>

```
## Get access to the form with local references ##

* Add a local reference variable to get access the form element .

* Pass the variable as an argument in the method we pass .

```javascript
<form (ngSubmit)="onSubmit(f)" #f>
```

* Then , In the method , pass the form a an argument of type HtmlFormElement and try to console to verify that .

```javascript

onSubmit(form : HTMLFormElement){
  console.log(form);
  
  console.log(" Form submitted ! ");
  
  
}

```
## use ngForm to expose the form to get values ##

* Set the local Reference to ngForm directive and change type of form from HtmlFormElement to ngForm in method .

```javascript
<form (ngSubmit)="onSubmit(f)" #f="ngForm">
...
</form>
```

```javascript
onSubmit(form : NgForm){
  console.log(form);
  
  console.log(" Form submitted ! ");
  
  
}
```

### Output with values ###

* We can get the form values we entered in the values array of object which consists the name as property and ngModel as value .

<img src="images\Forms-ngform.png">

# Accessing forms with @Viewchil() #

* We can submit the form in another way using local references .

* This method can be used if we need to access the form before submitting it .

```javascript
  <!-- <form (ngSubmit)="onSubmit(f)" #f="ngForm"> -->
        <form (ngSubmit)="onSubmit()" #f="ngForm">
```
```javascript
export class AppComponent {
  title = 'Forms';

  @ViewChild('f') submitForm!: NgForm; 

// onSubmit(form : NgForm){
//   console.log(form);
//  console.log(" Form submitted ! ");
// }

onSubmit(){
 console.log(this.submitForm);
}
```
# Validation to check User Input #

## Identifying what happens ehind the scene when we use validation to our HTML input field ##

### required ###

* required is the default HTML attribute to a input field which determined the partclr field is filled or empty .

### email ###

* email is another directive to validate the email address wheather it is in correct format or not ? 

## Example : ##

* I have add required and email directives to input fields as below :

<img src="images\required,email-template.png">

* So , the valid object should have true if the fields are filled and email is in correct format .

* At the same time , it should be false , if the fileds are empty and email is not in correct format . ( any one )

## Correct (Valid : True ) ##

<img src="images\validForm-TRUE.png">

## Incorrect ( Valod : False ) ##

<img src="images\validForm-FALSE.png">

## Verifying the validation in template CSS : ##

* Angular adds some classs dynamically to the elements for validation .

### If vaild , the the template will have ng-valid attribute ###

<img src="images\Correct-ngValid.png">

### If inValid , then the template will have ng-invalid attribute ###

<img src="images\Wrong-ngInvalid.png">

# Validation in template #

## disable Submit button if form is inavalid ##

```javascript
.
.
.
 <button 
        class="btn btn-primary" 
        type="submit"
        [disabled]="! f.valid"   
        > Submit </button>            <!-- Disabling submit button if form is invalid using it's local refernec value f -->
      </form>
.
.
.

```

## Adding CSS styles ##

* change the border color to RED , if the input field is invalid after the user clicked the field .

```javascript
input.ng-invalid.ng-touched{
    border:1px solid red;
}
```

# Displaying Warning message in the template if the particular field is InValid #

* We should provide the particular warning Text below the input field .

* And then have to provide condition according to the input if it is invaid .

* To check the particular input field is valid or not , we should get the value using local Reference with ngModel directive .

* So , we can use localreference variable in the condition below the warning text to decide wheather to display it or not ? 

```javascript
 <input 
            type="email" 
            id="email" 
            class="form-control"
            ngModel
            name="email"
            required
            email
            #email="ngModel"  
            >
          <span class="help-block" *ngIf=" !email.valid && email.touched "> Plaese Enter a valid email ! </span>
```
# Setting default value to input field using ngModel with propertyBinding #

* We can add ngModel directive to input field with property binding which consists of a default value of that field .

### app.component.html ###

```javascript
    <select 
          id="secret" 
          class="form-control"
          [ngModel]="defaultvalue"
          name="secret"

          >
            <option value="pet"> Your first pet ? </option>
            <option value="teacher"> Your first teacher ? </option>
          </select>
```
### app.component.ts ###

```javascript
  defaultvalue = 'pet';
```

### NOTE : Since it is select input field , we need to provide a valid option value as default ###

* We can also set default value for ay input field .

# Using NgModel with two-way Binding #

* We can use ngModel with Two-way  binding where we need to upadte the value of input field for every keyStroke .

## Example : ##

* If we need to display the exact text in the field as below :

### app.component.html ###

```javascript
  <div class="form-group">

          <textarea 
          name="questionAnswer" 
          rows="3"
          class="form-control"
         [(ngModel)]="answer"

          >
          </textarea>

          <p>  Your Reply : {{ answer  }} </p>


        </div>
```
### app.component.ts ###

```javascript
 answer ='';
```

# Conclusion of using ngModdel in input field with various Bindling #

### No Binding : To Tell Angular , It's just a control of input field . ###

```javascript
     <input 
            type="text" 
            id="username" 
            class="form-control"
            ngModel         //No Binding
            name="username"
            required
            #name="ngModel"
            >
```

### OneWay Binding [ Property Binding ] : To set the controls default value . ###

```javascript
<select 
          id="secret" 
          class="form-control"
          [ngModel]="defaultvalue"         //Property binding to set Default Value .
          name="secret"

          >
```

### Two-way Binding : To get Instant value of the control for every key stroke . ###

```javascript
 <div class="form-group">

          <textarea 
          name="questionAnswer" 
          rows="3"
          class="form-control"
         [(ngModel)]="answer"

          >
          </textarea>

          <p>  Your Reply : {{ answer  }} </p>


        </div>
```
# Grouping Form Controls #

* If we want to group some contents in Form ( Especially , in large forms ) , we can make it with ngModelGroup directive .

* First , wrap your group by a div element with id .

```javascript

<div id="Group_name">
...
</div>

```

* Then , use NngModelgroup in that div by assigning with some name which is the property name for that .

```javascript
<div id="user-data"  ngModelGroup="userInfo">
.... grouping name and email ....
</div>
```
<img src="images\grouping-form.png">


* We can also acceess the Group fields with local References .

```javascript

<div id="userInfo"  
ngModelGroup="userInfo"
#userData="ngModelGroup"
>
.
.
.
</div>

 <p *ngIf="!userData.valid && userData.touched"> user details not yel filled ! </p>

```

# Handling radio Buttons #

* Radio buttons are meant to be choose any one of the options provided .

* We can use the radio buttons as every input fields .

```javascript
 <div class="radio" *ngFor="let gender of genders">
          <label for="">
            <input 
            type="radio"
            name="gender"
            ngModel
            [value]="gender"
            required
            >
            {{ gender }}
          </label>

        </div>

```
```javascript
 genders= ['Male' , 'Female' , 'Others' ] ;
```

# Set value and Patch Value of form #

## setValue() method : ##

* setalue() method is allows us to set the values for every input field by access the form .

* It uses the javascript Object notation for set value for each input field .

* It is used to set all the values .

* app.component.html:

```javascript
  <button 
          class="btn btn-warning"
           type="button"
           (click)="suggestUserName()"
           >Suggest an user Name</button>

```

* app.component.ts :

```javascript
.
.
.

 @ViewChild('f') submitForm!: NgForm; 
  defaultvalue = 'pet';
 answer ='';

 genders= ['Male' , 'Female' , 'Others' ] ;

 suggestUserName(){
  const suggestUserName = "superUser";
  this.submitForm.setValue({
    userInfo : {
      userame : suggestUserName,
      email : "abc@gmail.com",
    },
    secret:'pet',
    questionAnswer:'',
    gender:'Male'
  });
 }
 .
 .
 .

```
## patchValue() method : ##

* It is better approach than setValues as we can set only which field we want to set .

* It should be used bycalling the form attribute which contains the whole structure of our Form .

```javascript
 @ViewChild('f') submitForm!: NgForm; 
  defaultvalue = 'pet';
 answer ='';

 genders= ['Male' , 'Female' , 'Others' ] ;

 suggestUserName(){
  .
  .
  .

  const suggestUserName = "superUser";
  // this.submitForm.setValue({
  //   userInfo : {
  //     userame : suggestUserName,
  //     email : "abc@gmail.com",
  //   },
  //   secret:'pet',
  //   questionAnswer:'',
  //   gender:'Male'
  // });

  this.submitForm.form.patchValue({
    userInfo:{ 
      username : suggestUserName,    
      email : "abc@gmail.com"                 // If only needs to set selective fields to be fixed 
    }
  });
 }
 .
 .
 .

```
# Using the Form Data after get from user  ( To display , To Handle , etc ) #

* SomeHow , the data from form is obtained from the user and stored in the javascript Object format .

* We can use the data ( Consider to display them after submitting it. ) by following procedure .

## Procedures ##

* Initiate an Object with properties with empty string or respected types according to all the input field in the form .

* These property names need to be match with name attribute in the input field . It is our choice but try to make it relative to that for easy understanding .

```javascript
DataToShow = {
  userName : '',
  Email : '',
  secretQuestion : '',
  Answer : '',
  gender : ''
}
```

* In the sumbit method ( The Event triggered when submit button is clicked. ) we must replace the values with our original values as follows : 

* Assign the values to the respect Form input fields .

* Get the whole Form variable  ( this.submitForm ) , and call .value t get the values of each input field ( this.submitForm.value ) 

* Next , Consider your javascript Objcet representation of your form and use the name attribute value here to get the value from input field . ( this.submitForm.value.questionAnswer ) . Here name attribute for answer input field is  ` questionAnswer ` in template .

* NOTE : If you have used any Grouping in your Form , use the flow according to it . For Example , we have grouped name and email under userInfo so we have used like this ( `this.submitForm.value.userInfo.username;` , `this.submitForm.value.userInfo.email;` )

```javascript

submitOrNot=false;
DataToShow = {
  userName : '',
  Email : '',
  secretQuestion : '',
  Answer : '',
  gender : ''
}

onSubmit(){
//  console.log(this.submitForm);
this.submitOrNot=true;
 this.DataToShow.userName = this.submitForm.value.userInfo.username;
 this.DataToShow.Email = this.submitForm.value.userInfo.email;
 this.DataToShow.secretQuestion = this.submitForm.value.secret;
 this.DataToShow.Answer = this.submitForm.value.questionAnswer;
 this.DataToShow.gender = this.submitForm.value.gender;
}

}
```
* We can bind the values in our template also .

```javascript
 <div class="row">
    <div class="col-xs-12">
      <div *ngIf="submitOrNot">
      <h3> Form Data : </h3>
      <br>
      <p> Name :{{ DataToShow.userName }}  </p>
      <p> Email : {{ DataToShow.Email }} </p>
      <p> SecretQuestion :{{ DataToShow.secretQuestion }} </p>
      <p> Answer :  {{ DataToShow.Answer }}</p>
      <p> Gender :{{ DataToShow.gender }} </p>

    </div>
    </div>
  </div>

```

# Resetting the form with reset() method : #

* We can reset the Form with reset method by calling the form reference .

* It is simply like reloading the page again .

```javascript

export class AppComponent {
  title = 'Forms';

  @ViewChild('f') submitForm!: NgForm; 

.
.
.
.
 
resetForm(){
  this.submitForm.reset();
  
}

}

```
# Reactive Forms #

* Form is created programatically and synchronised with DOM .

# Setup Reactive Forms #

* In reactive approach Forms is handled programatically in typescript file .

##  1 ) Define a variable to wrap your whole form of type FormGroup which is imported from angular/forms . ##

```javascript
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rective-forms',
  templateUrl: './rective-forms.component.html',
  styleUrls: ['./rective-forms.component.css']
})
export class RectiveFormsComponent implements OnInit {

genders = ['Male' , 'Female'];

  signUpForm!: FormGroup;          //define form variable 

}

```
## 2 ) import reactiveFormsModule in app.module.ts ##

*We should import the ReactiveFormsModule in ap.module.ts to work with reactive forms .

```javascript
import {  ReactiveFormsModule } from '@angular/forms';
.
.
.



@NgModule({
  declarations: [
    AppComponent,
    RectiveFormsComponent,                  //import ReactiveFormsModule from AAngular/forms
    TemplateDrivenComponent,
    HomeComponent,

  ],
})

.
.
.

```

# Reactive Form creation in code #

## Empty Recative Form Creation : ##

* After initializing the form in typescript , we should create it dynamically in ngOnit() method .

* ngOnInit() executed before the template . So , Form should be created withi the method .

* To create the form , Assign the form variable of FormGroup type to new FormGroup ( { } ) ;

* The javascript object represntation is empty . So , there is no avaiable form controls . 

### reactive-form.component.ts : ###

```javascript
.
.
.

export class RectiveFormsComponent implements OnInit {

genders = ['Male' , 'Female'];

  signUpForm!: FormGroup;

  ngOnInit(): void {
    this.signUpForm = new FormGroup ( { } );    // empty Reactive Form Created 
  }
.
.
.
}

```
## Basic Reactive form creation using FormControl : ##

* The Reactive is need to be interact with the template's form to assigned with or stores the user values .

* To , do this we must peovide the propeties and values to our javasript object representation in form variable .

* The Property --> It denotes the name of the template's input fields which is part of form .

* The value --> It should be triggered with new FormControl() which is imported from @angular/forms that is responsible for the data .

### Example : ###

* Consider , we have only one input field in our Form in Template .

```javascript
   <form>

            <div class="form-group">

              <label for="username">Username</label>

              <input type="text"
               id="username"
                class="form-control"
                >

            </div>
</form>
```

* Then , the Reactive form creation should be like this : 

```javascript
.
.
.
  ngOnInit(): void {
    this.signUpForm = new FormGroup ( {             // empty Reactive Form Created 
      'username' : new FormControl(null)            // Adding username input field with initial value 'null'
     } );  
  }

.
.
.


```
## Example Reactive Form with initial values : ##

* Consider template for assigning in typescript FormControls .

### reactive-forms.component.ts : ###

```javascript
.
.
.
  signUpForm!: FormGroup;

  ngOnInit(): void {
    this.signUpForm = new FormGroup ( {             // empty Reactive Form Created 
      'username' : new FormControl(null) ,          // Adding username input field with initial value 'null'.
       'email' : new FormControl(null),             // Adding email input field with initial value 'null'.
       'gender' : new FormControl('Male')            // Adding gender radio button with default value as 'Male'.
     } );  
  }
.
.
.
```

# Syncing the HTML form with Reactive Form in typescript #

* We have setup a basic reactive form in typescript using FormGroup and FormControl .

* But , those things are not connected with template Form which we actually want to access .

* To connect both of them , we want to do the following things :

## Procedures to Connect the HML Form template with Reactive Form created in TypeScript ##

### 1) Make sure ReactiveFormsModule is imported in app.module.ts : ###

```javascript

import {  ReactiveFormsModule } from '@angular/forms';

.
.
.

@NgModule({
  ...
  imports: [
    .
    .
   ReactiveFormsModule,
  ],
})
export class AppModule { }
.
.
.

```
### 2) Bind the FormGroup directive to the FormGroup variable we have created in our typescript with in the form element (HTML) ###

### reactive-forms.component.ts ###

```javascript
.
.
.
  signUpForm!: FormGroup;
.
.
.
```

* Here , signupForm is the variable name of our Form . So we need to bind this property with FormControl directive in form element using property Binding .

### reactive-forms.component.html ###

```javascript
.
.
.
  <form [formGroup]="signUpForm">   // Binding with Reactive Form Variable 
  ...
  </form>                                       
. 
.
.
```
### 3) Bind all the other FormControls in HTML with the typescript Reactive Form using the FormControlName directive ###

* We Whole form with typescript . But , we should connect each and every input controls in the Form with the reactive form to access it .

* To do this , we should use `FormControlName` directive in the specific input field as an attribute and bind it's value to the property name we have provided in ReactiveForm javascript object representaion in typescript file .

* For example , if i have given a property name as "username" in rectiveform ( .ts file ) , then i should bind in the specific input field as an attribute like this  ` FormControlName="username" `  ( .html file )

### reactive-forms.component.html : ###

```javascript
.
.
.
<label for="username">Username</label>
 <input type="text"
 id="username"
formControlName="username"           // Binding username with Reactive form
class="form-control"
>
</div>
<div class="form-group">
<label for="email">Mail</label>
<input 
type="email" 
id="email" 
formControlName="email"                //Binding email with reative form
class="form-control"
>
</div>
<div class="radio" *ngFor="let gender of genders">
<label for="">
<input 
type="radio"
formControlName="gender"                // Binding gender with reactive form
[value]="gender"
>
{{ gender}}
</label>
</div>
.
.
.

```

### reactive-forms.comonent.ts : ###

```javascript
.
.
.

 signUpForm!: FormGroup;

  ngOnInit(): void {
    this.signUpForm = new FormGroup ( {             // empty Reactive Form Created 
      'username' : new FormControl(null) ,          // Adding username input field with initial value 'null'.
       'email' : new FormControl(null),             // Adding email input field with initial value 'null'.
       'gender' : new FormControl('Male')            // Adding gender radio button with default value as 'Male'.
     } );  
  }
  .
  .
  .

```

### NOte : To use these directives FormGroup and FormControlName we should have imported the ReactiveFormModule in app.module.ts ###

# Verifying The Reactive form is connected with HTML #

* To verify wheather our Reactive form is linked with the HTML template form , we should go to developer tools and check wheather the additional classes are attached or not ? 

### Before linking with ReactievForm : ###

<img src="images\ReactiveForm-BeforeConnection.png">

### After connected with ReactiveForm : ###

<img src="images\reactiveForm-AfterConnection.png" >

# Reactive Form Submission using ngSubmit directive #

* ngSubmit directive is the default HTML and jaascript functonality to submit the form . So , in the ReactiveForms also we need to use the same procedure .

* But , only differnce is we don't want to use local references to access the form as we created our own form .

```javascript
.
.
.
<form [formGroup]="signUpForm" (ngSubmit)="onSubmit()">
.
.
.
```

```javascript
.
.
.

onSubmit(){
  console.log(" Form Submitted ! ");
  console.log(this.signUpForm);
}
.
.
.

```
# Reactive Form Validation #

* To add Validation to the Reactive Form , we should use the FormControl() constructor in typescript .

* FormControl() constructor in typescript code can take more than argument .

* First argument is to set initial value and the next argument is validators object which should be imported from angular forms that can handle differnet validatio fumction like required , email and etc .

### Adding single Validator ###

```javascript
import { ... ,  Validators } from '@angular/forms';

...

  ngOnInit(): void {
    this.signUpForm = new FormGroup ( {                                  
      'username' : new FormControl(null , Validators.required) ,            // Adding single Validators .
     } );                                      

  }
  .
  .
  .

```
### Adding Multiple Validators ###

```javascript
import { ... ,  Validators } from '@angular/forms';

...

  ngOnInit(): void {
    this.signUpForm = new FormGroup ( {                                  
      'username' : new FormControl(null , Validators.required) ,  
       'email' : new FormControl(null , [Validators.required , Validators.email] ),  //Adding Multiple Validators .

     } );                                      

  }
  .
  .
  .
```
# Verifying that validation Works Expected #

* Select any input field in devTools and look the class ng-valid in that .

## Example : Conider username field ##

* Here we have provide only `required` validation . So it should be invalid before entering any value and needs to be turn to valid after entered any value in it .

### Before : ###

<img src="images\Before-invalid.png">

### After : ###

<img src="images\After-Valid.png">

# Reactive Form Getting access to the controls ( Displaying validator error message ) with get method  #

* First provide the validation error message below the input field .

```javascript
  <div class="form-group">

              <label for="username">Username</label>

              <input type="text"
               id="username"
               formControlName="username"
                class="form-control"
                >

                <span 
                class="help-block"                  // Having the validation error message  
                > Enter User Name ! </span>           

            </div>
```

* But , we need to only dispay that when the validation get failed . To do this , we have used local references in TemplateDriven method  but here we can not use it .

## Get method () ##

* get() method is used to access the controls in our forms in typescript code . So should provide the path ( sequential property name ) which we want to get access .

* For example , if we want to access the username then , we should get FormGroup and call get method then need to pass 'username' as argument in it .

```javascript
.
.
.
 <span 
*ngIf="signUpForm.get('username')"      // If we want another property then we must use correct path in get method argument .
class="help-block"
> Enter User Name ! </span>
.
.
.
```
## Example : ##

* if we want to display , when the user touched and entered a wrong value or didnot enter any value and move to another fields , then 
we should use ,

### reactive-forms.component.html ###
```javascript
.
.
.

 <input type="text"
id="username"
 formControlName="username"
class="form-control"
>

<span 
*ngIf="!signUpForm.get('username')?.valid && signUpForm.get('username')?.touched"   //Displying the warning message .
class="help-block"
> Enter User Name ! </span>

.
.
.

```

## Styling ng-invalid and ng-touched properties using css ##

* We can make the box that is invalid as different color by setting the styles in css .


### reactive-forms.component.css ###
```javascript
input.ng-invalid.ng-touched{
    border: 1px solid red;
}
```
# ReactiveForm - Grouping #

## Group in typescript using FormGroup constructor ##

* We can group some required input fields in a group as we did in template-driven approach .

* To do that , we must create a new FormGroup constructor inside the whole FormGroup constructor .

```javascript
.
.
.
  ngOnInit(): void {
    this.signUpForm = new FormGroup ( {       
      'userdata' : new FormGroup({                        // Grouping 
        'username' : new FormControl( null ,Validators.required) ,                             
        'email' : new FormControl(null , [Validators.required , Validators.email] ),   
      })  ,     
    })
  }
.
.
.
```
## Synchronise in HTML using formGroupName directive ##

* We have only nested in typescript but we should update it in HTML template accordingly . Otherwise , it will show error .

* To do this , initially add a div element which covers the grouping items within it .

* Then , add a formGroupName directive and bind that with the name of group we created in out typescript .

```javascript

<form [formGroup]="signUpForm" (ngSubmit)="onSubmit()">

<div formGroupName="userdata">

<div> ... </div>         // binding name and email within userdata
<div> ... </div>

</div>

</form>

```
### Note : Upadate Path in get method ###

* Kindly update the path provided in get() according to Objects in typesscript to avoid errors .

* it will not show errors but , the waring message will not be displayed if it is wrong .

* So , kindly update the path in get method according to the formgroup in typescript .

```javascript
.
.
.

*ngIf="!signUpForm.get('userdata.username')?.valid && signUpForm.get('userdata.username')?.touched"
.
.
.
```

# Reactive Form array of Form Controls #

* To make some formcontrols in array format we should use FormArray constructor in the FormGroup ( Type script ) .

```javascript
.
.
.
'hobbies' : new FormArray([])                                            
.
.
.
```
* To get access to formArray constructor in outside , we should call the path by mention it with array format as below .

* Consider that when a button is clicked the array should be updated to a new form-control.

* So , we need to bind the method with the button and must link the arrayform like below :

```javascript
.
.
.

  ( <FormArray>this.signUpForm.get('hobbies') )    // Get access to the FormArray without any error .
.
.
.
```

* Hereafter , we can update the array with new form-control using push method as below :

```javascript
.
.
.
  onAddHobby(){
    const control = new FormControl(null , Validators.required) ;
     ( <FormArray>this.signUpForm.get('hobbies') ).push(control);
  }
.
.
.
```
* Synchronise with template to see the result .

```javascript
<div formArrayName="hobbies">
       ...
</div>
```

* Add the new form control array with dynamic data by user as below :

```javascript
.
.
.

  <div formArrayName="hobbies">
              <h3> Your Hobbies </h3>
              <button 
              class="btn btn-success" 
              type="button"
              (click)="onAddHobby()"
              > Add your hobby </button>
              <div 
              class="form-group"
              *ngFor="let hobbyControl of signUpForm.get('hobbies')?.value; let i = index"
              >
                <input type="text" [formControlName]="i">
              </div>
            </div>
.
.
.

```
# Creating custom validators in React Forms #

* Consider that , we should not allow Chris and Anna username . So , we should add validation according to it .

* First initialize the value which we don't want to allow in typescript file .

```javascript
...
forbiddeUserNames = ['Chris', 'Anna'] ;
...
```

* A validator is simply a function that executed by angular when the validity of form-control is changed .

* The function can be named by us .

* It should containe argument of FormControl .

* It should  return Object of type with key , property value pair of value type boolean .

### Validation function for avoid some usrnames : ###

```javascript
...

genders = ['Male' , 'Female'];
signUpForm!: FormGroup;
forbiddeUserNames = ['Chris', 'Anna'] ;
.
.
.
  forbiddenNames(control:FormControl) : { [s:string] : boolean } | any {
   if(this.forbiddeUserNames.indexOf(control.value)) {
    return {'nameIsForbidden' : true } ;
   }
   return null;                                    // return type should be null if validation is successful
  }
  .
  .
  .
```
* Add the function in the validators array where we need to use custom validation.

```javascript
...

genders = ['Male' , 'Female'];
signUpForm!: FormGroup;
forbiddeUserNames = ['Chris', 'Anna'] ;
.
.
'username' : new FormControl( null , [ Validators.required , this.forbiddenNames.bind(this) ] ), 
// bind(this) --> to identify the correct property 
.
  forbiddenNames(control:FormControl) : { [s:string] : boolean } {
   if(this.forbiddeUserNames.indexOf(control.value) !== -1 ) {       //  !== -1 --> To avoid the all values goes invalid 
    return { 'nameIsForbidden' : true } ;
   }
  return {  }  ;                   // return type should be null if validation is successful
  }
  .
  .
  .
```
# Reactive Form Using ErrorCodes #

* we use our custom Validators to validate some input field to avoid some values as inputs . If the Validation meets is criteria then the angular adds the error codes to us .

* For example , if the user enterd Anna which is not valid in username field , then the error code is set to be true as default . We can get this value in devTools .

* In Devtools , when we select the error code fiels and go to controls , go to userdata , go to username , go to errors ,
there you can find the error code value .

<img src="images\error-codes.png">

* For other values , the error code is null .

* So , we can use this value to display the difrrent type of warning messages . That means , if username field is empty then "enter a user name " , if it is not valid , then "username id not valid" like this .

```javascript
.
.
.
  <span 
 *ngIf="!signUpForm.get('userdata.username')?.valid && signUpForm.get('userdata.username')?.touched"
class="help-block"
>  
<span *ngIf="this.signUpForm.get('userdata.username')?.errors?.['nameIsForbidden']"> This name is invalid ! </span>
<span *ngIf="this.signUpForm.get('userdata.username')?.errors?.['required']">This field is required !  </span>
</span>
.
.
.

```

### Validity error message ###

<img src="images\required-error.png">

### Custom error message ###

<img src="images\custon-error.png">

# Creating a custom Asnc Validator in ReactiveForm #

* Asynchronous validators are used to validate some inputs from web servers which will delay ( 1 sec or 2 sec ) to give response .

* Example :  we want to validate the email from webserver .

* As we did for our custom validators , it is also a function and must be attached to our valdiators array with it's reference .

* This function also takes FormControl as an argument .

```javascript
  forbiddenemail(control:FormControl) {
...
  }
```
* But , the return type should be asynchronous like promise or Observable . Import Observable form rxjs library .

```javascript
 forbiddenemail(control:FormControl) : Promise<any> | Observable<any> {
....
  }
```

* Creating a Promise 

```javascript
  forbiddenemail(control:FormControl) : Promise<any> | Observable<any> {
   const promise = new Promise<any>(  (resolve , reject) => {} );
  }
```
* In the Promise function , setTimeout() function is executed asynchronouly ( delayed to 1500 milliseconds ) with some consition as below :

```javascript
  forbiddenemail(control:FormControl) : Promise<any> | Observable<any> {
   const promise = new Promise<any>(  (resolve , reject) => {
    setTimeout( () => {
      if (control.value === 'vijay@g.com'){
        resolve( { 'emailIsForbidden' : true })
      }
      else {
        resolve (null);
      }
    } , 1500 )
   } );
   return promise;
  }
```

* After creating our own custom Asynchronous validation function , we should add this reference in the input field where we need to do our validation as below :

```javascript
.
.
.

 this.signUpForm = new FormGroup ( {       
      'userdata' : new FormGroup({                       
        'username' : new FormControl( null , [ Validators.required , this.forbiddenNames.bind(this) ] ),                             
        'email' : new FormControl(null , [Validators.required , Validators.email] , this.forbiddenemail ),// Here the function is used
      })  ,                                                                   
      'gender' : new FormControl('Male'),
      'hobbies' : new FormArray([])                                            
     } );  
.
.
.
forbiddenemail(control:FormControl) : Promise<any> | Observable<any> {
   const promise = new Promise<any>(  (resolve , reject) => {
    setTimeout( () => {
      if (control.value === 'vijay@g.com'){
        resolve( { 'emailIsForbidden' : true })
      }
      else {
        resolve (null);
      }
    } , 1500 )
   } );
   return promise;
  }     
```

* But , it will throw an error 

# Status and Value changes in Reactive forms #

* There are two Observables available to identify the status changes and value changes in reactive forms .

* We can use these Observables by subscribing to them and can be able to trace the changes happens .

* Thses two observable can be used for detail view of what happens in form .

```javascript
.
.
.

     this.signUpForm.valueChanges.subscribe(
      (value) => { console.log(value);
      }
     );

     this.signUpForm.statusChanges.subscribe(
     (status) => { console.log(status);
     }
     );

.
.
.

```
# setValue and patchValue #

* setValues is used to set the default values in input fields and patchValue is also used to same process but we can select specific fields in it .

```javascript
.
.
.
    this.signUpForm.setValue({    // For whole Form
      'userdata': {
        'username' : 'vijay',
        'email' : 'vijay@gmail.com'
      },
      'gender' : 'Male',
      'hobbies' : []
    }
     ); 

         this.signUpForm.patchValue({   // For specific values in Form
      'userdata': {
        'username' : 'vijay',
      },
      
    }
     ); 
  
.
.
.

```

# Using Pipes to Transform Output #

## Pipes ##

* Pipes are angular feature which basically allows us to transform output .

## Example : ##

* Consider we have a property called name of type string in typescript.

* We want to display that is our template using string interpolation .

* But , what if ? we should make all the letters to capital while only displaying it in screen without changing the property .

* Here , the builtin pipe `uppercase` come to help .

* We can use the pipe in template with the string that we outputting in screen .

```javascript
...
<h1> {{ name | uppercase }}</h1>       // uppercase pipe 
...
```
# Using Pipes #

* Pipes are responsible to transform the values while displaying in screen only . So , logically we should use them in template .

## Example : ##

* Consider the following screen :

<img src="images\pipe-sample-1.png">

```javascript
...
 {{ server.instanceType}} |            
{{ server.started}}
...
```


* Here we need to display the status in UPPERCASE and date in DATE format .

* To do this without affecting any existing property with inbuilt pipes as below :

### app.componrnt.html ###

```javascript
...
 {{ server.instanceType | uppercase }} |            
{{ server.started  | date }}
...
```

<img src="images\pipe-sample-2.png">

# Parametrizing pipes #

* We can pass parametrs to our pipes to modify them more relevent to us .

* We can add parameters After the pipes we declared by seperating with colon ( : ) .

* There are many built-in parametrs for many built-in pipes .

* We can also provide more than one parameter to a single pipe by seperating them by colons .

## Example : ##

* Consider , If we want to display the time in differet format in the below result .

<img src="images\pipe-sample-3.png">

* To do this , we must add parameter in date pipe in template as below : 

```javascript
...
{{ server.started  | date:'fullDate' }}   //Adding parametes to pipe 
...
```
* Camelcase is important in the above parameter . Otherwise , the result will not be optained .

* There are lot parameter options .

<img src="images\pipe-sample-4.png">

# The documentaton to know where  built-in pipes and their parameters #

* We can go deeper about pipes in the official documentation . I have provide the link below :

## <a href="https://angular.io/api?query=pipe"> Click me learn more on pipe  { link }</a> ##

<br>

<img src="images\pipe-sample-5.png">

# Chaining multiple pipes #

* We can use more than one pipe in a single property by chaining them with pipe symbol ( | ) .

* Consider , we want to add the uppercase pipe to the date also we can do like below : 

```javascript
...
{{ server.started  | date:'fullDate' | uppercase }}
...
```
* Here date also changed to UpperCase :

<br>

<img src="images\pipe-sample-6.png">

# Order while using chaing pipes #

* The order of yhe pipe is applied always `from Left to Right ` .

* Which means , the last pipe is applied to previous value as below :

* Here , the `date` pipe is applied to the propert and `uppercase` pipe is applied to the property which is already applied with date pipe .

* So , the order is important when we use chaining pipes . Otherwise , we will encouter with error .

<br>

<img src="images\pipe-sample-7.png">

# Creating custom ( Own ) Pipe #

* Sometimes , we cannot use the built-in pipes . So , we should use our own custom pipe to acieve the result we wanted .

## Procedure to create own pipe ##

* consider an example , in our below screen we want to display the server name in shrten form .

<br>

<img src="images\pipe-sample-8.png">


### 1) Create seperate typescript file for the pipe logic ###

* We should create our new typescrupt file to get our pipe logic with descriptive , meaningful name .

<img src="images\pipe-sample-9.png">

### 2 ) Implement the pipeTransform interface ###

* We must implement the `pipeTransform` interface in out new typescript class which is imorted from @angular/core .

### short-serverstatus.ts ###

```javascript
import { PipeTransform } from "@angular/core";

export class shortenPipe implements PipeTransform{

}
```
### 3 ) Provide transform method ###

* Afetr implemented the pipeTransform interface in our class , the error will show because , we need to use `transform()` method in out class .

```javascript
import { PipeTransform } from "@angular/core";

export class shortenPipe implements PipeTransform{
transform(value: any, ...args: any[]) {
...
}
}
```
### 4) transform method arguments : ###

* `tranform()` method recives two basic arguments : 

  * value : any --> It is the property we want to transform .

  * argument : any[] --> it takes some arguments if it is needed .

* In our example , we don't want rguments . So we can ignore that :

```javascript
transform(value: any) {
    
}
```
### 5 ) return value ###

* The `transform()` method should return a new modified value with the applied featueres which we need using the value parametes.

* In our , example we need to shorten the string . So , i have used `substr()` method on value .

```javascript
import { PipeTransform } from "@angular/core";

export class shortenPipe implements PipeTransform{
transform(value: any) {
   return value.substr(0,5)  + '...';    // logic of our pipe using the value parameter 
}
}
```
### 6 ) Adding custom pipe file in app.module.ts ###

* We have created our custom pipe . To use this pipe in our template , we should make the angular to know it by make it available in app.module.ts file .

* Add this file in `declarations` array imported form correct path as we do for our components .

```javascript
...
import { shortenPipe } from './short-serverstatus';

@NgModule({
  declarations: [
    AppComponent,
    shortenPipe,
  ],
  ...
})
  ...
```
### Note : This will show an errro as it does not find any decorator in the pipe file ###

### 7 ) Add decorator in pipe file ###

* In pipe file we only set a logic which we want .

* But , to use this logic in app.module.ts and in our Template we need to add decorator `Pipe` which is imported from angular/core

```javascript
import { PipeTransform ,Pipe } from "@angular/core";

@Pipe({
    name : 'shorten'
})

export class shortenPipe implements PipeTransform{
transform(value: any) {
    return value.substr(0,5)  + '...';    // logic of our pipe using the value parameter 
}
}
```

### 8 ) Use custom pipe in template with the name we used in decorator ###

* Finally , To see the changes we made to a specific property in screen we should add our pipe in our template's specific property as we do for built-in pipe with name we used in our decorator .

```javascript
...
<strong>  {{ server.name | shorten }} </strong>  // Using the custom pipe in template  { shorten }
...
```

### Output : ###

### Before using custom pipe in server name : ###

<br>

<img src="images\pipe-sample-8.png">

<br>

### After using custom pipe in server name : ###

<br>

<img src="images\pipe-sample-10.png">

<br>

# Imporovising our logic for custom pipe  #

* We can improvise our custom pipes in our comfotable format as below : 

* Consider , we want to only show the `...` if only the charecter value exceeds 10 in server name . we can set the condition in pipe file as below :

```javascript
...
transform(value: any) {
    if(value.length > 10 ){
    return value.substr(0,5)  + '...';    // logic of our pipe using the value parameter 
    }
   return value ;
}
...
```
* If the server name is only `production` { 10 char } and other has more than that , the output will be like below for our condition pipe :

<br>

<img src="images\pipe-sample-11.png">

# Parameterising custom pipe #

* As we pass parametrs in our built-in pipes as below  , We can also add our parametrs to our custom pipe also .

```javascript
...
{{ server.started  | date:'fullDate' }}   //Adding parametes to pipe 
...
```
## Procedure to pass parameters to our custom pipes ##

* Consider an example that we want to set the limit of charecters in servername to get the `...` in our template using pipe parameters .

### 1 ) pass the value as second argument in the pipe logic to get the parametrs in our pipe file ###

```javascript
...
transform(value: any , limit : number) {
...
}
...
```
### 2 ) Provide the necessary logic in the method to use the parmeter ###

```javascript
...
transform(value: any , limit : number) {
    if(value.length > limit ){
    return value.substr(0,limit)  + '...';    // logic of our pipe using the value parameter 
    }
   return value ;
}
...
```
### 3 ) Pass the parameter in template with appropriate type we set in method parameter ###

```javascript
...
  <strong>  {{ server.name | shorten:1 }} </strong>   // Passed parameter as `1` to max char limit of severname `1`
...
```

<br>

### Output : ###

<br>

<img src="images\pipe-sample-12.png">

### NOTE : We can add multiple parametrs by adding multiple arguments in method in pipefile ###

<br>

<hr>

<br>

# Creating the filter pipe #

* Consider an example that our task is to make the user to filter the list with status . 

* We can done it with using the pipe by following below Procedures .

### 1 ) Add a new input field to make user type to filter the list ###

```javascript
...
<br>
<input type="text">
...
```
<br>

<img src="images\pipe-sample-13.png">

<br>

### 2 ) Bind the input filed with some empty string initially  ###

```javascript
...
 <input type="text" [(ngModel)]="filteredStatus">
 ...
```

```javascript
...
filteredStatus = '';
...
```

### 3 ) Generate your pipe using cli or by your own ###

* To generate pipe with cli , type the following command in appropirate directory .

```javascript
ng g p <pipename>
```
* For our project i named as below : 

```javascript
ng g p filter
```

* A new pipe is created with necessary parameters as below :

<br>

<img src="images\pipe-sample-14.png">

* Make sure that the cli automatially added the pipe in app.module.ts . Otherwise do it mannually .

<br>

```javascript
...
import { FilterPipe } from './filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    shortenPipe,
    FilterPipe,
  ],
  ..
})
  ...
```
### 4 ) Creating logic for filter in filter pipe ###


```javascript
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filterString: string , propName : string): any {
        if(value.length === 0 || filterString === '' ){

      return value ;
    }
    const newArray=[];
    for(let item of value){
       if ( item[propName] === filterString ){
        newArray.push(item);
       }
    }
    return newArray;

  }

}

```

### 5 ) Using the filter pipe in template ###

* We use the pipe to transform the output while display . So we can use it in array also .

* According to our condition , our value is also an array .

```javascript
...
  *ngFor="let server of servers | filter:filteredStatus:'status' "
...
```
* The first parametrs represents the  property that stores the input fields value which is passed as an argument in the pipe logic .

* The second parameter represents bywhich arrayelement we need to filter . It takes the `status` for filtering the list . We can also change it .

### Output : ###

<br>

### Before : filter ###

<img src="images\pipe-sample-15.png">

<br>

### After : filter by status ###


<img src="images\pipe-sample-16.png">

# Pure and Impure Pipes #

### Limitation while using pipe ###

* The angular pipe will not update the result when it is updated .

* This behaviour is not bad but we can fix it by set the `pure` selector to `false` .

### Example : ###

* Consider the add button to update the tha array with some static value .

* But , it will not seen in the filter .

* But we can make this attaiable by setting the pure selector as `false` in pipe .

<br>

```javascript
...
@Pipe({
  name: 'filter',
  pure : false
})
...
```

# Understanding Asynchronous pipe ( built-in async pipe ) #

* The built-in async pipe is used to pipe with some properties that are asynchronously like Promise or Observable .

* Consider that we have a property to display by delay of 2 sec . 

* We can use | async pipe to it like below :

### ts file : promise ###

```javascript
...
status = new Promise( (resolve,reject) => { 
  setTimeout( () => {
    resolve('stable');
  } ,2000)
} )

...
```

### HTML file : adding async pipe to the promise property ###

<br>

```javascript
...
<h1> server status : {{ status | async }} </h1>
...
```
<br>
<hr>
<br>

# Making Http Requests #

# How to connect Angular with database #

* The angular application needs to be conneted with the backend database to Store and Fetch data . The backend server may be SQL or NOSQL .

* We should not connect our angular application with the database directly as our angular application can be inspected by anyone . So ,
it is insecure .

* We will request API's instead of servers directly to avoid in security . The API's are like normal websites which provide data in javascipt object format without HTML . So , it is safe .

* We use REST API for our application . We can put and fetch data with http request method and http response method .

* So , we can get access to the database with the mediator called API .

* The database is not only used for simple fetching and storing data but also for file-analytics and file-upload and etc .

<br>

<img src="images/http-1.png">

<br>

# Anatomy of Http Request #

* URL ( API endpoint )  --> It is URL or website of our API .

* Http Verb --> It defines the which kind of request we want to send to API { POST , GET , PUT } . It deponds on the API endpoint .

* Header ( Meta Data ) --> Angular sets a default header but sometimes we can also set the header for our http request .

* Body --> It holds the data information of our each http request . It can used with POST , PUT , PATCH , etc .

<br>

<img src="images/http-2.png">

# Creating API in firebase #

* Visit firebase website and login with your google accout .

<image src="images/http-3.png">

<br>

* Click on add project to setup the new projet in firease .

<image src="images/http-4.png">

<br>

* Name your project as you want and accept the terms and conditon and give create project . It will create a new project as below : 

<img src="images/http-5.png">

<br>

* Once you click the continue , the interface will be shown like below : 

<br>

<img src="images/http-6.png">

<br>

* Go to Build  section , and select the Realtime database .

<br>

<img src="images/http-7.png">

<br>

* The Realtime database section will look like below : 

<img src="images/http-8.png">

<br>

* Click `create database ` 

* It will ask for the location to store our database . Selet any one .

* Then , it will ask for `mode` like below :

<br>

<img src="images/http-9.png">

* Choose `testMode` for our usecase and click enable .

<br>

<img src="images/http-10.png">

<br>

* We created our URL to  fetch and receive data : 

<br>

<img src="images/http-11.png">

# Sending a Post Request #

* To send request to any API , we must import a Module called `httpClientModule` in our app.module.ts from `@angular/common/http`

<br>

### app.module.ts ###

```javascript
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule          // to handle http requests 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```
# 1 ) inject http client #

* To use the http services , we must inject it our typescript to use this .

```javascript
...
import { HttpClient } from '@angular/common/http';
.
.
.
constructor(private http: HttpClient) {}       // Injecting hhtp clinet

ngOnInit() {}
...
```

# 2 ) Choose method you want #

* While using the http variable  we imported , we should decide which method we want to use according to our necessity . 

* There are many method available like below : 

<br>

<img src="images/http-12.png">

* The above methods are mostly named like http verbs we have seen while we learn `anatomy of http` .

* So , these methods allow us to sent various requests to the server .

* Now , we want to `store` our data in the database . So must choose `POST` method .

<br>

```javascript
...
 onCreatePost(postData: { title: string; content: string }) {
  this.http.post() ;
  }
...
```
# 3 ) Pass arguments to the method #

* The Post method takes the two arguments . One is `request url` and another one is `request body` .

## 1 st request url argument ##

* we should pass argments to our post method . The first argument is `url`

* As we use the firebase as server , we can use the url provided by firebase which we got .

<br>

<img src="images/http-13.png">

<br>

```javascript
...
  this.http.post(
    'https://http-request-learning-40dca-default-rtdb.europe-west1.firebasedatabase.app/',
  
  ) 
  ...
```
<br>

* But in most cases ( In rest API ) , we must specify the extra extension with the url like `url/POST` or `url/GET/..` 

* Firebase also requires to add extension that specifies service and format . 

* As we use POST service ( we should proide posts/.json ) extension to the url .

<br>

```javascript
...
  this.http.post(
'https://http-request-learning-40dca-default-rtdb.europe-west1.firebasedatabase.app/posts.json',
) 
...
```
<br>

<img src="images/http-14.png">

## 2 nd reuest body argument ##

* The `request body` argument is the data which we want to store in the server .

* Usually it should be in the JSON format . But , angular automatically transforms it to JSON if we pass Object .

<br>

```javascript
  onCreatePost(postData: { title: string; content: string }) {
  this.http.post(
    'https://http-request-learning-40dca-default-rtdb.europe-west1.firebasedatabase.app/posts.json',
   postData
  ) 
  }
```
# Subscribing to the request #

* Angular http request are heavily used by observable as they want to subscribe to them .

* If we want to get `response` ( For `POST` the response is `Store Data` )  from server , we want to subscribe to our `request` .

* Even the `request` will not been sent to the server if we didnot `subscribe` to our `request` .

* We can see that `post` method itself forces an return observable .

<br>

<img src="images/http-15.png">

<br>

```javascript
  onCreatePost(postData: { title: string; content: string }) {
  this.http.post(
    'https://http-request-learning-40dca-default-rtdb.europe-west1.firebasedatabase.app/posts.json',
   postData
  ).subscribe(
responseData => { console.log(responseData) }     // Simply printing the response data in subscribe method .
  );

  }
```

<br>

# Verifying wheather the requet has sent or not ? in developer tools network tab #

* First clear the deafaut data in devttols before sending an request by clicking the button .

<br>

<img src="images/http-16.jpg">

<br>

<br>

<img src="images/http-17.png">

<br>

<br>


* Send a request and verify the `network tab`

<br>

<img src="images/http-18.png">

<br>

* Always two request has been sent when we use post request as we see in the browser .

* The first request is an `Option` which verifies that the `POST` request is allowed or not and it get successed if so .

<br>

<img src="images/http-19.png">

* The second request is the actual post request which consists of request url we sent , requst method , status , response header ( host ) ,request headeres ( Automaticlly added by angular ) and paylod ( source of the request ( data ))

<br>

<img src="images/http-20.png">

<br>

<br>

<img src="images/http-21.png">

<br>

<br>

* In our firebase : 

<br>

<img src="images/http-22.png">

<br>


# Getting data #

<br>

* To get all the data we posted in our database , we should use `get` http request .

<br>

```javascript
...
 private fetchPosts(){
     this.http.get()
  }
...
```
<br>

* The `get` method only recicves one argument that is the `request url` from the database where we posted the data .

<br>

```javascript
...
  private fetchPosts(){
     this.http.get(
      `https://http-request-learning-40dca-default-rtdb.europe-west1.firebasedatabase.app/posts.json`
     )
  }
...
```

<br>

### Note : We should not alternate the extension in the url because we want to get the data from the posts.json itself ###

* The firebase will craete a seperate folder in the url by appending with it .

<br>

<img src="images/http-14.png">

<br>

<img src="images/http-23.png">

<br>

<br>

* Subscribe to the request to get the response .

<br>



```javascript
...
  private fetchPosts(){
     this.http.get(
      `https://http-request-learning-40dca-default-rtdb.europe-west1.firebasedatabase.app/posts.json`
     ).subscribe(
      posts => { console.log(posts) }     // Just displaying the data from database 
     )
  }
...
```

<br>


* I have called this method in `ngOnInit()` and also anothe button click event in template . SO that only , i have made it as seperate method to reuse it in multiple times.

<br>

```javascript
...
 ngOnInit() {
    this.fetchPosts();
  }

...
  onFetchPosts() {
    this.fetchPosts();
  }
...
 private fetchPosts(){
     this.http.get(
      `https://http-request-learning-40dca-default-rtdb.europe-west1.firebasedatabase.app/posts.json`
     ).subscribe(
      posts => { console.log(posts) }     // Just displaying the data from database 
     )
  }

```

<br>

### Console output of data get ###

<br>

* As we used our method in ngOnInit , it will get our data when it reloaded itseld . 

* Also we can get it by clicking the button also where we set the click event to it .

<br>

<img src="images/http-24.png">

<br><br>

# Using Rxjs Operators to transform response data #

<br>

# Analysing the obtained response data #

<br>

* The Response data is of type object which holdes a `key` as an encrypted key and the `value` as our `posted data` in object method .

<br>

<img src="images/http-25.png">

<br>

<img src="images/http-26.png">

<br>

# Changing the response data to an array instead Object using pipe() with map() operator #

* As the response data is in the `object` notation , we have not any advanced opeartions to access our data .

* But , `array` has some map , filter , reduce and etc operations with it .

* In order to utilize the features for our response data , we should change our data to an  array format .

* We can do it using the `pipe()` which transforms the data to something .

* As we learned it Observable , we can use our `pipe()` method for our responseDta `before subscribe` to it .

<br>

```javascript
  private fetchPosts(){
     this.http.get(
      `https://http-request-learning-40dca-default-rtdb.europe-west1.firebasedatabase.app/posts.json`
     ). 
     pipe()                                 // Using pipe method 
     .subscribe(
      posts => { console.log(posts) }    
     )
  }
```

<br>

* We can use the `map()` operator to iterate each elements and import it from `rxjs/operators`

```javascript
...
import { map } from 'rxjs/operators';
...
pipe( map() )                                 // Using pipe method 
...
```
<br>

* `map()` itself expects another function as argument which contains the logic and that returns the modified array forwhich array we give our map() .

<br>

```javascript
...
 map( () => {} )
...
```

<br>

```javascript
  private fetchPosts(){
     this.http.get(
      `https://http-request-learning-40dca-default-rtdb.europe-west1.firebasedatabase.app/posts.json`
     ).
     pipe( 
      map(
        
        (responseData : any) => { 
        const postArray = [] ;
         for (const key in responseData){

          if(responseData.hasOwnProperty(key)){
            
          postArray.push( { ...responseData[key] , id:key } );
         }
         }
        return postArray;
      }
          )
       )                                 // Using pipe method 
     .subscribe(
      posts => { console.log(posts) }    
     )
  }
```

<br>

* Now , we have changed the Object to array format as below : 

<br>

<img src="images/http-27.png">

<br>

<img src="images/http-28.png">

<br>

<img src="images/http-29.png">

<br>

# Using types with http client #

<br>

* We can get our response data but , angular does not know the type of that which means it only knows that the response data is `object` but not `format that the object look like` .

* So , we should make this possible in several ways .

## Specifying the type while passing it as argument in map() iteslf ##

<br>

* We have specified as `any` in there . But , it is wrong .

<br>

<img src="images/http-30.png">

<br>

* Instead of that , we should pass the format of our Object ( response data ) .

* It should be a type of Object that holds `property` as our key and `value` as `format of our object we  want` .

<br>

```javascript
...
(responseData : { [key:string] : ...  }  ) => 
...
```

<br>

<img src="images/http-31.png">

<br>

* So , on the value we cannot add directly the format . We have represented the format while we posted it as below :

<br>

```javascript
...
  onCreatePost( postData: { title: string; content: string }) 
...
```

<br>

* To use the format in every place in our code , we sould keep it in seperate file as below :

<br>

<img src="images/http-32.png">

* Now we can use the variable whereever we need it in our typescript code and imort it from corresponsiting directory .

<br>

```javascript
...
import { Post } from './post.model';.
...
onCreatePost(postData:Post) { ...
}
.
.
.
 private fetchPosts(){
   ...
     pipe(   )
      map(
        
        (responseData : { [key:string] : Post } | any  ) => { 
        const postArray : Post[] = [] ;

       ...} )
  }
 ...


```

<br>

<img src="images/http-33.png">

<br>



# Specifying type in the method itselt with <> and use of model.ts file #

* As we know , we have created the formart for our response data object notation in seperate moel.ts file .

* We can use it when they call the methods like GET , POST , etc by insetting `<..>` in it .

<br>

```javascript
...
...
import { Post } from './post.model';
....
  this.http.post<{name : string}>
  .
  .
  .
 private fetchPosts(){
     this.http.get<{ [key:string] : Post }>(
     )...
  }

```
<br>

* This will avoid unnecessary typescript errors .

<br>

# Outputting Posts #

<br>

* We have get our data with all necessary states and elegant way . Now we should use the data in our template insted of displaying it in the console :

### The method to get data : ###

<br>

```javascript
  private fetchPosts(){
     this.http.get<{ [key:string] : Post }>(
      `https://http-request-learning-40dca-default-rtdb.europe-west1.firebasedatabase.app/posts.json`
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
       )                                
     .subscribe(
      posts => { console.log(posts) }     // just displayig the data in console .
     )
  }
```

<br>

* As we changed the fetching data to Array , we should declare an array of type ( we created in model ) and set the value equals to the fetching data as below :

<be>

```javascript
...
import { Post } from './post.model';
.
.
.
export class AppComponent implements OnInit {

  loadedPosts : Post[] = [];          // New array to store coming array
...
  private fetchPosts(){
   .
   .
   .
     .subscribe(
      posts =>
       {
        this.loadedPosts = posts;   // Assiging to the local array .
        console.log(posts);          // displaying in console 
         }    
     )
  }


}

```

* Now we have data as array in our typescript . So we can easily display them in template according to our format .

<br>

### Template to display the fetched data which is array format in typescript ###

<br>

```javascript
...
  <div class="row">
    <div class="col-xs-12 col-md-6 col-md-offset-3">
      <p *ngIf="loadedPosts.length < 1 "> No posts available! </p>
      <div *ngIf="loadedPosts.length >=1 ">
        <div *ngFor="let post of loadedPosts">
          <h3> {{ post.title }}</h3>
          <p> {{ post.content }} </p>
        </div>
      </div>
...
```

<br>

<img src="images/http-34.png">

<br>

# Showing a loading indicator #

<br>

### template : ###

<br>

```javascript

  <div class="row">
    <div class="col-xs-12 col-md-6 col-md-offset-3">

      <p *ngIf="isFetching">Loading ...</p>

      <p *ngIf="loadedPosts.length < 1 && !isFetching"> No posts available! </p>
      <div *ngIf="loadedPosts.length >=1 && !isFetching">
        <div *ngFor="let post of loadedPosts">
          <h3> {{ post.title }}</h3>
          <p> {{ post.content }} </p>
        </div>
      </div>
     
      
    </div>
  </div>
```
<br>

### The isFetching property in typescript ( We can use any property name ) ###

<br>

```javascript
...  
  isFetching = false ;        // Initializing with false 
.
.
.
private fetchPosts(){
    this.isFetching = true ;        // setting to true only fetching .
     ....
     .subscribe(
      posts =>
       {
        this.isFetching = false ;      // Setting again to false after fetched 
        ..
       }
     )

```

<br>

### NOte : The firebase will fetch the data in very fast manner . If you want to view the loading text try in slow 3g or less internet connection ###

<br>

# Using services for Http Requests #

## But we will lost our connection with the data in database , we will fix it in next section . Kindly follow : ##

<br>

* The services file offers us to keep the extra operations in seperate file which are mostly not related to the template like ftching the information and ect .

<br>

## posts.service.ts file ##
```javascript
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from "rxjs/operators";
import { Post } from "./post.model";

@Injectable( { providedIn : 'root'} )

export class PostsService{

   constructor(
    private http : HttpClient
   ){}

   isFetching = true ;
   loadedPosts : Post[] = [];

    createAndStore( postData : Post ){
        this.http.post<{name : string}>(
            'https://http-request-learning-40dca-default-rtdb.europe-west1.firebasedatabase.app/posts.json',
           postData
          ).subscribe(
        responseData => { console.log(responseData) }     // Simply printing the response data in subscribe method .
          );
    }


    fetchPost(){
        this.http.get<{ [key:string] : Post }>(
            `https://http-request-learning-40dca-default-rtdb.europe-west1.firebasedatabase.app/posts.json`
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
           .subscribe(
            posts =>
             {
              this.isFetching = false ;
              this.loadedPosts = posts;
               console.log(posts);
               }    
           )
        
    }
}
```

<br>

## Using the service in our component.ts file : ##

<br>

```javascript
import { Component, Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from './post.model';
import { PostsService } from './posts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit {
  loadedPosts : Post[] = [];
  isFetching = false ;

  constructor( 
    private http: HttpClient ,
    private postService : PostsService
    ) {}      

  ngOnInit() {
    this.postService.fetchPost();
  }

  onCreatePost(postData:Post) {
    this.postService.createAndStore(postData);

  }
  onFetchPosts() {
    this.postService.fetchPost();
   
  }

  onClearPosts() {
    // Send Http request
  }




}

```

<br>

# Services and components working together #

<br>

* While fetching , the template searches for the array value in the funtion . But , it is unable to find the fetched value from services method where we subscribe to it .

* We can rectify this by `return` the function for fetch data in `service` and `subscribe` to the function in `comonent` as below :

<br>

## Sercive file : ##

```javascript
...
    fetchPost(){
        return this.http.get<{ [key:string] : Post }>(
            `https://http-request-learning-40dca-default-rtdb.europe-west1.firebasedatabase.app/posts.json`
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
    ...
```

<br>


## subscribing to the method in component as below : ##

* we should subscribe whereever we call the fetch method in component.ts file as below : 

<br>

```javascript
...
export class AppComponent implements OnInit {
  loadedPosts : Post[] = [];
  isFetching = false ;

...

  ngOnInit() {
    this.postService.fetchPost().subscribe(
      posts =>
       {
        this.isFetching = false ;
        this.loadedPosts = posts;
         console.log(posts);
         }    
     );
  }

  ...

  }
  onFetchPosts() {
    this.postService.fetchPost().subscribe(
      posts =>
       {
        this.isFetching = false ;
        this.loadedPosts = posts;
         console.log(posts);
         }    
     );;
   
  }

}

```

<br>

# Sending a Delete Request #

<br>

* If we want delete the databasse it is simple as follow :

<br>

### service  ###

```javascript
...
  clearPost(){        
     return this.http.delete < { [key:string] : Post } > (
        'https://http-request-learning-40dca-default-rtdb.europe-west1.firebasedatabase.app/posts.json',
      )
      
    }
...
```

<br>

### component.ts file : ###

```javascript
...
  onClearPosts() {
    // Send Http request
    this.postService.clearPost().subscribe(
     () => {
     this.loadedPosts = [] ;
     }
   
    );
  }
...
```

<br>

# Handling error #

<br>

# Handling error #

<br>

* While interacting with servers , we may encounter with lots of error like internet connection failure , Authentication error , invalid data and etc .

* We can manage our errors to improve the user experience .

* Inrder to handle those error we have got lots of methosds .

* Since we using firebase for our database ( There will be no authenticatin error ) . To handle the erros , we can just fake authentication error in firebase as below :

## Create authntication error in firebase ( Faking ) ##

<br>

* Go to `rules` tab in firebase :

<br>

<img src="images/http-35.png">

<br>

<img src="images/http-36.png">

<br>

* Change the `read` value to `false`

<br>

<img src="images/http-37.png">

<br>

* Click `publish` button .

<br>

<img src="images/http-38.png">

<br>

* Finally we faked the error in our browser as below :

<br>

<img src="images/http-39.png">

<br>

# Handling errors in subscribe method itself #

<br>

* As we can pass more than one arguments ( function ) to the `subscribe` , we should handle the `errors`  as second function .

<br>

```javascript
  onFetchPosts() {
    this.postService.fetchPost().subscribe(
      posts =>
       {
        this.isFetching = false ;
        this.loadedPosts = posts;
         console.log(posts);
         },
         err => {}           // Handling error as secod arguments while subscribing 
     )
   
  }
```

<br>

* Create any template to handle error and initially sets a propert to `null` { here our property is `error`} and only display the template when it goes `true` { That means when `error occures`}

<br>

### Template to show alert message ###

<br>

```javascript

<p *ngIf="isFetching && !error">Loading ...</p>
<div class="alert alert-danger" *ngIf="error">
        <h1> An Error Occured ! </h1>
        <p> {{ error  }} </p>
      </div>
```

<br>

### error function in typescript file whereever we call the fetch method ###

<br>

* Initially set the error value to `null` and update it to `error.message` which wil return an error message if use it in error method .

<br>

```javascript
...
  error = null;

 ngOnInit() {
    this.postService.fetchPost().subscribe(
      posts =>
       {
        this.isFetching = false ;
        this.loadedPosts = posts;
         console.log(posts);
         } ,
         error => { this.error = error.message }           // Handling error as secod arguments while subscribing 

     );
  }
...
  onFetchPosts() {
    this.postService.fetchPost().subscribe(
      posts =>
       {
        this.isFetching = false ;
        this.loadedPosts = posts;
         console.log(posts);
         },
         error => { this.error = error.message }           // Handling error as secod arguments while subscribing 
     )
   
  }

```

<br>

# The result screen #

<br>

<img src="images/http-40.png">

<br>

# To know more information about error handling regarding error details : #

<br>

* If we want to get the information , we can see in the console by consoling the error in the error object as below :

<br>

```javascript
  error  => { 
 console.log(error);       // To console the erro details 
this.error = error.message
}             // Handling error as secod arguments while subscribing 
```
<br>

<img src="images/http-41.png">

<br>

# Using Subjects for handling error #

<br>

* If we do not use subscribe in component.ts file but we subscribe in service file ( Consider an example post method ) . In post method , we only subscribe in service file . There we can use Subjects to handle the error .

<br>

```javascript
...
import { Subject } from 'rxjs';

@Injectable( { providedIn : 'root'} )

export class PostsService{

  ...
error = new Subject<string>();      // Initilaizing subject 
 
    createAndStore( postData : Post ){
        this.http.post<{name : string}>(
            'https://http-request-learning-40dca-default-rtdb.europe-west1.firebasedatabase.app/posts.json',
           postData
          ).subscribe(
        responseData => { console.log(responseData) }   , 
        (error) => { this.error.next(error.message) }       // error handling using subject 
          );
    }
.
.
.
```

<br>

* But to Provide use this in our template , we should subscribe to this error method in  ts .

* In our example , we should use in ngOnInit .

<br>

```javascript
...
ngOnInit() {
  ...
this.postService.error.subscribe(
errorMessage => { this.error = errorMessage }
);

...
}
```

<br>

# Using the Catch error Operator #

<br>

* catchError is a special operator that need to be imported from 'rxjs/operators' .

* To use this method , we need to import throwError obderable from 'rxjs' .

* We should pass this this an second argument to our subscripion method .

<br>

```javascript
...
import { catchError, map } from "rxjs/operators";
import { Subject, throwError } from 'rxjs';
.
.
.
fetchPost(){
     (...
          ),
          catchError( errorRes => {
            // Send analytic to server 
            return throwError(errorRes)
          }) 
}    

```

<br>

# Error Handling and UX #

<br>

* We should make the yser avoid the error ay clicking any button . So need to set the error property to null in method we executing when button is clicked .

<br>

```javascript
<div class="alert alert-danger" *ngIf="error">
       ...
        <button class="btn btn-warning" (click)="onAvoidError()"> Okay ! </button>
</div>
```

<br>

```javascript
  onAvoidError(){
    this.error=null;
  }
```
<br>

# Setting Headers #

<br>

* In somecases , the ApI we interact need custom headers to offer something to us or whatevet may be . 

* We can make the custom headers of key , value pairs .

* We can pass our header key , value pair as an arguments to any methods ( Fetch , delete , patch , get , etc ) like the endpoint url .

* We can pass the arguments as { ... } . within that there are bunch of functinalities available that we can utilize .

* `headers` is one among them and that gets a value of HttpHeaders which is iported from 'http/common' .

* It should be initiated with new keyword .

* Inside the `HttpHeaders` we can pass our key , value pairs of our custom headers .

<br>

```javascript
...
import { HttpClient, HttpHeaders } from "@angular/common/http";
.
.
.
 fetchPost(){
        return this.http.get<{ [key:string] : Post }>(
            'https://http-request-learning-40dca-default-rtdb.europe-west1.firebasedatabase.app/posts.json',
            {
            headers : new HttpHeaders( { "custome Header" : "vijay Header"})  // Setting custom headers 
            }
           ).
           pipe( ..)
 }
 ...
```
<br>

### Note : The header name must be without space or words should be seperated by `-` Otherwise it will show error ###

<img src="images/http-42.png">

<br>

# Adding query parameters #

* We can also add queryParams as we did headers . 

* For example , if we want to add `print=pritty` queryparams to our url we can make it using the same procedure .

* We can also make it by addig it in the end of url . But it wil not be convienet .

* Like httpHeaders , `HttpParams` need to be imported from 'http/common' .

* And call set method to pass the property and value of our query params .

<br>

```javascript
...
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
.
.
.
 fetchPost(){
        return this.http.get<{ [key:string] : Post }>(
            'https://http-request-learning-40dca-default-rtdb.europe-west1.firebasedatabase.app/posts.json',
            {
            headers : new HttpHeaders( { "custome Header" : "vijay Header"}),  // Setting custom headers 
            params : new HttpParams().set('print','pretty'),
            }
           ).
           pipe( ..)
 }
 ...
```

<br>

### Before adding print=pretty query params ###

<br>

<img src="images/http-43.png">

<br>

### After adding print=pretty query params ###

<br>

<img src="images/http-44.png">

<br>

# Adding multiple queryParams #

<br>

* It is similar to the above one . the thing is we initiate the method with a variable and call it with multiple data .

* We use `append()` to store params in one variabe .

* Assign the variable with  `params` property inside arguments group as we did for single qeryparams .

<br>

```javascript
...
   fetchPost(){
        let searchParams = new HttpParams();
        searchParams = searchParams.append('print', 'pretty');
        searchParams = searchParams.append('custom', 'params');

        return this.http.get<{ [key:string] : Post }>(
            'https://http-request-learning-40dca-default-rtdb.europe-west1.firebasedatabase.app/posts.json',
            {
            headers : new HttpHeaders( { "customeHeader" : "vijay Header"}) , // Setting custom headers 
            params : searchParams   // Multiple params 
            // params : new HttpParams().set('print','pretty'),
            })
}
...
```

<br>

### Result : ###

<br>

<img src="images/http-45.png">

<br>

# Observing differnet types of responses #

<br>

* Usually , the `response` for our `request` will be the data that actullay needed . We will map to it and use it .

* But in some specific cases , we may want to access the `status code` and ` response header` of our data . We cannot handle those data in ordinary response data provided by the database with the oridinary method .

* Inorder to get the response data with all it's extra information , we should use `observe` method .

* The `observe` is the part of an extra argument bunch like `headers` and `params` .

* So , we need to use this any request methods argument bunch as a property .

* Let us take a `GET` method and try this in it as below :

<br>

<br>

```javascript
...
    createAndStore( postData : Post ){
        this.http.post<{name : string}>(
            'https://http-request-learning-40dca-default-rtdb.europe-west1.firebasedatabase.app/posts.json',
           postData,
           {
            observe : 'body'         // observe:'value' to get  usual response data .
           }
          ).subscribe(
        responseData => { console.log(responseData) }   ,    // Printing the response data in console .
        (error) => { this.error.next(error.message) }
          );
    }
...
```
<br>

### Note : `body` is the default value for `observe` property ###

* It will display the response as we usually see in the browser .

<br>

<img src="images/http-46.png">

<br>

# observe : 'response' #

<br>

* `reponse` is the another important value for `observe` which gives the meta data of our response data .

<br>

```javascript
  createAndStore( postData : Post ){
        this.http.post<{name : string}>(
            'https://http-request-learning-40dca-default-rtdb.europe-west1.firebasedatabase.app/posts.json',
           postData,
           {
            observe : 'response'         // observe : 'response' to get full response data with extra information .
           }
          ).subscribe(
        responseData => { console.log(responseData) }   , 
        (error) => { this.error.next(error.message) }
          );
    }
```

<br>

<img src="images/http-47.png">

<br>

## Important Note : ##

* If we use `response` , we are accessable to all the every other properties like `headers` , `status` , and etc .

* But if we want to access usual response , we must specify it with `body` .

<br>

```javascript
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
```

<br>

### Output : ###

<br>

<img src="images/http-48.png">

<br>

# response : 'events' #

<br>

* `events` are not mostly used . It is used only in few cases where we want control on our request status or something .

* If we console the event , it will give two outputs as below :

<br>

```javascript
...
import { catchError, map ,tap} from "rxjs/operators";
...
 clearPost(){        
     return this.http.delete < { [key:string] : Post } > (
        'https://http-request-learning-40dca-default-rtdb.europe-west1.firebasedatabase.app/posts.json',
        {
            observe : 'events'           // Using 'events'
        }
      ).pipe(
        tap( event => {console.log(event);            // Displaying the response data events in console 
        } )
      )
      
    }
```

### NOte : As we do not subscribe to the delete in services , we use pipe tap method which allows to do some action with response data that will not affect the subscription . So only we have used here .###

<br>

### Output : ###

<br>

<img src="images/http-49.png">

<br>

* From the above image we can confirm that both output are from same line .

* The second one is usual response data . But first one is an object `type` which has value in numbers .

## Accessing the events with type ##

<br>

* To handle the events , we should access the type with `HttpEventType` .

* This should be imported from 'angular/http/common' .

<br>

<img src="images/http-50.png">

<br>

* The above are the list htppEvents available each one is represented with array of elements that in the console .

<br>

```javascript
...
   clearPost(){        
     return this.http.delete < { [key:string] : Post } > (
        'https://http-request-learning-40dca-default-rtdb.europe-west1.firebasedatabase.app/posts.json',
        {
            observe : 'events'           // Using 'events'
        }
      ).pipe(
        tap( 
            event => {
              if(event.type === HttpEventType.Sent){
                console.log(event.type);
                // .. we can see the response data status 
              }
                if(event.type === HttpEventType.Response){
                  console.log(event.body);
                }
                           
        } )
      )
      
    }

..
```

<br>

# Changing the Response body type #

<br>

* We can also configure the `response type` of our response data .

* The default value is `json` . But , we can change it to text,bloob or something according to our needs .

* But , in most cases we will use only json . We will not change it .

<br>

```javascript
...
  {
            observe : 'events'  ,        
            responseType : 'json'   // responseType 
        }
...
```

<br>

### Note : The response type should not be varied in two places , If so , it will show error ###

<br>

# Interceptors #

<br>

* interceptors are used to configure all the request with the same header that the Backend can get access it ( API ) .

* It is used to `Authenticate` a user  .

<br>

# Creating a basic interceptor example : #

<br>

* Create a seperate file with valuable name which will contain the functions of interceptors .

* The file should hava a class and that should be implement the `HttpInterceptor` which is imported form '@angular/common/http' .

<br>

### auth-interceptor.service.ts ###

```javascript
import { HttpInterceptor } from "@angular/common/http";

export class AuthInterceptorService implements HttpInterceptor {
    
}
```

<br>

* The interface forces us to implement `intercept` method .

<br>

```javascript
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";

export class AuthInterceptorService implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        ...
    }
}
```

<br>

# intercept() method : #

<br>

* The intercept() method receives two arguments : 

 * request .

 * next .

<br>

## requset ##

<br>

* This is generic type of request that we obtain and must of type `HttpRequest<any>` , the `any` is responsible for any type of retriving object .

<br>

## next ##

<br>

* `next` is the function that `forward the request`   

* Usually . `interceptor` acts `before the requst is sent` . So , we should call `next` to continue the `request` process while using inteceptors .

* next is the type `Httphandler` that should be imported form 'http/common' .

<br>

* The intercept() should `return` should be in the following format .

<br>

```javascript
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";

export class AuthInterceptorService implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        //...logic to authenticate or something we want
        console.log(" Request is on it's waay ! ");
        return next.handle(req);       //return
    }
}
```

<br>

## intercept() return : ##

<br>

```javascript
...
 return next.handle(req);       //return
...
```
* As we know , `next` is responsible for handling the request to move it to further . We should call this function with `handle` ny provide the `req` as argument .

* So that , our request will go in it's flow .

<br>

## Add the interceptor in providers array in app.module.ts ##

<br>

* As we know , interceptors are also belongs to services . So we should add it in providers array in app.module.ts file .

* But , `interceptor` will use the special way that is `javascript Object` which return three key , vaue pair .

<br>

### app.module.ts file ###

```javascript
...
  providers: [
    {
      
    }
  ],
...
```

<br>

## provide key ##

```javascript
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
...
  providers: [
    {
      provide : HTTP_INTERCEPTORS,
    }
  ]
```

<br>

* The `provide` key will contain the value as  `HTTP_INTERCEPTORS` which is imported frm '@angular/common/http'

* This acts as the token to identify the classes attached to the interceptors whenever the requst need to analyses before leaving using the interceptors .

<br>

## useclass key ##

<br>

```javascript
...
import { AuthInterceptorService } from './auth-interceptor.service';
...
  providers: [
    {
      provide : HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
    }
  ],
...
```

<br>

* The `useClass` key will contain the value of the file that is having the `class` which has the interceptor interface and that is also need to be imported from the file location .


<br>

## multi key ##

<br>

```javascript
...
  providers: [
    {
      provide : HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi : true
    }
  ],
...
```
<br>

* The `multi` key need to be have `true` value for using more than one interceptor files .

<br>

# Manupulating request Objects with clone #

<br>

* Inside the interceptor we can also modify the requst data . But , we can not modify by assiging the new value to it .

* To modify the request like url , header , body and etc  , we shold clone the request and pass an object as an argument to modify the feature that we want .

* Here , i have added the new header in the request .

<br>

```javascript
...
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const modifiedRequest  = req.clone( 
            { headers : req.headers.append( 'abc' , 'vijayHeader') }   // Appending the new header with old header
             )
        return next.handle(modifiedRequest);               // return the modified req to get correct result .
    }
...
```
<br>

* Return the `modifiedrequest` .

<br>

### Result : ###

<br>

<img src="images/http-52.png">

<br>

* We can get the modified headers for all the request like `get` , `store` .. 

<br>

# Response Inteceptors #

<br>

* We can also access the `response` in the inteceptors . We should do this in `handle` method . This is similar to the thing we modify the request before subscribing to it using pipe() .

* Here , i just want printed the response using tap method . But , we can make changes according to it .

<br>

```javascript
...
import { tap } from 'rxjs/operators'
...
export class AuthInterceptorService implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log(req.url);
        
        const modifiedRequest  = req.clone( 
            { headers : req.headers.append( 'abc' , 'vijayHeader') }   // Appending the new header with old header
             )
        return next.handle(modifiedRequest).pipe(
            tap( (event) => {
                console.log(event);
              if(event.type === HttpEventType.Response){
                console.log("Response arrived , body data : ");
                console.log(event.body);
                
              }
                
            } )
...
```

<br>

# Multiple Interceptors #

<br>

* if we have multiple interceptors , the the `order` is very important while we declare them in `providers` array in `app.module.ts` file .

* The fisrt will execute first .

<br>

```javascript
...
  providers: [
    {
      provide : HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi : true
    },
    {
      provide : HTTP_INTERCEPTORS,
      useClass: LoggingInterceptorServices,
      multi : true
    }
  ],
...
```
<br>

# Authentication and Route Protection #

<br>

* Authentication is responsible to allow the permitted used to access the entire application or visit some pages within the application .

<br>

# Working of Authentication #

<br>

* We have client ( The broeser , The user using the browser ) and server ( Stores and retrives data ) .

* When authentication process accurs that means when the user provide their credentials ( email , number , or any id ) to in the application , the credentials are validated in the server .

* The validation should not be done in the browser as the client can simply see and modify he credentials which is not secure . So , it is happening in the server which the user cannot access .

* As our angular application is single page application transformation between different pages is handled by router . The server is the API . 

* So the frontend and backend are decoupled . So the server does not know the client ( Browser ) directly .

* So the server validates the credentials that the user enters , and return back the `tokens` .

* Tokens are the `json web tokens` that contain the meta data . As the json string is encoded , the browser does not know what it is . It can be only validated by the server itself .

* The client stores the token in the in it's local storage and the stored token is sent to the server when the autherisation is successful for particular request .

<br>

<img src="images/auth-1.png">

<br>

# Switching between Auth Modes #

<br>

* We are using the single form as `login form` and `signup` form . So , we should change the UI dynamivally by clicking a button .

<br>

```javascript
...
     <button 
        class="btn btn-primary"  
        type="submit"> {{ isLoginMode ? 'Login' : 'Sign Up' }}
      </button> |

        <button class="btn btn-primary" 
        type="button" 
        (click)="onSwitchMode()"
        > Switch to {{ isLoginMode ? 'Sign Up' : 'Log in '}}
       </button>
...  
```

<br>

```javascript
...
  isLoginMode = true ;

  onSwitchMode(){
    this.isLoginMode = ! this.isLoginMode ;
  }
...
```
<br>

# Setting up firebase for Authentication  #

<br>

* As we practise with the firebase , we can set up the firebase with Authentication setup . Other API's will provided tokens for Authentication for users . 

<br>

### Step : 1 Change the read and write access to `auth!=null` in database section  ###

<br>

<img src="images/auth-3.png">

<br>

### Step : 2 Go to Authentication section in firebase ###

<br>

<img src="images/auth-2.png">

<br>

### Step : 3 Click the get started button ###

<br>

<img src="images/auth-4.png">

<br>

### Step : 4 choose email and password option for our usecase ###

<br>

<img src="images/auth-5.png">

<br>

### Step : 5 Enable the and save the option  ###

<br>

<img src="images/auth-6.png">

<br>

### Step : 6 After enabled:   ###

<br>

<img src="images/auth-7.png">

<br>

### Step : 7 Verify the users section to see the Authenticated users ###

<br>

<img src="images/auth-8.png">

<br>

# Preparing for signUp Request #

<br>

* As we use firebase as our rest API , It provides the `url` for our authentication and other `request` and `response` structure and data in their documentation for various actions like sing in and sign up . 

* I provded the link of our projects firebase .

<br>

<a href="https://firebase.google.com/docs/reference/rest/auth"> CLICK ME TO VISIT FIREBASE AUTH REST API  </a>

<br>

* This page contains the URL and request and response payloads . We can navigate between various methods by changing the methods in the side bar .

<br>

<img src="images/auth-9.png">

<br>

* To use the url for our our endpoint , we must copy the url in this section and change the `[API]=key` with our web key provided by the firebase when we use it while send a request . 

<br>

# Create a method for sign up in sepearte serveice #

<br>

* Proceed the common method for post request as usual .

* AS we already discussed , provide the link we found in the rest api sign up module . and replace the `[APIKEY]` part in the url with the web api key that provided by firebase .

<br>

```javascript
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable( {providedIn : 'root'} ) 
export class AuthSrvice {

    constructor( private http : HttpClient){}

    signUp(){
         this.http.post( 
            'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[API_KEY]',     // Change with web pai key in  `[API_KEY]`
         )
         
    }

}
```

<br>


## To find web Api in firebase ##

<br>

* Click the project overview section `settings icon` and go to `project setting` .

<br>

<img src="images/auth-10.png">

<br>

<img src="images/auth-11.png">

<br>

* Use the highlighted link insted the`[APIKEY]` in the url .

<img src="images/auth-12.png">

<br>

```javascript
...
'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBP02M32UK1J-7S5k81wJ47eitIwYFltzQ',      // complete url
...
```

<br>

* The `post` requst needed to be attached with some other properties in an objet format . We can get the request data in the documentation that we have get the url .

<br>

<img src="images/auth-13.png">

<br>

* We can also define the response data that provided in the same link as below : 

<br>

<img src="imaes/auth-14.png">

<br>

* So , we have created the sign up method :

### auth.service.ts ###

<br>

```javascript
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";


interface AuthResponseData{
    idToken : string,
    email : string ,
    refreshToken : string ,
    expiresIn : string ,
    localId : string
}

@Injectable( {providedIn : 'root'} ) 
export class AuthSrvice {

    constructor( private http : HttpClient){}

    signUp(email : string , password : string){

       return this.http.post<AuthResponseData>( 
            'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBP02M32UK1J-7S5k81wJ47eitIwYFltzQ',      // complete url
            {
                email : email,
                password : password,
                returnSecureToken : true
            }
         )
         
    }

}
```

<br>

# Sending the signup request #

<br>

* Here we have done wih usual subscribing and just printed the response data and error message i so .

<br>

```javascript
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html'
})
export class AuthComponent {

  constructor(private auth : AuthService){}


  isLoggingMode = true ;

  onSwitchMode(){
   this.isLoggingMode = ! this.isLoggingMode ;
  } 

  onSubmit(form : NgForm){
    if(!form.valid){
      return;
    }
    const email = form.value.email;
    const password = form.value.password;

    if(this.isLoggingMode){
      //...                       // Login MOde  
    }
    else{
      this.auth.signUp(email,password).subscribe(            // Sign Up mode 
        resData => {
          console.log(resData);
          },
          error => {
            console.log(error);
            
          }
      );
    }


   form.reset();
  }
} 

```
<br>

* The result :

<br>

<img src="images/auth-15.png">

<br>

* The addes user in firebase users : 

<br>

<img src="images/auth-16.png">

<br>

* If the same user tries to sign Up , error will occur : 

<br>

<img src="images/auth-17.png">

<br>

# Adding loading spinners #

<br>

* Use the loadingspinners.io for our project forms to display the loading icon when the form loads .

* Visit the following link to use the css loading spinners in our project .

<br>

<a href= "https://loading.io/css/">  Click me to visit loading spinners ! </a>

<br>

<img src="images/auth-18.png">

<br>

* Choose any one spinner , they provide the html and css for the each spinner . 

<br>

<img src="images/auth-19.png">

<br>

* Use the code in our application as a seperate component and add to the declaration section and use the component in the auth section ts and template .

<br>


# Error handling  #

* We should see the error fields in the console , then we can use the error message from that by subscribing to it .

* We can find the common error codes in the documentation itself .

<br>

<img src="images/auth-20.png">

<br>

* We can get access to the message :

<br>

<img src="images/auth-21.png">

<br>


### Service with catch error and throw error : ###

<br>

```javascript
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, throwError } from "rxjs";


interface AuthResponseData{
    idToken : string,
    email : string ,
    refreshToken : string ,
    expiresIn : string ,
    localId : string
}

@Injectable( {providedIn : 'root'} ) 
export class AuthService {

    constructor( private http : HttpClient){}

    signUp(email : string , password : string){

       return this.http.post<AuthResponseData>( 
            'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBP02M32UK1J-7S5k81wJ47eitIwYFltzQ',      // complete url
            {
                email : email,
                password : password,
                returnSecureToken : true
            }
         ).pipe(
            catchError( errorRes => {
                console.log(errorRes);
                let errorMessage = " An unknown error occured ! "

                if( !errorRes.error || !errorRes.error.error){
                    return throwError(errorMessage)
                }
                switch(errorRes.error.error.message){
                    case 'EMAIL_EXISTS' :
                    errorMessage = ' The email already exists ! '
                  }
                  return throwError(errorMessage)
            })
                
            
         )
         
    }

}
```

<br>

### ts file to handle the subscription : ###

<br>

```javascript
...
    else{
      this.auth.signUp(email,password).subscribe(            // Sign Up mode 
        resData => {
          this.isLoading = false;
          console.log(resData);
          },
          errorMessage => {
          this.isLoading = false;
          console.log(errorMessage);
          this.error = errorMessage;
        }
      );
    }
...
```

<br>

# Login method #

<br>

* Login is as similar as sigup but just we want to change response data .

<br>

```javascript
...

export interface AuthResponseData{
    idToken : string,
    email : string ,
    refreshToken : string ,
    expiresIn : string ,
    localId : string,
    registered? : boolean
}
...
    login(email : string , password : string ){
       return this.http.post<AuthResponseData>(
            'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBP02M32UK1J-7S5k81wJ47eitIwYFltzQ',
            {
                email : email,
                password : password,
                returnSecureToken : true
            }
        );
    }
...
```

<br>

* We can combine the subscription wihh observable .

<br>

```javascript
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { AuthResponseData, AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html'
})
export class AuthComponent {

  constructor(private auth : AuthService){}


  isLoggingMode = true ;
  isLoading = false ;
  error  = '';
  
  

  onSwitchMode(){
   this.isLoggingMode = ! this.isLoggingMode ;
  } 

  onSubmit(form : NgForm){
    if(!form.valid){
      return;
    }
    const email = form.value.email;
    const password = form.value.password;
    this.isLoading = true ;

    let authObs : Observable<AuthResponseData>

    if(this.isLoggingMode){
      authObs = this.auth.login(email,password);
    }
    else{
      authObs = this.auth.signUp(email,password)
    }

    authObs.subscribe(            
    resData => {
      this.isLoading = false;
      console.log(resData);
      },
      errorMessage => {
      this.isLoading = false;
      console.log(errorMessage);
      this.error = errorMessage;
    }
  );


   form.reset();
  }
} 

```

<br>

* Result : 

<br>

<img src="images/auth-22.png">

<br>

# Error handling in login #

<br>

* We can handle log in and sign up errors in single function  .

<br>

```javascript
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, throwError } from "rxjs";


export interface AuthResponseData{
    idToken : string,
    email : string ,
    refreshToken : string ,
    expiresIn : string ,
    localId : string,
    registered? : boolean
}

@Injectable( {providedIn : 'root'} ) 
export class AuthService {

    constructor( private http : HttpClient){}

    signUp(email : string , password : string){

       return this.http.post<AuthResponseData>( 
            'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBP02M32UK1J-7S5k81wJ47eitIwYFltzQ',      // complete url
            {
                email : email,
                password : password,
                returnSecureToken : true
            }
         ).pipe(catchError( this.errorHandler) )
         
    }


    login(email : string , password : string ){
       return this.http.post<AuthResponseData>(
            'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBP02M32UK1J-7S5k81wJ47eitIwYFltzQ',
            {
                email : email,
                password : password,
                returnSecureToken : true
            }
            ).pipe(catchError( this.errorHandler) )

    }

    private errorHandler(errorRes : HttpErrorResponse){
            console.log(errorRes);
            let errorMessage = " An unknown error occured ! "
            if( !errorRes.error || !errorRes.error.error){
                return throwError(errorMessage)
            }
            switch(errorRes.error.error.message){

                case 'EMAIL_EXISTS' :
                errorMessage = ' The email already exists ! '
                break;

                case 'EMAIL_NOT_FOUND' :
                errorMessage = ' The email does not exists ! '
                break;

                case 'INVALID_PASSWORD' :
                errorMessage = ' The Paaword is wrong ! '
                break;

                
              }
              return throwError(errorMessage)
        }

}
```

<br>

# Creating and storing user data #

<br>

* Store the data of a user wheather user is authenticated by adding user.model.ts .

* After creating the model , store the authentication user in service using subject .

* We should use our subject that emits an event when we log in and sign up without any error .

* This should store the user values in the model . After that we can use it according to our need .

<br>

### user.model.ts ###

```javascript
export class User {
    constructor(
        public email : string,
        public id : string ,
        private _token : string ,              // TO make developr use the token with getter .
        private _tokenExpirationDate : Date 
    ){}


    get token(){
        if( !this._tokenExpirationDate || new Date() > this._tokenExpirationDate ){
            return null ;
        }
       return this._token
    }
}
```

<br>

### auth-service.ts ###

<br>

```javascript
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Subject, throwError } from "rxjs";
import { tap } from "rxjs/operators"
import { User } from "./user.model";


export interface AuthResponseData{
    idToken : string,
    email : string ,
    refreshToken : string ,
    expiresIn : string ,
    localId : string,
    registered? : boolean
}

@Injectable( {providedIn : 'root'} ) 
export class AuthService {

    constructor( private http : HttpClient){}

    user = new Subject<User>();         // Storing the authentication data using pipe .


    signUp(email : string , password : string){

       return this.http.post<AuthResponseData>( 
            'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBP02M32UK1J-7S5k81wJ47eitIwYFltzQ',      // complete url
            {
                email : email,
                password : password,
                returnSecureToken : true
            }
         ).pipe( 
            catchError( this.errorHandler),
            tap( resData => {
                this.handleAuthentication(resData.email , resData.localId , resData.idToken ,+resData.expiresIn)
            })
             )
         
    }


    login(email : string , password : string ){
       return this.http.post<AuthResponseData>(
            'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBP02M32UK1J-7S5k81wJ47eitIwYFltzQ',
            {
                email : email,
                password : password,
                returnSecureToken : true
            }
            ).pipe( 
                catchError( this.errorHandler) ,
                tap (resData => {
                    this.handleAuthentication(resData.email , resData.localId , resData.idToken ,+resData.expiresIn );
                } ) 

                
                )

    }

    private handleAuthentication( email : string ,  userId : string , token : string , expiresIn : number ){
        const expirationdate = new Date( new Date().getTime() + expiresIn * 1000);
        const user = new User(email , userId , token , expirationdate)  // Pass the values to the uder model
        this.user.next(user);       // emit the subject with user 
    }

    private errorHandler(errorRes : HttpErrorResponse){
            console.log(errorRes);
            let errorMessage = " An unknown error occured ! "
            if( !errorRes.error || !errorRes.error.error){
                return throwError(errorMessage)
            }
            switch(errorRes.error.error.message){

                case 'EMAIL_EXISTS' :
                errorMessage = ' The email already exists ! '
                break;

                case 'EMAIL_NOT_FOUND' :
                errorMessage = ' The email does not exists ! '
                break;

                case 'INVALID_PASSWORD' :
                errorMessage = ' The Paaword is wrong ! '
                break;


              }
              return throwError(errorMessage)
        }

}
```

<br>

# Reflecting the Auth state in UI #

<br>

# navigating to some page after login successfully using the router #

<br>

* We can do it as usual navigation with router in the auth component . But we should use the navigation in exact place where the login , sign up gets successful .

<br>

```javascript
...

  constructor(
    private auth : AuthService ,
    private route : Router
    ){}


 ...
   
    authObs.subscribe(            
    resData => {
      this.isLoading = false;
      console.log(resData);
       this.route.navigate(['recipes'])  // Navigate to some page after login or  sign up
      },
...)
...
} 

```

<br>

# Providing access to only particular pages in headers #

<br>

* We have already set up a user in auth.service . So we want to just use the user in the in our main component where we need to display the pages ( Our example headers component )

* Get the user from the serveice and subscribe to it and unsubscribe to it .

* Additionally set the the variable to to change the values between true and false while subscribibg to the user .

* Then use the variable in the template to display the particular pages .

### header.component.ts ###

```javascript
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth/auth.service';

import { DataStorageService } from '../shared/data-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit , OnDestroy{

  userSubscription!: Subscription;
  isAuthenticated = false ;

  constructor(
    private dataStorageService: DataStorageService ,
    private auth : AuthService,
    ) {}

    ngOnInit(): void {
      this.userSubscription = this.auth.user.subscribe(
        user => {
          this.isAuthenticated = !!user ;
          console.log(!user);
          console.log(!!user);
          }
      );
    }

  onSaveData() {
    this.dataStorageService.storeRecipes();
  }

  onFetchData() {
    this.dataStorageService.fetchRecipes().subscribe();
  }

  ngOnDestroy(): void {
     this.userSubscription.unsubscribe();
  }
}

```

<br>

### header.component.html ###

<br>

```javascript
<nav class="navbar navbar-default">
  <div class="container-fluid">
    <div class="navbar-header">
      <a routerLink="/" class="navbar-brand">Recipe Book</a>
    </div>

      <ul class="nav navbar-nav">

        <li routerLinkActive="active" *ngIf="isAuthenticated">
          <a routerLink="/recipes">Recipes</a>
        </li>

        <li routerLinkActive="active" *ngIf="!isAuthenticated">
          <a routerLink="/auth">Authenticate</a>
        </li>

         <li routerLinkActive="active">
          <a routerLink="/shopping-list">Shopping List</a>
        </li>

       

      </ul>

      <ul class="nav navbar-nav navbar-right">

      <li *ngIf="isAuthenticated">
        <a style="cursor:pointer;" href="">Log out </a>
      </li>

          <div ngbDropdown  *ngIf="isAuthenticated">
         
          <button class="btn btn-warning" id="gfg" 
          ngbDropdownToggle>Manage</button>

            <div ngbDropdownMenu="gfg">
            <li>
              <a  ngbDropdownItem style="cursor: pointer;" (click)="onSaveData()">Save Data</a>
            </li>
            <li>
              <a  ngbDropdownItem style="cursor: pointer;" (click)="onFetchData()">Fetch Data</a>
            </li>
          </div>
          </div>
      </ul>
    </div>
</nav>

```
<br>

# Adding the token to outgoing request #

<br>

* Till now , we cannot recive the data in the firebase even we are Authenticated because we didnot send any token to the firebase that i am the authenticated person .

* To do this , we must send our user token while fetching the data from the API or server .

* I our application , we fetching and storing our data in the save data and fetch data in manage dropdown . The methods are located in the datastorage.servive.ts file as below :

<br>

### data-storage.service.ts file before sending token to the firebase ###

<br>

```javascript
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';

import { Recipe } from '../recipes/recipe.model';
import { RecipeService } from '../recipes/recipe.service';

@Injectable({ providedIn: 'root' })
export class DataStorageService {
  constructor(private http: HttpClient, private recipeService: RecipeService) {}

  storeRecipes() {
    const recipes = this.recipeService.getRecipes();
    this.http
      .put(
        'https://ng-course-recipe-book-65f10.firebaseio.com/recipes.json',
        recipes
      )
      .subscribe(response => {
        console.log(response);
      });
  }

  fetchRecipes() {
    return this.http
      .get<Recipe[]>(
        'https://ng-course-recipe-book-65f10.firebaseio.com/recipes.json'
      )
      .pipe(
        map(recipes => {
          return recipes.map(recipe => {
            return {
              ...recipe,
              ingredients: recipe.ingredients ? recipe.ingredients : []
            };
          });
        }),
        tap(recipes => {
          this.recipeService.setRecipes(recipes);
        })
      )
  }
}

```

<br>

* So to do this , we just want get access the user from Auth.service.ts file .

* We just want the active user authentication details and do not need the ongoing subscriptions .

* To get the immeadiate access for the token in the user service , change the `subject` to `Behavioursubject` in auth.servive.ts .

<br>

```javascript
import { BehaviorSubject, catchError, Subject, throwError } from "rxjs";
...
user = new BehaviorSubject<User | null> (null);         // use the BEhaviourSubject with initial value null
...
```
<br>

* Then use user and subscribe to it in the fetch method in the data-storage.service.ts .

* To get only the last subscription , use `take` method inside pipe before subscribing to it .

* `take()` operator takes a number as an argument imported form rxjs/operators .

* We have given 1 as an argument as we want only one value from that observable that is last subscription .

* USe the `exhaustMap` observable to use the two observable in pipe . The `exhaustmap` will wait for the first one to complete the replace the second observable with the previous one .

* After that change the all methods like map ,tap after the exhaustmap observable .

* So we got the access to the user and token .

* Pass the user token in the request as an object with `HttpParams` .

 * params : new HttpParams().set('auth', user.token)

 <br>

 ```javascript
 import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { exhaustMap, map, take, tap } from 'rxjs/operators';

import { Recipe } from '../recipes/recipe.model';
import { RecipeService } from '../recipes/recipe.service';
import { AuthService } from '../auth/auth.service';

@Injectable({ providedIn: 'root' })
export class DataStorageService {
  constructor(
    private http: HttpClient, 
    private recipeService: RecipeService,
    private authService : AuthService
    ) {}

  storeRecipes() {
    const recipes = this.recipeService.getRecipes();
    this.http
      .put(
        'https://ng-course-recipe-book-65f10.firebaseio.com/recipes.json',
        recipes
      )
      .subscribe(response => {
        console.log(response);
      });
  }

  fetchRecipes() {
    console.log("hi");
    
   return  this.authService.user.pipe (
       take(1) ,
        exhaustMap(
     ( user :any) => {
      console.log(user.token);
      
        return this.http
              .get<Recipe[]>(
                'https://ng-course-recipe-book-65f10.firebaseio.com/recipes.json',
                {
                  params : new HttpParams().set('auth', user.token)
                }
              );
      }
    ) ,
    map(recipes => {
      return recipes.map(recipe => {
        return {
          ...recipe,
          ingredients: recipe.ingredients ? recipe.ingredients : []
        };
      }); 
    }),
    tap(recipes => {
      this.recipeService.setRecipes(recipes);
    }) ) .subscribe()

  }
}

 ```

 <br>

# Attaching the token with interceptor #

<br>

* We can also do the same thing for save data as we did for fetch data .

* But , with the help of HttpClient , we can also do it in another interceptor method .

* So add the interceptor service for Auth .

* Provide the AuthInterceptor service for in app.module.ts file .

<br>

### auth-interceptor.service.ts ###

<br>

```javascript
import { HttpEvent, HttpHandler, HttpInterceptor, HttpParams, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { AuthService } from "./auth.service";
import { take , exhaustMap } from 'rxjs/operators'

@Injectable()
export class AuthInterceptorService implements HttpInterceptor {

constructor(private authService : AuthService){}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        this.authService.user.pipe (
            take(1) ,
             exhaustMap(
          ( user:any) => {
            if(!user){
                return next.handle(req)
            }
            const modifiedReq = req.clone({
                params : new HttpParams().set('auth' ,user.token)
            });
            return next.handle(modifiedReq)
            }) )

        return next.handle(req);
    }

}



```
<br>

### data-storage.service.ts ###

<br>

```javascript
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { exhaustMap, map, take, tap } from 'rxjs/operators';

import { Recipe } from '../recipes/recipe.model';
import { RecipeService } from '../recipes/recipe.service';
import { AuthService } from '../auth/auth.service';

@Injectable({ providedIn: 'root' })
export class DataStorageService {
  constructor(
    private http: HttpClient, 
    private recipeService: RecipeService,
    private authService : AuthService
    ) {}

  storeRecipes() {
    const recipes = this.recipeService.getRecipes();
    this.http
      .put(
        'https://ng-course-recipe-book-65f10.firebaseio.com/recipes.json',
        recipes
      )
      .subscribe(response => {
        console.log(response);
      });
  }

  fetchRecipes() {
    return this.http.get<Recipe[]>(
    'https://ng-course-recipe-book-65f10.firebaseio.com/recipes.json',
    ).pipe ( 
      map(recipes => {
      return recipes.map(recipe => {
        return {
          ...recipe,
          ingredients: recipe.ingredients ? recipe.ingredients : []
        };
      }); 
    }),
    tap(recipes => {
      this.recipeService.setRecipes(recipes);
    }) 
    )
   .subscribe()

  }
}

```

<br>

# Adding Logout #

<br>

* As we used the LogIn method by Subject , while LogOut , we just need to set to null and redirect again to authentication page .

<br>

### auth.service.ts ###

<br>

```javascript
...
user = new BehaviorSubject<User | null >(null);         // use the BEhaviourSubject with initial value null
...
   logOut(){
        this.user.next(null);
        this.route.navigate(['/auth']);
    }
...    
```

<br>

### Call this method in which service you want ( For our application we use the Header component )###

<br>

* .html :

```javascript
...
  <li *ngIf="isAuthenticated">
        <a style="cursor:pointer;" href="" (click)="onLogOut()" >Log out </a>
      </li>
...
```
<br>

* .ts :

```javascript
...
  onLogOut(){
    this.auth.logOut();
  }
...
```

<br>

# Adding auto LogIn #

<br>

* To keep the user with logIn always , we must store those value to local storage while we creating the user with token .


<br>

### auth.service.ts  ###

```javascript
...
    private handleAuthentication( email : string ,  userId : string , token : string , expiresIn : number ){
       ...
        localStorage.setItem( 'userData' , JSON.stringify(user) )        // Store the user in local storage to implement auto-login
    }
...
```

<br>

* We can see it when we log-in in the DevTools > Application > Storage > Local Storage > ... ( data )


<img src="images/auth-23.png">

<br>

* Add an Auto-LogIn method in the service file to utilize the Local Storage and implement the method .

<br>

```javascript
...
    private handleAuthentication( email : string ,  userId : string , token : string , expiresIn : number ){
       ...
        localStorage.setItem( 'userData' , JSON.stringify(user) )        // Store the user in local storage to implement auto-login
    }
...

    autoLogin(){

        const  userData : {
            email : string ,
            id : string ,
            _token : string ,
            _tokenExpirationData : string 
        } 
         = JSON.parse(localStorage.getItem('userData'));

        if(!userData){
            return ;
        }   
     

        const loadedUser = new User(userData.email , userData.id , userData._token , new Date(userData._tokenExpirationData))

        if(loadedUser.token){
            this.user.next(loadedUser)
        }
    }
...
```

<br>


* Call the Auto-LogIn method when the app gets loaded .

<br>

```javascript
...
  ngOnInit(): void {
   this.auth.autoLogin();
  }
...
```
<br>

# Adding Auto LogOut #

<br>

* Need to clear everything that the user data when logsOut includes the localStorage .
<br>

### auth-service.ts ###

```javascript
...

    logOut(){
        this.user.next(null);
        this.route.navigate(['/auth']);
        localStorage.removeItem('userData');   // Clear local Storage 
    }
...
```

<br>

* Set an Auto-LogOut method that clears the user data after certain peiod of time .

<br>

```javascript
...

    logOut(){
        this.user.next(null);
        this.route.navigate(['/auth']);
        localStorage.removeItem('userData');   // Clear local Storage 
    }
    
    autoLogout(expirationDuration: number){
      setTimeout( () => {
        this.logOut();
      } , expirationDuration) 
    }
...
```

<br>

* So we should not call the logout method again when the user mannually logging out . To avoid this , we should rectify the timing 

<br>

```javascript
...
private tokenexpirationTimer : any ;
...
    logOut(){
        this.user.next(null);
        this.route.navigate(['/auth']);
        localStorage.removeItem('userData');   // Clear local Storage 

        if(this.tokenexpirationTimer){
            clearTimeout(this.tokenexpirationTimer);
        }
        this.tokenexpirationTimer = null ;
    }
    
    autoLogout(expirationDuration: number){
      this.tokenexpirationTimer =  setTimeout( () => {        
        this.logOut();
      } , expirationDuration) 
    }
...
```

<br>

* Call the auto-logout method where we created the user :

<br>

```javascript
    private handleAuthentication( email : string ,  userId : string , token : string , expiresIn : number ){
        ...
        this.autoLogout ( expiresIn * 1000);          // call Autologout with the expires time 
        ...
    }
```

<br>

* also add the logout with different time inside the auto-logout :

<br>

```javascript
...
autoLogin(){
...
if(loadedUser.token){
...
const expirationDuration = new Date(userData._tokenExpirationData).getTime() -
new Date().getTime();
 this.autoLogout(expirationDuration);
}
}
...
```
<br>

# Adding an Auth-Guard #

<br>

* We can add Auth-guard as we usually do in Routing with seperate service file .

* We can add several new features into it to enhanve our guard .

### auth-guard.ts ###

<br>

```javascript
import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { map, Observable ,take } from "rxjs";
import { tap } from 'rxjs/operators';
import { AuthService } from "./auth.service";

@Injectable({providedIn:'root'})
export class AuthGauard implements CanActivate {

    constructor(
        private auth : AuthService ,
        private route : Router
        ){}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): 
    boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        return this.auth.user.pipe(
            take(1),
            map( user => { 
                const isAuth =  !!user;
                if(isAuth){
                    return true;
                }
                return this.route.createUrlTree(['/auth'])
             }),
            // tap(isAuth => { 
            //     if(!isAuth){
            //         this.route.navigate(['/auth'])
            //     }
            // } )
        )
    }

}
```

<br>

* We should add the AuthGuard in the routing-module for which page we want make protection .

<br>

```javascript
...
 {
    path: 'recipes',
    component: RecipesComponent,
    canActivate : [AuthGauard] ,
...
 }
```

<br>

# Dynaic Components #

<br>

* Dynamic components are the components that are created in runtime .

* For example , if we want to display an overlay or alert box for the whole page instantly , we will dynamic components .

* This is not the angular feature but we can use this according to our need .

<br>

# Adding an Alert Modal Component #

<br>

* Let us create a seperate component and styling for the alert box if wrong login credentials .

* Create a compnent as usuall .

* Add it in the declarations in app.module.ts file .

* use the components seletor as an element where we want to display the component .

* In our example we want to display it in our Auth Component's warning message .

<br>

```javascript
...
    <!-- <div class="text text-danger" *ngIf=" error!=='' " >
      <p>{{ error }}</p>
    </div> -->

    <AlertComponent [message] = "error" *ngIf="error"></AlertComponent>
...
```
<br>

* We can see the output as below :

<br>

<img src="images/dyn-com-1.png">

<br>

* But we cannot click the close button in that component .

<br>

# Understanding the diffeerent Components #

<br>

<img src="images/dyn-com-2.png">

<br>

# Using ngIf method #

<br>

* It is simple that we use earlier .

<br>

### alert.component.html ###

<br>

```javascript
<div class="backdrop" (click)="onClose()"></div>
<div class="alert-box">
    <p> {{ message }} </p>
    <div class="alert-box-actions">
        <button class="btn btn-primary" (click)="onClose()"> Close </button>
    </div>
</div>
```

<br>

### alert.component.ts ###

<br>

```javascript
import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
    selector : 'AlertComponent',
    templateUrl : './alert.component.html',
    styleUrls : ['alert.component.css']
})

export class AlertComponent {
  @Input() message!: string;
  @Output() close = new EventEmitter<void>()

  onClose(){
  this.close.emit();
  }
}
```

<br>

### Auth.component.html ###

<br>

```javascript
...
  <!-- <div class="text text-danger" *ngIf=" error!=='' " >
      <p>{{ error }}</p>
    </div> -->

    <AlertComponent 
    [message] = "error" 
    *ngIf="error"
    (close)="onHandleError()"
    ></AlertComponent>
...
```

<br>

### Auth.component.ts ###

<br>

```javascript
...
  error :any = '';
  ...
  onHandleError(){
    this.error=null;
  }
....
```

<br>

# Preparing Programatic creation #

<br>

* Intead of using this ordinary method , we can do it programatically .

* Create a method to implement it where we want to create the dynamic component .

* In our example , we will create it in the auth-component bacause there only we need to call the alert component when the error occures .

<br>

```javascript
...
  authObs.subscribe(            
...
      errorMessage => {
    ...
      this.showErrorAlert(errorMessage);
      ...
    }
  );
private showErrorAlert(message:string){
}
...
```

<br>

* Import the component which we want to use in this component . Here , we should call alert component .

<br>

```javascript
...
import { AlertComponent } from '../shared/alert/alert.component';
...
```
<br>

* Inject `componentFactoryresolver` from angular core .

<br>

```javascript
...
import { Component, ComponentFactoryResolver } from '@angular/core';
import { AlertComponent } from '../shared/alert/alert.component';
...
  constructor(
   ...
    private componentFactoryResolver : ComponentFactoryResolver ,
    ){}
```

<br>


* Use the variable and call the `resolveComponentFactory(AlertComponent)` by passing our component as an argument which we want to create dynamically .

* Store these in a specific variable .

<br>

```javascript
  private showErrorAlert(message:string){
    const alertCmpFactory =  this.componentFactoryResolver.resolveComponentFactory(AlertComponent)
 }
```

<br>

* Create a helper directive with the injection of `ViewContainerRef` and make it publically available to access it from outside .

### placeholder.directive.ts ###

<br>

```javascript
import { Directive, ViewContainerRef } from "@angular/core";

@Directive({
    selector : '[appPlaceholder]' ,
})

export class PlaceholderDirective {

    constructor(public viewContainerRef : ViewContainerRef) {}
}
```

<br>

* Declare the directive in app.module.ts .

* Create a `<ng-template></ng-template>` in the template where we want to implement the dynamic component .

* ng-template will create an exact element in the DOM but we can get access to the place where we using it .

* So use the ng-template with the `hrlperDirective` in the template as below :

### Auth.component.html ###

<br>

```javascript
...
<ng-template appPlaceholder></ng-template>    // We can anywhere on the top or the exact place where we want to use it .

<div class="row">
  <div class="col-xs-12 col-md-6 col-md-offset-3">
...
```

<br>

* add `@ViewChild('')` directive with the placeholder in the template in the comonent.ts and store with a variabal name of type of the directive.

<br>

### auth.component.ts ###

<br>

```javascript
...
import { PlaceholderDirective } from '../shared/placeholder/placeholder.directive';
...
@ViewChild(PlaceholderDirective, { static: false }) alertHost!: PlaceholderDirective;
...
```

<br>

* Declare the new variable with viewContainerref in the method where we creating the component and clear the viewcontainerref with the variable .

<br>

```javascript
...
  private showErrorAlert(message:string){
    const alertCmpFactory =  this.componentFactoryResolver.resolveComponentFactory(AlertComponent)
    const hostViewContainerRef = this.alertHost.viewContainerRef;
    hostViewContainerRef.clear();
 }
...
```

<br>

* Now call the viewcontainerRef with createComponent method by passing the argument as componentFactory that we have alredy initialized .

<br>

### auth.comonent.ts ###

<br>

```javascript
...
 private showErrorAlert(message:string){
    const alertCmpFactory =  this.componentFactoryResolver.resolveComponentFactory(AlertComponent)
    const hostViewContainerRef = this.alertHost.viewContainerRef;
    hostViewContainerRef.clear();

    hostViewContainerRef.createComponent(alertCmpFactory);
 }
...
``` 

<br>

### Note : If the angular version is < 9 , we must decalre the dynamic component in the app.module.ts file under `entryComponent` array ###

```javascript
...
@NgModule({
...
  ,
entryComponents : [ AlertComponent]
})
...
```

<br>


* IF version is higher than 9 , then there is no need to do this .


<br>

# Data Binding and Event Binding in dynamic components #

<br>

* if we want to use the properties and events that are avaiable in the dynamicaly created component , we shouls set a variable to that and access that component with instance keyword.

* The instance method will used to get the properties that are avaiable in the dynamic component .

<br>

```javascript
  private showErrorAlert(message:string){
    const alertCmpFactory =  this.componentFactoryResolver.resolveComponentFactory(AlertComponent)
    const hostViewContainerRef = this.alertHost.viewContainerRef;
    hostViewContainerRef.clear();

   const componentRef =  hostViewContainerRef.createComponent(alertCmpFactory);
   componentRef.instance.message = message;             // Using the message property in the alert component with the value here .
 }
```

<br>

* We can also access the events with the instance method . 

* In our criteria , our event is an emiter that must be subscribable to it .

* Add the Subscription .

<br>

```javascript
...
private closeSub!: Subscription; 
...
```
<br>

* clear the data in the hostContainerRef after unsubscribing to it within subscription method .

<br>

```javascript
  private showErrorAlert(message:string){
    const alertCmpFactory =  this.componentFactoryResolver.resolveComponentFactory(AlertComponent)
    const hostViewContainerRef = this.alertHost.viewContainerRef;
    hostViewContainerRef.clear();

   const componentRef =  hostViewContainerRef.createComponent(alertCmpFactory);
     componentRef.instance.message = message;

     this.closeSub = componentRef.instance.close.subscribe( () => {     // Event Binding 
      this.closeSub.unsubscribe();
      hostViewContainerRef.clear();
      
     } );
 }

```

<br>

* Finally remove the Authcomponent Subscription by unsubsscribe to it in ngOnDestroy by checking wheather the active subscription is avaiable .

<br>

```javascript
...
 ngOnDestroy(): void {
  if(this.closeSub){
   this.closeSub.unsubscribe();
   }
 }
...
```

<br>

# Angular Modules and Optimizing with Angular Apps #

<br>

* Angular Modules refers to the typescript files with the decorator `@ngModule({})` with that .

* ANgular modules are the Arrays that bundles the building blocks of our Angular application that may be AppComponent , ProducsComponent ,
HightlightDirective , ProductsService and etc .

* Angular application can only aware of the components, services and other features which are provided in the Module . Because angular can not scan the entire Application .

* Every Angular Application atleast need one Module.

* The One Module can be partitoned as many modules .

<br>

<img src="images/module-1.png">

<br>

* Examples : AppModule , APPRoutingModule , etc .

<br>

# Analysing App Module #

<br>

* As we know a module should contain the `@ngModule({})` decorator .

* In the decorator we have many Array of items .

<br>

```javascript
@NgModule({
  declarations: [
...
  ],
  imports: [
...
  ],
  providers: [
...
  ],
  bootstrap: [AppComponent]
  ,
})
```

<br>

* The `declaration` array should contain the `components , directives , pipes  ` that we use in our application .

* The `imports` array is responsible to hold the `OtherModules` . It helps to partition the appliication as multiple modules .

* The `providers` array holds the `serices` in our application . We can provide here . Otherwise we can make it happen by adding the below statement in the sevice file which we want provide in the appmodule 

```javascript
...
@Injectable({providedIn:'root'})
...
```
* The `bootstrap` array will hold the comonent that must be started first for execution . As it is a Array , We can add more than one component in it .

* The `entryComponents` Array is used rarely when components are created dynamically by programatic method .

<br>

# App-routing Module #

<br>

* This module keeps the routing of our application in seperate module in order to avoid complecation .

<br>

```javascript
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
```

<br>

 
* This module decorator simply have `imports` array that contains the routerConfigurations of the Application .

* The `exports` array have to contain that Module to use the paricular module in other module . Otherwise , we can not get access to this module in other modules .

<br>

# Creating new subModule from AppModule #

<br>

* We must partiton our Application into various sections to allocate each section with new `NgModule` .

* So , Create the typescript file in the selected folder ehich should be act as a module for that sections that holds multiple components, directives etc .

* Add `@ngModule({})` decorator to the new module file .

* Add `declarations` array as the AppModule . Shift all the new Sections components , directives or pipes that available the AppModule to the new module . Import all them in the new module .

* Add `exports` Array in the new module to get access for all components that are avaiable in the declarationn array . Inside exporst array provide all the elements that we have declared in this new module to export the new module in AppMOdule .

* To utilise the `exports` array elements of this new module , add this `newModule` ito the `imports` array in `AppModule` .

* Add `imports` array in the new module to get all the access like which means BrowserModule , RoutingMOdule, FormsMOdule and etc which we had in the AppModule . Provide the neccessary modules inside thid imports array to get all access that AppMOdule gives us.

* To use the `BrowserModule` , add `CommonModule` inside the `imports` array in new Module instaed of adding `BrowserModule`. The `commonModule` should be imported from `@angular/common`

### Exaple : ###

* In our application we have seperated the recipe section as a module .

### recipe.module.ts ###

<br>

```javascript
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { AppRoutingModule } from "../app-routing.module";
import { RecipeDetailComponent } from "./recipe-detail/recipe-detail.component";
import { RecipeEditComponent } from "./recipe-edit/recipe-edit.component";
import { RecipeItemComponent } from "./recipe-list/recipe-item/recipe-item.component";
import { RecipeListComponent } from "./recipe-list/recipe-list.component";
import { RecipeStartComponent } from "./recipe-start/recipe-start.component";
import { RecipesComponent } from "./recipes.component";

@NgModule({
    declarations : [
        RecipesComponent,
        RecipeListComponent,
        RecipeDetailComponent,
        RecipeItemComponent,
        RecipeStartComponent,
        RecipeEditComponent,
    ],
    imports : [
        AppRoutingModule,
        CommonModule,
        ReactiveFormsModule
    ],
    exports : [
        RecipesComponent,
        RecipeListComponent,
        RecipeDetailComponent,
        RecipeItemComponent,
        RecipeStartComponent,
        RecipeEditComponent,
    ]
})
export class RecipeModule {

}
```

<br>

### App.module.ts ###

```javascript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { ShoppingListService } from './shopping-list/shopping-list.service';
import { AppRoutingModule } from './app-routing.module';
import { RecipeService } from './recipes/recipe.service';
import { AuthComponent } from './auth/auth.component';
import { LoadingSpinnerComponent } from './shared/loading-spinner/loading-spinner.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AuthInterceptorService } from './auth/auth-interceptor.service';
import { AlertComponent } from './shared/alert/alert.component';
import { PlaceholderDirective } from './shared/placeholder/placeholder.directive';
import { RecipeModule } from './recipes/recipe.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    DropdownDirective,
    AuthComponent,
    LoadingSpinnerComponent,
    AlertComponent,
    PlaceholderDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule,
    RecipeModule
  ],
  providers: [
    ShoppingListService, 
    RecipeService,
    {
      provide : HTTP_INTERCEPTORS,
      useClass : AuthInterceptorService,
      multi : true
    }
  ],
  bootstrap: [AppComponent]
  ,
entryComponents : [ AlertComponent]
})
export class AppModule {}

```

<br>



# Shifting routing module to the feature module or sub module #

<br>

### app.routing.module.ts file before doing sub-routing ###

<br>

```javascript
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import { RecipesResolverService } from './recipes/recipes-resolver.service';
import { AuthComponent } from './auth/auth.component';
import { AuthGauard } from './auth/auth.guard';

const appRoutes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  {
    path: 'recipes',
    component: RecipesComponent,
    canActivate : [AuthGauard] ,
    children: [
      { path: '', component: RecipeStartComponent },
      { path: 'new', component: RecipeEditComponent },
      {
        path: ':id',
        component: RecipeDetailComponent,
        resolve: [RecipesResolverService]
      },
      {
        path: ':id/edit',
        component: RecipeEditComponent,
        resolve: [RecipesResolverService]
      }
    ]
  },
  { path: 'shopping-list', component: ShoppingListComponent },
  { path: 'auth', component: AuthComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

```

<br>

* In this RoutingModule , we want to sepearate the recipes related routes to the recipes module .

* Inorder to do it , create a new typescript file with ngmodule decorator in the recipes folder . Shift the neccessary routes in the app.routing.module.ts file .

* In new Module , import all missing modules .

* In app-routingModule , delete unwanted imports .

* In new-routingMOdule , add `imports` array in ngModule decorator as we have in the app-routingModule .

* Inside the `imports` array , access the `RouterModule` with  `forChild( router_variable ) ` method insted we use `forroot` method in the AppModule . 

* Add the `exports` array in the new-routing.module and provide `RouterModule`  inside it to get access for this route in the newModule by adding this exprted module in it's imports section .

<br>

### app-routing.module.ts ###

<br>

```javascript
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { AuthComponent } from './auth/auth.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'shopping-list', component: ShoppingListComponent },
  { path: 'auth', component: AuthComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

```

<br>

### recipe-routing.module.ts ###

<br>

```javascript
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGauard } from "../auth/auth.guard";
import { RecipeDetailComponent } from "./recipe-detail/recipe-detail.component";
import { RecipeEditComponent } from "./recipe-edit/recipe-edit.component";
import { RecipeStartComponent } from "./recipe-start/recipe-start.component";
import { RecipesResolverService } from "./recipes-resolver.service";
import { RecipesComponent } from "./recipes.component";


const recipeRoutes : Routes = [
    {
        path: 'recipes',
        component: RecipesComponent,
        canActivate : [AuthGauard] ,
        children: [
          { path: '', component: RecipeStartComponent },
          { path: 'new', component: RecipeEditComponent },
          {
            path: ':id',
            component: RecipeDetailComponent,
            resolve: [RecipesResolverService]
          },
          {
            path: ':id/edit',
            component: RecipeEditComponent,
            resolve: [RecipesResolverService]
          }
        ]
      },
]

@NgModule({
 imports : [ RouterModule.forChild(recipeRoutes) ] ,
 exports : [ RouterModule ]
})

export class RecipeRoutingModule {

}
```

<br>

### recipe.module.ts ###

<br>

```javascript
...
    imports : [
      ...
        RecipeRoutingModule
    ],
...
```

<br>

### Note : As we now handle the sub Module and routing we don't want to export our components in the newModule . we can remove it from newModule ###

<br>

### recipe.module.ts ###

<br>

```javascript
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { AppRoutingModule } from "../app-routing.module";
import { RecipeDetailComponent } from "./recipe-detail/recipe-detail.component";
import { RecipeEditComponent } from "./recipe-edit/recipe-edit.component";
import { RecipeItemComponent } from "./recipe-list/recipe-item/recipe-item.component";
import { RecipeListComponent } from "./recipe-list/recipe-list.component";
import { RecipeRoutingModule } from "./recipe-routing.module";
import { RecipeStartComponent } from "./recipe-start/recipe-start.component";
import { RecipesComponent } from "./recipes.component";

@NgModule({
    declarations : [
        RecipesComponent,
        RecipeListComponent,
        RecipeDetailComponent,
        RecipeItemComponent,
        RecipeStartComponent,
        RecipeEditComponent,
    ],
    imports : [
        AppRoutingModule,
        CommonModule,
        ReactiveFormsModule,
        RecipeRoutingModule
    ],
// reomved exports here !
})
export class RecipeModule {

}
```

<br>


# Shared MOdule #

<br>

* We can use the shared module between many modules that appear similar . 

* It will avoid code duplication in our application .

* When we use shared modules , we should provide all the components and decorators inside the exports array .

<br>

### Shared-module.ts ###

<br>

```javascript
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { AlertComponent } from "./alert/alert.component";
import { DropdownDirective } from "./dropdown.directive";
import { LoadingSpinnerComponent } from "./loading-spinner/loading-spinner.component";
import { PlaceholderDirective } from "./placeholder/placeholder.directive";

@NgModule({
    declarations : [
    LoadingSpinnerComponent,
    AlertComponent,
    DropdownDirective,
    PlaceholderDirective
] ,
imports : [
    CommonModule
] ,
exports : [
    LoadingSpinnerComponent,
    AlertComponent,
    DropdownDirective,
    PlaceholderDirective ,
    CommonModule
]

})


export class SharedModule {

}
```

<br>


* Update the `imports` array in other modules includeing AppModule . In our example we can only share the Common Module . But We can do for any number of Modules .

<br>

# The Core Module #

<br>

* It is also the same ngModule . But we can have our services which are available in the providers array of our module in this core module as seperate module .

* It reduces the code in appModule .

<br>

### core.module.ts ###

<br>

```javascript
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { AuthInterceptorService } from "./auth/auth-interceptor.service";
import { RecipeService } from "./recipes/recipe.service";
import { ShoppingListService } from "./shopping-list/shopping-list.service";

@NgModule({
        providers: [
            ShoppingListService, 
            RecipeService,
            {
              provide : HTTP_INTERCEPTORS,
              useClass : AuthInterceptorService,
              multi : true
            }
          ],
})
export class CoreServicesModule {}
```

<br>

* To use the core module services in the module , Add the coreModule in to the needed modules imports array .

<br>

### app.module.ts ###

<br>

```javascript
..
  imports: [
....
    CoreServicesModule
  ],
  ...
```

<br>

# Optimization #

<br>

# Lazy loading #

<br>

* Even we partioned our application into multiple modules , we cannot increase the loading time .

* Using lazy loading , we can decrease the loading time . Lazy loading only loads the page what we need with it's bunch of code using the javascript feature .

<br>

# Implementing lazy loading #

<br>

### File sizes before adding lazy loading ###

<br>

<img src="images/lazy-load-1.png">

<br>

* To implement routing in any feature Module , It must be have its `own routing` .

* Remove the path in the feature module Router and set it to ` '' ` .

<br>

### Recipr-routing.module.ts ###

<br>

```javascript
...
const recipeRoutes : Routes = [
    {
        path: '',   // Set to empty .
    }   
]
...
```

<br>

* Add a new path for the recipe module in the app-routing module.

<br>

### app-routing.module.ts ###

<br>

```javascript
const appRoutes: Routes = [
  ...
  { path : 'recipe' }      // Add route for the feature module 
];
```

<br>

* Add `loadChildren` in the property in the route to tell angular that load the component when only is needed .

<br>

```javascript
...
  { path : 'recipe' , loadChildren : }
...
``` 
<br>

* For the load childeren property , pass the arrow function as an argument that arrow function as below :

<br>

```javascript
  { path : 'recipe' , loadChildren : () => import('./recipes/recipe.module').then( m => m.RecipeModule)    }
```
<br>

* The function should have the `import` which is a string that should have the relative path of the Module we want to implement lazy load .

* Then , add the `promise` with `then()` that should return the Module that the path refers to .

* After implementing lazy loading in the routingModule , `remove` the modules in the `declarations` Array in `app.module.ts` . Otherwise it will `show error` or `did not load`

<br>

```javascript
...
@NgModule({
 
  imports: [
   
    // RecipeModule,      // remove this if implemented lazy loading 
  
  ],

  bootstrap: [AppComponent]
  ,
entryComponents : [ AlertComponent]
})
export class AppModule {}
...
```

<br>

### NOTE : After adding lazy loading to the components we must restart the application by `ngserve` to get the result ###

<br>

### File sizes after implemented lazy loading for single Module and restarted it with ng serve ###

<br>

<img src="images/lazy-load-2.png">

<br>

* So we can see the difference between the file sizes and it is obviously reduced to certain level . 

<br>

# Preloading strategy #

<br>

* We can preload the modules by using the `proloadingtrategy: preloadAllModules` in the rootModule .

<br>

```javascript
...
  imports: [RouterModule.forRoot(appRoutes ,  {preloadingStrategy : PreloadAllModules} ) ],
...
```
<br>

# Modules and services #

<br>

<img src="images/dif-ser-1.png">

<br>

# Loading services differently #

<br>

* The services we provide in the `lazyloaded` module will give different behaviour compared to the app services . 

* So there is a possibility of occurance of bugs in it . Mostly avoid it .

<br>

# AheadOfTime Compilation vs JustIntime Compilation #

<br>

<img src="images/aot-jit-1.png">

<br>

* Before deploy the application use `ng build --prod` or `ng build --configuration production` `{ form latest versions }`command to increase the optimisation of the application .

* This command will checks for some optimizes codes in the application .If it finds some unPotimizes code , it will show error .

* This will download new files to our application with reduced file sizes .

* After using this command , use `ng serve` .

<br>

<img src="images/aot-jit-2.png">

<br>

# Working with NgRx #

<br>

* NgRx is used to manage the states in the complex application .

* It is mainteained by Angular team .

<br>

# Application State #

<br>

* `State` can be defined as `data that is important for the Application and influences what visibles on the screen` .

* It may be waiting state { waiting for the data from backend } , loading state , etc .

* Below is example Application's state :

<br>

<img src="images/ngrx-1.png">

<br>

# Reasons to use state in Application #

<br>

* We are using state in the every application that means we will definitely store data in services and interact with api to fetch data, delete data and etc . This is called state which managing data .

* It is okay for the smaller application . ( Using Components and Services to handle the data and the template ) .

* But , when the Application is getting complex that means the data is growing huge , we should handle the `rxjs` state management to avoid the unwanted confusions while handling data .

<br>

# Issues with Rxjs (  Reactive Extension for Javascript ) Approach #

<br>

* The `state` in the sense , it is `data` . Below are the some common issues faced while using Rxjs approach .

* The data can be updated anywhere in the Application and it is changable and interacting with http is not clear .

* To avoid these probelems , we should use `Redux pattern` to manage the `state or data` .

<br>

<img src="images/ngrx-2.png">

<br>


# Redux #

<br>

* Redux is the `State Management pattern `  .

* It is also available as a library so that we can use this Redux pattern in any application .

* To use this `Redux` pattern in any application , we must aware or have this pre-defined setup in our application .

* To implement the Redux pattern to handle state ( data ) in any application , we must have knwolede on the some concepts .

<br>

# Redux-Pattern --> Store #

<br>

* As the name suggests , `Store` is the place which containes all the data ( Application State ) of whole application .

* It stores the data of an application as a `javascript Object notation from various components and services or modules ` .

* The data is categorized with nested objects according to the application .

<br>

```javascript
Store --> Application Data (Just an example view not exact one )

{
  component 1 : value ,
  ..
  component n : value ,
  ...
  ,
  property : {
    nested property : value ;
    ..
  }
  .
  .
  .
}
```

<br>

* The various parts of the Application still receives ( Components and Services ) their state ( data ) from the one area that is from `Store ( Application State )`

<br>

<img src="images/ngrx-3.png">

<br>

# Redux-Pattern --> Actions #

<br>

* Again as the name suggests , `Actions` are the activities like `add , delete , edit , view or anything to the store ( Aplication State ) ` .

* If `Store` is available for any application then we can `receive data` from anywhere on the application . Simultaneously , we should need to perform some operations ( Actions like add , edit , delete and etc ) to that store ( Application state ) . To achive this , the `Actions` help us .

* `Actions` is also the `Javascript Representation with the identifier and optionally the payload`  . The `identifier` refers to the `Kind of Action need to be performed like add , delete and etc ` and  `payload` refers to the `extra information on the action like  `  

* For example , if any data is added to the Array which is available in the `Store` , then the `Action` will update as javascript object natation as below :

<br>

```javascript

( Just an Example not exact one )
...
idetifier : payload ,
Add : Array[7] = 10 ;
...
...
```

<br>

### Note : The Actions should not reach the Store directly ###

<br>

<img src="images/ngrx-4.png">

<br>

# Redux-Pattern --> Reducer #

<br>

* The Actions will use the `Reducers` to reach the `Store ( Application State )` .

* The Reducers are the `Simple Javascript Function` .

* The Reducer javascript function will have the Store with it and require the Actions as the input .

* It has been handled by the library itselt . We can consider these things to our understanding like , there are two arguments for Reducer javascript function they are :

* The one arguments is the `Store` which is the Application state `( The current data of the application )` .

* The Second Argument is the `Actions` which contains the `updation on the existing data` like add , edit , delete or any .

* The Reducer function will procees the argumemts . It will do not do anything in the excisting state ( Data ) . It copies the state and do the Actions in the copy itself and override the old state with the copy of the oldstate which updated by the Actions .

* We can simply consider the Reducer function like ( Only for understanding the concept not exact one )

<br>

```javascript
ReducerFunction ( ExisitingState , Actions ) {

    const Existing State = { ... } ;

    let Actions = { ... } ;

    const copyOffExistingStae  = ExistingState  ;

     copyOfExistingState { ... } =  copyOfExistingState { ... }  + Actions { ... } ;

     return copyOfExistingState ; 
}

```

<br>


<img src="images/ngrx-5.png">

<br>

# Angular with Redux Pattern ( NgRx ) #

<br>

* The Redux pattern is not only for React js . This pattern can be used by Angular also .

* The `Angular implementation of Redux patttern` is known as `Ngrx` .

<br>

## Advantages of Ngrx or specific features with Ngrx ##

 * It is mostly gives easy interaction with angular application like components and services .

 * It uses the Rxjs library to implemt the Observables for whole application .

 * Also supprots typescript .

 <br>

 ## Side Effect of using Ngrx  ##

 <br>

 * The Reducer will not handle the Asynchrnous code ( http request ) .

 * To overcome this ngrx have some criteria .

 <br>

 <img src="images/ngrx-6.png">

<br>

# Implementing Ngrx to our project #

<br>

# Install in the application #

<br>

* As NgRx is the library , we should install it through angular cli . It is managed by the Angular team .

* To install the package in our application , use the below commend :

<br>

```javascript
npm install --save @ngrx/store
```
<br>

* After installation completed , the `ngrx` can be found in our `package.json` file dependencies .

* We need to serve the application to implement the package installation .

<br>

<img src="images/ngrx-7.png">

<br>


# Reducers #

<br>

* We should add the Reducer function in a typescript file to a module . 

* Our Module holds the components with their services ( Store (Application data ) ) . So we need to implement the Ngrx for each Module in our Application .

* Create a sepearte file for Reducer function . 

* For my case , i have created Reducer function for Shopping-list Module named `Shopping-list.reducer.ts` .

* The file must export the function with two arguments as below : 

<br>

### shopping-list.reducer.ts ###

<br>

```javascript
export function shoppingListReducer( state , action ) {
...
}
```

<br>

* Now , we have to pass the arguments : 

* The first argument is `state` . As we know , state in the sense data that we handle in our module . We can find it in the sevices .

* We should set the initial state as the object notation . The object notation is used to handle any type of store data like array , int , string and etc .

* So , declare a new variable with the inital state of object notation .

<br>

```javascript
const initialState = {         // Decalre initial state with object notation 
    
}

export function shoppingListReducer( state , action ) {

}
```

<br>

* The initial state value could be the property we store in the service . just copy the initial value from services and provide it in the Object notation as propert with value .

* In my example i have the array of ingredeient as my data as below :

<br>

### Shopping-list.service.ts ###

<br>

```javascript
...
  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ];
  ...
```

<br>

* I can use this in my reducer inital state as below : 

<br>

### Shopping-list.reducer.ts ###

<br>

```javascript
import { Ingredient } from "../shared/ingredient.model";    // Imoport it

const initialState = {

    ingredients  : [                          // initial state as propert , value pair 
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10),
      ]
}


export function shoppingListReducer( state , action ) {

}
```

<br>

* So we can set the first argument of our reducer function as the initial state as below :

<br>

### Shopping-list.reducer.ts ###

<br>

```javascript
...
import { Ingredient } from "../shared/ingredient.model";    // Imoport it

const initialState = {

    ingredients  : [                          // initial state as propert , value pair 
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10),
      ]
}


export function shoppingListReducer( state = initialState, action ) {      // Assign the initial state value to state argument 

}
...
```

<br>

* Setting the initial state to the first argument of the reducer function will set the store glibally by ngrx . 

* Once the state is initialized , it will be previous state for further implementations . 

<br>

# Adding Logic to Reducer #

<br>

### Reducer function with the initial state value ( shopping-list.reducer.ts ) ### 

<br>

```javascript
import { Ingredient } from "../shared/ingredient.model";    // Imoport it

const initialState = {

    ingredients  : [                          // initial state as propert , value pair 
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10),
      ]
}


export function shoppingListReducer( state = initialState, action ) {      // Assign the initial state value to state argument 

}
```

<br>

* We have the reducer function with initial state value . So we can implement the logic for our Reducer function  .

* The second argument for the reducer function is `actions` . The action should be patched with this function .

* Before patching the `Actions` into the reducers , we must know how to handle the actions argument in this reducer function .

* There may be lot of actions available like add , delete , edit or etc . So we can use `switch case` to handle them all .

* The swich case condition should be access the type of action of the argument .

<br>

### Shopping-list.reducer.ts ###

<br>

```javascript
...
export function shoppingListReducer( state = initialState, action ) {       

    switch(action.type){         // Accessing the type of action argument 

    }
}
...
```
<br>

* But to handle this `type` , the action argument should be of have the interface  `Action` which is imported from @ngrx/store .

<br>

### Shopping-list.reducer.ts ###

<br>

```javascript
import { Action } from "@ngrx/store";    // import Action
...
export function shoppingListReducer( state = initialState, action : Action) {     // Define the argument of type Action 

    switch(action.type){         // Accessing the type of action argument 
     
    }
}
```
<br>

* This Action interface will forcs the action argument to have the `type` method .

* There may be various types according to the application .

* According to our Application service , Add ingredient will change the state and need to consider that as an action .

<br>

### Shopping-list-reducer.ts ###

<br>

```javascript
...
 addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.next(this.ingredients.slice());
  }
...
```
<br> 

* So we should use the action as an case in the switch case in our Reducer function .

<br>

```javascript
...
  switch(action.type){         // Accessing the type of action argument 
      case 'ADD_INGREDIENT'      //  Access any action with case 
    }
...
```

<br>

* use `Uppercase` to specilaise the case . This is our choise to select name according the action .

* Here , As we discussed Actions concept , the `action.type` acts as the `specified property or identifier ` and `case with value` acts as the `string that tells about action`   

* Now , we have got the two arguments to implement the reducer function . 

* The Reducer function should not modify the existing state . We should only modify the copy of the exisiting state .

* So we should `return` the new state of `objcet type` which Overrides the old State of Object type with new action .

<br>

### shopping-list.reducer.ts ###

<br>

```javascript
    switch(action.type){          
      case 'ADD_INGREDIENT' :     
          return {  } ;    // return new state of object type 
}      
```
<br>

* So override the old state with new state of obeject overriding with the action . But the `action` is not provided here .

<br>

### shopping-list.reducer.ts ###

<br>

```javascript
import { Action } from "@ngrx/store";   
import { Ingredient } from "../shared/ingredient.model";   

const initialState = {

    ingredients  : [                         
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10),
      ]
}


export function shoppingListReducer( state = initialState, action : Action)  {     
    switch(action.type){          
      case 'ADD_INGREDIENT' :      
          return { 
            ...state   ,  // copy the old state with spred operator .
           ingredients: [ ...state.ingredients , action ]        // override the old state with spread operator with new action 

           } ;          
    }
}
```
<br>

# Adding Actions #

<br>

* We have added a reducer function in our Module as below :

<br>

### shopping-list.reducer.ts ###

<br>

```javascript
import { Action } from "@ngrx/store";   
import { Ingredient } from "../shared/ingredient.model";   

const initialState = {

    ingredients  : [                         
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10),
      ]
}


export function shoppingListReducer( state = initialState, action : Action)  {     
    switch(action.type){          
      case 'ADD_INGREDIENT' :      
          return { 
            ...state   ,  
           ingredients: [ ...state.ingredients , action ]        

           } ;          
    }
}
```
<br>

* In the above Reducer function , the condition in switch case `case 'ADD_INGREDIET' ` will do not check anything because we have not set the Action anywhere in this function .

* The Ngrx allow us to implement the Actions in seperate file and we can link the Actions in this Reducer .

* Create a new file with .actions.ts extension . In my case , i have created the `shopping-list.actions.ts` .

* Now we got more than one file related store . So create subfilder under the module and provide these files in the subfolder .

* For my case , i have created the `store` sub-folder under `Shopping-list Module` and provided the reducer.ts file and actions.ts file inside it .

* In the Shopping-list.actions.ts file , we must export the `constant variable` , the name of the variable should be the same that we used as the case value  ( Including the Uppercse ) in the reducer function. 

* Assign the constant variable to the same name as uppercase but as a string .

* In my case , the case is like below name : ( 'Add_InGREDIENTS' )

<br>

### shopping-list.reducer.ts ###

<br>

```javascript
...
 switch(action.type){          
      case 'ADD_INGREDIENT' :  
      ...
 }
 ...
```

<br>


* So , i have declared and assigned the variable in actions.ts file as below :

<br>

### shopping-list.actions.ts ###

<br>

```javascript

export const ADD_INGREDIENT = 'ADD_INGREDIENT';

```
<br>

* we are `exporting` the variable which is going to have the Action in it from `actions.ts file` .

* So , we can `import` this variable in our reducer function and can use this variable as a case in the `reducer.ts file `.

<br>

### Shopping-list.reducer.ts ###

<br>

```javascript
import { ADD_INGREDIENT } from "./shopping-list.actions";           // import from the Action.ts


export function shoppingListReducer( state = initialState, action : Action)  {     
    switch(action.type){          
      case ADD_INGREDIENT :         // Use it in the case condition 
...
           } ;   
```

<br>

* Now , we should describe our Action with the value of the variable we declared in actions.ts file . ( 'ADD_INGREDIENT') .

* To do this , we should export a class with meaningful name related to our Action ( ADD_INGREDIENT ) { Use only Pascal case for Class name } and that must implemts the `Action` interface imported from `@ngrx/store`

<br>

### Shopping-list.actions.ts ###

<br>

```javascript
import { Action } from "@ngrx/store";

export const ADD_INGREDIENT = 'ADD_INGREDIENT';

export class AddIngredient implements Action {
    
}
```
<br>

* The Action interface forces us to implement the `type` property . The type property should have the value of the Action constant we declared with spcific type `readonly`

<br>

### Shopping-list.actions.ts ###

<br>

```javascript
import { Action } from "@ngrx/store";

export const ADD_INGREDIENT = 'ADD_INGREDIENT';

export class AddIngredient implements Action {
  readonly type = ADD_INGREDIENT             // Implement type property 
}
```
<br>

* And Add a second propety with own name which should have the model of the state . ( In my case Ingredient ) import it .

<br>

### shopping-list.actions.ts ###

<br>

```javascript
import { Action } from "@ngrx/store";
import { Ingredient } from "src/app/shared/ingredient.model";

export const ADD_INGREDIENT = 'ADD_INGREDIENT';

export class AddIngredient implements Action {
  readonly type = ADD_INGREDIENT ;
  payload!: Ingredient;                       // Assign model with variable
}
```
<br>

# Setting Up the Ngrx Store #

## Things need to be arranged before setting Ngrx ##

<br>

* We have setted the Reducer function and Actions as below : But need to do more stting for Ngrx .

<br>

### Shopping-list.reducer.ts ###

<br>

```javascript
import { Action } from "@ngrx/store";   
import { Ingredient } from "src/app/shared/ingredient.model";
import { ADD_INGREDIENT } from "./shopping-list.actions";           // import from the Action.ts

const initialState = {

    ingredients  : [                         
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10),
      ]
}


export function shoppingListReducer( state = initialState, action : Action)  {     
    switch(action.type){          
      case ADD_INGREDIENT :         // Use it in the case condition 
          return { 
            ...state   ,  // copy the old state with spred operator .
           ingredients: [ ...state.ingredients , action ]        // override the old state with spread operator with new action 

           } ;          
    }
}
```
<br>

### Shopping-list.actions.ts ###

<br>

```javascript
import { Action } from "@ngrx/store";
import { Ingredient } from "src/app/shared/ingredient.model";

export const ADD_INGREDIENT = 'ADD_INGREDIENT';

export class AddIngredient implements Action {
  readonly type = ADD_INGREDIENT ;
  payload!: Ingredient;                       // Assign model with variable
}
```
<br>

* Before Setting up Ngrx store , we must improve our these two files little .

* In our Reducer function , we just importing the `ADD_INGRDIENT` variable from the Actions class .

* But , we should import the class and access the ADD_INGREDIENT variable whereever it has been used in the Reducer function .

* To the Actions class and use the variable in reducer function as below :

<br>

```javascript
...
import * as ShoppingListActions from "./shopping-list.actions";          // import the whole Actions class with a new Object name .
...
export function shoppingListReducer( state = initialState, action : Action)  {     
    switch(action.type){          
      case ShoppingListActions.ADD_INGREDIENT :         // Call the variable with it's Object 
         ...
}
}
```
<br>

* Next , In our reducer function , we have defined the second argument as Actions and imported it from '@ngrs/store' . In our Actions file , we have created the class which implements the same Actions in real time . SO must use the `Actions` in Actions file insted of using it directly in the reducer function .

<br>

### Shopping-list.reducer.ts ###

```javascript
...
export function shoppingListReducer( 
  state = initialState,
   action : ShoppingListActions.AddIngredient    // Call the AddIngredient class which implements Action from ActionsFile ( ShoppingListActions )
   )  {  ...}
   ...
```
<br>

*   Next , we are having action implementation inside the Reducer function , So should update it with the action payload that we are using in Actions .

<br>

### Shopping-list.reducer.ts ###

<br>

```javascript
...
 return { 
...state   ,  
ingredients: [ ...state.ingredients , action.payload ]         // Update action with action.payload 
} ; 
...
```
<br>

* So , we have set Up all pre requests to implement the `Store` in the Applicatio . But these things will not cause any effect . 

<br>

### Shopping-list.Reducer.ts ###

<br>

```javascript
import { Ingredient } from "src/app/shared/ingredient.model";
import * as ShoppingListActions from "./shopping-list.actions";          // import the whole Actions class with a new Object name .

const initialState = {

    ingredients  : [                         
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10),
      ]
}


export function shoppingListReducer( 
  state = initialState,
   action : ShoppingListActions.AddIngredient    // Call the AddIngredient class which implements Action from ActionsFile ( ShoppingListActions )
   )  {     
    switch(action.type){          
      case ShoppingListActions.ADD_INGREDIENT :         // Call the variable with it's Object 
          return { 
            ...state   ,  
           ingredients: [ ...state.ingredients , action.payload ]         // Update action with action.payload 

           } ;          
    }
}
```
<br>

### Shopping-list.actions.ts ###

<br>

```javascript
import { Action } from "@ngrx/store";
import { Ingredient } from "src/app/shared/ingredient.model";

export const ADD_INGREDIENT = 'ADD_INGREDIENT';

export class AddIngredient implements Action {
  readonly type = ADD_INGREDIENT ;
  payload!: Ingredient;                       // Assign model with variable
}
```
<br>

## Setting up Ngrx in the Application ##

<br>

* To setup the NgRx in the Application , go to the `App.module.ts` .

* Import `StoreModule` from '@ngrx/store' .

* Provide the StoreModule inside the  Imports Arrray with the `forroot()` method .

* The forRoot() method will get an Object .

* The Object's Property can be nameed by us But the the value of the object must be the `reducerFunction` and that should be imported from it' location.

<br>

### App.module.ts ###

<br>

```javascript
...
import { shoppingListReducer } from './shopping-list/Store/shopping-list.reducer';   // Import it

@NgModule({
..
  imports: [
   ...
    StoreModule.forRoot( { ShoopingListStore : shoppingListReducer} )   
  ],
  ...
})
export class AppModule {}

```
<br>

## Note : For latest versions , it will show error . Me too faces the Error and rectifies that by utilizing this solution ##

<br>

### Probelrm Faced during Compiling After added  the Reducer in app.module.ts ###

<img src="images/ngrx-8.png">

<br>

### Solution ###

* We should add a seperate file for reducer and make some alternation to the existing reducers a below :

<br>

### <a href="https://stackoverflow.com/questions/66165872/types-of-parameters-action-and-action-are-incompatible-property-payload-i"> Click me To solve </a>

### Shopping-list.main-reducer.ts ( New Reducer ) ###

<br>

```javascript
import { ShoppingListState,  shoppingListReducer } from './Store/shopping-list.reducer';
import { ActionReducerMap } from '@ngrx/store';


export const rootReducer = {};

export interface AppState {
    shoppingList: ShoppingListState;
};


export const reducers: ActionReducerMap<AppState, any> = {
    shoppingList: shoppingListReducer
};
```

<br>

### Shopping-list.reducer.ts  ( Modified ) 

<br>

```javascript
import { Ingredient } from "src/app/shared/ingredient.model";
import * as ShoppingListActions from "./shopping-list.actions";          // import the whole Actions class with a new Object name .

export interface ShoppingListState{
  ingredients: Ingredient[];
}

const initialState : ShoppingListState = {

    ingredients  : [                         
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10),
      ]
}


export function shoppingListReducer( 
  state : ShoppingListState = initialState,
   action : ShoppingListActions.AddIngredient    // Call the AddIngredient class which implements Action from ActionsFile ( ShoppingListActions )
   ) : ShoppingListState {     
    switch(action.type){          
      case ShoppingListActions.ADD_INGREDIENT :         // Call the variable with it's Object 
          return { 
            ...state   ,  
           ingredients: [ ...state.ingredients , action.payload ]         // Update action with action.payload 

           } ;          
    }
}
```
<br>

* Now ,  we should add the  `new reducer` in the AppModule .

<br>

### app.module.ts ( Modified ) ###

<br>

```javascript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule,  } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AlertComponent } from './shared/alert/alert.component';
import { SharedModule } from './shared/shared-module';
import { CoreServicesModule } from './core.module';
import { RecipeModule } from './recipes/recipe.module';
import { StoreModule } from '@ngrx/store';
import { shoppingListReducer } from './shopping-list/Store/shopping-list.reducer';   // Old Import 
import { reducers } from './shopping-list/Shopping-list.main-reducer';        // New import

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule,
    SharedModule,
    CoreServicesModule,
    RecipeModule,
    // StoreModule.forRoot( { ShoopingListStore : shoppingListReducer} )   // Old one
    StoreModule.forRoot(reducers)    // New One 
  ],

  bootstrap: [AppComponent]
  ,
entryComponents : [ AlertComponent]
})
export class AppModule {}

```
<br>

<img src="images/ngrx-9.png">

<br>

# Selecting State #

<br>

* Upto to the previous step , We have setup a ngrx with a reducer function in AppModule . But we have not used yet .

* We should use this State in the required component ( In my case `Shopping-list.component.ts` )

* The Angular Ngrx allows the specific feature that allows us to inject the Store with our variable of type `Store` that should be imported form `@ngrx/store` ( In the Constructor ) .

<br>

## Shopping-list.component.ts ###

<br>

```javascript
...
import { Store } from '@ngrx/store';
..
  constructor(
   ..
    private store : Store
    ) { }
...
```

<br>

* So we have setedup a Store with the store variable , before using the variable we should specify the type of the Store .

<br>

```javascript
    private store : Store < ... > // Should be specify type inside it 
 ```
<br>

## Specifying the type inside the Store < ... > ##

<br>

* To Specify the type , Actually we should look at the `AppModule` . Our AppModule forRoots to an `reducer` which is an new reducer ts file  .

* Visit that reducer .

* The reducer is returning an `Objcet` with key value pair . 

<br>

### Shopping-list.main-reducer.ts ###

<br>

```javascript
import { ShoppingListState,  shoppingListReducer } from './Store/shopping-list.reducer';
...
export const reducers: ActionReducerMap<AppState, any> = {
    shoppingList: shoppingListReducer                   // ShoppingList variable that return the ShoppingListReducer function
};
...
```
<br>

* So , First define that it is an Object `{ ... }`

### Shopping-list.component.ts ###

<br>

```javascript
...
 private store : Store < { } >
 ...
```
<br>

* Then the Object needs exact Key value pairs for it to get correct state . Visit the reducer function get the exact state and provide it inside this Object .

<br>

### Shopping-list.component.ts ###

<br>

```javascript
...
  private store : Store < { shoppingList : { ingredients: Ingredient[] }  } >
...
```
<br>

* We can refer the shopping-list.reducer.ts file to get the exact type .

<br>

## Using the store variable 

<br>

* We have craeted the store variable of Type Store with Specifying it's state .

* Now need to use it .

* Before using the Store , we have called the services from service file and subscribe to it ect in the `ngOnInit()` . 

* But , we can access the `Store` we have created with `slice()` method .

* The `slice()` method gets a string as a argument and that is the variable of the state we have setted up . ( In our case it is `shoppingList `)

<br>

### Shopping-list.component.ts ###

<br>

```javascript
...
 constructor(
 ...
    private store : Store < { shoppingList : { ingredients: Ingredient[] }  } >
    ) { }

  ngOnInit() {
    this.store.select('shoppingList')
    ...
  }

```
<br>

## Changing the variale type to Observable ##

<br>

* Now the store variable will turns to have `Obsevable` data . 

* We need to change the existing variable which holds the Array format of data to the observable of type we have in the store .

<br>

### Shopping-list.component.ts ###

<br>

```javascript
...
 // ingredients!: Ingredient[];                                 // Old one 
  ingredients! : Observable< { ingredients: Ingredient[] } >;   //change to Observable
  ...

  constructor(
 ...
    private store : Store < { shoppingList : { ingredients: Ingredient[] }  } >
    ) { }
...
 ngOnInit() {
    ...
     this.ingredients = this.store.select('shoppingList')
     ...
 }

```
<br>

* Avoid the old method of accessing the variable . Otherwise , it will show error .

<br>

### Shopping-list.component.ts ###

<br>

```javascript
...
  ngOnInit() {
    
     this.ingredients = this.store.select('shoppingList')

    this.lofinService.printlog("Hello from ShoppingList NgOnit ") ;

    // this.ingredients = this.slService.getIngredients();
    // this.subscription = this.slService.ingredientsChanged
    //   .subscribe(
    //     (ingredients: Ingredient[]) => {
    //       this.ingredients = ingredients;
    //     }
    //   );
  }
  ...
```

## Update the HTML with `Asyn` pipe ##

* So we have modified the Array to observable . But the Template will use the `ngFor` to use the old Array .

* It will show error in the template .

* use the Aync pipe and access the Array like below :

<br>

### Shopping-list.component.html ###

<br>

```javascript
        *ngFor="let ingredient of ( ingredients |async).ingredients; let i = index"     // Adding async pipe 
```

<br>

* Before Adding async pipe : 

### Shopping-list.component.html ###

<br>

```javascript
 *ngFor="let ingredient of ingredients; let i = index"    // It will show error now 
```

<br>

## Add Default condition to switch case in Reducer function ( That should return the initial state )  ##

* We should add the Default condition to the reducer function that returns initial state . Other wise it will show erro while visiting the particular Module we have added the Store .

<br>

### Shopping-list.reducer.ts ###

<br>

```javascript
...

export function shoppingListReducer( 
  state : ShoppingListState = initialState,
   ) : ShoppingListState {     
    switch(action.type){          
    ....
       default : {
        return  state;             // retrurn initial state in default 
       }  
    }
   }
...
```
<br>

## We have finished setting up only the State not actions . So we should add  actions to the store ##

<br>

# Dispatching Actions #

<br>

* We have setted up a store for the Shopping-list Module .

* We can handle the Store and manipulate them by implementing the Actions by `dispatching` them in the required component .

* In our Example , we are doing actions in `shopping-list-edit` component . ( We add new ingredient and updating it ) .

<br>

### Shopping-list-edit.component.ts ###

<br>

```javascript
...
 onSubmit(form: NgForm) {

    const value = form.value;
    const newIngredient = new Ingredient(value.name, value.amount);
    if (this.editMode) {
      this.slService.updateIngredient(this.editedItemIndex, newIngredient);   // Updating ingredient 

    } else {
      this.slService.addIngredient(newIngredient);    // Adding ingredient  

    }
    this.editMode = false;
    form.reset();
  }
...
```
<br>

* First , Inject the store into this shopping-list-edit.component.ts file .

<br>

### shopping-list-edit.component.ts ###

<br>

```javascript
import { Store } from '@ngrx/store';
...

  constructor(
    ...
    private store : Store< { shoppingList : {  ingredients: Ingredient[] } } > 
  )
  ...
```
<br>

* Use the Store with it's variable where we want to perform an action using the `dispatch()` method .

* In our example we want to add ingredient inside the onForm submit :

<br>

```javascript
...
  onSubmit(form: NgForm) {
    ...
} else {
      // this.slService.addIngredient(newIngredient);    // Adding ingredient  
      this.store.dispatch();
}
...
```

<br>

## dispatch() method ##

<br>

* We should pass the Action to the dispatch method as an Object with `new` keyword ( instance )

* To do this , first we should import the Actions to this component with our own Object name by the following import method .

<br>

### Shopping-list-edit.component.ts ###

<br>

```javascript
import * as ShoppingListActions from '../Store/shopping-list.actions'  //  Import Actions file with your name 
...
```
<br>

* In the Actions file we have the one class `AddIngredient` as below :

<br>

### Shopping-list.Actions.ts ###


```javascript
import { Action } from "@ngrx/store";
import { Ingredient } from "src/app/shared/ingredient.model";

export const ADD_INGREDIENT = 'ADD_INGREDIENT';

export class AddIngredient implements Action {
  readonly type = ADD_INGREDIENT ;
  payload!: Ingredient;                       // Assign model with variable
}
```
<br>

* So call this within the dispatch() method as below :

<br>

### Shopping-list-edit.component.ts ###

<br>

```javascript
...
import * as ShoppingListActions from '../Store/shopping-list.actions'  //  Import Actions file with your name 
...
else {
      // this.slService.addIngredient(newIngredient);    // Adding ingredient  
      this.store.dispatch( new ShoppingListActions.AddIngredient() );
}
...
```

<br>

* The `Addingredient` class has two properties `type` and `payload` . We do not use type in  the dispatch method .

* But , the `AddIngredient()` inside the dispatch() method needs the `payload` as an argument to implement the Action .

* So , convert the payload property in Actions file as an `constructor` with `public` access to use that in the dispatch() method .

<br>

### shopping-list.Actions.ts ###

<br>

```javascript
...
export class AddIngredient implements Action {
  readonly type = ADD_INGREDIENT ;
  // payload!: Ingredient;     
  constructor( public payload : Ingredient ) {}       // make a constructor
  ...
}
```
<br>

* So now we got access for `payload` , we can pass the argument we want into the AddIngredient() according to our code .

### Shopping-list-edit.component.ts ###

<br>

```javascript
...
  onSubmit(form: NgForm) {

    const value = form.value;
    const newIngredient = new Ingredient(value.name, value.amount);
    if (this.editMode) {
      this.slService.updateIngredient(this.editedItemIndex, newIngredient);   // Updating ingredient 

    } else {
      // this.slService.addIngredient(newIngredient);    // Adding ingredient  
      this.store.dispatch( new ShoppingListActions.AddIngredient(newIngredient) );    // Adding Ingredient with Store ( New line )


    }
    this.editMode = false;
    form.reset();
  }
...
```

<br>

# Multiple Actions on Store #

<br>

* We may use more than one Action in the Store . 

* While Updating the actions in the `Actions` file , it will cause an error in the `Reducer` function type declaration .

* To avoid this , we must `Group` the all Actions into single `Type` inside the Actions file .

* While using the Actions in the Reducer , we must follow the chained approach .

<br>

## While working with Multiple Actions ##

### shopping-list.actions.ts ###

<br>

```javascript
import { Action } from "@ngrx/store";
import { Ingredient } from "src/app/shared/ingredient.model";

export const ADD_INGREDIENT = 'ADD_INGREDIENT';
export const ADD_INGREDIENTS = 'ADD_INGREDIENTS';

export class AddIngredient implements Action {
  readonly type = ADD_INGREDIENT ;
  // payload!: Ingredient;     
  constructor( public payload : Ingredient ) {}       // make a constructor
}

export class AddIngredients implements Action {
  readonly type = ADD_INGREDIENTS ;
  constructor ( public payload : Ingredient[] ) {}
}
 
export type ShoppingListActions = AddIngredient | AddIngredients ;
```
<br>


### shopping-list.Reducer.ts ###

<br>

```javascript
import { Ingredient } from "src/app/shared/ingredient.model";
import * as ShoppingListActions from "./shopping-list.actions";          // import the whole Actions class with a new Object name .

export interface ShoppingListState{
  ingredients: Ingredient[];
}

const initialState : ShoppingListState = {

    ingredients  : [                         
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10),
      ]
}


export function shoppingListReducer( 
  state : ShoppingListState = initialState,
   action : ShoppingListActions.ShoppingListActions     // Calling with nested approach
   ) : ShoppingListState {     
    switch(action.type){          
      case ShoppingListActions.ADD_INGREDIENT :          // First Action
          return { 
            ...state   ,  
           ingredients: [ ...state.ingredients , action.payload ]         
         } ;  

         case ShoppingListActions.ADD_INGREDIENTS :      // Second Action

         return {
          ...state ,
          ingredients : [ ...state.ingredients , ...action.payload]
         }
         
       default : {
        return  state;             
       }  
    }
    
}
```
<br>

* We can implement the second Action whereevr we want it . 

* In our example , we have used the `addIngredients()` method inrecipes component as below :

<br>

### recipe.service.ts ###

<br>

```javascript
...
import * as ShoppingListActions from '../shopping-list/Store/shopping-list.actions'

...

  constructor(
    ...
    private store : Store < { Shoppinglist : {  ingredients: Ingredient[] } }  >
    ) {}

...

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    // this.slService.addIngredients(ingredients);
  this.store.dispatch( new ShoppingListActions.AddIngredients(ingredients) );
  }
...

}

```

<br>

# Expanding the State #

<br>

* To update th estate in every component we use in the Module , we should add all wanted properties in the state ( Reduce initial state ) .

* In our application , we added two extra properties that are responsibe for editing the ingredients .

<br>

### Shopping-list.reducer.ts ###

<br>

```javascript
...
export interface ShoppingListState{
  ingredients: Ingredient[];
  editedIngredient :Ingredient | any;
  editedIngredientIndex : number;
}

const initialState : ShoppingListState = {

    ingredients  : [                         
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10),
    ],
    editedIngredient : null ,
    editedIngredientIndex : -1
  
}
export interface AppState {
  shoppingList: ShoppingListState;          
};
...
```

<br>

* Udate all the places where we use our State as below :

<br>

### Shopping-list.component.ts ###

<br>

```javascript
...
import * as fromShoppingList from '../shopping-list/Store/shopping-list.reducer' // Import 
...
constructor(
   ...
    private store : Store <fromShoppingList.AppState>       // update 
    ) { } 
...
```
<br>

* We should update in all the other places we injected the Shopping-List .

<br>

# Setting up one Root Store for Application #

<br>

* If we want to add Store for each Modules in our app we should use the AppStore that combines all the stores in the application .

* Have a Seperate Store folder for App to maintain all differennt stores in various Modules .

* That folder should contain Root Reducer form our Application which holds the Other Module States .

* Create a reducer function file  named , `app-reducer.ts`

* First create the interface for all Module States in the Appeducer named  with valuable key name .

<br>

### app.reducer.ts ###

<br>

```javascript
import * as fromShoppingList from '../shopping-list/Store/shopping-list.reducer'
import * as fromAuth from '../auth/store/auth.reducer'

export interface AppState {
   ShoppingList : fromShoppingList.State ,
   auth : fromAuth.State
}
```

<br>

* Craete a new variable of type `ActionReducerMap` as this responsible to handle multiple `store` . 

* This `ActionReducerMap` should be imported from '@ngrx/store' and should have the type with it's State `<>` .

* As we have AppState as our State for the entire Application . we should pass it as the type inside `<>`.

* The new variable should hold the value the States we using with their imports .

<br>

### app-reducer.ts ###

<br>

```javascript
import * as fromShoppingList from '../shopping-list/Store/shopping-list.reducer'
import * as fromAuth from '../auth/store/auth.reducer'
import { ActionReducerMap } from '@ngrx/store'

export interface AppState {
   ShoppingList : fromShoppingList.State ,
   auth : fromAuth.State
}

const appReducer : ActionReducerMap<AppState , any> = {
    ShoppingList : fromShoppingList.shoppingListReducer,
    auth : fromAuth.AuthReducer
}
```

<br>

* Update the existance of `AppReducer` in `AppModule` .

<br>

### app.module.ts ###

<br>

```javascript
import * as fromAppReducer from '../app/Store/app-reducer'
...
    StoreModule.forRoot(fromAppReducer.appReducer)    
...
```

<br>

# Important Notes on Actions #

<br>

## Always use the default case for Reducer functions that return it's state ##

<br>

* The `dispatch()` method we call to access the `Store` will always reach all the `Reducers` under the Store .

* So we must have the `default case that returs the state of it's reducer` .  in every reducers .

* Otherwise it will show error in other parts os the Application where we use the Store with dispatch() method .

## Try to provide unique value for each identifiers in the Actions ##

<br>

* As the Store works with entire Application , If the value of identifier of one Module is similar to any other identifier in another Module , then it will class .

* So always try to use specific names for identifiers as below :

<br>

### shopping-list.actions.ts ###

<br>

```javascript
...
export const ADD_INGREDIENT = '[Shopping List] Add Ingredient';
export const ADD_INGREDIENTS = '[Shopping List] Add Ingredients';
export const UPDATE_INGREDIENT = '[Shopping List] Update Ingredient';
export const DELETE_INGREDIENT = '[Shopping List] Delete Ingredient' ;

export const START_EDIT = '[ShoppingList] StartEdit';
export const STOP_EDIT ='[ShoppingList] StopEdit';
...
```
<br>

### auth.actions.ts ###

<br>

```javascript
...
export const LOGIN = '[Auth] Login';
export const LOGOUT = '[Auth] Logout';
...
```
<br>

# Exploring ngRx side Effects #

<br>

* ngRx state or Store does not care when we use immediate state update . But while we use the Asynchrnous data like `HttpRequests` , it will cause some effects in our Application . We will see one by one .

* We can rectify the effects by `package` named `@ngrs/effects` 

* Install it using below command in application :

<br>

```javascript
npm i--save @ngrx/effects
```
<br>

* Re run the Application by `ng serve ` again .

<img src="images/ngrx-11.png">

<br>

# Definig the First Effect #

<br>

* Let us take a Auth Module as an example .

* Create a file in the store named related to effects .

* Inject a variable with `private` variable of type `Actions` which is imported from `@ngrx/effects`  

* That is `NOT Action IT IS Actions`

<br>

### Auth.effects.ts ###

<br>

```javascript
import { Actions } from '@ngrx/effects'

export class AuthEffects {
    constructor( private actions$ : Actions){}
}
```

<br>

* Name a effect as property with own name that is relatable to effect you are going to handle .

* Then provide the value for the variable using the injection variable  from `Actions` with the `pipe()` method .

<br>

### Auth.effects.ts ###

<br>

```javascript
import { Actions } from '@ngrx/effects'

export class AuthEffects {
    autoLogin = this.actions$.pipe()
    
    constructor( private actions$ : Actions){}
}
```

<br>

## ofType() Operator ##

* use `ofType()` operator which is part of `@ngrx/effects` to identify which type we want to use the filter in the actions .


<br>

### auth.effects.ts ###

<br>

```javascript
import { Actions , ofType} from '@ngrx/effects'

export class AuthEffects {
    autoLogin = this.actions$.pipe(
        ofType()
    )

    constructor( private actions$ : Actions){}
}
```

<br>

* We can use the Actions we have provided in the Actions `auth.actions.ts`

* The Actions we have `provided in the ofType()` will only get apply with effect .

* To use this , Create a new Action in the `auth.action.ts`

<br>

### auth.actions.ts ###

<br>

```javascript
...
export const LOGIN_START = '[Auth] Login Start';
...
```

<br>

* Access this Action in the action.effects.ts using the `ofType()` as below :

<br>

### auth.effects.ts ###

<br>

```javascript
import { Actions , ofType} from '@ngrx/effects';
import * as fromAuthActions from '../store/auth.actions' 

export class AuthEffects {
    autoLogin = this.actions$.pipe(
        ofType( fromAuthActions.LOGIN_START)
    )

    constructor( private actions$ : Actions){}
}
```
<br>

# Effects and Error Handling #

<br>

* Create a Action for the new Identifier in the `auth.actions.ts` with it's necessary payload . As we need to login our payload is an object with the properties of emial and password .

<br>

### auth.actions.ts ###

<br>

```javascript
...

export class LoginStart implements Action {
 readonly type = LOGIN_START
 constructor( public payload : { email : string , password : string }){}
}
...
```

<br>

## Uing SwitchMap() method to handle http request ##

<br>

* After filteriing the Specifuc Action with the ofType() operator  we need to acces to the Action using the SwitchMap method .
 
* The switchMap() allows us to take new Observable which takes the another Observable as data .

* Pass the Action as an argument to the SwitchMap method which we want to get access .

<br>

### auth.effects.ts ###

<br>

```javascript
...
switchMap( (authData : fromAuthActions.LoginStart) => {} )
...
```
<br>

* Copy the login method feom the Service to this SwitchMap .

<br>

### auth.effects.ts ###

<br>

```javascript
import { Actions , ofType} from '@ngrx/effects';
import { switchMap } from 'rxjs';
import * as fromAuthActions from '../store/auth.actions' 

export class AuthEffects {
    autoLogin = this.actions$.pipe(
        ofType( fromAuthActions.LOGIN_START),
        switchMap( (authData : fromAuthActions.LoginStart) => {
            return this.http.post<AuthResponseData>(
                'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBP02M32UK1J-7S5k81wJ47eitIwYFltzQ',
                {
                    email : email,
                    password : password,
                    returnSecureToken : true
                }
                )
        } )
    )

    constructor( private actions$ : Actions){}
}
```
<br>

* This leads to some errors as we don't have httpClient and other features .

<br>

### auth.effects.ts ###

<br>

```javascript
import { HttpClient } from '@angular/common/http';
import { Actions , ofType} from '@ngrx/effects';
import { switchMap } from 'rxjs';
import * as fromAuthActions from '../store/auth.actions' 

export interface AuthResponseData{
    idToken : string,
    email : string ,
    refreshToken : string ,
    expiresIn : string ,
    localId : string,
    registered? : boolean
}

export class AuthEffects {
    autoLogin = this.actions$.pipe(
        ofType( fromAuthActions.LOGIN_START),
        switchMap( (authData : fromAuthActions.LoginStart) => {
            return this.http.post<AuthResponseData>(
                'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBP02M32UK1J-7S5k81wJ47eitIwYFltzQ',
                {
                    email :authData.payload.email,
                    password : authData.payload.password,
                    returnSecureToken : true
                }
                )
        } )
    )

    constructor( private actions$ : Actions , private http : HttpClient){}
}
```

<br>


* `@Effect()` decorator to the class to implement the the Effects in this class . Import the decorator from the `@ngrx/effects`

<br>

### auth.effects.ts ###

<br>

```javascript
...
import { Effect } from '@ngrx/effects'
...
export class AuthEffects {
    @Effect()
    }
...
```

<br>

* Handle the Error using the catchError() method , by addng the innerPipe to the SwichMap() as below :

<br>

### auth.effect.ts ###

```javascript
import { HttpClient } from '@angular/common/http';
import { Actions , ofType} from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';
import * as fromAuthActions from '../store/auth.actions' 
import { Effect } from '@ngrx/effects'

export interface AuthResponseData{
    idToken : string,
    email : string ,
    refreshToken : string ,
    expiresIn : string ,
    localId : string,
    registered? : boolean
}

export class AuthEffects {
    @Effect()
    autoLogin = this.actions$.pipe(
        ofType( fromAuthActions.LOGIN_START),
        switchMap( (authData : fromAuthActions.LoginStart) => {
            return this.http.post<AuthResponseData>(
                'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBP02M32UK1J-7S5k81wJ47eitIwYFltzQ',
                {
                    email :authData.payload.email,
                    password : authData.payload.password,
                    returnSecureToken : true
                }
                )
                .pipe(
                  map(resData => {
                        return of(new AuthActions.Login);          // creates new Observable 
                    }) ,
                    catchError(
                        error => {
                            // ..error handling
                            return of()   // Creates new Observable without an error 
                        }
                    ) 
                )
        } )
    )

    constructor( private actions$ : Actions , private http : HttpClient){}
}
```

<br>

* Expand the method as we did in service file :

<br>

### auth.effects.ts ###

<br>

```javascript
...
   )
                .pipe(
                    map(resData => {
                        const expirationDate = new Date( new Date().getTime() + +resData.expiresIn * 1000)
                        return of(new AuthActions.login({
                            email: resData.email,
                         userId:resData.localId,
                         token: resData.idToken,
                         expirationDate:expirationDate
                        }));          // creates new Observable
                    }),
                    catchError(
                        error => {
                            // ..error handling
                            of()   // Creates new Observable without an error 
                        }
                    ) 
                )
...
```

<br>


* Add `@Injectable()` to the class imported from `@Angular/core`

### auth.effect.ts ###

<br>

```javascript
import { Injectable } from '@angular/core';
...
@Injectable()
export class AuthEffects { ..}
...
```

<br>

* Register the `EffectsModule` In the AppMOdule as an Array with elements what effects we have used so far .

<br>

### app.module.ts ###

<br>

```javascript
...
import { AuthEffects } from './auth/store/auth.effects';
...
    EffectsModule.forRoot([AuthEffects])
...
```
<br>

* Dispatch the Login method where we want to login ( auth.component.ts )

<br>

### auth.component.ts ###

<br>

```javascript
...
 if(this.isLoggingMode){
      // authObs = this.auth.login(email,password);
      this.store.dispatch(new AuthActions.LoginStart( { email:email , password:password } ))
    }
...
```

<br>

### We should need to change the Subscription according to the Effects ###

<br>

### auth.component.ts ###

<br>

```javascript
import { Component, ComponentFactoryResolver, OnDestroy, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { AuthResponseData, AuthService } from './auth.service';
import { AlertComponent } from '../shared/alert/alert.component';
import { PlaceholderDirective } from '../shared/placeholder/placeholder.directive';
import { Store } from '@ngrx/store';
import * as fromApp from '../Store/app-reducer';
import * as AuthActions from '../auth/store/auth.actions';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html'
})
export class AuthComponent implements OnInit ,OnDestroy{

  constructor(
    private auth : AuthService ,
    private route : Router,
    private componentFactoryResolver : ComponentFactoryResolver ,
    private store : Store<fromApp.AppState>
    ){}

    @ViewChild(PlaceholderDirective, { static: false }) alertHost!: PlaceholderDirective;

    private closeSub!: Subscription; 


  isLoggingMode = true ;
  isLoading = false ;
  error :any = '';
  
  
ngOnInit(){
  this.store.select('auth').subscribe( authState => {
    this.isLoading = authState.loading;
    this.error = authState.authError;
   
  }
    )
}

  onSwitchMode(){
   this.isLoggingMode = ! this.isLoggingMode ;
  } 

  onHandleError(){
    this.error=null;
  }

  onSubmit(form : NgForm){
    if(!form.valid){
      return;
    }
    const email = form.value.email;
    const password = form.value.password;
    this.isLoading = true ;

    let authObs : Observable<AuthResponseData>

    if(this.isLoggingMode){
      // authObs = this.auth.login(email,password);
      this.store.dispatch(new AuthActions.LoginStart( { email:email , password:password } ))
    }
    else{
      authObs = this.auth.signUp(email,password)
    }

   

  //   authObs.subscribe(            
  //   resData => {
  //     this.isLoading = false;
  //     console.log(resData);
  //      this.route.navigate(['recipes'])
  //     },
  //     errorMessage => {
  //     this.isLoading = false;
  //     console.log(errorMessage);
  //     this.showErrorAlert(errorMessage);
  //     this.error = errorMessage;
  //   }
  // );

form.reset();
  }

  private showErrorAlert(message:string){
    const alertCmpFactory =  this.componentFactoryResolver.resolveComponentFactory(AlertComponent)
    const hostViewContainerRef = this.alertHost.viewContainerRef;
    hostViewContainerRef.clear();

   const componentRef =  hostViewContainerRef.createComponent(alertCmpFactory);
     componentRef.instance.message = message;

     this.closeSub = componentRef.instance.close.subscribe( () => {
      this.closeSub.unsubscribe();
      hostViewContainerRef.clear();

     } );
 }

 ngOnDestroy(): void {
  if(this.closeSub){
   this.closeSub.unsubscribe();
   }
 }

} 

```
<br>

### auth.actions.ts ###

<br>

```javascript
import { Action } from "@ngrx/store";

export const LOGIN_START = '[Auth] Login Start';
export const LOGIN = '[Auth] Login';
export const LOGOUT = '[Auth] Logout';
export const LOGIN_FAIL = '[Auth] Login Fail'

export class login implements Action{
    readonly type = LOGIN
    constructor(public payload : {
        email : string , userId : string , token : string , expirationDate : Date 
    } ){}
}

export class logout implements Action {
    readonly type = LOGOUT
}

export class LoginStart implements Action {
 readonly type = LOGIN_START
 constructor( public payload : { email : string , password : string }){}
}

export class LoginFail implements Action {
    readonly type = LOGIN_FAIL
    constructor( public payload : string ){}
}

export type AuthActions = login | logout | LoginStart | LoginFail;
```
<br>


# Finishing the Login Effect with Routing and Error Handling  #

<br>

### auth.effects.ts ###

<br>

```javascript
import { HttpClient } from '@angular/common/http';
import { Actions , ofType} from '@ngrx/effects';
import { catchError, map, of, switchMap, tap, throwError } from 'rxjs';
import * as AuthActions from '../store/auth.actions' 
import { Effect } from '@ngrx/effects'
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

export interface AuthResponseData{
    idToken : string,
    email : string ,
    refreshToken : string ,
    expiresIn : string ,
    localId : string,
    registered? : boolean
}


@Injectable()
export class AuthEffects {
    @Effect()
    autoLogin = this.actions$.pipe(
        ofType( AuthActions.LOGIN_START),
        switchMap( (authData : AuthActions.LoginStart) => {
            return this.http.post<AuthResponseData>(
                'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBP02M32UK1J-7S5k81wJ47eitIwYFltzQ',
                {
                    email :authData.payload.email,
                    password : authData.payload.password,
                    returnSecureToken : true
                }
                )
                .pipe(
                    map(resData => {
                        const expirationDate = new Date( new Date().getTime() + +resData.expiresIn * 1000)
                        return new AuthActions.login({
                            email: resData.email,
                         userId:resData.localId,
                         token: resData.idToken,
                         expirationDate:expirationDate
                        });          // creates new Observable
                    }),
                    catchError(
                        errorRes => {
                            console.log(errorRes);
                            let errorMessage = " An unknown error occured ! "
                            if( !errorRes.error || !errorRes.error.error){
                                return of(new AuthActions.LoginFail(errorMessage))
                            }
                            switch(errorRes.error.error.message){
                
                                case 'EMAIL_EXISTS' :
                                errorMessage = ' The email already exists ! '
                                break;
                
                                case 'EMAIL_NOT_FOUND' :
                                errorMessage = ' The email does not exists ! '
                                break;
                
                                case 'INVALID_PASSWORD' :
                                errorMessage = ' The Paaword is wrong ! '
                                break;
                
                
                              }
                            return of(new AuthActions.LoginFail(errorMessage))   // Creates new Observable without an error 
                        }
                    ) 
                )
        } )
    )

    @Effect({ dispatch :false})
    authSuccess = this.actions$.pipe( ofType(AuthActions.LOGIN) , tap( () => {
       this.router.navigate(['/']);
    }))

    constructor( private actions$ : Actions , private http : HttpClient , private router: Router){}
}
```
<br>


# Using the Store DevTools  #

<br>

* Visit the This git page : <a href="https://github.com/zalmoxisus/redux-devtools-extension"> CLICK ME ! </a>

<br>

<img src="images/ngrx-12.png">

<br>

* Visit the the Extension pages according to our browsers given in the Git Documentation .

<br>

<img src="images/ngrx-13.png">

<br>

* Install the Store Dev tools in the application using the below command :

<br>

```javascript
npm install --save-dev @ngrx/store-devtools
```

* Rerun the Application using `ng serve` .

<br>

* Import `StoreDevToolsModule` in the AppModule imports sections from `@ngrx/store-devtools`

<br>

### app.module.ts ###

<br>

```javascript
...
import { StoreDevtoolsModule} from '@ngrx/store-devtools'
...
  imports: [
   StoreDevtoolsModule
  ],
...
```

<br>

* Call `instrument` method  with Object .

<br>

### ###

```javascript
...
StoreDevtoolsModule.instrument({})
...
```

<br>

* Add a `logonly` configuration to the method with `environment` variable from `evironment folder environment file not prod file `  and call the `production` property .

<br>

### app.module.ts ###

<br>

```javascript
...
    StoreDevtoolsModule.instrument({ logOnly : environment.production})
...
```
<br>

* We can see the `Redux` as a devtool . 

<img src="images/ngrx-14.png">

<br>

* With that we can do monitor our State activities :

<br>

<img src="images/ngrx-15.png">

<br>

# The Router Store #

<br>

* This package will dispatch some actions based on routing wit Store and will suggest some methos while handling Store , reducer and etc .

* Install the Router Store package in your application with the help of below command :

<br>

```javascript
npm i --save @ngrx/router-store
```

<br>

* Re run the Application again using `ng serve`

<br>

* Add this `StoreRouterConnectingMOdule` in the imports of the AppMOdule  imported from this Module .

<br>

### app.module.ts ###

<br>

```javascript
import { environment } from 'src/environments/environment';
...

  imports: [
...
    StoreRouterConnectingModule.forRoot()
  ]
...
```

<br>

<img src="images/ngrx-16.png">

<br>

* We can see the Deatailed information about the router in the Store . We can use this in complex application to manage the store .

<br>

### To learn More about ngrx through practice visit the below link : ###

<br>

<a href="https://ngrx.io/guide/store"> Click Me ! </a>

<br>

<a href="https://github.com/ngrx/platform/tree/master/projects"> Click me ! </a>

<br>

# Angular Universal ( Bonus )  #

<br>

* Angular universal allows us to pre-render our code from the server .

## Common problems in Angular Aplicatio ##

<br>

* As the Angular application only contains the scripts except App-root to make the Application Single Paged , Sometimes it will take more time to download the script files if the user in on slower network connection.

* The Search engines are varies in various platforms . So it slows the speed of loading of the Application .

## Overcome Using Angular universal ##

* We can overcome these problems by setting the initial loading to the server .

* So the server implements the initial loading with HTML and script and further steps will be carried by the browser .

# Adding Angular Universal #

<br>

## 1 ) : Run the command ##

<br>

```javascript
ng add @nguniversal/express-engine --clientProject <Use identifier name in your projcet>
```

<br>

### Note : we can get our identifier name in the `angular.json` as below : ###

<br>

<img src="images/ang-uni-1.png">

<br>

* So i need to run the command as below :

<br>

```javascript
ng add @nguniversal/express-engine --clientProject Authentication
```

<br>

<img src="images/ang-uni-2.png">

<br>

## Create ApPServerModule ##

<br>

### app.server.module.ts ###

<br>

```javascript
import { AppModule } from "./app.module";
import { AppComponent } from "./app.component";
import { ModuleMapLoaderModule } from '@nguniversal/module-map-ngfactory-loader';
import { NgModule } from "@angular/core";
import { ServerModule } from '@angular/platform-server';

@NgModule({
    imports : [
        AppModule,
        ServerModule,
        ModuleMapLoaderModule,
      ],
      bootstrap:[AppComponent],
})

export class AppServerModule {}
```
<br>


* But , in the above module , ther will not be installed all files . 

* To install ng-factory run the below command in terminal :

<br>

```javascript
npm install --save @nguniversal/module-map-ngfactory-loader
```

<br>
