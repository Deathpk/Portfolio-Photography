<template>
    
  <div class="heroBlock">
    <v-carousel hide-delimiters cycle interval="4000" :show-arrows="false">
        <v-carousel-item
        v-for="(item,i) in items"
        :key="i"
        :src="item.src"
        reverse-transition="slide-x-transition"
        transition="slide-x-transition"
        eager
        >
            <v-row class="fill-height title hidden-xs-only" align="center" justify="center">
                <div>
                      {{ item.title }}
                </div>
            </v-row>
        </v-carousel-item>
    </v-carousel>
  </div>
    
</template>

<script>
  export default {
    name: 'Hero',

    data: () => ({
      items: [
          {
            src: require("../assets/images/aboutHero.jpg"),
            title:"Seus melhores momentos"
          },
          {
            src: require("../assets/images/img5.jpg"),
            title:"Eternizados e salvos "
          },
          {
            src: require("../assets/images/carrousel-2.jpg"),
            title:"Por lentes profissionais!"
          },
        ],
    }),
  }
</script>
