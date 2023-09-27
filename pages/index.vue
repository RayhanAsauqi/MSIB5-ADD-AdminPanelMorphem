<script setup lang="ts">
import type { VBreadcrumbItemProps } from '@morpheme/BreadCrumbs'

definePageMeta({
  breadcrumbs: [
    {
      title: 'Home',
      to: '/',
    },

  ] as VBreadcrumbItemProps[],
})
</script>

<template>
  <div class="container">
    <VAppShell padded-content>
      <div class="mb-5">
        <h1 class="text-2xl font-bold mb-1">
          Dashboard
        </h1>
        <p class="text-gray-500">
          Monitor your metrics for shipping, transactions, product and many more in here
        </p>
      </div>
      <!-- content -->
      <div class="container w-full flex gap-5 ">
        <div class="w-1/4 cursor-pointer">
          <VCard>
            <div class="flex items-center justify-between pb-3">
              <h1 class="font-medium ">
                Total Revenue
              </h1>
              <VIcon name="majesticons:dollar-circle-line" />
            </div>
            <!-- footer slot -->
            <template #footer>
              <p class="text-gray-500 text-sm dark:text-neutral-500">
                +20.1% from last month
              </p>
            </template>
            <!-- body -->
            <p>$ 45,231.89</p>
          </VCard>
        </div>
        <div class="w-1/4 cursor-pointer">
          <VCard>
            <div class="flex items-center justify-between pb-3">
              <h1 class="font-medium">
                Transactions
              </h1>
              <VIcon name="majesticons:money-hand-line" />
            </div>
            <!-- footer slot -->
            <template #footer>
              <p class="text-gray-500 text-sm dark:text-neutral-500">
                +0,0002% since last hour
              </p>
            </template>
            <!-- body -->
            <p>2</p>
          </VCard>
        </div>
        <div class="w-1/4 cursor-pointer">
          <VCard>
            <div class="flex items-center justify-between pb-3">
              <h1 class="font-medium">
                Categories
              </h1>
              <VIcon name="majesticons:dashboard-line" />
            </div>
            <!-- footer slot -->
            <template #footer>
              <p class="text-gray-500 text-sm dark:text-neutral-500">
                +0,0002% since last hour
              </p>
            </template>
            <!-- body -->
            <p>2</p>
          </VCard>
        </div>
        <div class="w-1/4 cursor-pointer">
          <VCard>
            <div class="flex items-center justify-between pb-3">
              <h1 class="font-medium">
                Cancelled
              </h1>
              <VIcon name="mdi:close" />
            </div>
            <!-- footer slot -->
            <template #footer>
              <p class="text-gray-500 text-sm dark:text-neutral-500">
                +0,0002% since last hour
              </p>
            </template>
            <!-- body -->
            <p>2</p>
          </VCard>
        </div>
      </div>
      <MainContent />
    </VAppShell>
  </div>
</template>
