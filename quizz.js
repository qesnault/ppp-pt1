var toutesLesQuestions = [

    {

        intitule: "Vous dites",
        reponses: {
            rep1: ["L'internet", 21],
            rep2: ["Internet", 45],
            rep3: ["Google", 45]

        }

    },
    {
        intitule: "Petit.e vous jouyez avec",
        reponses: {
            rep1: ["Un baton (et vous étiez bien content.e)", 21],
            rep2: ["Une console", 45],
            rep3: ["Des playmobils", 55]
        }
    },
    {
        intitule: "Tu connais wankil ?",
        reponses: {
            rep1: ["Oui", 21],
            rep2: ["Non", 45]
        }
    },
    {
        intitule: "Votre PC (ordinateur) se met à bugger",
        reponses: {
            rep1: ["Vous cherchez une solution par vous même", 21],
            rep2: ["Vous appelez Timothé, votre petit fils", 45],
        }
    },
    {
        intitule: "Ce questionnaire est-il trop petit ?",
        reponses: {
            rep1: ["J'ai mal aux yeux", 21],
            rep2: ["Non", 45],
        }
    },

    {
        intitule: "Tu connais René Cotis ?",
        reponses: {
            rep1: ["Oui, il était chmpion d'escrime", 21],
            rep2: ["Oui, il était président de la Républqiue", 45],
            rep2: ["René qui ??", 45]


        }
    },

    {
        intitule: "Combien coutait le pain quand tu était petit.e ?",
        reponses: {
            rep1: ["1 euro", 21],
            rep2: ["3 francs", 45],

        }
    },
            //Répeter pour chaque question

];//Répeter pour chaque question
var n = 0;

var somme = 0;

function afficherQuestion() {
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