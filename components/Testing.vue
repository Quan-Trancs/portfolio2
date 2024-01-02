<template>
  <div>
    <div class="text-black">.</div>
    <div>
      <div class="mx-10 px-20 mb-10">
        <div class="mt-5 text-5xl font-bold text-center">Personal Projects</div>
      </div>
      <div class="w-full pt-5">
        <div class="flex items-center justify-center">
          <button @click="scrollGallery(-1)">Previous</button>
          <div ref="gallery" class="gallery-container overflow-x-auto mx-4 rounded-xl bg-black relative">
            <div ref="innerGallery" class="pt-5 flex items-center justify-center gallery">
              <a class="object-fill h-30 w-20 bg-white rounded-lg optionz"></a>
              <a class="object-fill h-30 w-20 bg-blue-500 rounded-lg optionz"></a>
              <a class="object-fill h-30 w-20 bg-blue-300 rounded-lg optionz"></a>
              <!-- Add other 'a' elements here -->
            </div>
          </div>
          <button @click="scrollGallery(1)">Next</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

const gallery = ref<HTMLElement | null>(null);
const innerGallery = ref<HTMLElement | null>(null);
const optionzs = ref<HTMLElement[]>([]);
const middleIndex = ref<number>(0);

onMounted(() => {
  const elements = document.querySelectorAll<HTMLElement>('.optionz');
  optionzs.value = Array.from(elements);

  middleIndex.value = Math.round((optionzs.value.length - 1) / 2);

  updateSizes();

  gallery.value?.addEventListener('scroll', updateSizes);
});

onUnmounted(() => {
  gallery.value?.removeEventListener('scroll', updateSizes);
});

function updateSizes() {
  if (!gallery.value || !innerGallery.value) return;

  const galleryWidth = gallery.value.clientWidth;
  const galleryScroll = gallery.value.scrollLeft;
  const maxScroll = gallery.value.scrollWidth - galleryWidth;

  optionzs.value.forEach((optionz, i) => {
    const distanceFromMiddle = Math.abs(middleIndex.value - i);
    const baseSize = 50; // Base size for elements
    const scaleFactor = 5; // Scaling factor

    const size = baseSize + scaleFactor * (middleIndex.value - distanceFromMiddle);

    const elementOffset = i * (size + 20); // Adjust 20 for margin
    const isVisible =
      elementOffset >= galleryScroll && elementOffset <= galleryScroll + galleryWidth;

    optionz.style.width = `${isVisible ? size : baseSize}px`;
    optionz.style.height = `${isVisible ? size : baseSize}px`;
  });

  const visibleElements = optionzs.value.filter((optionz, i) => {
    const elementOffset = i * (50 + 20); // Adjust 20 for margin
    return (
      elementOffset >= galleryScroll && elementOffset <= galleryScroll + galleryWidth
    );
  });

  const middleVisibleIndex = Math.floor(visibleElements.length / 2);
  const middleElement = visibleElements[middleVisibleIndex];
  const middleElementOffset = middleVisibleIndex * (50 + 20); // Adjust 20 for margin

  const scrollToMiddle = middleElementOffset - galleryWidth / 2 + middleElement.clientWidth / 2;
  innerGallery.value.scrollLeft = scrollToMiddle;

  // Looping effect
  if (galleryScroll === 0) {
    gallery.value.scrollLeft = maxScroll;
  } else if (galleryScroll >= maxScroll) {
    gallery.value.scrollLeft = 0;
  }
}

function scrollGallery(direction: number) {
  if (!gallery.value || !innerGallery.value) return;

  const scrollAmount = gallery.value.clientWidth * direction;
  innerGallery.value.scrollBy({
    left: scrollAmount,
    behavior: 'smooth',
  });
}
</script>

<style>
.gallery {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px; /* Added padding for better visualization */
}

.optionz {
  width: 50px;
  height: 50px;
  margin: 10px;
  transition: width 0.3s, height 0.3s; /* Add transitions for smooth scaling */
}

.gallery-container {
  width: 700px;
  overflow-x: hidden; /* Hide scrollbar, will be handled by innerGallery */
  display: flex;
  justify-content: center;
  scroll-snap-type: x mandatory;
  position: relative;
}

.inner-gallery {
  display: flex;
  scroll-behavior: smooth;
}
</style>