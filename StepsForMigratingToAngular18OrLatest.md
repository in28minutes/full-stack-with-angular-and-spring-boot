# Migrating to Angular Latest 

### Before Step 04-Creating and Launching Angular Application with Angular CLI 

We have to add text lecture about Angular 18 or latest installation steps using the below link
https://angular.dev/installation

### Step 1: Creating a New Angular Project

```bash
puneethsai@Puneeths-MacBook-Pro frontend % ng new todo
? Which stylesheet format would you like to use? CSS             [ https://developer.mozilla.org/docs/Web/CSS                     ]
? Do you want to enable Server-Side Rendering (SSR) and Static Site Generation (SSG/Prerendering)? no
CREATE todo/README.md (1066 bytes)
CREATE todo/.editorconfig (314 bytes)
CREATE todo/.gitignore (587 bytes)
CREATE todo/angular.json (2582 bytes)
CREATE todo/package.json (1038 bytes)
CREATE todo/tsconfig.json (1012 bytes)
CREATE todo/tsconfig.app.json (424 bytes)
CREATE todo/tsconfig.spec.json (434 bytes)
CREATE todo/.vscode/extensions.json (130 bytes)
CREATE todo/.vscode/launch.json (470 bytes)
CREATE todo/.vscode/tasks.json (938 bytes)
CREATE todo/src/main.ts (250 bytes)
CREATE todo/src/index.html (290 bytes)
CREATE todo/src/styles.css (80 bytes)
CREATE todo/src/app/app.component.css (0 bytes)
CREATE todo/src/app/app.component.html (19903 bytes)
CREATE todo/src/app/app.component.spec.ts (910 bytes)
CREATE todo/src/app/app.component.ts (300 bytes)
CREATE todo/src/app/app.config.ts (310 bytes)
CREATE todo/src/app/app.routes.ts (77 bytes)
CREATE todo/public/favicon.ico (15086 bytes)
✔ Packages installed successfully.
Directory is already under version control. Skipping initialization of git.
```
So when you navigate to todo directory and execute `ng serve` command

```bash
puneethsai@Puneeths-MacBook-Pro frontend % cd todo
puneethsai@Puneeths-MacBook-Pro todo % ng serve

| Initial chunk files | Names         |  Raw size |
| polyfills.js        | polyfills     |  90.20 kB |
| main.js             | main          |  22.63 kB |
| styles.css          | styles        |  95 bytes |

                    | Initial total | 112.93 kB

Application bundle generation complete. [2.367 seconds]
```

Watch mode enabled. Watching for file changes...
```bash
NOTE: Raw file sizes do not reflect development server per-request transformations.
➜  Local:   http://localhost:4200/
➜  press h + enter to show help
```
When you access http://localhost:4200/

### Before 11. Step 06 - Exploring Angular CLI Commands  - test, lint, e2e, serve, build

Add the below text lecture for the `ng lint` command and it will generate `eslint.config.ts` file

```bash
puneethsai@Puneeths-MacBook-Pro todo % ng lint
Cannot find "lint" target for the specified project.
You can add a package that implements these capabilities.

For example:
ESLint: ng add @angular-eslint/schematics

Would you like to add ESLint now? yes
✔ Determining Package Manager
› Using package manager: npm
✔ Searching for compatible package version
› Found compatible package version: @angular-eslint/schematics@18.4.0.
✔ Loading package information from registry
✔ Confirming installation (yes)
✔ Installing package

    All angular-eslint dependencies have been successfully installed 🎉
    
    Please see https://github.com/angular-eslint/angular-eslint for how to add ESLint configuration to your project.
    
    We detected that you have a single project in your workspace and no existing linter wired up, so we are configuring ESLint for you automatically.
    
    Please see https://github.com/angular-eslint/angular-eslint for more information.

CREATE eslint.config.js (969 bytes) // New file created
UPDATE package.json (1152 bytes) // Updated
UPDATE angular.json (2893 bytes) // Updated
✔ Packages installed successfully.

And then again if you execute the below command

puneethsai@Puneeths-MacBook-Pro todo % ng lint

Linting "todo"...

All files pass linting.

For more details: https://angular.dev/cli/lint#
```

