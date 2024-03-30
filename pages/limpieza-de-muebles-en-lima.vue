<template>
  <div>
    <AppHeader />

    <AppBanner />

    <Offer />

    <AboutAseo360 />

    <Gallery />

    <Prices />

    <Testimonials />

    <BannerContact />

    <AppFooter />
  </div>
</template>

<script>
import AppHeader from '@/components/layout/AppHeader.vue'
import AppBanner from '@/components/home/AppBanner.vue'
import Offer from '@/components/home/Offer.vue'
import AboutAseo360 from '@/components/home/AboutAseo360.vue'
import Gallery from '@/components/home/Gallery.vue'
import Prices from '@/components/home/Prices.vue'
import Testimonials from '@/components/home/Testimonials.vue'
import BannerContact from '@/components/home/BannerContact.vue'
import AppFooter from '@/components/layout/AppFooter.vue'

export default {
  name: 'IndexPage',
  components: {
    AppHeader,
    AppBanner,
    Offer,
    AboutAseo360,
    Gallery,
    Prices,
    Testimonials,
    BannerContact,
    AppFooter
  }
}
</script>
