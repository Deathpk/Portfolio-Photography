<template>

 <v-main>
   <Hero/>
   <HighLights/>
   <LatestPost/>
 </v-main>    
 
</template>

<script>
 import Hero from '../components/Hero';
 import HighLights from './HighLights';
 import LatestPost from '../components/LatestPost';

export default {
  name: 'Home',
  components: {
    Hero,
    HighLights,
    LatestPost
  },
}
</script>
