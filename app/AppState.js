import { Car } from "./Models/Car.js"
import { House } from "./Models/House.js"
import { Value } from "./Models/Value.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"
import { loadState } from "./Utils/Store.js"

class AppState extends EventEmitter {
  /** @type {import('./Models/Value').Value[]} */
  values = loadState('values', [Value])

  // NOTE the type is Car but the [] tells it that it is an array of cars
  /** @type {import('./Models/Car').Car[]} */
  // cars = [
  //   new Car({ make: 'toyota', model: 'tacoma', year: 2025, color: '#000', description: "It's so new, it doesn't exist yet", img: 'https://trailtacoma.com/wp-content/uploads/2022/03/Taco_Tuesday_Midnight_Black_tacoma07.jpg', price: 5 }),
  //   new Car({ make: 'Subaru', model: 'tsunami', year: 2027, color: '#16161d', description: "Cool car, cool color", img: 'https://www.cnet.com/a/img/resize/d028f516616211e789c534381db4ddcb742a3f0b/hub/2019/03/06/a84a4a02-09a1-4616-809d-3ca4c63fede1/subaru-viziv-adrenaline-concept-geneva-2019.jpg?auto=webp&fit=crop&height=675&width=1200', price: 12 })
  // ] DONE WITH TEST DATA moving to local

  cars = loadState('cars', [Car])

  /** @type {import('./Models/House').House[]} */

  houses = loadState(`houses`, [House])

  // houses = [
  //   new House({ img: `https://ca-times.brightspotcdn.com/dims4/default/9d1bff7/2147483647/strip/true/crop/2000x1195+0+0/resize/1200x717!/quality/80/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2Fad%2Ff4%2F1f1b2193479eafb7cbba65691184%2F10480-sunset-fullres-01.jpg`, price: 1800000, beds: 5, baths: 3, sqFt: 2400, address: `567 Elm Street, Greenfield, CA 93927` }),
  //   new House({ img: `https://mediavault.point2.com/p2h/listing/91c6/3d4b/3161/78e3b3da6c93f37afa36/nwm_large.jpg`, price: 3200000, beds: 7, baths: 5, sqFt: 4200, address: `789 Maple Lane, Blueville, TX 77459` })
  // ]

  // NOTE super weird type case as an example
  /** @type {[Number, String, Number]} */
  example
}

export const appState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
