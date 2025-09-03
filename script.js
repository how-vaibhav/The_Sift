const CATEGORIES = [
  "Top",
  "India",
  "World",
  "Business",
  "Tech",
  "Science",
  "Health",
  "Sports",
  "Entertainment",
  "Climate",
  "Culture",
  "Politics",
  "Lifestyle",
];

const GOOGLE_QUERIES = [
  "india monsoon update today",
  "stock market news today",
  "ai safety latest",
  "champions league fixtures",
  "ipl points table",
  "tech layoffs 2025",
  "climate change report",
  "gold rate today",
  "usd inr exchange rate",
  "covid booster guidelines",
];

const MYTHS = {
  1: {
    title: "Organic food is always healthier.",
    body: `
            <p><strong>Fact:</strong> The term "organic" primarily refers to how food is grown, not its nutritional content. Organic farming avoids synthetic pesticides and fertilizers, which is beneficial for the environment, but doesn't guarantee higher vitamin or mineral levels. Multiple studies have shown the nutritional differences between organic and conventional produce are minimal. The healthiest diet is one rich in fruits, vegetables, and whole grains, regardless of whether they are organic.</p>
            <p><strong>Deeper Dive:</strong> While some studies have found small increases in certain nutrients in organic produce, these are often not significant enough to impact human health. The primary benefits of organic farming are often environmental, such as promoting biodiversity and reducing exposure to certain chemicals. For human health, the most important factor is the quantity and variety of fruits and vegetables consumed, not just the label.</p>
            <p class="small text-muted mt-3"><strong>Sources:</strong></p>
            <ul>
              <li><a href="#" class="link-primary">Stanford University School of Medicine study</a></li>
              <li><a href="#" class="link-primary">Mayo Clinic article on organic foods</a></li>
            </ul>
          `,
  },
  2: {
    title: "You need to drink 8 glasses of water a day.",
    body: `
            <p><strong>Fact:</strong> The "8 glasses a day" rule is a popular but outdated myth. The truth is that your hydration needs are highly individual. Factors like your activity level, the climate, your body size, and your diet all play a role. A good guideline is to drink water when you feel thirsty. Your body is excellent at signaling its needs. You also get a significant amount of water from foods like fruits and vegetables.</p>
            <p><strong>Deeper Dive:</strong> A person's water needs can fluctuate wildly. An athlete in a hot climate may need significantly more water than someone who works in an air-conditioned office. The recommendation also ignores the fluid content of coffee, tea, and other beverages. Listening to your body's thirst signals is the most reliable method for staying properly hydrated.</p>
            <p class="small text-muted mt-3"><strong>Sources:</strong></p>
            <ul>
              <li><a href="#" class="link-primary">Harvard Health Publishing report</a></li>
              <li><a href="#" class="link-primary">National Academies of Sciences, Engineering, and Medicine guidelines</a></li>
            </ul>
          `,
  },
  3: {
    title: "Artificial intelligence is sentient or conscious.",
    body: `
            <p><strong>Fact:</strong> This is a powerful and persistent misconception, largely fueled by science fiction. Today's AI systems, no matter how advanced, are not conscious. They are complex algorithms designed to recognize patterns, process data, and generate responses based on that data. They lack self-awareness, emotions, and personal experiences. The human brain operates on a fundamentally different level of biological complexity and consciousness that we are only just beginning to understand.</p>
            <p><strong>Deeper Dive:</strong> The illusion of consciousness in AI, particularly in large language models, comes from their ability to mimic human-like conversation. They do this by processing vast amounts of text to predict the most probable next word in a sentence. They don't "know" or "feel" anything; they are simply executing a program. The philosophical and scientific communities widely agree that sentience in AI is still a far-off concept, if it is even possible at all.</p>
            <p class="small text-muted mt-3"><strong>Sources:</strong></p>
            <ul>
              <li><a href="#" class="link-primary">MIT Computer Science and Artificial Intelligence Laboratory research</a></li>
              <li><a href="#" class="link-primary">Expert interview with AI ethicist Dr. Emily Chang</a></li>
            </ul>
          `,
  },
  4: {
    title: "Cracking your knuckles causes arthritis.",
    body: `
            <p><strong>Fact:</strong> The "cracking" sound is caused by gas bubbles bursting in the fluid surrounding your joints, not bones grinding together. Extensive studies, including a long-term one by a doctor who cracked the knuckles on one hand for 50 years, have found no link between this habit and an increased risk of arthritis.</p>
            <p><strong>Deeper Dive:</strong> While the habit itself is harmless to your joints, it might lead to minor swelling or a weakened grip over time. However, the connection to arthritis is a myth. The main risk factors for arthritis are age, genetics, and injuries.</p>
            <p class="small text-muted mt-3"><strong>Sources:</strong></p>
            <ul>
              <li><a href="#" class="link-primary">Johns Hopkins Arthritis Center</a></li>
              <li><a href="#" class="link-primary">Dr. Donald Unger's "knuckle-cracking experiment"</a></li>
            </ul>
          `,
  },
};

