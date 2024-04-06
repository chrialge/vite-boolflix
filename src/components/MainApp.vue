<script>
import MainCard from './MainCard.vue';
import { state } from '../state'

export default {
    name: 'MainApp',
    props: {
        arrayFilmsAndSeries: Array
    },
    data() {
        return {
            state,
        }
    },
    components: {
        MainCard,
    },
    mounted() {
    }
}
</script>
<template>
    <main id="site_main">
        <div class="container">
            <div class="row">
                <!-- cicla per tutti gli elementi dell'arrayFilmsAndSeries  -->
                <div class="col" v-for="filmAndSerie in arrayFilmsAndSeries">
                    <!-- gli passo il singolo elemento per ogni elemento al componente figlio -->
                    <MainCard :filmAndSerie="filmAndSerie" />
                </div>
            </div>
        </div>

    </main>
</template>



<style lang="scss"></style>