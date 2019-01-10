var toutesLesQuestions = [

    {

        intitule: "Il établit un diagnostic et propose une stratégie pour améliorer l’image et la réputation numérique de son client",
        reponses: {
            rep1: ["Le modérateur", 0],
            rep2: ["Le médecin du web", 0],
            rep3: ["Le nettoyeur web", 1],
            rep4: ["L'administrateur de réseaux", 0]

        }

    },
    {
        intitule: "Il étudie la fiabilité du système d'information d'une entreprise et en assurer la sûreté :",
        reponses: {
            rep1: ["L'architecte réseau", 0],
            rep2: ["Le gestionnaire de parc micro-informatique", 0],
            rep3: ["Le policier informatique", 0],
            rep4: ["L'expert en sécurité informatique", 1]
        }
    },
    {
        intitule: "Il trie et analyse des millions de données pour mieux connaître les pratiques et attentes des clients de l'entreprise :",
        reponses: {
            rep1: ["L'analyste fonctionnel", 0],
            rep2: ["Le data scientist", 1],
            rep3: ["Le policier informatique", 0],
            rep4: ["L'expert en sécurité informatique", 0]
        }
    },
    {
        intitule: "Metteur en scène de l’image pour les films 3D, il conçoit ainsi tout ce qui constitue le champ visuel en intégrant les mouvements, les indications scéniques et même les décors :        ",
        reponses: {
            rep1: ["Le Layout Man", 1],
            rep2: ["Réalisateur 3D", 0],
            rep3: ["Dessinateur industriel", 0],
            rep4: ["Dessinateur 3D", 0]
        }
    } 
];
var n = 0;

var somme = 0;

function afficherQuestion() {
    console.log("ets");
    var affichageHtml = [];

    affichageHtml.push('<h1>' + toutesLesQuestions[n].intitule + '</h1>');

    for (var rep in toutesLesQuestions[n].reponses) {
        affichageHtml.push(
                '<button name="boutonRep" onclick="eventClick('
                + toutesLesQuestions[n].reponses[rep][1]
                + ')">'
                + toutesLesQuestions[n].reponses[rep][0]
                + '</button>'
                );
    }
    document.getElementById('form').innerHTML = affichageHtml.join("");
}

function montrerDetails(nb){

}

function finQuizz() {
    if (somme > 15) {
        document.getElementById('form').innerHTML = ('<h1> Il me semblerait que vous depassiez l\'âge maximum pour utiliser ce chatbot en toute sécurité'
                + 'un petit cours de rattrapage s\'impose...</h1>'
                + '<button name="boutonRdr" onclick="document.location.href="""nouvellepage.html"""">Continuer</button>');
    }else{
        document.getElementById('form').innerHTML = ('<h1> Vous avez passez les tests avec succès et avez prouvé votre appartenance à la génération Y</h1>'
                + '<button name="boutonRdr" onclick="document.location.href="""nouvellepage.html"""">Continuer</button>');
    }
}


function eventClick(ajout) {
    somme += ajout;
    n++;
    if (n >= toutesLesQuestions.length) {
        finQuizz();
    } else {
        afficherQuestion();
    }
}

