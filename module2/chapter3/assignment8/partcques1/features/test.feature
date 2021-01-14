Feature: : Library


    Scenario: Correct non-zero number of books found by author
        Given I have the following books in the store
            | title                                 | author      |
            | The devil in the White City           | Erik Larson |
            | The Lion,The Witches and the Wradrobe | C.S Lewis   |
            | In the Garden of Beasts               | Erik Larson |
        When  I search books by author 'Erik Larson'
        Then I find 2 books