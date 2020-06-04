package com.virgingames.pages;

/*
Created by SP
*/

/* LoginPage extends to Utility for the methods that needs to be performed.
 * Listing all the elements through their locators
 */

import com.cucumber.listener.Reporter;
import com.virgingames.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class LoginPage extends Utility {

    /*
     * Private static Logger for logging the elements and methods into the log4j
     * log.info will record the info into log4j and logs
     * Reporter.addStep will record info into extent-report
     * Using selenium @Findby and initElement methods for locators/elements
     * Using "_" before locater name will help separate them from variable
     * Creating methods applicable to various locators
     */

    private static final Logger log = LogManager.getLogger(LoginPage.class.getName());

    @FindBy(linkText = "Join Now")
        WebElement _joinNow;

    public String getJoinNowText() {
        Reporter.addStepLog("Getting Join Now Text Message : " + _joinNow.toString());
        log.info(" Getting Join Now Text Message : " + _joinNow.toString());
        return getTextFromElement(_joinNow);
    }

    @FindBy(id = "field-username")
    WebElement _usernameField;

    public void enterUserName(String username) {
        Reporter.addStepLog("Entering Username : " + username+ " On Username Field " + _usernameField.toString());
        clickOnElement(_usernameField);
        sendTextToElement(_usernameField, username);
        log.info("Entering Username : " + username + " On Username Field " + _usernameField.toString());
    }

    @FindBy(id = "field-password")
    WebElement _passwordField;

    public void enterPassword(String password) {
        Reporter.addStepLog("Entering password : " + password+ " On Password Field " + _passwordField.toString());
        clickOnElement(_passwordField);
        sendTextToElement(_passwordField, password);
        log.info("Entering Username : " + password + " On Password Field " + _passwordField.toString());
    }
    @FindBy(xpath = "//button[@class='button button-login']")
    WebElement _loginButton;

    public void clickOnLoginButton() {
        Reporter.addStepLog("Clicking on Login Button : " + _loginButton.toString());
        clickOnElement(_loginButton);
        log.info("Clicking on Login Link : " + _loginButton.toString());

    }
        @FindBy(xpath = "//div[@class='output']")
    WebElement _errorMessage;

    public String getErrorMessageText(String errorMessage) {
        Reporter.addStepLog(" Getting Error Message Text : " + errorMessage + _errorMessage.toString());
        log.info("Clicking Error Message Text : " + errorMessage + _errorMessage.toString());
        return getTextFromElement(_errorMessage);
    }

}
