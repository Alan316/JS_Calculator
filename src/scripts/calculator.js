Memory = "0";       // to initialize a memory variable
CurrentDisp = 0;      // CurrentDisp Value of Display
Operation = 0;    // +, -, *, / 
MAXLENGTH = 17;   // maximum length of digits before decimal. Will be adjusted.

function AddDigit(dig)  {//This function will add digits to the display.
if (CurrentDisp.length > MAXLENGTH) 
    {
    CurrentDisp = "ERROR! Number is too long!"; //we've reached length limit
    }
    else
    {
        if ( (CurrentDisp === 0) && (CurrentDisp % 1 === 0) )  //Don't need Eval statement Gives Warning - Checking for Decimil point with Modus.
        { 
            CurrentDisp = dig;
            
        }
        else
        { 
            CurrentDisp = CurrentDisp + dig;
        }
    }
    document.getElementById("Display").value = CurrentDisp;
    }


function decPoint()
{
    if (CurrentDisp.length === 0)
        {
            CurrentDisp = "0.";
        }
    
    else 
        {
    if (CurrentDisp.indexOf(".") == -1)  //checks to see if a decimal point already exists in the number
        {
            CurrentDisp =  CurrentDisp + ".";
        }
    document.getElementById("Display").value = CurrentDisp; 
}
}


function exponent()
{
if (CurrentDisp.indexOf("e") == -1 )
    {
    CurrentDisp = CurrentDisp + "e0";
    document.getElementById("Display").value = CurrentDisp; 
    }
}


function PlusMinus()
 {
  if  (CurrentDisp.indexOf("e") != -1)  //Checking for the exponent
    { 
        var epos = CurrentDisp.indexOf("e-");
        if (epos != -1)
         {
            CurrentDisp = CurrentDisp.substring(0,1+epos) + CurrentDisp.substring(2+epos);
         } 
            else
         { 
            epos = CurrentDisp.indexOf("e");
            CurrentDisp = CurrentDisp.substring(0,1+epos) + "-" + CurrentDisp.substring(1+epos);
         }
    } else                          //no ecponent           
    {  
        if ( CurrentDisp.indexOf("-") === 0 )
         { 
            CurrentDisp = CurrentDisp.substring(1);
         } 
            else
         { 
            CurrentDisp = "-" + CurrentDisp;
         }
    }
    document.getElementById("Display").value = CurrentDisp; 
 }

function ClearDisp()        //Clear Current Entry
 { CurrentDisp = "";
 document.getElementById("Display").value = CurrentDisp;
 }

function AllClear()         //Clear all entries including operation and memory
 { CurrentDisp = "";
   Operation = 0;            
   Memory = "0";                 
   document.getElementById("Display").value = CurrentDisp;
 }
