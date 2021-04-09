<template>
    
        <v-container>
            <v-footer
            padless
            >
            <v-row>
                <v-col>
                <v-card
                flat
                tile
                class="text-center"
                >
                    <v-card-text>
                        <v-btn
                        v-for="social in socialMedia"
                        :key="social.icon"
                        class="mx-4 "
                        :href="social.link"
                        icon
                        >
                            <v-icon size="24px">
                                {{ social.icon }}
                            </v-icon>
                        </v-btn>
                    </v-card-text>
                    
                    <v-card-text>
                        {{ new Date().getFullYear() }} — Feito com <v-icon style="color:red;">mdi-heart</v-icon> por <strong>MichelVersianiDev</strong>
                    </v-card-text>
                </v-card>
                </v-col>
            </v-row>
            </v-footer>  
        </v-container>
    
</template>

<script>
export default {
    name: 'Footer',
    data(){
        return{
            socialMedia: [
                { icon:'mdi-facebook', link:"https://www.facebook.com/"},
                { icon:'mdi-twitter', link:"https://twitter.com/home?lang=pt"},
                { icon:'mdi-linkedin', link:"https://www.linkedin.com/feed"},
                { icon:'mdi-instagram', link:"https://www.instagram.com/"},
            ],
        }
    }
  }
</script>
