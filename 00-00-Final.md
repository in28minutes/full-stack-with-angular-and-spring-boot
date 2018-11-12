<!---
Current Directory : /in28Minutes/git/full-stack-with-angular-and-spring-boot
-->

## Complete Code Example


### /BasicAuth.diff

```
diff --git a/diff.txt b/diff.txt
deleted file mode 100644
index 93122ee..0000000
--- a/diff.txt
+++ /dev/null
@@ -1,129 +0,0 @@
-diff --git a/frontend/todo/src/app/app.module.ts b/frontend/todo/src/app/app.module.ts
-index 6b42f34..d1b7305 100644
---- a/frontend/todo/src/app/app.module.ts
-+++ b/frontend/todo/src/app/app.module.ts
-@@ -11,6 +11,7 @@ import { ListTodosComponent } from './list-todos/list-todos.component';
- import { MenuComponent } from './menu/menu.component';
- import { FooterComponent } from './footer/footer.component';
- import { LogoutComponent } from './logout/logout.component';
-+import { HttpClientModule } from '@angular/common/http';
- 
- @NgModule({
-   declarations: [
-@@ -26,7 +27,8 @@ import { LogoutComponent } from './logout/logout.component';
-   imports: [
-     BrowserModule,
-     AppRoutingModule,
--    FormsModule
-+    FormsModule,
-+    HttpClientModule
-   ],
-   providers: [],
-   bootstrap: [AppComponent]
-diff --git a/frontend/todo/src/app/welcome/welcome.component.html b/frontend/todo/src/app/welcome/welcome.component.html
-index 76797b7..f2fc1dc 100644
---- a/frontend/todo/src/app/welcome/welcome.component.html
-+++ b/frontend/todo/src/app/welcome/welcome.component.html
-@@ -2,4 +2,14 @@
- 
- <div class="container">
-   Welcome {{name}}. You can manage your todos <a routerLink="/todos">here</a>
-+</div>
-+
-+<div class="container">
-+    Click this button for a special welcome message
-+    <button (click)="getWelcomeMessageWithName()">Get Welcome Message</button>
-+</div>
-+
-+<div class="container" *ngIf="welcomeMessageFromService">
-+    <H2>Your Customized Welcome Message</H2>
-+    {{welcomeMessageFromService}}
- </div>
-\ No newline at end of file
-diff --git a/frontend/todo/src/app/welcome/welcome.component.ts b/frontend/todo/src/app/welcome/welcome.component.ts
-index 2bf4fac..3df5978 100644
---- a/frontend/todo/src/app/welcome/welcome.component.ts
-+++ b/frontend/todo/src/app/welcome/welcome.component.ts
-@@ -1,3 +1,4 @@
-+import { HelloWorldDataService } from './../service/data/hello-world-data.service';
- import { ActivatedRoute } from '@angular/router';
- //package com.in28minutes.springboot.web;
- 
-@@ -17,13 +18,16 @@ import { Component, OnInit } from '@angular/core';//'./app.component';
- export class WelcomeComponent implements OnInit {
- 
-   message = 'Some Welcome Message'
-+  welcomeMessageFromService:string
-   name = ''
-   //String message = "Some Welcome Message"
-   
-   //public SpringBootFirstWebApplication() {	
- 
-   //ActivatedRoute
--  constructor(private route:ActivatedRoute) { 
-+  constructor(private route:ActivatedRoute,
-+    private service: HelloWorldDataService
-+    ) { 
- 
-   }
- 
-@@ -35,6 +39,26 @@ export class WelcomeComponent implements OnInit {
-     this.name = this.route.snapshot.params['name'];
-     
-   }
-+
-+  getWelcomeMessage() {
-+    console.log(this.service.executeHelloWorldBeanService());  
-+    this.service.executeHelloWorldBeanService().subscribe(
-+      response => this.welcomeMessageFromService = response.message,
-+      error => console.log(error)
-+    );
-+  }
-+
-+  getWelcomeMessageWithName() {
-+    console.log(this.service.executeHelloWorldBeanService());  
-+    this.service.executeHelloWorldBeanServiceWithName(this.name).subscribe(
-+      response => this.welcomeMessageFromService = response.message,
-+      error => console.log(error)
-+    );
-+  }
-+
-+  printToConsole(response){
-+    console.log(response)
-+  }
- }
- 
- export class Class1 {
-diff --git a/restful-web-services/src/main/java/com/in28minutes/rest/webservices/restfulwebservices/HelloWorldController.java b/restful-web-services/src/main/java/com/in28minutes/rest/webservices/restfulwebservices/HelloWorldController.java
-index 24287e6..d0fe5d7 100644
---- a/restful-web-services/src/main/java/com/in28minutes/rest/webservices/restfulwebservices/HelloWorldController.java
-+++ b/restful-web-services/src/main/java/com/in28minutes/rest/webservices/restfulwebservices/HelloWorldController.java
-@@ -1,11 +1,13 @@
- package com.in28minutes.rest.webservices.restfulwebservices;
- 
-+import org.springframework.web.bind.annotation.CrossOrigin;
- import org.springframework.web.bind.annotation.GetMapping;
- import org.springframework.web.bind.annotation.PathVariable;
- import org.springframework.web.bind.annotation.RestController;
- 
- //Controller
- @RestController
-+@CrossOrigin(origins = "http://localhost:4200")
- public class HelloWorldController {
- 
- 	@GetMapping(path = "/hello-world")
-@@ -15,6 +17,7 @@ public class HelloWorldController {
- 
- 	@GetMapping(path = "/hello-world-bean")
- 	public HelloWorldBean helloWorldBean() {
-+		//throw new RuntimeException("Something Went Wrong");
- 		return new HelloWorldBean("Hello World");
- 	}
- 	
-@@ -23,4 +26,4 @@ public class HelloWorldController {
- 	public HelloWorldBean helloWorldPathVariable(@PathVariable String name) {
- 		return new HelloWorldBean(String.format("Hello World, %s", name));
- 	}
--}
-+}
-\ No newline at end of file
diff --git a/frontend/todo/src/app/service/data/todo-data.service.ts b/frontend/todo/src/app/service/data/todo-data.service.ts
index 0a4d66a..171b5c8 100644
--- a/frontend/todo/src/app/service/data/todo-data.service.ts
+++ b/frontend/todo/src/app/service/data/todo-data.service.ts
@@ -1,4 +1,4 @@
-import { HttpClient } from '@angular/common/http';
+import { HttpClient, HttpHeaders } from '@angular/common/http';
 import { Injectable } from '@angular/core';
 import { Todo } from '../../list-todos/list-todos.component';
 
@@ -12,28 +12,37 @@ export class TodoDataService {
   ) { }
 
   retrieveAllTodos(username) {
-    return this.http.get<Todo[]>(`http://localhost:8080/users/${username}/todos`);
+    return this.http.get<Todo[]>(`http://localhost:8080/users/${username}/todos`, this.createHeaders());
     //console.log("Execute Hello World Bean Service")
   }
 
   deleteTodo(username, id){
-    return this.http.delete(`http://localhost:8080/users/${username}/todos/${id}`);
+    return this.http.delete(`http://localhost:8080/users/${username}/todos/${id}`, this.createHeaders());
   }
 
   retrieveTodo(username, id){
-    return this.http.get<Todo>(`http://localhost:8080/users/${username}/todos/${id}`);
+    return this.http.get<Todo>(`http://localhost:8080/users/${username}/todos/${id}`, this.createHeaders());
   }
 
   updateTodo(username, id, todo){
     return this.http.put(
                 `http://localhost:8080/users/${username}/todos/${id}`
-                , todo);
+                , todo, this.createHeaders());
   }
 
   createTodo(username, todo){
+    
     return this.http.post(
                 `http://localhost:8080/users/${username}/todos`
-                , todo);
+                , todo, this.createHeaders());
+  }
+
+  createHeaders() {
+    let username = 'in28minutes'
+    let password = 'dummy'
+    let basicAuthHeaderString = 'Basic ' + window.btoa(`${username}:${password}`);
+    const headers = new HttpHeaders({ Authorization: basicAuthHeaderString });
+    return { headers };
   }
 
 }
