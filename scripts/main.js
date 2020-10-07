import { useFish } from './FishDataProvider.js'

const allTheFish = useFish()

// console.log(allTheFish)

for (const fish of allTheFish) {
  console.log(fish)
}
