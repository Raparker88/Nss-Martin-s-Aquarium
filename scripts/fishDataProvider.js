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