diff --git a/frontend/todo/src/app/service/data/welcome-data.service.ts b/frontend/todo/src/app/service/data/welcome-data.service.ts
index df020a2..1513c96 100644
--- a/frontend/todo/src/app/service/data/welcome-data.service.ts
+++ b/frontend/todo/src/app/service/data/welcome-data.service.ts
@@ -1,4 +1,5 @@
-import { HttpClient } from '@angular/common/http';
+import { map } from 'rxjs/operators';
+import { HttpClient, HttpHeaders } from '@angular/common/http';
 import { Injectable } from '@angular/core';
 
 export class HelloWorldBean {
@@ -21,8 +22,28 @@ export class WelcomeDataService {
   //http://localhost:8080/hello-world/path-variable/in28minutes
 
   executeHelloWorldServiceWithPathVariable(name) {
-    return this.http.get<HelloWorldBean>(`http://localhost:8080/hello-world/path-variable/${name}`);
+    let username = 'in28minutes'
+    let password = 'dummy'
+    let basicAuthHeaderString = 'Basic ' + window.btoa(`${username}:${password}`);
+    const headers = new HttpHeaders({ Authorization: basicAuthHeaderString });
+    console.log(headers);
+
+    return this.http.get<HelloWorldBean>(`http://localhost:8080/hello-world/path-variable/${name}`, {headers});
     //console.log("Execute Hello World Bean Service")
   }
 
+  executeBasicAuthenticationService(username, password) {
+    let basicAuthHeaderString = 'Basic ' + window.btoa(`${username}:${password}`);
+    const headers = new HttpHeaders({ Authorization: basicAuthHeaderString });
+    console.log(headers);
+    return this.http.get(`http://localhost:8080/authenticate`, { headers })
+      .pipe(
+        map(user => {
+          console.log(user);
+          return user;
+        }));
+  }
+
+
+  
 }
diff --git a/frontend/todo/src/app/todo/todo.component.css b/frontend/todo/src/app/todo/todo.component.css
index e69de29..7343c3c 100644
--- a/frontend/todo/src/app/todo/todo.component.css
+++ b/frontend/todo/src/app/todo/todo.component.css
@@ -0,0 +1,3 @@
+.ng-invalid:not(form) {
+    border-left: 5px solid #a94442;
+}
\ No newline at end of file
diff --git a/frontend/todo/src/app/todo/todo.component.html b/frontend/todo/src/app/todo/todo.component.html
index a5967da..93fe464 100644
--- a/frontend/todo/src/app/todo/todo.component.html
+++ b/frontend/todo/src/app/todo/todo.component.html
@@ -1,20 +1,26 @@
 <H1>Todo</H1>
 
 <div class="container">
-  
-  <fieldset class="form-group">
-    <label>Description</label>
-    <input type="text" [(ngModel)]="todo.description" class="form-control" name="description" required="required">
-  </fieldset>
 
-  <fieldset class="form-group">
-      <label>Target Date</label>
-      <input type="date" 
-      [ngModel]="todo.targetDate | date:'yyyy-MM-dd' "
-      (ngModelChange)="todo.targetDate = $event"
-      class="form-control" name="targetDate" required="required">
-  </fieldset>
+  <form #todoForm="ngForm" (ngSubmit)="!todoForm.invalid && saveTodo()">
+      <div class="alert alert-warning" *ngIf='todoForm.dirty && todoForm.invalid'>Enter Valid Values</div>
+      <div class="alert alert-warning" *ngIf='todoForm.dirty && targetDate.invalid'>Enter Valid Target Date</div>
+      <div class="alert alert-warning" *ngIf='todoForm.dirty && description.invalid'>Enter atleast 5 characters in Description</div>
 
-  <button class="btn btn-success" (click)="saveTodo()">Save</button>
+    <fieldset class="form-group">
+      <label>Description</label>
+      <input type="text" #description="ngModel" #login="ngModel" [(ngModel)]="todo.description" class="form-control" name="description" required="required" minlength="5" >
+    </fieldset>
+
+    <fieldset class="form-group">
+        <label>Target Date</label>
+        <input type="date" #targetDate="ngModel"
+        [ngModel]="todo.targetDate | date:'yyyy-MM-dd' "
+        (ngModelChange)="todo.targetDate = $event"
+        class="form-control" name="targetDate" required="required">
+    </fieldset>
+
+    <button type="submit" class="btn btn-success">Save</button>
+  </form>
 
 </div>
\ No newline at end of file
diff --git a/frontend/todo/src/app/welcome/welcome.component.ts b/frontend/todo/src/app/welcome/welcome.component.ts
index 857e705..1c7e53f 100644
--- a/frontend/todo/src/app/welcome/welcome.component.ts
+++ b/frontend/todo/src/app/welcome/welcome.component.ts
@@ -55,11 +55,18 @@ export class WelcomeComponent implements OnInit {
 
   getWelcomeMessageWithParameter() {
     //console.log(this.service.executeHelloWorldBeanService());
-    
-    this.service.executeHelloWorldServiceWithPathVariable(this.name).subscribe(
+
+    this.service.executeBasicAuthenticationService('in28minutes','dummy').subscribe(
       response => this.handleSuccessfulResponse(response),
       error => this.handleErrorResponse(error)
     );
+
+    
+    
+    // this.service.executeHelloWorldServiceWithPathVariable(this.name).subscribe(
+    //   response => this.handleSuccessfulResponse(response),
+    //   error => this.handleErrorResponse(error)
+    // );
     
     //console.log('last line of getWelcomeMessage')
 
diff --git a/restful-web-services/pom.xml b/restful-web-services/pom.xml
index f928221..98f8d55 100644
--- a/restful-web-services/pom.xml
+++ b/restful-web-services/pom.xml
@@ -38,6 +38,11 @@
 
 		<dependency>
 			<groupId>org.springframework.boot</groupId>
+			<artifactId>spring-boot-starter-security</artifactId>
+		</dependency>
+
+		<dependency>
+			<groupId>org.springframework.boot</groupId>
 			<artifactId>spring-boot-devtools</artifactId>
 			<scope>runtime</scope>
 		</dependency>
diff --git a/restful-web-services/src/main/java/com/in28minutes/rest/webservices/restfulwebservices/todo/TodoResource.java b/restful-web-services/src/main/java/com/in28minutes/rest/webservices/restfulwebservices/todo/TodoResource.java
index ee390e6..6ad07d8 100644
--- a/restful-web-services/src/main/java/com/in28minutes/rest/webservices/restfulwebservices/todo/TodoResource.java
+++ b/restful-web-services/src/main/java/com/in28minutes/rest/webservices/restfulwebservices/todo/TodoResource.java
@@ -18,63 +18,59 @@ import org.springframework.web.servlet.support.ServletUriComponentsBuilder;
 
 import com.in28minutes.rest.webservices.restfulwebservices.todo.Todo;
 
-@CrossOrigin(origins="http://localhost:4200")
+@CrossOrigin(origins = "http://localhost:4200")
 @RestController
 public class TodoResource {
-	
+
 	@Autowired
 	private TodoHardcodedService todoService;
-	
+
 	@GetMapping("/users/{username}/todos")
-	public List<Todo> getAllTodos(@PathVariable String username){
+	public List<Todo> getAllTodos(@PathVariable String username) {
 		return todoService.findAll();
 	}
 
 	@GetMapping("/users/{username}/todos/{id}")
-	public Todo getTodo(@PathVariable String username, @PathVariable long id){
+	public Todo getTodo(@PathVariable String username, @PathVariable long id) {
 		return todoService.findById(id);
 	}
 
-	//DELETE /users/{username}/todos/{id}
+	// DELETE /users/{username}/todos/{id}
 	@DeleteMapping("/users/{username}/todos/{id}")
-	public ResponseEntity<Void> deleteTodo(
-			@PathVariable String username, @PathVariable long id){
-		
+	public ResponseEntity<Void> deleteTodo(@PathVariable String username, @PathVariable long id) {
+
 		Todo todo = todoService.deleteById(id);
-		
-		if(todo!=null) {
+
+		if (todo != null) {
 			return ResponseEntity.noContent().build();
 		}
-		
+
 		return ResponseEntity.notFound().build();
 	}
-	
 
-	//Edit/Update a Todo
-	//PUT /users/{user_name}/todos/{todo_id}
+	// Edit/Update a Todo
+	// PUT /users/{user_name}/todos/{todo_id}
 	@PutMapping("/users/{username}/todos/{id}")
-	public ResponseEntity<Todo> updateTodo(
-			@PathVariable String username,
-			@PathVariable long id, @RequestBody Todo todo){
-		
+	public ResponseEntity<Todo> updateTodo(@PathVariable String username, @PathVariable long id,
+			@RequestBody Todo todo) {
+
 		Todo todoUpdated = todoService.save(todo);
-		
+
 		return new ResponseEntity<Todo>(todo, HttpStatus.OK);
 	}
-	
+
 	@PostMapping("/users/{username}/todos")
-	public ResponseEntity<Void> updateTodo(
-			@PathVariable String username, @RequestBody Todo todo){
-		
+	public ResponseEntity<Void> updateTodo(@PathVariable String username, @RequestBody Todo todo) {
+
 		Todo createdTodo = todoService.save(todo);
-		
-		//Location
-		//Get current resource url
-		///{id}
-		URI uri = ServletUriComponentsBuilder.fromCurrentRequest()
-				.path("/{id}").buildAndExpand(createdTodo.getId()).toUri();
-		
+
+		// Location
+		// Get current resource url
+		/// {id}
+		URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(createdTodo.getId())
+				.toUri();
+
 		return ResponseEntity.created(uri).build();
 	}
-		
+
 }
diff --git a/restful-web-services/src/main/resources/application.properties b/restful-web-services/src/main/resources/application.properties
index 5cbf315..4ec0ded 100644
--- a/restful-web-services/src/main/resources/application.properties
+++ b/restful-web-services/src/main/resources/application.properties
@@ -1 +1,4 @@
-logging.level.org.springframework = info
\ No newline at end of file
+logging.level.org.springframework = info
+
+spring.security.user.name=in28minutes
+spring.security.user.password=dummy
```
---

### /BasicDiff.txt

```
diff --git a/frontend/todo/src/app/app.module.ts b/frontend/todo/src/app/app.module.ts
index 1a02cbf..f707e90 100644
--- a/frontend/todo/src/app/app.module.ts
+++ b/frontend/todo/src/app/app.module.ts
@@ -1,4 +1,5 @@
-import { HttpClientModule } from '@angular/common/http';
+import { BasicHttpInterceptor } from './service/data/welcome-data.service';
+import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
 import { BrowserModule } from '@angular/platform-browser';
 import { NgModule } from '@angular/core';
 import { FormsModule } from '@angular/forms';
@@ -32,7 +33,9 @@ import { TodoComponent } from './todo/todo.component';
     FormsModule,
     HttpClientModule
   ],
-  providers: [],
+  providers: [
+    {provide: HTTP_INTERCEPTORS, useClass: BasicHttpInterceptor, multi: true }
+  ],
   bootstrap: [AppComponent]
 })
 export class AppModule { }
diff --git a/frontend/todo/src/app/service/data/welcome-data.service.ts b/frontend/todo/src/app/service/data/welcome-data.service.ts
index df020a2..f22a7e2 100644
--- a/frontend/todo/src/app/service/data/welcome-data.service.ts
+++ b/frontend/todo/src/app/service/data/welcome-data.service.ts
@@ -1,5 +1,7 @@
-import { HttpClient } from '@angular/common/http';
+import { HttpClient, HttpHeaders } from '@angular/common/http';
 import { Injectable } from '@angular/core';
+import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
+import { Observable } from 'rxjs';
 
 export class HelloWorldBean {
   constructor(public message:string){ }
@@ -21,8 +23,40 @@ export class WelcomeDataService {
   //http://localhost:8080/hello-world/path-variable/in28minutes
 
   executeHelloWorldServiceWithPathVariable(name) {
+    
     return this.http.get<HelloWorldBean>(`http://localhost:8080/hello-world/path-variable/${name}`);
     //console.log("Execute Hello World Bean Service")
   }
 
+  createHeaders() {
+    let username = 'in28minutes'
+    let password = 'dummy'
+    let basicAuthHeaderString = 'Basic ' + window.btoa(`${username}:${password}`);
+    const headers = new HttpHeaders({ Authorization: basicAuthHeaderString });
+    return { headers };
+  }
 }
+
+@Injectable({
+  providedIn: 'root'
+})
+export class BasicHttpInterceptor implements HttpInterceptor {
+  constructor(){
+
+  }
+
+  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
+    let username = 'in28minutes'
+    let password = 'dummy'
+    let basicAuthHeaderString = 'Basic ' + window.btoa(`${username}:${password}`);
+
+    request = request.clone({
+        setHeaders: {
+            Authorization: basicAuthHeaderString
+
+        }
+    });
+
+      return next.handle(request);
+  }
+}
\ No newline at end of file
diff --git a/restful-web-services/pom.xml b/restful-web-services/pom.xml
index f928221..df700e6 100644
--- a/restful-web-services/pom.xml
+++ b/restful-web-services/pom.xml
@@ -38,6 +38,11 @@
 
 		<dependency>
 			<groupId>org.springframework.boot</groupId>
+			<artifactId>spring-boot-starter-security</artifactId>
+		</dependency>
+		
+		<dependency>
+			<groupId>org.springframework.boot</groupId>
 			<artifactId>spring-boot-devtools</artifactId>
 			<scope>runtime</scope>
 		</dependency>
diff --git a/restful-web-services/src/main/resources/application.properties b/restful-web-services/src/main/resources/application.properties
index 5cbf315..4ec0ded 100644
--- a/restful-web-services/src/main/resources/application.properties
+++ b/restful-web-services/src/main/resources/application.properties
@@ -1 +1,4 @@
-logging.level.org.springframework = info
\ No newline at end of file
+logging.level.org.springframework = info
+
+spring.security.user.name=in28minutes
+spring.security.user.password=dummy
```
---

### /diff.txt

```
diff --git a/frontend/todo/src/app/app.module.ts b/frontend/todo/src/app/app.module.ts
index 6b42f34..d1b7305 100644
--- a/frontend/todo/src/app/app.module.ts
+++ b/frontend/todo/src/app/app.module.ts
@@ -11,6 +11,7 @@ import { ListTodosComponent } from './list-todos/list-todos.component';
 import { MenuComponent } from './menu/menu.component';
 import { FooterComponent } from './footer/footer.component';
 import { LogoutComponent } from './logout/logout.component';
+import { HttpClientModule } from '@angular/common/http';
 
 @NgModule({
   declarations: [
@@ -26,7 +27,8 @@ import { LogoutComponent } from './logout/logout.component';
   imports: [
     BrowserModule,
     AppRoutingModule,
-    FormsModule
+    FormsModule,
+    HttpClientModule
   ],
   providers: [],
   bootstrap: [AppComponent]
diff --git a/frontend/todo/src/app/welcome/welcome.component.html b/frontend/todo/src/app/welcome/welcome.component.html
index 76797b7..f2fc1dc 100644
--- a/frontend/todo/src/app/welcome/welcome.component.html
+++ b/frontend/todo/src/app/welcome/welcome.component.html
@@ -2,4 +2,14 @@
 
 <div class="container">
   Welcome {{name}}. You can manage your todos <a routerLink="/todos">here</a>
+</div>
+
+<div class="container">
+    Click this button for a special welcome message
+    <button (click)="getWelcomeMessageWithName()">Get Welcome Message</button>
+</div>
+
+<div class="container" *ngIf="welcomeMessageFromService">
+    <H2>Your Customized Welcome Message</H2>
+    {{welcomeMessageFromService}}
 </div>
\ No newline at end of file
diff --git a/frontend/todo/src/app/welcome/welcome.component.ts b/frontend/todo/src/app/welcome/welcome.component.ts
index 2bf4fac..3df5978 100644
--- a/frontend/todo/src/app/welcome/welcome.component.ts
+++ b/frontend/todo/src/app/welcome/welcome.component.ts
@@ -1,3 +1,4 @@
+import { HelloWorldDataService } from './../service/data/hello-world-data.service';
 import { ActivatedRoute } from '@angular/router';
 //package com.in28minutes.springboot.web;
 
@@ -17,13 +18,16 @@ import { Component, OnInit } from '@angular/core';//'./app.component';
 export class WelcomeComponent implements OnInit {
 
   message = 'Some Welcome Message'
+  welcomeMessageFromService:string
   name = ''
   //String message = "Some Welcome Message"
   
   //public SpringBootFirstWebApplication() {	
 
   //ActivatedRoute
-  constructor(private route:ActivatedRoute) { 
+  constructor(private route:ActivatedRoute,
+    private service: HelloWorldDataService
+    ) { 
 
   }
 
@@ -35,6 +39,26 @@ export class WelcomeComponent implements OnInit {
     this.name = this.route.snapshot.params['name'];
     
   }
+
+  getWelcomeMessage() {
+    console.log(this.service.executeHelloWorldBeanService());  
+    this.service.executeHelloWorldBeanService().subscribe(
+      response => this.welcomeMessageFromService = response.message,
+      error => console.log(error)
+    );
+  }
+
+  getWelcomeMessageWithName() {
+    console.log(this.service.executeHelloWorldBeanService());  
+    this.service.executeHelloWorldBeanServiceWithName(this.name).subscribe(
+      response => this.welcomeMessageFromService = response.message,
+      error => console.log(error)
+    );
+  }
+
+  printToConsole(response){
+    console.log(response)
+  }
 }
 
 export class Class1 {
diff --git a/restful-web-services/src/main/java/com/in28minutes/rest/webservices/restfulwebservices/HelloWorldController.java b/restful-web-services/src/main/java/com/in28minutes/rest/webservices/restfulwebservices/HelloWorldController.java
index 24287e6..d0fe5d7 100644
--- a/restful-web-services/src/main/java/com/in28minutes/rest/webservices/restfulwebservices/HelloWorldController.java
+++ b/restful-web-services/src/main/java/com/in28minutes/rest/webservices/restfulwebservices/HelloWorldController.java
@@ -1,11 +1,13 @@
 package com.in28minutes.rest.webservices.restfulwebservices;
 
+import org.springframework.web.bind.annotation.CrossOrigin;
 import org.springframework.web.bind.annotation.GetMapping;
 import org.springframework.web.bind.annotation.PathVariable;
 import org.springframework.web.bind.annotation.RestController;
 
 //Controller
 @RestController
+@CrossOrigin(origins = "http://localhost:4200")
 public class HelloWorldController {
 
 	@GetMapping(path = "/hello-world")
@@ -15,6 +17,7 @@ public class HelloWorldController {
 
 	@GetMapping(path = "/hello-world-bean")
 	public HelloWorldBean helloWorldBean() {
+		//throw new RuntimeException("Something Went Wrong");
 		return new HelloWorldBean("Hello World");
 	}
 	
@@ -23,4 +26,4 @@ public class HelloWorldController {
 	public HelloWorldBean helloWorldPathVariable(@PathVariable String name) {
 		return new HelloWorldBean(String.format("Hello World, %s", name));
 	}
-}
+}
\ No newline at end of file
```
---

### /frontend/todo/src/app/app-routing.module.ts

```
import { TodoComponent } from './todo/todo.component';
import { RouteGuardService } from './service/route-guard.service';
import { LogoutComponent } from './logout/logout.component';
import { ListTodosComponent } from './list-todos/list-todos.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ErrorComponent } from './error/error.component';

// welcome 
const routes: Routes = [
  { path: '', component: LoginComponent  },//canActivate, RouteGuardService
  { path: 'login', component: LoginComponent },
  { path: 'welcome/:name', component: WelcomeComponent, canActivate:[RouteGuardService]},
  { path: 'todos', component: ListTodosComponent, canActivate:[RouteGuardService] },
  { path: 'logout', component: LogoutComponent, canActivate:[RouteGuardService] },
  { path: 'todos/:id', component: TodoComponent, canActivate:[RouteGuardService] },

  { path: '**', component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
```
---

### /frontend/todo/src/app/app.component.css

```css
```
---

### /frontend/todo/src/app/app.component.html

```html
<!--<app-welcome></app-welcome>-->

<!-- <app-login></app-login> -->
<!--
<div>Component Content</div>-->

<app-menu></app-menu>

<div class="container">
    <router-outlet></router-outlet>
</div>

<app-footer></app-footer>
```
---

### /frontend/todo/src/app/app.component.ts

```
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  //template: '<h1>{{title}}<h1>',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo';
  message = 'Welcome to in28Minutes';
}
```
---

### /frontend/todo/src/app/app.constants.ts

```
export const API_URL = "http://localhost:8080"
export const TODO_JPA_API_URL = "http://localhost:8080/jpa"
```
---

### /frontend/todo/src/app/app.module.ts

```
import { HttpIntercepterBasicAuthService } from './service/http/http-intercepter-basic-auth.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
import { ErrorComponent } from './error/error.component';
import { ListTodosComponent } from './list-todos/list-todos.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { LogoutComponent } from './logout/logout.component';
import { TodoComponent } from './todo/todo.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    LoginComponent,
    ErrorComponent,
    ListTodosComponent,
    MenuComponent,
    FooterComponent,
    LogoutComponent,
    TodoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
     {provide: HTTP_INTERCEPTORS, useClass: HttpIntercepterBasicAuthService, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
```
---

### /frontend/todo/src/app/error/error.component.css

```css
```
---

### /frontend/todo/src/app/error/error.component.html

```html
{{errorMessage}}
```
---

### /frontend/todo/src/app/error/error.component.ts

```
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {

  errorMessage = 'An Error Occured! Contact Support at *** - ***'

  constructor() { }

  ngOnInit() {
  }

}
```
---

### /frontend/todo/src/app/footer/footer.component.css

```css
.footer {
    position: absolute;
    bottom: 0;
    width:100%;
    height: 40px;
    background-color: #222222;
}
```
---

### /frontend/todo/src/app/footer/footer.component.html

```html
<footer class="footer">
    <div class="container">
        <span class="text-muted">All Rights Reserved 2018 @in28minutes</span>
    </div>

</footer>
```
---

### /frontend/todo/src/app/footer/footer.component.ts

```
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
```
---

### /frontend/todo/src/app/list-todos/list-todos.component.css

```css
```
---

### /frontend/todo/src/app/list-todos/list-todos.component.html

```html
<h1> Todo </h1>

<div class="alert alert-success" *ngIf='message'>{{message}}</div>

<div class="container">
  <table class="table">
    <thead>
      <tr>
        <th>Description</th>
        <th>Target Date</th>
        <th>is Completed?</th>
        <th>Update</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
      <!--   for (Todo todo: todos) {  -->
              <tr *ngFor="let todo of todos">
                <td>{{todo.description}}</td>
                <td>{{todo.targetDate | date | uppercase}}</td>
                <td>{{todo.done}}</td>
                <td><button (click)="updateTodo(todo.id)" class="btn btn-success">Update</button></td>
                <td><button (click)="deleteTodo(todo.id)" class="btn btn-warning">Delete</button></td>
              </tr>
      <!-- } -->
    </tbody>

  </table>

  <div class="row">
      <button (click)="addTodo()" class="btn btn-success">Add</button>
  </div>

</div>
```
---

### /frontend/todo/src/app/list-todos/list-todos.component.ts

```
import { TodoDataService } from './../service/data/todo-data.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

export class Todo {
  constructor(
    public id: number,
    public description: string,
    public done: boolean,
    public targetDate: Date
  ){

  }
}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  todos: Todo[]

  message: string

  // = [
  //   new Todo(1, 'Learn to Dance', false, new Date()),
  //   new Todo(2, 'Become an Expert at Angular', false, new Date()),
  //   new Todo(3, 'Visit India', false, new Date())
  //   // {id : 1, description : },
  //   // {id : 2, description : ''},
  //   // {id : 3, description : 'Visit India'}
  // ]

  // todo = {
  //     id : 1,
  //     description: 'Learn to Dance'
  // }

  constructor(
    private todoService:TodoDataService,
    private router : Router
  ) { }

  ngOnInit() {
    this.refreshTodos();
  }

  refreshTodos(){
    this.todoService.retrieveAllTodos('in28minutes').subscribe(
      response => {
        console.log(response);
        this.todos = response;
      }
    )
  }

  deleteTodo(id) {
    console.log(`delete todo ${id}` )
    this.todoService.deleteTodo('in28minutes', id).subscribe (
      response => {
        console.log(response);
        this.message = `Delete of Todo ${id} Successful!`;
        this.refreshTodos();
      }
    )
  }

  updateTodo(id) {
    console.log(`update ${id}`)
    this.router.navigate(['todos',id])
  }

  addTodo() {
    this.router.navigate(['todos',-1])
  }
}
```
---

### /frontend/todo/src/app/login/login.component.css

```css
```
---

### /frontend/todo/src/app/login/login.component.html

```html
<H1>Login!</H1>

<div class="container">
  <div class="alert alert-warning" *ngIf='invalidLogin'>{{errorMessage}}</div>

  <div>
    User Name : <input type="text" name="username" [(ngModel)]="username">
    Password  : <input type="password" name="password" [(ngModel)]="password">

    <!-- User Name : {{username}} -->

    <!-- <button (click)=handleLogin() class="btn btn-success">Login</button> -->
    <!-- <button (click)=handleBasicAuthLogin() class="btn btn-success">Login</button> -->
    <button (click)=handleJWTAuthLogin() class="btn btn-success">Login</button>
    
  </div>
</div>
```
---

### /frontend/todo/src/app/login/login.component.ts

```
import { BasicAuthenticationService } from './../service/basic-authentication.service';
import { HardcodedAuthenticationService } from './../service/hardcoded-authentication.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = 'in28minutes'
  password = ''
  errorMessage = 'Invalid Credentials'
  invalidLogin = false

  //Router
  //Angular.giveMeRouter
  //Dependency Injection
  constructor(private router: Router,
    private hardcodedAuthenticationService: HardcodedAuthenticationService,
    private basicAuthenticationService: BasicAuthenticationService) { }

  ngOnInit() {
  }

  handleLogin() {
    // console.log(this.username);
    //if(this.username==="in28minutes" && this.password === 'dummy') {
    if(this.hardcodedAuthenticationService.authenticate(this.username, this.password)) {
      //Redirect to Welcome Page
      this.router.navigate(['welcome', this.username])
      this.invalidLogin = false
    } else {
      this.invalidLogin = true
    }
  }

  handleBasicAuthLogin() {
    // console.log(this.username);
    //if(this.username==="in28minutes" && this.password === 'dummy') {
    this.basicAuthenticationService.executeAuthenticationService(this.username, this.password)
        .subscribe(
          data => {
            console.log(data)
            this.router.navigate(['welcome', this.username])
            this.invalidLogin = false      
          },
          error => {
            console.log(error)
            this.invalidLogin = true
          }
        )
  }

  handleJWTAuthLogin() {
    this.basicAuthenticationService.executeJWTAuthenticationService(this.username, this.password)
        .subscribe(
          data => {
            console.log(data)
            this.router.navigate(['welcome', this.username])
            this.invalidLogin = false      
          },
          error => {
            console.log(error)
            this.invalidLogin = true
          }
        )
  }

}
```
---

### /frontend/todo/src/app/logout/logout.component.css

```css
```
---

### /frontend/todo/src/app/logout/logout.component.html

```html
<H1>You are logged out</H1>
<div class="container">
  Thank You For Using Our Application.
</div>
```
---

### /frontend/todo/src/app/logout/logout.component.ts

```
import { HardcodedAuthenticationService } from './../service/hardcoded-authentication.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(
    private hardcodedAuthenticationService: HardcodedAuthenticationService
  ) { }

  ngOnInit() {
    this.hardcodedAuthenticationService.logout();
  }

}
```
---

### /frontend/todo/src/app/menu/menu.component.css

```css
```
---

### /frontend/todo/src/app/menu/menu.component.html

```html
<header>
    <nav class="navbar navbar-expand-md navbar-dark bg-dark">
        <div><a href="https://www.in28minutes.com" class="navbar-brand">
            in28minutes</a></div>

        <ul class="navbar-nav">
            <li><a *ngIf="hardcodedAuthenticationService.isUserLoggedIn()" routerLink="/welcome/in28minutes" class="nav-link">Home</a></li>
            <li><a *ngIf="hardcodedAuthenticationService.isUserLoggedIn()" routerLink="/todos" class="nav-link">Todos</a></li>
        </ul>

        <ul class="navbar-nav navbar-collapse justify-content-end">
                <li><a *ngIf="!hardcodedAuthenticationService.isUserLoggedIn()" routerLink="/login" class="nav-link">Login</a></li>
                <li><a *ngIf="hardcodedAuthenticationService.isUserLoggedIn()" routerLink="/logout" class="nav-link">Logout</a></li>
        </ul>
    </nav>
</header>
```
---

### /frontend/todo/src/app/menu/menu.component.ts

```
import { HardcodedAuthenticationService } from './../service/hardcoded-authentication.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  //isUserLoggedIn: boolean = false;

  constructor(private hardcodedAuthenticationService 
    : HardcodedAuthenticationService) { }

  ngOnInit() {
    //this.isUserLoggedIn = this.hardcodedAuthenticationService.isUserLoggedIn();
  }

}
```
---

### /frontend/todo/src/app/service/basic-authentication.service.ts

```
import { API_URL } from './../app.constants';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {map} from 'rxjs/operators';

export const TOKEN = 'token'
export const AUTHENTICATED_USER = 'authenticaterUser'

@Injectable({
  providedIn: 'root'
})
export class BasicAuthenticationService {

  constructor(private http: HttpClient) { }

  executeJWTAuthenticationService(username, password) {
    
    return this.http.post<any>(
      `${API_URL}/authenticate`,{
        username,
        password
      }).pipe(
        map(
          data => {
            sessionStorage.setItem(AUTHENTICATED_USER, username);
            sessionStorage.setItem(TOKEN, `Bearer ${data.token}`);
            return data;
          }
        )
      );
    //console.log("Execute Hello World Bean Service")
  }


  executeAuthenticationService(username, password) {
    
    let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);

    let headers = new HttpHeaders({
        Authorization: basicAuthHeaderString
      })

    return this.http.get<AuthenticationBean>(
      `${API_URL}/basicauth`,
      {headers}).pipe(
        map(
          data => {
            sessionStorage.setItem(AUTHENTICATED_USER, username);
            sessionStorage.setItem(TOKEN, basicAuthHeaderString);
            return data;
          }
        )
      );
    //console.log("Execute Hello World Bean Service")
  }

  getAuthenticatedUser() {
    return sessionStorage.getItem(AUTHENTICATED_USER)
  }

  getAuthenticatedToken() {
    if(this.getAuthenticatedUser())
      return sessionStorage.getItem(TOKEN)
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem(AUTHENTICATED_USER)
    return !(user === null)
  }

  logout(){
    sessionStorage.removeItem(AUTHENTICATED_USER)
    sessionStorage.removeItem(TOKEN)
  }

}

export class AuthenticationBean{
  constructor(public message:string) { }
}
```
---

### /frontend/todo/src/app/service/data/todo-data.service.ts

```
import { TODO_JPA_API_URL } from './../../app.constants';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Todo } from '../../list-todos/list-todos.component';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(
    private http:HttpClient
  ) { }

  retrieveAllTodos(username) {
    return this.http.get<Todo[]>(`${TODO_JPA_API_URL}/users/${username}/todos`);
    //console.log("Execute Hello World Bean Service")
  }

  deleteTodo(username, id){
    return this.http.delete(`${TODO_JPA_API_URL}/users/${username}/todos/${id}`);
  }

  retrieveTodo(username, id){
    return this.http.get<Todo>(`${TODO_JPA_API_URL}/users/${username}/todos/${id}`);
  }

  updateTodo(username, id, todo){
    return this.http.put(
          `${TODO_JPA_API_URL}/users/${username}/todos/${id}`
                , todo);
  }

  createTodo(username, todo){
    return this.http.post(
              `${TODO_JPA_API_URL}/users/${username}/todos`
                , todo);
  }

}
```
---

### /frontend/todo/src/app/service/data/welcome-data.service.ts

```
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

export class HelloWorldBean {
  constructor(public message:string){ }
}

@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(
    private http:HttpClient
  ) { }

  executeHelloWorldBeanService() {
    return this.http.get<HelloWorldBean>('http://localhost:8080/hello-world-bean');
    //console.log("Execute Hello World Bean Service")
  }
  //http://localhost:8080/hello-world/path-variable/in28minutes

  executeHelloWorldServiceWithPathVariable(name) {
    // let basicAuthHeaderString = this.createBasicAuthenticationHttpHeader();

    // let headers = new HttpHeaders({
    //     Authorization: basicAuthHeaderString
    //   })

    return this.http.get<HelloWorldBean>(
      `http://localhost:8080/hello-world/path-variable/${name}`,
      //{headers}
      );
    //console.log("Execute Hello World Bean Service")
  }

  // createBasicAuthenticationHttpHeader() {
  //   let username = 'in28minutes'
  //   let password = 'dummy'
  //   let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);
  //   return basicAuthHeaderString;
  // }
  //Access to XMLHttpRequest at 
  //'http://localhost:8080/hello-world/path-variable/in28minutes' 
  //from origin 'http://localhost:4200' has been blocked by CORS policy: 
  //No 'Access-Control-Allow-Origin' header is present on the requested resource.

  //Access to XMLHttpRequest at 'http://localhost:8080/hello-world/path-variable/in28minutes' from origin 'http://localhost:4200' 
  //has been blocked by CORS policy: 
  //Response to preflight request doesn't pass 
  //access control check: It does not have HTTP ok status
}
```
---

### /frontend/todo/src/app/service/hardcoded-authentication.service.ts

```
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }

  authenticate(username, password) {
    //console.log('before ' + this.isUserLoggedIn());
    if(username==="in28minutes" && password === 'dummy') {
      sessionStorage.setItem('authenticaterUser', username);
      //console.log('after ' + this.isUserLoggedIn());
      return true;
    }
    return false;
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('authenticaterUser')
    return !(user === null)
  }

  logout(){
    sessionStorage.removeItem('authenticaterUser')
  }

}
```
---

### /frontend/todo/src/app/service/http/http-intercepter-basic-auth.service.ts

```
import { BasicAuthenticationService } from './../basic-authentication.service';
import { HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpIntercepterBasicAuthService implements HttpInterceptor{

  constructor(
    private basicAuthenticationService : BasicAuthenticationService
  ) { }

  intercept(request: HttpRequest<any>, next: HttpHandler){
    // let username = 'in28minutes'
    // let password = 'dummy'
    //let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);
    let basicAuthHeaderString = this.basicAuthenticationService.getAuthenticatedToken();
    let username = this.basicAuthenticationService.getAuthenticatedUser()

    if(basicAuthHeaderString && username) { 
      request = request.clone({
        setHeaders : {
            Authorization : basicAuthHeaderString
          }
        }) 
    }
    return next.handle(request);
  }


}
```
---

### /frontend/todo/src/app/service/route-guard.service.ts

```
import { HardcodedAuthenticationService } from './hardcoded-authentication.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanActivate {

  constructor(
    private hardcodedAuthenticationService: HardcodedAuthenticationService,
    private router: Router) {

  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

    if (this.hardcodedAuthenticationService.isUserLoggedIn())
      return true;

    this.router.navigate(['login']);

    return false;
  }
}
```
---

### /frontend/todo/src/app/todo/todo.component.css

```css
.ng-invalid:not(form) {
    border-left: 5px solid red;
}
```
---

### /frontend/todo/src/app/todo/todo.component.html

```html
<H1>Todo</H1>

<div class="container">
  <div class="alert alert-warning" *ngIf="todoForm.dirty && todoForm.invalid">Enter valid values</div>
  <div class="alert alert-warning" *ngIf="todoForm.dirty && targetDate.invalid">Enter valid Target Date</div>
  <div class="alert alert-warning" *ngIf="todoForm.dirty && description.invalid">Enter atleast 5 characters in Description</div>
  
  <form (ngSubmit)="!todoForm.invalid && saveTodo()" #todoForm="ngForm">
    <fieldset class="form-group">
      <label>Description</label>
      <input type="text" #description="ngModel" 
            [(ngModel)]="todo.description" class="form-control" 
                name="description" required="required" minlength="5">
    </fieldset>

    <fieldset class="form-group">
        <label>Target Date</label>
        <input type="date" #targetDate="ngModel"
        [ngModel]="todo.targetDate | date:'yyyy-MM-dd' "
        (ngModelChange)="todo.targetDate = $event"
        class="form-control" name="targetDate" required="required" >
    </fieldset>

    <button type="submit" class="btn btn-success">Save</button>
  </form>  
</div>
```
---

### /frontend/todo/src/app/todo/todo.component.ts

```
import { ActivatedRoute, Router } from '@angular/router';
import { TodoDataService } from './../service/data/todo-data.service';
import { Component, OnInit } from '@angular/core';
import { Todo } from '../list-todos/list-todos.component';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  id:number
  todo: Todo

  constructor(
    private todoService: TodoDataService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    
    this.id = this.route.snapshot.params['id'];
    
    this.todo = new Todo(this.id,'',false,new Date());
    
    if(this.id!=-1) {
      this.todoService.retrieveTodo('in28minutes', this.id)
          .subscribe (
            data => this.todo = data
          )
    }
  }

  saveTodo() {
    if(this.id == -1) { //=== ==
      this.todoService.createTodo('in28minutes', this.todo)
          .subscribe (
            data => {
              console.log(data)
              this.router.navigate(['todos'])
            }
          )
    } else {
      this.todoService.updateTodo('in28minutes', this.id, this.todo)
          .subscribe (
            data => {
              console.log(data)
              this.router.navigate(['todos'])
            }
          )
    }
  }

}
```
---

### /frontend/todo/src/app/welcome/welcome.component.css

```css
```
---

### /frontend/todo/src/app/welcome/welcome.component.html

```html
<H1>Welcome!</H1>

<div class="container">
  Welcome {{name}}. You can manage your todos <a routerLink="/todos">here</a>
</div>

<div class="container">
  Click here to get a customized welcome message 
  <button (click)="getWelcomeMessageWithParameter()" class="btn btn-success">Get Welcome Message</button>
</div>

<div class="container" *ngIf="welcomeMessageFromService">
    <H2>Your Customized Welcome Message</H2>
    {{welcomeMessageFromService}}
  </div>
```
---

### /frontend/todo/src/app/welcome/welcome.component.ts

```
import { WelcomeDataService } from './../service/data/welcome-data.service';
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
  welcomeMessageFromService:string
  name = ''
  //String message = "Some Welcome Message"
  
  //public SpringBootFirstWebApplication() {	

  //ActivatedRoute
  constructor(
    private route:ActivatedRoute,
    private service:WelcomeDataService) { 

  }

  // void init() {
  ngOnInit(){
    //COMPILATION ERROR this.message = 5
    //console.log(this.message)
    // console.log(this.route.snapshot.params['name'])
    this.name = this.route.snapshot.params['name'];
    
  }

  getWelcomeMessage() {
    //console.log(this.service.executeHelloWorldBeanService());
    
    this.service.executeHelloWorldBeanService().subscribe(
      response => this.handleSuccessfulResponse(response),
      error => this.handleErrorResponse(error)
    );
    
    //console.log('last line of getWelcomeMessage')

    //console.log("get welcome message");
  }

  getWelcomeMessageWithParameter() {
    //console.log(this.service.executeHelloWorldBeanService());
    
    this.service.executeHelloWorldServiceWithPathVariable(this.name).subscribe(
      response => this.handleSuccessfulResponse(response),
      error => this.handleErrorResponse(error)
    );
    
    //console.log('last line of getWelcomeMessage')

    //console.log("get welcome message");
  }


  handleSuccessfulResponse(response){
    this.welcomeMessageFromService = response.message
    //console.log(response);
    //console.log(response.message);
  }

  handleErrorResponse(error) {
    //console.log(error);
    //console.log(error.error);
    //console.log(error.error.message);
    this.welcomeMessageFromService = error.error.message
  }
}

export class Class1 {

}

export class Class2 {
  
}
```
---

### /frontend/todo/src/browserslist

```
# This file is currently used by autoprefixer to adjust CSS to support the below specified browsers
# For additional information regarding the format and rule options, please see:
# https://github.com/browserslist/browserslist#queries
#
# For IE 9-11 support, please remove 'not' from the last line of the file and adjust as needed

> 0.5%
last 2 versions
Firefox ESR
not dead
not IE 9-11
```
---

### /frontend/todo/src/environments/environment.prod.ts

```
export const environment = {
  production: true
};
```
---

### /frontend/todo/src/environments/environment.ts

```
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
```
---

### /frontend/todo/src/index.html

```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>My Todos Application</title>
  <base href="/">

  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="icon" type="image/x-icon" href="favicon.ico">
</head>
<body>
  <app-root></app-root>
  <!-- <div>Index HTML Content</div> -->
</body>
</html>
```
---

### /frontend/todo/src/karma.conf.js

```js
// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', '@angular-devkit/build-angular'],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-coverage-istanbul-reporter'),
      require('@angular-devkit/build-angular/plugins/karma')
    ],
    client: {
      clearContext: false // leave Jasmine Spec Runner output visible in browser
    },
    coverageIstanbulReporter: {
      dir: require('path').join(__dirname, '../coverage'),
      reports: ['html', 'lcovonly'],
      fixWebpackSourcePaths: true
    },
    reporters: ['progress', 'kjhtml'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false
  });
};
```
---

### /frontend/todo/src/main.ts

```
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
```
---

### /frontend/todo/src/polyfills.ts

```
/**
 * This file includes polyfills needed by Angular and is loaded before the app.
 * You can add your own extra polyfills to this file.
 *
 * This file is divided into 2 sections:
 *   1. Browser polyfills. These are applied before loading ZoneJS and are sorted by browsers.
 *   2. Application imports. Files imported after ZoneJS that should be loaded before your main
 *      file.
 *
 * The current setup is for so-called "evergreen" browsers; the last versions of browsers that
 * automatically update themselves. This includes Safari >= 10, Chrome >= 55 (including Opera),
 * Edge >= 13 on the desktop, and iOS 10 and Chrome on mobile.
 *
 * Learn more in https://angular.io/guide/browser-support
 */

