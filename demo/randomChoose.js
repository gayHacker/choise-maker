import readline from "readline";
import Option from "../src/model/Option.js";
import OptionsPool from "../src/model/OptionsPool.js";
import RandomChooser from "../src/chooser/RandomChooser.js"

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const chooseOne = (options) => {
    let optionPoool = new OptionsPool();
    options.forEach(name => { optionPoool.addOption(new Option(name)) })
    let chooser = new RandomChooser(optionPoool)
    let chosenOption = chooser.randomOption();

    console.log("我已經為你選擇了【" + chosenOption.name + "】")

    rl.question("再選一個？【是/否】", (chooseAgain) => {
        if(chooseAgain === "是"){
            chooseOne(options)
        } else {
            askForEndGGame()
        }  
    })
}

const askForEndGGame = () => {
    rl.question("是否結束？【是/否】", (isExit) => {
        if (isExit === "是") {
            rl.close()
            console.log("再見")
            process.exit(0)
        } else {
            helpToChoose()
        }
    })
}

const helpToChoose = () => {
    let exit = false

    rl.question("請輸入多個選項，用逗號（，）隔開。按回車（Enter）鍵結束輸入。\n", (optionsStr) => {
        let options = optionsStr.split("，");
        if (options.length === 0) {
            console.log("沒有收到任何選項")
        } else {
            chooseOne(options)
        }
    })
}

helpToChoose()

