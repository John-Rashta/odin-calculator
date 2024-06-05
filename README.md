ADD numbers to display when pressed
IF newNumber is true than number input replaces display and changes variable
WHEN an operator is pressed
    IF first number is empty, occupy it- NewNumber boolean becomes true
    ELSEIF second number is empty, occupy and operate- replace firstnumber and clear second
    OCCUPY the operator

ALTERNATIVE
ADD numbers to display when pressed
IF newNumber is true than number input replaces display and changes variable
UPDATE display-value variable whenever any input is done
WHEN an operator is pressed
    IF display-value includes an operator, do the operation and change variables
    ELSE add to display