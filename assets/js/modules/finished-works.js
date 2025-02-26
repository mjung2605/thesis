const worksDataUrl = "works.json";
const displayMax = 5;

const formatDateForSafari = (dateString, locale = 'de-DE') => {

  const dateRegex = /^(....)-(.*?)-(.*?) /;
  const match = dateString.match(dateRegex);
  
  if (!match) {
    return "Ungültiges Datumsformat";
  }
  
  const [_, year, month, day] = match;
  
  // Mapping von englischen Monatsnamen zu deutschen
  const monthMapping = {
    "01": "Januar",
    "02": "Februar",
    "03": "März",
    "04": "April",
    "05": "Mai",
    "06": "Juni",
    "07": "Juli",
    "08": "August",
    "09": "September",
    "10": "Oktober",
    "11": "November",
    "12": "Dezember"
  };
  
  // Umwandlung in das Format "11 Dezember 2024"
  const germanMonth = monthMapping[month] || month;
  return `${germanMonth} ${year}`;
};



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

        const formattedDateInGerman = formatDateForSafari(work.date, 'de-DE');
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