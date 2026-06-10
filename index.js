
const btn = document.getElementById("btn");
const question = document.getElementById("question");
const reponse = document.getElementById("reponse");

btn.addEventListener("click", () => {
    const texte = question.value.toLowerCase();

    if (texte.includes("bonjour")) {
        reponse.textContent = "Hey, c'est comment mon gars 👋";
    } else if (texte.includes("heure")) {
        reponse.textContent = `Il est ${new Date().toLocaleTimeString()}`;
    } else if (texte.includes("nom")) {
        reponse.textContent = "Je suis une mini IA en JavaScript. aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa";
    } else if (texte.includes("salut")) {
        reponse.textContent = "Hey, quoi de neuf ?"; 
    } else {
        reponse.textContent = "Désolé, je ne comprends pas encore cette question.";
    }

    question.value = "";
});