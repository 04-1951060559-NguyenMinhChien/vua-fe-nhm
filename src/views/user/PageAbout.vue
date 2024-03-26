<template>
  <div>
    <div><TheHeader /></div>

    <div>
      <h1>DAY LA ABOUT</h1>
    </div>
    <div><TheFooter /></div>
  </div>
</template>
        
  <script>
import TheHeader from "../../components/TheHeader.vue";
import TheFooter from "../../components/TheFooter.vue";
export default {
  name: "PageAbout",
  props: {
    msg: String,
  },
  components: {
    TheHeader,
    TheFooter,
  },
};
</script>
        
        <style scoped>
</style>