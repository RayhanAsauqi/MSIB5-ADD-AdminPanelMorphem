<template>
  <div class="w-full ">
    <VList>
      <VListItem
        prepend-icon="ri:home-2-line"
        hide-append
        to="/"
      >
        <h1 class="text-md">
          Home
        </h1>
      </VListItem>
      <VListItem
        prepend-icon="game-icons:cardboard-box-closed"
        hide-append
        to="/product"
        color="darkBlue"
        class=""
      >
        <h1 class="text-md">
          Products
        </h1>
      </VListItem>
      <VListItem prepend-icon="fe:wallet" hide-append to="/transactions">
        <h1 class="text-md">
          Transactions
        </h1>
      </VListItem>
    </VList>
  </div>
</template>
