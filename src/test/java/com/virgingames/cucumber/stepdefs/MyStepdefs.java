package com.virgingames.cucumber.stepdefs;/*
Created by SP
*/

import com.virgingames.pages.HomePage;
import com.virgingames.pages.LoginPage;
import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;

public class MyStepdefs {

    /*
     * defining methods to the various steps in the feature file
     * corresponding methods to called in the various pages classes in pages folder
     */

    @Given("^I am on Home page$")
    public void iAmOnHomePage() {

    }

    @When("^I click on Login link$")
    public void iClickOnLoginLink() {
        new HomePage().clickOnLoginLink();

    }

    @Then("^I should navigate to login page successfully$")
    public void iShouldNavigateToLoginPageSuccessfully() {
        Assert.assertEquals(new LoginPage().getJoinNowText(),"Join Now");
    }

    @And("^I enter invalid username \"([^\"]*)\"$")
    public void iEnterInvalidUsername(String username)  {
        new LoginPage().enterUserName(username);

    }

    @And("^I enter invalid password \"([^\"]*)\"$")
    public void iEnterInvalidPassword(String password)  {
        new LoginPage().enterPassword(password);

    }
    @And("^I click on Login Button$")
    public void iClickOnLoginButton() {
    new LoginPage().clickOnLoginButton();
    }

    @Then("^I should see error message \"([^\"]*)\"$")
    public void iShouldSeeErrorMessage(String errorMessage) {
    Assert.assertEquals(new LoginPage().getErrorMessageText(errorMessage), errorMessage);

    }
}
