import { generateId } from "../Utils/generateId.js"



export class House {
  constructor(data) {
    this.id = generateId()
    this.price = data.price
    this.beds = data.beds
    this.baths = data.baths
    this.sqFt = data.sqFt
    this.img = data.img
    this.address = data.address
  }


  get HouseCard() {
    return `
    <div class="col-6 col-md-4">
    <div class="card elevation-2 fw-bold text-shadow">
      <img
        src="${this.img}"
        alt="${this.beds}-${this.baths}" style="height: 30vh; width: auto">
      <div class="p-2">
      <h1 class="text-start">🍔${this.price}</h1>
        <h6 class="text-start">${this.beds} bds | ${this.baths} ba | ${this.sqFt} sqft</h6>
        <p>${this.address}</p>
        <button class="btn btn-outline-danger" title="delete house" onclick="app.houseController.deleteHouse('${this.id}')"><i class="mdi mdi-delete" ></i></button>
      </div>
    </div>
  </div>
  `
  }

  static HouseForm() {
    return `
  <form onsubmit="app.housesController.createHouse()" class="row bg-white rounded elevation-2 p-4">
      <h3>List a House</h3>
      <div class="mb-2 col-12">
        <label for="img">Image URL</label>
        <input type="url" name="img" id="img" class="form-control" required
          placeholder="please enter a url for an image...">
      </div>
      <div class="mb-2 col-4">
        <label for="beds"># of Beds</label>
        <input type="number" name="beds" id="beds" class="form-control" placeholder="3" min="1" max="25">
      </div>
      <div class="mb-2 col-4">
        <label for="baths"># of Baths</label>
        <input type="number" name="baths" id="baths" class="form-control" required min="1" max="25"
          placeholder="2">
      </div>
      <div class="mb-2 col-4">
        <label for="sqFt">Square Feet</label>
        <input type="number" name="sqFt" id="sqFt" class="form-control" required min="100" max="100000"
          placeholder="1600">
      </div>
      <div class="mb-2 col-12">
        <label for="address">Address</label>
        <input type="text" name="address" id="address" class="form-control" maxlength="100" placeholder= "please enter a address...">
      </div>
      <div class="mb-2 col-6">
        <label for="price">Price</label>
        <input type="number" name="price" id="price" class="form-control" required min="1" max="1000000000" placeholder= "400000">
      </div>
      <div class="text-end mt-2">
        <button class="btn btn-primary" type="submit">submit</button>
      </div>
    </form>
    `
  }
}