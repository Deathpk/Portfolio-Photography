<template>
  <v-main>
    <div class="staticHero">
      <v-img :src= heroImg height="25rem">
        <v-row align="end" class="lightbox white--text pa-2 fill-height">
          <v-col>
            <v-container>
              <div class="headline">Sobre</div>
            </v-container>
          </v-col>
        </v-row>
      </v-img>
    </div>
    <!-- <div class="block">
      <v-container>
        <p>Ea pri vitae antiopam theophrastus, ut sit erat putent eruditi. Qui at mutat adversarium. Postulant delicatissimi ei qui, an nonumy dolorem nam. Cu philosophia instructior pri, nec cu mutat homero saperet, cu paulo ridens legendos has. Cu veri oportere pri, ad integre numquam iudicabit mel. Nec ea ferri iudicabit dissentiet. Ex solet melius omittantur his, in gloriatur vulputate mel. Ad nostro repudiandae ius, est amet molestie te. No est modus sensibus volutpat, et putent dissentias has, et sea eirmod vivendum. Paulo lucilius expetenda sea in, cu nam mazim sanctus ponderum. Te nam mundi corpora, dicat dolore debitis ius in. Indoctum adversarium definitionem an pro, an eam vidit utinam detracto.</p>
      </v-container>
    </div> -->
    <div class="block">
      <v-container>
        <h2 class="text-center">Sobre mim</h2>
        <v-row class="profile-wrapper">
          <v-col cols="12" md="4" v-for="item in items" :key="item.id">

            <v-card class="mx-auto" max-width="400" elevation="0">
              <v-img class=" white--text align-end rounded-circle"
                height="350px"
                width="400px"
                :src="item.src"
              >
              </v-img>

              <v-card-text class="text--primary">
                <div class="title name">{{item.name}}</div>
                <p class="role">{{item.title}}</p>
              </v-card-text>
            </v-card>
            
          </v-col>
        </v-row>
      </v-container>
      
      <v-container class="presentation">
        <p>Eu sou Anderosn Nunes, fotógrafo e filmmaker, Geógrafo, e natural de Salvador. Com vasta experiência em captação de imagens, já trabalhei em eventos esportivos, documentários, curtas metragens, viagens e programas culturais. Atualmente, estou diretor de fotografia no Rural Produtivo, um programa da TVE Bahia. Como freelancer meu objetivo é usar a fotografia e o audiovisual como ferramenta para projetos que visam o desenvolvimento e o bem estar social, priorizando a preservação de paisagens naturais, a valorização de pessoas, culturas e saberes. Se a sua marca ou empresa tem isso no DNA, entre em contato.</p>
      </v-container>
    </div>
  </v-main>    
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
           title:'Fotografo'
          },
       ]
     }
     
   }
      
  }
</script>

<style scoped>
  .profile-wrapper{
    display: flex;
    align-items: center;
    justify-content: center;
    padding:30px;
  }
  .role {
    font-weight: bold;
  }
  .presentation {
    font-size: large;
    font-style: italic;
  }
</style>
