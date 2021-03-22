<template>
    <div class="block galleryBlock">
       <v-container>
          <h2 class="text-center">{{title}}</h2>
          <v-row>
                <v-col
                v-for="(item,index) in items"
                :key="index"
                class="d-flex child-flex"
                cols="6" md="4"
                >
                   <v-img
                        :src="item.src"
                        :lazy-src="item.src"
                        aspect-ratio="1"
                        class="grey lighten-2"
                        @click="showImg(index)"
                    >
                        <template v-slot:placeholder>
                            <v-row
                                class="fill-height ma-0"
                                align="center"
                                justify="center"
                            >
                                <v-progress-circular
                                indeterminate
                                color="grey lighten-5"
                                ></v-progress-circular>
                            </v-row>
                        </template>
                    </v-img>
                </v-col>
            </v-row>

            <vue-easy-lightbox
            :visible="visible"
             moveDisabled
            :imgs="items"
            :index="index"
            @hide="handleHide"
            ></vue-easy-lightbox>
        </v-container>
    </div>
</template>

<script>
export default {
    name: 'Gallery',
    props:{
        title:{ type: String , required:true },
        items:{ type: Array , required:true },
    },
    data(){
        return{
            visible:false,
            index:0,
        }
    },
    methods:{
        showImg (index) {
        this.index = index
        this.visible = true
      },
      handleHide () {
        this.visible = false
      },
      show() {
        this.visible = true
      },
    }
}
</script>
