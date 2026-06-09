const { exec } = require("child_process");

function autoCommit() {
    exec("git status --short", (err, stdout) => {
        if (!stdout.trim()) return;

        let message = "Mise à jour du projet";

        if (stdout.includes(".js")) {
            message = "Modification du code JavaScript";
        }

        exec(
            `git add . && git commit -m "${message}" && git push`,
            (err, stdout) => {
                if (err) {
                    console.log(err.message);
                    return;
                }

                console.log("Commit effectué !");
            }
        );
    });
}

setInterval(autoCommit, 300000); // toutes les 15 minutes

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
        reponse.textContent = "Je suis une mini IA en JavaScript.";
    } else if (texte.includes("salut")) {
        reponse.textContent = "Hey, quoi de neuf ?"; 
    } else {
        reponse.textContent = "Désolé, je ne comprends pas encore cette question.";
    }

    question.value = "";
});