const certificates = [
  { title: "Foundations of AI and Machine Learning", issuer: "Microsoft", date: "Aug 2026", id: "7OS9EVHCUOBH", image: "assets/cert-foundations-ai-ml.jpg", url: "https://coursera.org/verify/7OS9EVHCUOBH" },
  { title: "Foundations of Machine Learning", issuer: "Coursera", date: "Aug 2026", id: "ZGKLRTOVNEXS", image: "assets/cert-foundations-ml.jpg", url: "https://coursera.org/verify/ZGKLRTOVNEXS" },
  { title: "Machine Learning with Python", issuer: "IBM", date: "Aug 2026", id: "PI30QJTECX6MW", image: "assets/cert-ml-python.jpg", url: "https://coursera.org/verify/PI30QJTECX6MW" },
  { title: "Exploratory Data Analysis for Machine Learning", issuer: "IBM", date: "Aug 2026", id: "43KGSAIKU2WW", image: "assets/cert-eda-ml.jpg", url: "https://coursera.org/verify/43KGSAIKU2WW" },
  { title: "Python 101 for Data Science", issuer: "IBM", date: "Apr 2026", id: "7f3c28efb7084f49acf4a89db6ddff73", image: "assets/cert-python-101.jpg", url: "https://courses.cognitiveclass.ai/certificates/7f3c28efb7084f49acf4a89db6ddff73" },
  { title: "Introduction to Agent Skills", issuer: "Anthropic", date: "Aug 2026", id: "LinkedIn verified", image: "assets/cert-agent-skills.jpg", url: "https://www.linkedin.com/in/saad-ali-3007a1333/details/certifications/" },
  { title: "Introduction to Subagents", issuer: "Anthropic", date: "Aug 2026", id: "LinkedIn verified", image: "assets/cert-subagents.jpg", url: "https://www.linkedin.com/in/saad-ali-3007a1333/details/certifications/" },
  { title: "Claude Platform 101", issuer: "Anthropic", date: "Aug 2026", id: "LinkedIn verified", image: "assets/cert-claude-platform.jpg", url: "https://www.linkedin.com/in/saad-ali-3007a1333/details/certifications/" },
  { title: "Claude Code 101", issuer: "Anthropic", date: "Aug 2026", id: "LinkedIn verified", image: "assets/cert-claude-code-101.jpg", url: "https://www.linkedin.com/in/saad-ali-3007a1333/details/certifications/" },
  { title: "Claude Code in Action", issuer: "Anthropic", date: "Aug 2026", id: "LinkedIn verified", image: "assets/cert-claude-code-action.jpg", url: "https://www.linkedin.com/in/saad-ali-3007a1333/details/certifications/" },
  { title: "AI Fluency: Framework & Foundations", issuer: "Anthropic", date: "Aug 2026", id: "LinkedIn verified", image: "assets/cert-ai-fluency-framework.jpg", url: "https://www.linkedin.com/in/saad-ali-3007a1333/recent-activity/all/" },
  { title: "AI Fluency for Students", issuer: "Anthropic", date: "Aug 2026", id: "LinkedIn verified", image: "assets/cert-ai-fluency-students.jpg", url: "https://www.linkedin.com/in/saad-ali-3007a1333/recent-activity/all/" },
  { title: "Claude 101", issuer: "Anthropic", date: "Aug 2026", id: "LinkedIn verified", image: "assets/cert-claude-101.jpg", url: "https://www.linkedin.com/in/saad-ali-3007a1333/recent-activity/all/" }
];

const certificateGrid = document.querySelector("#certificate-grid");
certificates.forEach((certificate) => {
  const card = document.createElement("a");
  card.className = "certificate-card reveal";
  card.href = certificate.url;
  card.target = "_blank";
  card.rel = "noreferrer";
  card.innerHTML = `
    <div class="certificate-image"><img src="${certificate.image}" alt="${certificate.title} certificate" loading="lazy"></div>
    <div><small>${certificate.date}</small><h3>${certificate.title}</h3><p>${certificate.issuer}</p><code>${certificate.id}</code></div>
    <span class="verified" aria-label="Verified credential">✓</span>`;
  certificateGrid.appendChild(card);
});

const menuButton = document.querySelector(".menu-button");
const navigation = document.querySelector("#site-nav");
menuButton.addEventListener("click", () => {
  const open = navigation.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(open));
  menuButton.setAttribute("aria-label", open ? "Close navigation" : "Open navigation");
});
navigation.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => {
  navigation.classList.remove("open");
  menuButton.setAttribute("aria-expanded", "false");
}));

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
document.querySelector("#year").textContent = new Date().getFullYear();
