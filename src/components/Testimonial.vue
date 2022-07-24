<template>
    <div class="block">
        <v-container>
            <h2 class="text-center">Depoimentos</h2>
            <v-carousel hide-delimiters cycle>
              <v-carousel-item v-for="item in items" :key="item.name">
                <v-sheet class="wrapper" color="white">
                  <v-col cols="12" md="4">
                    <v-card
                        class="mx-auto"
                        max-height="900"
                        max-width="400"
                        color="white"
                        elevation="0"
                    >
                      <div class="client-photo white--text align-end">
                        <v-img
                            class="rounded-circle"
                            height="200px"
                            width="200px"
                            :src="item.src"
                        >
                        </v-img>
                      </div>

                      <v-card-title class="title card-title pb-5">{{ item.name }}</v-card-title>
                        <v-card-subtitle class="pb-0" style="color: black; font-weight:bold">
                          {{ item.role }}
                        </v-card-subtitle>

                      <v-card-text class="text--primary card-testimonial">
                        <div>" {{ item.testimony }} "</div>
                      </v-card-text>
                    </v-card>
                  </v-col>
                </v-sheet>
              </v-carousel-item>

            </v-carousel>
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
                  src: require('../assets/images/Andin.jpg'),
                  role:"Diretor executivo - Elementary Engenharia",
                  testimony:"Trabalho com o Anderson a anos , assim que temos um evento novo de lançamento de algum produto , já deixamos marcado uma sessão de fotos para divulgar os momentos uma semana antes , Recomendo muito!"
                },
                 { name:"Robson Garcia Valentim",
                  src: require('../assets/images/Andin.jpg'),
                  role:"Tech Lead - Today's Artisans",
                  testimony:"Sempre contratamos o Anderson para salvar os momentos importantes dos eventos de nossa empresa. É um profissional dedicado , eu diria diferenciado , conversando sempre abertamente com o cliente , e sempre propondo ideias para melhorias."
                }
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
    .client-photo{
      padding-left: 60px;
    }
    .card-title {
      color: black;
    }
    .card-testimonial {
      font-style: italic;
      font-weight: bold;
    }
</style>