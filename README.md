# Hacktoberfest Brno 2018 Website

This is the official website for the Hacktoberfest Frankfurt Event on the 18th Oct 2018.


## Running frontend locally with official back-end

Install the dependencies
```
yarn install && cd frontend/ && yarn install
```

Run FrontEnd on port 8080
```
cd frontend/ && yarn serve
```

## Running back-end + frontend locally

Install the dependencies
```
yarn install && cd frontend/ && yarn install
```

Create GitHub application
Create Firebase project and create a database

Create file `.env` in application root
```
GITHUB_ID=<GITHUB client id (Profile>Developer settings>OAuth Apps)>
GITHUB_SECRET=<GITHUB client secret(Profile>Developer settings>OAuth Apps)>
FIREBASE_PROJECTID=<FIREBASE project id Project>Settings>General)>
FIREBASE_CLIENTEMAIL=<FIREBASE service account email (Project>Settings>Service accounts - Place XXX from xxx@PROJECTID.iam.gserviceaccount.com)>
FIREBASE_KEY=<FIREBASE service account email (Project>Settings>Service accounts>Generate new private key >
```

Run development
```
yarn run dev-local
```
