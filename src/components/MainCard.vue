<script>
export default {
    name: 'MainCard',
    props: {
        filmAndSerie: Object
    },
    data() {
        return {
            style: "/flat/32.png",
            urlFlag: 'https://flagsapi.com',
            display: false
        }
    },
    methods: {

        flagGenerate(language) {
            let lenguage = (language).toUpperCase();
            let flag;
            // condizione se la lingua inglese trasformare per prendere la giusta bandiera
            if (lenguage == 'EN') {
                lenguage = 'GB';
                flag = this.urlFlag + '/' + lenguage + this.style;
                return flag;
            }
            // condizione se la lingua giapponese trasformare per prendere la giusta bandiera
            else if (this, lenguage == 'JA') {
                lenguage = 'JP';
                flag = this.urlFlag + '/' + lenguage + this.style;
                return flag;
            }
            // condizione se la lingua cinese trasformare per prendere la giusta bandiera
            else if (this, lenguage == 'ZH') {
                lenguage = 'CN';
                flag = this.urlFlag + '/' + lenguage + this.style;
                return flag;
            }
            // condizione se la lingua coreana trasformare per prendere la giusta bandiera
            else if (this, lenguage == 'KO') {
                lenguage = 'KR';
                flag = this.urlFlag + '/' + lenguage + this.style;
                return flag;
            }
            // condizione se la lingua del cameron trasformare per prendere la giusta bandiera
            else if (this, lenguage == 'FA') {
                lenguage = 'CM';
                flag = this.urlFlag + '/' + lenguage + this.style;
                return flag;
            }
            // condizione se la lingua grecco moderno trasformare per prendere la giusta bandiera
            else if (this, lenguage == 'EL') {
                lenguage = 'GR';
                flag = this.urlFlag + '/' + lenguage + this.style;
                return flag;
            }
            // condizione se la lingua ceca trasformare per prendere la giusta bandiera
            else if (this, lenguage == 'CS') {
                lenguage = 'CZ';
                flag = this.urlFlag + '/' + lenguage + this.style;
                return flag;
            }
            // altrimenti usare il valore di language
            else {
                flag = this.urlFlag + '/' + lenguage + this.style;
                return flag;
            }
        },
        generateStar(vote) {

            let number = Math.floor(vote);
            number = Math.ceil(number / 2);
            // console.log(number)
            return number;
        },
        generateEmptyStar(empty) {
            const number = 5 - empty;
            return number;
        }
    },
    computed: {
        movieORSeries(){
            if(this.filmAndSerie.original_title){
                const type = 'movie';
                // console.log(type);
                return type;
            }else{
                const type = 'serie tv'
                // console.log(type);
                return type;
            }
            
        }

    },

    mounted() {
        // console.log(this.filmAndSerie);
    }
}
</script>
<template>

    <div class="card" @mouseenter="display = true" @mouseleave="display = false">
        <div class="card_image">
            <img v-if="filmAndSerie.poster_path" :src="'https://image.tmdb.org/t/p/w342/' + filmAndSerie.poster_path"
                alt="">
            <img v-else src="../../public/No-Image-Placeholder.svg.png" alt="" style="width: 342px; height: 514px;">
        </div>
        <div class="card_info" v-show="display">
            <div class="title" v-if="movieORSeries === 'movie'">
                <h3>Film</h3>
                <h4>Titolo: <span class="font-regular">{{ filmAndSerie.title }}</span></h4>
                <h4>Titolo Originale: <span class="font-regular">{{ filmAndSerie.original_title }}</span></h4>
            </div>
            <div class="title" v-if="movieORSeries === 'serie tv'">
                <h3>Serie tv</h3>
                <h4>Titolo: <span class="font-regular">{{ filmAndSerie.name }}</span></h4>
                <h4>Titolo Originale: <span class="font-regular">{{ filmAndSerie.original_name }}</span></h4>
            </div>
            <div class="language">
                <span class="font-bold">Language: </span>
                <img :src="flagGenerate(filmAndSerie.original_language)" alt="">
            </div>
            <div class="vote">
                <i v-for="n in generateStar(filmAndSerie.vote_average)" class="fa-solid fa-star"></i>
                <i v-for="n in generateEmptyStar(generateStar(filmAndSerie.vote_average))"
                    class="fa-regular fa-star"></i>
            </div>
            <div class="description">
                <h5>
                    Description:
                    <span class="font-regular" v-if="filmAndSerie.overview === ''"> don't have description</span>
                    <span class="font-regular" >{{ filmAndSerie.overview }}</span>
                </h5>
            </div>
        </div>
    </div>

</template>



<style lang="scss"></style>