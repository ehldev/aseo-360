<template>
  <section id="testimonies" class="container mt-[60px] md:mt-[140px] mx-auto">
    <h3 class="text-base text-aseo-primary font-medium" data-aos="zoom-in">Testimonios</h3>

    <h2 class="text-3xl tracking-[-1.92px] font-semibold mt-4 md:text-5xl" data-aos="zoom-in" data-aos-delay="500">
      La experiencia con <span class="text-aseo-primary">ASEO360</span>
    </h2>

    <p class="text-aseo-dark mt-6">
      Escucha lo que nuestros clientes tienen que decir sobre nuestra limpieza de colchones. Cada opinión refleja nuestro compromiso con la calidad y el bienestar que aportamos a sus hogares.
    </p>

    <!-- Mobile -->
    <swiper class="swiper swiper-testimonials mt-[62px] lg:hidden" :options="swiperOptionMobile" data-aos="zoom-in" data-aos-delay="500">
      <swiper-slide
        class="flex justify-center items-center"
        v-for="item in 4"
        :key="item"
      >
        <TestimonialCard />
      </swiper-slide>

      <div class="swiper-button-prev swiper-custom-prev" slot="button-prev">
        <img
          src="@/assets/images/general-icons/carousel-arrow-left.svg"
          alt="Slide anterior"
        />
      </div>
      <div class="swiper-button-next swiper-custom-next" slot="button-next">
        <img
          src="@/assets/images/general-icons/carousel-arrow-right.svg"
          alt="Slide siguiente"
        />
      </div>
    </swiper>

    <!-- Desktop -->
    <swiper
      class="swiper swiper-testimonials hidden mt-[62px] md:mt-[18px] lg:block"
      :options="swiperOptionDesktop"
      data-aos="zoom-in" data-aos-delay="700"
    >
      <swiper-slide
        class="flex justify-center items-center"
        v-for="item in 8"
        :key="item"
      >
        <TestimonialCard />
      </swiper-slide>

      <div class="swiper-button-prev swiper-custom-prev" slot="button-prev">
        <img
          src="@/assets/images/general-icons/carousel-arrow-left.svg"
          alt="Slide anterior"
        />
      </div>
      <div class="swiper-button-next swiper-custom-next" slot="button-next">
        <img
          src="@/assets/images/general-icons/carousel-arrow-right.svg"
          alt="Slide siguiente"
        />
      </div>
    </swiper>
  </section>
</template>

<script>
import TestimonialCard from "./testimonials/TestimonialCard.vue";

export default {
  name: "Testimonials",
  data() {
    return {
      swiperOptionMobile: {
        slidesPerView: 1,
        navigation: {
          nextEl: ".swiper-custom-next",
          prevEl: ".swiper-custom-prev"
        },
        autoplay: {
          delay: 2500,
          disableOnInteraction: false
        },
        loop: true
      },
      swiperOptionDesktop: {
        slidesPerView: 4,
        spaceBetween: 26,
        navigation: {
          nextEl: ".swiper-custom-next",
          prevEl: ".swiper-custom-prev"
        },
        autoplay: {
          delay: 2500,
          disableOnInteraction: false
        },
        loop: true
      },
    };
  },
  components: {
    TestimonialCard,
  },
};
</script>

<style lang="postcss">
@import "~/assets/styles/components/home/testimonials.css";
</style>
