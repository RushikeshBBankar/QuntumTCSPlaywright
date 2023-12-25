const { test, expect } = require('@playwright/test');
const { beforeEach, afterEach } = require('node:test');


/*
Hook in playwright
 1. describe
 2. beforeEach
 3. beforeAll
 4. afterEach
 5. afterAll 
*/
test.describe("This is a describe block", () => {
        beforeEach(()=>{
        // perform before each test execution
        })
        test("This is Test case title", () => {

        })

        afterEach(()=>{
                //perform after each test case
        })
})