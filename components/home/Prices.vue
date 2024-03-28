<template>
  <section id="prices" class="prices container mt-12 mx-auto">
    <div class="text-center">
      <h3 class="text-base font-medium text-aseo-primary">Precios</h3>

      <h2 class="text-5xl font-medium">Existe un antes y un después</h2>
    </div>

    <div class="grid grid-cols-1 gap-4 mt-10 lg:grid-cols-2">
      <div class="py-6 px-6 bg-aseo-light" v-for="(item, i) in list" :key="i">
        <h4 class="w-[300px] text-[20px] bg-aseo-primary text-white text-center rounded-2xl mx-auto">{{ item.title }}</h4>

        <div class="flex flex-col mt-3 lg:flex-row">
          <div class="price-card pt-6 pr-6">
            <div class="flex items-center">
              <span class="text-[35px] text-aseo-dark text-opacity-60 font-medium mr-3">S/</span>
              <h5 class="text-[70px] text-aseo-dark font-medium">{{ item.price }}</h5>
            </div>

            <span class="flex justify-center items-center w-[171px] h-[22px] text-xs text-aseo-secondary bg-aseo-primary bg-opacity-10">precio no incluye IGV</span>
          </div>

          <div class="pt-8 px-6">
            <ul>
              <li class="flex items-center mb-2" v-for="service in item.services" :key="service">
                <img src="@/assets/images/prices/Symbol.svg" :alt="`Aseo 360 - ${service}`" class="mr-2">
                {{ service }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Prices",
  data() {
    return {
      list: [
        {
          title: "Colchón de 1 1/2  Plaza",
          price: 120,
          services: [
            "Servicio a domicilio",
            "Secado al 100%",
            "Eliminación de ácaros",
            "Eliminación de manchas",
          ],
        },
        {
          title: "Colchón de 2  Plazas",
          price: 140,
          services: [
            "Servicio a domicilio",
            "Secado al 100%",
            "Eliminación de ácaros",
            "Eliminación de manchas",
          ],
        },
        {
          title: "Colchón Queen",
          price: 160,
          services: [
            "Servicio a domicilio",
            "Secado al 100%",
            "Eliminación de ácaros",
            "Eliminación de manchas",
          ],
        },
        {
          title: "Colchón King",
          price: 180,
          services: [
            "Servicio a domicilio",
            "Secado al 100%",
            "Eliminación de ácaros",
            "Eliminación de manchas",
          ],
        },
      ],
    };
  },
};
</script>

<style lang="postcss">
.prices .price-card {
  border-right: 1px solid rgba(146, 146, 146, 0.15);
}
</style>
