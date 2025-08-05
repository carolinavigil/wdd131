// Dish cards
const dishes = [
  { name: 'Anticuchos', description: 'Beef heart grilled with spices.', image: "images/anticuchos.jpg"},
  { name: 'Picarones', description: 'Sweet fried dough made with squash.', image: 'images/picarones.jpg' },
  { name: 'Tamales', description: 'Corn dough stuffed with meat, wrapped in leaves.', image: 'images/tamales.jpg' }
];

const dishContainer = document.getElementById('dishCards');
if (dishContainer) {
  dishes.forEach(dish => {
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `
      <img src="${dish.image}" alt="${dish.name}" loading="lazy">
      <h3>${dish.name}</h3>
      <p>${dish.description}</p>
    `;
    dishContainer.appendChild(card);
  });
}

// Form with localStorage
const form = document.getElementById('reviewForm');
const countDisplay = document.getElementById('reviewCount');

if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    let count = Number(localStorage.getItem('reviewCount')) || 0;
    count++;
    localStorage.setItem('reviewCount', count);
    countDisplay.textContent = `You've submitted ${count} review(s).`;
    form.reset();
  });

  const currentCount = localStorage.getItem('reviewCount');
  if (currentCount) {
    countDisplay.textContent = `You've submitted ${currentCount} review(s).`;
  }
}
