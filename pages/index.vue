<template>
  <div>
    <AppHeader />

    <AppBanner
      title="Limpieza de colchones en Lima"
      description="Revitaliza tu hogar con nuestra experta limpieza de colchones en Lima. Un servicio que elimina efectivamente ácaros, manchas y olores, garantizando tu confort y salud."
    />

    <Offer :title="offerTitle" :description="offerDescription" />

    <AboutAseo360 type="main" />

    <Gallery />

    <Prices type="main" />

    <Testimonials type="main" />

    <BannerContact type="main" />

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
        '<span class="block">Promoción del mes:</span> <span class="block">10% de descuento en el</span> segundo colchón',
      offerDescription:
        "Este mes, tu segundo colchón recibe un 20% de descuento. Es el momento perfecto para renovar la limpieza y frescura en todos tus espacios. ¡No dejes pasar esta oportunidad única de disfrutar de un ambiente más limpio y saludable con ASEO360!",
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
