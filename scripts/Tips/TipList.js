import {useTips} from "./tipDataProvider.js"
import {tipHTML} from "./TipHTML.js"

export const tipList = () => {
    //reference to the element
    const contentElement = document.querySelector(".tips")
    const tips = useTips()

    let tipHTMLRepresentations = ""
    for (const tip of tips){
        tipHTMLRepresentations += tipHTML(tip)
    }

    //add html to content element
    contentElement.innerHTML += `
            ${tipHTMLRepresentations}
        `
}