# Migration Steps for an existing Angular project to standalone

### Step 1: Update all the dependencies and dev dependencies
1. Angular dependencies to 17.1.1
2. rxjs to 7.8.1
3. tslib to 2.6.2
4. zone.js to 0.14.3
5. Typescript to 5.3.3

### Step 2: Remove package-lock.json
### Step 3: Execute `npm install` command for generating the new dependencies
### Step 4: Migrate to Standalone using this command `ng g @angular/core:standalone`

puneethsai@Puneeths-MacBook-Pro todo % ng g @angular/core:standalone
? Choose the type of migration: (Use arrow keys)
❯ Convert all components, directives and pipes to standalone
Remove unnecessary NgModule classes
Bootstrap the application using standalone APIs 

If you choose option as “Convert all components, directives and pipes to standalone”

? Choose the type of migration: Convert all components, directives and pipes to standalone
? Which path in your project should be migrated? ./

🎉 Automated migration step has finished! 🎉
IMPORTANT! Please verify manually that your application builds and behaves as expected.
See https://angular.io/guide/standalone-migration for more information.
UPDATE src/app/welcome/welcome.component.ts (2471 bytes)
UPDATE src/app/login/login.component.ts (2319 bytes)
UPDATE src/app/error/error.component.ts (360 bytes)
UPDATE src/app/list-todos/list-todos.component.ts (1880 bytes)
UPDATE src/app/menu/menu.component.ts (697 bytes)
UPDATE src/app/footer/footer.component.ts (297 bytes)
UPDATE src/app/logout/logout.component.ts (521 bytes)
UPDATE src/app/todo/todo.component.ts (1539 bytes)
UPDATE src/app/app.module.ts (1456 bytes)
UPDATE src/app/app.component.spec.ts (1063 bytes)
UPDATE src/app/error/error.component.spec.ts (608 bytes)
UPDATE src/app/footer/footer.component.spec.ts (615 bytes)
UPDATE src/app/list-todos/list-todos.component.spec.ts (637 bytes)
UPDATE src/app/login/login.component.spec.ts (608 bytes)
UPDATE src/app/logout/logout.component.spec.ts (615 bytes)
UPDATE src/app/menu/menu.component.spec.ts (601 bytes)
UPDATE src/app/todo/todo.component.spec.ts (601 bytes)
UPDATE src/app/welcome/welcome.component.spec.ts (622 bytes)

### Step5: Again execute `ng g @angular/core:standalone` and choose 2nd option as "Remove unnecessary NgModule classes"
puneethsai@Puneeths-MacBook-Pro todo % ng g @angular/core:standalone
? Choose the type of migration:
Convert all components, directives and pipes to standalone
❯ Remove unnecessary NgModule classes
Bootstrap the application using standalone APIs 

? Choose the type of migration: Remove unnecessary NgModule classes
? Which path in your project should be migrated? ./
🎉 Automated migration step has finished! 🎉
IMPORTANT! Please verify manually that your application builds and behaves as expected.
See https://angular.io/guide/standalone-migration for more information.
Nothing to be done.

### Step6: Again execute `ng g @angular/core:standalone` Choose 3rd option as "Bootstrap the application using standalone APIs"

puneethsai@Puneeths-MacBook-Pro todo % ng g @angular/core:standalone
? Choose the type of migration: Bootstrap the application using standalone APIs
? Which path in your project should be migrated? ./
🎉 Automated migration step has finished! 🎉
IMPORTANT! Please verify manually that your application builds and behaves as expected.
See https://angular.io/guide/standalone-migration for more information.
DELETE src/app/app.module.ts
UPDATE src/main.ts (1029 bytes)
UPDATE src/app/app.component.ts (535 bytes)
UPDATE src/app/app.component.spec.ts (1051 bytes)

