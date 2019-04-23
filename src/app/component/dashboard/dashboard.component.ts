import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service'
import {FlashMessagesService} from 'angular2-flash-messages';
import {Router} from '@angular/router';

import {Ajaxapi} from '/home/dell/Desktop/CITIBRIDGE/nodejsday4/TradeReco/src/app/component/dashboard/Ajaxapi.js'
import {getRecommendation1} from '/home/dell/Desktop/CITIBRIDGE/nodejsday4/TradeReco/src/app/component/dashboard/Ajaxapi.js'
import {getRecommendation2} from '/home/dell/Desktop/CITIBRIDGE/nodejsday4/TradeReco/src/app/component/dashboard/Ajaxapi.js'
import {getRecommendation3} from '/home/dell/Desktop/CITIBRIDGE/nodejsday4/TradeReco/src/app/component/dashboard/Ajaxapi.js'
import {getRecommendation4} from '/home/dell/Desktop/CITIBRIDGE/nodejsday4/TradeReco/src/app/component/dashboard/Ajaxapi.js'
import {getRecommendation5} from '/home/dell/Desktop/CITIBRIDGE/nodejsday4/TradeReco/src/app/component/dashboard/Ajaxapi.js'




@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {
  uname:String;
  company: String;
  growth: Number;
  close:Number;
  high: Number;
  low: Number;
  totalTQ:Number;
  turnover:Number;

   //niftyContainer:HTMLElement= document.getElementById("second");
   IT=["WIPRO","TECHM","INFY","TCS","HCLTECH"];
   AUTO=["BAJAJ_AUTO","BOSCHLTD","EICHERMOT","MM","HEROMOTOCO","MARUTI","TATAMOTORS"];
   CEM=["AMBUJACEM","ULTRACEMCO"];
   CONSTRUCT=["LT"];
   CONSUME=["ASIANPAINT","HINDUNILVR","ITC"];
   ENERGY=["BPCL","GAIL","HINDPETRO","IOC","NTPC","ONGC","POWERGRID","RELIANCE"];
   FERT=["UPL"];
   FINANCE=["AXISBANK","BAJFINANCE","HDFCBANK","HDFC","ICICIBANK","IBULHSGFIN","INDUSINDBK","KOTAKBANK","SBIN","YESBANK"];
   MEDIA=["ZEEL"];
   METAL=["COALINDIA","HINDALCO","TATASTEEL","VEDL"];
   PHARMA=["AUROPHARMA","CIPLA","DRREDDY","LUPIN","SUNPHARMA"];
   TEL=["BHARTIARTL","INFRATEL"];
   SERV=["ADANIPORTS"];
   show=[];

 
   //sectors= document.getElementsByName("cars");
  save1=[];
  save2=[];
  save3=[];
  save4=[];
  save5=[];
  sectors = '1';
  selected='1';
 
   onChange(newValue) {
     console.log("this is now selected.."+newValue);
     this.sectors = newValue;

 }

  public saveData1(){
    console.log("required data of top:");
    
    this.save1[0]=getRecommendation1();
    console.log(this.save1[0]);

    
    var btn= document.getElementById("savebtn0");
    
    console.log("username is: "+this.user);

    const recom = {
      uname:this.user,
      sector:this.selected,
      company:this.save1[0][0],
      growth: this.save1[0][1],
      close:this.save1[0][2],
      high: this.save1[0][3],
      low: this.save1[0][4],
      //totalTQ:this.save1[0][5],
      //turnover:this.save1[0][6]
     } 

      //Register recom
      this.authService.registerRecom(recom).subscribe(data =>{
        if(data.success){
          this.flashMessage.show('Recommendation saved', {cssClass: 'alert-success', timeout: 3000});
          this.router.navigate(['/dashboard']);
        
        }else{
          this.flashMessage.show('Recommendation not saved', {cssClass: 'alert-danger', timeout: 3000});
          this.router.navigate(['/dashboard']);
        }
      });
  
  }


  public saveData2(){
 
    console.log("required data of second:");
    this.save2[0]=getRecommendation2();
    console.log(this.save2[0]);
  
    //this.ngOnInit();
    console.log("username is: "+this.user);

    const recom = {
      uname:this.user,
      sector:this.selected,
      company:this.save2[0][0],
      growth: this.save2[0][1],
      close:this.save2[0][2],
      high: this.save2[0][3],
      low: this.save2[0][4],
      //totalTQ:this.save2[0][5],
      //turnover:this.save2[0][6]
     } 

      //Register recom
      this.authService.registerRecom(recom).subscribe(data =>{
        if(data.success){
          this.flashMessage.show('Recommendation saved', {cssClass: 'alert-success', timeout: 3000});
          this.router.navigate(['/dashboard']);
        
        }else{
          this.flashMessage.show('Recommendation not saved', {cssClass: 'alert-danger', timeout: 3000});
          this.router.navigate(['/dashboard']);
        }
      });
  }
  public saveData3(){
 
    console.log("required data of third:");
    this.save3[0]=getRecommendation3();
    console.log(this.save3[0]);
   
   // this.ngOnInit();
    console.log("username is: "+this.user);

    const recom = {
      uname:this.user,
      sector:this.selected,
      company:this.save3[0][0],
      growth: this.save3[0][1],
      close:this.save3[0][2],
      high: this.save3[0][3],
      low: this.save3[0][4],
      //totalTQ:this.save3[0][5],
      //turnover:this.save3[0][6]
     } 

      //Register recom
      this.authService.registerRecom(recom).subscribe(data =>{
        if(data.success){
          this.flashMessage.show('Recommendation saved', {cssClass: 'alert-success', timeout: 3000});
          this.router.navigate(['/dashboard']);
        
        }else{
          this.flashMessage.show('Recommendation not saved', {cssClass: 'alert-danger', timeout: 3000});
          this.router.navigate(['/dashboard']);
        }
      });
  }
  public saveData4(){
 
    console.log("required data fourth:");
    this.save4[0]=getRecommendation4();
    console.log(this.save4[0]);

   // this.ngOnInit();
    console.log("username is: "+this.user);

    const recom = {
      uname:this.user,
      sector:this.selected,
      company:this.save4[0][0],
      growth: this.save4[0][1],
      close:this.save4[0][2],
      high: this.save4[0][3],
      low: this.save4[0][4],
      //totalTQ:this.save4[0][5],
      //turnover:this.save4[0][6]
     } 

      //Register recom
      this.authService.registerRecom(recom).subscribe(data =>{
        if(data.success){
          this.flashMessage.show('Recommendation saved', {cssClass: 'alert-success', timeout: 3000});
          this.router.navigate(['/dashboard']);
        
        }else{
          this.flashMessage.show('Recommendation not saved', {cssClass: 'alert-danger', timeout: 3000});
          this.router.navigate(['/dashboard']);
        }
      });
  }
  public saveData5(){
 
    console.log("required data five:");
    this.save5[0]=getRecommendation5();
    console.log(this.save5[0]);
    
   // this.ngOnInit();
    console.log("username is: "+this.user);

    const recom = {
      uname:this.user,
      sector:this.selected,
      company:this.save5[0][0],
      growth: this.save5[0][1],
      close:this.save5[0][2],
      high: this.save5[0][3],
      low: this.save5[0][4],
      //totalTQ:this.save5[0][5],
      //turnover:this.save5[0][6]
     } 

      //Register recom
      this.authService.registerRecom(recom).subscribe(data =>{
        if(data.success){
          this.flashMessage.show('Recommendation saved', {cssClass: 'alert-success', timeout: 3000});
          this.router.navigate(['/dashboard']);
        
        }else{
          this.flashMessage.show('Recommendation not saved', {cssClass: 'alert-danger', timeout: 3000});
          this.router.navigate(['/dashboard']);
        }
      });
  }
  

 getSelection()
 {
  var i=0;
   this.ngOnInit();
  var niftyContainer= document.getElementById("second");
   console.log(this.sectors);
   switch(this.sectors)
   {
    case '1':
     { Ajaxapi(0,this.IT, niftyContainer );
        i=0;
        this.selected="IT";
   
        while(i<5&&i<this.IT.length){
          this.show[i]=true;
            i++;
        }
        
        break;
    }

  case '2':
  {
    Ajaxapi(0,this.AUTO, niftyContainer );
     i=0;
     this.selected="Automobiles";

     while(i<5&&i<this.AUTO.length){
      this.show[i]=true;
        i++;
    }     

    break;

  }
    
  case '3':
  {
    Ajaxapi(0,this.CEM, niftyContainer);
    i=0;
    this.selected="Cement";

    while(i<5&&i<this.CEM.length){
      this.show[i]=true;
        i++;
    }      

    break;
  }  
 

  case '4':
  {
    Ajaxapi(0,this.CONSTRUCT, niftyContainer);
     i=0;     
     this.selected="Construction";

     while(i<5&&i<this.CONSTRUCT.length){
      this.show[i]=true;
        i++;
    }
            
    break;
  }
    

  case '5':
  {
    Ajaxapi(0,this.CONSUME, niftyContainer );
     i=0;      
     this.selected="Consumer Goods";

     while(i<5&&i<this.CONSUME.length){
      this.show[i]=true;
        i++;
    }      

    break;
  }
   

  case '6':
  {
    Ajaxapi(0,this.ENERGY, niftyContainer );
     i=0;
     this.selected="Energy";

     while(i<5&&i<this.ENERGY.length){
      this.show[i]=true;
        i++;
    }       

    break;
  }
   

  case '7':
  {
    Ajaxapi(0,this.FERT, niftyContainer);
     i=0;
     this.selected="Fertilizers and Pesticides";

     while(i<5&&i<this.FERT.length){
      this.show[i]=true;
        i++;
    }
  }
   

  case '8':
  {
    Ajaxapi(0,this.FINANCE, niftyContainer);
     i=0;
     this.selected="Financial Services";

     while(i<5&&i<this.FINANCE.length){
      this.show[i]=true;
        i++;
    }       

    break;
  }
    

  case '9':
  {
    Ajaxapi(0,this.MEDIA, niftyContainer);
     i=0;
     this.selected="Media and Entertainment";

     while(i<5&&i<this.MEDIA.length){
      this.show[i]=true;
        i++;
    }
    console.log("delaying...");

    break;
  }
   

  case '10':
  {
    Ajaxapi(0,this.METAL, niftyContainer);
     i=0;
     this.selected="Metals";

     while(i<5&&i<this.METAL.length){
      this.show[i]=true;
        i++;
    }       

    break;
  }
    

  case '11':
  {
    Ajaxapi(0,this.PHARMA, niftyContainer);
    i=0;
    this.selected="Pharma";

    while(i<5&&i<this.PHARMA.length){
      this.show[i]=true;
        i++;
    }       

    break;
  }
   

  case '12':
  {
    Ajaxapi(0,this.SERV, niftyContainer);
    i=0;
    this.selected="Services";

    while(i<5&&i<this.SERV.length){
      this.show[i]=true;
        i++;
    }       

    break;

  }
    
  case '13':
  {
    Ajaxapi(0,this.TEL, niftyContainer);
    i=0;
    this.selected="Telecom";

    while(i<5&&i<this.TEL.length){
      this.show[i]=true;
        i++;
    }       

    break;

  }
    
 
   }
 }


  
  constructor(
    private flashMessage:FlashMessagesService,
    private authService:AuthService,
    private router: Router) {
    
  }

  user:Object;

  ngOnInit() {

   
    //hiding buttons
    for(var k=0; k<5; k++)
    {
      this.show[k]=false;
    }


    this.authService.getProfile().subscribe(profile => {
      this.user = profile.user.username;
    },
     err => {
       console.log(err);
       return false;
     });
  }
  
 };


