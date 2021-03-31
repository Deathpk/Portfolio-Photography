<template>
 <v-main>
    <Gallery 
    :items="items"
    :title="'Casamentos'"/>
 </v-main>    
</template>

<script>
import Gallery from '../components/Gallery'
export default {
    name: 'Weddings',
    components: {Gallery},
    data(){
        return{
            items:[
                {
                    id:1,
                    src: require("../assets/images/Weddings/Wedding-1.jpg")
                },
                {
                    id:2,
                    src: require("../assets/images/Weddings/Wedding-2.jpg")
                },
                {
                    id:3,
                    src: require("../assets/images/Weddings/Wedding-3.jpg")
                },
                 {
                    id:4,
                    src: require("../assets/images/Weddings/Wedding-4.jpg")
                },
                {
                    id:5,
                    src: require("../assets/images/Weddings/Wedding-5.jpg")
                },
                {
                    id:6,
                    src: require("../assets/images/Weddings/Wedding-6.jpg")
                },
                {
                    id:7,
                    src: require("../assets/images/Weddings/Wedding-7.jpg")
                },
                {
                    id:8,
                    src: require("../assets/images/Weddings/Wedding-8.jpg")
                },
                {
                    id:9,
                    src: require("../assets/images/Weddings/Wedding-9.jpg")
                }
            ]
        }
    }
}
</script>
