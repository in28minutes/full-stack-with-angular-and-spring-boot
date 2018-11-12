# Your First Full Stack Application with Angular and Spring Boot

## Take your first steps towards becoming a Full Stack Developer with Angular and Spring Boot

Angular is a complete front end framework with a wide range of features
- Strong Module System
- Strong Component System
- Forms Handling
- Routing System
- Dependency Injection
- HTTP Requests

Spring Boot is an awesome framework to build RESTful API and Microservices.

In this course, lets combine these awesome frameworks to create your first full stack web application.

# FAQ

## Big Picture
- What is the High Level Architecture of our Full Stack Application?
- What is an SPA?
- What is Angular?

## TypeScript and JavaScript

- TypeScript syntax looks so new. Will I be able to adapt to it? DONE
- How does a JavaScript Class compare to a Java Class? DONE
  - Packages vs Modules
  - import statements
  - Decorator vs Annotation
- What is a JavaScript Module? DONE
- What does TypeScript add on top of JavaScript? DONE
- How does JavaScript Syntax compare to Java Syntax?
  - Arrays - Filtering, Spread Operator and Functional Stuff
  - Custom Objects DONE

## Angular Basics  DONE
- What is Angular Component? DONE
- How is Angular Component implemented? DONE
  - Play with Selector, Template and Styles DONE
- What are the conventions for file extensions in Angular Projects? DONE
- What is Angular Module? Why do we need Modules? What are inbuilt Modules in Angular?
How are they different from JavaScript Modules?  DONE
- How is an Angular Module implemented?  DONE
- How can I use a component which is built into another module?  DONE

## Running Angular Applications
- What is 'ng serve'? What does it enable for developers? DONE
- What is Root Module? What are Bootstrap Components? How is the Angular Application Bootstrapped?  ```\src\index.html```, ```\src\main.ts```, ```AppModule```, ```AppComponent``` DONE
- Do Browsers understand TypeScript? How does TypeScript code get converted to JavaScript code? ```\tsconfig.json```, ```\src\tsconfig.app.json```, ```\src\tsconfig.spec.json```
- What is Bundling? What are runtime.js, polyfills.js, styles.js, vendor.js, main.js? How are they generated? ```\src\main.ts```, ```\src\polyfills.ts```, ```\src\styles.css```, ```\src\**\*.component.css```
- How can I rollback changes made by Angular CLI?
- What are ```angular.json```, ```package.json```, ```\node_modules?  DONE

## Automated Tests and Code Quality
- What are unit tests? How are unit tests organized in Angular? How is different from Java?
- How can you run tests? ```\src\karma.conf.ts```
- How can you learn to write tests for Angular? 
- What are coding standards? How can you check coding standards for Angular Cli Project? What is Lint? What is Linting? Is there a Standard Style Guide for Angular? ```\tslint.json```
- How can I run coding standards check for Angular Projects?
- What are end to end tests? How are end to end tests organized in Angular? How can you run end to end tests? e2e folder
- How can you learn to write end to end tests for Angular?

## Tools
- What is npm?
- What is WebPack?

## Other Angular Topics
- What is Data Binding?
- What are the different kinds of Data Binding?
  - /blog/src/app/basics/basics.component.html
  - Angular Specific Syntax
    - [class.active]="isActive()"
    - [style.font]="determineFont"
- How do you build forms in Angular?
- How do you build various form elements in Angular? 
  - /blog/src/app/box/box.component.html
  - /blog/src/app/form/form.component.html
- How do you implement form validation in Angular
  - /blog/src/app/form/form.component.css 
- What is Routing?
- How do you implement Routing in Angular?
- How do you call HTTP Services in Angular?
- What is Dependency Injection?
- What is a Service?
- What is a Child Component?
  - person-row.component.html, person.component.html
- Where do you store static content in Angular Projects? src\assets folder
- How can you configure environment configuration in Angular Projects? src\environments folder
- How do you create a production deployment? What are the production optimizations that are done? What is Uglification? What is Minification?


## Installation Guides and Getting Started References

### Installing Eclipse & Embedded Maven
- Installation Video : https://www.youtube.com/playlist?list=PLBBog2r6uMCSmMVTW_QmDLyASBvovyAO3
  - Troubleshooting 
    - https://www.youtube.com/watch?v=ZZw8XNz5N-c&list=PLBBog2r6uMCSmMVTW_QmDLyASBvovyAO3&index=5
    - https://github.com/in28minutes/getting-started-in-5-steps#installation--troubleshooting
- GIT Repository For Installation : https://github.com/in28minutes/getting-started-in-5-steps
- PDF : https://github.com/in28minutes/SpringIn28Minutes/blob/master/InstallationGuide-JavaEclipseAndMaven_v2.pdf

### Installing Front End Tools

Rangas-MacBook-Pro:04-10-2018 rangaraokaranam$ node -v
v8.12.0
Rangas-MacBook-Pro:04-10-2018 rangaraokaranam$ npm -v
6.4.1

```
#Global
npm uninstall -g angular-cli
npm cache verify
npm install -g @angular/cli@7.0.3

