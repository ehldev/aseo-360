<template>
  <div>
    <AppHeader />

    <AppBanner
      title="Limpieza de muebles en Lima"
      description="Transforma tu espacio con nuestra especializada limpieza de muebles en Lima. Devuélveles la vida y la frescura, asegurando un ambiente puro y acogedor."
    />

    <Offer :title="offerTitle" :description="offerDescription" />

    <AboutAseo360 type="secondary" />

    <Gallery />

    <Prices type="secondary" />

    <Testimonials type="secondary" />

    <BannerContact type="secondary" />

    <AppFooter />
  </div>
</template>

<script>
import AppHeader from "@/components/layout/AppHeader.vue";
import AppBanner from "@/components/home/AppBanner.vue";
import Offer from "@/components/home/Offer.vue";
import AboutAseo360 from "@/components/home/AboutAseo360.vue";
import Gallery from "@/components/home/Gallery.vue";
import Prices from "@/components/home/Prices.vue";
import Testimonials from "@/components/home/Testimonials.vue";
import BannerContact from "@/components/home/BannerContact.vue";
import AppFooter from "@/components/layout/AppFooter.vue";

export default {
  name: "IndexPage",
  data() {
    return {
      offerTitle:
        '<span class="block">Promoción del mes:</span> <span class="block">10% de descuento en</span> Juego de muebles 321',
      offerDescription:
        "Este mes, embellece tu sala con un 10% de descuento en nuestro paquete de limpieza para juegos de muebles 3-2-1. Aprovecha esta oportunidad única para revitalizar tus espacios con ASEO360.",
    };
  },
  components: {
    AppHeader,
    AppBanner,
    Offer,
    AboutAseo360,
    Gallery,
    Prices,
    Testimonials,
    BannerContact,
    AppFooter,
  },
};
</script>
