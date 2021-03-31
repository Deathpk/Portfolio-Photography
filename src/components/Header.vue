<template>
  <v-container>

    <v-toolbar flat>
      
      <v-toolbar-title>Photography</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-toolbar-items class="hidden-xs-only">
        <v-btn text @click="gotoHomeSession()">
          Inicio
        </v-btn>

        <v-btn text @click="goToAboutSession()">
          Sobre
        </v-btn>

        <v-menu offset-y>
          <template v-slot:activator="{ on }">
            <v-btn text
              v-on="on"
            >
              Categorias
            </v-btn>
          </template>
          <v-list>
            <v-list-item
              v-for="(category) in categories"
              :key="category.id"
            >
              <v-list-item-title
              class="pointer"
              @click="goToSelectedCategory(category.to)">
                {{ category.name }}
              </v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>

        <v-btn text>
          <router-link class="black--text" to="/contact">Contato</router-link>
        </v-btn>


      </v-toolbar-items>

      <!-- Responsive Menu -->
      <div class="hidden-sm-and-up">
      <v-menu offset-y>
          <template v-slot:activator="{ on }">
            <v-app-bar-nav-icon v-on="on" ></v-app-bar-nav-icon>
          </template>
          <v-list class="responsiveMenu">
              <v-list-item>
                <v-list-item-title>
                  <router-link to="/">Inicio</router-link>
                </v-list-item-title>
              </v-list-item>
              
              <v-list-item>
                <v-list-item-title>
                  <router-link to="/about">Sobre</router-link>
                </v-list-item-title>
              </v-list-item>

               <v-list-item>
                <v-list-item-title>
                  <router-link to="/contact">Categorias</router-link>
                </v-list-item-title>
              </v-list-item>

              <v-list-item>
                <v-list-item-title>
                  <router-link to="/contact">Contato</router-link>
                </v-list-item-title>
              </v-list-item>

          </v-list>
      </v-menu>
      </div>
    </v-toolbar>

  </v-container>
</template>

<script>
  export default {
    name: 'Header',

    data: () => ({
        categories:[
          { id: 1 , name:'Ensaios' , to:'rehearsals'},
          { id:2 , name:'Casamentos' , to:'weddings'}
        ]
    }),
    methods:{
      gotoHomeSession(){
        this.$router.push( { name:"home" } )
      },
      goToAboutSession(){
        this.$router.push( { name:"about" } )
      },
      goToSelectedCategory(category){
        this.$router.push({ name:category })
      }
    }
  }
</script>

<style scoped>
.pointer{
  cursor:pointer;
}
</style>
