@Login
Feature: Login functionality
  As a user I want to login into Virgin Games Website

  Scenario: User should navigate to login page successfully
    Given I am on Home page
    When I click on Login link
    Then I should navigate to login page successfully

  Scenario Outline: User should not be able to login with invalid Credentials
    Given I am on Home page
    When I click on Login link
    And I enter invalid username "<username>"
    And I enter invalid password "<password>"
    And I click on Login Button
    Then I should see error message "<errorMessage>"
    Examples:
      | username           | password   | errorMessage                                                              |
      | Roger123@gmail.com | Roger1980  | Please try again, your username/email or password has not been recognised |
      | jamesbond123       | bond123    | Please try again, your username/email or password has not been recognised |
      |                    | testing123 | Both your username and password are required                              |
      | BorisJohnson       |            | Both your username and password are required                              |
      | 123                |            | Both your username and password are required                              |



