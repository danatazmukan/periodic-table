
const elements = [
  { number: 1, symbol: 'H', name: 'Hydrogen', category: 'nonmetal', position: { row: 1, col: 1 } },
  { number: 2, symbol: 'He', name: 'Helium', category: 'noble-gas', position: { row: 1, col: 18 } },
  { number: 3, symbol: 'Li', name: 'Lithium', category: 'alkali', position: { row: 2, col: 1 } },
  { number: 4, symbol: 'Be', name: 'Beryllium', category: 'alkaline-earth', position: { row: 2, col: 2 } },
  { number: 5, symbol: 'B', name: 'Boron', category: 'metalloid', position: { row: 2, col: 13 } },
  { number: 6, symbol: 'C', name: 'Carbon', category: 'nonmetal', position: { row: 2, col: 14 } },
  { number: 7, symbol: 'N', name: 'Nitrogen', category: 'nonmetal', position: { row: 2, col: 15 } },
  { number: 8, symbol: 'O', name: 'Oxygen', category: 'nonmetal', position: { row: 2, col: 16 } },
  { number: 9, symbol: 'F', name: 'Fluorine', category: 'halogen', position: { row: 2, col: 17 } },
  { number: 10, symbol: 'Ne', name: 'Neon', category: 'noble-gas', position: { row: 2, col: 18 } },
  { number: 11, symbol: 'Na', name: 'Sodium', category: 'alkali', position: { row: 3, col: 1 } },
  { number: 12, symbol: 'Mg', name: 'Magnesium', category: 'alkaline-earth', position: { row: 3, col: 2 } },
  { number: 13, symbol: 'Al', name: 'Aluminum', category: 'metal', position: { row: 3, col: 13 } },
  { number: 14, symbol: 'Si', name: 'Silicon', category: 'metalloid', position: { row: 3, col: 14 } },
  { number: 15, symbol: 'P', name: 'Phosphorus', category: 'nonmetal', position: { row: 3, col: 15 } },
  { number: 16, symbol: 'S', name: 'Sulfur', category: 'nonmetal', position: { row: 3, col: 16 } },
  { number: 17, symbol: 'Cl', name: 'Chlorine', category: 'halogen', position: { row: 3, col: 17 } },
  { number: 18, symbol: 'Ar', name: 'Argon', category: 'noble-gas', position: { row: 3, col: 18 } },
  { number: 19, symbol: 'K', name: 'Potassium', category: 'alkali', position: { row: 4, col: 1 } },
  { number: 20, symbol: 'Ca', name: 'Calcium', category: 'alkaline-earth', position: { row: 4, col: 2 } },
  { number: 21, symbol: 'Sc', name: 'Scandium', category: 'transition', position: { row: 4, col: 3 } },
  { number: 22, symbol: 'Ti', name: 'Titanium', category: 'transition', position: { row: 4, col: 4 } },
  { number: 23, symbol: 'V', name: 'Vanadium', category: 'transition', position: { row: 4, col: 5 } },
  { number: 24, symbol: 'Cr', name: 'Chromium', category: 'transition', position: { row: 4, col: 6 } },
  { number: 25, symbol: 'Mn', name: 'Manganese', category: 'transition', position: { row: 4, col: 7 } },
  { number: 26, symbol: 'Fe', name: 'Iron', category: 'transition', position: { row: 4, col: 8 } },
  { number: 27, symbol: 'Co', name: 'Cobalt', category: 'transition', position: { row: 4, col: 9 } },
  { number: 28, symbol: 'Ni', name: 'Nickel', category: 'transition', position: { row: 4, col: 10 } },
  { number: 29, symbol: 'Cu', name: 'Copper', category: 'transition', position: { row: 4, col: 11 } },
  { number: 30, symbol: 'Zn', name: 'Zinc', category: 'transition', position: { row: 4, col: 12 } },
  { number: 31, symbol: 'Ga', name: 'Gallium', category: 'metal', position: { row: 4, col: 13 } },
  { number: 32, symbol: 'Ge', name: 'Germanium', category: 'metalloid', position: { row: 4, col: 14 } },
  { number: 33, symbol: 'As', name: 'Arsenic', category: 'metalloid', position: { row: 4, col: 15 } },
  { number: 34, symbol: 'Se', name: 'Selenium', category: 'nonmetal', position: { row: 4, col: 16 } },
  { number: 35, symbol: 'Br', name: 'Bromine', category: 'halogen', position: { row: 4, col: 17 } },
  { number: 36, symbol: 'Kr', name: 'Krypton', category: 'noble-gas', position: { row: 4, col: 18 } },
  { number: 37, symbol: 'Rb', name: 'Rubidium', category: 'alkali', position: { row: 5, col: 1 } },
  { number: 38, symbol: 'Sr', name: 'Strontium', category: 'alkaline-earth', position: { row: 5, col: 2 } },
  { number: 39, symbol: 'Y', name: 'Yttrium', category: 'transition', position: { row: 5, col: 3 } },
  { number: 40, symbol: 'Zr', name: 'Zirconium', category: 'transition', position: { row: 5, col: 4 } },
  { number: 41, symbol: 'Nb', name: 'Niobium', category: 'transition', position: { row: 5, col: 5 } },
  { number: 42, symbol: 'Mo', name: 'Molybdenum', category: 'transition', position: { row: 5, col: 6 } },
  { number: 43, symbol: 'Tc', name: 'Technetium', category: 'transition', position: { row: 5, col: 7 } },
  { number: 44, symbol: 'Ru', name: 'Ruthenium', category: 'transition', position: { row: 5, col: 8 } },
  { number: 45, symbol: 'Rh', name: 'Rhodium', category: 'transition', position: { row: 5, col: 9 } },
  { number: 46, symbol: 'Pd', name: 'Palladium', category: 'transition', position: { row: 5, col: 10 } },
  { number: 47, symbol: 'Ag', name: 'Silver', category: 'transition', position: { row: 5, col: 11 } },
  { number: 48, symbol: 'Cd', name: 'Cadmium', category: 'transition', position: { row: 5, col: 12 } },
  { number: 49, symbol: 'In', name: 'Indium', category: 'metal', position: { row: 5, col: 13 } },
  { number: 50, symbol: 'Sn', name: 'Tin', category: 'metal', position: { row: 5, col: 14 } },
  { number: 51, symbol: 'Sb', name: 'Antimony', category: 'metalloid', position: { row: 5, col: 15 } },
  { number: 52, symbol: 'Te', name: 'Tellurium', category: 'metalloid', position: { row: 5, col: 16 } },
  { number: 53, symbol: 'I', name: 'Iodine', category: 'halogen', position: { row: 5, col: 17 } },
  { number: 54, symbol: 'Xe', name: 'Xenon', category: 'noble-gas', position: { row: 5, col: 18 } },
  { number: 55, symbol: 'Cs', name: 'Cesium', category: 'alkali', position: { row: 6, col: 1 } },
  { number: 56, symbol: 'Ba', name: 'Barium', category: 'alkaline-earth', position: { row: 6, col: 2 } },
  { number: 57, symbol: 'La', name: 'Lanthanum', category: 'lanthanoid', position: { row: 6, col: 3 } },
  { number: 58, symbol: 'Ce', name: 'Cerium', category: 'lanthanoid', position: { row: 8, col: 4 } },
  { number: 59, symbol: 'Pr', name: 'Praseodymium', category: 'lanthanoid', position: { row: 8, col: 5 } },
  { number: 60, symbol: 'Nd', name: 'Neodymium', category: 'lanthanoid', position: { row: 8, col: 6 } },
  { number: 61, symbol: 'Pm', name: 'Promethium', category: 'lanthanoid', position: { row: 8, col: 7 } },
  { number: 62, symbol: 'Sm', name: 'Samarium', category: 'lanthanoid', position: { row: 8, col: 8 } },
  { number: 63, symbol: 'Eu', name: 'Europium', category: 'lanthanoid', position: { row: 8, col: 9 } },
  { number: 64, symbol: 'Gd', name: 'Gadolinium', category: 'lanthanoid', position: { row: 8, col: 10 } },
  { number: 65, symbol: 'Tb', name: 'Terbium', category: 'lanthanoid', position: { row: 8, col: 11 } },
  { number: 66, symbol: 'Dy', name: 'Dysprosium', category: 'lanthanoid', position: { row: 8, col: 12 } },
  { number: 67, symbol: 'Ho', name: 'Holmium', category: 'lanthanoid', position: { row: 8, col: 13 } },
  { number: 68, symbol: 'Er', name: 'Erbium', category: 'lanthanoid', position: { row: 8, col: 14 } },
  { number: 69, symbol: 'Tm', name: 'Thulium', category: 'lanthanoid', position: { row: 8, col: 15 } },
  { number: 70, symbol: 'Yb', name: 'Ytterbium', category: 'lanthanoid', position: { row: 8, col: 16 } },
  { number: 71, symbol: 'Lu', name: 'Lutetium', category: 'lanthanoid', position: { row: 8, col: 17 } },
  { number: 72, symbol: 'Hf', name: 'Hafnium', category: 'transition', position: { row: 6, col: 4 } },
  { number: 73, symbol: 'Ta', name: 'Tantalum', category: 'transition', position: { row: 6, col: 5 } },
  { number: 74, symbol: 'W', name: 'Tungsten', category: 'transition', position: { row: 6, col: 6 } },
  { number: 75, symbol: 'Re', name: 'Rhenium', category: 'transition', position: { row: 6, col: 7 } },
  { number: 76, symbol: 'Os', name: 'Osmium', category: 'transition', position: { row: 6, col: 8 } },
  { number: 77, symbol: 'Ir', name: 'Iridium', category: 'transition', position: { row: 6, col: 9 } },
  { number: 78, symbol: 'Pt', name: 'Platinum', category: 'transition', position: { row: 6, col: 10 } },
  { number: 79, symbol: 'Au', name: 'Gold', category: 'transition', position: { row: 6, col: 11 } },
  { number: 80, symbol: 'Hg', name: 'Mercury', category: 'transition', position: { row: 6, col: 12 } },
  { number: 81, symbol: 'Tl', name: 'Thallium', category: 'metal', position: { row: 6, col: 13 } },
  { number: 82, symbol: 'Pb', name: 'Lead', category: 'metal', position: { row: 6, col: 14 } },
  { number: 83, symbol: 'Bi', name: 'Bismuth', category: 'metal', position: { row: 6, col: 15 } },
  { number: 84, symbol: 'Po', name: 'Polonium', category: 'metalloid', position: { row: 6, col: 16 } },
  { number: 85, symbol: 'At', name: 'Astatine', category: 'halogen', position: { row: 6, col: 17 } },
  { number: 86, symbol: 'Rn', name: 'Radon', category: 'noble-gas', position: { row: 6, col: 18 } },
  { number: 87, symbol: 'Fr', name: 'Francium', category: 'alkali', position: { row: 7, col: 1 } },
  { number: 88, symbol: 'Ra', name: 'Radium', category: 'alkaline-earth', position: { row: 7, col: 2 } },
  { number: 89, symbol: 'Ac', name: 'Actinium', category: 'actinoid', position: { row: 7, col: 3 } },
  { number: 90, symbol: 'Th', name: 'Thorium', category: 'actinoid', position: { row: 9, col: 4 } },
  { number: 91, symbol: 'Pa', name: 'Protactinium', category: 'actinoid', position: { row: 9, col: 5 } },
  { number: 92, symbol: 'U', name: 'Uranium', category: 'actinoid', position: { row: 9, col: 6 } },
  { number: 93, symbol: 'Np', name: 'Neptunium', category: 'actinoid', position: { row: 9, col: 7 } },
  { number: 94, symbol: 'Pu', name: 'Plutonium', category: 'actinoid', position: { row: 9, col: 8 } },
  { number: 95, symbol: 'Am', name: 'Americium', category: 'actinoid', position: { row: 9, col: 9 } },
  { number: 96, symbol: 'Cm', name: 'Curium', category: 'actinoid', position: { row: 9, col: 10 } },
  { number: 97, symbol: 'Bk', name: 'Berkelium', category: 'actinoid', position: { row: 9, col: 11 } },
  { number: 98, symbol: 'Cf', name: 'Californium', category: 'actinoid', position: { row: 9, col: 12 } },
  { number: 99, symbol: 'Es', name: 'Einsteinium', category: 'actinoid', position: { row: 9, col: 13 } },
  { number: 100, symbol: 'Fm', name: 'Fermium', category: 'actinoid', position: { row: 9, col: 14 } },
  { number: 101, symbol: 'Md', name: 'Mendelevium', category: 'actinoid', position: { row: 9, col: 15 } },
  { number: 102, symbol: 'No', name: 'Nobelium', category: 'actinoid', position: { row: 9, col: 16 } },
  { number: 103, symbol: 'Lr', name: 'Lawrencium', category: 'actinoid', position: { row: 9, col: 17 } },
  { number: 104, symbol: 'Rf', name: 'Rutherfordium', category: 'transition', position: { row: 7, col: 4 } },
  { number: 105, symbol: 'Db', name: 'Dubnium', category: 'transition', position: { row: 7, col: 5 } },
  { number: 106, symbol: 'Sg', name: 'Seaborgium', category: 'transition', position: { row: 7, col: 6 } },
  { number: 107, symbol: 'Bh', name: 'Bohrium', category: 'transition', position: { row: 7, col: 7 } },
  { number: 108, symbol: 'Hs', name: 'Hassium', category: 'transition', position: { row: 7, col: 8 } },
  { number: 109, symbol: 'Mt', name: 'Meitnerium', category: 'transition', position: { row: 7, col: 9 } },
  { number: 110, symbol: 'Ds', name: 'Darmstadtium', category: 'transition', position: { row: 7, col: 10 } },
  { number: 111, symbol: 'Rg', name: 'Roentgenium', category: 'transition', position: { row: 7, col: 11 } },
  { number: 112, symbol: 'Cn', name: 'Copernicium', category: 'transition', position: { row: 7, col: 12 } },
  { number: 113, symbol: 'Nh', name: 'Nihonium', category: 'metal', position: { row: 7, col: 13 } },
  { number: 114, symbol: 'Fl', name: 'Flerovium', category: 'metal', position: { row: 7, col: 14 } },
  { number: 115, symbol: 'Mc', name: 'Moscovium', category: 'metal', position: { row: 7, col: 15 } },
  { number: 116, symbol: 'Lv', name: 'Livermorium', category: 'metal', position: { row: 7, col: 16 } },
  { number: 117, symbol: 'Ts', name: 'Tennessine', category: 'halogen', position: { row: 7, col: 17 } },
  { number: 118, symbol: 'Og', name: 'Oganesson', category: 'noble-gas', position: { row: 7, col: 18 } }
];

