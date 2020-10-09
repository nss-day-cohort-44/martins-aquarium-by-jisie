/**
 *  FishList which renders the entire section for the list of fishes.
 */
import { Fish } from "./Fish.js"
import { useFish, mostHolyFish } from "./FishDataProvider.js"


export const FishList = () => {
  const contentElement = document.querySelector(".contentContainer__left")

  // debugger

  // console.log(contentElement)

  const fishes = mostHolyFish()

  // Generate all of the HTML for all of the fish
  let fishHTMLRepresentations = ""
  for (const fish of fishes) {

    /*
      Invoke the Fish component function
      and pass the current fish object as an argument.
      Each time, add the return value to the
      fishHTMLRepresentations variable with `+=`
    */

    // debugger
    fishHTMLRepresentations += Fish(fish)
  }
  // debugger

  // Add a section, and all of the fish to the DOM
  contentElement.innerHTML += `
    <section class="fishList">
      <h3>Fish List</h3>
      <div class="fishContainer">
        ${fishHTMLRepresentations}
      </div>
    </section>
  `
}
