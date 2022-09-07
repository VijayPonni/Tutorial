import { Component, Input } from "@angular/core";

@Component({
    selector:'app-alert',
    template:'<div> This is the Alert {{ message }} </div>',
    styles:[
        `div{
            border:1px solid red;
            background-color:blue;
            padding:10px;
            font-family:sans-serif;
        }
        `
    ]
})

export class AlertComponent {
@Input() message !: string;
}