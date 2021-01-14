Feature: Incrementing

    Background: some pre -requisite
        Given This is some prerequisite


    Scenario: Incrementing number by 5
        Given  number is 3
        When  number is incremented by 5
        Then  the number should be 8

    Scenario: Incrementing number by 6
        Given  number is 6
        When  number is incremented by 6
        Then  the number should be 12

    Scenario Outline: Increment number
        Given  number is <num>
        When  number is incremented by <increment>
        Then  the number should be <result>

        Examples:
            | num | increment | result |
            | 5   | 3         | 8      |
            | 6   | 6         | 12     |
            | 7   | 4         | 11     |
