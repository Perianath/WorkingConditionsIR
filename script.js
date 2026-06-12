// Starting households are varied but close in total strength so no group is doomed.
const households = [
  {
    name: "Whitaker Family",
    health: 6,
    income: 3,
    note: "Rural labourers with strong family support but little spare money."
  },
  {
    name: "Doyle Family",
    health: 4,
    income: 5,
    note: "A family already doing paid mill work, earning more but worn down."
  },
  {
    name: "Carter Family",
    health: 5,
    income: 4,
    note: "A balanced household with some tools, contacts and steady habits."
  },
  {
    name: "Morales Family",
    health: 3,
    income: 6,
    note: "Skilled textile workers with better wages but crowded living conditions."
  },
  {
    name: "Hughes Family",
    health: 7,
    income: 2,
    note: "Healthy farm workers facing pressure from changing land ownership."
  },
  {
    name: "Gallagher Family",
    health: 4,
    income: 4,
    note: "Recent arrivals with limited savings and few secure connections."
  },
  {
    name: "Bennett Family",
    health: 5,
    income: 5,
    note: "A large household able to earn several small wages at once."
  },
  {
    name: "Turner Family",
    health: 6,
    income: 4,
    note: "A partly skilled family with decent health but uncertain employment."
  }
];

// Each round pairs a classroom-friendly historical situation with three trade-off choices.
const rounds = [
  {
    title: "Rural Change and Enclosure",
    situation:
      "Open fields near your village are being enclosed by landowners. Families who once grazed animals or gathered fuel on common land now need permission or money. Some people find paid farm work, but others lose access to food, firewood and small plots. Your household must decide how to respond before winter makes every shortage harder.",
    choices: [
      {
        text: "Stay and bargain for seasonal farm work.",
        impact: { health: 1, income: -1 },
        meaning:
          "Staying close to familiar support could protect health, but seasonal work was insecure and often paid poorly."
      },
      {
        text: "Sell belongings and prepare to move.",
        impact: { health: -1, income: 1 },
        meaning:
          "Migration could open new wage opportunities, but selling possessions and travelling placed stress on poor families."
      },
      {
        text: "Take illegal firewood from enclosed land.",
        impact: { health: 1, income: -2 },
        meaning:
          "Common rights mattered. When they disappeared, survival choices could bring fines or punishment."
      }
    ]
  },
  {
    title: "Moving to an Industrial Town",
    situation:
      "A fast-growing town advertises work in mills and foundries. Streets are crowded with newcomers, and rents are rising quickly. The town has wages, shops and schools, but smoke, noise and disease spread easily. Your household needs somewhere to live while searching for work in a place where thousands of families are doing the same.",
    choices: [
      {
        text: "Rent a cheap cellar room near the mills.",
        impact: { health: -2, income: 2 },
        meaning:
          "Living close to work saved time and money, but damp and overcrowded housing helped diseases spread."
      },
      {
        text: "Pay more for a small room on higher ground.",
        impact: { health: 1, income: -1 },
        meaning:
          "Better housing could reduce sickness, though many workers had to sacrifice income to afford it."
      },
      {
        text: "Share rooms with relatives until work is steady.",
        impact: { health: 0, income: 1 },
        meaning:
          "Kinship networks helped many migrants survive, but crowding still created pressure and conflict."
      }
    ]
  },
  {
    title: "Factory Work",
    situation:
      "The mill offers long shifts under strict supervision. Bells set the day, machines set the pace, and lateness can mean lost pay. Factory work is more regular than many rural jobs, but the air is dusty and accidents are common. Your household must decide who takes the first stable position.",
    choices: [
      {
        text: "Accept the longest shift for the highest wage.",
        impact: { health: -2, income: 3 },
        meaning:
          "Industrial wages could be attractive, but long hours and harsh discipline damaged workers' bodies."
      },
      {
        text: "Choose a lower-paid job with shorter hours.",
        impact: { health: 1, income: 1 },
        meaning:
          "Some workers traded income for safer or more manageable work when they had that choice."
      },
      {
        text: "Refuse factory work and look for casual jobs.",
        impact: { health: 0, income: -1 },
        meaning:
          "Avoiding factory danger could protect health, but casual labour was unreliable during industrial change."
      }
    ]
  },
  {
    title: "Child Labour",
    situation:
      "A factory overseer asks whether your oldest child can work as a piecer, tying broken threads beneath moving machinery. Children are paid less than adults, which makes them attractive to employers. Their wages could help with rent and food, but school would be missed and factory injuries are a real danger.",
    choices: [
      {
        text: "Send the child to work full time.",
        impact: { health: -2, income: 3 },
        meaning:
          "Child labour helped poor households survive, but it exposed children to exhaustion, injury and lost education."
      },
      {
        text: "Send the child part time and keep some schooling.",
        impact: { health: -1, income: 1 },
        meaning:
          "Families often balanced immediate wages against future opportunities, especially before strong education laws."
      },
      {
        text: "Keep the child out of the factory.",
        impact: { health: 1, income: -2 },
        meaning:
          "Protecting children improved wellbeing, but many working-class families could not easily give up a wage."
      }
    ]
  },
  {
    title: "Housing and Sanitation",
    situation:
      "The street pump is close to open drains, and waste runs through the lane after rain. A neighbour says sickness is spreading through nearby courts. Town councils are beginning to discuss sewers and clean water, but improvements are slow and uneven. Your household can spend time or money trying to reduce the risk.",
    choices: [
      {
        text: "Boil water and clean the room regularly.",
        impact: { health: 2, income: -1 },
        meaning:
          "Clean water and sanitation were major public health issues. Prevention helped, but cost time and fuel."
      },
      {
        text: "Move to cheaper back-to-back housing.",
        impact: { health: -2, income: 2 },
        meaning:
          "Cheap industrial housing often meant poor ventilation, shared toilets and contaminated water."
      },
      {
        text: "Join neighbours petitioning for drains.",
        impact: { health: 1, income: 0 },
        meaning:
          "Public pressure helped drive urban reform, although changes could take years to reach poor streets."
      }
    ]
  },
  {
    title: "New Machinery",
    situation:
      "A new machine arrives at the mill. It can produce more cloth with fewer skilled workers. Some employees fear wage cuts or dismissal, while others hope to learn the machine and keep a place in the factory. Industrial technology is changing work quickly, and your household must choose how to respond.",
    choices: [
      {
        text: "Train to operate the new machinery.",
        impact: { health: -1, income: 3 },
        meaning:
          "Workers who gained new skills could benefit from technology, but training often happened in dangerous workplaces."
      },
      {
        text: "Resist the change with other workers.",
        impact: { health: 0, income: -1 },
        meaning:
          "Machine-breaking and protest showed workers' fears about losing skills, wages and control."
      },
      {
        text: "Move to repair and maintenance work.",
        impact: { health: 1, income: 1 },
        meaning:
          "Some industrial jobs became more specialised, offering safer and steadier work to those who could access them."
      }
    ]
  },
  {
    title: "Injury or Illness",
    situation:
      "After months of dust, noise and long hours, one adult in your household develops a chest illness. Missing shifts means lost pay, but returning too early may make the sickness worse. Doctors cost money, and many workers have no paid sick leave. The family has to manage both survival and recovery.",
    choices: [
      {
        text: "Return to work immediately.",
        impact: { health: -3, income: 2 },
        meaning:
          "Without sick pay, many workers kept labouring through illness, risking long-term damage."
      },
      {
        text: "Rest for a week and rely on savings.",
        impact: { health: 2, income: -2 },
        meaning:
          "Rest could prevent worse illness, but lost wages quickly threatened rent and food."
      },
      {
        text: "Ask a friendly society or church for help.",
        impact: { health: 1, income: 0 },
        meaning:
          "Mutual aid, charities and churches supported some families before modern welfare systems existed."
      }
    ]
  },
  {
    title: "Reform, Unions, or Education",
    situation:
      "News spreads about factory reform, worker organisation and schools for poor children. Some employers dislike unions, and reform laws do not solve every problem at once. Still, workers are finding ways to demand shorter hours, safer workplaces and better futures for children. Your household makes one final choice.",
    choices: [
      {
        text: "Join a workers' association despite the risk.",
        impact: { health: 1, income: 1 },
        meaning:
          "Collective action helped workers push for safer conditions and fairer pay, although it could carry personal risk."
      },
      {
        text: "Keep children in evening lessons.",
        impact: { health: 1, income: 0 },
        meaning:
          "Education reforms gradually gave working-class children more opportunities beyond factory labour."
      },
      {
        text: "Avoid attention and work as much as possible.",
        impact: { health: -1, income: 2 },
        meaning:
          "Extra work could lift income in the short term, but it left families exposed to exhaustion and exploitation."
      }
    ]
  }
];

