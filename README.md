ADD numbers to display when pressed
IF newNumber is true than number input replaces display and changes variable
WHEN an operator is pressed
    IF first number is empty, occupy it- NewNumber boolean becomes true
    ELSEIF second number is empty, occupy and operate- replace firstnumber and clear second
    OCCUPY the operator
WHEN equal is pressed
    CLEAR the variables and add result to display- change NewNumber to true
UPDATE history based on operators pressed
    IF equal gets pressed add to history display
    IF operators get pressed replace history

ALTERNATIVE
ADD numbers to display when pressed
IF newNumber is true than number input replaces display and changes variable
UPDATE display-value variable whenever any input is done
WHEN an operator is pressed
    IF display-value includes an operator, do the operation and change variables
    ELSE add to display