/***************************************************************************************************
 * BROWSER POLYFILLS
 */

/** IE9, IE10 and IE11 requires all of the following polyfills. **/
// import 'core-js/es6/symbol';
// import 'core-js/es6/object';
// import 'core-js/es6/function';
// import 'core-js/es6/parse-int';
// import 'core-js/es6/parse-float';
// import 'core-js/es6/number';
// import 'core-js/es6/math';
// import 'core-js/es6/string';
// import 'core-js/es6/date';
// import 'core-js/es6/array';
// import 'core-js/es6/regexp';
// import 'core-js/es6/map';
// import 'core-js/es6/weak-map';
// import 'core-js/es6/set';

/**
 * If the application will be indexed by Google Search, the following is required.
 * Googlebot uses a renderer based on Chrome 41.
 * https://developers.google.com/search/docs/guides/rendering
 **/
// import 'core-js/es6/array';

/** IE10 and IE11 requires the following for NgClass support on SVG elements */
// import 'classlist.js';  // Run `npm install --save classlist.js`.

/** IE10 and IE11 requires the following for the Reflect API. */
// import 'core-js/es6/reflect';

/**
 * Web Animations `@angular/platform-browser/animations`
 * Only required if AnimationBuilder is used within the application and using IE/Edge or Safari.
 * Standard animation support in Angular DOES NOT require any polyfills (as of Angular 6.0).
 **/
