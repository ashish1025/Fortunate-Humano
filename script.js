let flag = 0;
let cnt1 = 0;
let cnt0 = 0;

const startButtonHandler = () => {
    for (let i = 1; i <= 5; i++) {
        let id1 = "p" + "0" + i;
        const zeroImg = document.createElement("img");
        zeroImg.src = "_zero.png";
        const element1 = document.getElementById(id1);
        element1.innerHTML = zeroImg.outerHTML;
        let id2 = "p" + "1" + i;
        const element2 = document.getElementById(id2);
        element2.innerHTML = zeroImg.outerHTML;
    }
    document.getElementById("startButton").remove();
}



const clickHandler = (event) => {
    // generate a random diceNumber
    const diceNumber = Math.ceil(Math.random() * 5);

    //images for respective diceNumbers
    const imgArr = [];
    const zeroImg = document.createElement("img");
    zeroImg.src = "_zero.png";
    imgArr.push(zeroImg.outerHTML);
    const oneImg = document.createElement("img");
    oneImg.src = "_one.png";
    imgArr.push(oneImg.outerHTML);
    const twoImg = document.createElement("img");
    twoImg.src = "_two.png";
    imgArr.push(twoImg.outerHTML);
    const threeImg = document.createElement("img");
    threeImg.src = "_three.png";
    imgArr.push(threeImg.outerHTML);
    const fourImg = document.createElement("img");
    fourImg.src = "_four.png";
    imgArr.push(fourImg.outerHTML);
    const fiveImg = document.createElement("img");
    fiveImg.src = "_five.png";
    imgArr.push(fiveImg.outerHTML);

    //access the box
    const id = "p" + flag + diceNumber;
    const box = document.getElementById(id);
    //Sconsole.log(imgArr);
    //update the box
    for (let i = 0; i < imgArr.length; i++) {
        if (box.innerHTML === imgArr[i]) {
            console.log("working", i);
            if (i === imgArr.length - 1) {
                continue;
            }
            else {
                box.innerHTML = imgArr[i + 1];
                if (i === imgArr.length - 2) {
                    if (flag === 1) {
                        cnt1++;
                        if (cnt1 === 5) {
                            window.alert("Player1 wins!!");
                            window.location.reload(1);
                        }
                    }
                    else {
                        cnt0++;
                        if (cnt0 === 5) {
                            window.alert("Player0 wins!!");
                            window.location.reload(1);
                        }
                    }
                }
            }
            break;
        }
    }

    // choose the player
    const playerNameHolder = document.getElementById("playerNameHolder");
    playerNameHolder.innerHTML = (flag === 1 ? " Player2 got=> " + `${diceNumber}` + " player1 plays now" : " Player1 got=> " + `${diceNumber}` + " player2 plays now");

    // update the flag
    flag = 1 - flag;

    // update the players score
    const player1Score = document.getElementById("player1");
    player1Score.innerHTML = "player1: " + cnt0;
    const player2Score = document.getElementById("player2");
    player2Score.innerHTML = "player2: " + cnt1;

}
