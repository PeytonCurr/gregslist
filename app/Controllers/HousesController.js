import { appState } from "../AppState.js";
import { House } from "../Models/House.js";
import { housesService } from "../Services/HousesService.js";
import { getFormData } from "../Utils/FormHandler.js";
import { setHTML } from "../Utils/Writer.js";

function _drawHouses() {
  const houses = appState.houses
  let template = ''
  houses.forEach(h => template += h.HouseCard)
  setHTML('listings', template)
}

function _drawHouseForm() {
  setHTML('form', House.HouseForm())
}

export class HousesController {
  constructor() {
    console.log('houses controller loaded', appState.houses);
    _drawHouses()
    _drawHouseForm()
    appState.on('cars', _drawHouses)
  }

  showHouses() {
    _drawHouses()
    _drawHouseForm()
  }

  createHouse() {
    event.preventDefault()
    console.log('creating a house')
    const form = event.target
    let formData = getFormData(form)
    housesService.createHouse(formData)
    form.reset()
    _drawHouses()
  }

  async deleteHouse() {
    if (await Pop.confirm('are you sure you want to delete this?')) {
      // console.log('delete house', id);
      housesService.deleteHouse(id)
      Pop.toast('House Deleted!', 'success')
    }
  }
}