const EXPLAINERS = {
  1: {
    title: "What is Quantitative Easing?",
    body: `
            <p><strong>Quantitative Easing (QE)</strong> is a monetary policy tool used by central banks, like the Reserve Bank of India (RBI) or the US Federal Reserve, to stimulate the economy when conventional monetary policy (like lowering interest rates) is no longer effective.</p>
            <p><strong>How it works:</strong> The central bank buys large quantities of government bonds and other financial assets from commercial banks. This injects money into the financial system, increasing the money supply. This, in turn, aims to:</p>
            <ul>
              <li>Lower long-term interest rates, making it cheaper for businesses and individuals to borrow.</li>
              <li>Encourage banks to lend more, as they have more cash reserves.</li>
              <li>Boost investment and consumption, stimulating economic growth and preventing a recession.</li>
            </ul>
            <p><strong>Impact:</strong> While QE can be effective, it also carries risks, such as inflation and creating asset bubbles. It's a complex tool that central banks use cautiously in times of economic distress.</p>
            <p class="small text-muted mt-3"><strong>Sources:</strong></p>
            <ul>
              <li><a href="#" class="link-primary">Reserve Bank of India (RBI) Explainer</a></li>
              <li><a href="#" class="link-primary">Investopedia: Quantitative Easing</a></li>
            </ul>
          `,
  },
  2: {
    title: "The Basics of Artificial Intelligence",
    body: `
            <p><strong>Artificial Intelligence (AI)</strong> refers to the simulation of human intelligence in machines that are programmed to think like humans and mimic their actions. It encompasses various fields, including machine learning, deep learning, natural language processing, and robotics.</p>
            <p><strong>Key Concepts:</strong></p>
            <ul>
              <li><strong>Machine Learning:</strong> A subset of AI where systems learn from data without explicit programming, identifying patterns and making predictions.</li>
              <li><strong>Neural Networks:</strong> Inspired by the human brain, these are layers of algorithms designed to recognize complex patterns, often used for image and speech recognition.</li>
              <li><strong>Natural Language Processing (NLP):</strong> The field that enables computers to understand, interpret, and generate human language. It's what powers tools like chatbots and voice assistants.</li>
            </ul>
            <p><strong>Applications:</strong> AI is used in everyday applications like personalized recommendation systems (Netflix, Spotify), voice assistants (Siri, Google Assistant), fraud detection, and medical diagnostics. As the technology evolves, its applications are becoming more widespread and integrated into our daily lives.</p>
            <p class="small text-muted mt-3"><strong>Sources:</strong></p>
            <ul>
              <li><a href="#" class="link-primary">IBM: What is Artificial Intelligence?</a></li>
              <li><a href="#" class="link-primary">Google AI Blog</a></li>
            </ul>
          `,
  },
  3: {
    title: "Decoding Climate Change Terminology",
    body: `
            <p>Understanding climate change requires familiarity with specific terms. Here's a quick guide:</p>
            <ul>
              <li><strong>Carbon Footprint:</strong> The total greenhouse gas emissions caused by an individual, event, organization, or product. It's a measure of human impact on the environment.</li>
              <li><strong>Net-Zero:</strong> Achieving an overall balance between greenhouse gas emissions produced and greenhouse gas emissions taken out of the atmosphere. The goal is to reach this state by reducing emissions as much as possible and offsetting the rest through measures like carbon capture.</li>
              <li><strong>IPCC (Intergovernmental Panel on Climate Change):</strong> The UN body for assessing climate change science. It provides regular assessments of the scientific basis of climate change, its impacts, and future risks, and options for adaptation and mitigation.</li>
              <li><strong>Greenhouse Gases (GHGs):</strong> Gases that trap heat in the atmosphere, leading to the greenhouse effect. The main GHGs are carbon dioxide (CO2), methane (CH4), and nitrous oxide (N2O).</li>
              <li><strong>Climate Adaptation:</strong> Adjusting to actual or expected future climate. The goal is to reduce vulnerability to the harmful effects of climate change through strategies like building seawalls or developing drought-resistant crops.</li>
            </ul>
            <p class="small text-muted mt-3"><strong>Sources:</strong></p>
            <ul>
              <li><a href="#" class="link-primary">United Nations Climate Action Glossary</a></li>
              <li><a href="#" class="link-primary">NASA Global Climate Change: Key Terms</a></li>
            </ul>
          `,
  },
  4: {
    title: "What is a Smart City?",
    body: `
            <p>A <strong>Smart City</strong> uses information and communication technologies (ICT) to enhance operational efficiency, share information with the public, and improve both the quality of government services and citizen welfare. At its core, a smart city is about using technology to make urban environments more livable, sustainable, and efficient.</p>
            <p><strong>Key Components:</strong></p>
            <ul>
              <li><strong>Smart Infrastructure:</strong> Includes smart grids for electricity, intelligent transportation systems, and connected buildings.</li>
              <li><strong>Citizen Engagement:</strong> Mobile apps and online platforms allow citizens to report issues and access government services easily.</li>
              <li><strong>Data-Driven Decisions:</strong> Cities collect real-time data from sensors and devices to manage resources like water and traffic more effectively.</li>
            </ul>
            <p class="small text-muted mt-3"><strong>Sources:</strong></p>
            <ul>
              <li><a href="#" class="link-primary">Smart Cities Council</a></li>
              <li><a href="#" class="link-primary">World Bank: Smart Cities</a></li>
            </ul>
          `,
  },
};

