<template>
  <section class="offer container mt-10 mx-auto md:mt-6">

    <h3 class="text-base font-medium text-aseo-primary">Oferta</h3>

    <div class="lg:h-[420px] lg:grid lg:grid-cols-2 offer-bg rounded-[20px] mt-3 pl-6">
      <div class="flex justify-center relative lg:justify-normal">
        <img src="@/assets/images/offer/offer-1.svg" alt="Oferta Aseo-360" class="mr-3 lg:absolute lg:top-0 lg:left-2">
        <img src="@/assets/images/offer/offer-2.svg" alt="Oferta Aseo-360" class="absolute bottom-0 right-6 hidden lg:block">
      </div>

      <div class="text-white mt-6 pl-6 pr-10 pb-10 flex flex-col justify-center lg:mt-0 lg:pb-0">
        <h2 class="text-[40px] font-semibold leading-8 lg:hidden">
          Promoción del mes:10% de descuento en el segundo colchón
        </h2>

        <h2 class="text-[40px] font-semibold leading-8 hidden lg:block" v-html="title">
        </h2>

        <p class="mt-6">
          {{ description }}
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Offer",
  props: {
    title: String,
    description: String
  }
};
</script>

<style lang="postcss">
.offer-bg {
  background: linear-gradient(to bottom, #101828, #3BA9B0);
  /* Para mayor compatibilidad con navegadores */
  background: -webkit-linear-gradient(top, #101828, #3BA9B0);
}
</style>
