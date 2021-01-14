Feature: Mathemetical Calculation

     This feature we are going to test addition, substraction, multiplication and division

    @execute
    Scenario: Addition of two numbers
        Given The two numbers are 15 and 10
        When Both the numbers are added
        Then The result should be 25

    @reexecute
    Scenario: Addition of another two numbers
        Given The two numbers are 15 and 10
        When Both the numbers are added
        Then The result should be 26