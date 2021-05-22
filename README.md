# PinUnpin

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## How to use the `Pin-Unpin Window UI Component`:

```
Module Location in the shared code: src/app/shared/pin-unpin
```

- Step 1: Add the `PinUnpinModule` folder code in your application. In demo application, I haved added it inside the shared folder as per the standards.

- Step 2: Import the `PinUnpinModule` module into the desired module of your application. In the demo application, I have imported it in the app.moudule.ts

- Step 3: Make sure you have added `angular material` in your aplication. If not [see here](https://material.angular.io/guide/getting-started)

- Step 4: In your component add the below code and the content to be displayed inside the pin-unpin window should be placed inside this tag as mentioned. In the demo app I have added the content of the topcoder challenge. The height and width are optional. The default height is `600px` and the default width is `400px`.

```
<app-pin-unpin height="700px" width="500px">

    your content should be here

</app-pin-unpin>
```

- Step 5: Initially, the window will be in the un-pinned state. Move the container as you wish. Click the `move` icon to make it pinned to the desired place. Now, you cannot move it untill you press the button again.

You can watch the demo [here](https://youtu.be/g_ZfrgOBNV8)
