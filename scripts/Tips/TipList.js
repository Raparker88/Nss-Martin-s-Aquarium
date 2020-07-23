import {useTips} from "./tipDataProvider.js"
import {tipHTML} from "./TipHTML.js"

export const tipList = () => {
    //reference to the element
    const contentElement = document.querySelector(".tips")
    const tips = useTips()


    //add html to content element
    contentElement.innerHTML += tips.map(tip => tipHTML(tip)).join("")
}