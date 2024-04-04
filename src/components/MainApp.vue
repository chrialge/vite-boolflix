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
        console.log(this.filmsAndSeries)
    }
}
</script>
<template>
    <main id="site_main">
        <div class="container">
            <div class="row">
                <!-- <div class="col" v-for="filmsAndSeries in arrayFilmsAndSeries">
                    <MainCard :filmsAndSeries="filmsAndSeries"  />
                </div> -->
            </div>
        </div>

    </main>
</template>



<style lang="scss"></style>