// import 'web-animations-js';  // Run `npm install --save web-animations-js`.

/**
 * By default, zone.js will patch all possible macroTask and DomEvents
 * user can disable parts of macroTask/DomEvents patch by setting following flags
 */

 // (window as any).__Zone_disable_requestAnimationFrame = true; // disable patch requestAnimationFrame
 // (window as any).__Zone_disable_on_property = true; // disable patch onProperty such as onclick
 // (window as any).__zone_symbol__BLACK_LISTED_EVENTS = ['scroll', 'mousemove']; // disable patch specified eventNames

 /*
 * in IE/Edge developer tools, the addEventListener will also be wrapped by zone.js
 * with the following flag, it will bypass `zone.js` patch for IE/Edge
 */
// (window as any).__Zone_enable_cross_context_check = true;

/***************************************************************************************************
 * Zone JS is required by default for Angular itself.
 */
import 'zone.js/dist/zone';  // Included with Angular CLI.


/***************************************************************************************************
 * APPLICATION IMPORTS
 */
```
---

### /frontend/todo/src/styles.css

```css
/* You can add global styles to this file, and also import other style files */
@import url(https://unpkg.com/bootstrap@4.1.0/dist/css/bootstrap.min.css)
```
---

### /frontend/todo/src/test.ts

```
// This file is required by karma.conf.js and loads recursively all the .spec and framework files

import 'zone.js/dist/zone-testing';
import { getTestBed } from '@angular/core/testing';
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting
} from '@angular/platform-browser-dynamic/testing';

