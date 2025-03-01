const worksDataUrl = "state-of-works.json";

const factorsByType = {
  "Praxisprojekt": 1,
  "Bachelorarbeit": 0.4,
  "Masterarbeit": 0.6
};

const maxWorksByType = {
  "Praxisprojekt": 6,
  "Bachelorarbeit": 6,
  "Masterarbeit": 2
};

const shotcuts = {
  "Praxisprojekt": "pp",
  "Bachelorarbeit": "ba",
  "Masterarbeit": "ma"
}

const calculateWorks = (clusterWorks) => {
  const types = Object.keys(clusterWorks);
  const sumUpTypes = {};
  const calcOverall = {};

  types.map(type => {

    sumUpTypes[type] = {};
    sumUpTypes[type]["in-preparation"] = isNaN(clusterWorks[type]["in-preparation"]) ? 0 : clusterWorks[type]["in-preparation"] * factorsByType[type];
    sumUpTypes[type]["in-progress"] = isNaN(clusterWorks[type]["in-progress"]) ? 0 : clusterWorks[type]["in-progress"] * factorsByType[type];
    sumUpTypes[type]["in-evaluation"] = isNaN(clusterWorks[type]["in-evaluation"]) ? 0 : clusterWorks[type]["in-evaluation"] * factorsByType[type];

    calcOverall[type] = Math.round(sumUpTypes[type]["in-preparation"] + sumUpTypes[type]["in-progress"] + sumUpTypes[type]["in-evaluation"]);

    const states = Object.keys(sumUpTypes[type]);
    states.map(state => {
      const shotcut = shotcuts[type];
      const selector = `data-js-${state}-${shotcut}`;
      const target = document.querySelector(`[${selector}]`);
      
      if(!target) return;
      target.innerHTML = clusterWorks[type][state] !== undefined ? clusterWorks[type][state] : "-";
    });


  });

  return calcOverall;
};

const showCapacity = (calcOverall) => {

  const types = Object.keys(calcOverall);

  types.map(type => {
    const maxWorks = maxWorksByType[type];
    const works = calcOverall[type];
    const shotcut = shotcuts[type];
    const targets = document.querySelectorAll(`[data-js-capacity-${shotcut}]`);

    targets.forEach(target => {
      if(!target) return;  
      target.innerHTML = `<span class="capacity-item">${maxWorks - works}</span>`;
    });
  });
}

const stateOfWorkIndicator = () => {

  const clusterWorks = {};

  fetch(worksDataUrl)
    .then(response => response.json())
    .then(works => {

      const filteredWorks = works.filter(work => work.status !== "");

      filteredWorks.map(work => {
        const { type } = work;
        const { status } = work;

        if (!clusterWorks[type]) {
          clusterWorks[type] = {};
        }
        if (!clusterWorks[type][status]) {
          clusterWorks[type][status] = 0;
        }
        clusterWorks[type][status]++;

      });

      const calcOverall = calculateWorks(clusterWorks);
      showCapacity(calcOverall);
    });

};


export { stateOfWorkIndicator };