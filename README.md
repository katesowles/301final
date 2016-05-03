# 301final

### Group Members:
Yvonne, David, Kate

### Team Name:
Node It Alls

### Project Name:
Should I Bike It - PDX

### Problem Statement:
In the erratic Portland weather, it's hard to anticipate the weather on the other side of town, or even in the same spot after a few hours have lapsed.

Do you bike? Whether you're giving it a quick glance or a more in depth look, we give you the updates you need on the state of biking around your favorite spots in Portland.

### User Stories:
1. As a biker in Portland, I would like to know the conditions for the destinations I wish to bike between that day.
2. As a user of the app, I would like to have commonly-biked-to locations saved in the app to save my effort.
3. As a commuter, I would like to know that my method of travel is appropriate all day.
4. As a developer, I want to create clear, DRY code that adheres to the MVC Model.
5. As a user of the app, I would like to have it available on the go from my mobile phone.
6. As a developer I want to use object oriented, functional, decoupled programming.
7. As a developer, I want to leverage third-party information services in my app to save from having to manually collect the data ourselves.
8. As a developer, I want to harness the privacy allowed by keeping private data persisted on a server as opposed to being in the source code.
9. As a developer, I want to make use of middleware to streamline my information processing.
10. As a developer, I'd like to make big bucks off this shit. (ha!)

---

### Requirement Tracker

##### Documentation Requirements
1. Include a link to the repo in the footer of the site **___**
2. Include a link to the live site in the repo's readme AND description **___**
3. Develop a User Guide **___**

##### HTML Requirements
4. Remove unused/commented out/irrelevant code and process documentation files **___**
5. Use semantic HTML tags, if it is an important tag but isn't descriptive, use classes, ids, or comments to describe it's purpose **___**
6. Consistent indentation **___**
7. Remove redundancies; repeated DOM structures should be templated or programatically created using JS **___**

##### CSS Requirements
8. Clear and meaningful CSS, semantically meaningful class and id names; use proper indentation; correct syntax issues **___**
9. SMACCS Principles with CSS files **___**
10. Layout is pleasing agross various screen sizes; use a fluid grid **___**

##### JS Requirements
11. Must pass eslint **___**
12. Use semantically meaningful variables and function names **___**
13. Remove source code redundancies with functional programming, object oriented programming, and/or middleware; keep it DRY **___**
14. Reduce computational redundancy; cache computed results if reused. EVEN make variables for repeated DOM element queries with JQ **___**

##### Technical Requirements
15. At least three interlinked pages with clear navigation **___**
16. At least two pages must accept and process user input **___**
17. Use jQuery for DOM Manipulation, user event handling, and animations **___**
18. Mobile-first and responsive design **___**
19. Process input from an HTML Form with at least one button **___**
20. Encapsulate all data and functions and use object constructors and prototypical inheritence where appropriate **___**
21. Use AJAX to retrieve JSON or XML data; make sure a HOF makes the AJAX call: pass a "next" function to the HOF, HOF should make AJAX request and specify "next(data)" as the callback. "next()" should then call a view function to display the data. HOF should be in a model js file **___**
22. Functional programming; use Array methods, HOFs, and at least one closure **___**
23. Persist your app's state using WebSQL or other database (if we persist on server-side database we don't need to use the local database); write middleware that handles CRUD operations on your database **___**
24. Build a single page app and use client-side routing for at least two routes **KATE**
25. Use MVC components that are loosely coupled, semantically labelled, and well documented as MVC in code comments **___**
26. Deploy to public web server including a server-side app that authenticates to a third party server (weatherunderground) **___**

##### Stretch Goals
27. Persist at least some of your app's data in two or more WebSQL tables and make SQLite queries that use joins/relations to filter data.
 (1pt) **___**
28. use a finite state machine that explicitly models the FSM using named inputs (events) and named states (1pt) **___**
29. Include an audio element and use .mp3 format for our media file (1pt) **___**
30. Use JS built in methods .bind() and .apply(); answer the following questions in the sbumission: (1pt) **___**
  - The methods belong to what kind of object? Does each object have its own copy of the method, or are the methods on the prototype for that object?
  - How does .apply() differ from .call()?
31. Let users register on your site with a username and password; require login to access some of the site's data:
  - Use client side authentication as proof of concept (0.25pt) **___**
  - or use server-side authentication (2pt) **___**
32. Persist at least part of your app's state on a server such as Heroku or Firebase (2pt) **___**

33. Make presentation and plan for who shows what **___**