ng build command
```bash
puneethsai@Puneeths-MacBook-Pro todo % ng build
Initial chunk files   | Names         |  Raw size | Estimated transfer size
main-PP3UIYB7.js      | main          | 195.03 kB |                51.89 kB
polyfills-FFHMD2TL.js | polyfills     |  34.52 kB |                11.28 kB
styles-5INURTSO.css   | styles        |   0 bytes |                 0 bytes

                      | Initial total | 229.55 kB |                63.17 kB
```
Application bundle generation complete. [8.290 seconds]

Output location: /Users/puneethsai/devworkspace/in28minutes/git/full-stack-with-angular-and-spring-boot/frontend/todo/dist/todo

> ng test command
```bash
puneethsai@Puneeths-MacBook-Pro todo % ng test

TODO insert test KARMA screenshot KarmaTest.png

✔ Browser application bundle generation complete.
09 11 2024 12:19:50.359:WARN [karma]: No captured browser, open http://localhost:9876/
09 11 2024 12:19:50.400:INFO [karma-server]: Karma v6.4.4 server started at http://localhost:9876/
09 11 2024 12:19:50.401:INFO [launcher]: Launching browsers Chrome with concurrency unlimited
09 11 2024 12:19:50.406:INFO [launcher]: Starting browser Chrome
09 11 2024 12:19:52.492:INFO [Chrome 130.0.0.0 (Mac OS 10.15.7)]: Connected on socket vT7qY5kemJjPGUsfAAAB with id 57649941
Chrome 130.0.0.0 (Mac OS 10.15.7): Executed 3 of 3 SUCCESS (0.113 secs / 0.104 secs)
TOTAL: 3 SUCCESS
```
> ng e2e command

The ng e2e command will first check your project for the "e2e" target. If it can't locate it, the CLI will then prompt you which e2e package you would like to use and walk you through the setup.

For more details: https://angular.dev/tools/cli/end-to-end

```bash
puneethsai@Puneeths-MacBook-Pro todo % ng e2e
Cannot find "e2e" target for the specified project.
You can add a package that implements these capabilities.

For example:
Playwright: ng add playwright-ng-schematics
Cypress: ng add @cypress/schematic
Nightwatch: ng add @nightwatch/schematics
WebdriverIO: ng add @wdio/schematics
Puppeteer: ng add @puppeteer/ng-schematics
```bash
Would you like to add a package with "e2e" capabilities now? (Use arrow keys)
❯ No
Playwright
Cypress
Nightwatch
WebdriverIO
Puppeteer
```

> [!NOTE]
> Select No



And then execute ng e2e command again
```bash
puneethsai@Puneeths-MacBook-Pro todo % ng e2e
Passing watch mode to DevServer - watch mode is true
Initial chunk files | Names         |  Raw size
polyfills.js        | polyfills     |  90.20 kB |
main.js             | main          |  16.81 kB |
styles.css          | styles        |  95 bytes |

                    | Initial total | 107.11 kB

Application bundle generation complete. [2.696 seconds]

Watch mode enabled. Watching for file changes...
NOTE: Raw file sizes do not reflect development server per-request transformations.
Re-optimizing dependencies because lockfile has changed
➜  Local:   http://localhost:4200/
➜  press h + enter to show help
It looks like this is your first time using Cypress: 13.15.2

TODO INSERT Cypress Screenshot CypressE2E.png

✔  Verified Cypress! /Users/puneethsai/Library/Caches/Cypress/13.15.2/Cypress.app

Opening Cypress...