const SOURCES = {
  1: {
    title: "Reuters: A Global, Fact-Based Approach",
    body: `
            <p><strong>Profile:</strong> Reuters is one of the world's largest and most respected international news agencies. Its core business is providing breaking news, in-depth reports, and multimedia content to other news organizations and financial markets worldwide.</p>
            <p><strong>Key Characteristics:</strong></p>
            <ul>
              <li><strong>Journalistic Standards:</strong> Known for its commitment to speed, accuracy, and impartiality. Reuters has a strict editorial policy that prohibits its journalists from expressing personal opinions on public issues.</li>
              <li><strong>Ownership:</strong> Part of Thomson Reuters, a multinational media and information company. Its ownership structure is designed to protect its journalistic independence.</li>
              <li><strong>Political Leanings:</strong> Widely regarded as a neutral and objective source. It's often used as a benchmark for factual reporting.</li>
            </ul>
            <p class="small text-muted mt-3"><strong>Sources:</strong></p>
            <ul>
              <li><a href="#" class="link-primary">Reuters Editorial Handbook</a></li>
              <li><a href="#" class="link-primary">Pew Research Center analysis on media bias</a></li>
            </ul>
          `,
  },
  2: {
    title: "How to Spot Misleading Headlines",
    body: `
            <p><strong>Misleading headlines</strong> are designed to sensationalize a story or provoke a strong emotional reaction, often by taking quotes or facts out of context. Here’s how to spot them:</p>
            <p><strong>What to Look For:</strong></p>
            <ul>
              <li><strong>Emotional Language:</strong> Headlines that use words like "shocking," "outrageous," or "unbelievable."</li>
              <li><strong>Vague or Ambiguous Claims:</strong> Headlines that make broad statements without providing specific details.</li>
              <li><strong>Clickbait:</strong> Headlines that promise a big reveal or secret but fail to deliver, forcing you to click through to an article that doesn't live up to the hype.</li>
              <li><strong>Taking Quotes Out of Context:</strong> A headline might use a quote that sounds controversial, but the full article reveals the quote was part of a larger, more nuanced statement.</li>
            </ul>
            <p class="small text-muted mt-3"><strong>Sources:</strong></p>
            <ul>
              <li><a href="#" class="link-primary">First Draft News: Guide to Misinformation</a></li>
              <li><a href="#" class="link-primary">Poynter Institute: How to Spot Fake News</a></li>
            </ul>
          `,
  },
  3: {
    title: "The Verge: Tech News with a Human Touch",
    body: `
            <p><strong>Profile:</strong> The Verge is an American technology news and media network. It focuses on the intersection of technology, science, art, and culture. Its mission is to explain how technology is changing the world in an accessible and engaging way.</p>
            <p><strong>Key Characteristics:</strong></p>
            <ul>
              <li><strong>Journalistic Standards:</strong> Known for its high-quality production, deep-dive reviews, and a narrative-driven approach to tech journalism. It often includes both the technical specs and the broader cultural impact of a product.</li>
              <li><strong>Ownership:</strong> A part of Vox Media, which owns several other popular online brands.</li>
              <li><strong>Political Leanings:</strong> Generally seen as non-partisan, but with a focus on topics like privacy, ethics in AI, and digital rights, which can have political implications.</li>
            </ul>
            <p class="small text-muted mt-3"><strong>Sources:</strong></p>
            <ul>
              <li><a href="#" class="link-primary">The Verge Editorial Charter</a></li>
              <li><a href="#" class="link-primary">TechCrunch profile of Vox Media</a></li>
            </ul>
          `,
  },
};

