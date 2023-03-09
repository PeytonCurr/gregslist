import { appState } from "../AppState.js"
import { House } from "../Models/House.js"
import { saveState } from "../Utils/Store.js"

function _saveHouses() {
  saveState(`houses`, appState.houses)
}

class HousesService {

  createHouse(formData) {
    let house = new House(formData)
    console.log(house);
    appState.houses.push(house)
    appState.emit(`houses`)
    _saveHouses()
  }

  deleteHouse(id) {
    let filtered = appState.houses.filter(h => h.id != id)
    appState.houses = filtered
    _saveHouses()
  }

}

export const housesService = new HousesService()