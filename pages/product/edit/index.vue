<script setup lang="ts">
import type { VSelectItem } from '@morpheme/select'
import { VEditor } from '@morpheme/editor'
import { ref } from 'vue'

const value = ref()
const editor = ref('')
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
    <div class="py-10 ">
      <h1 class="text-center text-4xl font-semibold text-gray-900">
        Edit Products
      </h1>
      <p class="text-center text-sm font-semibold text-gray-500">
        Edit Product kamu disini
      </p>
    </div>
    <div class="pt-10 px-10">
      <VCard>
        <VFileUpload v-model="value" theme="image" />
        <div class="flex justify-center w-full gap-5 pt-10">
          <div class="w-1/2">
            <VInput label="Name" />
          </div>
          <div class="w-1/2">
            <VInput label="Price" />
          </div>
        </div>
        <div class="pt-10">
          <VSelect :items="items" />
        </div>
        <div class="pt-10">
          <VEditor v-model="editor" label="Description" />
        </div>
        <div class="pt-10">
          <VBtn>
            Submit
          </VBtn>
        </div>
      </VCard>
    </div>
  </ClientOnly>
</template>
