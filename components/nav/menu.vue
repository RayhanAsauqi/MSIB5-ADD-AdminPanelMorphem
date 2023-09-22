<template>
  <div class="w-full ">
    <VList>
      <VListItem
        prepend-icon="ri:home-2-line"
        hide-append
        class="!text-white"
        to="/"
      >
        <h1>Item 1</h1>
      </VListItem>
      <VListItem prepend-icon="game-icons:cardboard-box-closed" hide-append class="!text-white" to="/product">
        Item 1
      </VListItem>
      <VListItem prepend-icon="fe:wallet" hide-append class="!text-white" to="/transactions">
        Item 1
      </VListItem>
    </VList>
  </div>
</template>
