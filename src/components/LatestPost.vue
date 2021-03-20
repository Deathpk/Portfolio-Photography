<template>
    <div class="block latestPostBlock">
        <v-container>
          <h2 class="text-center">Latest Post</h2>

            <v-row>
                <v-col cols="12" md="4" v-for="item in items" :key="item.id">
                    <v-card outlined class="mx-auto">
                        <v-img
                        class="white--text align-end"
                        height="200px"
                        :src="item.src"
                        >
                            <v-card-title>{{ item.title }}</v-card-title>
                        </v-img>

                        <v-card-subtitle class="pb-0">
                            {{ item.subtitle }}
                        </v-card-subtitle>

                        <v-card-text class="text--primary">
                            <div>{{ item.description }}</div>
                        </v-card-text>

                        <v-card-actions>
                            <v-btn
                                color="primary"
                                text
                            >
                                More
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-col>    
            </v-row>
        </v-container>
    </div>
</template>

<script>
  export default {
    name: 'LatestPost',
    data(){
        return{
            items:[
                {
                    id: 1,
                    title: "Japan and It's Beauty",
                    subtitle: "1,000 miles of wonder",
                    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.",
                    src: require("../assets/images/post1.jpg")
                },
                {
                    id: 2,
                    title: "The oldest tree alive",
                    subtitle: "The oldest tree still beautifull",
                    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.",
                    src: require("../assets/images/post2.jpg")
                },
                {
                    id: 3,
                    title: "Constelation and It's power",
                    subtitle: "1,000 miles of wonder",
                    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.",
                    src: require("../assets/images/post3.jpg")
                }
            ]
        }
    }
  }
</script>
