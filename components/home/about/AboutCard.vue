<template>
  <div class="mb-6">
    <div class="flex">
      <img
        :src="require(`@/assets/images/about/${imageFolder}/Icon-${i + 1}.svg`)"
        alt=""
        class="mr-2"
      />
      <h4 class="text-[20px] text-aseo-dark font-semibold">
        {{ data.title }}
      </h4>
    </div>

    <p class="mt-3 text-aseo-dark font-normal text-[18px] text-opacity-60">
      {{ data.description }}
    </p>
  </div>
</template>

<script>
export default {
  name: "AboutCard",
  props: {
    data: Object,
    i: Number,
    type: String
  },
  computed: {
    imageFolder() {
      return this.type == 'main' ? 'list-1' : 'list-2'
    }
  }
};
</script>
