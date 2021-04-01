<template>

 <v-content>
    <div class="staticHero">
      <v-img :src= heroImg height="25rem">
        <v-row align="end" class="lightbox white--text pa-2 fill-height">
          <v-col>
            <v-container>
              <div class="headline">Contato</div>
            </v-container>
          </v-col>
        </v-row>
      </v-img>
    </div>

    <div class="block">
      <v-container>
        <h2 class="text-center">Formas de contato</h2>
        <v-row class="contactForms">

          <v-col cols="12" md="4" v-for="contact in contactForms" :key="contact.title">
          <v-card
          class="mx-auto"
          max-width="400"
          >
            <v-img
              class="white--text align-end"
              height="200px"
              :src="contact.src"
            >
              <v-card-title>{{ contact.title }}</v-card-title>
            </v-img>

            <v-card-text class="text--primary">
              <div>{{ contact.desc }}</div>
            </v-card-text>

            <v-card-actions>
              <v-btn
                :color="contact.btnColor"
                text
              >
                Contacte
              </v-btn>
            </v-card-actions>
          </v-card>
          </v-col>

        </v-row>
          
      </v-container>
    </div>

 </v-content>    
 
</template>

<script>


  export default {
    name: 'Contact',

   data(){
      return{
       heroImg: require('../assets/images/contactHero.jpg'),
       contactForms:[
         {
          title: 'WhatsApp',
          src: require('../assets/images/whatsAppLogo.jpg'),
          desc:'Tire dúvidas , faça orçamentos , pergunte sobre a agenda via Whatsapp',
          btnColor:'green'
         },
         {
          title: 'Facebook',
          src: require('../assets/images/facebookLogo.jpg'),
          desc:'Tire dúvidas , faça orçamentos , pergunte sobre a agenda via Whatsapp',
          btnColor:'blue'
         },

          {
          title: 'E-mail',
          src: require('../assets/images/gmailLogo.png'),
          desc:'Tire dúvidas , faça orçamentos , pergunte sobre a agenda via Whatsapp',
          btnColor:'red'
         },

       ]
      }
   }
      
  }
</script>

<style scoped>
  .contactForms{
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>
