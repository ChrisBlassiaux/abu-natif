// planets.js
document.addEventListener("DOMContentLoaded", () => {
  onInit();

  // Add event listener for detailed view
  document.querySelector(".table tbody").addEventListener("click", (event) => {
    if (event.target.tagName === "TD") {
      showPlanet(event);
    }
  });
});

// Variables globales
let planets = [];

// OnInit : exécuté dès le chargement
async function onInit() {
  // const countPages = await getCountPages();
  await getPlanets();
  showPlanets();
  showCountPlanets();
}

// Fonctions ---------------------------
async function getPlanets() {
  let url = API_URL + "planets/";

  while (url) {
    const data = await fetchData(url);
    planets.push(...data.results);
    data.results.forEach((planet, index) => planet.index = index);
    url = data.next;
  }
}

function showPlanets() {
  const planetItems = planets.map((planet) => {
    const tableItem = createTableItem(planet);
    return tableItem;
  });
  appendToTable("planet-list", planetItems);
}

function showCountPlanets() {
  document.querySelector(".info").textContent = planets.length + " résultat(s)";
}

function showPlanet(event) {
  const indexPlanet = event.target.parentNode.getAttribute("data-index");
  const planet = planets.find((planet) => planet.index == indexPlanet);
  document.querySelector(".namePlanet").textContent = planet.name;
  document.querySelector(".gravityPlanet").textContent = planet.gravity;
}
