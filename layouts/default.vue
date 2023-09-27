<script setup lang="ts">
import { breakpointsTailwind } from '@vueuse/core'

const breakpoints = useBreakpoints(breakpointsTailwind)
const isMobile = breakpoints.smaller('sm')
const isOpen = ref(true)
watchEffect(() => {
  isOpen.value = !isMobile.value
})

const isMini = ref(false)
console.log(isMini)
</script>

<template>
  <VAppShell>
    <slot />
    <template #header>
      <div class="flex justify-center ">
        <div v-if="isMobile" class="container flex justify-between px-5">
          <VLogo />
          <VBtn class="hover:bg-[#d3cfff]" @click="isOpen = !isOpen">
            <VIcon name="humbleicons:align-text-left" />
          </VBtn>
        </div>
      </div>
    </template>
    <!-- aside -->
    <template #aside>
      <VNavDrawer
        v-model="isOpen"
        v-model:mini="isMini"
        :fixed="isMobile"
        :overlay="isMobile"
        :close-on-overlay-click="isMobile"
        :class="{ 'z-20 !w-10/12 sidebar': isMobile }"
        bordered
        class="!bg-[#e8e5ff]"
        height="100%"
      >
        <div :class="[!isMini ? 'bg-default transition-all duration-300 flex justify-between items-center px-5' : 'px-1'] ">
          <h1 v-if="!isMini">
            E-Commerce
          </h1>
          <VBtn v-if="!isMobile" @click="isMini = !isMini">
            <VIcon name="humbleicons:align-text-left" />
          </VBtn>
        </div>
        <NavMenu />
        <!-- <NavDrawerContent logo /> -->
      </VNavDrawer>
    </template>
    <template #navigation>
      <BreadCrumps />
    </template>
    <!-- content -->
    <MainContent />
  </VAppShell>
</template>