DevTools listening on ws://127.0.0.1:54464/devtools/browser/7a35a305-6a5a-49e5-8351-3183da3cf9f8
GraphQL server is running at http://localhost:54465/__launchpad/graphql
2024-11-09 12:35:12.761 Cypress[22886:212612] +[IMKClient subclass]: chose IMKClient_Legacy
2024-11-09 12:35:12.762 Cypress[22886:212612] +[IMKInputSession subclass]: chose IMKInputSession_Legacy
Missing baseUrl in compilerOptions. tsconfig-paths will be skipped
GET /__/ 200 10.419 ms - -
GET /__/assets/index-eZYxlEgS.css 200 4.677 ms - -
GET /__/assets/polyfills-BL2LGzjx.js 200 5.080 ms - -
GET /__/assets/index-DzmIZ6wu.js 200 3.402 ms - -
GET /__cypress/runner/cypress_runner.css 200 7.430 ms - -
GET /__/assets/chevron-right_x16-C0NzP0Uc.js 200 18.515 ms - 773
GET /__/assets/cypress-dark-DCUhv38Q.js 200 17.056 ms - -
GET /__/assets/chevron-right-small_x16-DNJfVAuO.css 200 14.631 ms - 349
GET /__/assets/Tooltip-CBLynKSI.css 200 13.593 ms - -
GET /__/assets/default-Dz8WAUUx.js 200 19.098 ms - -
GET /__/assets/default-Bx50TH87.css 200 36.852 ms - 441
GET /__/assets/InlineCodeFragment-Bk5iKsus.css 200 9.103 ms - 310
GET /__/assets/Index-DViPD26H.css 200 8.101 ms - -
GET /__/assets/cypress-logo_x16-VvOG84bS.js 200 10.360 ms - -
GET /__/assets/chevron-right-small_x16-Ba40Ak2H.js 200 9.107 ms - -
GET /__/assets/status-errored-outline_x16-Cw7pTQ_y.js 200 7.784 ms - -
GET /__/assets/document-text_x16-BBg_PqmF.js 200 8.456 ms - -
GET /__/assets/OpenFileInIDE.vue_vue_type_script_setup_true_lang-RonZnXxR.js 200 8.139 ms - -
GET /__/assets/useRelevantRun-DrB8emJ0.js 200 5.776 ms - -
GET /__/assets/useMarkdown-DJ4dOkai.js 200 6.547 ms - -
GET /__/assets/isWindows-BP8acLFo.js 200 16.852 ms - 274
GET /__/assets/Specs-0OwM-77S.js 200 7.126 ms - 523
GET /__/assets/index.es-CNL69Lvy.js 200 18.468 ms - -
GET /__/assets/route-block-mFfs_uHM.js 200 11.411 ms - 45
GET /__/assets/TrackedBanner.vue_vue_type_script_setup_true_lang-C_vLeE5f.js 200 7.904 ms - -
GET /__/assets/Tooltip.vue_vue_type_style_index_0_lang-B-317xYL.js 200 15.256 ms - -
GET /__/assets/box-open_x48-BSnLHQPA.js 200 12.290 ms - -
GET /__/assets/InlineCodeFragment.vue_vue_type_script_setup_true_lang-DjLnxN_6.js 200 2.816 ms - -
GET /__/assets/Index-D-bSCy2n.js 200 8.918 ms - -
GET /__/assets/graphql-DL37ZlDR.js 200 25.137 ms - 535
GET /__/assets/day-CwAoY86R.js 200 10.088 ms - -
GET /__/assets/SpecPatterns.vue_vue_type_script_setup_true_lang-DVK6ZePx.js 200 37.922 ms - -
GET /__/assets/SpecNameDisplay.vue_vue_type_script_setup_true_lang-CCTVDeic.js 200 26.437 ms - -
GET /__/assets/settings_x16-BjgBuzFA.js 200 8.063 ms - -
GET /__/assets/PromoHeader.vue_vue_type_script_setup_true_lang-DV65uHfV.js 200 10.582 ms - -
GET /__/assets/cypress_s-oVtifuuw.png 200 28.385 ms - 4425
GET /v1/ohttp/hpkekeyconfig?key=AIzaSyBOti4mM-6x9WDnZIjIeyEU21OpBXqWBgw - - ms - -
GET /__cypress/runner/cypress_runner.js 200 5.920 ms - -
POST /ListAccounts?gpsia=1&source=ChromiumBrowser&json=standard 200 2219.120 ms - -
GET /chrome-variations/seed?osname=mac&channel=stable&milestone=130 200 2520.683 ms - -
GET /__cypress/runner/favicon.ico?v2 200 1.138 ms - -
GET /__cypress/assets/favicon.png?v2 404 0.832 ms - 136
GET /v1/pages/ChVDaHJvbWUvMTMwLjAuNjcyMy4xMTcSGQmZ_btOmwfnBhIFDRNQn9Qh6CMDo0InTvA=?alt=proto 200 2183.908 ms - -
POST /v1:GetModels?key=AIzaSyBOti4mM-6x9WDnZIjIeyEU21OpBXqWBgw 200 2218.718 ms - -
GET /downloads?name=1679317318&target=OPTIMIZATION_TARGET_LANGUAGE_DETECTION 200 2061.057 ms - -
GET /downloads?name=1728918182&target=OPTIMIZATION_TARGET_NOTIFICATION_PERMISSION_PREDICTIONS 200 2177.488 ms - -
GET /downloads?name=1673999601&target=OPTIMIZATION_TARGET_PAGE_VISIBILITY 200 2113.658 ms - -
GET /downloads?name=5&target=OPTIMIZATION_TARGET_PAGE_TOPICS_V2 200 4187.061 ms - -
GET /downloads?name=1728918159&target=OPTIMIZATION_TARGET_GEOLOCATION_PERMISSION_PREDICTIONS 200 2243.669 ms - -
GET /__/assets/Switch.vue_vue_type_script_setup_true_lang-DP0ZC_Df.js 200 3.165 ms - -
GET /__/assets/Runner-Chx7wKyU.css 200 3.016 ms - -
GET /__/assets/refresh_x16-CPqYjaJG.js 200 1.517 ms - -
GET /__/assets/Runner-v7PA3d17.js 200 2.926 ms - -
GET /__cypress/iframes/cypress%2Fe2e%2Fspec.cy.ts?browserFamily=chromium 200 24.345 ms - -
GET /__cypress/tests?p=cypress/e2e/spec.cy.ts 200 1114.802 ms - -
GET /__cypress/tests?p=cypress/support/e2e.ts 200 1117.376 ms - -
GET /downloads?name=1696267841&target=OPTIMIZATION_TARGET_OMNIBOX_URL_SCORING 200 2103.820 ms - -
GET / 200 14.916 ms - -
GET /styles.css 200 118.860 ms - -
GET /main.js 200 108.932 ms - -
GET /@vite/client 200 99.431 ms - -
GET /@fs/Users/puneethsai/devworkspace/in28minutes/git/full-stack-with-angular-and-spring-boot/frontend/todo/node_modules/vite/dist/client/env.mjs 200 26.297 ms - -
GET /polyfills.js 200 115.417 ms - -
GET /@fs/Users/puneethsai/devworkspace/in28minutes/git/full-stack-with-angular-and-spring-boot/frontend/todo/.angular/cache/18.2.11/todo/vite/deps/@angular_platform-browser.js?v=a310305d 200 50.572 ms - -
GET /@fs/Users/puneethsai/devworkspace/in28minutes/git/full-stack-with-angular-and-spring-boot/frontend/todo/.angular/cache/18.2.11/todo/vite/deps/@angular_core.js?v=a310305d 200 48.971 ms - -
GET /@fs/Users/puneethsai/devworkspace/in28minutes/git/full-stack-with-angular-and-spring-boot/frontend/todo/.angular/cache/18.2.11/todo/vite/deps/@angular_router.js?v=a310305d 200 48.330 ms - -
GET /v1/pages/ChVDaHJvbWUvMTMwLjAuNjcyMy4xMTcSIAkyWoxKH6I8mBIFDTec3tMSBQ2RYZVOIajlTCMyfr-B?alt=proto 200 2189.226 ms - -
GET /@fs/Users/puneethsai/devworkspace/in28minutes/git/full-stack-with-angular-and-spring-boot/frontend/todo/.angular/cache/18.2.11/todo/vite/deps/chunk-CVIMRY3Y.js?v=d56da52a 200 149.541 ms - -
GET /@fs/Users/puneethsai/devworkspace/in28minutes/git/full-stack-with-angular-and-spring-boot/frontend/todo/.angular/cache/18.2.11/todo/vite/deps/chunk-NRIQAXQZ.js?v=d56da52a 200 158.478 ms - -
GET /downloads?name=1696267841&target=OPTIMIZATION_TARGET_OMNIBOX_URL_SCORING 200 2591.266 ms - -
GET /downloads?name=1696267841&target=OPTIMIZATION_TARGET_OMNIBOX_URL_SCORING 200 2441.345 ms - -
GET /downloads?name=1696267841&target=OPTIMIZATION_TARGET_OMNIBOX_URL_SCORING 200 2085.655 ms - -
GET /downloads?name=1729004809&target=OPTIMIZATION_TARGET_CLIENT_SIDE_PHISHING 200 4267.883 ms - -
GET /downloads?name=1729004809&target=OPTIMIZATION_TARGET_CLIENT_SIDE_PHISHING 200 4996.212 ms - -
GET /downloads?name=1729004809&target=OPTIMIZATION_TARGET_CLIENT_SIDE_PHISHING 200 2076.777 ms - -
GET /downloads?name=1729004809&target=OPTIMIZATION_TARGET_CLIENT_SIDE_PHISHING 200 4423.525 ms - -
GET /downloads?name=1729888136&target=OPTIMIZATION_TARGET_TEXT_SAFETY 200 2172.460 ms - -
GET /downloads?name=1729004809&target=OPTIMIZATION_TARGET_CLIENT_SIDE_PHISHING 200 2149.505 ms - -
GET /downloads?name=240731042075&target=OPTIMIZATION_TARGET_SEGMENTATION_COMPOSE_PROMOTION 200 2192.031 ms - -
GET /downloads?name=1729888136&target=OPTIMIZATION_TARGET_TEXT_SAFETY 200 2236.456 ms - -
^C✔  Verified Cypress! /Users/puneethsai/Library/Caches/Cypress/13.15.2/Cypress.app
```
### Before 12.Step 07 Exploring Angular CLI Project Structure

Add the below text lecture which talks about new Angular CLI Project Structure

> [!WARNING]
> In the next video, you might see different files it is generated for Angular 18, files which you can ignore from the video
> todo/src/polyfills.ts
> todo/src/test.ts
> todo/src/browserslist
> todo/src/karma.conf.js
> todo/src/environments/environment.prod.ts
> todo/src/environments/environment.ts
> todo/src/app/app-routing.module.ts
> todo/e2e/tsconfig.e2e.json
> todo/e2e/src/app.e2e-spec.ts
> todo/e2e/src/app.po.ts
> todo/src/assets/.gitkeep
> todo/src/app/app.module.ts
A couple of new/updated files generated in Angular 18

app.config.ts : Define the application configuration that instructs Angular on how to assemble the application.
As more providers are added, they should be declared here. This configuration file is only generated when using the --standalone option.
This setup is added in main.ts, the main entry point of the application.

For more details, please refer https://angular.dev/reference/configs/file-structure#workspace-configuration-files

### Before 15.Step 10 Generating Welcome Component with `ng generate`

> [!IMPORTANT]
> Before generating the welcome component, remember that this is a standalone application (not using NgModules). Therefore, you’ll need to add the extra flags --skip-import and --standalone in the CLI command.

Additionally, we are not using app.module.ts, which is going to be explained in the next video.

puneethsai@Puneeths-MacBook-Pro todo % ng g c welcome
Could not find an NgModule. Use the '--skip-import' option to skip importing in NgModule.

```js
puneethsai@Puneeths-MacBook-Pro todo % ng g c welcome --skip-import --standalone
Creating new component spec named: welcome
CREATE src/app/welcome/welcome.component.css (0 bytes)
CREATE src/app/welcome/welcome.component.html (22 bytes)
CREATE src/app/welcome/welcome.component.ts (203 bytes)
CREATE src/app/welcome/welcome.component.spec.ts (160 bytes)
```
In order to render **WelcomeComponent**, we need to import in `app.component.ts`

```js
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component'; // Imported

