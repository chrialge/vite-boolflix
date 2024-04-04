<script>
export default {
    name: 'MainCard',
    props: {
        filmsAndSeries: Object
    },
    data() {
        return {
            style: "/flat/32.png",
            urlFlag: 'https://flagsapi.com',

        }
    },
    methods: {

        flagGenerate(language) {
            let lenguage = (language).toUpperCase();
                let flag;
                // condizione se la lingua inglese trasformare per prendere la giusta bandiera
                if(lenguage == 'EN'){
                    lenguage = 'GB';
                    flag = this.urlFlag + '/' + lenguage + this.style;
                    return flag;
                } 
                // condizione se la lingua giapponese trasformare per prendere la giusta bandiera
                else if(this,lenguage == 'JA'){
                    lenguage = 'JP';
                    flag = this.urlFlag + '/' + lenguage + this.style;
                    return flag;
                }
                // condizione se la lingua cinese trasformare per prendere la giusta bandiera
                else if(this,lenguage == 'ZH'){
                    lenguage = 'CN';
                    flag = this.urlFlag + '/' + lenguage + this.style;
                    return flag;
                }
                // condizione se la lingua coreana trasformare per prendere la giusta bandiera
                else if(this,lenguage == 'KO'){
                    lenguage = 'KR';
                    flag = this.urlFlag + '/' + lenguage + this.style;
                    return flag;
                }
                // condizione se la lingua del cameron trasformare per prendere la giusta bandiera
                else if(this,lenguage == 'FA'){
                    lenguage = 'CM';
                    flag = this.urlFlag + '/' + lenguage + this.style;
                    return flag;
                }
                // condizione se la lingua grecco moderno trasformare per prendere la giusta bandiera
                else if(this,lenguage == 'EL'){
                    lenguage = 'GR';
                    flag = this.urlFlag + '/' + lenguage + this.style;
                    return flag;
                }
                // condizione se la lingua ceca trasformare per prendere la giusta bandiera
                else if(this,lenguage == 'CS'){
                    lenguage = 'CZ';
                    flag = this.urlFlag + '/' + lenguage + this.style;
                    return flag;
                }
                // altrimenti usare il valore di language
                else{
                    flag = this.urlFlag + '/' + lenguage + this.style;
                    return flag;
                }
            }
        },
        mounted() {
            console.log(this.filmsAndSeries);
        }
    }
</script>
<template>
    <ul v-for="filmAndSerie in filmsAndSeries">
        <li><img :src="'https://image.tmdb.org/t/p/w342/' + filmAndSerie.poster_path" alt=""></li>
        <li v-if="filmAndSerie.original_name">Serie tv: {{ filmAndSerie.original_name }}</li>
        <li v-else>Film: {{ filmAndSerie.original_title }}</li>
        <li v-if="filmAndSerie.name">{{ filmAndSerie.name }}</li>
        <li v-else>{{ filmAndSerie.title }}</li>
        <li><img :src="flagGenerate(filmAndSerie.original_language)" alt="">{{ filmAndSerie.original_language }}</li>
        <li>{{ filmAndSerie.vote_average }}</li>
    </ul>
</template>



<style lang="scss"></style>