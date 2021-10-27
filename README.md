# catapi

So I completed this project with [Angular](https://github.com/angular/angular) with Typescript. There were some pros and cons to this approach.

## Pros

* Utlizing Angular, along with [Angular Material](https://github.com/angular/components) allowed me to get some basic design in with very little effort.
* Utilzing Typescript allowed for static typing, reinforcing proper variable declaration, which therefore helped overall with reducing errors.
* Angular is a self-contained app framework, so you can run it locally out of the box.
* Angular has great out of the box boilerplate, including:
    * your choice of css, scss, sass
    * unit test set up with [jasmine](https://angular.io/guide/testing)
    * routing
    * multiple environment configs

## Cons

* You are at the mercy of the frameworks you use in regards to customizing designs and workarounds for functionality
* Sometimes straightforward tasks became annoyingly complicated (utilizing an `Observer` to `subscribe` to a data stream????)
* Using frameworks are great for rapid prototyping, but may cuase issues when intergating with production code that doesn't use the same framework (although I would argue that using an abtracted API middleware would aleviate this)
* Learning the framework and all of its quirks

## Improvements

I didn't get to fully unit test this. The tests in the spec file are what was generated from the boilerplate. I also think its super ugly lol.

## Overall Thoughts

I'm curious to see how building the application in the team will translate to moving it to the core technology team. Deciding how to build something and thinking about scalability outside of your own purview is always tricky. I'm also not married to having to use any one technology or framework for our work. Alot of this was me deiding to do it so I can get better at using Angular in an app like this.
