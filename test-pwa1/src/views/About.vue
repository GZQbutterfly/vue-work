<template>
  <div class="about">
    <h1>This is an about page  eqewe</h1>
  </div>
</template>
<script>
import move from 'move-js';

export default {
    data() {
        return {};
    },
    mounted() {
        this.$nextTick(()=>{
            this.initPage();
        })
    },
    methods: {
        initPage(){
            console.log('this about', move)
        }
    }
};
</script>
<style lang="sass">

</style>