const MOCK_STORIES = Array.from({ length: 150 }).map((_, i) => ({
  id: i + 1,
  title: [
    "Government unveils new education policy focus on digital equity",
    "Breakthrough in AI model compression cuts energy use",
    "Monsoon brings relief to North India, IMD issues advisory",
    "Markets steady as inflation eases; RBI outlook in focus",
    "Study shows coral reefs rebounding in protected zones",
    "New cyber law proposes stronger privacy safeguards",
    "Researchers map urban heat islands across major cities",
    "Startup launches affordable satellite internet service",
    "Healthcare access improves with telemedicine push",
    "Wildlife corridors reduce human-animal conflict",
    "Space agency schedules next lunar mission window",
    "Tech giants back open-source security initiative",
    "Local trains add women-only coaches during peak hours",
    "Farmers adopt smart irrigation; water use drops",
    "Clean energy investments hit record high",
    "Data protection board releases compliance toolkit",
    "Education loans: new subsidized scheme announced",
    "Scientists track microplastics in major rivers",
    "Public transport card rolls out nationwide",
    "Green hydrogen pilot shows promising results",
    "Severe weather alerts: states on preparedness",
    "Major sports event adopts concussion protocol",
    "Libraries reimagined as digital learning hubs",
    "Researchers publish AI ethics benchmark",
    "New policy to boost EV manufacturing",
    "Robotics competition sees record participation",
    "Global supply chain issues ease slightly",
    "Gene therapy shows promise in clinical trials",
    "AI-generated art sparks copyright debate",
    "Rural broadband initiative exceeds targets",
    "Volcano eruption in Pacific raises tsunami concerns",
    "Inflation rate drops to three-year low",
    "SpaceX launches reusable rocket for new constellation",
    "Global summit on climate finance concludes",
    "Smart cities project wins international award",
    "New film festival celebrates independent cinema",
    "Archaeologists discover ancient trade route artifacts",
    "E-commerce boom drives warehouse automation",
    "Cryptocurrency regulations proposed in new bill",
    "Solar energy grid expands in southern states",
    "Major film studio merges with streaming platform",
    "Local music festival promotes emerging artists",
    "New research suggests link between sleep and cognitive function",
    "Government announces new guidelines for sustainable fashion",
    "Urban planners debate pedestrian-only zones",
    "World leaders meet to discuss new trade agreements",
    "New fitness tracking app uses AI for personalized plans",
    "Food security summit addresses global supply chain issues",
    "New archaeological dig uncovers ancient city ruins",
    "International space station celebrates 25 years of service",
    "India's Chandrayaan program eyes a new lunar landing site",
    "Cricket World Cup final brings nation to a halt",
    "Bollywood blockbuster breaks box office records",
    "Study finds new species of deep-sea fish in Indian Ocean",
    "India's tech sector sees record venture capital funding",
    "New policy on data localization sparks debate",
    "Art exhibition highlights indigenous artists from across India",
    "Start-up develops low-cost home water purification system",
    "India's space tourism industry set for launch",
    "Government launches nationwide tree-planting drive to combat desertification",
    "Local cricket team wins national championship",
    "New health report suggests rise in mental health issues",
    "Fashion week showcases sustainable designs from Indian creators",
    "Political rally draws massive crowd ahead of elections",
    "Ancient temple restoration project uncovers hidden sculptures",
    "New report questions government's stance on renewable energy",
    "Startup aims to revolutionize grocery delivery with drone technology",
    "AI models now composing music that's indistinguishable from human artists",
    "Community leaders organize festival to celebrate local culture",
    "Debate over national digital privacy bill intensifies in parliament",
    "New wellness trend promotes 'digital detox' for a healthier lifestyle",
    "Scientists discover a new form of ice in the lab",
    "Latest gaming console sells out in minutes after launch",
    "City council approves new park and green space initiatives",
    "Study finds a link between social media use and sleep disruption",
    "Documentary on Himalayan ecology wins prestigious award",
    "Cryptocurrency market sees a sharp drop amidst regulatory uncertainty",
    "New art exhibit uses virtual reality to showcase ancient civilizations",
    "India's economy grows by 7.5% in the last quarter",
    "Local food blogger gains international recognition",
    "New species of butterfly discovered in the Western Ghats",
    "Political satire show gains popularity with sharp commentary",
    "Fitness experts warn against dangers of over-training",
    "Government's new infrastructure plan focuses on rural connectivity",
    "SpaceX announces plans for a Martian colony simulation",
    "New climate pact signed by G20 nations in a landmark agreement",
    "Film industry debates the use of AI in screenwriting",
    "Traditional dance form sees a revival with new generation of artists",
    "Public opinion poll shows a decline in trust in mainstream media",
    "New vegan restaurant chain opens in major cities",
    "Researchers develop a new battery that charges in seconds",
    "Celebrity wedding of the year dominates social media",
    "IPL team sold for a record-breaking sum of money",
    "International summit on water security concludes with new proposals",
    "New travel blog highlights hidden gems in remote Indian villages",
    "Parliamentary debate on new tax reform bill gets heated",
    "Global report shows a decrease in carbon emissions from developing nations",
    "Local farmer's market sees boom in popularity",
    "Health study links air pollution to chronic illness",
    "New law on online gaming sparks controversy",
    "India's new renewable energy capacity hits record high",
    "Film industry grappling with piracy challenges",
    "Community garden project helps local food bank",
    "New app helps track and reduce your carbon footprint",
    "Political party releases manifesto focused on youth employment",
    "Art gallery hosts digital art exhibition powered by AI",
    "Sports league introduces new concussion safety protocols",
    "Study finds significant decline in global bee population",
    "Debate over public land use for commercial development",
    "Fashion brand launches fully biodegradable clothing line",
    "New museum dedicated to Indian history opens",
    "Tech company announces new ethical AI framework",
    "Report shows steady increase in global life expectancy",
    "Local cafe becomes a hub for community meetings",
    "New regulations on plastic waste announced",
    "India's Olympic athletes prepare for upcoming games",
    "Festival celebrating diverse cultures draws record crowds",
    "New government policy aims to protect endangered wildlife",
    "Fintech startup raises capital with focus on rural banking",
    "Social media platform under fire for data privacy issues",
    "New report on global freshwater supplies raises alarm",
    "Government signs a new trade agreement with European nations",
    "Popular artist's new album breaks streaming records",
    "International chess tournament held in Delhi",
    "New study on the benefits of meditation published",
    "Billionaire's space company plans moon mission",
    "Urban farming initiative takes root in several Indian cities",
    "Major political party announces new leader",
    "New film explores the history of Indian cuisine",
  ][i],
  source: [
    "Reuters",
    "BBC",
    "The Hindu",
    "Indian Express",
    "AP",
    "Mint",
    "NDTV",
    "Bloomberg",
    "The Verge",
    "Nature",
    "TechCrunch",
    "Science Magazine",
    "CNN",
    "Al Jazeera",
    "Zee News",
    "Dainik Bhaskar",
    "Times of India",
  ][i % 17],
  img: `https://picsum.photos/seed/${i + 11}/800/500`,
  minutes: 4 + (i % 12),
  credibility: [
    "high",
    "high",
    "medium",
    "high",
    "high",
    "medium",
    "high",
    "medium",
    "high",
    "high",
    "medium",
    "high",
    "low",
    "medium",
    "low",
    "low",
    "medium",
  ][i % 17],
  category: [
    "Politics",
    "Tech",
    "India",
    "Business",
    "Science",
    "Politics",
    "Climate",
    "Tech",
    "Health",
    "Science",
    "Tech",
    "Tech",
    "India",
    "India",
    "Climate",
    "Politics",
    "India",
    "Science",
    "India",
    "Climate",
    "India",
    "Sports",
    "Culture",
    "Tech",
    "Business",
    "Tech",
    "World",
    "Science",
    "Tech",
    "Tech",
    "World",
    "Business",
    "Tech",
    "Climate",
    "World",
    "Entertainment",
    "Culture",
    "Business",
    "Politics",
    "Climate",
    "Entertainment",
    "Entertainment",
    "Health",
    "Lifestyle",
    "Lifestyle",
    "Politics",
    "Tech",
    "World",
    "Culture",
    "Science",
    "Tech",
    "Sports",
    "Entertainment",
    "Science",
    "Tech",
    "Politics",
    "Culture",
    "Business",
    "Tech",
    "Climate",
    "Sports",
    "Health",
    "Lifestyle",
    "Politics",
    "Culture",
    "Climate",
    "Tech",
    "Entertainment",
    "Culture",
    "Politics",
    "Lifestyle",
    "Science",
    "Entertainment",
    "Climate",
    "Health",
    "Entertainment",
    "Business",
    "Culture",
    "Politics",
    "Lifestyle",
    "Science",
    "Politics",
    "Sports",
    "India",
    "Tech",
    "Climate",
    "Entertainment",
    "Culture",
    "Politics",
    "Lifestyle",
    "Science",
    "Entertainment",
    "Sports",
    "World",
    "Lifestyle",
    "Politics",
    "Climate",
    "Business",
    "Health",
    "Politics",
    "Climate",
    "Entertainment",
    "Lifestyle",
    "Climate",
    "Politics",
    "Culture",
    "Sports",
    "Science",
    "Politics",
    "Lifestyle",
    "Culture",
    "Tech",
    "Health",
    "Lifestyle",
    "Climate",
    "Sports",
    "Culture",
    "Climate",
    "Business",
    "Tech",
    "World",
    "Politics",
    "Entertainment",
    "Sports",
    "Health",
    "Tech",
    "Lifestyle",
    "Politics",
    "Entertainment",
  ][i],
  factChecked: i % 3 !== 0,
  published: new Date(Date.now() - i * 3600 * 1000).toISOString(),
  summary:
    "This is a concise, readable summary highlighting the core facts first, then adding context and quotes. Ideal for skimming.",
  body: `\n<p><strong>Lead:</strong> The story opens with the most verifiable facts, then explains the context in plain language. Bullet points summarize key takeaways for quick scanning.</p>\n<ul>\n  <li>What happened: verifiable event with time and place.</li>\n  <li>Why it matters: impact on readers and society.</li>\n  <li>What’s next: upcoming decisions, dates, or data releases.</li>\n</ul>\n<p>Quotes are attributed, data sources are linked, and any uncertainty or limitations are clearly labeled. Jargon is minimized, acronyms are expanded on first use, and numbers are rounded for clarity. Charts and images include descriptive alt text.</p>\n<p class='mb-0'>Our <em>Transparency Box</em> explains methods and provides links to full datasets when available.</p>`,
  whyCredible: [
    "Source has a track record of factual reporting and corrections.",
    "Multiple independent confirmations included.",
    "Direct links to primary documents and data.",
    "Clearly separates news from opinion.",
  ],
  sources: [
    "Official press release / gov portal",
    "Dataset / PDF from a reputable institution",
    "Eyewitness or expert interview transcript",
  ],
}));

