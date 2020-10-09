/*
 *  To get you started, here's some properties of Bart.
 *  You need to add more properties to complete his
 *  representation as an object. Then add all the other
 *  fish to the collection.
 */
const fishCollection = [
  {
    name: "Bubba",
    food: "Mollusks, worms, insect larvae, crustaceans, and some fish",
    species: "Ambystoma mexicanum",
    length: 9.1,
    location: "Xochimilco (near Mexico City)",
    image: "https://cdn.mos.cms.futurecdn.net/hKm2MuLdDLubD6rgeYLeDM.jpg"
  },
  {
    name: "Bubba's Twin",
    food: "Mollusks, worms, insect larvae, crustaceans, and lakeweed",
    species: "Ambystoma mexicanum",
    length: 9.1,
    location: "Xochimilco (near Mexico City)",
    image: "https://i.pinimg.com/originals/b2/c3/06/b2c30671fce996d680a68ad752b7bc98.jpg"
  },
  {
    name: "Darth Vader",
    food: "Plants, crustaceans and other small insects, flakes, pellets, live and frozen foods",
    species: "Epalzeorhynchos bicolor",
    length: 3,
    location: "Thailand",
    image: "https://fishfeeling.com/wp-content/uploads/2019/10/Red-Tailed-Black-Shark.jpg"
  },
  {
    name: "Kylo Ren",
    food: "Plants, crustaceans and other small insects, flakes, pellets, live and frozen foods",
    species: "Epalzeorhynchos bicolor",
    length: 21,
    location: "Thailand",
    image: "https://fishfeeling.com/wp-content/uploads/2019/10/Red-Tailed-Black-Shark.jpg"
  },
  {
    name: "Halley",
    food: "Mollusks, worms, insect larvae, crustaceans, and some fish",
    species: "Carassius auratus",
    length: 5,
    location: "United States",
    image: "https://aquariumtidings.com/wp-content/uploads/2014/06/Depositphotos_114861180_original-1024x683.jpg"
  },
  {
    name: "Halley's Twin",
    food: "Mollusks, worms, insect larvae, crustaceans, and some fish",
    species: "Carassius auratus",
    length: 75,
    location: "United States",
    image: "https://aquariumtidings.com/wp-content/uploads/2014/06/Depositphotos_114861180_original-1024x683.jpg"
  },
  {
    name: "Halley's Triplet",
    food: "Mollusks, worms, insect larvae, crustaceans, and some fish",
    species: "Carassius auratus",
    length: 250,
    location: "United States",
    image: "https://aquariumtidings.com/wp-content/uploads/2014/06/Depositphotos_114861180_original-1024x683.jpg"
  }
]

export const useFish = () => {
  //The slice method returns a new copy of the array
  return fishCollection.slice()
}

// export const addFish = (fishObject) => {
//   fishCollection.push(fishObject)
// }

export const mostHolyFish = () => {
  // 3, 6, 9, 12, etc... fish
  const holyFish = []

  for (const fish of fishCollection) {
    // console.log(fish)
    // console.log("What actually is the % doing? ", fish.name, fish.length % 3)
    if (fish.length % 3 === 0) {
      // console.log(fish)
      holyFish.push(fish)
    }
  }
  // console.log(holyFish)
  return holyFish
}

export const soldierFish = () => {
  // 5, 10, 15, 20, 25, etc... fish

  const soldiers = []

  for (const fish of fishCollection) {
    if (fish.length % 5 === 0 && fish.length % 3 !== 0) {
      soldiers.push(fish)
    }
  }
  // console.log(soldiers)
  // console.log("OG fish collection: ", fishCollection)
  return soldiers
}

export const nonHolyFish = () => {
  // Any fish not a multiple of 3 or 5

  const regularFish = []

  for (const fish of fishCollection) {
    if(fish.length % 3 !== 0 && fish.length % 5 !== 0) {
      regularFish.push(fish)
    }
  }
  return regularFish
}
