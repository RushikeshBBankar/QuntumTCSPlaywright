// 1)
// 1.1) Screenshot
// if you want to take a screen shot on fail test case
// 'off' - do not capture screenshot
// 'on' - Capture screen shot each test
// 'only-on-failure' - Capture screen shot after each test failure
//
// 1.2)Video
// 'off' - Do not record video
// 'on' - Record the video each test
// 'retain-on-failure' - record the video for each test but remove all video from successful test runs.
// 'on-first-retry' - Record video only when retrying a test for the first time.

const { retries, workers } = require("../playwright.config")


// 2)
//You can create your config file
// You can use that config file instead off default config file
//To run the custom config file use bellow command 
// npx playwright test 'filename'.spec.js --config playwright.config1.js

//3)
// you can run the test case in different browser
// create a project array .
//
projects: [
        {
          name: 'safari',
          use: {
            browserName: 'webkit',
            headless: true,
            screenshot: "off",
            trace: 'on',
          }
        },
        {
          name: 'chrome',
          use: {
            browserName: 'chromium',
            headless: false,
            screenshot: "on",
            trace: 'on',
            //viewport :{width: 720, height:720}
            ignoreHttpsErrors : true,
            video : 'retain-on-failure'
          }
        }
        
      ]
// To use this browser use bellow command
//npx playwright test dropDown.spec.js --config playwright.config1.js --project=safari


//4)
// Viewport: - to chose the viewport ro run the test case
//viewport :{width: 720, height:720}

//5)
// to run any mobile devices
// ...devices['devices name']
//npx playwright test dropDown.spec.js --config playwright.config1.js --project='name'

//6)
//To accept 'ssl certification' certificate
//add the bellow line in the 
ignoreHttpsErrors : true

//7)
// too retry failed test case
retries: 1
// use this line in the global config

//8)
//Test file trigger parallel
//To set the workers 
//workers: 3, // 3 test spec file run at a one time.

//9)

//test file contain 2 or more test cases

//Normally tests are run in sequential
//if you want to run each test case in parallel mode.

test.describe.configure({mode: "parallel"})


//10)
//tag: = it allows to run only those test cases which we are tag 
// eg: @Web, @API, @Reg, @Smoke
// to run the tag test cases: npx playwright test --grep "tag name",


//11) Reports
//a. HTML report: 
//  1. Run All test cases
//  2. Open Playwright-report folder
//  3. Copy the index.html file path
//  4. Open browser and pest that path in the URL.
//  5. You can able to view the report of execution off all test cases.


//b. Allure report:
// It is a 3rd party plugin.
// It provides a nice Ui with PI chart and 
//Need to install it on your project using bellow command 
//  npm i -D @playwright/test allure-playwright
// the allure-result folder generate use this command : npx playwright test "--grep=@web or without any tag name " --reporter=line,allure-playwright
// allure-result folder is not in readable format
//to open the report use command: npx allure serve allure-results
//  


//12)
//Create a custom Script 
// To 
//  "scripts": {
//   "regression": "npx playwright test",
//   "WebTest": "npx playwright test --grep=@web",
//   "APITest": "npx playwright test --grep=@API"
// },

// To run the script use the command : npm run "script name"

//13)
/* Configure jenkins
 a. Search jenkins on google
 b. goto official web site of jenkins
 c. Click on Download
 d. always download stable version under the LTS(long term support)
 e. "jenkins.msi" file downloaded
 f. run the downloaded msi file follow the steps
 g. open URL:  https://localhost:8080/ 
 h. For password navigate to this location and copy the password"C:\ProgramData\Jenkins\.jenkins\secrets".
 i. Paste the copy password in the password section.
 j. Click on Continue button
 k. Select "Install suggested plugins" wait for all plugin installed successfully
 l. then you can see "Create First Admin User" 
      l.1. FIll all the input user name, password, confirm password, full name, email
      l.2 then click on Save and Continue then see Instance Configuration jenkins URL :"http://localhost:8080/"
      l.3 Click "Save and Finish"
 m. Click on "Start Using Jenkins"
 n. You are now on the Jenkins Home Page
*/