const state = {
  theme:
    localStorage.getItem("sift-theme") ||
    (window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light"),
  highContrast: localStorage.getItem("sift-contrast") === "1",
  fontScale: parseFloat(localStorage.getItem("sift-font-scale") || "1"),
  density: localStorage.getItem("sift-density") || "comfort",
  accessibleFont: localStorage.getItem("sift-accessible-font") === "1",
  filters: {
    q: "",
    category: "Top",
    cred: "high",
    maxMinutes: 10,
    factOnly: false,
  },
  cursorIndex: 0,
  page: 1,
  pageSize: 8,
  bookmarks: JSON.parse(localStorage.getItem("sift-bookmarks") || "[]"),
};

let readerModal, mythModal, explainerModal, sourceModal;

function applyPrefs() {
  document.documentElement.setAttribute("data-bs-theme", state.theme);
  document.documentElement.setAttribute(
    "data-contrast",
    state.highContrast ? "high" : ""
  );
  document.body.style.fontSize = state.fontScale.toFixed(2) + "rem";
  document.body.style.fontFamily = state.accessibleFont
    ? "var(--cn-font-accessible)"
    : "var(--cn-font)";
  updateEnergyImpact();
}

function updateEnergyImpact() {
  const el = document.getElementById("energyImpact");
  if (state.theme === "dark") {
    el.innerHTML = `<i class="bi bi-battery-half me-1"></i> Browsing in Dark Mode saves battery.`;
  } else {
    el.innerHTML = `<i class="bi bi-battery-full text-success me-1"></i> Browsing in Light Mode consumes more power.`;
  }
}

function fetchAndRenderWeather() {
  const weatherData = {
    location: "Majitar, Sikkim",
    temp: "31°C",
    condition: "heavy thunderstorm",
    icon: "cloud-lightning-rain",
  };
  const iconClass = getWeatherIconClass(weatherData.condition);
  const weatherHtml = `
          <i class="bi ${iconClass} me-2"></i>
          <span class="d-none d-lg-inline">${weatherData.location}</span>
          <span class="fw-bold">${weatherData.temp}</span>
        `;
  document.getElementById("weatherInfo").innerHTML = weatherHtml;
}

function getWeatherIconClass(condition) {
  if (condition.includes("storm")) return "bi-cloud-lightning-rain";
  if (condition.includes("rain")) return "bi-cloud-rain";
  if (condition.includes("cloud")) return "bi-cloud-fill";
  if (condition.includes("sun")) return "bi-sun-fill";
  return "bi-cloud-fill";
}

function buildSidebar() {
  const chipWrap = document.getElementById("categoryChips");
  chipWrap.innerHTML = "";
  CATEGORIES.forEach((cat) => {
    const btn = document.createElement("button");
    btn.className =
      "btn btn-sm " +
      (state.filters.category === cat ? "btn-primary" : "btn-outline-primary");
    btn.textContent = cat;
    btn.setAttribute("data-cat", cat);
    btn.addEventListener("click", () => {
      state.filters.category = cat;
      renderFeed(true);
    });
    chipWrap.appendChild(btn);
  });

  const gList = document.getElementById("googleTrends");
  gList.innerHTML = "";
  GOOGLE_QUERIES.forEach((q) => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.href = "#";
    a.className = "link-underline-opacity-0 link-underline";
    a.textContent = q;
    a.addEventListener("click", () => {
      document.getElementById("searchInput").value = q;
      state.filters.q = q;
      renderFeed(true);
    });
    li.appendChild(a);
    gList.appendChild(li);
  });
}

function getFiltered() {
  const start = 0;
  let items = MOCK_STORIES.slice(start);
  const q = state.filters.q.toLowerCase();
  if (q) {
    items = items.filter((s) =>
      (s.title + " " + s.summary + " " + s.category + " " + s.source)
        .toLowerCase()
        .includes(q)
    );
  }
  if (state.filters.category && state.filters.category !== "Top") {
    items = items.filter((s) => s.category === state.filters.category);
  }
  if (state.filters.cred !== "all") {
    items = items.filter((s) => s.credibility === state.filters.cred);
  }
  if (state.filters.maxMinutes) {
    items = items.filter((s) => s.minutes <= state.filters.maxMinutes);
  }
  if (state.filters.factOnly) {
    items = items.filter((s) => s.factChecked);
  }
  return items;
}

