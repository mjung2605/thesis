const worksDataUrl = "works.json";
const displayMax = 5;

const formatDate = (date, locale = 'de-DE') => {
  if (!(date instanceof Date) || isNaN(date)) {
      throw new Error('Invalid date');
  }

  // Prüfen, ob toLocaleDateString gut funktioniert
  try {
      return date.toLocaleDateString(locale, {
          year: 'numeric',
          month: '2-digit',
          day: '2-digit'
      });
  } catch (e) {
      // Safari-kompatibler Fallback
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, '0'); // Monat 0-basiert
      const day = String(date.getDate()).padStart(2, '0');
      return `${day}.${month}.${year}`; // Deutsches Datumsformat
  }
}

const finishedWorks = () => {

  const targetContainer = document.querySelector("[data-js-finished-works]");
  if(!targetContainer) return;

  fetch(worksDataUrl)
    .then(response => response.json())
    .then(data => {
      const sortedData = data.sort((a, b) => {
        return a.order - b.order;
      });
      const items = sortedData.reverse().map((work, index) => {

        const date = new Date(work.date);

        const formattedDateInGerman = formatDateForSafari(date, 'de-DE');
        const imageHtml = !work.image.match(/[a-z]/) 
          ? '' 
          : `<img src=".${work.image}" alt="${work.title}">`; 

        const visibilityClass = index < displayMax ? 'is-visible' : 'is-hidden';
        return `
          <li class="work-item with-light-background ${visibilityClass}">
            <a href=".${work.url}" class="wrap">
              <figure>
                ${imageHtml}
                <figcaption>
                  <h3>${work.title}</h3>
                  <p class="meta">${work.author}, ${work.type}, ${formattedDateInGerman}</p>
                </figcaption>
              </figure>
            </a>
          </li>
        `;
      });
      targetContainer.innerHTML = items.join("");
      showAdditionalWorks();
    });

    
};

const showAdditionalWorks = () => {
  const areThereMoreWorks = document.querySelectorAll(".work-item").length > displayMax;
  if(!areThereMoreWorks) return;
  
  const targetContainer = document.querySelector("[data-js-finished-works]");
  if(!targetContainer) return;

  targetContainer.insertAdjacentHTML("afterend", `<button class="simple-button" data-js-show-more-works class="button">Weitere Arbeiten anzeigen</button>`);

  const showMoreButton = document.querySelector("[data-js-show-more-works]");
  if(!showMoreButton) return;

  showMoreButton.addEventListener("click", () => {
    const hiddenItems = document.querySelectorAll(".work-item.is-hidden");
    hiddenItems.forEach(item => {
      item.classList.remove("is-hidden");
      item.classList.add("is-visible");
    });
    showMoreButton.style.display = "none";
  });
};

export { finishedWorks, showAdditionalWorks };