// The game only keeps state in memory. Nothing is saved or sent anywhere.
const state = {
  household: null,
  health: 0,
  income: 0,
  roundIndex: 0,
  selectedChoice: null,
  immediateFail: false,
  failReason: ""
};

const app = document.querySelector("#app");
const restartTop = document.querySelector("#restartTop");

restartTop.addEventListener("click", restartGame);

function applyCrisisBalancing() {
  if (state.health <= 0 || state.income <= 0) {
    state.immediateFail = true;
    state.failReason = "One of your household's survival scores reached 0 or less.";
    return null;
  }

  if (state.health < 3) {
    const transfer = 3 - state.health;
    state.income -= transfer;
    state.health = 3;
    return {
      type: "Health Crisis",
      message: `Your family loses ${transfer} Income to pay for medicine, food, or lost work time. Health is restored to 3.`
    };
  }

  if (state.income < 3) {
    const transfer = 3 - state.income;
    state.health -= transfer;
    state.income = 3;
    return {
      type: "Poverty Crisis",
      message: `Your family loses ${transfer} Health to keep earning enough money. Income is restored to 3.`
    };
  }

  return null;
}

function renderIntro() {
  app.innerHTML = `
    <section class="intro-grid">
      <div class="panel">
        <h2>Choose your household</h2>
        <p class="situation">
          You are a working-class household facing the changes of the Industrial Revolution.
          Every choice can improve your income, protect your health, or place your family at risk.
          Select a household, then guide them through eight historical decisions.
        </p>
        <div class="household-grid">
          ${households.map((household, index) => householdCard(household, index)).join("")}
        </div>
      </div>
      <aside class="factory-panel" aria-label="Factory themed illustration">
        <p class="kicker">Factories, towns and trade-offs</p>
        <h2>Can your family stay stable?</h2>
        <p>Higher wages may come with crowded housing, child labour, dangerous machines and illness.</p>
        <div class="factory-skyline" aria-hidden="true">
          <span class="mill"></span>
          <span class="chimney"></span>
          <span class="mill tall"></span>
          <span class="chimney"></span>
          <span class="smoke"></span>
        </div>
      </aside>
    </section>
  `;

  document.querySelectorAll("[data-household]").forEach((button) => {
    button.addEventListener("click", () => selectHousehold(Number(button.dataset.household)));
  });
}