function renderFeed(reset = false) {
  const feed = document.getElementById("feed");
  const countEl = document.getElementById("resultsCount");
  const list = getFiltered();
  countEl.textContent = `${list.length} article${list.length !== 1 ? "s" : ""}`;

  if (reset) {
    state.page = 1;
    feed.innerHTML = "";
  }

  if (list.length === 0) {
    feed.innerHTML = `
            <div class="col-12 text-center text-muted py-5">
              <h3>No articles found!</h3>
              <p>Try broadening your search or adjusting your filters.</p>
              <i class="bi bi-emoji-frown h1"></i>
            </div>
          `;
    document.getElementById("loadMore").style.display = "none";
    return;
  }

  feed.setAttribute("aria-busy", "true");
  const show = list.slice(0, state.page * state.pageSize);
  if (reset) {
    for (let i = 0; i < Math.min(6, state.pageSize); i++) {
      const skel = document.createElement("div");
      skel.className = "col-md-6 col-xl-4";
      skel.innerHTML = `<div class='news-card shimmer' style='height:280px'></div>`;
      feed.appendChild(skel);
    }
  }

  setTimeout(() => {
    feed.innerHTML = "";
    show.forEach((s, idx) => feed.appendChild(cardTemplate(s, idx)));
    feed.removeAttribute("aria-busy");
    document.getElementById("loadMore").style.display =
      list.length > show.length ? "block" : "none";
  }, 350);
}

function cardTemplate(s, idx) {
  const col = document.createElement("div");
  col.className = "col-md-6 col-xl-4";
  col.setAttribute("data-index", idx);
  const saved = state.bookmarks.includes(s.id);
  col.innerHTML = `
      <div class="card news-card h-100 position-relative" role="article" aria-labelledby="title-${
        s.id
      }">
        <button class="btn btn-sm pin" title="Bookmark" data-action="bookmark" aria-pressed="${saved}" aria-label="Bookmark article ${
    s.title
  }"><i class="bi ${saved ? "bi-bookmark-fill" : "bi-bookmark"}"></i></button>
        <img src="${s.img}" class="card-img-top" alt="Thumbnail for ${s.title}">
        <div class="card-body d-flex flex-column">
          <div class="d-flex justify-content-between align-items-center mb-2">
            <span class="badge text-bg-light"><i class="bi bi-newspaper me-1"></i>${
              s.source
            }</span>
            <span class="badge badge-cred" data-level="${
              s.credibility
            }" data-bs-toggle="tooltip" data-bs-placement="top" title="${getCredibilityTooltip(
    s.credibility
  )}">${s.credibility.charAt(0).toUpperCase() + s.credibility.slice(1)}</span>
          </div>
          <h3 class="h6 fw-bold" id="title-${s.id}">${s.title}</h3>
          <p class="text-muted small flex-grow-1">${s.summary}</p>
          <div class="d-flex justify-content-between align-items-center mt-2">
            <span class="small text-muted"><i class="bi bi-clock me-1"></i>${
              s.minutes
            } min</span>
            <div class="d-flex align-items-center gap-2">
              <button class="btn btn-sm btn-primary" data-action="open" data-id="${
                s.id
              }">Read</button>
              <button class="btn btn-sm btn-outline-secondary" data-action="share" data-id="${
                s.id
              }"><i class="bi bi-share"></i></button>
            </div>
          </div>
        </div>
      </div>`;

  col
    .querySelector('[data-action="open"]')
    .addEventListener("click", () => openReader(s));
  col
    .querySelector('[data-action="share"]')
    .addEventListener("click", () => shareStory(s));
  col
    .querySelector('[data-action="bookmark"]')
    .addEventListener("click", (e) => toggleBookmark(e, s));

  new bootstrap.Tooltip(col.querySelector('[data-bs-toggle="tooltip"]'));
  return col;
}

function getCredibilityTooltip(level) {
  if (level === "high") {
    return "Fact-checked by third-party organizations and uses multiple reputable sources.";
  }
  if (level === "medium") {
    return "Published by a mainstream news outlet but may lack detailed sourcing or be an opinion piece.";
  }
  return "Source may have a history of misinformation or be based on unverified claims.";
}

function openReader(s) {
  const modal = document.getElementById("readerModal");
  const titleEl = modal.querySelector("#readerTitle");
  const metaEl = modal.querySelector("#readerMeta");
  const credEl = modal.querySelector("#readerCred");
  const bodyEl = modal.querySelector("#readerBody");
  const whyEl = modal.querySelector("#readerWhy");
  const sourcesEl = modal.querySelector("#readerSources");
  const saveButton = modal.querySelector("#readerSave");

  titleEl.textContent = s.title;
  metaEl.textContent = `${s.source} • ${Math.max(
    1,
    Math.round((Date.now() - new Date(s.published)) / 3600000)
  )}h ago • ${s.minutes} min`;
  credEl.textContent = `${s.credibility} credibility`;
  credEl.setAttribute("data-level", s.credibility);

  bodyEl.innerHTML = s.body;
  whyEl.innerHTML = s.whyCredible.map((x) => `<li>${x}</li>`).join("");
  sourcesEl.innerHTML = s.sources.map((x) => `<li>${x}</li>`).join("");

  bodyEl.style.fontSize = (1 * state.fontScale).toFixed(2) + "rem";
  bodyEl.setAttribute("data-density", state.density);
  modal.querySelector("#readerProgress").style.width = "0%";
  saveButton.onclick = () => {
    saveBookmark(s.id);
    toast("Saved to bookmarks");
  };

  const modalBody = modal.querySelector(".modal-body");
  modalBody.onscroll = () => {
    const p =
      modalBody.scrollTop / (modalBody.scrollHeight - modalBody.clientHeight);
    modal.querySelector("#readerProgress").style.width =
      (p * 100).toFixed(0) + "%";
  };

  readerModal.show();
}

