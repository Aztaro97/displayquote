var btn = document.querySelector('#btn');
var quoteDiv = document.querySelector('#quote');

var quotes = [
    "la chenille ne porte pas de lunettes quand elle boit l'eau",
    "Enfin, c'est un homme qui brûlerait sans hésitation le genre humain pour éviter un bobo à ma fille!",
    "Tout a une fin, sauf la banane qui en a deux.",
    "Que celui qui n'a pas traversé ne se moque pas de celui qui s'est noyé",
    "Qui gobe une noix de coco fait confiance à son anus.",
    "L'eau chaude n'oublie pas qu'elle a été froide.",
    "On a beau dissimuler ses excréments au fond de l'eau, ils remontent toujours a la surface.",
    "Quiconque taquine un nid de guêpe doit savoir courir.",
    "Si un animal vous dit qu'il peut parler, il ment probablement.",
    "Traverse la rivière avant de te moquer du crocodile.",
    "Si en te baignant tu as échappé au crocodile, prends garde au Léopard sur la berge.",
    "Si le crocodile a un pantalon, c'est qu'il a enfin trouvé ou ranger sa queue."
]

btn.addEventListener('click', function() {
    var RandomQuote = quotes[Math.floor(Math.random() * quotes.length)]
    quoteDiv.innerHTML = " '' " + RandomQuote + " '' ";
})