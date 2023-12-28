<template>
  <header class="bg-black bg-opacity-50 backdrop-blur-sm sticky top-0">
    <nav class="mx-auto flex max-w items-center justify-between p-6 lg:px-8" aria-label="Global">
      <div class="flex lg:flex-1">
        <NuxtLink to="/" class="-m-1.5 p-1.5">
          <!--<img class="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="" />-->
          <div class="text-2xl text-indigo-500 font-bold">Portfolio.</div>
        </NuxtLink>
      </div>
      <PopoverGroup class="hidden lg:flex lg:gap-x-12 decoration-cyan-300">
        <NuxtLink to="/" class="text-lg font-semibold leading-6 text-white nav-underline">Home</NuxtLink>
        <NuxtLink to="/about" class="text-lg font-semibold leading-6 text-white nav-underline">About</NuxtLink>
        <NuxtLink to="/skill" class="text-lg font-semibold leading-6 text-white nav-underline">Skills</NuxtLink>
        <NuxtLink to="/projects" class="text-lg font-semibold leading-6 text-white nav-underline">Projects</NuxtLink>
        <NuxtLink to="/experiences" class="text-lg font-semibold leading-6 text-white nav-underline">Experience</NuxtLink>
      </PopoverGroup>
      <div class="hidden lg:flex lg:flex-1 lg:justify-end">
        <a href="#" class="text-sm font-semibold leading-6 text-white">Log in <span aria-hidden="true">&rarr;</span></a>
      </div>
    </nav>
  </header>
</template>

<style>
.nav-underline {
  border-bottom-width: 0;
  background-image: linear-gradient(transparent, transparent), linear-gradient(#00FFFF, #00FFFF);
  background-size: 0 3px;
  background-position: 50% 100%, 50% 100%;
  background-repeat: no-repeat;
  transition: background-size .5s ease-in-out, background-position .5s ease-in-out;
  padding-bottom: 5px;
}

.nav-underline:hover {
  background-size: 100% 3px;
  background-position: 0 100%, 100% 100%;
}
</style>