//14)
/*
Configure project with jenkins
 a. Log in jenkins
 b. Click on New Item
 c. Enter an item Name and Select Freestyle project, click omn "OK" Configure page will open
 d. Click On Advance in general
 e. Select Use custom workspace add local path of the project(If you have a git up repository select git and provide a git repo URL)
 f. Select Build Steps
      f.1 Click on "Add build step" button.
      f.2 select "Execute Windows batch command" from drop down for window
        (For mack Select "Execute shell" from dropdown)
      f.3 Add command to run the test cases: "npm run WebTest"
      f.4 Click On "Save" Then you will reach out to the jenkins dashboard.
  g. Click on "Build Now"
  h. jenkins triggered the build
  i.  If we have multiple script in "package.json" file you can manage those thing in jenkins also
      i.1 Click on Configure
      i.2 Select "This Project is parameterized" Then select "Add Parameter" dropdown.
      i.3 Select "Chose Parameter" option from the dropDown.
        a. Give name: "Script"
*/

//15)
//Git Push 
/*
  a. Open VSCode then Click On "Source Control" left side bellow the serch ICON
  b. Click on "Publish to GitHub"
  c. Ctrl + Shift + p On top search bar will open
  d. Search: git Add Remote then select "Add remote from Girhub"
    d.1 Need to authentication from git
    d.2 give authentication to git 
    d.3 Confirm the authentication go to VSCode Click on Account Button bellow the left bottom just above the Setting ICON
    d.4 You can able to see your github account in vsCode.
  e. Ctrl + Shift + p On top search bar will open
  f. Search Publish to GitHub 
      f.1 Two option display 
           1. Private Repository
           2. Public Repository
      f.2 Give name to TO the repository and select second option
  g. Click on "Source control"
      g.1 all the files will display under the Changes.
      g.2 Click on + button display just ahead to changes, All the files will move in to staged Changes
      g.3 On top Message text box will display, add a message what we want to related code.
      g.4 Click on "Commit"
      g.5 Add the changed file push in the github repository.
      g.6 Click On "Sync Changes" button 


       

*/

//Note: - 
// Try with Testrail report
/*
Nightly run, Schedule run regression run, smoke run, E2e, Sanityb
*/


/*
//windows yml
name: playwright-allure-report

on: [ push ]

jobs:
  build:
    runs-on: windows-latest
    steps:
    - uses: actions/checkout@v3
    - name: Use Node.js ${{ matrix.node-version }}
      uses: actions/setup-node@v3
      with:
        node-version: ${{ matrix.node-version }}
        cache: 'npm'
    - run: npm ci
    - name: Install Playwright Browsers
      run: npx playwright install --with-deps
    - run: npm run build --if-present
    - run: npm run test

    - name: Get Allure history
      uses: actions/checkout@v2
      if: always()
      continue-on-error: true
      with:
        ref: gh-pages
        path: gh-pages

    - name: Allure Report action from marketplace
      uses: simple-elf/allure-report-action@master
      if: always()
      id: allure-report
      with:
        allure_results: allure-results
        gh_pages: gh-pages
        allure_report: allure-report
        allure_history: allure-history

    - name: Deploy report to Github Pages
      if: always()
      uses: peaceiris/actions-gh-pages@v2
      env:
        PERSONAL_TOKEN: ${{ secrets.GITHUB_TOKEN }}
        PUBLISH_BRANCH: gh-pages
        PUBLISH_DIR: allure-history

*/

/*
//ubuntu yml

name: playwright-allure-report

on: [ push ]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v3
    - name: Use Node.js ${{ matrix.node-version }}
      uses: actions/setup-node@v3
      with:
        node-version: ${{ matrix.node-version }}
        cache: 'npm'
    - run: npm ci
    - name: Install Playwright Browsers
      run: npx playwright install --with-deps
    - run: npm run build --if-present
    - run: npm run test

    - name: Get Allure history
      uses: actions/checkout@v2
      if: always()
      continue-on-error: true
      with:
        ref: gh-pages
        path: gh-pages

    - name: Allure Report action from marketplace
      uses: simple-elf/allure-report-action@master
      if: always()
      id: allure-report
      with:
        allure_results: allure-results
        gh_pages: gh-pages
        allure_report: allure-report
        allure_history: allure-history

    - name: Deploy report to Github Pages
      if: always()
      uses: peaceiris/actions-gh-pages@v2
      env:
        PERSONAL_TOKEN: ${{ secrets.GITHUB_TOKEN }}
        PUBLISH_BRANCH: gh-pages
        PUBLISH_DIR: allure-history

*/