function householdCard(household, index) {
  return `
    <button class="household-card" type="button" data-household="${index}">
      <strong>${household.name}</strong>
      <span class="stat-row">
        <span class="stat-pill">Health ${household.health}</span>
        <span class="stat-pill income">Income ${household.income}</span>
      </span>
      <p>${household.note}</p>
    </button>
  `;
}

function selectHousehold(index) {
  state.household = households[index];
  state.health = state.household.health;
  state.income = state.household.income;
  state.roundIndex = 0;
  state.selectedChoice = null;
  state.immediateFail = false;
  state.failReason = "";
  renderRound();
}

function renderRound() {
  const round = rounds[state.roundIndex];
  app.innerHTML = `
    <section class="game-layout">
      ${scoreboard()}
      <article class="panel round-panel">
        <p class="round-meta">Round ${state.roundIndex + 1} of ${rounds.length}</p>
        <h2>${round.title}</h2>
        <p class="situation">${round.situation}</p>
        <div class="choice-grid">
          ${round.choices.map((choice, index) => choiceButton(choice, index)).join("")}
        </div>
        <div id="feedbackArea"></div>
      </article>
    </section>
  `;

  document.querySelectorAll("[data-choice]").forEach((button) => {
    button.addEventListener("click", () => chooseOption(Number(button.dataset.choice)));
  });
}

