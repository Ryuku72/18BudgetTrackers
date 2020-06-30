![GitHub last commit](https://img.shields.io/github/last-commit/Ryuku72/HomeworkW18?style=for-the-badge)
![GitHub commit activity](https://img.shields.io/github/commit-activity/y/Ryuku72/HomeworkW18?style=for-the-badge)
![GitHub contributors](https://img.shields.io/github/contributors/Ryuku72/HomeworkW18?style=for-the-badge)

# Budget Trackers
## Homework W18: Web Performance
30th June 2020

### Working Project Example
* Heroku App https://jkbbudgettrack.herokuapp.com/
<br>

### Aim
Take a budget app and save information to a mongoDB database and allow functionality to continue offline through indexedDB. IndexedDB will then update the mongoDB upon coming online.

## Contents

* [Introduction](#intro)
* [Build Process](#build)
* [Project Issues](#issues)
* [Installation](#install)
* [Additional Information](#add)
 <br>

<a name="intro"></a>

## User Story
AS AN avid traveller
I WANT to be able to track my withdrawals and deposits with or without a data/internet connection
SO THAT my account balance is accurate when I am traveling

## Business Context
Giving users a fast and easy way to track their money is important, but allowing them to access that information anytime is even more important. Having offline functionality is paramount to our applications success.

## Key Concepts for Budget Trackers
* Lighthouse
* Lazy Loading
* Minification
* Compression
* PWAs
* Service Workers
* Webpack

<a name="build"></a>

## Build Process 

The budget tracker app was made up of 2 activities Week17/Day3/26-Stu-Mini-Project and Week18/Day3/23-Stu-Mini-Project. One provided the backbone for the indexedDB and the other was for Service Worker. After combining both projects my app could be used both online and offline.

From there the project need to be uploaded to Heroku and a MongoDB add-on attached. This was very simple and only minor changes need to be made to the server.js file. The next point of attack was adding in my own customization. 

I have listed below the changes I made to the original project
1. Changed the model to include Balance and Update 
2. Changed the index.js file to include new colums that show date and balance
3. Update Heroku database to show these changes
4. Fixed the date to show Day/Month/Year Hour:Minute
5. Changed all the figures to have 2 decimal places
6. Changed all values to be recorded as cents, then updated Index.js to convert all values to dollars
7. Attempted to add commas when the value was over 1000. (incomplete)

<a name="issues"></a>

## Project Issues

As per usual time constraints was the biggest problem. With a large portion of the code being lifted from prior activities I had strong push to add further customization in order to make the project feel more personal. I have listed below areas which still need work

1. CSS currently bootstrap
2. Columns are Text-Left. Amount and Balance should be text-right
3. Title at the top shoud be fixed to account for the $ sign.
4. CSS in general needs major updates
5. Still want to implement a comma after 1,000
6. Chart could be customized to show balance or Amount deposited
7. Visual indicator that the website is offline would be a nice touch
8. Did not implement any compression
9. Did not impletement any minification
10. Did not use PWA or webpack

a name="install"></a>

## Installation

1. Download the repo from Github
```
https://github.com/Ryuku72/homeworkw18.git
```
2. Inside the project folder
```
npm install
npm start 
```

Alternatively visit the Heroku page at https://jkbbudgettrack.herokuapp.com/

<a name="add"></a>

## Additional Information
###Tests
* No test were run

###License
Licenses: MIT



### Resources
* NPMJS
* W3 Schools
* Medium
* Mozilla
* Stackoverflow
* Resources provided in Slack
* Youtube tutorials
* Dillinger
* MongoDB
* Heroku

### Technology
* Heroku
* Mongoose
* Express
* Chalk
* Javascript
* Visual Studio Code
* GitHub
* Google Chrome
* Bootstrap


## Source
Code was originally supplied in the WAUS-CRAW-FSF-PT-02-2020-U-C-MW / Week 18 / Homework repository on GitLab https://waustralia.bootcampcontent.com/the-university-of-western-australia/WAUS-CRAW-FSF-PT-02-2020-U-C-MW/tree/master/Week%2018/Homework
<br>

### Joshua K Bader // Ryuku72 // jaybshinsen@hotmail.com
### Made with ReadMe.Md Generator 
