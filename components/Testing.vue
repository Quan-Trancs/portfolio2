<template>
    <header class="bg-slate-800 bg-opacity-50 backdrop-blur-sm sticky top-0">
      <nav class="mx-auto flex max-w items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div class="flex lg:flex-1">
          <NuxtLink to="/" class="-m-1.5 p-1.5">
            <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="" />
          </NuxtLink>
        </div>
        <PopoverGroup class="hidden lg:flex lg:gap-x-12">
          <NuxtLink to="/" class="text-lg font-semibold leading-6 text-white">Home</NuxtLink>
          <NuxtLink to="/about" class="text-lg font-semibold leading-6 text-white">About</NuxtLink>
          <NuxtLink to="/projects" class="text-lg font-semibold leading-6 text-white">Projects</NuxtLink>
          <NuxtLink to="/experiences" class="text-lg font-semibold leading-6 text-white">Experiences</NuxtLink>
        </PopoverGroup>
        <div class="hidden lg:flex lg:flex-1 lg:justify-end">
          <a href="#" class="text-sm font-semibold leading-6 text-white">Log in <span aria-hidden="true">&rarr;</span></a>
        </div>
      </nav>
    </header>
  </template>