import { defineStore } from 'pinia'
import axios from 'axios'
import type { Product } from '~/types/main'

export const useProductStore = defineStore('product', {
  state: (): {
    products: Product[]
    searchProducts: string
  } => ({
    products: [],
    searchProducts: '',
  }),
  getters: {
    filteredProduct: (state) => {
      if (!state.searchProducts)
        return state.products

      state.products = state.products.filter((item) => {
        const product = item.title?.toLowerCase()
        return product.match(state.searchProducts.toLowerCase())
      })
    },
  },
  actions: {
    async fetchDataProduct(): Promise<void> {
      try {
        const response = await axios.get('https://dummyjson.com/products')
        this.products = response.data.products
      }
      catch (error) {
        console.log(error)
      }
    },
    async deleteProduct(productId: number) {
      // Lakukan operasi penghapusan data di sini, misalnya dengan HTTP request atau langsung memanipulasi state.
      const index = this.products.findIndex(product => product.id === productId)
      if (index !== -1)
        this.products.splice(index, 1)
    },
    async addProduct(newProduct: any) {
      try {
        this.products.push({
          id: this.products.length + 1,
          title: newProduct.title,
          price: newProduct.category,
          category: newProduct.price,
          img: newProduct.img,
        },
        )
      }
      catch (error) {
      }
    },
  },

})
