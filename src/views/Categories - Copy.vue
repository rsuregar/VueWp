<template>
  <div class="about">
    <main class="main-content-container container-fluid py-3">
        <div class="container">
          <div class="page-header row no-gutters py-4">
              <div class="col-12 col-sm-4 text-center text-sm-left mb-0">
                <span class="text-uppercase page-subtitle"><strong>{{ posts.category.post_count }}</strong> Blog<span v-if="posts.category.post_count > 1">s</span> in</span>
                <h3 class="page-title"><a href="/" class="text-danger">Home</a> • {{ posts.category.title }}</h3>
              </div>
            </div>
          <div class="row justify-content-center"> 
              <div class="col-lg-4" v-for="good in posts.posts">
                <vcl-twitch v-if="!myData"
                      :speed="2">
                  </vcl-twitch>
                <div v-else class="card card-small card-post mb-4">
                  <div class="card-body">
                    <h5 class="card-title">
                    <router-link class="text-fiord-blue" :to="{ name: 'read', params: { slug: good.slug }}">{{ good.title }}</router-link></h5>
                    <p class="card-text text-muted">{{ potongtext(good) }}</p>
                  </div>
                  <div class="card-footer border-top d-flex">
                    <div class="card-post__author d-flex">
                      <router-link to="/about" class="card-post__author-avatar card-post__author-avatar--small" style="background-image: url('/okemat.jpg');">{{ good.author.name }}</router-link>
                      <div class="d-flex flex-column justify-content-center ml-3">
                        <span class="card-post__author-name">{{ good.author.name }}</span>
                        <small class="text-muted">in Makassar</small>
                      </div>
                    </div>
                    <div class="my-auto ml-auto">
                      <router-link :to="{ name: 'read', params: { slug: good.slug }}" class="btn btn-sm btn-white">
                        <i class="far fa-bookmark mr-1"></i> Readmore </router-link>
                    </div>
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
      cats: [],
    }
  },

  methods:{
  potongtext(good){
    let body = this.stripTags(good.excerpt);
    // console.log(body);
    return body.length > 100 ? body.substring(0, 100) + '...' : body; 
  },

  stripTags (text) {
         return text.replace(/(<([^>]+)>)/ig, '');
    }
},

  created() {
    axios.get(`https://rsuregar.id/cms/api/get_category_posts/?slug=`+this.$route.params.slug)
    .then(response => {
      this.posts = response.data
    })
    .catch(e => {
      this.errors.push(e);
      this.$router.push('/404')
    }),

    setTimeout(() => {
      this.myData = 'hallo';
    }, 500);
  }
}
</script>
