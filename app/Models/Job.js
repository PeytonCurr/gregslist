import { generateId } from "../Utils/generateId.js"



export class JOB {

  constructor(data) {
    this.id = generateId()
    this.img = data.img
    this.position = data.position
    this.hours = data.hours
    this.salary = data.salary
  }

  get jobCard() {
    return `<div class="col-6 col-md-3">
    <div class="card elevation-2 fw-bold text-shadow">
      <img
      src="${this.img}"
      alt="${this.position}" style="height: 30vh; width: auto">
      <p class="text-end">🍔${this.salary}</p>
      <div class="p-2">
        <h5 class="text-center border-bottom border-dark">${this.position} | ${this.hours}</h5>
        <button class="btn btn-outline-danger" title="delete car" onclick="app.carsController.deleteCar('${this.id}')"><i class="mdi mdi-delete" ></i></button>
      </div>
    </div>
  </div>`
  }
}