<script>
export default {
    name: 'MainApp',
    props:{
        title: String,
        titleOriginal: String,
        vote: Number,
        language: String,
    },
    data() {
        return {
            
        }
    }
}
</script>
<template>
    <ul>
        <li>{{ title}}</li>
        <li>{{ titleOriginal }}</li>
        <li>{{ language }}</li>
        <li>{{ vote }}</li>
    </ul>
</template>



<style lang="scss"></style>