#Inside the project - If you had an earlier version of angular cli
rm -rf node_modules
npm uninstall --save-dev angular-cli
npm install --save-dev @angular/cli@latest
npm install
```
- Why Visual Studio Code?
  - https://trends.google.com/trends/explore?date=all&q=%2Fm%2F0k2kj45,%2Fm%2F0_x5x3g,%2Fm%2F0134xwrk,%2Fm%2F0b6h18n
- We use Light Theme
- Install
    - Auto Import - Automatically finds, parses and provides code actions and code completion for all available imports. Works with Typescript and TSX
    - Reload to Activate

### Getting Started with Spring, Spring Boot and JPA
- Spring Tutorial for Beginners - https://www.youtube.com/watch?v=edgZo2g-LTM
- Spring Boot Tutorial for Beginners - https://www.youtube.com/watch?v=pcdpk3Yd1EA
- JPA and Hibernate Tutorial for Beginners - https://www.youtube.com/watch?v=MaI0_XdpdP8

## Course Details

### Features
- Welcome Page - Hardcoded Name, Service for Welcome Message
  - HTTP Service
  - handleServiceError(error: HttpErrorResponse)
- Layout
  - Display Menu
  - Display Footer
  - Secured and Unsecured Component using RouteGuardService  implements CanActivate
    - /blog/src/app/secured/secured.component.ts
- Login Page - Hardcoded Name, Hardcoded Logic, Moving Logic to Authentication Service (Use sessionStorage instead of localStorage)
- Logout
- List Todos
- Edit Todos
- Delete Todos
- New Todo
- Connecting Todos to Real Services Step By Step
- Routing from Login to Welcome Page
- Basic Authentication
- BasicHttpInterceptor
- JWT

- All Kinds of Bindings 
  - /blog/src/app/basics/basics.component.html
  - Angular Specific Syntax
    - [class.active]="isActive()"
    - [style.font]="determineFont"
- Child Component
  - person-row.component.html, person.component.html
- Some Logic
  - /blog/src/app/hero/hero.component.html
- Form Elements
  - /blog/src/app/box/box.component.html
  - /blog/src/app/form/form.component.html
  - Validation /blog/src/app/form/form.component.css 

- Have final app and a spring boot app running on different ports!

## Request URLs and Examples

### Common Headers

```
Origin - http://localhost:4200
Content-Type - application/json
Authorization 
- Bearer *** or
- Basic *****
```


### Retrieve all todos for a user 

- GET - http://localhost:8080/users/in28minutes/todos

```
[
  {
    id: 1,
    username: "in28minutes",
    description: "Learn to Dance 2",
    targetDate: "2018-11-09T12:05:18.647+0000",
    done: false,
  },
  {
    id: 2,
    username: "in28minutes",
    description: "Learn about Microservices 2",
    targetDate: "2018-11-09T12:05:18.647+0000",
    done: false,
  },
  {
    id: 3,
    username: "in28minutes",
    description: "Learn about Angular",
    targetDate: "2018-11-09T12:05:18.647+0000",
    done: false,
  },
]
```

### Retrieve a specific todo

- GET - http://localhost:8080/users/in28minutes/todos/1

```
{
  id: 1,
  username: "in28minutes",
  description: "Learn to Dance 2",
  targetDate: "2018-11-09T12:05:18.647+0000",
  done: false,
}
```

### Creating a new todo

- POST to http://localhost:8080/users/in28minutes/todos with BODY of Request given below

```
{
  "username": "in28minutes",
  "description": "Learn to Drive a Car",
  "targetDate": "2018-11-09T10:49:23.566+0000",
  "done": false
}
```

### Updating a new todo

- http://localhost:8080/users/in28minutes/todos/1 with BODY of Request given below

```
{
  "id": 1
  "username": "in28minutes",
  "description": "Learn to Drive a Car",
  "targetDate": "2018-11-09T10:49:23.566+0000",
  "done": false
}
```

### Delete todo

- DELETE to http://localhost:8080/users/in28minutes/todos/1

### JWT Authenticate

- POST to http://localhost:8080/authenticate


```
{
  "username":"ranga",
  "password":"password@!23@#!"
}
```

Response

```
{
"token": "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJyYW5nYSIsImV4cCI6MTU0MjQ3MjA3NCwiaWF0IjoxNTQxODY3Mjc0fQ.kD6UJQyxjSPMzAhoTJRr-Z5UL-FfgsyxbdseWQvk0fLi7eVXAKhBkWfj06SwH43sY_ZWBEeLuxaE09szTboefw"
}
```

Other URLS
- Refresh - http://localhost:8080/authenticate

## Running Examples
- TODO
- Download the zip or clone the Git repository.
- Unzip the zip file (if you downloaded one)
- Open Command Prompt and Change directory (cd) to folder containing pom.xml
- Open Eclipse 
   - File -> Import -> Existing Maven Project -> Navigate to the folder where you unzipped the zip
   - Select the right project
- Choose the Spring Boot Application file (search for file with @SpringBootApplication)
- Right Click on the file and Run as Java Application
- You are all Set
- For help : use our installation guide - https://www.youtube.com/playlist?list=PLBBog2r6uMCSmMVTW_QmDLyASBvovyAO3

## Course Overview

### Introduction
Developing your first application with XYZ Framework is fun.

Introduction to XYZ Framework..

In this course, you will learn the basics developing a Basic Todo Management Application using XYZ Framework.

You will build the application step by step - in more than 25 steps. This course would be a perfect first step as an introduction to XYZ Framework.

You will be using Spring (Dependency Management), Spring MVC, Spring Boot, Spring Security (Authentication and Authorization), BootStrap (Styling Pages), Maven (dependencies management), Eclipse (IDE) and Tomcat Embedded Web Server. We will help you set up each one of these.

### What You will learn

- You will learn to Topic No 1
- You will understand about Topic No 1
- You will develop a great application

##### Examples
- You will learn to design and develop SOAP and RESTful web services with Spring Boot
- You will learn the magic of Spring Boot - Auto Configuration, Spring Initializr and Starter Projects
- You will learn to connect web services to JPA/Hibernate with Spring Boot
- You will understand how to implement Exception Handling, Validation, HATEOAS and filtering for RESTful Web Services.
- You will learn to use a wide variety of Spring Boot Starter Projects - Spring Boot Web, Spring Boot Web Services, Spring Boot Data JPA
- You will learn how to version, monitor (Spring Boot Actuator) and document (Swagger) your RESTful Web Services with Spring Boot
- You will understand the best practices in designing RESTful web services
- You will understand about WSDL, SOAP Header, SOAP Body, SOAP Fault, XSD, JAXB and EndPoint
- You will develop a Todo Management Application step by step with login and logout functionalities
- You will learn to use an Annotation based approach - @RequestParam, @ModelAttribute, @SessionAttributes
- You will understand the basics of developing a Web Application - POST, GET, HTTP, MVC Pattern
- You will learn the basics of JSP, JSTL, EL, Spring Tag Libraries
- You will learn some of the magic of Spring Boot
- You will understand Spring MVC in depth - DispatcherServlet , Model, Controllers and ViewResolver
- You will learn the magic of Spring Boot - Auto Configuration, Spring Initializr and Starter Projects
- You will learn to develop RESTful web services with Spring Boot
- You will learn to develop a Web Application connecting to JPA/Hibernate Step by Step with Spring MVC and Spring Boot
- You will learn to use a wide variety of Spring Boot Starter Projects - Spring Boot Web, Spring Boot Test, Spring Boot Data JPA, Spring Boot Data REST
- You will understand Spring MVC in depth - DispatcherServlet , Model, Controllers and ViewResolver
- You will understand how to make best use of Spring Boot Actuator and Spring Boot Developer Tools
- You will learn how to externalise application configuration using Spring Boot Profiles and Dynamic Configuration
- You will understand and use the embedded servlet container options provided by Spring Boot - Tomcat, Jetty and Undertow
- You will learn to write great Unit and Integration tests using Spring Boot Starter Test

### Requirements
- You should have working knowledge of Java and Annotations. 
- We will help you install Eclipse and get up and running with Maven and Tomcat.

### Step Wise Details
- 01 Step 01: 
- 01 Step 02: 
- 01 Step 03: 
- 01 Step 04: 
- 01 Step 05: 
- 01 Step 06: 
- 01 Step 07: 
- 01 Step 08: 
- 01 Step 09: 
- 01 Step 10: 
- 01 Step 11: 
- 01 Step 12: 
- 01 Step 13: 
- 01 Step 14: 
- 01 Step 15: 
- 01 Step 16: 
- 01 Step 17: 
- 01 Step 18: 
- 01 Step 19: 
- 01 Step 20: 
- 01 Step 21: 
- 01 Step 22: 
- 01 Step 23: 
- 01 Step 24: 
- 01 Step 25: 
- 01 Step 26: 
- 01 Step 27: 
- 01 Step 28: 
- 01 Step 29: 
- 01 Step 30: 
- 01 Step 31: 
- 01 Step 32: 
- 01 Step 33: 
- 01 Step 34: 
- 01 Step 35: 

```sh
for file in *; do mv "${file}" "${file//-/ }"; done
for file in *; do mv "${file}" "${file//   / - }"; done
for file in *; do mv "${file}" "${file//01 Step/Step}"; done
```

### Course Recording Notes

 #### Preview Video
- Welcome to course on *** in ** simple steps.
- I'm Ranga Karanam. I've so and so much experience with ... I've been using this framework for ...
- At in28minutes, we ask one question everyday - How to create more effective courses? All our success - *** students on Udemy and *** subscribers on Youtube - is a result of this pursuit of excellence.
- You will develop *** and *** using ***
- You will  learn the basics like *** and move on to the advanced concepts like ***.
- You will use 
  - ... todo ...
  - Maven for dependency management, building and running the application in tomcat.
  - Eclipse IDE
- All the code for this course and the step by step details are in our Github repository. 
- We have an awesome installation guide to help you install Maven and Eclipse. You are NOT expected to have any experience with Eclipse, Maven, or Tomcat.
- What are we waiting for? Lets have some fun with *** in *** steps. We had a lot of fun creating this course for you and We are confident that you will have a lot of fun. I hope you are as excited as we are to learn more. Go ahead and enroll for the course. Or take a test drive with a free preview. See you in the course.

#### Course Intro Video
- Welcome to this course on ***. We are excited to teach you how to build awesome ***. 
- In this video, we introduce you to the different sections of the course. By the end of the video you should have a clear idea of how to make the best use of the course.
- We have organized this course into 6 different sections. We have designed each section to be independent of each other. That means, you have the flexibility of customizing the course based on your skills and your needs. 
- If you have experience with Spring and Spring Boot, you can skip these sections.
- Lets get a quick overview of each of the sections now:
  - Section I is an one hour introduction to Spring 
  - Section II is an one hour introduction to Spring Boot..
- In summary this is your course. Feel free to create your own path and tailor it to your needs.
- I will see you in the next video where we introduce you to our github repository

#### Overview of the Github Repository
- Welcome Back. In this video, we give you an overview of how our github repository for this course is organized. 
- Github repository for this course is at ****.
- Home page of the github repository has an overview of the course and installation guide
- For each hands-on section of the course, we have a seperate folder in the repository. You can see these five folders for *** different sections
  - Folder 1 contains ...
  - Folder 2 contains ...
  - Folder 3 contains ...
- Each of these folders contain
  - Step by Step details of the sections
  - Complete code example at the end of the section
  - Intermediate backups at different stages of the section
  - Useful Links
- For example, let's look at the folder for ***. Home page of the folder contains
  - Step by step details : What are we going to do in each step
  - Useful Links : Different links that would be useful during the course
  - Complete Code, Snippets and Examples : Example code that your can use during the section. For example, If you are using a class and you do not know the package of the class, you can search here and quickly find what you would need.
  - Intermediate Backups : You can download any of these zips and import them into Eclipse as maven projects. File > Import > Existing Maven Projects.
  - Understanding our github repository is key part of making best use of this course. I recommend to spend some time with our github repository and I will see you in the next video.

#### Installation of Tools Video
- In this video, we will help you install all the basic tools to get you started with the course
- We use 
  - Maven for Dependency Management
  - Eclipse as IDE
  - ..
- Step by step details to install Java, Eclipse and Maven are in the installation guide present here. Also included are links to 5 videos that will help you to install and trouble shoot installations.
- If you have any problems during the course, we recommend you to look at the troubleshooting section of the installation playlist.
- Get your tools ready and I will see you in the course

#### Each Section Introduction
- Why is this section important to the course?
-  What is discussed in this section?
- What is the github folder for this section?
- Can a student skip this sections?
- Is there a trouble shooting guide?
- What are the backups available?
- Are examples in this section dependent on any other section?

#### Conclusion Video
- Congratulations! You have successfully completed the course on ... We covered a wide range of topics starting from Spring, Spring Boot to ..... I'm sure you had a lot of fun doing this course. If you loved this course, we would love to hear from you. Do not forget to leave us a review. Until we see you in another in28minutes course, here's bye from the team here at in28minutes.
- To find out more about *** use these References  

## Templates

### Welcome Message
```