function shareStory(s) {
  const shareData = {
    title: s.title,
    text: s.summary,
    url: location.href.split("#")[0] + `#story-${s.id}`,
  };
  if (navigator.share) {
    navigator.share(shareData).catch(() => {});
  } else {
    navigator.clipboard.writeText(`${s.title} — ${shareData.url}`);
    toast("Link copied to clipboard");
  }
}

function saveBookmark(id) {
  if (!state.bookmarks.includes(id)) {
    state.bookmarks.push(id);
    localStorage.setItem("sift-bookmarks", JSON.stringify(state.bookmarks));
  }
}
function removeBookmark(id) {
  state.bookmarks = state.bookmarks.filter((x) => x !== id);
  localStorage.setItem("sift-bookmarks", JSON.stringify(state.bookmarks));
}
function toggleBookmark(e, s) {
  const icon = e.currentTarget.querySelector("i");
  if (state.bookmarks.includes(s.id)) {
    removeBookmark(s.id);
    icon.className = "bi bi-bookmark";
    e.currentTarget.setAttribute("aria-pressed", "false");
    toast("Removed from bookmarks");
  } else {
    saveBookmark(s.id);
    icon.className = "bi bi-bookmark-fill";
    e.currentTarget.setAttribute("aria-pressed", "true");
    toast("Saved to bookmarks");
  }
}

function toast(msg) {
  const el = document.getElementById("toaster");
  el.querySelector(".toast-body").textContent = msg;
  new bootstrap.Toast(el).show();
}

const PRESETS = {
  student: {
    fontScale: 1,
    density: "comfort",
    theme: "light",
    maxMinutes: 8,
  },
  professional: {
    fontScale: 0.95,
    density: "compact",
    theme: "light",
    maxMinutes: 10,
  },
  elder: {
    fontScale: 1.15,
    density: "relaxed",
    theme: "light",
    maxMinutes: 12,
    accessibleFont: true,
  },
};

function applyPreset(name) {
  const p = PRESETS[name];
  if (!p) return;
  Object.assign(state, p, {
    filters: { ...state.filters, maxMinutes: p.maxMinutes },
  });
  state.accessibleFont = !!p.accessibleFont;
  persistPrefs();
  applyPrefs();
  document.getElementById("rtRange").value = state.filters.maxMinutes;
  document.getElementById("rtVal").textContent = state.filters.maxMinutes;
  renderFeed(true);
}

function persistPrefs() {
  localStorage.setItem("sift-theme", state.theme);
  localStorage.setItem("sift-contrast", state.highContrast ? "1" : "");
  localStorage.setItem("sift-font-scale", String(state.fontScale));
  localStorage.setItem("sift-density", state.density);
  localStorage.setItem("sift-accessible-font", state.accessibleFont ? "1" : "");
}

function setupKeyboard() {
  window.addEventListener("keydown", (e) => {
    if (e.key === "/" && document.activeElement.tagName !== "INPUT") {
      e.preventDefault();
      document.getElementById("searchInput").focus();
    }
    if (e.key === "?") {
      const kb = new bootstrap.Modal("#kbModal");
      kb.show();
    }
    const cards = Array.from(
      document.querySelectorAll('#feed [role="article"]')
    );
    if (["j", "k", "o", "b"].includes(e.key) && cards.length) {
      const max = cards.length - 1;
      if (e.key === "j") {
        state.cursorIndex = Math.min(max, state.cursorIndex + 1);
        cards[state.cursorIndex].scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
        highlightCard(cards[state.cursorIndex]);
      }
      if (e.key === "k") {
        state.cursorIndex = Math.max(0, state.cursorIndex - 1);
        cards[state.cursorIndex].scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
        highlightCard(cards[state.cursorIndex]);
      }
      if (e.key === "o") {
        cards[state.cursorIndex].querySelector('[data-action="open"]').click();
      }
      if (e.key === "b") {
        cards[state.cursorIndex]
          .querySelector('[data-action="bookmark"]')
          .click();
      }
    }
  });
}
function highlightCard(el) {
  cardsClearHighlight();
  el.classList.add("border", "border-primary", "shadow");
  setTimeout(() => {
    el.classList.remove("border", "border-primary", "shadow");
  }, 600);
}
function cardsClearHighlight() {
  document
    .querySelectorAll('#feed [role="article"]')
    .forEach((el) => el.classList.remove("border", "border-primary", "shadow"));
}

