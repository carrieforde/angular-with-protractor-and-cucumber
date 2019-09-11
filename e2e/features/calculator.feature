Feature: Calculator

  A super calculator that performs operations on two numbers.

  Scenario Outline: Add two numbers
    Given I have navigated to the calculator
    When I add two numbers "<first>" and "<second>"
    Then the displayed output should be "<result>"

    Examples:
      | first | second | result |
      | 1     | 2      | 3      |
      | 4     | 6      | 10     |
      | 13    | 13     | 26     |
      | 234   | 4564   | 4798   |
