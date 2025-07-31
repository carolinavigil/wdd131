const products = [
  { id: "wd100", name: "Widget 100" },
  { id: "wd110", name: "Widget 110" },
  { id: "wd200", name: "Widget 200" },
  { id: "wd210", name: "Widget 210" },
];

const selectElement = document.getElementById("product");

products.forEach(product => {
  const option = document.createElement("option");
  option.value = product.id;
  option.textContent = product.name;
  selectElement.appendChild(option);
});
// Dynamic Footer
document.getElementById('year').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = document.lastModified;