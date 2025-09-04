function showSection(id) {
  document.querySelectorAll("section").forEach(sec => sec.classList.remove("active"));
  document.getElementById(id).classList.add("active");
}
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function displayTasks() {
  const list = document.getElementById("taskList");
  list.innerHTML = "";
  tasks.forEach((task, index) => {
    const li = document.createElement("li");
    li.innerHTML = `${task} <button onclick="removeTask(${index})">❌</button>`;
    list.appendChild(li);
  });
}

function addTask() {
  const task = document.getElementById("task").value;
  if (task) {
    tasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    document.getElementById("task").value = "";
    displayTasks();
  }
}

function removeTask(index) {
  tasks.splice(index, 1);
  localStorage.setItem("tasks", JSON.stringify(tasks));
  displayTasks();
}
displayTasks();
const products = [
  { name: "Laptop", category: "electronics", price: 500 },
  { name: "Shirt", category: "clothing", price: 20 },
  { name: "Headphones", category: "electronics", price: 50 },
  { name: "Jeans", category: "clothing", price: 40 },
];

let filteredProducts = [...products];

function displayProducts() {
  const container = document.getElementById("productList");
  container.innerHTML = "";
  filteredProducts.forEach(p => {
    const div = document.createElement("div");
    div.classList.add("product");
    div.innerHTML = `<h3>${p.name}</h3><p>Category: ${p.category}</p><p>Price: $${p.price}</p>`;
    container.appendChild(div);
  });
}

function filterProducts() {
  const category = document.getElementById("categoryFilter").value;
  filteredProducts = category === "all" ? [...products] : products.filter(p => p.category === category);
  displayProducts();
}

function sortProducts() {
  const order = document.getElementById("sortPrice").value;
  filteredProducts.sort((a, b) => order === "asc" ? a.price - b.price : b.price - a.price);
  displayProducts();
}
displayProducts();
