<script setup>
import { ref } from 'vue'
import Button from './components/Button.vue'
import isOperator from './constants/index'

const state = ref({
  current: '',
  lastChar: '',
  solve: ''
})

const clear = () => {
  state.value.current = ''
}

const remove = () => {
  if (state.value.current.length > 1) {
    state.value.current = state.value.current.slice(0, -1)
  } else {
    state.value.current = ''
  }
}

const append = (number) => {
  if (!state.value.current.length && isOperator(state.value.lastChar)) return
  if (isOperator(state.value.current.slice(-1)) && isOperator(number)) return

  state.value.current = `${state.value.current}${number}`

  if (state.value.current.length >= 1) {
    state.value.lastChar = state.value.current.slice(-1)
  }
}

const dot = () => {
  if (state.value.current.indexOf(',') === -1) {
    state.value.current = `${state.value.current}.`
  }
}

const equal = () => {
  if (!state.value.current.length || isOperator(state.value.lastChar)) return
  state.value.current = eval(state.value.current).toString()

  if (state.value.current.length == 1) {
    state.value.lastChar = state.value.current
  }

  state.value.lastChar = state.value.current.slice(-1)
}

const sign = () => {
  state.value.current =
    state.value.current.charAt(0) === '-' ? state.value.current.slice(1) : `-${state.value.current}`
}

const persent = () => {
  state.value.current = `${parseFloat(state.value.current) / 100}`
}
</script>

<template>
  <div class="calculator">
    <div class="display">
      <div>
        {{ state.current }}
      </div>
    </div>
    <Button :click="clear" :title="'C'"></Button>
    <Button :click="sign" :title="'-%+'" />
    <Button :click="persent" :title="'%'" />
    <Button :click="() => append('/')" class="operator" :title="'/'" />
    <Button :click="() => append(7)" :title="7" />
    <Button :click="() => append(8)" :title="8" />
    <Button :click="() => append(9)" :title="9" />
    <Button :click="() => append('*')" class="operator" :title="'*'" />
    <Button :click="() => append(4)" :title="4" />
    <Button :click="() => append(5)" :title="5" />
    <Button :click="() => append(6)" :title="6" />
    <Button :click="() => append('-')" class="operator" :title="'-'" />
    <Button :click="() => append(1)" :title="1" />
    <Button :click="() => append(2)" :title="2" />
    <Button :click="() => append(3)" :title="3" />
    <Button :click="() => append('+')" class="operator" :title="'+'" />
    <Button :click="remove" />
    <Button :click="() => append(0)" :title="'0'" />
    <Button :click="dot" class="btn" :title="','" />
    <Button :click="equal" class="btn operator" :title="'='" />
  </div>
</template>

<style scoped>
.calculator {
  width: 400px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: minmax(50px, auto);
  grid-gap: 10px;
  background-color: black;
  padding: 15px 20px;
  border-radius: 11px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
}

.display {
  display: grid;
  justify-content: end;
  grid-column: 1/5;
  font-size: 30px;
  color: #fff;
}
</style>
