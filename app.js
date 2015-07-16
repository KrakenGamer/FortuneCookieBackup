var english = new Array(
	"Try Again Later... I'm Sleeping... [Yes, Fortune Cookies Need Their Sleep Too]", 
	"You will be hungry again in one hour.", 
	"When you squeeze an orange, orange juice comes out, because that's what's inside.", 
	"The fortune you seek is in another cookie", 
	"Error 404: Fortune not Found.", 
	"Ignore Previous Cookie", 
	"Pick another Fortune Cookie", 
	"Some fortune cookies contain no fortune", 
	"I wish I knew my own future", 
	"Be careful or you could fall for some tricks today.", 
	"Your love of music will be an important part of your life.", 
	"Adventure can be real happiness.", 
	"Say hello to others. You will have a happier day.", 
	"Good news will come to you by mail. Happiness will bring you good luck.", 
	"In 5 seconds you will breathe.", 
	"Don’t be discouraged, because every wrong attempt discarded is another step forward.", 
	"A pleasant surprise is waiting for you.", 
	"A smooth long journey! Great expectations", 
	"Determination is what you need now.", 
	"Have a beautiful day.", 
	"Now is the time to try something new.", 
	"You look pretty", 
	"You love challenges.", 
	"Your life will get more and more exciting.", 
	"Change is happening in your life, so go with the flow", 
	"A pleasant surprise is waiting for you", 
	"Do not underestimate yourself.");
var spanish = new Array(
	"Intentarlo más tarde ... Estoy durmiendo ... [Sí, Fortune Cookies necesitan dormir Demasiado]", 
	"Usted tendrá hambre de nuevo en una hora.", 
	"Cuando usted exprime una naranja, jugo de naranja sale ., porque eso es lo que hay dentro ",
	" La fortuna que buscas está en otra galleta ",
	" Error 404:. la fortuna no encontrado ",
	" Ignorar Cookies Anterior ",
	" Pick otra galleta de la suerte ",
	" Algunas galletas de la fortuna no contienen la fortuna ", 
	"Me gustaría saber mi propio futuro", 
	"Ten cuidado o te podía caer en algunos trucos en la actualidad.", 
	"Tu amor por la música será una parte importante de su vida.", 
	"aventura puede ser la verdadera felicidad.", 
	"Da la bienvenida a otros. Usted tendrá un día más feliz.", 
	"Buenas noticias vendrá a usted por correo. La felicidad le traerá buena suerte.", 
	"En 5 segundos se respira.", "no se desanime , porque cada intento equivocado descartado es otro paso adelante. ",
	" Una agradable sorpresa te espera. ",
	" Un viaje largo liso! Grandes expectativas ",
	" La determinación es lo que necesita ahora. ",
	" Que tengas un hermoso día. ",
	" Ahora es el momento de probar algo nuevo. ",
	" Te ves bonita "," Amas desafíos. ",
	" Tu vida se volverá más y más emocionante. ",
	" El cambio está sucediendo en su vida, así que ve con la corriente ",
	" Una agradable sorpresa te espera ",
	" No hay que subestimar a ti mismo. ");
var portuguese = new Array(
	"Tente novamente mais tarde ... eu estou dormindo ... [Sim, Fortune Cookies precisam de seus Too Sono]", 
	"Você vai estar com fome novamente em uma hora.", 
	"Quando você espreme uma laranja, suco de laranja vem de fora, . porque isso é o que está dentro ",
	" A fortuna que você procura está em outro cookie ",
	" Erro 404:. Fortune não encontrado ",
	" Ignorar biscoito Anterior ",
	" Escolha outro Fortune Cookie ",
	" Alguns biscoitos da sorte não contêm nenhuma fortuna ", 
	"Eu gostaria de saber o meu próprio futuro", "Tenha cuidado ou você pode cair para alguns truques hoje.",
	"O seu amor pela música vai ser uma parte importante de sua vida.", 
	"Adventure pode ser a verdadeira felicidade.", " Diga Olá para os outros. Você terá um dia mais feliz. ",
	" Boas notícias virão para você pelo correio. A felicidade vai lhe trazer boa sorte. ",
	" Em cinco segundo você vai respirar. ",
	" não desanime, porque cada tentativa errada descartada é outro passo à frente. ",
	" Uma agradável surpresa está esperando por você. ",
	" Uma longa viagem suave! Grandes expectativas ",
	" Determinação é o que você precisa agora. ",
	" Tenha um dia bonito. ",
	"Agora é a hora de tentar algo novo.", 
	"Você parece bem", "Você adora desafios.", 
	"Sua vida vai ficar mais e mais emocionante.", 
	"A mudança está acontecendo em sua vida, então vá com o fluir ",
	" Uma agradável surpresa está esperando por você ",
	" Não se subestime.");
var german = new Array(
	"Versuchen Sie es später noch einmal ... ich schlafe ... [Ja, Fortune Cookies brauchen ihren Schlaf zu]", 
	"Sie werden hungrig wieder in einer Stunde sein.", 
	"Wenn man eine Orange quetschen, kommt Orangensaft, ., denn das ist, was drin ist ",
	" Das Glück, die Sie suchen in einem anderen Cookie ",
	" Fehler 404:. Glück nicht gefunden ",
	" Ignorieren Zurück Plätzchen ",
	" Wählen Sie eine andere Fortune Cookie ",
	" Einige Glückskekse enthalten kein Glück ", 
	"Ich wünschte, ich wusste, dass meine eigene Zukunft", 
	"Seien Sie vorsichtig, oder Sie heute für einige Tricks hereinfallen könnte.", 
	"Ihre Liebe zur Musik ist ein wichtiger Teil Ihres Lebens sein.", 
	"Adventure kann wirklich glücklich sein.", 
	" Sag hallo zu anderen. Sie werden ein glücklicher Tag. ",
	" Gute Nachrichten werden Ihnen per Post kommen. Glück bringt Ihnen viel Glück. ",
	" in 5 Sekunden werden Sie atmen. ",
	" Seien Sie nicht entmutigt werden, weil jeder Versuch falsch verworfen ist ein weiterer Schritt nach vorn. ",
	" Eine angenehme Überraschung wartet auf Sie. ",
	" Eine glatte lange Reise! Große Erwartungen ",
	" Bestimmung ist, was Sie jetzt brauchen. ",
	" Haben Sie einen schönen Tag. ", 
	"Jetzt ist die Zeit, etwas Neues auszuprobieren.", 
	"Du siehst ziemlich", "Sie lieben Herausforderungen.", 
	"Dein Leben wird mehr und mehr spannend.", 
	"Änderung ist in Ihrem Leben passiert, so gehen Sie mit der fließen ",
	" Eine angenehme Überraschung wartet auf Sie ",
	" Unterschätzen Sie sich nicht. ");
function startup(){
	random=english;
}
function englishClick(){
	random=english;
}
function spanishClick(){
	random=spanish;
}
function portugueseClick(){
	random=portuguese;
}
function germanClick(){
	random=german;
}
function fcookie(){
var thing = [Math.floor(Math.random() * 27)];
document.getElementById("cookie").innerHTML = random[thing];
}
