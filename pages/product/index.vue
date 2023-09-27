<script setup lang="ts">
import { ref } from 'vue'
import type { VDataTableHeader } from '@morpheme/table'
import type { VBreadcrumbItemProps } from '@morpheme/BreadCrumbs'

// import { breakpointsTailwind } from '@vueuse/core'
import { useProductStore } from '~/stores/productStore'

// const breakpoints = useBreakpoints(breakpointsTailwind)
// const isMobile = breakpoints.smaller('sm')
const productStore = useProductStore()
const isOpen = ref(false)
const loading = ref(false)
onMounted(async () => {
  if (productStore.products.length === 0)
    await productStore.fetchDataProduct()
})

watch(() => productStore.searchProducts, () => {
  // eslint-disable-next-line no-unused-expressions
  productStore.filteredProduct
})

definePageMeta({
  breadcrumbs: [
    {
      title: 'Product',
      to: '/product',
    },

  ] as VBreadcrumbItemProps[],
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
function getIdProduct(id: number): void {
  isOpen.value = true
  itemId.value = id
}

function removeProduct(id: number): void {
  productStore.deleteProduct(id)
  isOpen.value = false
}
</script>

<template>
  <div class="container px-10 ">
    <div class="mb-5">
      <h1 class="text-2xl font-semibold mb-1">
        Products
      </h1>
      <p>Manage your products here</p>
    </div>
    <div class="mb-5">
      <!-- card start -->
      <VCard>
        <div class=" ">
          <div class="lg:flex lg:justify-between ">
            <div>
              <VInput
                v-model="productStore.searchProducts"
                prepend-icon="ri:search-line"
                placeholder="Search..."
              />
            </div>
            <div>
              <NuxtLink to="/product/add">
                <VBtn color="darkBlue" shadow class="!text-white !w-full !mt-2 hover:bg-[#d3cfff]">
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
                <VBtn class="hover:bg-[#d3cfff]">
                  <VIcon name="fe:eye" />
                </VBtn>
                <!-- </template> -->
                <VBtn :to="`product/edit/${item.id}`" class="hover:bg-[#d3cfff]">
                  <VIcon name="majesticons:pencil-line" />
                </VBtn>
                <VBtn class="hover:bg-[#d3cfff]" @click="getIdProduct(item.id) ">
                  <VIcon name="majesticons:trash-line" />
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

<style lang="scss">
:root{

  --btn-active-hover-color: var(--color-dark-blue-200)
}
</style>
