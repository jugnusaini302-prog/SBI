const btn = document.getElementById("toggleBtn");
const hiddenLinks = [];

const columns = document.querySelectorAll(".name > .ss");
columns.forEach(column => {
    const links = column.querySelectorAll("a");
    const startIndex = Math.max(links.length - 4, 0);

    for (let i = startIndex; i < links.length; i++) {
        links[i].classList.add("hide");
        hiddenLinks.push(links[i]);
    }
});

btn.addEventListener("click", function () {
    hiddenLinks.forEach(link => link.classList.toggle("hide"));
    this.innerHTML = this.innerHTML === "Show More" ? "Show Less" : "Show More";
});


    
