<script setup lang="ts">
import type { VBreadcrumbItemProps } from '@morpheme/breadcrumbs'

const route = useRoute()
const items = computed<VBreadcrumbItemProps[]>(() => {
  return (route.meta.breadcrumbs ?? []) as VBreadcrumbItemProps[]
})
</script>

<template>
  <div class="container mx-auto px-4 pt-6">
    <VBreadcrumbs>
      <VBreadcrumbItem to="/">
        <VIcon name="majesticons:home" />
      </VBreadcrumbItem>
      <VBreadcrumbsDivider />
      <div v-for="item, index in items" :key="item.title">
        <VBreadcrumbsItem :to="item.to" class="!text-black">
          {{ item.title }}
        </VBreadcrumbsItem>
        <VBreadcrumbsDivider v-if="items.length - 1 !== index" />
      </div>
    </VBreadcrumbs>
  </div>
</template>

<style lang="scss">
  :root{
    --breadcrumbs-item-active-color:  var(--color-dark-blue-200);
    --breadcrumbs-item-active-bg-color:  var(--color-dark-blue-400  );
    --breadcrumbs-item-active-hover-color:  var(--color-dark-blue-200);

  }
</style>
