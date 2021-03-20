<template>
  <v-content>
    <div class="staticHero">
      <v-img :src= heroImg height="25rem">
        <v-row align="end" class="lightbox white--text pa-2 fill-height">
          <v-col>
            <v-container>
              <div class="headline">About</div>
            </v-container>
          </v-col>
        </v-row>
      </v-img>
    </div>
    <div class="block">
      <v-container>
        <p>Ea pri vitae antiopam theophrastus, ut sit erat putent eruditi. Qui at mutat adversarium. Postulant delicatissimi ei qui, an nonumy dolorem nam. Cu philosophia instructior pri, nec cu mutat homero saperet, cu paulo ridens legendos has. Cu veri oportere pri, ad integre numquam iudicabit mel. Nec ea ferri iudicabit dissentiet. Ex solet melius omittantur his, in gloriatur vulputate mel. Ad nostro repudiandae ius, est amet molestie te. No est modus sensibus volutpat, et putent dissentias has, et sea eirmod vivendum. Paulo lucilius expetenda sea in, cu nam mazim sanctus ponderum. Te nam mundi corpora, dicat dolore debitis ius in. Indoctum adversarium definitionem an pro, an eam vidit utinam detracto.</p>
      </v-container>
    </div>
    <div class="block">
      <v-container>
        <h2 class="text-center">Our Team</h2>
        <v-row>
          <v-col cols="12" md="4" v-for="item in items" :key="item.id">
            <v-card class="mx-auto" max-width="400">
              <v-img class="white--text align-end"
                height="200px"
                :src="item.src"
              >
              </v-img>

              <v-card-text class="text--primary">
                <div class="title">{{item.name}}</div>
                <p>{{item.title}}</p>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </v-content>    
</template>

<script>
  export default {
    name: 'About',

   data(){
     return{
       heroImg: require('../assets/images/aboutHero.jpg'),
       items:[
          {
           id:1,
           src: require('../assets/images/Andin.jpg'),
           name:'Anderson Nunes',
           title:'Director'
          },
          {
           id:2,
           src: require('../assets/images/Nelsola.jpg'),
           name:'Jubileu Neymar Santos',
           title:'Manager'
          },
          {
           id:3,
           src: require('../assets/images/Bernardo.jpg'),
           name:'Robson Garcia Valentim',
           title:'Photographer'
          }
       ]
     }
     
   }
      
  }
</script>
