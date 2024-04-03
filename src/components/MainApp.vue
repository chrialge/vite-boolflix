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
            style: "/flat/32.png",
            languageFlag: this.language,
            urlFlag: 'https://flagsapi.com',
            flag: ''
        }
    },
    methods:{

        flagGenerate(language){
            console.log(this.languageFlag)
            this.languageFlag = (language).toUpperCase()
            // condizione se la lingua inglese trasformare per prendere la giusta bandiera
            if(this.languageFlag == 'EN'){
                this.languageFlag = 'GB'
                this.flag = this.urlFlag + '/' + this.languageFlag + this.style
                return this.flag
            } 
            // condizione se la lingua giapponese trasformare per prendere la giusta bandiera
            else if(this,this.languageFlag == 'JA'){
                this.languageFlag = 'JP'
                this.flag = this.urlFlag + '/' + this.languageFlag + this.style
                return this.flag
            }
            // condizione se la lingua cinese trasformare per prendere la giusta bandiera
            else if(this,this.languageFlag == 'ZH'){
                this.languageFlag = 'CN'
                this.flag = this.urlFlag + '/' + this.languageFlag + this.style
                return this.flag
            }
            // condizione se la lingua coreana trasformare per prendere la giusta bandiera
            else if(this,this.languageFlag == 'KO'){
                this.languageFlag = 'KR'
                this.flag = this.urlFlag + '/' + this.languageFlag + this.style
                return this.flag
            }
            // condizione se la lingua del cameron trasformare per prendere la giusta bandiera
            else if(this,this.languageFlag == 'FA'){
                this.languageFlag = 'CM'
                this.flag = this.urlFlag + '/' + this.languageFlag + this.style
                return this.flag
            }
            // altrimenti usare il valore di language
            else{
                this.flag = this.urlFlag + '/' + this.languageFlag + this.style
                return this.flag
            }
        }
    },
    mounted(){
        console.log(this.titleOriginal)
    }
}
</script>
<template>
    <ul>
        <li>{{ title}}</li>
        <li>{{ titleOriginal }}</li>
        <li v-if="flagGenerate(language)"><img :src="flag" alt="">{{ language }}</li>
        <li>{{ vote }}</li>
    </ul>
</template>



<style lang="scss"></style>