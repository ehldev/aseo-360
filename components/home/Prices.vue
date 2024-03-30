<template>
  <section id="prices" class="prices container mt-12 mx-auto">
    <div class="text-center">
      <h3 class="text-base font-medium text-aseo-primary">Precios</h3>

      <h2 class="text-5xl font-medium">Existe un antes y un después</h2>
    </div>

    <div class="grid grid-cols-1 gap-4 mt-10 lg:grid-cols-2">
      <div
        class="py-6 px-6 bg-aseo-light rounded-2xl"
        v-for="(item, i) in list"
        :key="i"
      >
        <h4
          class="w-[300px] text-[20px] bg-aseo-primary text-white text-center rounded-2xl mx-auto"
          v-html="item.title"
        ></h4>

        <div class="flex flex-col mt-3 md:flex-row md:justify-center">
          <div
            class="price-card flex flex-col justify-content-center items-center pt-6 pr-6 lg:pb-8 lg:justify-start lg:items-start"
          >
            <div class="flex items-center">
              <span
                class="text-[35px] text-aseo-dark text-opacity-60 font-medium mr-3"
                >S/</span
              >
              <h5 class="text-[70px] text-aseo-dark font-medium">
                {{ item.price }}
              </h5>
            </div>

            <span
              class="flex justify-center items-center w-[171px] h-[22px] text-xs text-aseo-secondary bg-aseo-primary bg-opacity-10"
              >precio no incluye IGV</span
            >
          </div>

          <div class="pt-8 px-6">
            <ul>
              <li
                class="flex items-center mb-2"
                v-for="service in item.services"
                :key="service"
              >
                <img
                  src="@/assets/images/prices/Symbol.svg"
                  :alt="`Aseo 360 - ${service}`"
                  class="mr-2"
                />
                {{ service }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div
      class="flex flex-col justify-center items-center text-center mt-10 py-4 border-t-2 border-b-2 border-solid border-aseo-primary md:flex-row md:w-[545px] md:mx-auto"
    >
      <p class="text-aseo-primary text-[18px] font-medium italic mr-4">
        Precios sujeto a la ubicación del servicio
      </p>
      <img
        src="@/assets/images/prices/cite.svg"
        alt="Precios Aseo360"
        class="mt-4 md:mt-0"
      />
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
          title: "Colchón de 1 <span class='text-xs'>1/2</span>  Plaza",
          price: 130,
          services: [
            "Servicio a domicilio",
            "Secado al 100%",
            "Eliminación de ácaros",
            "Eliminación de manchas",
          ],
        },
        {
          title: "Colchón de 2  Plazas",
          price: 150,
          services: [
            "Servicio a domicilio",
            "Secado al 100%",
            "Eliminación de ácaros",
            "Eliminación de manchas",
          ],
        },
        {
          title: "Colchón Queen",
          price: 170,
          services: [
            "Servicio a domicilio",
            "Secado al 100%",
            "Eliminación de ácaros",
            "Eliminación de manchas",
          ],
        },
        {
          title: "Colchón King",
          price: 190,
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
