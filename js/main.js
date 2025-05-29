document.addEventListener('DOMContentLoaded', () => {
  const initiatives = [
    {
      title: "Youth Leadership Camp",
      desc: "Empowering teens with core values through mentorship.",
      date: "2025-07-15",
      image: "images/initiatives/leadership-camp.jpg",
      status: "upcoming"
    },
    {
      title: "Civic Education Forum",
      desc: "Public discourse on responsible citizenship.",
      date: "2025-03-10",
      image: "images/initiatives/forum.jpg",
      status: "past"
    },
    {
      title: "Patriotism School Tour",
      desc: "Visiting schools to promote national pride.",
      date: "2025-09-01",
      image: "images/initiatives/school-tour.jpg",
      status: "upcoming"
    }
  ];

  const blogEntries = [
    {
      title: "Why Patriotism Still Matters",
      snippet: "In an age of global identities, here’s why national pride is still key...",
      link: "#"
    },
    {
      title: "Building Integrity in Schools",
      snippet: "It starts with values. How we're engaging students early on...",
      link: "#"
    }
  ];

  // Load initiative cards
  const cardContainer = document.querySelector('.cards');
  const filterButtons = document.querySelectorAll('.filters button');

  function renderCards(filter = 'all') {
    cardContainer.innerHTML = '';
    initiatives
      .filter(i => filter === 'all' || i.status === filter)
      .forEach(i => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
          <img src="${i.image}" alt="${i.title}" />
          <h3>${i.title}</h3>
          <p>${i.desc}</p>
          <small>${i.date}</small>
        `;
        cardContainer.appendChild(card);
      });
  }

  filterButtons.forEach(btn =>
    btn.addEventListener('click', () => renderCards(btn.textContent.toLowerCase()))
  );

  renderCards();

  // Load blog entries
  const blogContainer = document.querySelector('.blog-entries');
  blogEntries.forEach(post => {
    const entry = document.createElement('div');
    entry.innerHTML = `
      <h3>${post.title}</h3>
      <p>${post.snippet}</p>
      <a href="${post.link}">Read more →</a>
    `;
    blogContainer.appendChild(entry);
  });

});

const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('show');
  });