import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';
import { interval } from 'rxjs';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent{
  [x: string]: any;
  constructor(private route:ActivatedRoute){}

  ngOnInit(): void {
    // this.route.subscribe((data:Data)=>{
    //   console.log(data);
    // })
  }
// interval(1000).subscribe(count=>{
//   concole.log(count);
// })

}
