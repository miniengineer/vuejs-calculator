<template>
  <div class="calculator">
    <div class="display">{{ current || 0 }}</div>
    <div @click="clear" class="btn">C</div>
    <div @click="sign" class="btn">+/-</div>
    <div @click="percent" class="btn">%</div>
    <div class="btn operator">÷</div>
    <div class="btn">7</div>
    <div class="btn">8</div>
    <div class="btn">9</div>
    <div class="btn operator">x</div>
    <div class="btn">4</div>
    <div class="btn">5</div>
    <div class="btn">6</div>
    <div class="btn operator">-</div>
    <div class="btn">1</div>
    <div class="btn">2</div>
    <div class="btn">3</div>
    <div class="btn operator">+</div>
    <div class="btn zero">0</div>
    <div class="btn">.</div>
    <div class="btn operator">=</div>
  </div>
</template>

<script>
export default {
  name: "Calculator",
  data() {
    return {
      current: ''
    }
  },
  methods: {
    clear() {
      this.current = '0';
    },
    sign() {
      if (this.current === "0") {
        return;
      } else if (!this.current.includes("-")) {
        this.current = "-" + this.current;
      } else {
        this.current = this.current.substr(1);
      }
    },
    percent() {
      this.current = `${parseFloat(this.current) / 100}`
    }
  }
};
</script>

<style scoped>
.calculator {
  width: 400px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: minmax(50px, auto);
  font-size: 30px;
}

.display {
  grid-column: 1 / 5;
  background-color: cornflowerblue;
  color: white;
}

.zero {
  grid-column: 1 / 3;
}

.btn {
  background-color: #F2F2F2;
  border: 1px solid #999;
  cursor: pointer;
}

.operator {
  background-color: orange;
  color: white;
}
</style>