function scoreboard() {
  const progress = Math.round((state.roundIndex / rounds.length) * 100);
  return `
    <aside class="scoreboard" id="scoreboardPanel">
      <h2>${state.household.name}</h2>
      <p>${state.household.note}</p>
      <div class="score-card"><span>Health</span><strong id="healthScore">${state.health}</strong></div>
      <div class="score-card"><span>Income</span><strong id="incomeScore">${state.income}</strong></div>
      <div class="progress-wrap">
        <div class="progress-label">
          <span>Progress</span>
          <span>${state.roundIndex}/${rounds.length}</span>
        </div>
        <div class="progress-track">
          <div class="progress-fill" style="width: ${progress}%"></div>
        </div>
      </div>
      <div class="button-row">
        <button class="secondary-button" type="button" onclick="restartGame()">Restart Game</button>
      </div>
    </aside>
  `;
}

function choiceButton(choice, index) {
  return `
    <button class="choice-button" type="button" data-choice="${index}">
      <span>
        <span class="choice-title">${choice.text}</span>
        <span>${previewImpact(choice.impact)}</span>
      </span>
      <span class="choice-impact">${formatImpact(choice.impact)}</span>
    </button>
  `;
}

function previewImpact(impact) {
  const parts = [];
  if (impact.health !== 0) parts.push(`${impact.health > 0 ? "gain" : "lose"} Health`);
  if (impact.income !== 0) parts.push(`${impact.income > 0 ? "gain" : "lose"} Income`);
  return parts.length ? parts.join(" and ") : "no immediate score change";
}

function formatImpact(impact) {
  const health = impact.health === 0 ? "H 0" : `H ${impact.health > 0 ? "+" : ""}${impact.health}`;
  const income = impact.income === 0 ? "I 0" : `I ${impact.income > 0 ? "+" : ""}${impact.income}`;
  return `${health} | ${income}`;
}

function updateVisibleScores() {
  const scoreboardPanel = document.querySelector("#scoreboardPanel");
  const healthScore = document.querySelector("#healthScore");
  const incomeScore = document.querySelector("#incomeScore");

  if (scoreboardPanel) {
    scoreboardPanel.outerHTML = scoreboard();
    return;
  }

  if (healthScore) healthScore.textContent = state.health;
  if (incomeScore) incomeScore.textContent = state.income;
}

function chooseOption(choiceIndex) {
  const round = rounds[state.roundIndex];
  const choice = round.choices[choiceIndex];
  state.health += choice.impact.health;
  state.income += choice.impact.income;
  state.selectedChoice = choice;
  const crisis = applyCrisisBalancing();
  updateVisibleScores();

  if (state.health <= 0 || state.income <= 0) {
    state.immediateFail = true;
    state.failReason = crisis
      ? `${crisis.type} pushed one of your survival scores to 0 or less.`
      : "One of your household's survival scores reached 0 or less.";
  }

  document.querySelectorAll("[data-choice]").forEach((button) => {
    button.disabled = true;
  });

  const crisisMessage = crisis
    ? `<p class="crisis-note"><strong>${crisis.type}:</strong> ${crisis.message}</p>`
    : "";
  const failureMessage = state.immediateFail
    ? `<p class="crisis-note failed"><strong>Immediate failure:</strong> ${state.failReason}</p>`
    : "";

  document.querySelector("#feedbackArea").innerHTML = `
    <div class="feedback">
      <h3>Historical meaning</h3>
      <p>${choice.meaning}</p>
      <p><strong>Score change:</strong> ${formatImpact(choice.impact)}</p>
      ${crisisMessage}
      ${failureMessage}
      <p><strong>Score after crisis check:</strong> Health ${state.health} | Income ${state.income}</p>
      <button class="primary-button" type="button" id="nextRound">
        ${state.immediateFail || state.roundIndex === rounds.length - 1 ? "View Final Result" : "Continue"}
      </button>
    </div>
  `;

  document.querySelector("#nextRound").addEventListener("click", nextRound);
}

