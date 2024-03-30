<template>
  <div
    class="h-[328px] bg-aseo-dark-2 text-white p-[30px] rounded-[15px] relative"
  >
    <img
      src="@/assets/images/testimonials/cite.svg"
      alt="aseo- Testimonios"
      class="absolute top-[22px] right-[30px]"
    />

    <img src="@/assets/images/testimonials/user.png" alt="aseo- Testimonios" />

    <h4 class="mt-3">{{ data.name }}</h4>

    <span class="block my-4">{{ data.address }}</span>

    <p>
      {{ data.comment }}
    </p>
  </div>
</template>

<script>
export default {
  name: "TestimonialCard",
  props: {
    data: Object
  }
};
</script>
