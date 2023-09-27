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
      const index = this.products.findIndex(product => product.id === productId)
      if (index !== -1)
        this.products.splice(index, 1)
    },
    async addProduct(newProduct: any) {
      try {
        this.products.push({
          id: this.products.length + 1,
          title: newProduct.title,
          price: newProduct.price,
          category: newProduct.category,
          img: newProduct.img,
        },
        )
      }
      catch (error) {
      }
    },
    editProduct(id: number, updateProduct: any): void {
      const index = this.products.findIndex(product => product.id === id)
      if (index !== -1) {
        this.products[index] = {
          ...this.products[index],
          ...updateProduct,
        }
      }
    },
    // getSingleProduct(id: number): void {
    //   this.products
    // },
  },

})
