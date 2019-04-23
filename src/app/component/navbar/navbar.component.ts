import { Component, OnInit } from '@angular/core';
import {AuthService} from '/home/dell/Desktop/CITIBRIDGE/nodejsday4/TradeReco/src/app/services/auth.service'
import {Router} from '@angular/router'
import {FlashMessagesService} from 'angular2-flash-messages'
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  fullImagePath: string;
  constructor(
    private authService:AuthService,
    private router: Router,
    private flashMessage: FlashMessagesService
    
  ) { this.fullImagePath = '/home/dell/Pictures/tradelogiq.jpeg'}

  ngOnInit() {
  }

  onLogoutClick(){
    this.authService.logout();
   this.flashMessage.show('You are logged out');
    this.router.navigate(['./login']);
    return false;

  }

}
