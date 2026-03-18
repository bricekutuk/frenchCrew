// Données des offres
const offers = {
  standard: {
    title: "Standard",
    price: "2 nuits <strong>99€</strong>/p.",
    features: [
      "— Hôtel",
      "— Billets de train inclus",
      "— 6 villes disponibles",
    ],
  },
  confort: {
    title: "Confort",
    price: "2 nuits <strong>149€</strong>/p.",
    features: [
      "— Hôtel + train",
      "— Restaurant pour 2 personnes",
      "— 6 villes disponibles",
    ],
  },
  premium: {
    title: "Premium",
    price: "2 nuits <strong>199€</strong>/p.",
    features: [
      "— Hôtel + train + restaurant",
      "— 2h spa & massage pour 2",
      "— 6 villes disponibles",
    ],
  },
};

// Mapping onglet => URL
const urls = {
  standard: "destination-offre.html",
  confort: "destination-offre-1.html",
  premium: "destination-offre-2.html",
};

// Sélection des éléments
const tabs = document.querySelectorAll(".tab");
const title = document.getElementById("offer-title");
const price = document.getElementById("offer-price");
const features = document.getElementById("offer-features");
const offerLink = document.getElementById("offer-link");

// Fonction pour mettre à jour le contenu et le lien
function updateOffer(selectedOffer) {
  const offer = offers[selectedOffer];

  // Contenu dynamique
  title.textContent = offer.title;
  price.innerHTML = offer.price;

  features.innerHTML = "";
  offer.features.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    features.appendChild(li);
  });

  // Lien reste cliquable
  offerLink.href = urls[selectedOffer];

  // Animation pulse sur le bouton
  offerLink.classList.remove("pulse"); // reset
  void offerLink.offsetWidth; // force reflow pour relancer l'animation
  offerLink.classList.add("pulse");
}

// Événement sur les onglets
tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const selected = tab.dataset.offer;

    // Gestion classe active onglet
    tabs.forEach((t) => t.classList.remove("active"));
    tab.classList.add("active");

    // Mise à jour contenu
    updateOffer(selected);
  });
});

// Initialisation sur l'onglet actif par défaut
const activeTab = document.querySelector(".tab.active");
if (activeTab) updateOffer(activeTab.dataset.offer);
