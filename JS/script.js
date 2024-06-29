const year = document.querySelector(".year");
const currentYear = new Date().getFullYear();
year.textContent = currentYear;

/////////////////////////////
// cards selection
const cards = document.querySelectorAll(".section-menu__card");

cards.forEach((card) => {
  card.addEventListener("click", () => {
    cards.forEach((c) => c.classList.remove("section-menu__card--active")); // Remove active class from all cards
    card.classList.add("section-menu__card--active"); // Add active class to clicked card
  });
});

// cards focus
document.querySelectorAll(".section-menu__card").forEach((card) => {
  card.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      card.click(); // Trigger the click event
    }
  });

  card.addEventListener("click", () => {
    // Remove active state from all cards
    document
      .querySelectorAll(".section-menu__card")
      .forEach((c) => c.classList.remove("section-menu__card--active"));
    // Add active state to the clicked card
    card.classList.add("section-menu__card--active");
  });
});

/////////////////////////////
// mobile navigation
const navBtnEL = document.querySelector(".header__mobile-nav-btn");
const navHeaderEl = document.querySelector(".header");

navBtnEL.addEventListener("click", function () {
  navHeaderEl.classList.toggle("header__nav--open");
  console.log(navHeaderEl.classList);
});

const allLinks = document.querySelectorAll("a:link");
console.log(allLinks);

allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    const href = link.getAttribute("href");
    console.log(href);
    // console.log(link);

    // Check if the link is internal (starts with #)
    if (href.startsWith("#")) {
      e.preventDefault();

      // scroll back to top:
      if (href === "#") {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      } else {
        // other scrolling
        const sectionEl = document.querySelector(href);
        sectionEl.scrollIntoView({ behavior: "smooth" });
      }

      // close mobile nav
      if (navHeaderEl.classList.contains("header__nav--open")) {
        navHeaderEl.classList.toggle("header__nav--open");
      }
    }
  });
});

///////////////////////////////////////////////////////////
// sticky navbar
document.addEventListener("DOMContentLoaded", function () {
  const sectionHeroEl = document.querySelector(".section-hero");

  if (!sectionHeroEl) {
    console.error('No element found with the class "section-hero"');
    return;
  }

  const obs = new IntersectionObserver(
    function (entries) {
      const ent = entries[0];
      console.log(ent);

      if (!ent.isIntersecting) {
        document.body.classList.add("header__sticky-nav");
      } else {
        document.body.classList.remove("header__sticky-nav");
      }
    },
    {
      root: null,
      threshold: 0,
      rootMargin: "-96px", // Added "px" to rootMargin
    }
  );

  obs.observe(sectionHeroEl);
});
