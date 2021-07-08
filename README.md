# Sprint Challenge: Authentication - Dad Jokes

## Description

In this challenge, you build a real wise-guy application. _Dad jokes_ are all the rage these days. Currently the application is trying to receive some `Dad Jokes`, however we are locked out.

## Instructions

**Read these instructions carefully. Understand exactly what is expected _before_ starting this Sprint Challenge.**

This is an individual assessment, please work on it alone. It is an opportunity to demonstrate proficiency in the concepts and objectives introduced and practiced in preceding days.

If the instructions are not clear, please seek support from your TL and Instructor on Slack.

The Minimum Viable Product must be completed in three hours.

Follow these steps to set up and work on your project:

- [ ] Create a forked copy of this project.
- [ ] Add your _Team Lead_ as collaborator on Github.
- [ ] Clone your forked version of the Repository.
- [ ] Create a new Branch on the clone: git checkout -b `firstName-lastName`.
- [ ] Implement the project on this Branch, committing changes regularly.
- [ ] Push commits: git push origin `firstName-lastName`.

Follow these steps for completing your project.

- [ ] Submit a Pull-Request to merge `firstName-lastName` branch into `master` on your fork. **Please don't make Pull Requests against Lambda's repository**.
- [ ] Please don't merge your own pull request.
- [ ] Add your _Team Lead_ as a Reviewer on the Pull-request
- [ ] Your _Team Lead_ will count the challenge as done by merging the branch into _master_.

## Commits

Commit your code regularly and use descriptive messages. This helps both you (in case you ever need to return to old code) and your Team Lead.

## Self-Study/Essay Questions

Demonstrate your understanding of this week's concepts by answering the following free-form questions. Edit this document to include your answers after each question. Make sure to leave a blank line above and below your answer so it is clear and easy to read by your project manager.

- [ ] What is the purpose of using _sessions_?

Sessions provide a way to persist data across requests. In many cases, they are used to save authentication information, so there is no need to re-enter credentials on every new request the client makes to the server. When using sessions, each client will have a unique session stored on the server, which then allows the client to navigate to authorized portions of a website without having to login back in.

- [ ] What does bcrypt do to help us store passwords in a secure manner.

When storing a user’s password into a database we must ensure that they are not saved as plain text - as anyone with access, authorized or not, would potentially know the passwords of every user.  bcrypt injected passwords are hashed multiple times to ensure they are adequately protected. This means that a password can be changed from, say: myPass123! to a result like: aiOY&))NJGI$SIE$10:9SS;IIUEPSMSIBJXXPWW^&a ... then, the result would be bcrypted again, and that result would be bcrypted again and so forth.  As a default, a bcryption hashing process will be done 10 times.

- [ ] What does bcrypt do to slow down attackers?

The goal of bcrypting a password is to slow down attackers to the point of frustration so that they can move on.  Long, complicated passwords can be a good way of reducing the attackers willingness to continue hacking the bcryption of a password.  But that is not all. bcrypt also has the ability to add time to the security algorithm to produce what is known as a key derivation function.  And what this basically does is add a time stamp to the hashed password.

- [ ] What are the three parts of the JSON Web Token?

The JSON web token has a header, payload and a signature.

## Minimum Viable Product

Implement an User Authentication System. Hash user's passwords before saving them to the database. Use `JSON Web Tokens` or `Sessions and Cookies` to persist authentication across requests.

- [ ] Implement the `register` and `login` functionality inside `/auth/auth-router.js`. A `user` has `username` and `password`. Both properties are required.
- [ ] Implement the `authenticate` middleware inside `/auth/authenticate-middleware.js`.
- [ ] Write a **minimum o 2 tests** per API endpoint. Write more tests if you have time.

**Note**: the database already has the users table, but if you run into issues, the migrations are available.

## Stretch Problem

Build a front end to show the jokes.

- [ ] Add a React client that connects to the API and has pages for `Sign Up`, `Sign In` and showing a list of `Jokes`.
- [ ] Once you have the functionality down, style it!
