(this["webpackJsonpconways-game-of-life"]=this["webpackJsonpconways-game-of-life"]||[]).push([[0],[,,,,,,function(e,a,n){e.exports=n.p+"static/media/DSCF2187.ca6dd9ec.JPG"},function(e,a,n){e.exports=n.p+"static/media/lotte_off.0265b0cc.jpg"},function(e,a,n){e.exports=n.p+"static/media/homepage.2fceae81.jpg"},function(e,a,n){e.exports=n.p+"static/media/mock-up_interview.7e6fab61.png"},function(e,a,n){e.exports=n.p+"static/media/module.697499ac.png"},function(e,a,n){e.exports=n.p+"static/media/module_2.0518a822.png"},function(e,a,n){e.exports=n.p+"static/media/mapping_1.8dd83a3f.jpg"},function(e,a,n){e.exports=n.p+"static/media/tafel.244c5300.jpg"},function(e,a,n){e.exports=n.p+"static/media/iske_lauranne.5406bf57.jpg"},function(e,a,n){e.exports=n.p+"static/media/me-ma-front.5ef07920.jpg"},function(e,a,n){e.exports=n.p+"static/media/vv-an-front.5bf61792.jpg"},function(e,a,n){e.exports=n.p+"static/media/di-dj-front.76ec019d.jpg"},function(e,a,n){e.exports=n.p+"static/media/handshake.a4883aa1.png"},function(e,a,n){e.exports=n.p+"static/media/hardwareschakelaar.594d5ef7.png"},function(e,a,n){e.exports=n.p+"static/media/knop_side.6cfd6926.png"},function(e,a,n){e.exports=n.p+"static/media/knopmema.2acb8d72.png"},function(e,a,n){e.exports=n.p+"static/media/hc12.bda432d8.png"},function(e,a,n){e.exports=n.p+"static/media/memabinnenkant.6425d928.jpg"},function(e,a,n){e.exports=n.p+"static/media/memamekabel.bf9dd1b1.jpg"},function(e,a,n){e.exports=n.p+"static/media/memaplat.f72e06ca.jpg"},function(e,a,n){e.exports=n.p+"static/media/vvanuit.c57ce12a.jpg"},function(e,a,n){e.exports=n.p+"static/media/vvanside.d24e9870.jpg"},function(e,a,n){e.exports=n.p+"static/media/didj45.e1e4cd20.jpg"},function(e,a,n){e.exports=n.p+"static/media/didjx2.fa33bb0d.jpg"},function(e,a,n){e.exports=n(39)},,,,,,,,,function(e,a,n){"use strict";n.r(a);var t=n(0),i=n.n(t),r=n(4),l=n.n(r),o=n(2),c=n(5),s=n.n(c),d=n(1),m=n(6),p=n.n(m),g=n(7),u=n.n(g),h=n(8),v=n.n(h),E=n(9),f=n.n(E),k=n(10),b=n.n(k),y=n(11),j=n.n(y),w=n(12),A=n.n(w),x=n(13),z=n.n(x),N=n(14),D=n.n(N),M=n(15),V=n.n(M),C=n(16),I=n.n(C),O=n(17),S=n.n(O),W=n(18),F=n.n(W),J=n(19),T=n.n(J),_=n(20),B=n.n(_),G=n(21),P=n.n(G),H=n(22),R=n.n(H),U=n(23),L=n.n(U),Z=n(24),q=n.n(Z),K=n(25),Q=n.n(K),X=n(26),Y=n.n(X),$=n(27),ee=n.n($),ae=n(28),ne=n.n(ae),te=n(29),ie=n.n(te),re=[[.1],[0,-1],[1,-1],[-1,1],[1,1],[-1,-1],[1,0],[-1,0]],le=[v.a,f.a,b.a,j.a,A.a,z.a,D.a];var oe=function(){var e=Object(t.useState)((function(){return function(){for(var e=[],a=0;a<40;a++)e.push(Array.from(Array(86),(function(){return Math.random()>.95?1:0})));return e}()})),a=Object(o.a)(e,2),n=a[0],r=a[1],l=Object(t.useCallback)((function(){r((function(e){return Object(d.a)(e,(function(a){for(var n=function(n){for(var t=function(t){var i=0;re.forEach((function(a){var r=Object(o.a)(a,2),l=r[0],c=r[1],s=n+l,d=t+c;s>=0&&d>=0&&s<40&&d<86&&(i+=e[s][d])})),i<2||i>3?a[n][t]=0:0===e[n][t]&&3===i&&(a[n][t]=1),n>=4&&n<=8&&t>=64&&t<=80&&(a[n][t]=Math.random()>.1?1:0),n>=8&&n<=12&&t>=32&&t<=80&&(a[n][t]=Math.random()>.1?1:0),n>=13&&n<=17&&t>=42&&t<=80&&(a[n][t]=Math.random()>.1?1:0),n>=18&&n<=21&&t>=62&&t<=80&&(a[n][t]=Math.random()>.1?1:0)},i=0;i<86;i++)t(i)},t=0;t<40;t++)n(t)}))})),setTimeout(l,1700)}),[]);return Object(t.useEffect)((function(){l(),setTimeout(l,10)}),[l]),i.a.createElement("div",{className:"container"},i.a.createElement("section",{className:"child"},i.a.createElement("div",{style:{display:"grid",justifyContent:"center",gridTemplateColumns:"repeat(".concat(86,", 1.6em)"),position:"absolute",top:0,right:0}},n.map((function(e,a){return e.map((function(e,t){return i.a.createElement("div",{className:"table",onClick:function(){var e=Object(d.a)(n,(function(e){e[a][t]=n[a][t]?0:1}));r(e)},key:"".concat(a,"-").concat(t),style:{width:"1.5em",height:"1.5em",background:n[a][t]?"#297CE5":void 0}})}))}))),i.a.createElement("div",{id:"title"},i.a.createElement("h1",null,i.a.createElement("span",null,"typing")),i.a.createElement("h1",{style:{marginTop:"-20pt"}},"Everybody\u2019s"," ",i.a.createElement("span",{style:{textDecoration:"line-through",textDecorationThickness:".2em"}},"talking")," ",i.a.createElement("br",null)," and no one says",i.a.createElement("br",null)," a word"),i.a.createElement("h2",{id:"subtitle"},i.a.createElement("br",null),"Masterproject Interaction Design",i.a.createElement("br",null)," ",i.a.createElement("span",{style:{color:"#333"}},"Door Finlay Degrauwe")))),i.a.createElement("div",{id:"menu"},i.a.createElement("ul",null,i.a.createElement("li",null,i.a.createElement("a",{href:"#Intro"},"Intro")),i.a.createElement("li",null,i.a.createElement("a",{href:"#Onderzoek"},"Onderzoek")),i.a.createElement("li",null,i.a.createElement("a",{href:"#Goede_Vrienden"},"Goede Vrienden")),i.a.createElement("li",null,i.a.createElement("a",{href:"#Principes"},"Principes")),i.a.createElement("li",null,i.a.createElement("a",{href:"#VV-AN"},"VV-AN")),i.a.createElement("li",null,i.a.createElement("a",{href:"#DI-DJ"},"DI-DJ")),i.a.createElement("li",null,i.a.createElement("a",{href:"#ME-MA"},"ME-MA")),i.a.createElement("li",null,i.a.createElement("a",{href:"#Contact"},"Contact")))),i.a.createElement("section",{className:"child",id:"Intro"},i.a.createElement("div",{className:"gridContainer",style:{zIndex:5}},i.a.createElement("h2",{style:{gridArea:"1/ 1/ 2/ 7"}},i.a.createElement("span",null,'"we are a population, whose minds are elsewhere than their bodies"')),i.a.createElement("p",{style:{fontSize:"24pt",textAlign:"right",gridArea:"2/ 4/ 3/ 6",fontWeight:"600"}}," ","- Matthew Walker"," "),i.a.createElement("div",{style:{width:"400px",height:"300px",zIndex:"30",position:"absolute",left:"10vw",bottom:"-95vh"}},i.a.createElement("img",{src:p.a,width:"100%",alt:""})))),i.a.createElement("section",{className:"child"},i.a.createElement("div",{id:"Onderzoek",className:"gridContainer",style:{zIndex:5}},i.a.createElement("h2",{style:{gridArea:"1/ 1/ 2/ 7"}},"onderzoek"),i.a.createElement("p",{style:{gridArea:"2/ 1/ 3/ 4"}},"Deze masterproef is een exploratief onderzoek naar de manier waarop technologie ons sociale leven kan ondersteunen. Sinds sociale media in een mature fase komen en de negatieve neveneffecten op onze samenleving steeds duidelijker worden, is er nood aan een nieuwe, menswaardige aanpak, waar sociale noden opnieuw in het centrum staan. Dit in tegenstelling tot marktgedreven beslissingen zoals het weergeven van advertenties en het maximaliseren van schermtijd via endless feeds. ",i.a.createElement("br",null),i.a.createElement("br",null)," Aan de hand van een aantal ontwerpprincipes die voortvloeien uit participatief onderzoek wordt er een nieuwe ontwerptaal voorgesteld die met behulp van technologie antwoorden biedt op sociale noden die de participanten ervaren. In deze thesis worden drie proof of concepts voorgesteld die deze ontwerptaal materialiseren en die trachten interacties tussen mensen te stimuleren.",i.a.createElement("br",null)," Als onderzoeksvraag voor mijn masterproef formuleer ik volgende vraag: Welke apparaten kunnen fysieke interacties tussen mensen faciliteren?"),i.a.createElement("p",{style:{gridArea:"2/ 4/ 3/ 7",textAlign:"right"}},i.a.createElement("img",{src:u.a,height:"600px",alt:""})))),i.a.createElement("section",{className:"child"},i.a.createElement("div",{id:"Onderzoek2",className:"gridContainer",style:{zIndex:5}},i.a.createElement("div",{style:{gridArea:"1/ 1/ 2/ 4"}},i.a.createElement("h3",null,"Context"),i.a.createElement("p",null,"Mensen gebruiken al honderden jaren technologie als communicatiemiddel. Van duiven tot telefoonlijnen tot sociale media vandaag. Videochatten, voiceberichten, samen gamen zijn binnen een ongeziene tijd, met social distancing als katalysator, ingeburgerd geraakt in onze dagelijkse manieren van communiceren. Sinds de komst van VR en AR is dit enkel maar toegenomen en vloeien er miljoenen middelen naar de opbouw van virtuele werelden, die onze dagelijkse leefomgeving nabootsen.")),i.a.createElement("div",{style:{gridArea:"1/ 4/ 2/ 7"}},i.a.createElement("h3",null,"Balnea"),i.a.createElement("p",null,"Dit platform is een weergave van mijn eigen sociale weefsel waarin ik op een co-creatieve manier speculatieve toekomstscenario\u2019s verken binnen de grenzen van onze hedendaagse maatschappij. Naast een verzameling van speculatieve prototypes is het platform zelf een proof of concept van een gedecentraliseerd sociaal netwerk waar ik als gebruiker zelf eveneens de rol van maker en vormgever aanneem om op mijn eigen manier mijn online sociaal leven tracht vorm te geven.")),i.a.createElement("div",{style:{gridArea:"2/ 1/ 3/ 4"}},i.a.createElement("h3",null,"Digitaal Afscheid"),i.a.createElement("p",null,"Om de volgende stap in mijn ontwerpproces aan te vatten ben ik op zoek gegaan naar een methodiek die aansloot bij het soort ontwerp dat ik wilde maken. Zo kwam ik uit bij speculatief ontwerp. Dit is een ontwerpstroming die zich ergens tussen kunst en ontwerp bevindt. Ik ben vanuit mijn onderzoeksvraag gaan nadenken welke scenario\u2019s een medium zouden kunnen cre\xebren om onze gebruikspatronen met sociale media (drastisch) te veranderen en ik ben zo op het onderwerp van digitaal afscheid of digitale euthanasie gestoten.")),i.a.createElement("div",{style:{gridArea:"2/ 4/ 3/ 7"}},i.a.createElement("h3",null,"Workshops"),i.a.createElement("p",null,"Vervolgens ben ik met een aantal kleine groepjes op een speelse manier samen gaan reflecteren over sociale noden en sociale media om vervolgens fysieke prototypes/artefacten te ontwikkelen die inspelen op deze sociale noden. Ik heb de participanten uitgedaagd om enkele van deze sociale noden te vertalen naar een fictief prototype. Ik zou vervolgens als ontwerper deze sociale noden en prototypes gebruiken om concepten te distilleren uit deze oefening, die nauw aansluiten bij de diverse sociale noden die de brede groep participanten aanbiedt tijdens de workshops.")))),i.a.createElement("section",{className:"child"},i.a.createElement("div",{className:"gridContainer"},i.a.createElement("div",{style:{gridArea:"1/ 3/ 2/ 4",height:"55vh",width:"43vw",maxWidth:"400px"}},i.a.createElement(s.a,{images:le,sliderBg:"#FFFFFF",paginationBg:"#aaaaaa"})))),i.a.createElement("section",{id:"Goede_Vrienden",className:"child"},i.a.createElement("div",{className:"gridContainer"},i.a.createElement("h2",{style:{gridArea:"1/ 1/ 2/ 7"}},"goede vrienden"),i.a.createElement("p",{style:{gridArea:"2/ 1/ 3/ 4"}},"Goede vrienden is het eindproduct van Finlay Degrauwes Masterproef Interaction Design, met als onderzoeksonderwerp om te verkennen hoe technologie ons sociale leven kan ondersteunen. Goede vrienden is een verzameling prototypes die op basis van een aantal leidende principes trachten fysieke interacties in de re\xeble wereld te stimuleren."),i.a.createElement("p",{style:{gridArea:"2/ 4/ 3/ 5"}},i.a.createElement("img",{width:"100%",alt:"",src:I.a})),i.a.createElement("p",{style:{gridArea:"2/ 5/ 3/ 6"}},i.a.createElement("img",{width:"100%",alt:"",src:S.a})),i.a.createElement("p",{style:{gridArea:"2/ 6/ 3/ 7"}},i.a.createElement("img",{width:"100%",alt:"",src:V.a})))),i.a.createElement("section",{id:"Principes",className:"child"},i.a.createElement("div",{className:"gridContainer"},i.a.createElement("h2",{style:{gridArea:"1/ 1/ 2/ 7"}},"de principes van goede vrienden"),i.a.createElement("div",{style:{gridArea:"2/ 1/ 3/ 3"}},i.a.createElement("img",{alt:"",src:F.a,width:"190px",style:{padding:"47px 0px"}}),i.a.createElement("p",{style:{fontWeight:"700",textAlign:"center"}},"Pairen via Fysieke Handshake")),i.a.createElement("div",{style:{gridArea:"2/ 3/ 3/ 5"}},i.a.createElement("img",{alt:"",src:T.a,height:"200px"}),i.a.createElement("p",{style:{fontWeight:"700",textAlign:"center"}},"Hardwareschakelaar")),i.a.createElement("div",{style:{gridArea:"2/ 5/ 3/ 7"}},i.a.createElement("img",{alt:"",src:B.a,height:"200px"}),i.a.createElement("p",{style:{fontWeight:"700",textAlign:"center"}},"Consent en discretie")),i.a.createElement("div",{style:{gridArea:"3/ 1/ 4/ 3"}},i.a.createElement("img",{alt:"",src:P.a,height:"200px"}),i.a.createElement("p",{style:{fontWeight:"700",textAlign:"center"}},"Duidelijke interactieve elementen in eenzelfde kleurschema")),i.a.createElement("div",{style:{gridArea:"3/ 3/ 4/ 5"}},i.a.createElement("img",{alt:"",src:R.a,height:"200px"}),i.a.createElement("p",{style:{fontWeight:"700",textAlign:"center"}},"Minimaliseren van externe servers"),i.a.createElement("h3",null,i.a.createElement("br",null),i.a.createElement("a",{href:"#Radio",style:{textDecoration:"none",color:"#222"}},"V Leer ze kennen V"))),i.a.createElement("div",{style:{gridArea:"3/ 5/ 4/ 7"}},i.a.createElement("img",{alt:"",src:L.a,height:"200px"}),i.a.createElement("p",{style:{fontWeight:"700",textAlign:"center"}},"Toegankelijke hardware voor herstel en transparantie")))),i.a.createElement("section",{id:"VV-AN",className:"child"},i.a.createElement("div",{className:"gridContainer"},i.a.createElement("div",{style:{gridArea:"2/ 1/ 3/ 4"}},i.a.createElement("h2",{style:{marginTop:"3em",textAlign:"left"}},"VV-AN"),i.a.createElement("p",null,"VV-AN is een apparaat waarmee je je vrienden kan vinden in jouw buurt. Aan de hand van een zender en ontvanger die op een radiogolf data uitwisselen, kan je vanop een kilometer afstand signaleren waar je bent. Indien er een andere VV-AN in de buurt is, krijg je de naam van dit apparaat te zien op de display, waarna de gebruiker kan beslissen om via SMS of een ander medium contact op te nemen met de gebruiker van de andere VV-AN. De VV-AN heeft een accessoire female-female USB-C plug waarmee een male-male USB-C kabel kan gebruikt worden als halssnoer om de VV-AN rond de nek te dragen.")),i.a.createElement("p",{style:{gridArea:"3/ 1/ 4/ 4",height:"200px"}},i.a.createElement("img",{alt:"",src:Y.a,height:"100%"})),i.a.createElement("p",{style:{gridArea:"2/ 4/ 4/ 7"}},i.a.createElement("img",{alt:"",src:ee.a,height:"100%"})))),i.a.createElement("section",{id:"DI-DJ",className:"child"},i.a.createElement("div",{className:"gridContainer"},i.a.createElement("div",{style:{gridArea:"2/ 1/ 3/ 4"}},i.a.createElement("h2",{style:{marginTop:"3em",textAlign:"left"}},"DI-DJ"),i.a.createElement("p",null,"DI-DJ is een apparaat waarmee je je vrienden kan laten weten dat je je verveelt. Door te drukken op de knop stuur je een signaal naar andere gepairde apparaten. Dit signaal wordt met behulp van een lichtje in de knop, geluid en tekst op het display weergeven aan de ontvanger(s). Afhankelijk van de duurtijd van het induwen van de knop, kan je de duur van het signaal bepalen. Een korte duw geeft een signaal dat uitdooft over 5 minuten en een langere druk op de knop kan een signaal uitsturen dat tot 4 uur zichtbaar blijft. De gebruiker kan als reactie beslissen om via SMS of een ander medium contact op te nemen met de gebruiker van de andere DI-DJ.")),i.a.createElement("p",{style:{gridArea:"3/ 1/ 4/ 4",height:"200px"}},i.a.createElement("img",{alt:"",src:ie.a,height:"100%"})),i.a.createElement("p",{style:{gridArea:"2/ 4/ 4/ 7"}},i.a.createElement("img",{alt:"",src:ne.a,height:"100%"})))),i.a.createElement("section",{id:"ME-MA",className:"child"},i.a.createElement("div",{className:"gridContainer"},i.a.createElement("div",{style:{gridArea:"2/ 1/ 3/ 4"}},i.a.createElement("h2",{style:{marginTop:"3em",textAlign:"left"}},"ME-MA"),i.a.createElement("p",null,"ME-MA is een apparaat dat de gebruiker de mogelijkheid biedt om mee te luisteren naar het omgevingsgeluid uit een andere ruimte. Een microfoon en een speaker die via Wi-Fi audio doorsturen maken het mogelijk om naar het omgevingsgeluid te luisteren van vrienden of familie. Nadat je ME-MA met een andere ME-MA hebt gepaired kan je na wederzijdse toestemming de ME-MA als radio gebruiken om mee te luisteren wat er in een andere ruimte gebeurt. ME-MA is bedoeld om jou minder eenzaam te laten voelen tijdens jouw dagelijkse activiteiten en om een nieuwe methode van laagdrempelige interactie te cre\xebren tussen het denken aan iemand en daadwerkelijk wederzijds contact op te nemen met iemand.")),i.a.createElement("p",{style:{gridArea:"3/ 1/ 4/ 4",height:"200px"}},i.a.createElement("img",{alt:"",src:Q.a,height:"100%"})),i.a.createElement("p",{style:{gridArea:"2/ 4/ 4/ 7"}},i.a.createElement("img",{alt:"",src:q.a,height:"100%"})))),i.a.createElement("section",{id:"Contact",className:"child"},i.a.createElement("div",{className:"gridContainer"},i.a.createElement("h2",{style:{gridArea:"1/ 1/ 2/ 7"}},"Honger naar meer?"),i.a.createElement("div",{style:{gridArea:"2/ 1/ 3/ 4"}},i.a.createElement("h2",null,"Op de hoogte blijven?"),i.a.createElement("input",{type:"text",placeholder:"Emailadres"}),i.a.createElement("br",null),i.a.createElement("a",{href:"mailto:finlaydegrauwe@gmail.com",style:{textDecoration:"none"}},i.a.createElement("button",null,"Schrijf me in"))),i.a.createElement("div",{style:{gridArea:"2/ 3/ 3/ 5",justifyContent:"center",display:"flex"}},i.a.createElement("div",{style:{background:"black",width:"1px",height:"100%"}})),i.a.createElement("div",{style:{gridArea:"2/ 4/ 3/ 7"}},i.a.createElement("h2",null,"Een goede vriend voorstellen?"),i.a.createElement("textarea",{rows:"1",cols:"40",name:"text",placeholder:"Beschrijf je concept hier"}),i.a.createElement("br",null),i.a.createElement("button",null,"Verzenden")))))};l.a.render(i.a.createElement(oe,null),document.getElementById("root"))}],[[30,1,2]]]);
//# sourceMappingURL=main.f5113ea6.chunk.js.map