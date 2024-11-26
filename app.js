/* en premier une pop qui apparait dans laquelle on peut noter 1 2 3 1 correspond au bpapier 2 correspond au caillou et 3 correspond au cisaux
maintant l'utilisateur fais un choix si il fais le ciseaux alors il gagne contre le papier mais il perd contre le caillou
si il fais la feuille il gagne contre la pierre mais aps contre le ciseaux
si il fazit la pierre alors il paire contre la feuille mais gagne contre le ciseaux
si la valeur est la meme des deux cote alors egalité

const papier = 1;
const caillou =2;
const ciseaux =3;*/

// Jeu Pierre-Feuille-Ciseaux
const jouer = () => {
    const choix = ["pierre", "feuille", "ciseaux"];

    // Obtenir le choix de l'utilisateur
    let utilisateur = prompt("Pierre, feuille ou ciseaux ?").toLowerCase();
    while (!choix.includes(utilisateur)) {
        utilisateur = prompt("Choix invalide. Essayez encore : pierre, feuille ou ciseaux ?").toLowerCase();
    }

    // Choix de l'ordinateur (aléatoire)
    const ordinateur = choix[Math.floor(Math.random() * choix.length)];

    // Déterminer le gagnant
    if (utilisateur === ordinateur) {
        alert(`Égalité ! Vous avez tous les deux choisi ${utilisateur}.`);
    } else if (
        (utilisateur === "pierre" && ordinateur === "ciseaux") ||
        (utilisateur === "feuille" && ordinateur === "pierre") ||
        (utilisateur === "ciseaux" && ordinateur === "feuille")
    ) {
        alert(`Bravo, vous avez gagné ! 🎉 (${utilisateur} bat ${ordinateur})`);
    } else {
        alert(`Dommage, l'ordinateur a gagné ! 🤖 (${ordinateur} bat ${utilisateur})`);
    }
};

// Lancer le jeu
jouer();