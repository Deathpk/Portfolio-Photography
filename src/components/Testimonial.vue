<template>
    <div class="block">
        <v-container>
            <h2 class="text-center">Depoimentos</h2>

            <v-row class="wrapper">
                <v-col cols="12" md="4" v-for="item in items" :key="item.name">
                    <v-card
                    class="mx-auto"
                    max-width="400"
                    shaped
                    >
                        <v-img
                        class="white--text align-end"
                        height="200px"
                        :src="item.src"
                        >
                        </v-img>
                        <v-card-title class="title">{{ item.name }}</v-card-title>
                        <v-card-subtitle class="pb-0 role">
                            {{ item.role }}
                        </v-card-subtitle>

                        <v-card-text class="text--primary">
                            <div>" {{ item.testimony }} "</div>
                        </v-card-text>

   
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
export default {
    name: 'Testimonial',
    data(){
        return {
            items:[
                { name:"Nelson Jhony Bravo",
                  src: require('../assets/images/Nelsola.jpg'),
                  role:"Diretor executivo - Elementary Engenharia",
                  testimony:"Trabalho com o Anderson a anos , assim que temos um evento novo de lançamento de algum produto , já deixamos marcado uma sessão de fotos para divulgar os momentos uma semana antes , Recomendo muito!"
                },
                 { name:"Robson Garcia Valentim",
                  src: require('../assets/images/Bernardo.jpg'),
                  role:"Tech Lead - Today's Artisans",
                  testimony:"Sempre contratamos o Anderson para salvar os momentos importantes dos eventos de nossa empresa. É um profissional dedicado , eu diria diferenciado , conversando sempre abertamente com o cliente , e sempre propondo ideias para melhorias."
                },
                
            ]
        }
    }
}
</script>

<style scoped>
    .pb-0{
        margin-bottom:0.5rem;
    }
    .wrapper{
        display: flex;
        align-items: center;
        justify-content: center;
        padding:40px;
    }

</style>