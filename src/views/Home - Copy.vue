<template>
<div class="home">

<main class="main-content-container container-fluid pt-5">

<div class="container">
<!-- <div class="mb-4 btn-group btn-group-sm" role="group" aria-label="Basic example">
<button class="btn btn-danger btn-sm" @click="lang('en')">En</button>
<button class="btn btn-primary btn-sm" @click="lang('id')">Id</button>
</div> -->
<div class="row justify-content-center">
<div class="col-lg-3 col-md-6 col-sm-12 mb-4" v-for="good in posts">
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
      errors: [],
      myData: null,
      // bhs: 'id'
    }
  },

methods:{
	potongtext(good){
		let body = this.stripTags(good.excerpt);
		// console.log(body);
		return body.length > 100 ? body.substring(0, 120) + '...' : body; 
	},

	stripTags (text) {
         return text.replace(/(<([^>]+)>)/ig, '');
    },

    // getPosts(){
    // axios.get('https://rsuregar.id/cms/id/api/get_posts/'  )
    // .then(response => {
    // this.posts = response.data.posts;
    
    // })
    // .catch(e => {
    //   this.errors.push(e)
    // });
    // }
},

  mounted() {
	 axios.get('https://rsuregar.id/cms/api/get_posts/'  )
    .then(response => {
    this.posts = response.data.posts;
    
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
