<script>
import MainCard from './MainCard.vue';

export default {
    name: 'MainApp',
    props: {
        arrayFilmsAndSeries: Array
    },
    data() {
        return {

        }
    },
    components: {
        MainCard,
    },
    mounted() {
        console.log(this.arrayFilmsAndSeries.length)
    }
}
</script>
<template>
    <main id="site_main">
        <div class="container">
            <div class="row">
                <div class="col" v-for="filmAndSerie in arrayFilmsAndSeries">
                    <MainCard :filmAndSerie="filmAndSerie"  />
                </div>
            </div>
        </div>

    </main>
</template>



<style lang="scss"></style>