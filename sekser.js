randDM = () => {let randomDM = Math.floor(Math.random() * 100); return randomDM};
sleep = (ms) => {return new Promise(resolve => setTimeout(resolve, ms));}

function randColor() {
    let colorList = ["blue","yellow","orange","purple","green","white","pink"];
    let randomColor = colorList[Math.floor(Math.random() * colorList.length)];
    return randomColor;
}

function randUsername(length) {
    const botname = "strBot_";
    let randomWords = "abcdefghijklmnoprstuvz1234567890+!/*|¨~][@{}";
    let result = '';

    for(let j = 0; j <= length; j++) {
        result += randomWords.charAt(Math.floor(Math.random() * randomWords.length));
    }

    return `${botname}${result}`;
}

async function seksDC() {
    let option = 1;
    if(option != 0) {
        try {
            for(let i = 0; i <= 100; i++) {
                let dm = document.querySelectorAll(".overflow-1wOqNV")[i]
                dm.innerHTML =`<b style='color: ${randColor()};'>${randUsername(5)}</b>`;
                await sleep(100);
            }
        } catch {
            console.log("err");
            seksDC();
        }
    } else {
        try {
            for(let i = 0; i <= 100; i++) {
                let dm = document.querySelectorAll(".overflow-1wOqNV")[randDM];
                dm.innerHTML =`<b style='${randColor()}'>${randUsername(5)}</b>`;
                await sleep(100);
            }
        } catch {
            console.log("err");
            seksDC();
        }
    }
}

seksDC();
