<script setup lang="ts">
// const breakpoints = useBreakpoints(breakpointsTailwind)
// const isMobile = breakpoints.smaller('sm') // only smaller than lg
// const isAsideOpen = ref(true)

// watchEffect(() => {
//   isAsideOpen.value = !isMobile.value
// })
const isMini = ref(true)
</script>

<template>
  <VAppShell>
    <slot />

    <!-- aside -->
    <template #aside>
      <VNavDrawer
        v-model:mini="isMini"
        :fixed="isMobile"
        :overlay="isMobile"
        :close-on-overlay-click="isMobile"
        :class="{ 'z-20 !w-10/12 sidebar': isMobile }"
        bordered
        color="primary"
        height="100%"
      >
        <div class="bg-default  transition-all duration-300 flex items-center justify-between px-5 ">
          <h1 v-if="!isMini">
            E-Commerce
          </h1>
          <VBtn @click="isMini = !isMini">
            <VIcon name="humbleicons:align-text-left" />
          </VBtn>
        </div>
        <NavDrawerContent logo />
        <NavMenu />
      </VNavDrawer>
    </template>

    <!-- content -->
    <MainContent />
  </VAppShell>
</template>
