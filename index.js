const btn = document.getElementById("btn");
const question = document.getElementById("question");
const reponse = document.getElementById("reponse");
const review = document.getElementById(review)

btn.addEventListener("click", () => {
    const texte = question.value.toLowerCase();

    // message utilisateur
    review.innerHTML += `
        <p class="bg-blue-100 p-2 rounded-xl mb-2">
            ${texte}
        </p>
    `;

    let bot = "";

    if (texte.includes("bonjour")) {
        bot = "Hey, c'est comment mon gars 👋";
    } else if (texte.includes("heure")) {
        bot = `Il est ${new Date().toLocaleTimeString()}`;
    } else if (texte.includes("nom")) {
        bot = "Je suis une mini IA en JavaScript.";
    } else if (texte.includes("salut")) {
        bot = "Hey, quoi de neuf ?";
    } else {
        bot = "Désolé, je ne comprends pas encore cette question.";
    }

    // réponse bot
    reponse.innerHTML += `
        <p class="bg-gray-100 p-2 rounded-xl mb-2">
            ${bot}
        </p>
    `;

    question.value = "";
});