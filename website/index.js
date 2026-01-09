const counter = document.querySelector(".counter-number");
async function updateCounter() {
    let response = await fetch("https://q47pjkw2xuqxfo6xaizd6dhp2q0uedyb.lambda-url.us-east-1.on.aws/");
    let data = await response.json();
    counter.innerHTML = ` This page has ${data} views`;
}

updateCounter();