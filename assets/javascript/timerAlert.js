setTimeout(thankYouAlert, 5000);
setInterval(setFontWeight, 1000);

function thankYouAlert()
{
    alert("Thank you for visiting this web page!");
}

function setFontWeight()
{
    const box = document.getElementById("projects-GitHub");

    if (box.style.fontWeight == "")
    {
        box.style.fontWeight = "bold";
    }

    else
    {
        box.style.fontWeight = "";
    }
}
