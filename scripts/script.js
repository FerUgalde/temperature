var useDisney="Log in";
var userEmail="fernanda.me@gmail.com";
var passVisibility=true;
var userPassword="FerDisney123";
var userDisney="Fernanda Ugalde";
var suscription="Monthly";
var deviceUsed="Computer";
var selectProfile="Anaid";
var disneyFranchise="Pixar";
var category="Films";
var nameContent="Soul";
var genre="Family, Comedy, Music";
var audience=7;
var releaseDate="2020";
var durationMin= 100;
var details="What makes you different? Joe Gardner is a high school music teacher who gets the opportunity of a lifetime: playing at the best jazz club in town. But a small misstep takes him from the streets of New York to The Great Before, a fantastical place where new souls are given personality, character, and interests before they go to Earth.";
var detailsMenu="suggestions";
var slick_list="LightYear";
var audio="English";
var subtitles="English [CC]";
var volume=80;


document.write(
    `
    <h3>Disney Variables Content</h3>
    <p><b>Enter Disney+:</b> ${useDisney}</p>
    <p><b>Email:</b> ${userEmail}</p>
    <p><b>Option to view password:</b> ${passVisibility}</p>
    <p><b>Password:</b> ${userPassword}</p>
    <p><b>Name:</b> ${userDisney}</p>
    <p><b>Suscription type:</b> ${suscription}</p>
    <p><b>Device used</b> ${deviceUsed}</p>
    <p><b>Who's watching?</b> ${selectProfile}</p>
    <p><b>Franchise:</b> ${disneyFranchise}</p>
    <p><b>What do you want to watch?</b> ${category}</p>
    <p><b>Chosen film:</b> ${nameContent}</p>
    <p><b>Related genres</b> ${genre}</p>
    <p><b>Target audience</b> ${audience}+</p>
    <p><b>Release Date</b> ${releaseDate}</p>
    <p><b>Duration</b> ${durationMin} min</p>
    <p><b>Details</b> ${details}</p>
    <p><b>Anything else that interests you?</b> ${detailsMenu}</p>
    <p><b>Recommended interests</b> ${slick_list}</p>
    <p><b>Audio</b> ${audio}</p>
    <p><b>Subtitles</b> ${subtitles}</p>
    <p><b>Volume</b> ${volume}%</p>
    `
)