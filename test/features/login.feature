Feature: Performing a login

    Background: Login
        Given I am on the herokuapp login page

    Scenario: Performing login operation with passing test data as data table
        When I login with username and password "USER" "PASSWORD" into the text box
        Then I should see the message "Welcome to the Secure Area. When you are done click logout below." on the landing page

        # Examples:
        # |user| |password|
        # |"tomsmith"| |"SuperSecretPassword!"|
