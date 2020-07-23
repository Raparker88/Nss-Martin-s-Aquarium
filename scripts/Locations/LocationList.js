import { useLocation } from "./LocationDataProvider.js"
import { locationHTML } from "./LocationHTML.js"

export const locationList = () => {
    //reference to the element
    const contentElement = document.querySelector(".location__cards")
    const locations = useLocation()

   

    //add html to content element
    contentElement.innerHTML += locations.map(location => locationHTML(location)).join("")
}