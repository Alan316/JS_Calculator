Memory = "0";       // to initialize a memory variable
Current = 0;      // Current Value of Display
Operation = 0;    // +, -, *, / 
MAXLENGTH = 17;   // maximum length of digits before decimal. Will be adjusted.

function AddDigit(dig)  {//This function will add digits to the display.
if (Current.length > MAXLENGTH) 
    {
    Current = "ERROR! Number is too long!"; //we've reached length limit
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


function decPoint()
{
    if (Current.length === 0)
        {
            Current = "0.";
        }
    
    else 
        {
    if (Current.indexOf(".") == -1)  //checks to see if a decimal point already exists in the number
        {
            Current =  Current + ".";
        }
    document.getElementById("Display").value = Current; 
}
}


function exponent()
{
if (Current.indexOf("e") == -1 )
    {
    Current = Current + "e0";
    document.getElementById("Display").value = Current; 
    }
}


function PlusMinus()
 {
  if  (Current.indexOf("e") != -1)  //if there is an exponent:
    { 
        var epos = Current.indexOf("e-");
        if (epos != -1)
         {
            Current = Current.substring(0,1+epos) + Current.substring(2+epos); //clip -ve exp 
         } 
            else
         { 
            epos = Current.indexOf("e");
            Current = Current.substring(0,1+epos) + "-" + Current.substring(1+epos); //insert
         }
    } else                         //there is NO exponent:
    {  
        if ( Current.indexOf("-") === 0 )
         { 
            Current = Current.substring(1);
         } 
            else
         { 
            Current = "-" + Current;
         }
    }
    document.getElementById("Display").value = Current; 
 }
