Feature: Calculator

  A super calculator that performs operations on two numbers.

  Scenario: Add two numbers
    Given I have navigated to the calculator
    When I add two numbers "1" and "2"
    Then the displayed output should be "3"

  Scenario: Add two numbers
    Given I have navigated to the calculator
    When I add two numbers "4" and "6"
    Then the displayed output should be "10"
