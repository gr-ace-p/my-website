const cursor = document.querySelector('.cursor');

        document.addEventListener('mousemove', e => {
            cursor.setAttribute("style", "top: "+(e.pageY - 5)+"px; left: "+(e.pageX - 5)+"px;")
        })

        document.addEventListener('click', () => {
            cursor.classList.add("expand");

            setTimeout(() => {
                cursor.classList.remove("expand");
            }, 500)
        })

        function start (){
	document.getElementById('prog').style.display = "";
	var content= "<p> WORKS</p>"
	+

			"<img onclick="+"show1()" + " " +"src="+"./images/io.jpg"+"><br>"
			+
			"<p>v typo </p>"
			+
			"<img onclick="+"show2()" + " " + "src="+"./images/copertina.jpg"+"><br>"
			+
			"<p> v typo. animate meanings </p>"
			+
			"<img onclick="+"show3()" + " " + "src="+"./images/copertina.jpg"+"><br>"
			+
			"<p> v typo. animate meanings </p>"
			+
			"<img onclick="+"show4()" + " "+ "src="+"./images/copertina.jpg"+"><br>"
			+
			"<p> v typo. animate meanings </p>"
			+
			"<img onclick="+"show5()" + " " + "src="+"./images/copertina.jpg"+"><br>"
			+
			"<p> v typo. animate meanings </p>"
			+
			"<img onclick="+"show6()" + " "+"src="+"./images/copertina.jpg"+"><br>"
			+
			"<p> v typo. animate meanings </p>"
			+
			"<img onclick="+"show6()" + " "+"src="+"./images/copertina.jpg"+"><br>"
			+
			"<p> v typo. animate meanings </p>"
			document.getElementsByTagName('prog').innerHTML = content;
			$(".clicked").removeClass("clicked");
 

}

function show1(){
	$(".clicked").removeClass("clicked");

	document.getElementById('prog').style.display= "";

	var content=

	"<p class="+"titoloprog"+">Serie 4312 <p>"
	+
	"<p class="+"sottotitoloprog"+"> Progetto per l'attesa <p>"
	+
	"<p class="+"testoprog"+"> Quello che accade a conclusione del percorso universitario rappresenta una fase isterica e spasmodica, comune a tutti. Durante questa fase nasce Serie 4312: una riflessione che rende visibile, attraverso le immagini, la contrapposizione tra aspettative e realtà. I contrasti iconografici, accompagnati da cliché testuali, rafforzano ironicamente il messaggio veicolato dalle immagini.<p>"
	+
	"<p class="+"testoprogeg"+"> What happens at the end of the university career represents a hysterical and spasmodic phase, common to all. It's during this period that Serie 4312 was born: a reflection that makes visible, through images, the contrast between expectations and reality. The iconographic contrasts, accompanied by textual clichés, ironically reinforce the message conveyed by the images.<p>"
	+
	"<a href= "+"./images/serie4312.jpg"+">" + "<img class="+"imgprog"+" src="+"./images/serie4312.jpg"+">"+"</a>"
	
	+
	"<div class="+"arrows"+">"+"<a href="+"index.html"+">" + "<h4 class="+"dietro"+"> bobobo </h4> </div>"
	+
    "<div class="+"arrows2"+">"+"<a href="+"index.html"+">" + "<h4 class="+"avanti"+"> blabla </h4> </div>";
	document.getElementById('prog').innerHTML=content;


}


function show2(){
	$(".clicked").removeClass("clicked");

	document.getElementById('prog').style.display= "";

	var content=
	"<p class="+"titoloprog"+">V-Typo. Animate meanings. Inserti testuali cinematografici intelligenti. Da Saul Bass ai caratteri variabili. Ambiti di applicazione e progetti. <p>"
	+
	"<p class="+"sottotitoloprog"+"> MA thesis project <p>"
	+
	"<p class="+"testoprog"+"> Lorem Ipsum è un testo <span>"+"<span class="+"underline"+"> segnaposto</span>" + "<span class="+"testoprog"+"> utilizzato nel settore della tipografia e della stampa. Lorem Ipsum è considerato il testo segnaposto standard sin dal sedicesimo secolo, quando un anonimo tipografo prese una cassetta di caratteri e li assemblò per preparare un testo campione. È sopravvissuto non solo a più di cinque secoli, ma anche al passaggio alla videoimpaginazione, pervenendoci sostanzialmente inalterato. Fu reso popolare, negli anni ’60, con la diffusione dei fogli di caratteri trasferibili “Letraset”, che contenevano passaggi del Lorem Ipsum, e più recentemente da software di impaginazione come Aldus PageMaker, che includeva versioni del Lorem Ipsum.<p>"
	
	document.getElementById('prog').innerHTML=content;
}


