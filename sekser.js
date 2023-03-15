randDM = () => {let randomDM = Math.floor(Math.random() * 100); return randomDM};
sleep = (ms) => {return new Promise(resolve => setTimeout(resolve, ms));}

function randStatus() {
    const list = ["nigger","seks","keks","limun","lidl","livo","desno","🍋"];
    return list[Math.floor(Math.random() * list.length)];
}

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

function randomAvatar() {
    let list = ['https://cdn.discordapp.com/attachments/967009280777666601/1085562013700345967/9k.png', 'https://cdn.discordapp.com/attachments/967009280777666601/1085562239282593832/9k.png', 'https://cdn.discordapp.com/attachments/967009280777666601/1085562347738898544/9k.png', 'https://cdn.discordapp.com/attachments/967009280777666601/1085562440814710804/images.png', 'https://cdn.discordapp.com/attachments/967009280777666601/1085562505524424704/images.png', 'https://cdn.discordapp.com/attachments/967009280777666601/1085562573501509712/images.png', 'https://cdn.discordapp.com/attachments/967009280777666601/1085562662953418842/images.png', 'https://cdn.discordapp.com/attachments/967009280777666601/1085562765088936097/images.png', 'https://cdn.discordapp.com/attachments/967009280777666601/1085562833388982282/images.png', 'https://cdn.discordapp.com/attachments/967009280777666601/1085562919825182850/images.png', 'https://cdn.discordapp.com/attachments/967009280777666601/1085563004558512199/images.png', 'https://cdn.discordapp.com/attachments/967009280777666601/1085563157289893918/images.png', 'https://cdn.discordapp.com/attachments/967009280777666601/1085563330246217889/images.png', 'https://cdn.discordapp.com/attachments/967009280777666601/1085563406800662558/images.png', 'https://cdn.discordapp.com/attachments/967009280777666601/1085563601957421066/images.png', 'https://cdn.discordapp.com/attachments/967009280777666601/1085563790944370718/9k.png', 'https://cdn.discordapp.com/attachments/967009280777666601/1085563868882948196/Z.png', 'https://cdn.discordapp.com/attachments/967009280777666601/1085563955050713218/images.png', 'https://cdn.discordapp.com/attachments/967009280777666601/1085564042862657688/images.png', 'https://cdn.discordapp.com/attachments/967009280777666601/1085564132998262854/images.png', 'https://cdn.discordapp.com/attachments/967009280777666601/1085564301827379261/Z.png', 'https://cdn.discordapp.com/attachments/967009280777666601/1085564419058171954/9k.png', 'https://cdn.discordapp.com/attachments/967009280777666601/1085564503200116796/images.png', 'https://cdn.discordapp.com/attachments/967009280777666601/1085564573261770822/images.png', 'https://cdn.discordapp.com/attachments/967009280777666601/1085564747086319687/Z.png', 'https://cdn.discordapp.com/attachments/967009280777666601/1085564823397478480/images.png', 'https://cdn.discordapp.com/attachments/967009280777666601/1085564875914366976/images.png', 'https://cdn.discordapp.com/attachments/967009280777666601/1085565094789918721/images.png', 'https://cdn.discordapp.com/attachments/967009280777666601/1085565152562257920/images.png', 'https://cdn.discordapp.com/attachments/967009280777666601/1085565202096992336/images.png']
    let randomLink = list[Math.floor(Math.random() * list.length)];
    return randomLink;
}

async function seksDC() {
    let option = 1;
    if(option != 0) {
        try {
            for(let i = 0; i <= 100; i++) {
                let dm = document.querySelectorAll(".overflow-1wOqNV")[i];
                let avatar = document.querySelectorAll(".avatar-31d8He")[i]; 
                let status = document.querySelectorAll(".subText-3Sk0zy")[i];

                status.style.color = randColor();

                dm.innerHTML =`<b style='color: ${randColor()};'>${randUsername(5)}</b>`;
                avatar.setAttribute("src",`${randomAvatar()}`);
                status.innerText = `${randStatus()}`;
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
                let avatar = document.querySelectorAll(".avatar-31d8He")[randDM]; 
                let status = document.querySelectorAll(".subText-3Sk0zy")[randDM];

                status.style.color = randColor();

                dm.innerHTML =`<b style='color: ${randColor()};'>${randUsername(5)}</b>`;
                avatar.setAttribute("src",`${randomAvatar()}`);
                status.innerText = `${randStatus()}`;
                await sleep(100);
            }
        } catch {
            console.log("err");
            seksDC();
        }
    }
}

seksDC();
