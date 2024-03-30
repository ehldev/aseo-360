<template>
  <section id="testimonies" class="container mt-[60px] md:mt-[140px] mx-auto">
    <h3 class="text-base text-aseo-primary font-medium" data-aos="zoom-in">Testimonios</h3>

    <h2 class="text-3xl tracking-[-1.92px] font-semibold mt-4 md:text-5xl" data-aos="zoom-in" data-aos-delay="500">
      La experiencia con <span class="text-aseo-primary">ASEO360</span>
    </h2>

    <p class="text-aseo-gray-4 text-[18px] mt-6 lg:max-w-[857px]">
      Escucha lo que nuestros clientes tienen que decir sobre nuestra limpieza de colchones. Cada opinión refleja nuestro compromiso con la calidad y el bienestar que aportamos a sus hogares.
    </p>

    <!-- Mobile -->
    <swiper class="swiper swiper-testimonials mt-[62px] lg:hidden" :options="swiperOptionMobile" data-aos="zoom-in" data-aos-delay="500">
      <swiper-slide
        class="flex justify-center items-center"
        v-for="item in list"
        :key="item"
      >
        <TestimonialCard :data="item" />
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
        v-for="item in list"
        :key="item"
      >
        <TestimonialCard :data="item" />
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
        loop: true
      },
      swiperOptionDesktop: {
        slidesPerView: 4,
        spaceBetween: 26,
        navigation: {
          nextEl: ".swiper-custom-next",
          prevEl: ".swiper-custom-prev"
        },
        loop: true
      },
      list: [
        {
          name: 'R. Díaz',
          address: 'San Isidro',
          comment: 'Desde que limpiaron mi colchón, jamás dormí mejor. Se siente increíble despertar tan descansado.'
        },
        {
          name: 'M. Luján',
          address: 'Barranco',
          comment: 'Increíble el cambio en mi colchón después de su servicio, ahora duermo como un bebé, ¡una maravilla!'
        },
        {
          name: 'C. Huerta',
          address: 'Surco',
          comment: 'Renové totalmente mi descanso con su servicio. El cambio ha sido notable, ¡muy recomendado!'
        },
        {
          name: 'E. Vargas',
          address: 'Lince',
          comment: 'Después de la limpieza, mi colchón está sin una sola mancha y super fresco. Las noches son otra cosa.'
        },
        {
          name: 'G. Torres',
          address: 'La Molina',
          comment: 'Realmente no sabía lo que me perdía hasta que mi colchón quedó como nuevo.'
        },
        {
          name: 'L. Prado',
          address: 'Jesús María',
          comment: 'Parece magia, pero mi colchón parece recién comprado y mis noches son de otro nivel. Gracias.'
        },
        {
          name: 'S. Ortega',
          address: 'Magdalena',
          comment: 'El resultado fue impresionante, no solo luce bien, sino que mis sueños son mucho más dulces.'
        },
        {
          name: 'J. Cueva',
          address: 'Chorrillos',
          comment: 'Mis noches ahora son de lujo, todo gracias a cómo dejaron mi colchón, un 10/10 sin duda.'
        },
        {
          name: 'K. Rojas',
          address: 'San Miguel',
          comment: 'Este servicio transformó mi descanso por completo. Sueño profundamente gracias a mi colchón renovado.'
        },
        {
          name: 'P. Mendoza',
          address: 'Miraflores',
          comment: 'Dormir bien se ha convertido en mi nuevo normal, todo gracias al increíble trabajo en mi colchón.'
        }
      ]
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