## ADD A FEW SAMPLE REVIEWS AFter a couple of months
## ADD A FEW SAMPLE REVIEWS - in the description of the course 

Congratulations on joining this course from in28Minutes. 

We have 14,000+ 5 Star reviews on our courses.  

I hope that by the time you are prompted to leave a review, that you think this course is an amazing course and can write a few sentences about what you like about the course for future students to see.

There are three things you need to understand before you start this course!

1...... Listen + See + Do Hands-on + Repeat = 90% Retention
For the first 2 hours, we repeat a few concepts to help you retain them. .

2...... Set Yourself a Goal
Set 1 hour aside every day for the next week for this course! No exceptions allowed :) 

3...... Udemy asks you for a review very early in the course! If you are not ready for giving a review, you can skip giving a review.

Thank you and enjoy the course,
Ranga
```

### Thank You for completing the course message

```
Congratulations on completing the course from in28Minutes.

We have 14,000+ 5 Star reviews on our courses. We hope you think this course is an amazing course and can write a few sentences about what you like about the course for future students to see.

Good Luck for your future.

Ranga from in28Minutes
```

### Bonus Lectures  

TITLE : Bonus Lecture : Coupons for My Best-Selling Courses -30 Day Money Back Guarantee

```
I hope you enjoyed it! 

