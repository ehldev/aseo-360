<template>
  <section class="offer container mt-6 mx-auto">

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

        <h2 class="text-[40px] font-semibold leading-8 hidden lg:block">
          <span class="block">Promoción del mes:</span> <span class="block">10% de descuento en el</span> segundo colchón
        </h2>

        <p class="mt-6">
          Este mes, tu segundo colchón recibe un 20% de descuento. Es el momento
          perfecto para renovar la limpieza y frescura en todos tus espacios.
          ¡No dejes pasar esta oportunidad única de disfrutar de un ambiente más
          limpio y saludable con ASEO360!
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Offer",
};
</script>

<style lang="postcss">
.offer-bg {
  background: linear-gradient(to bottom, #101828, #3BA9B0);
  /* Para mayor compatibilidad con navegadores */
  background: -webkit-linear-gradient(top, #101828, #3BA9B0);
}
</style>
