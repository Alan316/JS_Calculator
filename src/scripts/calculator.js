Memory = "0";       // to initialize a memory variable
Current = 0;      // Current Value of Display
Operation = 0;    // +, -, *, / 
MAXLENGTH = 22;   // maximum length of digits before decimal. Will be adjusted.

function AddDigit(dig)  {//This function will add digits to the display.
if (Current.length > MAXLENGTH) 
    {
    Current = "Number is too long!!!!"; //we've reached length limit
    }
    else
    {
        if ( (Current === 0) && (Current % 1 === 0) )  //Don't need Eval statement Gives Warning - Checking for Decimil point with Modus.
        { 
            Current = dig;
            
        }
        else
        { 
            Current = Current + dig;
        }
    }
    document.getElementById("Display").value = Current;
    }


