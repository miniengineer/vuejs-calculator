<template>
  <div class="calculator">
    <div class="display">59937987</div>
    <div class="btn">C</div>
    <div class="btn">+/-</div>
    <div class="btn">%</div>
    <div class="btn">÷</div>
    <div class="btn">7</div>
    <div class="btn">8</div>
    <div class="btn">9</div>
    <div class="btn">x</div>
    <div class="btn">4</div>
    <div class="btn">5</div>
    <div class="btn">6</div>
    <div class="btn">-</div>
    <div class="btn">1</div>
    <div class="btn">2</div>
    <div class="btn">3</div>
    <div class="btn">+</div>
    <div class="btn zero">0</div>
    <div>.</div>
    <div>=</div>
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
  font-size: 30px;
}

.display {
  grid-column: 1 / 5;
  background-color: cornflowerblue;
}

.zero {
  grid-column: 1 / 3;
}
</style>