Connect and share your success (Course Completion Certificate) on Linked In - https://www.linkedin.com/in/rangakaranam/

Here are coupons for many of my best-selling courses. Please click the images/courses below to watch the course video previews (all of these courses have 30-day 100% money back guarantees):

- Copy relevant courses from https://github.com/in28minutes/learn

```

### Other Courses
- 300+ Videos and Courses - https://github.com/in28minutes/learn
- [25 Videos and Articles for Beginners on Spring Boot](http://www.springboottutorial.com/spring-boot-tutorials-for-beginners)

## About in28Minutes
- At in28Minutes, we ask ourselves one question everyday. How do we help you learn effectively - that is more quickly and retain more of what you have learnt?
- We use Problem-Solution based Step-By-Step Hands-on Approach With Practical, Real World Application Examples. 
- Our success on Udemy and Youtube (2 Million Views & 12K Subscribers) speaks volumes about the success of our approach.
- While our primary expertise is on Development, Design & Architecture Java & Related Frameworks (Spring, Struts, Hibernate) we are expanding into the front-end world (Bootstrap, JQuery, Angular JS). 

### Our Beliefs
- Best Courses are interactive and fun.
- Foundations for building high quality applications are best laid down while learning.

### Our Approach
- Problem Solution based Step by Step Hands-on Learning
- Practical, Real World Application Examples.
- We use 80-20 Rule. We discuss 20% things used 80% of time in depth. We touch upon other things briefly equipping you with enough knowledge to find out more on your own. 
- We will be developing a demo application in the course, which could be reused in your projects, saving hours of your effort.
- We love open source and therefore, All our code is open source too and available on Github.

  
### Useful Links
- [Our Website](http://www.in28minutes.com)
- [Facebook](http://facebook.com/in28minutes)
- [Twitter](http://twitter.com/in28minutes)
- [Google Plus](https://plus.google.com/u/3/110861829188024231119)

## Code Snippets

### Todo Service - Business Logic

```java
import java.util.ArrayList;
import java.util.Date;
import java.util.Iterator;
import java.util.List;

