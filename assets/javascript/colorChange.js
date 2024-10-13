document.getElementById("colorButton").addEventListener("click", changeBackgroundColor);
document.getElementById("colorInput").addEventListener("keydown", doNothing);

function changeBackgroundColor()
{
    document.body.style.background = document.getElementById("colorInput").value;
}

function doNothing(event)
{
    if (event.key == "Enter")
    {
        event.preventDefault();
    }
}