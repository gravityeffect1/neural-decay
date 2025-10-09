document.addEventListener('DOMContentLoaded', function() {
  const papers = [
    {
      title: "Design of highly functional genome editors by modeling the universe of CRISPR-Cas sequences",
      authors: "Jeffrey A. Ruffolo, Stephen Nayfach, Joseph Gallagher, et al.",
      abstract: "Using large language models trained on biological diversity at scale, we demonstrate the first successful precision editing of the human genome with a programmable gene editor designed with AI.",
      url: "https://www.biorxiv.org/content/10.1101/2024.04.22.590591v1",
      date: "April 2024"
    },
    {
      title: "Machine Learning Empowering Drug Discovery: Applications, Opportunities and Challenges",
      authors: "Xin Qi, Yuanchun Zhao, Zhuang Qi et al.",
      abstract: "This review examines how machine learning is revolutionizing drug discovery by accelerating the pace and reducing costs of new drug development.",
      url: "https://www.mdpi.com/1420-3049/29/4/903",
      date: "February 2024"
    }
  ];
  const container = document.getElementById('paper-of-the-day');
  function showRandomPaper() {
    const paper = papers[Math.floor(Math.random() * papers.length)];
    container.innerHTML = `
      <div>
        <h3 style="color:#00eeff;"><a href="${paper.url}" target="_blank">${paper.title}</a></h3>
        <div style="color:#b0b0b0;font-size:0.9em;">${paper.authors}</div>
        <div style="margin:10px 0;">${paper.abstract}</div>
        <div style="color:#19fbec;font-size:0.9em;">${paper.date}</div>
        <button onclick="showRandomPaper()" style="margin-top:10px;background:#111;color:#00eeff;border:1px solid #00eeff;border-radius:3px;cursor:pointer;">Another Paper</button>
      </div>
    `;
  }
  window.showRandomPaper = showRandomPaper;
  showRandomPaper();
});
