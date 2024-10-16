document.getElementById("foodInput").addEventListener("keyup", filterFoods);
document.getElementById("sortFoodsButton").addEventListener("click", sortFoods);

function filterFoods()
{
    const filter = document.getElementById("foodInput").value.toLowerCase();
    const listOfFoods = document.getElementById("foodList");
    const foods = listOfFoods.querySelectorAll("li");

    for (let i = 0; i <= foods.length; i++)
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
    const listOfFoods = document.getElementById("foodList");
    const foods = listOfFoods.querySelectorAll("li");

    for (let i = 0; i < foods.length; i++)
    {
        foodArray.push(foods[i].innerHTML);
    }

    foodArray.sort();

    for (let i = 0; i < foods.length; i++)
    {
        foods[i].innerHTML = foodArray[i];
    }
}

async function fetchRandomFood()
{
    for (let i = 1; i <= 15; i++)
    {    
        try
        {
            const response = await fetch("https://www.themealdb.com/api/json/v1/1/random.php");
            const data = await response.json();
            
            const listItem = document.createElement("li");
            listItem.innerText = data.meals[0].strMeal;

            document.getElementById("foodList").appendChild(listItem);
        }

        catch (error)
        {
            alert(error);
        }
    }
}

fetchRandomFood();
