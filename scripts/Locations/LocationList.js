import { useLocation } from "./LocationDataProvider.js"
import { locationHTML } from "./LocationHTML.js"

export const locationList = () => {
    //reference to the element
    const contentElement = document.querySelector(".location__cards")
    const locations = useLocation()

    let locHTMLRepresentations = ""
    for (const locationObj of locations){
        locHTMLRepresentations += locationHTML(locationObj)
    }

    //add html to content element
    contentElement.innerHTML += `
            ${locHTMLRepresentations}
        `
}