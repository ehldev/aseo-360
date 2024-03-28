<template>
  <section class="container mt-12 mx-auto">
    <h2 class="text-5xl font-medium">Existe un antes y un después</h2>

    <CoolLightBox :items="images" :index="index" @close="index = null">
    </CoolLightBox>

    <div class="mt-10">
      <div class="flex flex-col lg:grid lg:grid-cols-2">
        <div class="mb-4 lg:mb-0" v-for="(image, i) in images" :key="i">
          <img :src="image" alt="Galería Aseo360" @click="index = i" />
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
      images: [
        "https://res.cloudinary.com/ehldev/image/upload/v1711562140/aseo360/gallery-1_xkh4lq.png",
        "https://res.cloudinary.com/ehldev/image/upload/v1711562140/aseo360/gallery-2_j939qy.png",
      ],
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
