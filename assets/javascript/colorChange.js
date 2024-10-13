document.getElementById("colorButton").addEventListener("click", changeBackgroundColor);

function changeBackgroundColor()
{
    document.body.style.background = document.getElementById("colorInput").value;
}
