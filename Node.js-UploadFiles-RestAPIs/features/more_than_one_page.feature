Feature: Is there more than one page of files?
  I want to check if show the Load more... button

  Scenario: 5 files are less than a full page
    Given there are 5 files
    When I ask whether is there more than one page
    Then I should be told "Nope"

  
