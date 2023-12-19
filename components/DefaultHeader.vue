<template>
  <header class="bg-slate-800 bg-opacity-0 backdrop-blur-sm">
    <nav class="mx-auto flex max-w items-center justify-between p-6 lg:px-8" aria-label="Global">
      <div class="flex lg:flex-1">
        <a href="#" class="-m-1.5 p-1.5">
          <span class="sr-only">Your Company</span>
          <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="" />
        </a>
      </div>
      <PopoverGroup class="hidden lg:flex lg:gap-x-12">
        <a href="#" class="text-sm font-semibold leading-6 text-white">Features</a>
        <a href="#" class="text-sm font-semibold leading-6 text-white">Marketplace</a>
        <a href="#" class="text-sm font-semibold leading-6 text-white">Company</a>
      </PopoverGroup>
      <div class="hidden lg:flex lg:flex-1 lg:justify-end">
        <a href="#" class="text-sm font-semibold leading-6 text-white">Log in <span aria-hidden="true">&rarr;</span></a>
      </div>
    </nav>
  </header>
</template>