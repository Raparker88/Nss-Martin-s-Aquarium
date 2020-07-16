const fishCollection = [
    {name: "Nemo",
     species: "Clownfish",
     length: "5in",
     location: "Great Barrier Reef",
     diet: "Plantkton",
     image: "images/download.jpeg"
    },
    {name: "Dory",
     species: "Royal Blue Tang",
     length: "10in",
     location: "American Samoa",
     diet: "Algae",
     image: "images/blue-tang.jpg"
    }
]

export const useFish = () => {
    return fishCollection.slice()
}

let holyFish = []

export const mostHolyFish = () => {
    fishCollection.forEach(fish => {
        if(fish.length % 3 === 0){
            holyFish.push(fish)
        }
    })
    return holyFish
}

let allsoldierFish = []

export const soldierFish = () => {
    fishCollection.forEach(fish => {
        if(fish.length %5 === 0 && fish.length % 3 !== 0) {
            allsoldierFish.push(fish)
        }
    })
    return allsoldierFish
}

let regFish = []

export const nonHolyFish = () => {
    fishCollection.forEach(fish => {
        if(fish.length %5 !== 0 && fish.length % 3 !== 0) {
            regFish.push(fish)
        }
    })
    return regFish
}