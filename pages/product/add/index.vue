<script setup lang="ts">
import type { VSelectItem } from '@morpheme/select'
import type { VBreadcrumbItemProps } from '@morpheme/BreadCrumbs'
import { mixed, number, object, string } from 'yup'
import { useForm } from 'vee-validate'
import { VEditor } from '@morpheme/editor'
import { ref } from 'vue'

// const price = ref(0)
const showAlert = ref(false)
const productStore = useProductStore()

const schema = object({
  image: mixed().required().label('image'),
  title: string().required().label('Email'),
  price: number().required().label('Price'),
  category: string().required().label('Category'),
  descriptions: string().required().label('Descriptions'),
})
const { resetForm } = useForm({
  validationSchema: schema,
})

const newProduct = ref({
  id: null,
  title: '',
  price: null,
  category: '',
  img: '',

})

definePageMeta({
  breadcrumbs: [
    {
      title: 'Products',
      to: '/product',
    },
    {
      title: 'Add',
      to: '/product/add',
    },

  ] as VBreadcrumbItemProps[],
})
const items = ref<VSelectItem[]>([
  {
    text: 'Smartphone',
    value: 1,
  },
  {
    text: 'Laptops',
    value: 2,
  },
  {
    text: 'Skin Care',
    value: 3,
  },
])
</script>

<template>
  <ClientOnly>
    <div class="py-1">
      <h1 class="text-center text-4xl font-semibold text-gray-900">
        Tambah Products
      </h1>
      <p class="text-center text-sm font-semibold text-gray-500">
        Tambah Product kamu disini
      </p>
    </div>
    <div class="py-10 px-10 ">
      <VCard>
        <VAlert v-model="showAlert" />
        <VFileUpload theme="image" name="image" />
        <div class="flex justify-center w-full gap-5 pt-10">
          <div class="w-1/2">
            <VInput v-model="newProduct.title" label="Name" name="title" />
          </div>
          <div class="w-1/2">
            <VInput label="Price" name="price" />
          </div>
        </div>
        <div class="pt-10">
          <VSelect :items="items" name="category" />
        </div>
        <div class="pt-10">
          <VEditor label="Description" name="descriptions" />
        </div>
        <div class="pt-10 flex gap-2">
          <VBtn @click="productStore.addProduct(newProduct)">
            Submit
          </VBtn>
          <VBtn @click="resetForm">
            Reset
          </VBtn>
        </div>
      </VCard>
    </div>
  </ClientOnly>
</template>
