async function fetchRandomFood()
{
    for (i = 1; i <= 15; i++)
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
