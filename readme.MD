## Limio

Welcome to the Limio coding interview.

## Our tech stack

The Limio tech stack is always evolving as we continue to seek out the best tools for the job. Our main tech stack is:

  * React with Redux (front-end of our main app & Limio Shop)
  * Gatsby (Limio Shop)
  * AWS Lambda with Serverless for our backend API
  * Node.js for the above & our product catalog backend
  * AWS DynamoDB for our main database
  * Git for our product catalog storage
  * AWS Cognito for our user management
  * We build with Webpack
  * Jest for testing
  * Other AWS services for serving builds/files such as S3, Cloudfront, amongst others

And we are currently working towards introducing the following:

 * React testing library to replace some of component tests
 * Refactoring to use React hooks across our codebase where possible
 
We will continue to discuss & add new tech where we feel it would improve our products.

### Instructions

Please answer the question below (just write the answers in the spaces provided). Once the coding examples are done, please zip up your files and send them via http://wetransfer.com (GMail blocks ZIP attachments).  

We can then discuss the changes that you have made.

### Overview

The directories contain 3 sample apps. They are based on the the tic-tac-toe react tutorial, which you can find at [https://reactjs.org/tutorial/tutorial.html].

The directories are:

| Directory      | Contents    |
| ---------------|-------------| 
| app-original   | The original app from the tutorial |
| app-standalone | The same app, but re-written slightly (this has been updated to move away from class components and use functional components with React hooks) |
| app-redux      | The same app, using redux |

### Questions

Please answer the following questions:
    
1.	Comparing the app-original and app-standalone code bases. The app-standalone code base has put each component in a separate file and directory structure.
o	Why do you think that was done, what are the advantages / disadvantages?
Advantages:
Creating small, reusable components is an essential feature of React and other JS frameworks. It allows reusability and separation of concerns, and quickly shows its worth as codebases get more complex. Both functionality and errors become scoped, so a stray bracket won’t break thousands of lines of code – it will break one component which can easily be isolated and debugged. In this app, they are further separated into their own folders. This can be really useful for keeping everything to do with a component in the same place, like testing and styling files. Using components also helps when working in a large team, as it makes team working much easier and reduces the risk of creating errors which impact other features.
Disadvantages:
More code and setup time: setting up each file takes considerably more code than putting everything in one file, and involves a lot of repetition, for example imports.
More files: can make it harder to manage and maintain. Also can make it harder for someone new coming into the codebase – it can be hard to find where the bit of code is for the thing they want to change. 
Potential for inconsistent code style: multiple developers working compartmentalised may work to their own style and naturally drift away from agreed upon conventions.
2.	Thinking about a production ready app, what do you think is missing from all the examples? Hint: the square component in the standalone app has one
There are no tests for any of the other components.
3.	Are you familiar with Redux? If so what is the basic idea behind it and what would be a good case for using it?
I am in the very early stages of learning Redux via building a social media app with a friend (using Redux toolkit). Previously, I have used useReducer(), and for most of the apps I have built so far this was more than adequate. My understanding so far is that Redux is a state management library which can be used to organise state for the whole app in one place - a single JavaScript object, called the "store". This makes it easier to visualise and track data flow through an application, and to implement many features. The store is immutable, and state is updated instead by actions (such as a click) being dispatched to the store, much like with the useReducer hook. 
Good use cases include:
•	An app with lots of asynchronous data fetching, loading, and error handling.
•	An app with lots of complex state which needs to be shared between components. 
•	An app with a large team of developers working on it, or one for which the development team regularly changes.

4.	If you are interested in the full-stack role Please take a look at the partial implementation of an express routes in backend/router.js.
o	Thinking of a production application, what issues do you see with this code? List as many as you like
There are several key issues with this backend, listed roughly in order of severity:
•	The code does not start the Express server (eg with app.listen()) – it will not listen for requests.
•	No package.json – the required packages will have to be manually installed by reading through the code.
•	No error handling for the API routes.
•	No tests.
•	Server could be separated into routes and models for scalability and separation of concerns.
•	Other factors which could be considered are the security risks created by having no route protection or input validation.
•	The backend also relies on having the database connection string in the environment variables, which has not currently been shared.



### Coding Challenges

With either the app-standalone or app-redux (**not both** - whichever you are comfortable with), please complete the following changes:

1. Update the app so that is highlights the winning move.
2. Update the app so that it allows for a named player X and Y, and it keeps a league table of who won each game.
3. If you get time, implement something that you think that the app could do and is cool. What other things would you change.

### Expectations
 * We don't want you to spend too long on this exercise, just the necessary amount of time to show your front-end and back-end skills. We expect it to take 1.5 hours if you have React experience, longer if you have no React experience. 
    * If you don't answer all questions, that is fine. We prefer depth on a few questions rather than superficial answers.
 * Some testing, but not extensive. Have at least one test case, so that we know you can do it. 
    * You'll notice the example code doesn't have much testing. It should.
 * Clean, concise code. Comments are appreciated.
 * Knowledge of up to date React features e.g. Hooks.




    
      
    
    

 





