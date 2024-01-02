<template>
    <div>
        <div>.</div>
        <div class="mt-12">
            <div class="mx-10 px-20 mb-10">
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
                                <img class="h-[100px] w-[100px] bg-white rounded-lg" v-bind:src="slot.url" alt="Python"/>
                            </a>
                            <a v-if="index == 1" class="object-fill ">
                                <img class="h-[150px] w-[200px] bg-white rounded-lg" v-bind:src="slot.url" alt="Python"/>
                            </a>
                        </div>
                    </div>
                </div>
                <button @click="next()" class="h-10 w-10 mt-12 text-3xl text-neutral-100">&gt</button>
            </div>
        </div>
        <div class="flex justify-between mx-20 mb-10">
            <a class="object-fill">
                <img class="h-[260px] w-[400px] bg-white rounded-lg" v-bind:src="options[currentProject].url" alt="Python"/>
            </a>
            <div class="mr-10">
                <div class="text-center font-bold text-3xl pb-8">
                    name
                </div>
                <div class="w-[500px] text-center">
                    This project focuses on the research, development, and implementation of a precise and effective strategy to achieve a notable 90% winning probability in the universally recognized game of Rock-Paper-Scissors (RPS). Rock-Paper-Scissors, a fundamental hand game played globally, served as the foundation for our initiative to elevate player success while upholding the game's inherent simplicity and fairness.
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';

interface CustomImage {
  url: string;
}
const options = ref(<CustomImage[]>[
  { url: '/_nuxt/public/cLogo.png' },
  { url: '/_nuxt/public/javaLogo.png' },
  { url: '/_nuxt/public/sqlLogo.png' },
  { url: '/_nuxt/public/pythonLogo.png' },
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

<style>
.gallery{
  display:flex;
  justify-content:center;
  align-items:center;
}
</style>