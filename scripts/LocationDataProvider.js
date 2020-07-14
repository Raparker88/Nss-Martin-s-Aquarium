const locationCollection = [
    {
        image: "images/reef.jpeg",
        name: "Great Barrier Reef",
        linkUrl: "https://en.wikipedia.org/wiki/Great_Barrier_Reef",
        linkText: "Wikipedia",
        description: "One of Australia’s most remarkable natural gifts, the Great Barrier Reef is blessed with the breathtaking beauty of the world’s largest coral reef. The reef contains an abundance of marine life and comprises of over 3000 individual reef systems and coral cays and literally hundreds of picturesque tropical islands with some of the worlds most beautiful sun-soaked, golden beaches."
    },
    {
        image: "images/samoa.jpg",
        name: "American Samoa",
        linkUrl: "https://en.wikipedia.org/wiki/Vatia,_American_Samoa",
        linkText: "Wikipedia",
        description: "There are five islands in American Samoa: Tutuila, Aunu’u, Ta’u, Ofu and Olosega. Most travelers to American Samoa will begin their journey on Tutuila: it’s home to the international airport and capital city as well as the majority of the population. But if you’ve come all the way here, don’t let your visit stop with Tutuila! It’s easy to get to Aunu’u as a day trip from Tutuila; getting to Ta’u, Ofu and Olosega (collectively called Manu’a) requires a bit more planning, but is completely doable and incredibly worthwhile."
    }
]

export const useLocation = () => {
    return locationCollection.slice()
}