@Component({
selector: 'app-root',
standalone: true, // newly added
imports: [
RouterOutlet,
WelcomeComponent, // Imported
],
templateUrl: './app.component.html',
styleUrl: './app.component.css'
})
export class AppComponent {
title = 'todo';
}
```
### Before 18.Step 12 Generating And Setting up Login Component

> [!IMPORTANT]
> Before generating the login component, remember that this is a standalone application (not using NgModules). Therefore, you’ll need to add the extra flags --skip-import and --standalone in the CLI command.

Additionally, we are not using app.module.ts, which is going to be explained in the next video.

```bash
puneethsai@Puneeths-MacBook-Pro todo % ng g c login --skip-import --standalone
Creating new component spec named: login
CREATE src/app/login/login.component.css (0 bytes)
CREATE src/app/login/login.component.html (20 bytes)
CREATE src/app/login/login.component.ts (230 bytes)
CREATE src/app/login/login.component.spec.ts (152 bytes)
````
In order to render LoginComponent, we need to import in `app.component.ts`

```js
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component'; // Import this

@Component({
selector: 'app-root',
standalone: true,
imports: [
RouterOutlet,
WelcomeComponent,
LoginComponent, // Import this
],
templateUrl: './app.component.html',
styleUrl: './app.component.css'
})
export class AppComponent {
title = 'todo';
}
```
Do the following in the following files

