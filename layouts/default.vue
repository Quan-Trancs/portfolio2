<template>
    <div class="h-full bg-black text-white">
        <div class="scroller">
            <section class="sticky top-0"><DefaultHeader /></section>
            <section id='home' class="h-10"></section>
            <section id=''><Home /></section>
            <section id='about'><About /></section>
            <section id='skill'><Skills /></section>
            <section id='projects'><Projects /></section>
            <section id='experiences'><Experiences /></section>
            <div class="text-sm text-center text-gray-400">Designed and Built By Quan Tran (Dec 2023)</div>
        </div>
        
    </div>
</template>

<style>
.scroller {
  height: 620px;
  overflow-y: scroll;
  scroll-snap-type: y mandatory;
}

.scroller section {
  scroll-snap-align: start;
}
</style>