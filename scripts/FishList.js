/**
 *  FishList which renders individual fish objects as HTML
 */

// TODO: Import `useFish` from the data provider module

export const FishList = () => {
  const contentElement = document.querySelector(".contentContainer__left")

  // debugger

  console.log(contentElement)

  contentElement.innerHTML += `
  <section class="fishList">
  <h3>Fish List</h3>
  <div class="fishContainer">
  Placeholder for list of fishes
  </div>
  </section>
`
}
