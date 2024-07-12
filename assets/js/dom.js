// dom.js
function createTableItem(planet) {
  return `
    <tr data-index="${planet.index}">
      <td>${planet.name}</td>
      <td>${capitalizeFirstLetter(planet.climate)}</td>
    </tr>
  `;
}

function appendToTable(tableId, items) {
  const tbody = document.querySelector(`#${tableId} tbody`);
  items.forEach((item) => {
    tbody.innerHTML += item;
  });
}
