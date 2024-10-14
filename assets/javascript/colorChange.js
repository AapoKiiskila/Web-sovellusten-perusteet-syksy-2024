document.getElementById("colorButton").addEventListener("click", changeBackgroundColor);
document.getElementById("colorInput").addEventListener("keydown", doNothing);

function changeBackgroundColor()
{
    try
    {
        if (document.getElementById("colorInput").value == "")
        {
            throw "Enter a color!"
        }

        else if (!CSS.supports("background", document.getElementById("colorInput").value))
        {
            throw "Enter a valid color!"
        }
  
        document.body.style.background = document.getElementById("colorInput").value;
    }

    catch (err)
    {
        alert(err);
    }
}

function doNothing(event)
{
    if (event.key == "Enter")
    {
        event.preventDefault();
    }
}