function show3(){
	$(".clicked").removeClass("clicked");

	document.getElementById('prog').style.display= "";

	var content=
	"<p class="+"titoloprog"+"> Incongruity <p>"
	+
	"<p class="+"sottotitoloprog"+"> Laboratorio di Design dei sistemi interattivi per l’informazione (DSII)<p>"
	+
	"<p class="+"testoprog"+"> Rendere visibile l’invisibile era lo scopo progettuale. Partendo da un’esperienza personale, ho lavorato su un aspetto “fuorviante” della malattia mentale ed in particolare dell'alzheimer: il fatto che l’aspetto fisico del paziente, soprattutto nelle prime fasi della malattia, non si modifichi significamente, rende difficile la comprensione della malattia alle persone “inesperte” come familiari o persone che si trovano a contatto per la prima volta con una persona affetta da tale patologia. Si tratta in particolare di uno specchio interattivo che, posto idealmente all’interno di una struttura specializzata, frammenta l’immagine delle persone. La metafora è da ritrovarsi nel fatto che, contrariamente al funzionamento di uno specchio, in cui l’avvicinarsi rende visibile il dettaglio, qui l’avvicinamento fa si che l’immagine venga frantumata, resa discreta così come la memoria e le capacità del malato, scomposta in profondità, profondità che anzichè aggiungere significato e informazione, diventa significante, facendo si che essa diventi inintelligibile.<p>"
	+
	"<p class="+"testoprogeg"+">  Making the invisible visible was the design goal. Starting from a personal experience, I worked on a &quot;misleading&quot; aspect of mental illness and in particular Alzheimer’s: the fact that the physical aspect of the patient, especially in the early stages of the disease does not change significantly, makes it difficult for &quot;inexperienced&quot; people to understand the disease. It is an interactive mirror that, placed ideally within a specialized structure, fragments the image of the people reflected in it. The metaphor is that, in contrast to the normal operation of a mirror, in which the proximity makes the detail visible, here the proximity makes the image be shattered, as well as the memory and abilities of the patient.<p>"

	+
	"<a href= "+"./images/rossoincongruity.jpg"+">" + "<img class="+"imgprog"+" src="+"./images/rossoincongruity.jpg"+">"+"</a>"
	+
	"<a href= "+"./images/verdeincongruity.jpg"+">" + "<img class="+"imgprog"+" src="+"./images/verdeincongruity.jpg"+">"+"</a>"
	+
	"<a href= "+"./images/bluincongruity.jpg"+">" + "<img class="+"imgprog"+" src="+"./images/bluincongruity.jpg"+">"+"</a>"
	;
	
	document.getElementById('prog').innerHTML=content;
}



function show4(){
	$(".clicked").removeClass("clicked");

	document.getElementById('prog').style.display= "";

	var content=
	"<p class="+"titoloprog"+">Meat the plastic pig <p>"
	+
	"<p class="+"sottotitoloprog"+"> Workshop with Parco Studio <p>"
	+
	"<p class="+"testoprog"+"> Reflection on climate change. The project is based on the choice of two hashtags thanks to which to trace the posts published by users, whose content, shown simultaneously, generates significant contrasts with precise meaning. The hashtags chosen are #schleichpig and #meatthevictimsuk2 : it has been chosen to think on the environmental impact of intensive farms and the consequent exploitation of animals, on the other hand on the accuracy of the design and presentation of plastic animal miniatures. <p>"
	+
	"<p class="+"testoprog"+"> The project was made using html, css and making it possible to interact with Javascript. Operation is dictated by the mouse over.<p>"
	+
	"<a href= "+"https://vimeo.com/425520740"+">" + "<video class="+"videoprog"+" src="+"./images/Meat_the_plastic_pig_breve.mp4"+">"+"</a>"
	+
	"<a href= "+"./images/plasticpig1.jpg"+">" + "<img class="+"imgprog"+" src="+"./images/plasticpig1.jpg"+">"+"</a>"
	+
	"<a href= "+"./images/plasticpig2.jpg"+">" + "<img class="+"imgprog"+" src="+"./images/plasticpig2.jpg"+">"+"</a>"
	+
	"<a href= "+"./images/plasticpig3.jpg"+">" + "<img class="+"imgprog"+" src="+"./images/plasticpig3.jpg"+">"+"</a>"
	;
	document.getElementById('prog').innerHTML=content;
}

