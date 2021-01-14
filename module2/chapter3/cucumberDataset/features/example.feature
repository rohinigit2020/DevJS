Feature: cucumber data tables

    Scenario: Demo on data tables
        Given Numbers are
            | number | anotherNum |
            |2       | 5          |
            |3       | 6          |
            |7       | 9          |
            |13      | 15          |

    @run
    Scenario: Different expressions
        Given name is 'Rohini'
        Given float is 3.45
        Given some data is 34vhb2jh
        Given I have 10 Rupees
        Given I have 10 Rupee
        Given I like shoes
        Given I like sandles
        Given I like handbags
