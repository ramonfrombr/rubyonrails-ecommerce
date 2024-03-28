import { Controller } from '@hotwired/stimulus'

// Connects to data-controller="products"
export default class extends Controller {
  addToCart() {
    console.log('product: ', this.productValue)
  }

  selectSize(e) {
    this.sizeValue = e.target.value
    const selectedSizeEl = document.getElementById('selected-size')
    selectedSizeEl.innerText = `Selected Size: ${this.sizeValue}`
  }
}
