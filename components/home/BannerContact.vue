<template>
  <section class="container mt-12 mx-auto relative">
    <div class="bg-aseo-primary flex text-white p-12 rounded-md lg:flex-row">
      <div>
        <h3 class="text-[40px] font-semibold" v-if="type == 'main'">
          ¿Listo para despertar en un <br />
          colchón profundamente limpio?
        </h3>

        <h3 class="text-[40px] font-semibold" v-else>
          ¿Preparado para disfrutar de <br />
          muebles profundamente limpios?
        </h3>

        <a
          href="https://wa.me/51970308546?text=Hola%20quiero%20información%20sobre%20sus%20servicios."
          target="_blank"
          class="flex justify-center items-center bg-aseo-dark w-[241px] h-[44px] rounded-md mt-10"
        >
          {{
            type == "main"
              ? "Renueva tu colchón Hoy"
              : "Renueva tus muebles Hoy"
          }}
        </a>
      </div>

      <div>
        <img
          src="@/assets/images/contact/main-image.svg"
          alt="Aseo360"
          class="w-[300px] lg:absolute bottom-0 right-6"
        />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "BannerContact",
  props: {
    type: String,
  },
};
</script>
