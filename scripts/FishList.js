import {useFish} from "scripts/fishDataProvider.js"
import {fishHTML} from "scripts/FishHTML.js"

export const fishList = () => {
    //reference to the element
    const contentElement = document.querySelector(".fish__cards")
    const fishes = useFish()

    let fishHTMLRepresentations = ""
    for (const fishObj of fishes){
        fishHTMLRepresentations += fishHTML(fishObj)
    }

    //add html to content element
    contentElement.innerHTML += `
        <section class= "fish">
            ${fishHTMLRepresentations}
        </section>`
}