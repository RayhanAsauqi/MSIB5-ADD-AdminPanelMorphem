<script setup lang="ts">
import { ref } from 'vue'
import type { VDataTableHeader } from '@morpheme/table'
import { useProductStore } from '~/stores/productStore'

const productStore = useProductStore()
const isOpen = ref(false)
const loading = ref(false)
onMounted(async () => {
  await productStore.fetchDataProduct()
})

watch(() => productStore.searchProducts, () => {
  // eslint-disable-next-line no-unused-expressions
  productStore.filteredProduct
})
const headers = ref<VDataTableHeader[]>([
  {
    value: 'img',
    text: 'Thumbnail',
  },
  {
    value: 'title',
    text: 'Name',
  },
  {
    value: 'price',
    text: 'Price',
  },
  {
    value: 'category',
    text: 'Category',
  },
  {
    value: 'action',
    text: 'Action',
  },
])

const itemId = ref<number>(0)
function getIdProduct(id: number) {
  isOpen.value = true
  itemId.value = id
}

function removeProduct(id: number) {
  productStore.deleteProduct(id)
  isOpen.value = false
}
</script>

<template>
  <div class="container px-10 ">
    <div class="pt-10">
      <v-breadcrumbs>
        <VIcon name="majesticons:home" />
        /
        <v-breadcrumbs-item to="/product" item>
          Product
        </v-breadcrumbs-item>
      </v-breadcrumbs>
    </div>
    <div class="mb-5">
      <h1 class="text-2xl font-semibold mb-1">
        Products
      </h1>
      <p>Manage your products here</p>
    </div>
    <div class="mb-5">
      <!-- card start -->
      <VCard>
        <div class="w-full ">
          <div class="flex justify-between">
            <div>
              <VInput
                v-model="productStore.searchProducts"
                prepend-icon="ri:search-line"
                placeholder="Search..."
              />
            </div>
            <div>
              <NuxtLink to="product/add">
                <VBtn color="primary" shadow>
                  <VIcon name="majesticons:plus-line" />
                  Tambah
                </VBtn>
              </NuxtLink>
            </div>
          </div>
        </div>

        <div class="mt-5">
          <VDataTable :items="productStore.products" :headers="headers">
            <template #item.img="{ item }">
              <img :src="item.thumbnail" alt="" class="w-10">
            </template>
            <template #item.action="{ item }">
              <div class="flex justify-center gap-2">
                <!-- <template #activator="{ open }"> -->
                <VBtn>
                  <VIcon name="fe:eye" @click="getIdProduct(item.id)" />
                </VBtn>
                <!-- </template> -->
                <VBtn to="product/edit">
                  <VIcon name="majesticons:pencil-line" />
                </VBtn>
                <VBtn>
                  <VIcon name="majesticons:trash-line" @click="getIdProduct(item.id)" />
                </VBtn>
              </div>
            </template>
          </VDataTable>
        </div>
      </VCard>
      <!-- card end -->
    </div>
  </div>
  <VModal
    v-model="isOpen"
    title="Delete Item"
    confirm
    confirm-text="Delete"
    confirm-color="error"
    :loading="loading"
    centered
    footer-class="flex-row-reverse"
    close-text="Cancel"
    @confirm="removeProduct(itemId)"
  >
    <p>Are you sure want to delete this item?</p>
  </VModal>
</template>