declare const require: any;

// First, initialize the Angular testing environment.
getTestBed().initTestEnvironment(
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting()
);
// Then we find all the tests.
const context = require.context('./', true, /\.spec\.ts$/);
// And load the modules.
context.keys().map(context);
```
---

### /frontend/todo/src/todos.txt

```
- <script type="text/javascript" src="runtime.js">
</script><script type="text/javascript" src="polyfills.js"></script><script type="text/javascript" src="styles.js">
</script><script type="text/javascript" src="vendor.js"></script><script type="text/javascript" src="main.js"></script>
```
---

### /frontend/todo/angular.json

```json
{
  "$schema": "./node_modules/@angular/cli/lib/config/schema.json",
  "version": 1,
  "newProjectRoot": "projects",
  "projects": {
    "todo": {
      "root": "",
      "sourceRoot": "src",
      "projectType": "application",
      "prefix": "app",
      "schematics": {},
      "architect": {
        "build": {
          "builder": "@angular-devkit/build-angular:browser",
          "options": {
            "outputPath": "dist/todo",
            "index": "src/index.html",
            "main": "src/main.ts",
            "polyfills": "src/polyfills.ts",
            "tsConfig": "src/tsconfig.app.json",
            "assets": [
              "src/favicon.ico",
              "src/assets"
            ],
            "styles": [
              "src/styles.css"
            ],
            "scripts": []
          },
          "configurations": {
            "production": {
              "fileReplacements": [
                {
                  "replace": "src/environments/environment.ts",
                  "with": "src/environments/environment.prod.ts"
                }
              ],
              "optimization": true,
              "outputHashing": "all",
              "sourceMap": false,
              "extractCss": true,
              "namedChunks": false,
              "aot": true,
              "extractLicenses": true,
              "vendorChunk": false,
              "buildOptimizer": true,
              "budgets": [
                {
                  "type": "initial",
                  "maximumWarning": "2mb",
                  "maximumError": "5mb"
                }
              ]
            }
          }
        },
        "serve": {
          "builder": "@angular-devkit/build-angular:dev-server",
          "options": {
            "browserTarget": "todo:build"
          },
          "configurations": {
            "production": {
              "browserTarget": "todo:build:production"
            }
          }
        },
        "extract-i18n": {
          "builder": "@angular-devkit/build-angular:extract-i18n",
          "options": {
            "browserTarget": "todo:build"
          }
        },
        "test": {
          "builder": "@angular-devkit/build-angular:karma",
          "options": {
            "main": "src/test.ts",
            "polyfills": "src/polyfills.ts",
            "tsConfig": "src/tsconfig.spec.json",
            "karmaConfig": "src/karma.conf.js",
            "styles": [
              "src/styles.css"
            ],
            "scripts": [],
            "assets": [
              "src/favicon.ico",
              "src/assets"
            ]
          }
        },
        "lint": {
          "builder": "@angular-devkit/build-angular:tslint",
          "options": {
            "tsConfig": [
              "src/tsconfig.app.json",
              "src/tsconfig.spec.json"
            ],
            "exclude": [
              "**/node_modules/**"
            ]
          }
        }
      }
    },
    "todo-e2e": {
      "root": "e2e/",
      "projectType": "application",
      "prefix": "",
      "architect": {
        "e2e": {
          "builder": "@angular-devkit/build-angular:protractor",
          "options": {
            "protractorConfig": "e2e/protractor.conf.js",
            "devServerTarget": "todo:serve"
          },
          "configurations": {
            "production": {
              "devServerTarget": "todo:serve:production"
            }
          }
        },
        "lint": {
          "builder": "@angular-devkit/build-angular:tslint",
          "options": {
            "tsConfig": "e2e/tsconfig.e2e.json",
            "exclude": [
              "**/node_modules/**"
            ]
          }
        }
      }
    }
  },
  "defaultProject": "todo"
}
```
---

### /frontend/todo/package.json

```json
{
  "name": "todo",
  "version": "0.0.0",
  "scripts": {
    "ng": "ng",
    "start": "ng serve",
    "build": "ng build",
    "test": "ng test",
    "lint": "ng lint",
    "e2e": "ng e2e"
  },
  "private": true,
  "dependencies": {
    "@angular/animations": "~7.0.0",
    "@angular/common": "~7.0.0",
    "@angular/compiler": "~7.0.0",
    "@angular/core": "~7.0.0",
    "@angular/forms": "~7.0.0",
    "@angular/http": "~7.0.0",
    "@angular/platform-browser": "~7.0.0",
    "@angular/platform-browser-dynamic": "~7.0.0",
    "@angular/router": "~7.0.0",
    "core-js": "^2.5.4",
    "rxjs": "~6.3.3",
    "zone.js": "~0.8.26"
  },
  "devDependencies": {
    "@angular-devkit/build-angular": "~0.10.0",
    "@angular/cli": "~7.0.3",
    "@angular/compiler-cli": "~7.0.0",
    "@angular/language-service": "~7.0.0",
    "@types/node": "~8.9.4",
    "@types/jasmine": "~2.8.8",
    "@types/jasminewd2": "~2.0.3",
    "codelyzer": "~4.5.0",
    "jasmine-core": "~2.99.1",
    "jasmine-spec-reporter": "~4.2.1",
    "karma": "~3.0.0",
    "karma-chrome-launcher": "~2.2.0",
    "karma-coverage-istanbul-reporter": "~2.0.1",
    "karma-jasmine": "~1.1.2",
    "karma-jasmine-html-reporter": "^0.2.2",
    "protractor": "~5.4.0",
    "ts-node": "~7.0.0",
    "tslint": "~5.11.0",
    "typescript": "~3.1.1"
  }
}
```
---

### /jpa-diff.txt

```
diff --git a/frontend/todo/src/app/app.constants.ts b/frontend/todo/src/app/app.constants.ts
index b01b800..bfb0231 100644
--- a/frontend/todo/src/app/app.constants.ts
+++ b/frontend/todo/src/app/app.constants.ts
@@ -1 +1,2 @@
-export const API_URL = "http://localhost:8080"
\ No newline at end of file
+export const API_URL = "http://localhost:8080"
+export const TODO_API_URL = "http://localhost:8080/jpa"
\ No newline at end of file
diff --git a/frontend/todo/src/app/service/data/todo-data.service.ts b/frontend/todo/src/app/service/data/todo-data.service.ts
index 3fa923f..9c276e2 100644
--- a/frontend/todo/src/app/service/data/todo-data.service.ts
+++ b/frontend/todo/src/app/service/data/todo-data.service.ts
@@ -1,4 +1,4 @@
-import { API_URL } from './../../app.constants';
+import { TODO_API_URL } from './../../app.constants';
 import { HttpClient } from '@angular/common/http';
 import { Injectable } from '@angular/core';
 import { Todo } from '../../list-todos/list-todos.component';
