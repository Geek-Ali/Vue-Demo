<template>
  <h1>Vue组件基础！</h1>
  <h3>{{UserName}}</h3>
  <hr>
  <p>Count的值：{{count}}</p>
  <button class="buttonStyle" @click="addCount">+1</button>
</template>
<script>
export default{
  name:'MyApp',
  data(){
    return{
      UserName:'Hello Vue!',
      count:0
    }
  },
  methods:{
    addCount(){
      this.count++
    }
  }
}
</script>
<style>
  .buttonStyle{
    width: 100%;
    height: 50px;
    border-radius: 30px;
    background-color: rgb(129, 129, 211);
  }
</style>