1. Remove/Comment the following tag in index.html

      <div>Index HTML Content</div>

2. Comment the following tags in `app.component.html`
```js
<!-- <app-welcome></app-welcome> -->
<app-login></app-login>
<!-- <div>Component Content</div> -->
<!-- <router-outlet /> -->
```
### Before 20.Step 14 Using ngModel with 2 Way Data Binding in Login Page

To use input components and the ngModel feature for two-way data binding in login.component.html, import FormsModule in the @Component section.

```js
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Imported

@Component({
selector: 'app-login',
standalone: true,
imports: [
FormsModule, // Added this
],
templateUrl: './login.component.html',
styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {

}
```
### Before 24.Step 17 Implementing Routes for Login, Welcome and Error Components

To add Routing, we have `app.routes.ts` file instead of `app-routing.module.ts` from Angular 17, that is where you can for all the components
```js
import { TodoComponent } from './todo/todo.component';
import { RouteGuardService } from './service/route-guard.service';
import { LogoutComponent } from './logout/logout.component';
import { ListTodosComponent } from './list-todos/list-todos.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ErrorComponent } from './error/error.component';

// welcome
export const routes: Routes = [
{ path: '', component: LoginComponent  },//canActivate, RouteGuardService
{ path: 'login', component: LoginComponent },
{ path: 'welcome/:name', component: WelcomeComponent},

{ path: '**', component: ErrorComponent }
];
```

