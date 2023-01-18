<template>
  <div>
    <label for="title" >
    <input type="text" id="title" :value="task.title" readonly/> 
  </label>
  </div>
  
</template>

<script>
export default {
    props:{
        task:{
            type:Object,
            require:true,
            default:()=>({id:'',title:'',state:''}),
            validator:()=>{}
        }
    }

}
</script>

<style>

</style>