function show5(){
	$(".clicked").removeClass("clicked");

	document.getElementById('prog').style.display= "";

	var content=
	"<p class="+"titoloprog"+"> Gaia Charta. La storia e le lotte del Fronte Unitario Omosessuale Rivoluzionario Italiano <p>"
	+
	"<p class="+"sottotitoloprog"+"> University project <p>"
	+
	"<p class="+"testoprog"+"> Partendo dall'analisi dell'album Night and Day del musicista britannico Joe Jackson, il libro indaga il tema dell'omosessualità. Considerando la vastità del tema, si è deciso di soffermarsi sul contesto italiano ed in particolare sul FUORI! primo movimento italiano per la rivendicazione dei diritti omosessuali attivo negli anni Settanta. La storia del movimento è stata ricostruita attraverso lo sfoglio dell'omonima rivista, stumento principale di propaganda per i diritti omosessuali, della quale furono pubblicati 32 numeri tra il 1972 ed il 1982. <p>"
	
	+
	"<p class="+"testoprogeg"+"> Starting from the analysis of the album Night and Day by British musician Joe Jackson, the book investigates the theme of homosexuality. Considering the vastness of the topic, we decided to focus the research on the Italian context and in particular to FUORI! first Italian movement to claim homosexual rights active in the 70s. The history of the movement was reconstructed through the leaflet of the homonymous magazine, the main tool for the propaganda of homosexual rights of which 32 issues were published from 1972 to 1982. <p>"
	+
	"<a href= "+"./images/fuorituttonew.jpg"+">" + "<img class="+"imgprog"+" src="+"./images/fuorituttonew.jpg"+">"+"</a>"
	;
	document.getElementById('prog').innerHTML=content;
}


function show6(){
	$(".clicked").removeClass("clicked");

	document.getElementById('prog').style.display= "";

	var content=
	"<p class="+"titoloprog"+"> Amaro font <p>"
	+
	"<p class="+"sottotitoloprog"+"> Workshop with Beatrice D'Agostino <p>"
	+
	"<p class="+"testoprog"+"> Il disegno del carattere, realizzato durante un Workshop tenuto dalla type designer Beatrice D’Agostino, parte dalla scelta di un aggettivo che si pone come obiettivo di evocare. L’aggettivo scelto, amaro, ha dato il nome e ha ispirato la costruzione del carattere. <p>"
	+
	"<p class="+"testoprogeg"+"> The character design, created during a Workshop held by the type designer Beatrice D’Agostino, starts from the choice of an adjective that aims to evoke. The adjective chosen, bitter, gave the name and inspired the construction of the character.<p>"
	+
	"<a href= "+"./images/amarofont.jpg"+">" + "<img class="+"imgprog"+" src="+"./images/amarofont.jpg"+">"+"</a>"
	;
	document.getElementById('prog').innerHTML=content;
}


function show7(){
	$(".clicked").removeClass("clicked");

	document.getElementById('prog').style.display= "";

	var content=
	"<p class="+"titoloprog"+"> Sonar. Advanced Music Festival <p>"
	+
	"<p class="+"sottotitoloprog"+"> Branding <p>"
	+
	"<p class="+"testoprog"+"> Lorem Ipsum è un testo segnaposto utilizzato nel settore della tipografia e della stampa. Lorem Ipsum è considerato il testo segnaposto standard sin dal sedicesimo secolo, quando un anonimo tipografo prese una cassetta di caratteri e li assemblò per preparare un testo campione. È sopravvissuto non solo a più di cinque secoli, ma anche al passaggio alla videoimpaginazione, pervenendoci sostanzialmente inalterato. Fu reso popolare, negli anni ’60, con la diffusione dei fogli di caratteri trasferibili “Letraset”, che contenevano passaggi del Lorem Ipsum, e più recentemente da software di impaginazione come Aldus PageMaker, che includeva versioni del Lorem Ipsum. <p>"
	+
	"<a href= "+"./images/sonartutto.jpg"+">" + "<img class="+"imgprog"+" src="+"./images/sonartutto.jpg"+">"+"</a>"
	;
	document.getElementById('prog').innerHTML=content;
}

function show8(){
	$(".clicked").removeClass("clicked");

	document.getElementById('prog').style.display= "";

	var content=
	"<p class="+"titoloprog"+"> Sonar. Advanced Music Festival <p>"
	+
	"<p class="+"sottotitoloprog"+"> Branding <p>"
	+
	"<p class="+"testoprog"+"> Lorem Ipsum è un testo segnaposto utilizzato nel settore della tipografia e della stampa. Lorem Ipsum è considerato il testo segnaposto standard sin dal sedicesimo secolo, quando un anonimo tipografo prese una cassetta di caratteri e li assemblò per preparare un testo campione. È sopravvissuto non solo a più di cinque secoli, ma anche al passaggio alla videoimpaginazione, pervenendoci sostanzialmente inalterato. Fu reso popolare, negli anni ’60, con la diffusione dei fogli di caratteri trasferibili “Letraset”, che contenevano passaggi del Lorem Ipsum, e più recentemente da software di impaginazione come Aldus PageMaker, che includeva versioni del Lorem Ipsum. <p>"
	
	document.getElementById('prog').innerHTML=content;
}