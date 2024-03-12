
# Job-Quilt A job platform for developers

In This Project I have build a Modern job portal.



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
- Search feature available  based on job title keyword.
- Clear Filter button is available  which reset the state into default state.

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

#Login-page-view 


![loginpageview](https://github.com/saurabh29r/Job-Quilt/assets/48233777/14b076be-fbd0-4b7b-9b07-e00d83186c6c)

#Login-page-success-view-with-JWT-token-console


![loginsuccessview](https://github.com/saurabh29r/Job-Quilt/assets/48233777/e7b6c22d-7c70-4447-8e55-8e6a52184875)

#Home page View

![homepageviewpng](https://github.com/saurabh29r/Job-Quilt/assets/48233777/8ea78f15-b8d8-4b2c-b2da-330c35b1c66f)

#Job-page-view
![jobpageview](https://github.com/saurabh29r/Job-Quilt/assets/48233777/306ff2d1-733a-4bb6-bff5-7fe14001454f)

#Job-Detail-page-view
![job-detailpageview](https://github.com/saurabh29r/Job-Quilt/assets/48233777/6ca72c26-66ee-47bf-9753-d4d18b6d34e8)

#Mobile-view
![mobileview](https://github.com/saurabh29r/Job-Quilt/assets/48233777/5fd96368-3069-491c-894d-d32b0832abf5)

#mobile-view-2
![mobileview2](https://github.com/saurabh29r/Job-Quilt/assets/48233777/7eb16254-5d9b-4993-b58b-73311299df1f)

#mobile-view-3
![mobileview3](https://github.com/saurabh29r/Job-Quilt/assets/48233777/6e5d614b-739f-4d57-a866-ebfc33b76797)