Generating components error scenarios and adding it in `app.routes.ts`

```bash
puneethsai@Puneeths-MacBook-Pro todo % ng g c error --skip-import --standalone
Creating new component spec named: error
CREATE src/app/error/error.component.css (0 bytes)
CREATE src/app/error/error.component.html (20 bytes)
CREATE src/app/error/error.component.ts (230 bytes)
CREATE src/app/error/error.component.spec.ts (152 bytes)
```

### Before 28.Step 20 Create List Todos Component with `ng generate`

For generating listTodos component please execute the following command ng g c listTodos --skip-import --standalone and will generate the following and this component in app.routes.ts

```bash
puneethsai@Puneeths-MacBook-Pro todo % ng g c listTodos --skip-import --standalone
CREATE src/app/list-todos/list-todos.component.css (0 bytes)
CREATE src/app/list-todos/list-todos.component.html (25 bytes)
CREATE src/app/list-todos/list-todos.component.spec.ts (614 bytes)
CREATE src/app/list-todos/list-todos.component.ts (249 bytes)
```
And import **ngFor** like below

```js
import { NgFor } from '@angular/common'; // Add this
import { Component, OnInit } from '@angular/core';

@Component({
selector: 'app-list-todos',
standalone: true,
imports: [
NgFor // Add this
],
templateUrl: './list-todos.component.html',
styleUrl: './list-todos.component.css'
})

import { TodoComponent } from './todo/todo.component';
import { RouteGuardService } from './service/route-guard.service';
import { LogoutComponent } from './logout/logout.component';
import { ListTodosComponent } from './list-todos/list-todos.component'; // IMPORTED
import { WelcomeComponent } from './welcome/welcome.component';
import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ErrorComponent } from './error/error.component';

// welcome
export const routes: Routes = [
{ path: '', component: LoginComponent  },//canActivate, RouteGuardService
{ path: 'login', component: LoginComponent },
{ path: 'welcome/:name', component: WelcomeComponent},
{ path: 'todos', component: ListTodosComponent }, // ADDED
{ path: 'todos/:id', component: TodoComponent, canActivate:[RouteGuardService] },

{ path: '**', component: ErrorComponent }
];
```

### Before 31.Step 22 Best Practice - Create a Todo class

Add the following `DatePipe` for implementing date

```js
import { DatePipe, NgFor } from '@angular/common'; // included DatePipe

@Component({
selector: 'app-list-todos',
standalone: true,
imports: [
NgFor,
DatePipe, // Added DatePipe
],
templateUrl: './list-todos.component.html',
styleUrl: './list-todos.component.css'
})
```
### Before 32.Step 23 Quick Introduction to Angular Modules — Can be deleted in Angular 18

### Before 33.Step 24 Understanding Bootstrapping of  Angular App with Root Module and Components

Include the content mentioned here https://github.com/in28minutes/full-stack-with-angular-and-spring-boot/blob/master/step-by-step-changes-to-standalone.md#section-3-getting-hands-on-with-angular

### Before 36.Step 27 Adding Bootstrap Framework and Creating Components for Menu and Footer

