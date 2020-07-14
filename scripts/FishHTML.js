//renders html for each fish card

export const fishHTML = (fishObj) => {
    return `
        <div class="fish__image"><img class="fish__img" src= ${fishObj.image}></div>
        <div class="fish__name">${fishObj.name}</div>
        <div class="fish__species">${fishObj.species}</div>
        <div class="fish__length">${fishObj.length}</div>
        <div class="fish__location">${fishObj.location}</div>
        <div class="fish__diet">${fishObj.diet}</div>
    `
}