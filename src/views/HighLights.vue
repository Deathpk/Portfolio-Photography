<template>
 <v-main>
    <Gallery
    :items="items"
    :title="'Destaques'"/>
 </v-main>    
</template>

<script>
import Gallery from '../components/Gallery'
export default {
    name: 'HighLights',
    components: {Gallery},
    data(){
        return{
            items:[
                {
                    id:1,
                    src: require("../assets/images/HighLights/img1.jpg")
                },
                {
                    id:2,
                    src: require("../assets/images/HighLights/img2.jpg")
                },
                {
                    id:3,
                    src: require("../assets/images/HighLights/img3.jpg")
                },
                 {
                    id:4,
                    src: require("../assets/images/HighLights/img4.jpg")
                },
                {
                    id:5,
                    src: require("../assets/images/HighLights/img5.jpg")
                },
                {
                    id:6,
                    src: require("../assets/images/HighLights/img6.jpg")
                },
                {
                    id:7,
                    src: require("../assets/images/HighLights/img7.jpg")
                },
                {
                    id:8,
                    src: require("../assets/images/HighLights/img8.jpg")
                },
                {
                    id:9,
                    src: require("../assets/images/HighLights/img9.jpg")
                }
            ]
        }
    }
}
</script>
