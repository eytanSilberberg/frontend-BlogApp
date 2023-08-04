# Welcome to the Blog App!
Thank you for visiting the Blog App repository. This is a CRUD application built with Next.js and TypeScript. It allows users to create, read, update, and delete blog posts.

## Live Site

You can also explore the deployed version of this application on Vercel and DetaSpace. [Visit Frontend Live Site.](https://frontend-blog-6doo47hxk-eytansilberberg.vercel.app/)

For this project i've created two backend versions. Both use a python backend. The difference between them is the database. One uses MongoDb, and the other uses mySql

**Backend Setup**

Clone the MongoDB backend repository from this link: [MongoDB Backend Repo](https://github.com/eytanSilberberg/backend-BlogApp.git)

**OR**  

Clone the MongoDB backend repository from this link: [mySql Backend Repo](https://github.com/eytanSilberberg/Blog_app_Backend.git)

* Navigate to the cloned repository folder.

* Ensure you have Python and Mysql installed on your system.

* Create a virtual environment (venv) using the command python -m venv venv

* Activate the virtual environment with source venv/bin/activate (Linux/Mac) **or** venv\Scripts\activate (Windows).

* Install the required dependencies using pip install -r requirements.txt.
* Start the backend server by running uvicorn main:app --reload
```
python -m venv venv
source venv/bin/activate (Linux/Mac)
venv\Scripts\activate (Windows).
pip install -r requirements.txt.
uvicorn main:app --reload
```


**Frontend Setup**
To run the frontend application, please follow these steps:

* Clone the frontend repository from this link: Frontend Repo

* Navigate to the cloned repository folder.

* Make sure you have Node.js and npm installed on your system.

* Install the required dependencies by running npm install.

* Start the development server with npm run dev.

```
npm i
npm run dev
```

The deployed app uses the Mongodb repo as the database provider for this application

**Trello Workspace**
During the development of this project, I used Trello to stay organized and manage tasks. You can find the workspace here: [Trello Workspace.](https://trello.com/invite/b/exRl4EX6/ATTI94b6f4d6d70d5b9c8e831c3be8a3546150725EE1/assignment)

If you have any questions or feedback, feel free to reach out to me at silbereytan@gmail.com.

Enjoy exploring the Blog App! Happy coding!
