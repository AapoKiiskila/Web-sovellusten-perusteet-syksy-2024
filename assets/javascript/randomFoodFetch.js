document.getElementById("foodInput").addEventListener("keyup", filterFoods);


function filterFoods()
{
    const filter = document.getElementById("foodInput").value.toLowerCase();
    const listOfFoods = document.getElementById("foodList");
    const foods = listOfFoods.querySelectorAll("#foodList li");

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
