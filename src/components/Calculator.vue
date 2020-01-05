<template>
  <div class="calculator">
    <div class="display">hello</div>
    <div>hello</div>
    <div>hello</div>
    <div>hello</div>
    <div>hello</div>
  </div>
</template>

<script>
export default {
  name: "Calculator",
  props: {
    msg: String
  }
};
</script>

<style scoped>
.calculator {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: minmax(50px, auto);
}

.display {
  grid-column: 1 / 5;
  background-color: cornflowerblue;
}
</style>
