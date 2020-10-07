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
    length: 16,
    location: "Thailand",
    image: "https://fishfeeling.com/wp-content/uploads/2019/10/Red-Tailed-Black-Shark.jpg"
  },
  {
    name: "Halley",
    food: "Mollusks, worms, insect larvae, crustaceans, and some fish",
    species: "Carassius auratus",
    length: 4,
    location: "United States",
    image: "https://aquariumtidings.com/wp-content/uploads/2014/06/Depositphotos_114861180_original-1024x683.jpg"
  },
  {
    name: "Halley Twin",
    food: "Mollusks, worms, insect larvae, crustaceans, and some fish",
    species: "Carassius auratus",
    length: 4,
    location: "United States",
    image: "https://aquariumtidings.com/wp-content/uploads/2014/06/Depositphotos_114861180_original-1024x683.jpg"
  },
  {
    name: "Halley Triplet",
    food: "Mollusks, worms, insect larvae, crustaceans, and some fish",
    species: "Carassius auratus",
    length: 4,
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
