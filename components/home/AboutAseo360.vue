<template>
  <section class="about container mt-12 mx-auto">
    <h3 class="text-base font-medium text-aseo-primary">¿Por qué elegirnos?</h3>

    <h2 class="text-5xl font-semibold mt-3">
      Excelencia en cada detalle: <br />
      Limpieza y cuidado sin precedentes
    </h2>

    <p class="max-w-[760px] mt-8">
      Descubre por qué ASEO360 es tu mejor opción para servicios de limpieza en
      Lima. Nos dedicamos a superar tus expectativas, ofreciendo no solo
      limpieza, sino tranquilidad, salud, y bienestar a través de nuestro
      trabajo meticuloso y personalizado.
    </p>

    <div class="lg:hidden">
      <swiper class="swiper h-[250px]" :options="swiperOption">
        <swiper-slide
          class="flex justify-center items-center"
          v-for="(item, i) in list"
          :key="i"
        >
          <div class="mb-6">
            <div class="flex">
              <img
                :src="require(`@/assets/images/about/Icon-${i + 1}.svg`)"
                alt=""
                class="mr-2"
              />
              <h4 class="text-[20px] text-aseo-dark font-semibold">
                {{ item.title }}
              </h4>
            </div>

            <p class="mt-3">
              {{ item.description }}
            </p>
          </div>
        </swiper-slide>

        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>

    <div class="mt-8 hidden lg:grid lg:grid-cols-3 lg:gap-4">
      <div class="mb-6" v-for="(item, i) in list" :key="i">
        <div class="flex">
          <img
            :src="require(`@/assets/images/about/Icon-${i + 1}.svg`)"
            alt=""
            class="mr-2"
          />
          <h4 class="text-[20px] text-aseo-dark font-semibold">
            {{ item.title }}
          </h4>
        </div>

        <p class="mt-3">
          {{ item.description }}
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Aseo360",
  data() {
    return {
      swiperOption: {
        slidesPerView: 1,
        loop: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      },
      list: [
        {
          title: "Secado Completo",
          description:
            "Nuestro servicio de limpieza de colchones asegura una entrega con secado total, listos para usarse inmediatamente después de nuestra intervención.",
          icon: "",
        },
        {
          title: "Innovación",
          description:
            "Nuestras técnicas avanzadas transforman tu entorno, ofreciendo soluciones de limpieza revolucionarias adaptadas a tus necesidades.",
          icon: "",
        },
        {
          title: "Eficacia",
          description:
            "Garantizamos una limpieza profunda y duradera, con métodos probados que dejan tus espacios impecables.",
          icon: "",
        },
        {
          title: "Salud",
          description:
            "Utilizamos productos y procedimientos que cuidan tu salud y la de tu familia, eliminando alérgenos y bacterias sin comprometer el ambiente.",
          icon: "",
        },
        {
          title: "Confiabilidad",
          description:
            "Nuestro equipo está altamente capacitado y comprometido con la excelencia, asegurando servicios de la más alta calidad.",
          icon: "",
        },
        {
          title: "Sostenibilidad",
          description:
            " Optamos por técnicas y productos ecológicos, demostrando que una limpieza profunda puede ser amigable con el planeta.",
          icon: "",
        },
      ],
    };
  },
};
</script>
