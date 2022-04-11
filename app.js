let tipArray = [
  "Gjør din trege maskin rask igjen. En enkel løsning er å installere operativsystemet på nytt og formatere harddisken samtidig.",
  "Forleng levetiden med Linux. Linux er gratis, effektivt, det blir ikke tregere i bruk, og dessuten er programmer med samme funksjonalitet som Officepakken til Microsoft, designprogrammer, spill og bildebehandling med mye mer er også gratis. Ubuntu (ubuntu.com) er en populær Linux-utgave.",
  "I stedet for å kjøpe en ny PC eller Mac kan du vurdere om en oppgradering vil dekke ditt behov. Et stjerneskrujern og et antistatisk armbånd er alt du trenger for å skru opp og bytte ut deler i en PC eller Mac. ",
  "Riktige strøminnstillinger. En kraftig datamaskin med en stor skjerm beregnet på for eksempel dataspilling kan lett bruke like mye strøm som kjøleskapet ditt. Første bud er å skru av datamaskinen når den ikke skal være i bruk en stund. ",
];

let colorArray = ["#9B5DE5", "#F15BB5", "#FEE440", "#00BBF9", "#00F5D4"];

function showNewTip() {
  document.getElementById("newTip");

  let randomTip = Math.floor(Math.random() * tipArray.length);
  let randomColor = Math.floor(Math.random() * colorArray.length);

  document.getElementById("tipBox").textContent = tipArray[randomTip];
  document.getElementById("tipBox").style.backgroundColor =
    colorArray[randomColor];
}
