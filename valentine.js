const catsOne = document.createElement("div");
catsOne.style.backgroundImage = "url('https://www.shutterstock.com/image-photo/couple-happy-kittens-sleep-together-600nw-2237607353.jpg')";
catsOne.style.backgroundSize = "100%";
catsOne.style.height = "10vw";
catsOne.style.width = "10vw";
catsOne.style.opacity = "50%";

const catsTwo = document.createElement("div")
catsTwo.style.backgroundImage = "url('https://i.ibb.co/RPJTTX5/Screenshot-2024-02-01-022121.png')"
catsTwo.style.backgroundSize = "100%";
catsTwo.style.height = "10vw";
catsTwo.style.width = "10vw";
catsTwo.style.opacity = "50%";

window.scrollY = false;

mainContainer = document.getElementById("mainContainer");
for (let j = 0; j < 25; j++) {
    if (j % 2 == 0) {
        for (let i = 0; i < 4; i++) {
            mainContainer.appendChild(catsOne.cloneNode(true));
            mainContainer.appendChild(catsTwo.cloneNode(true));
        }
    }
    else {
        for (let i = 0; i < 4; i++) {
            mainContainer.appendChild(catsTwo.cloneNode(true));
            mainContainer.appendChild(catsOne.cloneNode(true));
        }
    }
}

let flag = 0;
const moveNo = () => {
    const noButton = document.getElementById("noButton");
    if (flag == 0) {
        document.body.appendChild(noButton);
        noButton.style.position = "absolute";
    }

    const newTop = Math.floor(Math.random() * (90 - 10) + 10) + "vh";
    const newLeft = Math.floor(Math.random() * (90 - 10) + 10) + "vw";

    let newStyle = document.createElement("style");
    newStyle.innerHTML = ".noNum" + flag + " { top: " + newTop + "; left: " + newLeft + "; }"
    document.getElementsByTagName('head')[0].appendChild(newStyle);
    noButton.className = 'myButton noNum' + flag;

    flag += 1;
}

const handleYes = () => {
    const pyro = document.getElementById("pyro");
    pyro.style.display = "block";
    document.getElementById("descHeading").innerHTML = "WOOOOOOOOOO TOOOOOOOOO!!!"
    setInterval(createHeart, 300);
}

function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    
    heart.style.position = "absolute"
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.top = "0px";
    heart.style.animationDuration = Math.random() * 2 + 3 + "s";
    
    heart.innerText = '<3';
    heart.style.fontSize = "10vh"
    
    document.body.appendChild(heart);
    
    setTimeout(() => {
                heart.remove();
                }, 10000);
  }