@@ -13,27 +13,27 @@ export class TodoDataService {
   ) { }
 
   retrieveAllTodos(username) {
-    return this.http.get<Todo[]>(`${API_URL}/users/${username}/todos`);
+    return this.http.get<Todo[]>(`${TODO_API_URL}/users/${username}/todos`);
     //console.log("Execute Hello World Bean Service")
   }
 
   deleteTodo(username, id){
-    return this.http.delete(`${API_URL}/users/${username}/todos/${id}`);
+    return this.http.delete(`${TODO_API_URL}/users/${username}/todos/${id}`);
   }
 
   retrieveTodo(username, id){
-    return this.http.get<Todo>(`${API_URL}/users/${username}/todos/${id}`);
+    return this.http.get<Todo>(`${TODO_API_URL}/users/${username}/todos/${id}`);
   }
 
   updateTodo(username, id, todo){
     return this.http.put(
-          `${API_URL}/users/${username}/todos/${id}`
+          `${TODO_API_URL}/users/${username}/todos/${id}`
                 , todo);
   }
 
   createTodo(username, todo){
     return this.http.post(
-              `${API_URL}/users/${username}/todos`
+              `${TODO_API_URL}/users/${username}/todos`
                 , todo);
   }
 
diff --git a/frontend/todo/src/app/todo/todo.component.ts b/frontend/todo/src/app/todo/todo.component.ts
index 7dc47bc..b0c1994 100644
--- a/frontend/todo/src/app/todo/todo.component.ts
+++ b/frontend/todo/src/app/todo/todo.component.ts
@@ -34,7 +34,9 @@ export class TodoComponent implements OnInit {
   }
 
   saveTodo() {
-    if(this.id === -1) {
+    console.log(this.id);
+    if(this.id == -1) {
+      console.log('Calling Update')
       this.todoService.createTodo('in28minutes', this.todo)
           .subscribe (
             data => {
diff --git a/restful-web-services/src/main/java/com/in28minutes/rest/webservices/restfulwebservices/todo/Todo.java b/restful-web-services/src/main/java/com/in28minutes/rest/webservices/restfulwebservices/todo/Todo.java
index e209d05..f83568a 100644
--- a/restful-web-services/src/main/java/com/in28minutes/rest/webservices/restfulwebservices/todo/Todo.java
+++ b/restful-web-services/src/main/java/com/in28minutes/rest/webservices/restfulwebservices/todo/Todo.java
@@ -2,8 +2,16 @@ package com.in28minutes.rest.webservices.restfulwebservices.todo;
 
 import java.util.Date;
 
+import javax.persistence.Entity;
+import javax.persistence.GeneratedValue;
+import javax.persistence.Id;
+
+@Entity
 public class Todo {
-	private long id;
+	
+	@Id
+	@GeneratedValue
+	private Long id;
 	private String username;
 	private String description;
 	private Date targetDate;
@@ -22,11 +30,11 @@ public class Todo {
 		this.isDone = isDone;
 	}
 
-	public long getId() {
+	public Long getId() {
 		return id;
 	}
 
-	public void setId(long id) {
+	public void setId(Long id) {
 		this.id = id;
 	}
 
diff --git a/restful-web-services/src/main/java/com/in28minutes/rest/webservices/restfulwebservices/todo/TodoHardcodedService.java b/restful-web-services/src/main/java/com/in28minutes/rest/webservices/restfulwebservices/todo/TodoHardcodedService.java
index 3e89570..f47b31f 100644
--- a/restful-web-services/src/main/java/com/in28minutes/rest/webservices/restfulwebservices/todo/TodoHardcodedService.java
+++ b/restful-web-services/src/main/java/com/in28minutes/rest/webservices/restfulwebservices/todo/TodoHardcodedService.java
@@ -11,7 +11,7 @@ import org.springframework.stereotype.Service;
 public class TodoHardcodedService {
 	
 	private static List<Todo> todos = new ArrayList<>();
-	private static int idCounter = 0;
+	private static long idCounter = 0;
 	
 	static {
 		todos.add(new Todo(++idCounter, "in28minutes","Learn to Dance 2", new Date(), false ));
diff --git a/restful-web-services/src/main/java/com/in28minutes/rest/webservices/restfulwebservices/todo/TodoResource.java b/restful-web-services/src/main/java/com/in28minutes/rest/webservices/restfulwebservices/todo/TodoResource.java
index ee390e6..111038f 100644
--- a/restful-web-services/src/main/java/com/in28minutes/rest/webservices/restfulwebservices/todo/TodoResource.java
+++ b/restful-web-services/src/main/java/com/in28minutes/rest/webservices/restfulwebservices/todo/TodoResource.java
@@ -16,57 +16,62 @@ import org.springframework.web.bind.annotation.RequestBody;
 import org.springframework.web.bind.annotation.RestController;
 import org.springframework.web.servlet.support.ServletUriComponentsBuilder;
 
-import com.in28minutes.rest.webservices.restfulwebservices.todo.Todo;
-
 @CrossOrigin(origins="http://localhost:4200")
 @RestController
 public class TodoResource {
 	
 	@Autowired
 	private TodoHardcodedService todoService;
+
+	@Autowired
+	private TodoRepository todoRepository;
+
 	
-	@GetMapping("/users/{username}/todos")
+	@GetMapping("/jpa/users/{username}/todos")
 	public List<Todo> getAllTodos(@PathVariable String username){
-		return todoService.findAll();
+		return todoRepository.findByUsername(username);
 	}
 
-	@GetMapping("/users/{username}/todos/{id}")
+	@GetMapping("/jpa/users/{username}/todos/{id}")
 	public Todo getTodo(@PathVariable String username, @PathVariable long id){
-		return todoService.findById(id);
+		return todoRepository.findById(id).get();
 	}
 
 	//DELETE /users/{username}/todos/{id}
-	@DeleteMapping("/users/{username}/todos/{id}")
+	@DeleteMapping("/jpa/users/{username}/todos/{id}")
 	public ResponseEntity<Void> deleteTodo(
 			@PathVariable String username, @PathVariable long id){
 		
-		Todo todo = todoService.deleteById(id);
-		
-		if(todo!=null) {
-			return ResponseEntity.noContent().build();
-		}
+		todoRepository.deleteById(id);
+		return ResponseEntity.noContent().build();
 		
-		return ResponseEntity.notFound().build();
+//		if(todo!=null) {
+			
+//		}
+//		
+//		return ResponseEntity.notFound().build();
 	}
 	
 
 	//Edit/Update a Todo
 	//PUT /users/{user_name}/todos/{todo_id}
-	@PutMapping("/users/{username}/todos/{id}")
+	@PutMapping("/jpa/users/{username}/todos/{id}")
 	public ResponseEntity<Todo> updateTodo(
 			@PathVariable String username,
 			@PathVariable long id, @RequestBody Todo todo){
 		
-		Todo todoUpdated = todoService.save(todo);
+		Todo todoUpdated = todoRepository.save(todo);
 		
 		return new ResponseEntity<Todo>(todo, HttpStatus.OK);
 	}
 	
-	@PostMapping("/users/{username}/todos")
+	@PostMapping("/jpa/users/{username}/todos")
 	public ResponseEntity<Void> updateTodo(
 			@PathVariable String username, @RequestBody Todo todo){
+		todo.setId(null);
+		todo.setUsername(username);
 		
-		Todo createdTodo = todoService.save(todo);
+		Todo createdTodo = todoRepository.save(todo);
 		
 		//Location
 		//Get current resource url

package com.in28minutes.rest.webservices.restfulwebservices.todo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TodoRepository extends JpaRepository<Todo, Long>{
  
  List<Todo> findByUsername(String userName);

}

insert into todo(id,username,description,target_date,is_done)
values(10001,'in28minutes','Learn to Dance', sysdate(), false);

insert into todo(id,username,description,target_date,is_done)
values(10002,'in28minutes','Learn about Microservices', sysdate(), false);
```
---

### /restful-web-services/src/main/java/com/in28minutes/rest/basic/auth/AuthenticationBean.java

```java
package com.in28minutes.rest.basic.auth;

public class AuthenticationBean {

	private String message;

	public AuthenticationBean(String message) {
		this.message = message;
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

	@Override
	public String toString() {
		return String.format("HelloWorldBean [message=%s]", message);
	}

}
```
---

### /restful-web-services/src/main/java/com/in28minutes/rest/basic/auth/BasicAuthenticationController.java

```java
package com.in28minutes.rest.basic.auth;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

//Controller
@CrossOrigin(origins="http://localhost:4200")
@RestController
public class BasicAuthenticationController {

	@GetMapping(path = "/basicauth")
	public AuthenticationBean helloWorldBean() {
		//throw new RuntimeException("Some Error has Happened! Contact Support at ***-***");
		return new AuthenticationBean("You are authenticated");
	}	
}
```
---

### /restful-web-services/src/main/java/com/in28minutes/rest/basic/auth/SpringSecurityConfigurationBasicAuth.java

```java
package com.in28minutes.rest.basic.auth;

import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;

@Configuration
@EnableWebSecurity
public class SpringSecurityConfigurationBasicAuth extends WebSecurityConfigurerAdapter{
	
	@Override
	protected void configure(HttpSecurity http) throws Exception {
		http
		.csrf().disable()	
		.authorizeRequests()
		.antMatchers(HttpMethod.OPTIONS,"/**").permitAll()
				.anyRequest().authenticated()
				.and()
			//.formLogin().and()
			.httpBasic();
	}
}
```
---

### /restful-web-services/src/main/java/com/in28minutes/rest/webservices/restfulwebservices/BcryptEncoderTest.java

```java
package com.in28minutes.rest.webservices.restfulwebservices;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

public class BcryptEncoderTest {

	public static void main(String[] args) {
		BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
		
		for(int i=1; i<=10; i++) {
			String encodedString = encoder.encode("password@!23@#!");
			System.out.println(encodedString);
		}
		
		// TODO Auto-generated method stub

	}

}
```
---

### /restful-web-services/src/main/java/com/in28minutes/rest/webservices/restfulwebservices/helloworld/HelloWorldBean.java

```java
package com.in28minutes.rest.webservices.restfulwebservices.helloworld;

public class HelloWorldBean {

	private String message;

	public HelloWorldBean(String message) {
		this.message = message;
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

	@Override
	public String toString() {
		return String.format("HelloWorldBean [message=%s]", message);
	}

}
```
---

### /restful-web-services/src/main/java/com/in28minutes/rest/webservices/restfulwebservices/helloworld/HelloWorldController.java

```java
package com.in28minutes.rest.webservices.restfulwebservices.helloworld;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

//Controller
@CrossOrigin(origins="http://localhost:4200")
@RestController
public class HelloWorldController {

	@GetMapping(path = "/hello-world")
	public String helloWorld() {
		return "Hello World";
	}

	@GetMapping(path = "/hello-world-bean")
	public HelloWorldBean helloWorldBean() {
		//throw new RuntimeException("Some Error has Happened! Contact Support at ***-***");
		return new HelloWorldBean("Hello World - Changed");
	}
	
	///hello-world/path-variable/in28minutes
	@GetMapping(path = "/hello-world/path-variable/{name}")
	public HelloWorldBean helloWorldPathVariable(@PathVariable String name) {
		return new HelloWorldBean(String.format("Hello World, %s", name));
	}
}
```
---

### /restful-web-services/src/main/java/com/in28minutes/rest/webservices/restfulwebservices/jwt/JwtInMemoryUserDetailsService.java

```java
package com.in28minutes.rest.webservices.restfulwebservices.jwt;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class JwtInMemoryUserDetailsService implements UserDetailsService {

	static List<JwtUserDetails> inMemoryUserList = new ArrayList<>();

	static {
		inMemoryUserList.add(new JwtUserDetails(1L, "in28minutes",
				"$2a$10$3zHzb.Npv1hfZbLEU5qsdOju/tk2je6W6PnNnY.c1ujWPcZh4PL6e", "ROLE_USER_2"));
		inMemoryUserList.add(new JwtUserDetails(2L, "ranga",
				"$2a$10$IetbreuU5KihCkDB6/r1DOJO0VyU9lSiBcrMDT.biU7FOt2oqZDPm", "ROLE_USER_2"));
		
		//$2a$10$IetbreuU5KihCkDB6/r1DOJO0VyU9lSiBcrMDT.biU7FOt2oqZDPm
	}

	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		Optional<JwtUserDetails> findFirst = inMemoryUserList.stream()
				.filter(user -> user.getUsername().equals(username)).findFirst();

		if (!findFirst.isPresent()) {
			throw new UsernameNotFoundException(String.format("USER_NOT_FOUND '%s'.", username));
		}

		return findFirst.get();
	}

}
```
---

### /restful-web-services/src/main/java/com/in28minutes/rest/webservices/restfulwebservices/jwt/JwtTokenAuthorizationOncePerRequestFilter.java

```java
package com.in28minutes.rest.webservices.restfulwebservices.jwt;

import java.io.IOException;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import io.jsonwebtoken.ExpiredJwtException;

@Component
public class JwtTokenAuthorizationOncePerRequestFilter extends OncePerRequestFilter {

	private final Logger logger = LoggerFactory.getLogger(this.getClass());

	@Autowired
	private UserDetailsService jwtInMemoryUserDetailsService;

	@Autowired
	private JwtTokenUtil jwtTokenUtil;

	@Value("${jwt.http.request.header}")
	private String tokenHeader;

	@Override
	protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain chain)
			throws ServletException, IOException {
		logger.debug("Authentication Request For '{}'", request.getRequestURL());

		final String requestTokenHeader = request.getHeader(this.tokenHeader);

		String username = null;
		String jwtToken = null;
		if (requestTokenHeader != null && requestTokenHeader.startsWith("Bearer ")) {
			jwtToken = requestTokenHeader.substring(7);
			try {
				username = jwtTokenUtil.getUsernameFromToken(jwtToken);
			} catch (IllegalArgumentException e) {
				logger.error("JWT_TOKEN_UNABLE_TO_GET_USERNAME", e);
			} catch (ExpiredJwtException e) {
				logger.warn("JWT_TOKEN_EXPIRED", e);
			}
		} else {
			logger.warn("JWT_TOKEN_DOES_NOT_START_WITH_BEARER_STRING");
		}

		logger.debug("JWT_TOKEN_USERNAME_VALUE '{}'", username);
		if (username != null && SecurityContextHolder.getContext().getAuthentication() == null) {

			UserDetails userDetails = this.jwtInMemoryUserDetailsService.loadUserByUsername(username);

			if (jwtTokenUtil.validateToken(jwtToken, userDetails)) {
				UsernamePasswordAuthenticationToken usernamePasswordAuthenticationToken = new UsernamePasswordAuthenticationToken(
						userDetails, null, userDetails.getAuthorities());
				usernamePasswordAuthenticationToken
						.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));
				SecurityContextHolder.getContext().setAuthentication(usernamePasswordAuthenticationToken);
			}
		}

		chain.doFilter(request, response);
	}
}
```
---

### /restful-web-services/src/main/java/com/in28minutes/rest/webservices/restfulwebservices/jwt/JwtTokenUtil.java

```java
package com.in28minutes.rest.webservices.restfulwebservices.jwt;

import java.io.Serializable;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import java.util.function.Function;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Clock;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.impl.DefaultClock;

@Component
public class JwtTokenUtil implements Serializable {

	static final String CLAIM_KEY_USERNAME = "sub";
	static final String CLAIM_KEY_CREATED = "iat";
	private static final long serialVersionUID = -3301605591108950415L;
	private Clock clock = DefaultClock.INSTANCE;

	@Value("${jwt.signing.key.secret}")
	private String secret;

	@Value("${jwt.token.expiration.in.seconds}")
	private Long expiration;

	public String getUsernameFromToken(String token) {
		return getClaimFromToken(token, Claims::getSubject);
	}

	public Date getIssuedAtDateFromToken(String token) {
		return getClaimFromToken(token, Claims::getIssuedAt);
	}

	public Date getExpirationDateFromToken(String token) {
		return getClaimFromToken(token, Claims::getExpiration);
	}

	public <T> T getClaimFromToken(String token, Function<Claims, T> claimsResolver) {
		final Claims claims = getAllClaimsFromToken(token);
		return claimsResolver.apply(claims);
	}

	private Claims getAllClaimsFromToken(String token) {
		return Jwts.parser().setSigningKey(secret).parseClaimsJws(token).getBody();
	}

	private Boolean isTokenExpired(String token) {
		final Date expiration = getExpirationDateFromToken(token);
		return expiration.before(clock.now());
	}

	private Boolean ignoreTokenExpiration(String token) {
		// here you specify tokens, for that the expiration is ignored
		return false;
	}

	public String generateToken(UserDetails userDetails) {
		Map<String, Object> claims = new HashMap<>();
		return doGenerateToken(claims, userDetails.getUsername());
	}

	private String doGenerateToken(Map<String, Object> claims, String subject) {
		final Date createdDate = clock.now();
		final Date expirationDate = calculateExpirationDate(createdDate);

		return Jwts.builder().setClaims(claims).setSubject(subject).setIssuedAt(createdDate)
				.setExpiration(expirationDate).signWith(SignatureAlgorithm.HS512, secret).compact();
	}

	public Boolean canTokenBeRefreshed(String token) {
		return (!isTokenExpired(token) || ignoreTokenExpiration(token));
	}

	public String refreshToken(String token) {
		final Date createdDate = clock.now();
		final Date expirationDate = calculateExpirationDate(createdDate);

		final Claims claims = getAllClaimsFromToken(token);
		claims.setIssuedAt(createdDate);
		claims.setExpiration(expirationDate);

		return Jwts.builder().setClaims(claims).signWith(SignatureAlgorithm.HS512, secret).compact();
	}

	public Boolean validateToken(String token, UserDetails userDetails) {
		JwtUserDetails user = (JwtUserDetails) userDetails;
		final String username = getUsernameFromToken(token);
		return (username.equals(user.getUsername()) && !isTokenExpired(token));
	}

	private Date calculateExpirationDate(Date createdDate) {
		return new Date(createdDate.getTime() + expiration * 1000);
	}
}
```
---

### /restful-web-services/src/main/java/com/in28minutes/rest/webservices/restfulwebservices/jwt/JwtUnAuthorizedResponseAuthenticationEntryPoint.java

```java
package com.in28minutes.rest.webservices.restfulwebservices.jwt;

import java.io.IOException;
import java.io.Serializable;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.AuthenticationEntryPoint;
import org.springframework.stereotype.Component;

@Component
public class JwtUnAuthorizedResponseAuthenticationEntryPoint implements AuthenticationEntryPoint, Serializable {

	private static final long serialVersionUID = -8970718410437077606L;

	@Override
	public void commence(HttpServletRequest request, HttpServletResponse response,
			AuthenticationException authException) throws IOException {
		response.sendError(HttpServletResponse.SC_UNAUTHORIZED,
				"You would need to provide the Jwt Token to Access This resource");
	}
}
```
---

### /restful-web-services/src/main/java/com/in28minutes/rest/webservices/restfulwebservices/jwt/JwtUserDetails.java

```java
package com.in28minutes.rest.webservices.restfulwebservices.jwt;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import com.fasterxml.jackson.annotation.JsonIgnore;

public class JwtUserDetails implements UserDetails {

	private static final long serialVersionUID = 5155720064139820502L;

	private final Long id;
	private final String username;
	private final String password;
	private final Collection<? extends GrantedAuthority> authorities;

	public JwtUserDetails(Long id, String username, String password, String role) {
		this.id = id;
		this.username = username;
		this.password = password;

		List<SimpleGrantedAuthority> authorities = new ArrayList<SimpleGrantedAuthority>();
		authorities.add(new SimpleGrantedAuthority(role));

		this.authorities = authorities;
	}

	@JsonIgnore
	public Long getId() {
		return id;
	}

	@Override
	public String getUsername() {
		return username;
	}

	@JsonIgnore
	@Override
	public boolean isAccountNonExpired() {
		return true;
	}

	@JsonIgnore
	@Override
	public boolean isAccountNonLocked() {
		return true;
	}

	@JsonIgnore
	@Override
	public boolean isCredentialsNonExpired() {
		return true;
	}

	@JsonIgnore
	@Override
	public String getPassword() {
		return password;
	}

	@Override
	public Collection<? extends GrantedAuthority> getAuthorities() {
		return authorities;
	}

	@Override
	public boolean isEnabled() {
		return true;
	}

}
```
---

### /restful-web-services/src/main/java/com/in28minutes/rest/webservices/restfulwebservices/jwt/JWTWebSecurityConfig.java

```java
package com.in28minutes.rest.webservices.restfulwebservices.jwt;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.builders.WebSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

@Configuration
@EnableWebSecurity
@EnableGlobalMethodSecurity(prePostEnabled = true)
public class JWTWebSecurityConfig extends WebSecurityConfigurerAdapter {

	@Autowired
	private JwtUnAuthorizedResponseAuthenticationEntryPoint jwtUnAuthorizedResponseAuthenticationEntryPoint;

	@Autowired
	private UserDetailsService jwtInMemoryUserDetailsService;

	@Autowired
	private JwtTokenAuthorizationOncePerRequestFilter jwtAuthenticationTokenFilter;

	@Value("${jwt.get.token.uri}")
	private String authenticationPath;

	@Autowired
	public void configureGlobal(AuthenticationManagerBuilder auth) throws Exception {
		auth.userDetailsService(jwtInMemoryUserDetailsService).passwordEncoder(passwordEncoderBean());
	}

	@Bean
	public PasswordEncoder passwordEncoderBean() {
		return new BCryptPasswordEncoder();
	}

	@Bean
	@Override
	public AuthenticationManager authenticationManagerBean() throws Exception {
		return super.authenticationManagerBean();
	}

	@Override
	protected void configure(HttpSecurity httpSecurity) throws Exception {
		httpSecurity.csrf().disable().exceptionHandling()
				.authenticationEntryPoint(jwtUnAuthorizedResponseAuthenticationEntryPoint).and().sessionManagement()
				.sessionCreationPolicy(SessionCreationPolicy.STATELESS).and().authorizeRequests().anyRequest()
				.authenticated();

		httpSecurity.addFilterBefore(jwtAuthenticationTokenFilter, UsernamePasswordAuthenticationFilter.class);

		httpSecurity.headers().frameOptions().sameOrigin() // H2 Console Needs this setting
				.cacheControl(); // disable caching
	}

	@Override
	public void configure(WebSecurity webSecurity) throws Exception {
		webSecurity.ignoring().antMatchers(HttpMethod.POST, authenticationPath)
				.antMatchers(HttpMethod.OPTIONS, "/**")
				.and().ignoring()
				.antMatchers(HttpMethod.GET, "/" // Other Stuff You want to Ignore
				).and().ignoring()
				.antMatchers("/h2-console/**/**");// Should not be done in Production!
	}
}
```
---

### /restful-web-services/src/main/java/com/in28minutes/rest/webservices/restfulwebservices/jwt/resource/AuthenticationException.java

```java
package com.in28minutes.rest.webservices.restfulwebservices.jwt.resource;

public class AuthenticationException extends RuntimeException {
	public AuthenticationException(String message, Throwable cause) {
		super(message, cause);
	}
}
```
---

### /restful-web-services/src/main/java/com/in28minutes/rest/webservices/restfulwebservices/jwt/resource/JwtAuthenticationRestController.java

```java
package com.in28minutes.rest.webservices.restfulwebservices.jwt.resource;

import java.util.Objects;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.DisabledException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.in28minutes.rest.webservices.restfulwebservices.jwt.JwtTokenUtil;
import com.in28minutes.rest.webservices.restfulwebservices.jwt.JwtUserDetails;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class JwtAuthenticationRestController {

	@Value("${jwt.http.request.header}")
	private String tokenHeader;

	@Autowired
	private AuthenticationManager authenticationManager;

	@Autowired
	private JwtTokenUtil jwtTokenUtil;

	@Autowired
	private UserDetailsService jwtInMemoryUserDetailsService;

	@RequestMapping(value = "${jwt.get.token.uri}", method = RequestMethod.POST)
	public ResponseEntity<?> createAuthenticationToken(@RequestBody JwtTokenRequest authenticationRequest)
			throws AuthenticationException {

		authenticate(authenticationRequest.getUsername(), authenticationRequest.getPassword());

		final UserDetails userDetails = jwtInMemoryUserDetailsService
				.loadUserByUsername(authenticationRequest.getUsername());

		final String token = jwtTokenUtil.generateToken(userDetails);

		return ResponseEntity.ok(new JwtTokenResponse(token));
	}

	@RequestMapping(value = "${jwt.refresh.token.uri}", method = RequestMethod.GET)
	public ResponseEntity<?> refreshAndGetAuthenticationToken(HttpServletRequest request) {
		String authToken = request.getHeader(tokenHeader);
		final String token = authToken.substring(7);
		String username = jwtTokenUtil.getUsernameFromToken(token);
		JwtUserDetails user = (JwtUserDetails) jwtInMemoryUserDetailsService.loadUserByUsername(username);

		if (jwtTokenUtil.canTokenBeRefreshed(token)) {
			String refreshedToken = jwtTokenUtil.refreshToken(token);
			return ResponseEntity.ok(new JwtTokenResponse(refreshedToken));
		} else {
			return ResponseEntity.badRequest().body(null);
		}
	}

	@ExceptionHandler({ AuthenticationException.class })
	public ResponseEntity<String> handleAuthenticationException(AuthenticationException e) {
		return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(e.getMessage());
	}

	private void authenticate(String username, String password) {
		Objects.requireNonNull(username);
		Objects.requireNonNull(password);

		try {
			authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(username, password));
		} catch (DisabledException e) {
			throw new AuthenticationException("USER_DISABLED", e);
		} catch (BadCredentialsException e) {
			throw new AuthenticationException("INVALID_CREDENTIALS", e);
		}
	}
}
```
---

### /restful-web-services/src/main/java/com/in28minutes/rest/webservices/restfulwebservices/jwt/resource/JwtTokenRequest.java

```java
package com.in28minutes.rest.webservices.restfulwebservices.jwt.resource;

import java.io.Serializable;

public class JwtTokenRequest implements Serializable {

	private static final long serialVersionUID = -5616176897013108345L;

	private String username;
	private String password;

	public JwtTokenRequest() {
		super();
	}

	public JwtTokenRequest(String username, String password) {
		this.setUsername(username);
		this.setPassword(password);
	}

	public String getUsername() {
		return this.username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return this.password;
	}

	public void setPassword(String password) {
		this.password = password;
	}
}
```
---

### /restful-web-services/src/main/java/com/in28minutes/rest/webservices/restfulwebservices/jwt/resource/JwtTokenResponse.java

```java
package com.in28minutes.rest.webservices.restfulwebservices.jwt.resource;

import java.io.Serializable;

public class JwtTokenResponse implements Serializable {

	private static final long serialVersionUID = 8317676219297719109L;

	private final String token;

	public JwtTokenResponse(String token) {
		this.token = token;
	}

	public String getToken() {
		return this.token;
	}
}
```
---

### /restful-web-services/src/main/java/com/in28minutes/rest/webservices/restfulwebservices/RestfulWebServicesApplication.java

```java
package com.in28minutes.rest.webservices.restfulwebservices;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class RestfulWebServicesApplication {

	public static void main(String[] args) {
		SpringApplication.run(RestfulWebServicesApplication.class, args);
	}
}
```
---

### /restful-web-services/src/main/java/com/in28minutes/rest/webservices/restfulwebservices/todo/Todo.java

```java
package com.in28minutes.rest.webservices.restfulwebservices.todo;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class Todo {
	
	@Id
	@GeneratedValue
	private Long id;
	
	private String username;
	private String description;
	private Date targetDate;
	private boolean isDone;
	
	protected Todo() {
		
	}
	
	public Todo(long id, String username, String description, Date targetDate, boolean isDone) {
		super();
		this.id = id;
		this.username = username;
		this.description = description;
		this.targetDate = targetDate;
		this.isDone = isDone;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public Date getTargetDate() {
		return targetDate;
	}

	public void setTargetDate(Date targetDate) {
		this.targetDate = targetDate;
	}

	public boolean isDone() {
		return isDone;
	}

	public void setDone(boolean isDone) {
		this.isDone = isDone;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + (int) (id ^ (id >>> 32));
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Todo other = (Todo) obj;
		if (id != other.id)
			return false;
		return true;
	}

	
}
```
---

### /restful-web-services/src/main/java/com/in28minutes/rest/webservices/restfulwebservices/todo/TodoHardcodedService.java

```java
package com.in28minutes.rest.webservices.restfulwebservices.todo;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.stereotype.Service;


@Service
public class TodoHardcodedService {
	
	private static List<Todo> todos = new ArrayList<>();
	private static long idCounter = 0;
	
	static {
		todos.add(new Todo(++idCounter, "in28minutes","Learn to Dance 2", new Date(), false ));
		todos.add(new Todo(++idCounter, "in28minutes","Learn about Microservices 2", new Date(), false ));
		todos.add(new Todo(++idCounter, "in28minutes","Learn about Angular", new Date(), false ));
	}
	
	public List<Todo> findAll() {
		return todos;
	}

	public Todo save(Todo todo) {
		if(todo.getId()==-1 || todo.getId()==0) {
			todo.setId(++idCounter);
			todos.add(todo);
		} else {
			deleteById(todo.getId());
			todos.add(todo);
		}
		return todo;
	}
	
	public Todo deleteById(long id) {
		Todo todo = findById(id);
		
		if(todo==null) return null;
		
		if(todos.remove(todo)) {
			return todo;
		}
		
		return null;
	}

	public Todo findById(long id) {
		for(Todo todo:todos) {
			if(todo.getId() == id) {
				return todo;
			}
		}
		
		return null;
	}
	
}
```
---

### /restful-web-services/src/main/java/com/in28minutes/rest/webservices/restfulwebservices/todo/TodoJpaRepository.java

```java
package com.in28minutes.rest.webservices.restfulwebservices.todo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TodoJpaRepository extends JpaRepository<Todo, Long>{
	List<Todo> findByUsername(String username);
}
```
---

### /restful-web-services/src/main/java/com/in28minutes/rest/webservices/restfulwebservices/todo/TodoJpaResource.java

```java
package com.in28minutes.rest.webservices.restfulwebservices.todo;

import java.net.URI;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.in28minutes.rest.webservices.restfulwebservices.todo.Todo;

@CrossOrigin(origins="http://localhost:4200")
@RestController
public class TodoJpaResource {
	
	@Autowired
	private TodoHardcodedService todoService;

	@Autowired
	private TodoJpaRepository todoJpaRepository;

	
	@GetMapping("/jpa/users/{username}/todos")
	public List<Todo> getAllTodos(@PathVariable String username){
		return todoJpaRepository.findByUsername(username);
		//return todoService.findAll();
	}

	@GetMapping("/jpa/users/{username}/todos/{id}")
	public Todo getTodo(@PathVariable String username, @PathVariable long id){
		return todoJpaRepository.findById(id).get();
		//return todoService.findById(id);
	}

	//DELETE /users/{username}/todos/{id}
	@DeleteMapping("/jpa/users/{username}/todos/{id}")
	public ResponseEntity<Void> deleteTodo(
			@PathVariable String username, @PathVariable long id){
		
		//Todo todo = todoService.deleteById(id);
		todoJpaRepository.deleteById(id);
		
		return ResponseEntity.noContent().build();
		//return ResponseEntity.notFound().build();
	}
	

	//Edit/Update a Todo
	//PUT /users/{user_name}/todos/{todo_id}
	@PutMapping("/jpa/users/{username}/todos/{id}")
	public ResponseEntity<Todo> updateTodo(
			@PathVariable String username,
			@PathVariable long id, @RequestBody Todo todo){
		
		//Todo todoUpdated = todoService.save(todo);
		Todo todoUpdated = todoJpaRepository.save(todo);
		
		return new ResponseEntity<Todo>(todo, HttpStatus.OK);
	}
	
	@PostMapping("/jpa/users/{username}/todos")
	public ResponseEntity<Void> createTodo(
			@PathVariable String username, @RequestBody Todo todo){
		
		//Todo createdTodo = todoService.save(todo);
		todo.setUsername(username);
		Todo createdTodo = todoJpaRepository.save(todo);
		
		//Location
		//Get current resource url
		///{id}
		URI uri = ServletUriComponentsBuilder.fromCurrentRequest()
				.path("/{id}").buildAndExpand(createdTodo.getId()).toUri();
		
		return ResponseEntity.created(uri).build();
	}
		
}
```
---

### /restful-web-services/src/main/java/com/in28minutes/rest/webservices/restfulwebservices/todo/TodoResource.java

```java
package com.in28minutes.rest.webservices.restfulwebservices.todo;

import java.net.URI;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.in28minutes.rest.webservices.restfulwebservices.todo.Todo;

@CrossOrigin(origins="http://localhost:4200")
@RestController
public class TodoResource {
	
	@Autowired
	private TodoHardcodedService todoService;
	
	@GetMapping("/users/{username}/todos")
	public List<Todo> getAllTodos(@PathVariable String username){
		return todoService.findAll();
	}

	@GetMapping("/users/{username}/todos/{id}")
	public Todo getTodo(@PathVariable String username, @PathVariable long id){
		return todoService.findById(id);
	}

	//DELETE /users/{username}/todos/{id}
	@DeleteMapping("/users/{username}/todos/{id}")
	public ResponseEntity<Void> deleteTodo(
			@PathVariable String username, @PathVariable long id){
		
		Todo todo = todoService.deleteById(id);
		
		if(todo!=null) {
			return ResponseEntity.noContent().build();
		}
		
		return ResponseEntity.notFound().build();
	}
	

	//Edit/Update a Todo
	//PUT /users/{user_name}/todos/{todo_id}
	@PutMapping("/users/{username}/todos/{id}")
	public ResponseEntity<Todo> updateTodo(
			@PathVariable String username,
			@PathVariable long id, @RequestBody Todo todo){
		
		Todo todoUpdated = todoService.save(todo);
		
		return new ResponseEntity<Todo>(todo, HttpStatus.OK);
	}
	
	@PostMapping("/users/{username}/todos")
	public ResponseEntity<Void> updateTodo(
			@PathVariable String username, @RequestBody Todo todo){
		
		Todo createdTodo = todoService.save(todo);
		
		//Location
		//Get current resource url
		///{id}
		URI uri = ServletUriComponentsBuilder.fromCurrentRequest()
				.path("/{id}").buildAndExpand(createdTodo.getId()).toUri();
		
		return ResponseEntity.created(uri).build();
	}
		
}
```
---

### /restful-web-services/src/main/resources/application.properties

```properties
logging.level.org.springframework = info

#spring.security.user.name=in28minutes
#spring.security.user.password=dummy

jwt.signing.key.secret=mySecret
jwt.get.token.uri=/authenticate
jwt.refresh.token.uri=/refresh
jwt.http.request.header=Authorization
jwt.token.expiration.in.seconds=604800

spring.jpa.show-sql=true
spring.h2.console.enabled=true
```
---

### /restful-web-services/src/main/resources/data.sql

```
insert into todo(id, username,description,target_date,is_done)
values(10001, 'in28minutes', 'Learn JPA', sysdate(), false);

insert into todo(id, username,description,target_date,is_done)
values(10002, 'in28minutes', 'Learn Data JPA', sysdate(), false);

insert into todo(id, username,description,target_date,is_done)
values(10003, 'in28minutes', 'Learn Microservices', sysdate(), false);
```
---

### /restful-web-services/src/test/java/com/in28minutes/rest/webservices/restfulwebservices/RestfulWebServicesApplicationTests.java

```java
package com.in28minutes.rest.webservices.restfulwebservices;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

@RunWith(SpringRunner.class)
@SpringBootTest
public class RestfulWebServicesApplicationTests {

	@Test
	public void contextLoads() {
	}

}
```
---
