<template>

 <v-main>
   <Hero/>
   <HighLights/>
   <Testimonial/>
 </v-main>    
 
</template>

<script>
 import Hero from '../components/Hero';
 import HighLights from './HighLights';
 import Testimonial from '../components/Testimonial';

export default {
  name: 'Home',
  components: {
    Hero,
    HighLights,
    Testimonial
  },
}
</script>
