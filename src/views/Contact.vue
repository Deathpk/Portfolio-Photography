<template>

 <v-content>
    <div class="staticHero">
      <v-img :src= heroImg height="25rem">
        <v-row align="end" class="lightbox white--text pa-2 fill-height">
          <v-col>
            <v-container>
              <div class="headline">Contact Us</div>
            </v-container>
          </v-col>
        </v-row>
      </v-img>
    </div>

    <div class="block">
      <v-container>
          <form>
        <v-row>
          <v-col>
            <v-text-field
              v-model="name"
              :error-messages="nameErrors"
              :counter="10"
              label="Name"
              required
              @input="$v.name.$touch()"
              @blur="$v.name.$touch()"
            ></v-text-field>
            </v-col>
          </v-row>

            <v-row>
              <v-col>
                <v-text-field
                  v-model="email"
                  :error-messages="emailErrors"
                  label="E-mail"
                  required
                  @input="$v.email.$touch()"
                  @blur="$v.email.$touch()"
                ></v-text-field>
              </v-col>
            </v-row>
            
            <v-row>
              <v-col>
                <v-btn
                  class="mr-4"
                  @click="submit"
                >
                  submit
                </v-btn>

                <v-btn @click="clear">
                  clear
                </v-btn>
              </v-col>
            </v-row>
          </form>
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
       name: '',
       email: '',
       select: null,
       items: [
          'Item 1',
          'Item 2',
          'Item 3',
          'Item 4',
       ],
      checkbox: false,
      }
   }
      
  }
</script>
