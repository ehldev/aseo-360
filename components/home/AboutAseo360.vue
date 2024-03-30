<template>
  <section class="about container mt-12 mx-auto">
    <h3 class="text-base font-medium text-aseo-primary">¿Por qué elegirnos?</h3>

    <h2 class="text-5xl font-semibold mt-3" v-if="type == 'main'">
      Excelencia en cada detalle: <br />
      Limpieza y cuidado sin precedentes
    </h2>

    <h2 class="text-5xl font-semibold mt-3" v-else>
      Compromiso con la Calidad <br />
      en Cada Fibra
    </h2>

    <p class="max-w-[760px] mt-8 text-aseo-gray-4" v-if="type == 'main'">
      Descubre por qué ASEO360 es tu mejor opción para servicios de limpieza de
      colchones en Lima. Nos dedicamos a superar tus expectativas, ofreciendo no
      solo limpieza, sino tranquilidad, salud, y bienestar a través de nuestro
      trabajo meticuloso y personalizado.
    </p>

    <p class="max-w-[760px] mt-8 text-aseo-gray-4" v-else>
      Cuando se trata de limpieza de muebles en Lima, ASEO360 se destaca por su
      dedicación y atención al detalle. Nuestros servicios especializados no
      solo limpian, sino que también protegen y revitalizan tus muebles,
      asegurando su durabilidad y belleza a lo largo del tiempo.
    </p>

    <div class="lg:hidden">
      <swiper class="swiper h-[250px]" :options="swiperOption">
        <swiper-slide
          class="flex justify-center items-center"
          v-for="(item, i) in mainList"
          :key="i"
        >
          <AboutCard :data="item" :i="i" :type="type" />
        </swiper-slide>

        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>

    <div class="mt-8 hidden lg:grid lg:grid-cols-3 lg:gap-4">
      <div v-for="(item, i) in mainList" :key="i">
        <AboutCard :data="item" :i="i" :type="type" />
      </div>
    </div>
  </section>
</template>

<script>
import AboutCard from "./about/AboutCard.vue";

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
            "Nuestro servicio de limpieza de colchones asegura una entrega con secado total, listos para usarse el mismo día después de nuestra intervención.",
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
            "Optamos por técnicas y productos ecológicos, demostrando que una limpieza profunda puede ser amigable con el planeta.",
          icon: "",
        },
      ],
      list2: [
        {
          title: "Secado Completo",
          description:
            "Nuestro servicio de limpieza de muebles asegura una entrega con secado total, listos para usarse el mismo día después de nuestra intervención.",
          icon: "",
        },
        {
          title: "Cuidado",
          description:
            "Productos amables con tus muebles: Seleccionamos cuidadosamente los productos más seguros y efectivos para cada tipo de material.",
          icon: "",
        },
        {
          title: "Durabilidad",
          description:
            "Extiende la vida de tus muebles: Nuestros servicios no solo limpian, sino que también protegen tus muebles contra el desgaste diario.",
          icon: "",
        },
        {
          title: "Rapidez",
          description:
            "Servicios eficientes, resultados duraderos: Garantizamos una limpieza profunda y rápida, minimizando la interrupción de tu rutina.",
          icon: "",
        },
        {
          title: "Expertos",
          description:
            "Profesionales cualificados: Contamos con un equipo de expertos en limpieza de muebles, capacitados en las técnicas más avanzadas.",
          icon: "",
        },
        {
          title: "Satisfacción",
          description:
            "Comprometidos con tu felicidad: Tu satisfacción es nuestra prioridad. Nos esforzamos por superar tus expectativas en cada servicio.",
          icon: "",
        },
      ]
    };
  },
  props: {
    type: String,
  },
  components: {
    AboutCard,
  },
  computed: {
    mainList() {
      return this.type == 'main' ? this.list : this.list2
    }
  }
};
</script>

<style lang="postcss">
@import "~/assets/styles/components/home/about.css";
</style>
