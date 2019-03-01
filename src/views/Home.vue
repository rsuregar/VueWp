<template>
<div class="home">

<main class="main-content-container container-fluid pt-5">

<div class="container">
<div class="page-header row no-gutters py-4">
<div class="col-12 col-sm-4 text-center text-sm-left mb-0">
  <span class="text-uppercase page-subtitle">hi, I am RAHMAT SUREGAR</span>
  <h3 class="page-title"><a href="/" style="text-decoration: none;" class="text-danger">Home</a> • <router-link to="/about" style="text-decoration: none;" class="text-danger">About</router-link> • <router-link to="/404" style="text-decoration: none;" class="text-danger">Works</router-link></h3>
</div>
</div>
<div class="row justify-content-center">
<h1 class="text-muted font-weight-bold pt-5" v-if="error1 == true">Ooups
  <br><small style="font-size: 20pt">no posts have been published</small></h1>
<div  class="col-lg-3 col-md-6 col-sm-12 mb-4" v-for="good in posts" :key="good.id">
<vcl-twitch v-if="!myData"
  :speed="2">
</vcl-twitch>
<div v-else class="card card-small card-post card-post--1 h-100">
  <div v-if="good.thumbnail" class="card-post__image" :style="{ 'background-image': 'url(' + good.thumbnail_images.medium.url + ')' }">
    <router-link :to="{ name: 'categories', params: { slug: good.categories[0].slug }}" class="card-post__category badge badge-pill badge-primary">{{ good.categories[0].title  }}</router-link>
    <div class="card-post__author d-flex">
       <router-link class="card-post__author-avatar card-post__author-avatar--small" style="background-image: url('okemat.jpg')" to="/about">{{ good.author.name }}</router-link>
    </div>
  </div>
    <div v-else class="card-post__image" style="background-image: url('nopic.jpeg')">
    <router-link :to="{ name: 'categories', params: { slug: good.categories[0].slug }}" class="card-post__category badge badge-pill badge-danger">{{ good.categories[0].title  }}</router-link>
    <div class="card-post__author d-flex">
       <router-link class="card-post__author-avatar card-post__author-avatar--small" style="background-image: url('okemat.jpg')" to="/about">{{ good.author.name }}</router-link>
    </div>
  </div>
  <div class="card-body">
    <h5 class="card-title">
      <router-link class="text-fiord-blue" :to="{ name: 'read', params: { slug: good.slug }}">{{ good.title }}</router-link>
    </h5>
    <p class="card-text d-inline-block mb-3"> {{ potongtext(good) }} </p>
  </div>
<div class="card-footer">
<router-link :to="{ name: 'read', params: { slug: good.slug }}" class="btn btn-block btn-sm btn-outline-primary text-uppercase"><i class="fas fa-bolt"></i> Instant View</router-link>
</div>
</div>
</div>

</div>
</div>
</main>
</div>
</template>

<script>
// @ is an alias to /src
import axios from 'axios';
import { VclTwitch } from 'vue-content-loading';

export default {
  
  components: {
        VclTwitch,
      },

  data() {
    return {
      posts: [],
      errors: null,
      myData: null,
      error1: false,
      // bhs: 'id'
    }
  },
  metaInfo: {
    title: 'Personal website',
    titleTemplate: '%s ← Rsuregar.id',
    // Define meta tags here.
    meta: [
            // OpenGraph data (Most widely used)
            {property: 'og:title', content: 'Rahmat Suregar Personal website ← Rsuregar.id'},
            {property: 'og:site_name', content: 'rsuregar.id'},
            // The list of types is available here: http://ogp.me/#types
            {property: 'og:type', content: 'website'},
            // Should the the same as your canonical link, see below.
            {property: 'og:url', content: 'https://rsuregar.id/about'},
            {property: 'og:image', content: 'https://www.rsuregar.id/okemat.jpg'},
            // Often the same as your meta description, but not always.
            {property: 'og:description', content: 'Here is my Personal Website built with Vue.js SPA and Wordpress API. Enjoy this blog yaa...'}
    ]
  },

methods:{
	potongtext(good){
		let body = this.stripTags(good.excerpt);
		// console.log(body);
		return body.length > 100 ? body.substring(0, 120) + '...' : body; 
	},

	stripTags(text){
      return text.replace(/<\/?[a-z][a-z0-9]*[^<>]*>/ig, "");
    },
},

  mounted() {
  axios.get(`https://rsuregar.id/cms/api/get_posts/`)
  .then(response => {
  this.posts = response.data.posts;
  if(this.posts.length==0) this.error1 = true;
  })
  .catch(e => {
    this.errors.push(e)
  }),

	setTimeout(() => {
      this.myData = 'hallo';
    }, 500);
  }
}
</script>