While adding bootstrap in the next video we have used unpkg bootstrap 4, instead please use the latest version that is unpkg bootstrap 5, download the css file from the following file
https://unpkg.com/browse/bootstrap@5.0.1/dist/css/

Download the following file
https://unpkg.com/browse/bootstrap@5.0.1/dist/css/bootstrap.min.css

Add it in styles.css file

**Create `menu component` using the following command**

```js
puneethsai@Puneeths-MacBook-Pro ~ % cd devworkspace/in28minutes/git/full-stack-with-angular-and-spring-boot/frontend/todo
puneethsai@Puneeths-MacBook-Pro todo % ng g c menu --skip-import --standalone                                     
CREATE src/app/menu/menu.component.css (0 bytes)
CREATE src/app/menu/menu.component.html (19 bytes)
CREATE src/app/menu/menu.component.spec.ts (578 bytes)
CREATE src/app/menu/menu.component.ts (226 bytes)
```
**Create `footer component` using the following command**
```bash
puneethsai@Puneeths-MacBook-Pro todo % ng g c footer --skip-import --standalone
CREATE src/app/footer/footer.component.css (0 bytes)
CREATE src/app/footer/footer.component.html (21 bytes)
CREATE src/app/footer/footer.component.spec.ts (592 bytes)
CREATE src/app/footer/footer.component.ts (234 bytes)
```
And then add both MenuComponent and FooterComponent in app.component.ts file
```js
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuComponent } from './menu/menu.component'; // Added Menu
import { FooterComponent } from './footer/footer.component';  // Added Footer

@Component({
selector: 'app-root',
standalone: true,
imports: [
RouterOutlet,
AppComponent,
MenuComponent, // Added Menu
FooterComponent, // Added Footer
],
templateUrl: './app.component.html',
styleUrl: './app.component.css'
})
export class AppComponent {
title = 'todo';
}
```
## 40.Standalone Update:  Import routetLink to menu.component.ts

Change class from FooterComponent to MenuComponent

### Before 43.Step 31 Creating an Independent Authentication Service Component

```bash
puneethsai@Puneeths-MacBook-Pro todo % ng generate service service/hardcodedAuthentication
CREATE src/app/service/hardcoded-authentication.service.spec.ts (443 bytes)
CREATE src/app/service/hardcoded-authentication.service.ts (152 bytes)
```
### Before 46.Step 33 Enabling Menu Links Based on User Authentication Token

Please import `NgIf` directive in menu.component.ts
```js
import { RouterLink } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';
import { NgIf } from '@angular/common'; // Import this

@Component({
selector: 'app-menu',
standalone: true,
imports: [
RouterLink,
NgIf, // Add this
],
templateUrl: './menu.component.html',
styleUrl: './menu.component.css'
})
export class MenuComponent implements OnInit {

}
```
### Before 47.Step 34 Implementing Logout to remove User Authentication Token

Create Logout component using the following command

```bash
puneethsai@Puneeths-MacBook-Pro todo % ng g c logout --skip-import --standalone                              
CREATE src/app/logout/logout.component.css (0 bytes)
CREATE src/app/logout/logout.component.html (21 bytes)
CREATE src/app/logout/logout.component.spec.ts (592 bytes)
CREATE src/app/logout/logout.component.ts (234 bytes)
puneethsai@Puneeths-MacBook-Pro todo %
```

**And add** LogoutComponent **in `app.routes.ts` file**

```js
import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ErrorComponent } from './error/error.component';
import { ListTodosComponent } from './list-todos/list-todos.component';
import { LogoutComponent } from './logout/logout.component'; // Import this

export const routes: Routes = [
{ path: '', component: LoginComponent },
{ path: 'login', component: LoginComponent },
{ path: 'welcome/:name', component: WelcomeComponent },
{ path: 'todos', component: ListTodosComponent },
{ path: 'logout', component: LogoutComponent }, // Add this one

    { path: '**', component: ErrorComponent },
];
```
### Before 49.Step 36 Securing Components using Route Guards - Part 2

Enable `canActivate` in the `app.routes.ts` file instead of `app-routing.module.ts`

> If you would like to **ngModule** application you can use `app-routing.module.ts`

Section 6: Connecting Angular Frontend to Spring Boot Restful Services

### Before 64.Step 51-  Connecting Angular Frontend with Restful API - 2- HttpClientModule an

