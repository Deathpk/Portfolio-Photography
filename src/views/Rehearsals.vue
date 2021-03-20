<template>
 <v-content>
    <Gallery 
    :items="items"
    :title="'Ensaios'"/>
 </v-content>    
</template>

<script>
import Gallery from '../components/Gallery'
export default {
    name: 'Rehearsals',
    components: {Gallery},
    data(){
        return{
            items:[
                {
                    id:1,
                    src: require("../assets/images/Rehearsals/Rehearsal-1.jpg")
                },
                {
                    id:2,
                    src: require("../assets/images/Rehearsals/Rehearsal-2.jpg")
                },
                {
                    id:3,
                    src: require("../assets/images/Rehearsals/Rehearsal-3.jpg")
                },
                 {
                    id:4,
                    src: require("../assets/images/Rehearsals/Rehearsal-4.jpg")
                },
                {
                    id:5,
                    src: require("../assets/images/Rehearsals/Rehearsal-5.jpg")
                },
                {
                    id:6,
                    src: require("../assets/images/Rehearsals/Rehearsal-6.jpg")
                },
                {
                    id:7,
                    src: require("../assets/images/Rehearsals/Rehearsal-7.jpg")
                },
                {
                    id:8,
                    src: require("../assets/images/Rehearsals/Rehearsal-8.jpg")
                },
                {
                    id:9,
                    src: require("../assets/images/Rehearsals/Rehearsal-9.jpg")
                }
            ]
        }
    }
}
</script>
