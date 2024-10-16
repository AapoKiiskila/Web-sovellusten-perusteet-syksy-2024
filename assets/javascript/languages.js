class Language
{
    constructor(language, level)
    {
        this.language = language;
        this.level = level;
    }
}

const languages = [new Language("Finnish", "Native"), new Language("English", "Fluent"), new Language("Swedish", "Basics")];

function displayLanguages()
{
    for (let i = 0; i < languages.length; i++)
    {
        const object = languages[i];
        const li = document.createElement("li");
        li.innerText = object.language + " - " + object.level;
        document.getElementById("languagesList").appendChild(li);
    }
}

displayLanguages();
