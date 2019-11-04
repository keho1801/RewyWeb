import { Component,OnChanges, Input } from '@angular/core';

@Component( {
    selector: 'sh-comp',
    templateUrl: './shared.component.html',
    styleUrls: ['./shared.component.css'] 
    })
export class SharedComponent implements OnChanges {
@Input() hello: string;
description ='hello';


ngOnChanges(): void{
    this.description = this.hello;
    console.log('inside ngonchanges');
}

}