function createPeriodicTable() {
  const table = document.getElementById('periodic-table');
  const infoDiv = document.getElementById('element-info');
  
  // Create a grid of empty cells
  for (let row = 1; row <= 9; row++) {
    for (let col = 1; col <= 18; col++) {
      const cell = document.createElement('div');
      cell.className = 'element-cell';
      cell.style.gridRow = row;
      cell.style.gridColumn = col;
      table.appendChild(cell);
    }
  }
  
  // Place elements in their correct positions
  elements.forEach(element => {
    const elementDiv = document.createElement('div');
    elementDiv.className = `element ${element.category}`;
    elementDiv.innerHTML = `
      <div class="number">${element.number}</div>
      <div class="symbol">${element.symbol}</div>
      <div class="name">${element.name}</div>
    `;
    
    elementDiv.style.gridRow = element.position.row;
    elementDiv.style.gridColumn = element.position.col;
    
    elementDiv.addEventListener('click', () => {
      infoDiv.style.display = 'block';
      infoDiv.innerHTML = `
        <h2>${element.name} (${element.symbol})</h2>
        <p>Atomic Number: ${element.number}</p>
        <p>Category: ${element.category}</p>
      `;
    });
    
    table.appendChild(elementDiv);
  });
}

document.addEventListener('DOMContentLoaded', createPeriodicTable);