Starting Angular 17, `app.config.ts` where we need to add HttpClientModule and call that **appConfig** in `main.ts`

In order to perform Http Request with backend api’s we need to add HttpClientModule and other modules in app.config.ts

**AS_IS**
```js
import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes)]
};
```
**TO_BE**
```js
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';


export const appConfig: ApplicationConfig = {
providers: [importProvidersFrom(BrowserModule, FormsModule), provideRouter(routes),
provideHttpClient(withInterceptorsFromDi())]
};
```
### Before 74.Step 60-  Adding Delete Todo Feature to Angular Frontend

Define a method with the parameters and its datatype in `todo-data.service.ts`

deleteTodo(username: any, id: any) {
return this.http.delete(`http://localhost:8080/users/${username}/todos/${id}`);
}

And in `list-todos.component.ts` define message along (?)

message?: string;
```js
import { DatePipe, NgFor, NgIf } from '@angular/common'; // imported NgIf

@Component({
selector: 'app-list-todos',
standalone: true,
imports: [
NgFor,
DatePipe,
NgIf, // Add this one
],
templateUrl: './list-todos.component.html',
styleUrl: './list-todos.component.css'
})
export class ListTodosComponent implements OnInit { }
```

### Before 75.Step 61-  Creating Todo Component and Handle Routing

```bash
puneethsai@Puneeths-MacBook-Pro todo % ng generate component todo               
CREATE src/app/todo/todo.component.css (0 bytes)
CREATE src/app/todo/todo.component.html (19 bytes)
CREATE src/app/todo/todo.component.spec.ts (578 bytes)
CREATE src/app/todo/todo.component.ts (226 bytes)
```
And add TodoComponent in `app.routes.ts`

```js
import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ErrorComponent } from './error/error.component';
import { ListTodosComponent } from './list-todos/list-todos.component';
import { LogoutComponent } from './logout/logout.component';
import { RouteGuardService } from './service/route-guard.service';
import { TodoComponent } from './todo/todo.component'; // IMPORTED

export const routes: Routes = [
{ path: '', component: LoginComponent },
{ path: 'login', component: LoginComponent },
{ path: 'welcome/:name', component: WelcomeComponent, canActivate: [RouteGuardService] },
{ path: 'todos', component: ListTodosComponent, canActivate: [RouteGuardService] },
{ path: 'logout', component: LogoutComponent, canActivate: [RouteGuardService] },
{ path: 'todos/:id', component: TodoComponent, canActivate: [RouteGuardService] }, // ADD THIS

    { path: '**', component: ErrorComponent },
];
```
### Before 95.Step 77-  Configure HttpInterceptor as Provider in App Module

Instead Of app-routing.module.ts, we can use app.routes.ts that can be add with app.config.ts in Angular 18

Add the following import statements
```js
import { provideRouter } from '@angular/router’;
import { routes } from './app.routes';
```
We have to add HttpInterceptor in `app.config.ts` file
```js
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http'; // IMPORT
import { HttpIntercepterBasicAuthService } from './service/http/http-intercepter-basic-auth.service'; // IMPORT


export const appConfig: ApplicationConfig = {
providers: [importProvidersFrom(BrowserModule, FormsModule), provideRouter(routes),
{ provide: HTTP_INTERCEPTORS, useClass: HttpIntercepterBasicAuthService, multi: true }, // ADD THIS
provideHttpClient(withInterceptorsFromDi())]
};

For applications utilizing NgModule, include the provideRouter in the providers array of the AppModule, or in the module specified for bootstrapModule within the application.

import { ApplicationConfig } from '@angular/core';
import { AppRoutingModule } from './app-routing.module'; // For applications utilizing NgModule
import { importProvidersFrom } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, withInterceptorsFromDi, provideHttpClient } from '@angular/common/http';
import { HttpIntercepterBasicAuthService } from './service/http/http-intercepter-basic-auth.service';
import { provideRouter } from '@angular/router'; // For Angular 17 onwards
import { routes } from './app.routes'; // For Angular 17 onwards

export const appConfig: ApplicationConfig = {
// For applications utilizing NgModule use AppRoutingModule use the AppRoutingModule
providers: [importProvidersFrom(BrowserModule, AppRoutingModule, FormsModule),
{ provide: HTTP_INTERCEPTORS, useClass: HttpIntercepterBasicAuthService, multi: true },
provideHttpClient(withInterceptorsFromDi())]
};
```
