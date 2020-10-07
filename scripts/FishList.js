import { Fish } from "./Fish.js"
import { useFish } from "./FishDataProvider.js"
/**
 *  FishList which renders individual fish objects as HTML
 */


export const FishList = () => {
  const contentElement = document.querySelector(".contentContainer__left")

  // debugger

  // console.log(contentElement)

  const fishes = useFish()

  let fishHTMLRepresentations = ""
  for (const fish of fishes) {
    // debugger
    fishHTMLRepresentations += Fish(fish)
  }
  // debugger

  contentElement.innerHTML += `
    <section class="fishList">
    <h3>Fish List</h3>
    <div class="fishContainer">
      ${fishHTMLRepresentations}
    </div>
    </section>
  `
}
