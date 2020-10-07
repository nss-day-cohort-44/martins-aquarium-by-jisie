export const Fish = (fishObj) => {
  return `
    <div class="fish">
    <p>Name:</p>
    <p class="fish__name">${fishObj.name}</p>
    <img class="fish__image" src="${fishObj.image}"
        alt="">
    <p>Species:</p>
    <p class="fish__species">${fishObj.species}</p>

    <p>Length:</p>
    <p class="fish__length">${fishObj.length} inches</p>
    <p>Harvest Location:</p>
    <p class="fish__location">${fishObj.location}</p>
    <p>Diet:</p>
    <p class="fish__diet">${fishObj.food}</p>
    </div>
  `
}
