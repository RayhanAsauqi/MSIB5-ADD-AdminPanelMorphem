<script setup lang="ts">
import type { VDataTableHeader } from '@morpheme/table'

const items = ref([
  {
    text: 'Tab Item 1',
  },
  {
    text: 'Tab Item 2',
  },
  {
    text: 'Tab Item 3',
  },
  // ...
])
const headers = ref<VDataTableHeader[]>([
  {
    value: 'order',
    text: 'ORDER NUMBER',
  },
  {
    value: 'title',
    text: 'PRODUCT NAME',
  },
  {
    value: 'quantitiy',
    text: 'QUANTITIY',
  },
  {
    value: 'number',
    text: 'PHONE NUMBER',
  },
  {
    value: 'address',
    text: 'ADDRESS',
  },
])

const selected = ref(0)
</script>

<template>
  <VAppShell padded-content>
    <div class="py-4">
      <h1 class="text-2xl font-semibold lg:text-3xl mb-1">
        Transactions
      </h1>
      <p class="text-gray-500">
        Monitor your transaction here
      </p>
    </div>
    <VCard>
      <VTabs v-model="selected" :items="items" />
      <div class="p-4">
        <div v-if="selected === 0 ">
          <h1 class="text-lg font-semibold">
            sending
          </h1>
        </div>
        <div v-if="selected === 1 ">
          <h1 class="text-lg font-semibold">
            pending
          </h1>
        </div>
        <div v-if="selected === 2 ">
          <h1 class="text-lg font-semibold">
            Complete
          </h1>
        </div>
      </div>

      <VDataTable :items="[]" :headers="headers">
        <template #item.order="{ item }">
          <img :src="item" alt="" class="w-10">
        </template>
      </VDataTable>
    </VCard>
  </VAppShell>
</template>
