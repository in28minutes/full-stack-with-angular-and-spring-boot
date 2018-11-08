import { ActivatedRoute } from '@angular/router';
//package com.in28minutes.springboot.web;

//import org.springframework.boot.SpringApplication;
import { Component, OnInit } from '@angular/core';//'./app.component';
//import { AppComponent } from '../app.component';

//@ComponentScan(
//      value = "com.in28minutes.springboot.web")
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})

//public class SpringBootFirstWebApplication implements SomeInterface{
export class WelcomeComponent implements OnInit {

  message = 'Some Welcome Message'
  name = ''
  //String message = "Some Welcome Message"
  
  //public SpringBootFirstWebApplication() {	

  //ActivatedRoute
  constructor(private route:ActivatedRoute) { 

  }

  // void init() {
  ngOnInit(){
    //COMPILATION ERROR this.message = 5
    console.log(this.message)
    // console.log(this.route.snapshot.params['name'])
    this.name = this.route.snapshot.params['name'];
    
  }
}

export class Class1 {

}

export class Class2 {
  
}