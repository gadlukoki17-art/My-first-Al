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
