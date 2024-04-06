<script>

export default {
    name: 'MainCard',
    props: {
        filmAndSerie: Object,
    },
    data() {
        return {
            style: "/flat/32.png",
            urlFlag: 'https://flagsapi.com',
            display: false,
        }
    },
    methods: {

        /**
         * funzione che genera l'url per prendere l'immagine dall'api
         * @param {string} language valore dalla chive original_language da ogni film/serie
         * return da l'url
         */
        flagGenerate(language) {

            // variabile che trasforma la stringa in maiuscolo
            let lenguage = (language).toUpperCase();

            //variabile che prendera l'url in base alle diverse condizioni
            let flag;

            // condizione se la lingua inglese trasformare per prendere la giusta bandiera
            if (lenguage == 'EN') {
                lenguage = 'GB';

                // prende la concatenazione dei valori che sara l'url
                flag = this.urlFlag + '/' + lenguage + this.style;
                return flag;
            }
            // condizione se la lingua giapponese trasformare per prendere la giusta bandiera
            else if (this, lenguage == 'JA') {
                lenguage = 'JP';

                // prende la concatenazione dei valori che sara l'url
                flag = this.urlFlag + '/' + lenguage + this.style;
                return flag;
            }
            // condizione se la lingua cinese trasformare per prendere la giusta bandiera
            else if (this, lenguage == 'ZH') {
                lenguage = 'CN';

                // prende la concatenazione dei valori che sara l'url
                flag = this.urlFlag + '/' + lenguage + this.style;
                return flag;
            }
            // condizione se la lingua coreana trasformare per prendere la giusta bandiera
            else if (this, lenguage == 'KO') {
                lenguage = 'KR';

                // prende la concatenazione dei valori che sara l'url
                flag = this.urlFlag + '/' + lenguage + this.style;
                return flag;
            }
            // condizione se la lingua del cameron trasformare per prendere la giusta bandiera
            else if (this, lenguage == 'FA') {
                lenguage = 'CM';

                // prende la concatenazione dei valori che sara l'url
                flag = this.urlFlag + '/' + lenguage + this.style;
                return flag;
            }
            // condizione se la lingua grecco moderno trasformare per prendere la giusta bandiera
            else if (this, lenguage == 'EL') {
                lenguage = 'GR';

                // prende la concatenazione dei valori che sara l'url
                flag = this.urlFlag + '/' + lenguage + this.style;
                return flag;
            }
            // condizione se la lingua ceca trasformare per prendere la giusta bandiera
            else if (this, lenguage == 'CS') {
                lenguage = 'CZ';

                // prende la concatenazione dei valori che sara l'url
                flag = this.urlFlag + '/' + lenguage + this.style;
                return flag;
            }
            // altrimenti usare il valore di language
            else {

                // prende la concatenazione dei valori che sara l'url
                flag = this.urlFlag + '/' + lenguage + this.style;
                return flag;
            }
        },

        /**
         * funzione che da il numero di stelle piene da generare
         * @param {number} vote valore della chiave vote_average da ogni film/serie
         * return da il numero di stelle piene
         */
        generateStar(vote) {
            //variabile che prende il valore e lo trasforma in un numero intero
            let number = Math.floor(vote);

            // la variabile viene divisa in due e arrotondata per eccesso 
            number = Math.ceil(number / 2);
            // console.log(number)
            return number;
        },

        /**
         * funzione che genera il numero di stelle vuote da generare 
         * @param {number} empty il return della funzione generateStar
         * return il numero di stelle vuote
         */
        generateEmptyStar(empty) {

            // costante che prende la differenza di 5 e il numero di stelle piene
            const number = 5 - empty;
            return number;
        },
    },
    computed: {

        /**
         * computed che ci restituisce un valore per capire se sono film o no
         * return ci ridara in base la condizione una stringa
         */
        movieORSeries() {

            // se hanno sto valore 
            if (this.filmAndSerie.original_title) {

                // costante che prende la stringa 'movie'
                const type = 'movie';
                // console.log(type);
                return type;
            } //altrimenti
            else {

                // constante che prende la stringa 'serie tv'
                const type = 'serie tv'
                // console.log(type);
                return type;
            }

        },


    },

    mounted() {
        this.cast
    }
}
</script>
<template>

    <!-- se si passa sopra o esce da card trasforma il valore di display -->
    <div class="card" @mouseenter="display = true" @mouseleave="display = false">
        <div class="card_image">

            <!-- se contengono il valore filmAndSerie.poster_path  prendi il suo valore(che poi utilizzeremo per prendere l'immagine)-->
            <img v-if="filmAndSerie.poster_path" :src="'https://image.tmdb.org/t/p/w342/' + filmAndSerie.poster_path"
                alt="">

            <!-- altrimenti prendi un imagine di default -->
            <img v-else src="../../public/No-Image-Placeholder.svg.png" alt="" style="width: 342px; height: 514px;">
        </div>

        <!-- si mostra se il valore di display e true -->
        <div class="card_info" v-show="display">

            <!-- se ci restituisce il computed  movieORSeries 'movie' dara questo blocco di codice-->
            <div class="title" v-if="movieORSeries === 'movie'">
                <h3>Film</h3>
                <h4>Titolo: <span class="font-regular">{{ filmAndSerie.title }}</span></h4>
                <h4>Titolo Originale: <span class="font-regular">{{ filmAndSerie.original_title }}</span></h4>
            </div>

            <!-- se ci restituisce il computed  movieORSeries 'serie tv' dara questo blocco di codice-->
            <div class="title" v-if="movieORSeries === 'serie tv'">
                <h3>Serie tv</h3>
                <h4>Titolo: <span class="font-regular">{{ filmAndSerie.name }}</span></h4>
                <h4>Titolo Originale: <span class="font-regular">{{ filmAndSerie.original_name }}</span></h4>
            </div>
            <div class="language">
                <span class="font-bold">Language: </span>

                <!-- il percorso dell'immagine viene generato dalla funzione flagGenerate e gli passiamo il parametro orginal_language del film/serie -->
                <img :src="flagGenerate(filmAndSerie.original_language)" alt="">
            </div>
            <div class="vote">

                <!-- itera per il numero di volte in base al return della funzione generateStar() e il parametro e vote_average del film/serie -->
                <i v-for="n in generateStar(filmAndSerie.vote_average)" class="fa-solid fa-star"></i>

                <!-- itera per il numero di volte in base al return della funzione generateEmptyStar() e il parametro e il return della funzione generateStar-->
                <i v-for="n in generateEmptyStar(generateStar(filmAndSerie.vote_average))"
                    class="fa-regular fa-star"></i>
            </div>
            <div class="description">
                <h5>
                    Actors:
                    <span class="font-regular" v-if="movieORSeries === 'movie'" v-for="actor in filmAndSerie.cast">
                        {{ actor + ", "}}
                    </span>
                    <span class="font-regular" v-if="movieORSeries === 'serie tv'" v-for="actor in filmAndSerie.cast">
                        {{ actor + ", " }}
                    </span>
                </h5>
                <h5>
                    Description:

                    <!-- se il valore di overview e vuoto viene inserita una descrizione di default -->
                    <span class="font-regular" v-if="filmAndSerie.overview === ''"> don't have description</span>
                    <span class="font-regular">{{ filmAndSerie.overview }}</span>
                </h5>

            </div>
        </div>
    </div>

</template>



<style lang="scss"></style>