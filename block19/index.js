const averageprice = document.querySelector("#average-price");
const table = document.querySelector("#table tbody");

const freelancers = [
  { name: "Dr. Slice", price: 25, occupation: "gardener" },
  { name: "Dr. Pressure", price: 51, occupation: "programmer" },
  { name: "Prof. Possibility", price: 43, occupation: "teacher" },
  { name: "Prof. Prism", price: 81, occupation: "teacher" },
  { name: "Dr. Impulse", price: 43, occupation: "teacher" },
  { name: "Prof. Spark", price: 76, occupation: "programmer" },
  { name: "Dr. Wire", price: 47, occupation: "teacher" },
  { name: "Prof. Goose", price: 72, occupation: "driver" },
];

function showFreelancers() {
  freelancers.forEach((elem) => {
    const row = document.createElement("tr");

    const name = document.createElement("td");
    name.textContent = elem.name;
    row.appendChild(name);

    const price = document.createElement("td");
    price.textContent = `$${elem.price}`;
    row.appendChild(price);

    const occupation = document.createElement("td");
    occupation.textContent = elem.occupation;
    row.appendChild(occupation);

    table.appendChild(row);
  });
}



showFreelancers();
