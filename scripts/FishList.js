/**
 *  FishList which renders the entire section for the list of fishes.
 */
import { Fish } from "./Fish.js"
import { mostHolyFish, soldierFish, nonHolyFish } from "./FishDataProvider.js"


const buildFishContainerHTML = (arrayOfFish) => {
  // debugger

  // Generate all of the HTML for all of the fish
  let fishHTMLRepresentations = ""
  for (const fish of arrayOfFish) {

    /*
      Invoke the Fish component function
      and pass the current fish object as an argument.
      Each time, add the return value to the
      fishHTMLRepresentations variable with `+=`
    */

    // debugger
    fishHTMLRepresentations += Fish(fish)

  }

  return fishHTMLRepresentations
}


export const FishList = () => {
  const contentElement = document.querySelector(".contentContainer__left")


  // Building HTML for holy fish
  const holyFishes = mostHolyFish()
  console.log(holyFishes)

  const holyFishHTML = buildFishContainerHTML(holyFishes)
  console.log(holyFishHTML)

  // Building HTML for soldier fish
  const soldierFishes = soldierFish()
  const soldierFishHTML = buildFishContainerHTML(soldierFishes)

  // Building HTML for non holy and non soldier fish
  const regularFishes = nonHolyFish()
  const regularFishHTML = buildFishContainerHTML(regularFishes)

  // debugger

  // Add a section, and all of the fish to the DOM
  contentElement.innerHTML += `
  <section class="fishList">
    <h3>Fish List</h3>
    <div class="fishContainer">
      ${holyFishHTML}
      ${soldierFishHTML}
      ${regularFishHTML}
    </div>
  </section>
`
}