import org.springframework.stereotype.Service;

import com.in28minutes.todoservices.Todo;

@Service
public class TodoService {
  private static List<Todo> todos = new ArrayList<Todo>();
  private static long todoCount = 3;

  static {
    todos.add(new Todo(1l, "in28minutes", "Learn Spring MVC", new Date(),
        false));
    todos.add(new Todo(2l, "in28minutes", "Learn Struts", new Date(), false));
    todos.add(new Todo(3l, "in28minutes", "Learn Hibernate", new Date(),
        false));
  }

  public List<Todo> retrieveTodos(String username) {
    List<Todo> filteredTodos = new ArrayList<Todo>();
    for (Todo todo : todos) {
      if (todo.getUsername().equals(username))
        filteredTodos.add(todo);
    }
    return filteredTodos;
  }

  public Todo retrieveTodo(int id) {
    for (Todo todo : todos) {
      if (todo.getId() == id)
        return todo;
    }
    return null;
  }

  public void updateTodo(Todo todo) {
    todos.remove(todo);
    todos.add(todo);
  }

  public Todo addTodo(String name, String desc, Date targetDate,
      boolean isDone) {
    Todo todo = new Todo(++todoCount, name, desc, targetDate, isDone);
    todos.add(todo);
    return todo;
  }

  public void deleteTodo(int id) {
    Iterator<Todo> iterator = todos.iterator();
    while (iterator.hasNext()) {
      Todo todo = iterator.next();
      if (todo.getId() == id) {
        iterator.remove();
      }
    }
  }
}
```

### Core JWT Components

```properties
jwt.signing.key.secret=mySecret
jwt.get.token.uri=/authenticate
jwt.refresh.token.uri=/refresh
jwt.http.request.header=Authorization
jwt.token.expiration.in.seconds=604800
```

```java
package com.in28minutes.todoservices.jwt;

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
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain chain) throws ServletException, IOException {
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
                UsernamePasswordAuthenticationToken usernamePasswordAuthenticationToken = new UsernamePasswordAuthenticationToken(userDetails, null, userDetails.getAuthorities());
                usernamePasswordAuthenticationToken.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));
                SecurityContextHolder.getContext().setAuthentication(usernamePasswordAuthenticationToken);
            }
        }

        chain.doFilter(request, response);
    }
}


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
        auth
            .userDetailsService(jwtInMemoryUserDetailsService)
            .passwordEncoder(passwordEncoderBean());
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
        httpSecurity
            .csrf().disable()
            .exceptionHandling().authenticationEntryPoint(jwtUnAuthorizedResponseAuthenticationEntryPoint).and()
            .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS).and()
            .authorizeRequests()
            .anyRequest().authenticated();

       httpSecurity
            .addFilterBefore(jwtAuthenticationTokenFilter, UsernamePasswordAuthenticationFilter.class);
        
        httpSecurity
            .headers()
            .frameOptions().sameOrigin()  //H2 Console Needs this setting
            .cacheControl(); //disable caching
    }

    @Override
    public void configure(WebSecurity webSecurity) throws Exception {
        webSecurity
            .ignoring()
            .antMatchers(
                HttpMethod.POST,
                authenticationPath
            )
            .antMatchers(HttpMethod.OPTIONS, "/**")
            .and()
            .ignoring()
            .antMatchers(
                HttpMethod.GET,
                "/" //Other Stuff You want to Ignore
            )
            .and()
            .ignoring()
            .antMatchers("/h2-console/**/**");//Should not be done in Production!
    }
}

