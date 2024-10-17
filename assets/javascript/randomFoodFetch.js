document.getElementById("foodInput").addEventListener("keyup", filterFoods);
document.getElementById("sortFoodsButton").addEventListener("click", sortFoods);
document.getElementById("fetchFoodsButton").addEventListener("click", fetchRandomFood);

function filterFoods()
{
    const filter = document.getElementById("foodInput").value.toLowerCase();
    const foods = document.querySelectorAll("#foodList li");

    for (let i = 0; i < foods.length; i++)
    {
        const nameOfFood = foods[i].innerText.toLowerCase();

        if (nameOfFood.startsWith(filter))
        {
            foods[i].style.display = "";
        }

        else
        {
            foods[i].style.display = "none";
        }
    }
}

function sortFoods()
{
    const foodArray = [];
    const foods = document.querySelectorAll("#foodList li");

    for (let i = 0; i < foods.length; i++)
    {
        foodArray.push(foods[i].innerText);
    }

    foodArray.sort();

    for (let i = 0; i < foods.length; i++)
    {
        foods[i].innerText = foodArray[i];
    }
}

async function fetchRandomFood()
{
    const foodlist = document.getElementById("foodList");

    while (foodlist.hasChildNodes())
    {
        foodlist.removeChild(foodlist.firstChild)
    }

    for (let i = 0; i < 15; i++)
    {    
        try
        {
            const response = await fetch("https://www.themealdb.com/api/json/v1/1/random.php");
            const data = await response.json();
            
            const listItem = document.createElement("li");
            listItem.innerText = data.meals[0].strMeal;

            foodlist.appendChild(listItem);
        }

        catch (error)
        {
            alert(error);
            break;
        }
    }
}
