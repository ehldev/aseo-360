<template>
  <div id="home" class="container mx-auto grid md:grid-cols-2 pt-12">
    <div class="text-center md:text-left">
      <span
        class="text-sm text-aseo-primary font-medium animate__animated animate__fadeInUp animate__delay-3s"
        >👋 ¡Hola! Somos Aseo360</span
      >

      <div class="w-[273px] mx-auto md:w-auto">
        <h1
          class="text-4xl font-semibold mt-3 md:mt-2 md:text-5xl md:leading-[60px] lg:text-[56px] animate__animated animate__fadeInRight"
        >
          {{ title }}
        </h1>
        <p
          class="text-base text-aseo-gray-2 text-opacity-60 mt-6 md:text-lg animate__animated animate__fadeInRight animate__delay-1s"
        >
          {{ description }}
        </p>
      </div>

      <p
        class="mt-9 text-xs text-aseo-gray-2 text-opacity-60 font-medium md:mt-10 animate__animated animate__fadeInRight animate__delay-1s"
      >
        CONSÍGUE UNA COTIZACIÓN, ¡ES GRATIS!
      </p>

      <a
        href="https://wa.me/51970308546?text=Hola%20quiero%20información%20sobre%20sus%20servicios."
        target="_blank"
        class="w-[148px] h-[44px] mx-auto flex justify-center items-center text-white font-semibold bg-aseo-primary mt-4 px-6 rounded-md animate__animated animate__fadeInRight animate__delay-2s md:mx-0"
      >
        Contáctanos
      </a>
    </div>

    <div class="flex justify-center mt-4 md:mt-0">
      <img
        src="@/assets/images/banner/banner.svg"
        alt="aseo Perú"
        data-aos="zoom-in"
        data-aos-delay="500"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "AppBanner",
  data() {
    return {
      currentImage: 1,
    };
  },
  mounted() {
    this.setMainImage();
  },
  props: {
    title: String,
    description: String,
  },
  methods: {
    setMainImage() {
      this.currentImage = Math.floor(Math.random() * 4) + 1;
    },
  },
};
</script>
