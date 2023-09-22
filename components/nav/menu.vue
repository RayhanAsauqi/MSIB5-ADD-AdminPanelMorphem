<template>
  <div class="flex items-center ">
    <VList>
      <VListItem to="/">
        <div class="flex items-center gap-5">
          <VIcon name="radix-icons:dashboard" style="color: white;" />
          <h1 class="text-white text-md">
            Home
          </h1>
        </div>
      </VListItem>
      <VListItem to="/product">
        <div class="flex items-center gap-5">
          <VIcon name="game-icons:cardboard-box-closed" style="color: white;" />
          <h1 class="text-white text-md">
            Product
          </h1>
        </div>
      </VListItem>
      <VListItem to="/transactions">
        <div class="flex items-center gap-5">
          <VIcon name="fe:wallet" style="color: white;" />
          <h1 class="text-white text-md ">
            Transactions
          </h1>
        </div>
      </VListItem>
    </VList>
  </div>
</template>
