import { Component } from '@angular/core';
import  { Router }   from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  displaybody=true;
  constructor(private router:Router){
  }
  
login(){
  this.router.navigate(['/forms']);
  this.displaybody=false;
}
}


