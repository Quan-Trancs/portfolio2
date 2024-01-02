<template>
    <div>
        <div>.</div>
        <a class="object-fill h-0 w-0">
          <img class="h-[0px]" src="../public/BookStore.png" alt=".">
        </a>
        <a class="object-fill h-0 w-0">
          <img class="h-[0px]" src="../public/Portfolio.png" alt=".">
        </a>
        <div class="mt-12">
            <div class="mx-30 mb-10">
                <div class="text-5xl font-bold text-center">Personal Projects</div>
            </div>
            <div class="w-full gap-0 flex justify-center align-middle">
                <button @click="previous()" class="h-10 w-10 mt-12 text-3xl text-neutral-100">&lt</button>
                <div class="h-[180px] w-[350px] mx-4 rounded-xl bg-black overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
                    <div class="flex items-center justify-center [&_li]:mx-8 [&_img]:max-w-none gap-5 gallery">
                        <div v-for="(slot, index) in gallery" 
                        :key="index"
                        :middleIndex="middleIndex">
                            <a v-if="index != 1" class="object-fill">
                                <img class="h-[100px] w-[100px] bg-white rounded-lg" v-bind:src="slot.url" alt="ProjectSide"/>
                            </a>
                            <a v-if="index == 1" class="object-fill ">
                                <img class="h-[150px] w-[200px] bg-sky-600 rounded-lg p-1 shadow-xl shadow-gray-600/50" v-bind:src="slot.url" alt="ProjectMiddle"/>
                            </a>
                        </div>
                    </div>
                </div>
                <button @click="next()" class="h-10 w-10 mt-12 text-3xl text-neutral-100">&gt</button>
            </div>
        </div>
        <div class="flex justify-between mx-10 mb-10 items-end">
            <a class="object-fill flex">
                <img class="h-[260px] w-[400px] bg-sky-600 rounded-lg p-3" :src="options[currentProject].url" alt="SelectedProject"/>
                <a :href="options[currentProject].github" target="_blank" class="ml-2 mt-[210px]">
                  <button class="h-12 rounded-md bg-sky-600 hover:shadow-lg hover:shadow-sky-600/50">
                    <img src="../public/githubLogo.png" alt="Linkedin" class="h-12"/>
                  </button>
                </a>
            </a>
            <div class="h-[260px] flex items-start">
              <div class="mr-10">
                <div class="text-center font-bold text-3xl mb-8">
                    {{options[currentProject].name}}
                </div>
                <div class="w-[500px] text-center">
                    {{options[currentProject].discription}}
                </div>
              </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';

interface CustomProject {
  url: string;
  name: String;
  discription: String;
  github: String
}
const options = ref(<CustomProject[]>[
  { url: '/_nuxt/Portfolio.bc253c03.png', 
    name: 'Portfolio', 
    discription: 'This project is centered around creating a dynamic portfolio showcase using Nuxt, JavaScript, CSS, and Tailwind for building user interfaces. The primary objective is to develop an appealing and responsive portfolio website that highlights skills, and experiences of an individual or organization.', 
    github: 'https://github.com/Quan-Trancs/portfolio2' 
  },
  { url: '/_nuxt/BookStore.2d7509f2.png', 
    name: 'BookStore', 
    discription: 'This project is centered around developing online bookstore\'s comprehensive database and reliable backend system, ensuring the secure handling of various bookstore functions, incorporating a robust validation system for enhanced security measures. Furthermore, I imply multi-threading system with Asynchronous Request-Reply pattern to efficiently manage and process concurrent client-server connections, resulting in significantly faster and more reliable data processing process.',
    github: 'https://github.com/Quan-Trancs/BookStoreBackEnd'
  },
  {}
  // Add more image URLs as needed
]);

const gallery = ref();
const middleIndex = ref<number>(0);
const currentProject = ref(1);

onMounted(() => {
  gallery.value = (options.value.slice(0, 3));
  console.log(gallery.value[0]); 
});

function next() {
  const currentIndex = options.value.indexOf(gallery.value[0]);

  if (currentIndex < options.value.length - 3) {
    gallery.value = options.value.slice(currentIndex + 1, currentIndex + 4);
  } else {
    const remaining = 3 - (options.value.length - 1 - currentIndex);
    gallery.value = options.value.slice(currentIndex + 1, options.value.length)
      .concat(options.value.slice(0, remaining));
  }
  currentProject.value = options.value.indexOf(gallery.value[1]);
}

function previous() {
  const size = gallery.value.length;
  const currentIndex = options.value.indexOf(gallery.value[size - 1]);
  if (currentIndex > 2) {
    gallery.value = options.value.slice(currentIndex-3 ,currentIndex);
  } else {
    const remaining = 3 - currentIndex;
    const optionSize = options.value.length;
    gallery.value = options.value.slice(optionSize-remaining, optionSize)
      .concat(options.value.slice(0, currentIndex));
  }
  currentProject.value = options.value.indexOf(gallery.value[1]);
}
</script>

<style scoped>
.gallery{
  display:flex;
  justify-content:center;
  align-items:center;
}
</style>