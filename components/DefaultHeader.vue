<template>
  <header class="bg-black bg-opacity-50 backdrop-blur-sm sticky top-0">
    <nav class="mx-auto flex max-w items-center justify-between px-6 pt-2 pb-1 lg:px-8" aria-label="Global">
      <div class="flex lg:flex-1 select-none">
        <a @click="scrollToSection('home')" class="-m-1.5 p-1.5">
          <!--<img class="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="" />-->
          <div class="text-2xl text-indigo-500 font-bold hover:text-indigo-600">Portfolio.</div>
        </a>
      </div>
      <PopoverGroup class="hidden lg:flex lg:gap-x-12 decoration-cyan-300 select-none">
        <a @click="scrollToSection('home')" class="text-lg font-semibold leading-6 text-gray-300 nav-underline hover:text-white">Home</a>
        <a @click="scrollToSection('about')" class="text-lg font-semibold leading-6 text-gray-300 nav-underline hover:text-white">About</a>
        <a @click="scrollToSection('skill')" class="text-lg font-semibold leading-6 text-gray-300 nav-underline hover:text-white">Skills</a>
        <a @click="scrollToSection('projects')" class="text-lg font-semibold leading-6 text-gray-300 nav-underline hover:text-white">Projects</a>
        <a @click="scrollToSection('experiences')" class="text-lg font-semibold leading-6 text-gray-300 nav-underline hover:text-white">Experience</a>
      </PopoverGroup>
      <div class="hidden lg:flex lg:flex-1 lg:justify-end gap-2">
        <a href="mailto:quananhtrancs@gmail.com" target="_blank">
          <button class="rounded-md bg-white hover:shadow-lg hover:shadow-gray-200/50">
            <img src="../public/gmailLogo.png" alt="gmail" class="h-10"/>
          </button>
        </a>
        <a href="https://www.linkedin.com/in/quan-tran-960832276/" target="_blank">
          <button class="h-10 rounded-md bg-sky-600 hover:shadow-lg hover:shadow-sky-600/50">
            <img src="../public/linkedinLogo.png" alt="Linkedin" class="h-10"/>
          </button>
        </a>
        <a href="https://github.com/Quan-Trancs" target="_blank">
          <button class="rounded-md bg-teal-500 hover:shadow-lg hover:shadow-teal-500/50">
            <img src="../public/githubLogo2.png" alt="Linkedin" class="h-10"/>
          </button>
        </a>
      </div>
    </nav>
  </header>
</template>

<script setup>
function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}
</script>

<style scoped>
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