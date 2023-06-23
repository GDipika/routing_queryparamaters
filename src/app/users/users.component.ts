import { Component } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {
  user!: { id: string; name: string; };

  constructor(private route:ActivatedRoute,private route1:Router){}
  ngOnInit(): void {
    this.user= {
      id: this['route']['snapshot'].params['id'],
      name: this['route']['snapshot'].params['name'],
    };


    // retriving quparam through ts
   this.route.params.subscribe((data:Params)=>{
    this.user={
      id:data['id'],
      name:data['name']
    };
   });
  //  console.log(this.route.snapshot.queryParams);
  //  console.log(this.route.snapshot.fragment);
  this.route.queryParams.subscribe((data: any)=>{
    console.log(data);
  });
  
  this.route.fragment.subscribe((data: any)=>{
console.log(data);
  });
}
onTocategories(){
  this.route1.navigate(['/categories'])
}
  sdetails(){
    this.route1.navigate(['/user',2,'s'],
    {queryParams:{page:1,search:'deepu'},
    fragment:'loading',
  });
}
onUserAddedClick(){
  
}
}
