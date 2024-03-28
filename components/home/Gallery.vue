<template>
  <section class="container mt-12 mx-auto">
    <h2 class="text-5xl font-medium">Existe un antes y un después</h2>

    <div class="mt-10">
      <div class="flex flex-col lg:grid lg:grid-cols-2">
        <div class="mb-4 lg:mb-0">
          <img src="@/assets/images/gallery/gallery-1.png" alt="Galería Aseo360" />
        </div>

        <div class="mb-4 lg:mb-0">
          <img src="@/assets/images/gallery/gallery-2.png" alt="Galería Aseo360" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import CoolLightBox from "vue-cool-lightbox";
import "vue-cool-lightbox/dist/vue-cool-lightbox.min.css";

export default {
  name: "Gallery",
  data() {
    return {
      index: null,
      swiperOption: {
        slidesPerView: 1,
        loop: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      }
    };
  },
  components: {
    CoolLightBox,
  },
};
</script>
