
import {fishHTML} from "./FishHTML.js"
import {mostHolyFish} from "./fishDataProvider.js"
import {soldierFish} from "./fishDataProvider.js"
import {nonHolyFish} from "./fishDataProvider.js"

const contentElement = document.querySelector(".fish__cards")

const addFishToDOM = (arrFish) => {
    
    let fishHTMLRepresentations = ""
    for (const fishObj of arrFish){
        fishHTMLRepresentations += fishHTML(fishObj)
    }
    
        //add html to content element
    contentElement.innerHTML += `
            ${fishHTMLRepresentations}
            `

}

export const fishList = () => {
    //reference to the element
    const holyFish = mostHolyFish()
    addFishToDOM(holyFish)

    const soldiers = soldierFish()
    addFishToDOM(soldiers)

    const plebs = nonHolyFish()
    addFishToDOM(plebs)
        
}