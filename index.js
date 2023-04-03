const counterDisplay = document.querySelector("h3");

let counter = 0;

const bubbleMarker = () => {
    const bubble = document.createElement("span");

    bubble.classList.add("bubble");

    document.body.appendChild(bubble);

    const size = Math.random() * 200 + 100 + "px";
    bubble.style.height = size;
    bubble.style.width = size;

    bubble.style.top = Math.random() * 100 + 50 + "%";
    bubble.style.left = Math.random() * 100 + "%";

    const plusMalus = Math.random() > 0.5 ? 1 : -1;

    bubble.addEventListener("click", () =>{
        counter++;
        counterDisplay.textContent = counter;
        bubble.remove();
    })

    bubble.style.setProperty('--left', Math.random() * 100 * plusMalus + "%");

    setTimeout(() => {
        bubble.remove();
    }, 8000);
}

setInterval(bubbleMarker, 1000);