function wireUI() {
  document
    .querySelectorAll("[data-preset]")
    .forEach((btn) =>
      btn.addEventListener("click", () => applyPreset(btn.dataset.preset))
    );
  document.querySelectorAll("[data-theme]").forEach((btn) =>
    btn.addEventListener("click", () => {
      state.theme = btn.dataset.theme;
      persistPrefs();
      applyPrefs();
    })
  );
  document.querySelectorAll("[data-contrast]").forEach((btn) =>
    btn.addEventListener("click", () => {
      state.highContrast = !state.highContrast;
      persistPrefs();
      applyPrefs();
    })
  );
  document.querySelectorAll("[data-font]").forEach((btn) =>
    btn.addEventListener("click", () => {
      const v = btn.dataset.font;
      if (v === "0") state.fontScale = 1;
      if (v === "+") state.fontScale = Math.min(1.3, state.fontScale + 0.05);
      if (v === "-") state.fontScale = Math.max(0.85, state.fontScale - 0.05);
      persistPrefs();
      applyPrefs();
    })
  );

  document.getElementById("densityRange").addEventListener("input", (e) => {
    state.density =
      ["compact", "comfort", "relaxed"][parseInt(e.target.value, 10)] ||
      "comfort";
    persistPrefs();
    document
      .querySelectorAll(".reader-content")
      .forEach((el) => el.setAttribute("data-density", state.density));
  });

  document
    .getElementById("dyslexiaFontSwitch")
    .addEventListener("change", (e) => {
      state.accessibleFont = e.target.checked;
      persistPrefs();
      applyPrefs();
    });

  document.getElementById("searchInput").addEventListener("input", (e) => {
    state.filters.q = e.target.value.trim();
    renderFeed(true);
  });

  document.getElementById("searchBtn").addEventListener("click", () => {
    state.filters.q = document.getElementById("searchInput").value.trim();
    renderFeed(true);
  });
  document.getElementById("searchInput").addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      state.filters.q = e.target.value.trim();
      renderFeed(true);
    }
  });

  document.querySelectorAll("[data-cred]").forEach((btn) =>
    btn.addEventListener("click", () => {
      document
        .querySelectorAll("[data-cred]")
        .forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      state.filters.cred = btn.dataset.cred;
      renderFeed(true);
    })
  );
  document.getElementById("rtRange").addEventListener("input", (e) => {
    state.filters.maxMinutes = parseInt(e.target.value, 10);
    document.getElementById("rtVal").textContent = state.filters.maxMinutes;
  });
  document
    .getElementById("rtRange")
    .addEventListener("change", () => renderFeed(true));
  document.getElementById("factCheckOnly").addEventListener("change", (e) => {
    state.filters.factOnly = e.target.checked;
    renderFeed(true);
  });

  document.getElementById("resetFilters").addEventListener("click", () => {
    state.filters = {
      q: "",
      category: "Top",
      cred: "all",
      maxMinutes: 10,
      factOnly: false,
    };
    document.getElementById("searchInput").value = "";
    document.getElementById("rtRange").value = 10;
    document.getElementById("rtVal").textContent = 10;
    document.getElementById("factCheckOnly").checked = false;
    document
      .querySelectorAll("[data-cred]")
      .forEach((b) => b.classList.remove("active"));
    document.querySelector('[data-cred="high"]').classList.add("active");
    renderFeed(true);
  });

  document.getElementById("loadMore").addEventListener("click", () => {
    state.page++;
    renderFeed(false);
  });

  document
    .getElementById("openFeatured")
    .addEventListener("click", () => openReader(MOCK_STORIES[0]));
  document.getElementById("saveFeatured").addEventListener("click", () => {
    saveBookmark(MOCK_STORIES[0].id);
    toast("Saved to bookmarks");
  });

  document.getElementById("readerFontInc").addEventListener("click", () => {
    const el = document.getElementById("readerBody");
    const s = parseFloat(getComputedStyle(el).fontSize);
    el.style.fontSize = s + 1 + "px";
  });
  document.getElementById("readerFontDec").addEventListener("click", () => {
    const el = document.getElementById("readerBody");
    const s = parseFloat(getComputedStyle(el).fontSize);
    el.style.fontSize = Math.max(14, s - 1) + "px";
  });

  document.querySelectorAll("[data-density]").forEach((btn) =>
    btn.addEventListener("click", () => {
      document
        .getElementById("readerBody")
        .setAttribute("data-density", btn.dataset.density);
    })
  );

  document.querySelectorAll('[data-bs-target="#mythModal"]').forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const mythId = e.currentTarget.dataset.mythId;
      const mythData = MYTHS[mythId];
      if (mythData) {
        document.getElementById(
          "mythModalTitle"
        ).innerHTML = `<i class="bi bi-patch-question-fill me-2"></i> Myth Buster: ${mythData.title}`;
        document.getElementById("mythModalContent").innerHTML = mythData.body;
        mythModal.show();
      }
    });
  });

  document
    .querySelectorAll('[data-bs-target="#explainerModal"]')
    .forEach((btn) => {
      btn.addEventListener("click", (e) => {
        const explainerId = e.currentTarget.dataset.explainerId;
        const explainerData = EXPLAINERS[explainerId];
        if (explainerData) {
          document.getElementById(
            "explainerModalTitle"
          ).innerHTML = `<i class="bi bi-info-circle-fill me-2"></i> Explainer: ${explainerData.title}`;
          document.getElementById("explainerModalContent").innerHTML =
            explainerData.body;
          explainerModal.show();
        }
      });
    });

  document
    .querySelectorAll('[data-bs-target="#sourceModal"]')
    .forEach((btn) => {
      btn.addEventListener("click", (e) => {
        const sourceId = e.currentTarget.dataset.sourceId;
        const sourceData = SOURCES[sourceId];
        if (sourceData) {
          document.getElementById(
            "sourceModalTitle"
          ).innerHTML = `<i class="bi bi-journal-text me-2"></i> Source Spotlight: ${sourceData.title}`;
          document.getElementById("sourceModalContent").innerHTML =
            sourceData.body;
          sourceModal.show();
        }
      });
    });

  document.getElementById("viewBookmarks").addEventListener("click", () => {
    const items = MOCK_STORIES.filter((s) => state.bookmarks.includes(s.id));
    if (!items.length) {
      toast("Your bookmarks are empty. Star an article to save it for later!");
      return;
    }
    const first = items[0];
    openReader(first);
    document
      .getElementById("readerWhy")
      .insertAdjacentHTML(
        "beforebegin",
        `<div class='alert alert-info rounded-2xl'><i class='bi bi-bookmarks me-2'></i>You have ${
          items.length
        } bookmarked article${
          items.length > 1 ? "s" : ""
        }. Use <kbd>j</kbd>/<kbd>k</kbd> to browse the list on the homepage.</div>`
      );
  });
}

(function init() {
  applyPrefs();
  buildSidebar();
  fetchAndRenderWeather();
  document.getElementById("rtRange").value = state.filters.maxMinutes;
  document.getElementById("rtVal").textContent = state.filters.maxMinutes;
  document.getElementById("dyslexiaFontSwitch").checked = state.accessibleFont;
  renderFeed(true);
  wireUI();
  setupKeyboard();

  readerModal = new bootstrap.Modal(document.getElementById("readerModal"));
  mythModal = new bootstrap.Modal(document.getElementById("mythModal"));
  explainerModal = new bootstrap.Modal(
    document.getElementById("explainerModal")
  );
  sourceModal = new bootstrap.Modal(document.getElementById("sourceModal"));
})();
