<script setup lang="ts">
import type { VSelectItem } from '@morpheme/select'
import type { VBreadcrumbItemProps } from '@morpheme/BreadCrumbs'
import { mixed, number, object, string } from 'yup'
import { useForm } from 'vee-validate'
import { VEditor } from '@morpheme/editor'
import { ref } from 'vue'

const title = ref('')
const price = ref(0)
const descriptions = ref('')
const showAlert = ref(false)
const { id } = useRoute().params

const schema = object({
  image: mixed().required().label('image'),
  title: string().required().label('Email'),
  price: number().required().label('Price'),
  category: string().required().label('Category'),
  descriptions: string().required().label('Descriptions'),
})

const { handleSubmit, resetForm } = useForm({
  validationSchema: schema,
})
const onSubmit = handleSubmit((values) => {
  useProductStore().editProduct(Number(id), values)
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
definePageMeta({
  breadcrumbs: [
    {
      title: 'Products',
      to: '/products',
    },
    {
      title: 'AddProducts',
      to: '/product/editProducts/1',
    },

  ] as VBreadcrumbItemProps[],
})
</script>

<template>
  <ClientOnly>
    <div class="py-1 ">
      <h1 class="text-center text-4xl font-semibold text-gray-900">
        Edit Products
      </h1>
      <p class="text-center text-sm font-semibold text-gray-500">
        Edit Product kamu disini
      </p>
    </div>
    <div class="py-10 px-10">
      <VCard>
        <VAlert v-model="showAlert" bordered color="secondary">
          secondary
        </VAlert>
        <VFileUpload theme="image" name="image" />
        <div class="flex justify-center w-full gap-5 pt-10">
          <div class="w-1/2">
            <VInput v-model="title" label="Name" name="title" />
          </div>
          <div class="w-1/2">
            <VInput v-model="price" label="Price" name="price" />
          </div>
        </div>
        <div class="pt-10">
          <VSelect :items="items" name="category" />
        </div>
        <div class="pt-10">
          <VEditor v-model="descriptions" label="Description" name="descriptions" />
        </div>
        <div class="pt-10 flex gap-2">
          <VBtn @click="onSubmit">
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
