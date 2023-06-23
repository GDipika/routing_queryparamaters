import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
userAddedEvent=new EventEmitter<boolean>
 
getUser(id:string){
  if(id==='1'){
    return{
      id:'1',
      name:'leela'
    }
    }else{
      return{
        id:'1',
        name:'leela'

      }
    }
  }
  userAdded(){
    this.userAddedEvent.emit(true);
  }
}

