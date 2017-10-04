Memory = "0";       // to initialize a memory variable
CurrentDisp = 0;      // CurrentDisp Value of Display
Operation = 0;    // +, -, *, / 
MAXLENGTH = 17;   // maximum length of digits before decimal. Will be adjusted.

function AddDigit(dig)
{
    if (CurrentDisp.length > MAXLENGTH) 
    {
        CurrentDisp = "ERROR! Number is too long!"; // we've reached length limit
    }
    else
    {
        if ((CurrentDisp === 0) && (CurrentDisp % 1 === 0))  //Don't need Eval statement Gives Warning - Checking for Decimil point with Modus.
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
        if (CurrentDisp.indexOf(".") == -1) //checks to see if a decimal point already exists in the number
        {
            CurrentDisp =  CurrentDisp + ".";
        }
        document.getElementById("Display").value = CurrentDisp; 
    }
}


function exponent()
{
    if (CurrentDisp.indexOf("e") == -1)
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
    }
    else //no exponent           
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

function ClearDisp() // Clear CurrentDisp Entry
{
    CurrentDisp = "";
    document.getElementById("Display").value = CurrentDisp;
}

function AllClear() //Clear all entries including operation and memory
{
    CurrentDisp = "";
    Operation = 0;            
    Memory = "0";                 
    document.getElementById("Display").value = CurrentDisp;
}

function Operations(op)           
{
    if (op.indexOf("*") > -1) { Operation = 1; }       //multiply
    if (op.indexOf("/") > -1) { Operation = 2; }       //divide
    if (op.indexOf("+") > -1) { Operation = 3; }       //add
    if (op.indexOf("-") > -1) { Operation = 4; }       //subtrack

    Memory = CurrentDisp;                 
    CurrentDisp = "";                     
    document.getElementById("Display").value = CurrentDisp;
}

function Calculate()            
{
    var MemoryObject = parseInt(Memory);
    var CurrentObject = parseInt(CurrentDisp); 
    console.log (Memory + CurrentDisp);
    if (Operation == 1) { CurrentDisp = (MemoryObject * CurrentObject);}
    if (Operation == 2) { CurrentDisp = (MemoryObject / CurrentObject);}
    if (Operation == 3) { CurrentDisp = (MemoryObject + CurrentObject);}
    if (Operation == 4) { CurrentDisp = (MemoryObject - CurrentObject);}
    Operation = 0;                
    Memory = "0";         
    document.getElementById("Display").value = CurrentDisp;
}
 

 
