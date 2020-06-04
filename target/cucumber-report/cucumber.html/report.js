$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/com/virgingames/resources/featurefile/login.feature");
formatter.feature({
  "line": 2,
  "name": "Login functionality",
  "description": "As a user I want to login into Virgin Games Website",
  "id": "login-functionality",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Login"
    }
  ]
});
formatter.before({
  "duration": 24777045400,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "User should navigate to login page successfully",
  "description": "",
  "id": "login-functionality;user-should-navigate-to-login-page-successfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "I am on Home page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click on Login link",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I should navigate to login page successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.iAmOnHomePage()"
});
formatter.result({
  "duration": 2487393100,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iClickOnLoginLink()"
});
formatter.result({
  "duration": 51279182000,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iShouldNavigateToLoginPageSuccessfully()"
});
formatter.result({
  "duration": 234907100,
  "status": "passed"
});
formatter.after({
  "duration": 3524602400,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 10,
  "name": "User should not be able to login with invalid Credentials",
  "description": "",
  "id": "login-functionality;user-should-not-be-able-to-login-with-invalid-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 11,
  "name": "I am on Home page",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "I click on Login link",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I enter invalid username \"\u003cusername\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I enter invalid password \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I click on Login Button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I should see error message \"\u003cerrorMessage\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 17,
  "name": "",
  "description": "",
  "id": "login-functionality;user-should-not-be-able-to-login-with-invalid-credentials;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "errorMessage"
      ],
      "line": 18,
      "id": "login-functionality;user-should-not-be-able-to-login-with-invalid-credentials;;1"
    },
    {
      "cells": [
        "Roger123@gmail.com",
        "Roger1980",
        "Please try again, your username/email or password has not been recognised"
      ],
      "line": 19,
      "id": "login-functionality;user-should-not-be-able-to-login-with-invalid-credentials;;2"
    },
    {
      "cells": [
        "jamesbond123",
        "bond123",
        "Please try again, your username/email or password has not been recognised"
      ],
      "line": 20,
      "id": "login-functionality;user-should-not-be-able-to-login-with-invalid-credentials;;3"
    },
    {
      "cells": [
        "",
        "testing123",
        "Both your username and password are required"
      ],
      "line": 21,
      "id": "login-functionality;user-should-not-be-able-to-login-with-invalid-credentials;;4"
    },
    {
      "cells": [
        "BorisJohnson",
        "",
        "Both your username and password are required"
      ],
      "line": 22,
      "id": "login-functionality;user-should-not-be-able-to-login-with-invalid-credentials;;5"
    },
    {
      "cells": [
        "123",
        "",
        "Both your username and password are required"
      ],
      "line": 23,
      "id": "login-functionality;user-should-not-be-able-to-login-with-invalid-credentials;;6"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 15617239500,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "User should not be able to login with invalid Credentials",
  "description": "",
  "id": "login-functionality;user-should-not-be-able-to-login-with-invalid-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Login"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "I am on Home page",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "I click on Login link",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I enter invalid username \"Roger123@gmail.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I enter invalid password \"Roger1980\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I click on Login Button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I should see error message \"Please try again, your username/email or password has not been recognised\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.iAmOnHomePage()"
});
formatter.result({
  "duration": 45300,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iClickOnLoginLink()"
});
formatter.result({
  "duration": 51403883600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Roger123@gmail.com",
      "offset": 26
    }
  ],
  "location": "MyStepdefs.iEnterInvalidUsername(String)"
});
formatter.result({
  "duration": 676322900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Roger1980",
      "offset": 26
    }
  ],
  "location": "MyStepdefs.iEnterInvalidPassword(String)"
});
formatter.result({
  "duration": 577015300,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iClickOnLoginButton()"
});
formatter.result({
  "duration": 421501400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Please try again, your username/email or password has not been recognised",
      "offset": 28
    }
  ],
  "location": "MyStepdefs.iShouldSeeErrorMessage(String)"
});
formatter.result({
  "duration": 120086600,
  "status": "passed"
});
formatter.after({
  "duration": 2891889000,
  "status": "passed"
});
formatter.before({
  "duration": 12554894400,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "User should not be able to login with invalid Credentials",
  "description": "",
  "id": "login-functionality;user-should-not-be-able-to-login-with-invalid-credentials;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Login"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "I am on Home page",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "I click on Login link",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I enter invalid username \"jamesbond123\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I enter invalid password \"bond123\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I click on Login Button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I should see error message \"Please try again, your username/email or password has not been recognised\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.iAmOnHomePage()"
});
formatter.result({
  "duration": 54000,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iClickOnLoginLink()"
});
formatter.result({
  "duration": 58844677700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "jamesbond123",
      "offset": 26
    }
  ],
  "location": "MyStepdefs.iEnterInvalidUsername(String)"
});
formatter.result({
  "duration": 1662470200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "bond123",
      "offset": 26
    }
  ],
  "location": "MyStepdefs.iEnterInvalidPassword(String)"
});
formatter.result({
  "duration": 948852700,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iClickOnLoginButton()"
});
formatter.result({
  "duration": 465643700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Please try again, your username/email or password has not been recognised",
      "offset": 28
    }
  ],
  "location": "MyStepdefs.iShouldSeeErrorMessage(String)"
});
formatter.result({
  "duration": 807323700,
  "status": "passed"
});
formatter.after({
  "duration": 5574600400,
  "status": "passed"
});
formatter.before({
  "duration": 13026064500,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "User should not be able to login with invalid Credentials",
  "description": "",
  "id": "login-functionality;user-should-not-be-able-to-login-with-invalid-credentials;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Login"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "I am on Home page",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "I click on Login link",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I enter invalid username \"\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I enter invalid password \"testing123\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I click on Login Button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I should see error message \"Both your username and password are required\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.iAmOnHomePage()"
});
formatter.result({
  "duration": 62200,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iClickOnLoginLink()"
});
formatter.result({
  "duration": 62335997900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 26
    }
  ],
  "location": "MyStepdefs.iEnterInvalidUsername(String)"
});
formatter.result({
  "duration": 351345900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "testing123",
      "offset": 26
    }
  ],
  "location": "MyStepdefs.iEnterInvalidPassword(String)"
});
formatter.result({
  "duration": 476095300,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iClickOnLoginButton()"
});
formatter.result({
  "duration": 459238300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Both your username and password are required",
      "offset": 28
    }
  ],
  "location": "MyStepdefs.iShouldSeeErrorMessage(String)"
});
formatter.result({
  "duration": 63966400,
  "status": "passed"
});
formatter.after({
  "duration": 3445601800,
  "status": "passed"
});
formatter.before({
  "duration": 12590519700,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "User should not be able to login with invalid Credentials",
  "description": "",
  "id": "login-functionality;user-should-not-be-able-to-login-with-invalid-credentials;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Login"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "I am on Home page",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "I click on Login link",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I enter invalid username \"BorisJohnson\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I enter invalid password \"\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I click on Login Button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I should see error message \"Both your username and password are required\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.iAmOnHomePage()"
});
formatter.result({
  "duration": 111100,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iClickOnLoginLink()"
});
formatter.result({
  "duration": 57963665800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "BorisJohnson",
      "offset": 26
    }
  ],
  "location": "MyStepdefs.iEnterInvalidUsername(String)"
});
formatter.result({
  "duration": 547663800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 26
    }
  ],
  "location": "MyStepdefs.iEnterInvalidPassword(String)"
});
formatter.result({
  "duration": 336676200,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iClickOnLoginButton()"
});
formatter.result({
  "duration": 407002700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Both your username and password are required",
      "offset": 28
    }
  ],
  "location": "MyStepdefs.iShouldSeeErrorMessage(String)"
});
formatter.result({
  "duration": 81009900,
  "status": "passed"
});
formatter.after({
  "duration": 4079415500,
  "status": "passed"
});
formatter.before({
  "duration": 12950313400,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "User should not be able to login with invalid Credentials",
  "description": "",
  "id": "login-functionality;user-should-not-be-able-to-login-with-invalid-credentials;;6",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Login"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "I am on Home page",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "I click on Login link",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I enter invalid username \"123\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I enter invalid password \"\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I click on Login Button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I should see error message \"Both your username and password are required\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.iAmOnHomePage()"
});
formatter.result({
  "duration": 41300,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iClickOnLoginLink()"
});
formatter.result({
  "duration": 58979977900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123",
      "offset": 26
    }
  ],
  "location": "MyStepdefs.iEnterInvalidUsername(String)"
});
formatter.result({
  "duration": 478854600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 26
    }
  ],
  "location": "MyStepdefs.iEnterInvalidPassword(String)"
});
formatter.result({
  "duration": 416143600,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iClickOnLoginButton()"
});
formatter.result({
  "duration": 338479900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Both your username and password are required",
      "offset": 28
    }
  ],
  "location": "MyStepdefs.iShouldSeeErrorMessage(String)"
});
formatter.result({
  "duration": 54789900,
  "status": "passed"
});
formatter.after({
  "duration": 3278353600,
  "status": "passed"
});
});