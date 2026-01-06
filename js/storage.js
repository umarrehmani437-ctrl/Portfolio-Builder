// storage.js

function savePortfolio(data) {
    localStorage.setItem("portfolioData", JSON.stringify(data));
}

function loadPortfolio() {
    const saved = JSON.parse(localStorage.getItem("portfolioData"));
    return saved || null;
}
