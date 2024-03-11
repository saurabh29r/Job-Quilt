
# Job-Quilt A job platform for developers

In This Project I have builed a Morder job portal.



## Tech Stack

**Frontend:** React, Bootstrap, js-cookies,React-icons,React-tostify,React-router v-6,react-lazy-laod.

**Backend:** Nodejs, npm.

**Enviroment:** React+Vite.







## Features
##some login and logout features using Jwt_token.

- Used json_web_token(jwt_token) for authentication and authorization.
- Stored the jwt_token in cookies.
- When user logged in , jwt_token created and user can navigate to different pages.
- When User clicks on log out,the jwt_token deleted and user redirected to login page
- Used secured path, with the help of react-router v-6, created a protected path. As if Unauthorized user try to access any page in URL, they will redirect to login page.
- If a user logged in, He can't access the login page without logout.

##Job Page 
- When user clicks on Job page all the jobs are render on UI.
- Job Filter feature avaiable based on type of employment and salary.
- Search feature available based on job title keyword.
- Clear Filter button is avaiable which reset the state into default state.

##Job Details page.
- When user click on apply now button in job page card,user will redirected to job details page, which is basically uses id parameter to render the exact data.
- Here you user will see the detailed job description, salary, skills, location, life in company etc.
- Here user will get a link for apply to specific job. after clicking on apply-here link, user will be redirected to particular company page.





## Deployment

To deploy this project run

```bash
  npm run deploy
```


## Run Locally

Clone the project

```bash
  https://github.com/saurabh29r/Job-Quilt.git
```

Go to the project directory

```bash
  cd JobQuilt
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run dev
```

