# Task: Build a TODO List API
License: MIT
Authors: Srikanth V Mattihalli [github](https://github.com/srikantmatihali) | [Linkedin](https://www.linkedin.com/in/srikanthvmattihalli/) | [Twitter](https://twitter.com/srikantmatihali/) | <a href="mailto:srikantmatihali@gmail.com?"><img src="https://img.shields.io/badge/gmail-%23DD0031.svg?&style=for-the-badge&logo=gmail&logoColor=white"/></a>

#### Problem Statement

Description: You are tasked with creating a basic RESTful API for managing a TODO list. The API should allow users to perform CRUD operations (Create, Read, Update, Delete) on tasks in the TODO list.

Requirements:

Create an Express.js server that listens on a specific port.
Implement routes for the following operations:
Create Task: Allow users to create a new task with a title and description.
Read All Tasks: Allow users to retrieve a list of all tasks.
Read Single Task: Allow users to retrieve a single task by its ID.
Update Task: Allow users to update the title or description of a task.
Delete Task: Allow users to delete a task by its ID.
Use in-memory data storage (an array or object) to store the tasks.
Implement appropriate error handling and validation for the API endpoints.

Bonus:

Add due dates to tasks and implement sorting tasks by due date.
Add the ability to mark tasks as completed.

Submission: Provide the interviewer with the code for your Express.js application along with any necessary instructions for running and testing the API.

This task evaluates the candidate's ability to work with Express.js, handle routes, perform CRUD operations, manage data storage, and implement error handling. It also provides flexibility for candidates to showcase their skills by adding bonus features if they have time.

============

Built using Node 18 Version.
COMMANDS TO RUN THE APPLICATION

> npm i
> npm start


============

INSERT API

curl --location 'http://localhost:3000/todos/' \
--header 'Content-Type: application/x-www-form-urlencoded' \
--data-urlencode 'title=test' \
--data-urlencode 'description=test'

LISTING API
curl --location 'http://localhost:3000/todos/'

SINGLE DATA LIST API
curl --location 'http://localhost:3000/todos/1'

DELETE API
curl --location --request DELETE 'http://localhost:3000/todos/1'