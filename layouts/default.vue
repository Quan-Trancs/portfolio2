<template>
    <div class="h-full bg-black text-white">
        <DefaultHeader />
        <div class="scroller">
            <section><Home /></section>
            <section><About /></section>
            <section><Skills /></section>
            <section><Projects /></section>
        </div>
        <p>bye</p>
    </div>
</template>

<style>
.scroller {
  height: 540px;
  overflow-y: scroll;
  scroll-snap-type: y mandatory;
}

.scroller section {
  scroll-snap-align: start;
}
</style>