<template>
  <v-container>

    <v-toolbar flat>
      
      <v-toolbar-title>
        <svg style="width:24px;height:24px" viewBox="0 0 24 14">
          <path fill="currentColor" d="M4,4H7L9,2H15L17,4H20A2,2 0 0,1 22,6V18A2,2 0 0,1 20,20H4A2,2 0 0,1 2,18V6A2,2 0 0,1 4,4M12,7A5,5 0 0,0 7,12A5,5 0 0,0 12,17A5,5 0 0,0 17,12A5,5 0 0,0 12,7M12,9A3,3 0 0,1 15,12A3,3 0 0,1 12,15A3,3 0 0,1 9,12A3,3 0 0,1 12,9Z" />
        </svg>
        PHOTOGRAPHER
      </v-toolbar-title>

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

        <v-btn text @click="goToContactSession()">
          Contato
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
                <v-list-item-title @click="gotoHomeSession()">
                  Inicio
                </v-list-item-title>
              </v-list-item>
              
              <v-list-item>
                <v-list-item-title @click="goToAboutSession()">
                  Sobre
                </v-list-item-title>
              </v-list-item>

                <v-list-item>
                  <v-menu offset-y>
                    <template v-slot:activator="{ on }">
                      <v-list-item-title v-on="on">
                        Categorias
                      </v-list-item-title>
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
                </v-list-item>

              <v-list-item>
                <v-list-item-title @click="goToContactSession()">
                  Contato
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
      },
      goToContactSession(){
        this.$router.push( { name:"contact" } )
      }
    }
  }
</script>

<style scoped>
.pointer{
  cursor:pointer;
}
</style>
