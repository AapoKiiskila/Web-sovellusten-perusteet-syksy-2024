document.getElementById("nextButton").addEventListener("click", nextImage);
document.getElementById("previousButton").addEventListener("click", previousImage);

const images = ["assets/images/bank-image1.png", "assets/images/bank-image2.jpg"];
let index = 0;

document.getElementById("projects-img").src = images[index];

function nextImage()
{
    index++;

    if (index >= images.length)
    {
        index = images.length - 1;
    }

    document.getElementById("projects-img").src = images[index];
}

function previousImage()
{
    index--;

    if (index <= 0)
    {
        index = 0;
    }

    document.getElementById("projects-img").src = images[index];
}
