import chaii from "chai";
const {expect} = chaii;
import Option from "../src/model/Option.js"
import OptionsPool from "../src/model/OptionsPool.js"
import RandomChooser from "../src/chooser/RandomChooser.js";

console.log("chii => " + Object.keys(expect))

describe("test RandomChooser", () => {
    it("Choose a random option in an array of options", () => {
        let options = ["吃飯", "睡覺", "打遊戲", "看電視劇", "洗衣服", "洗澡", "擦桌子", "看小說", "打電話", "發信息", "看八卦", "看教學", "寫程序", "泡麵", "擦桌子"];
        
        let optionPoool = new OptionsPool();
        options.forEach(name => {optionPoool.addOption(new Option(name))})
        let chooser = new RandomChooser(optionPoool)
        let chosenOption = chooser.randomOption();

        expect(chosenOption.name).to.be.a("string")
        expect(options).to.contains(chosenOption.name)
    })
})