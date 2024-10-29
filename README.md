# Angular-Project-Ecommerce-App

## Section-1: Getting Started

## What is Angular

A framework for building client applications in HTML, CSS, and JavaScript / TypeScript

## Why Angular

As our application get more complex vanilla JavaScript / jQuery hard to maintain. We need to way to properly structure our application. Sure there are js pattern out there that helps in structuring but these pattern are hard to understand for a lot of beingger to JavaScript. Plus a lot of application build vanilla js or jQuery are hard to test that's why over the few years various frameworks works have been built and envolved to make application development easier. Angular is the example of such framework.

## Benefits of Using Angular

- Gives our applications a clean structure
- Includes a lot of re-usable code
- Makes our applications more testable

## Angular Makes my life easier!!!

# Architecture of Angular applications

A lot of mordern applications has two part Front-end and Back-end. Frontend is also called client in web browser this is
what the user sees and interacts with. It essentially includes User Interface(UI) of the application. We use HTML, CSS
TypeScript, Angular to build the Frontend.

The backend sit in the webserver or multiple Web server in a cloud and is responsible for storing the data and doing any
kind of processing.

Frontend or client talks to the backend to get or save the data. Frequent asked question - How do we safe the data in Angular?
While we don't, In most cases, we don't safe the data on the client because it easily disappear as the user clear the browser
data or move to different computer that why we store data on the Server. So here, we often have one or more databases as well
as bunch of HTTP servies or APIs to make these data available to the client. These are endpoints that are accessible via the
HTTP protocol. So we can called them using simple HTTP request get or save the data.

Metaphor - Think of the port where ships load or unload. These are points to get load in and out of town. Now imagine these
Endpoints are HTTP Endpoints. Ships are HTTP Request, and Loads are data. Just like we can send the ship to the port and
get some load and bring to us. A Clents app send HTTP requests to an endpoint to get some data. So this is how the big picture
works.

Our Web application has Frontend and Backend. On the Backend we have one or more databases and APIs that's makes the data
available to the client. For large application around complex domain this where we implement business logic application like
calculating the tax and shipping cost base on various parameters.

The Frontend or client in otherhand, is all about the presentation. Here we have html templates as well as presentation logic
of our application. This logic is all about displaying data and responding user action like what should happen when users
clicks button or navigates away from the pag. These are example of the presentation logic or the logic all about presentation
aspects of an application.

In terms of the implementation building the backend requires simipliarly with other languages and frameworks. As an Angular
or Frontend developer we don't have to worry about it. This is the Job of Backend developer or FullStack developer.

## Setting Up the Development Environment

- Install Latest Version of Node.js
- Node minimum required version above v6.9.0
- npm packgae to install third party libraries
- Install Angular CLI
  - sudo npm install -g @angular/cli
- ng --version

## My First Angular App

- ng new hello-world
- cd hello-world
- ng serve

## Structure of Angular apps

## Webpack

## Angular Version History

# Section-3: TypeScript and Object-Oriented Programming Fundamentals

- Type annotations
- Arrow functions
- Interfaces
- Classes
- Constructors
- Access modifiers
- Properties
- Modules
