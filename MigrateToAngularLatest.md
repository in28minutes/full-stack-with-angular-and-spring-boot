# Migrate to Angular 18 or Latest

### Environment and Repository Details
- **Current Directory**: `todo` within `frontend` of `full-stack-with-angular-and-spring-boot`
- **Operating System**: macOS (Puneeth's MacBook Pro)

---

## Angular CLI Version Update
```bash
ng update @angular/cli @angular/core
```
The update process started with installing a temporary Angular CLI version to 18.2.11 or latest

## Initial Update Command
```bash
ng update @angular/cli @angular/core


puneethsai@Puneeths-MacBook-Pro devworkspace % cd full-stack-with-angular-and-spring-boot
puneethsai@Puneeths-MacBook-Pro full-stack-with-angular-and-spring-boot % cd frontend
puneethsai@Puneeths-MacBook-Pro frontend % cd todo
puneethsai@Puneeths-MacBook-Pro todo % ng update @angular/cli @angular/core
The installed Angular CLI version is outdated.
Installing a temporary Angular CLI versioned 18.2.11 to perform the update.
✔ Packages successfully installed.
Using package manager: npm
Collecting installed dependencies...
Found 22 dependencies.
Fetching dependency metadata from registry...
Updating package.json with dependency @angular-devkit/build-angular @ "18.2.11" (was "17.1.2")...
Updating package.json with dependency @angular/cli @ "18.2.11" (was "17.1.2")...
Updating package.json with dependency @angular/compiler-cli @ "18.2.10" (was "17.1.2")...
Updating package.json with dependency typescript @ "5.5.4" (was "5.3.3")...
Updating package.json with dependency @angular/animations @ "18.2.10" (was "17.1.2")...
Updating package.json with dependency @angular/common @ "18.2.10" (was "17.1.2")...
Updating package.json with dependency @angular/compiler @ "18.2.10" (was "17.1.2")...
Updating package.json with dependency @angular/core @ "18.2.10" (was "17.1.2")...
Updating package.json with dependency @angular/forms @ "18.2.10" (was "17.1.2")...
Updating package.json with dependency @angular/platform-browser @ "18.2.10" (was "17.1.2")...
Updating package.json with dependency @angular/platform-browser-dynamic @ "18.2.10" (was "17.1.2")...
Updating package.json with dependency @angular/router @ "18.2.10" (was "17.1.2")...
Updating package.json with dependency zone.js @ "0.14.10" (was "0.14.3")...
UPDATE package.json (1046 bytes)
✔ Cleaning node modules directory
✔ Installing packages
** Optional migrations of package '@angular/cli' **

This package has 1 optional migration that can be executed.
Optional migrations may be skipped and executed after the update process, if preferred.

Select the migrations that you'd like to run

** Executing migrations of package '@angular/core' **

❯ Updates two-way bindings that have an invalid expression to use the longform expression instead.
Migration completed (No changes made).

❯ Replace deprecated HTTP related modules with provider functions.
Migration completed (No changes made).

❯ Updates calls to afterRender with an explicit phase to the new API.
Migration completed (No changes made).
```
## Dependency Updates
The following dependencies in `package.json` were updated:

| Dependency                       | Previous Version | Updated Version |
|----------------------------------|------------------|-----------------|
| @angular-devkit/build-angular    | 17.1.2          | 18.2.11        |
| @angular/cli                     | 17.1.2          | 18.2.11        |
| @angular/compiler-cli            | 17.1.2          | 18.2.10        |
| typescript                       | 5.3.3           | 5.5.4          |
| @angular/animations              | 17.1.2          | 18.2.10        |
| @angular/common                  | 17.1.2          | 18.2.10        |
| @angular/compiler                | 17.1.2          | 18.2.10        |
| @angular/core                    | 17.1.2          | 18.2.10        |
| @angular/forms                   | 17.1.2          | 18.2.10        |
| @angular/platform-browser        | 17.1.2          | 18.2.10        |
| @angular/platform-browser-dynamic | 17.1.2         | 18.2.10        |
| @angular/router                  | 17.1.2          | 18.2.10        |
| zone.js                          | 0.14.3          | 0.14.10        |

## Optional Migrations
Angular CLI provided an optional migration to be executed:

- Update two-way bindings with invalid expressions to the long-form.
- Replace deprecated HTTP modules with provider functions.
- Update afterRender calls to the new API with explicit phase.

Result: No changes were necessary for these migrations.

# Migrating to Angula 19

```bash
puneethsai@Puneeths-MacBook-Pro todo % ng update @angular/cli @angular/core
The installed Angular CLI version is outdated.
Installing a temporary Angular CLI versioned 19.0.2 to perform the update.
Using package manager: npm
Collecting installed dependencies...
Found 22 dependencies.
Fetching dependency metadata from registry...
Updating package.json with dependency @angular-devkit/build-angular @ "19.0.2" (was "18.2.11")...
Updating package.json with dependency @angular/cli @ "19.0.2" (was "18.2.11")...
Updating package.json with dependency @angular/compiler-cli @ "19.0.1" (was "18.2.10")...
Updating package.json with dependency @angular/animations @ "19.0.1" (was "18.2.10")...
Updating package.json with dependency @angular/common @ "19.0.1" (was "18.2.10")...
Updating package.json with dependency @angular/compiler @ "19.0.1" (was "18.2.10")...
Updating package.json with dependency @angular/core @ "19.0.1" (was "18.2.10")...
Updating package.json with dependency @angular/forms @ "19.0.1" (was "18.2.10")...
Updating package.json with dependency @angular/platform-browser @ "19.0.1" (was "18.2.10")...
Updating package.json with dependency @angular/platform-browser-dynamic @ "19.0.1" (was "18.2.10")...
Updating package.json with dependency @angular/router @ "19.0.1" (was "18.2.10")...
Updating package.json with dependency zone.js @ "0.15.0" (was "0.14.10")...
UPDATE package.json (1034 bytes)
✔ Cleaning node modules directory
✔ Installing packages
** Executing migrations of package '@angular/cli' **

❯ Update '@angular/ssr' import paths to use the new '/node' entry point when 'CommonEngine' is detected.
Migration completed (No changes made).

❯ Update the workspace configuration by replacing deprecated options in 'angular.json' for compatibility with the latest Angular CLI changes.
UPDATE angular.json (2683 bytes)
Migration completed (1 file modified).

** Optional migrations of package '@angular/cli' **

This package has 1 optional migration that can be executed.
Optional migrations may be skipped and executed after the update process, if preferred.

Select the migrations that you'd like to run

** Executing migrations of package '@angular/core' **

❯ Updates non-standalone Directives, Component and Pipes to 'standalone:false' and removes 'standalone:true' from those who are standalone.
UPDATE src/app/menu/menu.component.ts (675 bytes)
UPDATE src/app/app.component.ts (513 bytes)
UPDATE src/app/list-todos/list-todos.component.ts (1858 bytes)
UPDATE src/app/todo/todo.component.ts (1517 bytes)
UPDATE src/app/welcome/welcome.component.ts (2449 bytes)
UPDATE src/app/login/login.component.ts (2291 bytes)
Migration completed (6 files modified).

❯ Updates ExperimentalPendingTasks to PendingTasks.
Migration completed (No changes made).

** Optional migrations of package '@angular/core' **

This package has 1 optional migration that can be executed.
Optional migrations may be skipped and executed after the update process, if preferred.

Select the migrations that you'd like to run
```

## Reference
https://angular.dev/cli/update

Happy Developing!