@RestController
@CrossOrigin(origins="http://localhost:4200")
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

    final UserDetails userDetails = jwtInMemoryUserDetailsService.loadUserByUsername(authenticationRequest.getUsername());

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

public class AuthenticationException extends RuntimeException {
    public AuthenticationException(String message, Throwable cause) {
        super(message, cause);
    }
}

public class  JwtTokenRequest implements Serializable {
  
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
## Connection to MySQL

```
create sequence hibernate_sequence start with 1 increment by 1

create table todo (
    id bigint not null, 
    description varchar(255), 
    is_done boolean not null, 
    target_date timestamp, 
    username varchar(255), 
    primary key (id))

```
---
## Next Steps
- https://angular.io/guide/quickstart
- https://angular.io/tutorial/toh-pt0
- TypeScript > .ts - https://devhints.io/typescript
- (spec-test files)
- JavaScript > https://github.com/mbeaudru/modern-js-cheatsheet#tdz_sample
  - import, decorator
- Component > Root Component
  - Components are the fundamental building blocks of Angular applications. They display data on the screen, listen for user input, and take action based on that input.
- Module > Angular Module (ngModule)
- Routing
- Overall Project Structure and Important Files
  - package.json (packages, dependencies, devDependencies)
- Architecture Picture
  - Angular Modules > Components > Services (Dependency Injection)
  - Printout
- Application Overview - Demo
- Application Overview Architecture = Front End + REST API
- Angular Introduction - https://angular.io/docs Zoomed in
- package.json vs package in java - https://docs.npmjs.com/getting-started/using-a-package.json
- TypeScript 
  - https://learnxinyminutes.com/docs/typescript/
  - http://www.typescriptlang.org/docs/handbook/basic-types.html
  - https://devhints.io/typescript 
- Modern JavaScript 
  - https://github.com/mbeaudru/modern-js-cheatsheet#tdz_sample
  - https://learnxinyminutes.com/docs/javascript/
- Modular JavaScript
  - https://github.com/mjavascript/mastering-modular-javascript/blob/master/chapters/ch01.asciidoc
- Dev vs Prod Configuration
- Deployment
  - Seperate vs Together
  - Deploying to Cloud
- Material Design
- https://javarevisited.blogspot.com/2018/10/the-2018-react-developer-roadmap.html#ixzz5UozFe9Bu
- Connecting to Database
- https://medium.com/coinmonks/everything-you-wanted-to-know-about-package-lock-json-b81911aa8ab8
- https://medium.com/frontend-coach/7-must-have-visual-studio-code-extensions-for-angular-af9c476147fd
- Debugging with Visual Studio Code
  - To debug the client side Angular code, we'll need to install the Debugger for Chrome extension - https://marketplace.visualstudio.com/items?itemName=msjsdiag.debugger-for-chrome
  - Open the Extensions view (⇧⌘X or Ctrl+Shift+X)
  - Type Debugger for Chrome
  - Install
  - Reload
  - Go to the Debug view (⇧⌘D or Ctrl+Shift+D)
  - Click on gear button to create launch.json
  - Choose Chrome from the Select Environment dropdown
  - Set URL to "url": "http://localhost:4200"

launch.json
```json
{
    // Use IntelliSense to learn about possible attributes.
    // Hover to view descriptions of existing attributes.
    // For more information, visit: https://go.microsoft.com/fwlink/?linkid=830387
    "version": "0.2.0",
    "configurations": [
        {
            "type": "chrome",
            "request": "launch",
            "name": "Launch Chrome against localhost",
            "url": "http://localhost:4200",//Line Changed
            "webRoot": "${workspaceFolder}"
        }
    ]
}
```

- https://auth0.com/blog/creating-beautiful-apps-with-angular-material/

```
npm install @angular/material @angular/cdk
<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
npm install @angular/flex-layout rxjs-compat
```


## Diagrams

```

graph architecture {
node[style=filled,color="#59C8DE"]
//node [style=filled,color="#D14D28", fontcolor=white];
rankdir = TB;
node[shape=record]

FRONTEND[label=<Angular Application<BR />
   <FONT POINT-SIZE="9">TypeScript</FONT>>];

REST[label=<RESTFUL API<BR />
   <FONT POINT-SIZE="9">Spring Boot on Java</FONT>>];

DB[label=<Database>];

FRONTEND -- REST -- DB
DB[shape=cylinder]
}


digraph architecture {
node[style=filled,color="#59C8DE"]
//node [style=filled,color="#D14D28", fontcolor=white];
rankdir = TB;
node[shape=record]

FRONTEND[label=<Angular Application<BR />
   <FONT POINT-SIZE="9">TypeScript</FONT>>];

NGMODULE0[label=<Login Angular Module>];

NGMODULE1[label=<Todo Angular Module>];

NGMODULE2[label=<Common Angular Module>];

NGMODULE3[label=<Builtin Angular Modules<BR />
   <FONT POINT-SIZE="9">BrowserModule, FormsModule, HttpClientModule, etc</FONT>>];

NGMODULE3[label=<Builtin Angular Modules<BR />
   <FONT POINT-SIZE="9">BrowserModule, FormsModule, HttpClientModule, etc</FONT>>];

COMPONENT01[label=<Login Component>];
COMPONENT11[label=<List Todo Component>];
COMPONENT12[label=<Todo Component>];

FRONTEND -> NGMODULE0
FRONTEND -> NGMODULE1
FRONTEND -> NGMODULE2
FRONTEND -> NGMODULE3

NGMODULE0 -> COMPONENT01

NGMODULE1 -> COMPONENT11
NGMODULE1 -> COMPONENT12

}

graph architecture {

node[style=filled,color="#59C8DE"]
//node [style=filled,color="#D14D28", fontcolor=white];
rankdir = TB;
node[shape=record]

COMPONENT[label=<Component>];

TEMPLATE[label=<Template<BR />
   <FONT POINT-SIZE="9">HTML .component.html</FONT>>];

STYLE[label=<Style<BR />
   <FONT POINT-SIZE="9">CSS .component.css</FONT>>];

CODE[label=<Code<BR />
   <FONT POINT-SIZE="9">TypeScript  .component.ts</FONT>>];

COMPONENT -- TEMPLATE
COMPONENT -- STYLE
COMPONENT -- CODE
}

digraph architecture {
node[style=filled,color="#59C8DE"]
//node [style=filled,color="#D14D28", fontcolor=white];
rankdir = TB;
node[shape=record]

APP[label=<Angular Application  <BR />
   <FONT POINT-SIZE="9">1</FONT>>];

MODULES[label=<Angular Modules<BR />
   <FONT POINT-SIZE="9">@NgModule 1..N incl. Builtin</FONT>>];

COMPONENTS[label=<Angular Components<BR />
   <FONT POINT-SIZE="9">@Component 0..N</FONT>>];

APP -> MODULES -> COMPONENTS

}

digraph architecture {
node[style=filled,color="#59C8DE"]
//node [style=filled,color="#D14D28", fontcolor=white];
rankdir = LR;
node[shape=record]
COMPONENT[label=<Business Logic <BR />(Component)<BR />
   <FONT POINT-SIZE="10">TypeScript .component.ts</FONT>>];

VIEW[label=<DOM <BR />(HTML/View)>];


//VIEW -> COMPONENT [label=<<FONT POINT-SIZE="25">Event Binding  </FONT> (event)="event handler" >]
//COMPONENT -> VIEW [label=<<FONT POINT-SIZE="25">Interpolation </FONT> {{value}} >]
//COMPONENT -> VIEW [label=<<FONT POINT-SIZE="25">Property Binding  </FONT> [property]=value >]
VIEW -> COMPONENT [label = ""]
COMPONENT -> VIEW  [label=<<FONT POINT-SIZE="25">2 Way Data Binding  </FONT> [(ngModel)]="model.attribute" >]
}   

graph architecture {

node[style=filled,color="#59C8DE"]
//node [style=filled,color="#D14D28", fontcolor=white];
rankdir = TB;
node[shape=record]

Angular -- Basics
Basics -- Components
Basics -- DataBinding
Basics -- Routing
Basics -- Modules
Angular -- Features
Features -- Forms
Features -- RestAPICalls
Features -- DependencyInjection

DependencyInjection[label=<Dependency Injection>]
DataBinding[label=<Data Binding>]
RestAPICalls[label=<Rest API Calls>]
Forms[label=<Forms and Validation>]

}

graph architecture {

node[style=filled,color="#59C8DE"]
//node [style=filled,color="#D14D28", fontcolor=white];
rankdir = TB;
node[shape=record]

Tools[label=<Angular CLI Project>]

Tools -- PackageManagment
Tools -- BuildAndRun
BuildAndRun -- Transpilation
BuildAndRun -- Serve
Tools -- BuildOptimizations
BuildOptimizations -- Bundling
BuildOptimizations -- Minification
BuildOptimizations -- Uglification
Tools -- CodeQuality
CodeQuality -- EditorConfig
CodeQuality -- Lint
Tools -- AutomationTests
AutomationTests -- Karma
AutomationTests -- Protractor

}
  

```