function nextRound() {
  if (state.immediateFail) {
    renderResults();
    return;
  }

  state.roundIndex += 1;
  state.selectedChoice = null;

  if (state.roundIndex >= rounds.length) {
    renderResults();
    return;
  }

  renderRound();
}

function getOutcome(total, forcedFail = false) {
  if (forcedFail || total <= 9) {
    return {
      level: "failed",
      title: "Household Failed",
      text:
        "Your household could not keep up with the pressures of industrial life. Injury, illness, lost wages, or unsafe work conditions pushed your family into crisis. Many real factory families faced setbacks like these and depended on charity, relatives, or poor relief to survive."
    };
  }

  if (total <= 16) {
    return {
      level: "survived",
      title: "Household Survived",
      text:
        "Your household managed difficult trade-offs between health and income well enough to remain stable. Life is still hard and uncertain, but you avoided the worst outcomes that affected many industrial workers."
    };
  }

  return {
    level: "thrived",
    title: "Household Thrived",
    text:
      "Your household adapted to changing factory conditions, new technology, and reform efforts. Skilled work, safer roles, or careful decisions helped you build a more secure position than many workers achieved during the Industrial Revolution."
  };
}

function renderResults() {
  const total = state.health + state.income;
  const outcome = getOutcome(total, state.immediateFail);
  const immediateFailMessage = state.immediateFail
    ? `<p class="crisis-note failed"><strong>Immediate failure:</strong> ${state.failReason}</p>`
    : "";

  app.innerHTML = `
    <section class="panel">
      <p class="round-meta">Final result</p>
      <h2>${state.household.name}</h2>
      <div class="result-box ${outcome.level}">
        <h3>${outcome.title}</h3>
        <p>${outcome.text}</p>
        ${immediateFailMessage}
      </div>

      <div class="score-row" aria-label="Final scores">
        <span class="stat-pill">Final Health ${state.health}</span>
        <span class="stat-pill income">Final Income ${state.income}</span>
        <span class="stat-pill">Total ${total}</span>
      </div>

      <h3>What you learned</h3>
      <ul class="summary-list">
        <li>Industrialisation created paid work, but wages often came with long hours, strict discipline and dangerous conditions.</li>
        <li>Working-class families had to make trade-offs between health, income, housing, education and survival.</li>
        <li>Reform, unions, sanitation and education helped improve life, but change was uneven and many families remained vulnerable.</li>
      </ul>

      <p class="reflection">
        Which mattered more for your household: health, income, or luck? Explain your answer.
      </p>

      <div class="button-row">
        <button id="copyResults" class="primary-button" type="button">Copy Results</button>
        <button class="secondary-button" type="button" onclick="restartGame()">Restart Game</button>
      </div>
      <p id="copyStatus" aria-live="polite"></p>
    </section>
  `;

  document.querySelector("#copyResults").addEventListener("click", copyResults);
}

function copyResults() {
  const total = state.health + state.income;
  const outcome = getOutcome(total, state.immediateFail);
  const resultsText = [
    "Would You Survive the Industrial Revolution?",
    `Household: ${state.household.name}`,
    `Outcome: ${outcome.title}`,
    `Final Health: ${state.health}`,
    `Final Income: ${state.income}`,
    `Total Score: ${total}`,
    state.immediateFail ? `Immediate Failure Reason: ${state.failReason}` : "",
    "",
    "Reflection: Which mattered more for your household: health, income, or luck? Explain your answer."
  ].filter(Boolean).join("\n");

  navigator.clipboard
    .writeText(resultsText)
    .then(() => {
      document.querySelector("#copyStatus").textContent = "Results copied.";
    })
    .catch(() => {
      document.querySelector("#copyStatus").textContent =
        "Copy was blocked by the browser. Select the results on screen and copy them manually.";
    });
}

function restartGame() {
  state.household = null;
  state.health = 0;
  state.income = 0;
  state.roundIndex = 0;
  state.selectedChoice = null;
  state.immediateFail = false;
  state.failReason = "";
  renderIntro();
}

renderIntro();
