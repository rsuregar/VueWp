<template>
  <div class="read">
    <main class="main-content-container container-fluid py-3">
        <div class="container">
          <div class="row justify-content-center">
                    <div class="col-md-9">
                       <VueContentLoading v-if="!myData" 
                          :height="475"
                          :width="400"
                          :speed="2"
                          primaryColor="#f3f3f3"
                          secondaryColor="#ecebeb"
                        >
                          <rect x="-3" y="0.67" rx="5" ry="5" width="400" height="40" /> 
                          <rect x="28.33" y="55.23" rx="0" ry="0" width="123.25" height="15.3" /> 
                          <rect x="113.33" y="65.92" rx="0" ry="0" width="17" height="5" /> 
                          <rect x="170.33" y="54.23" rx="0" ry="0" width="123.25" height="15.3" /> 
                          <rect x="314.33" y="54.23" rx="0" ry="0" width="66.7" height="15.3" />
                        </VueContentLoading>

                        <div v-else class="card card-small user-details mt-4">
                          <div class="card-header p-0">
                            <div class="user-details__bg">
                              <img v-if="posts.post.thumbnail" :src="posts.post.thumbnail_images.medium_large.url" alt="User Details Background Image">
                              <img v-else src="/nopic.jpeg" alt="User Details Background Image">
                            </div>
                          </div>
                          <div class="card-body p-0">
                            <div class="user-details__avatar mx-auto">

                              <!-- <img v-if="posts.post.thumbnail" :src="posts.post.thumbnail" height="100px" width="100px" alt="User Avatar"> -->
                              <img  src="/okemat.jpg" height="100px" width="100px" alt="User Avatar">
                              <!-- <img v-else src="/nopic.jpeg" height="100px" width="100px" alt="User Avatar"> -->
                            </div>

                            <ul class="user-details__social user-details__social--primary d-table mx-auto mb-4 mt-4">
                              <li class="mx-1"><a href="https://www.facebook.com/rsuregar"><i style="color: #3e5b98" class="fab fa-facebook-f"></i></a></li>
                              <li class="mx-1"><a href="https://twitter.com/rsuregar"><i style="color: #4da7de" class="fab fa-twitter"></i></a></li>
                              <li class="mx-1"><a href="https://www.github.com/rsuregar"><i style="color: #221e1b" class="fab fa-github"></i></a></li>
                            </ul>
                            <span class="lead"><a href="/">Home </a> <span class="text-muted">•</span> <router-link  :to="{ name: 'categories', params: { slug: posts.post.categories[0].slug }}"> #{{ posts.post.categories[0].title }} </router-link></span>
                            <br>
                            <div class="mt-3 text-muted">Reading in {{ hitungkata(posts.post.content) }}</div>
                            <h3 class="font-weight-bold text-center m-0 mt-2 ml-4 mr-4">{{ posts.post.title }}</h3>
                            <hr>
                            <div class="pl-5 pr-5">
                            <p style="font-size: 18px" class="text-left text-light m-0 mt-3 mb-2" v-html="posts.post.content"></p>
                            </div>
                            
                            <div class="user-details__tags p-4">
                              <span v-for="tag in posts.tags" class="badge badge-pill badge-light  text-uppercase mb-2 border">{{ tag.title }}</span>
                            </div>
                          </div>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <VueContentLoading v-if="!myData"
                          :speed="2"
                          primaryColor="#f3f3f3"
                          secondaryColor="#ecebeb"
                        >
                          <rect x="8" y="17" rx="5" ry="5" width="400" height="38.7" /> 
                          <circle cx="17" cy="79" r="8" /> 
                          <rect x="31" y="74" rx="5" ry="5" width="400" height="9.5" /> 
                          <circle cx="16" cy="106.67" r="8" /> 
                          <rect x="34" y="101.3" rx="5" ry="5" width="400" height="9.7" />
                        </VueContentLoading>

                      <div v-else class="">
                        <div class="card-body">
                            <h5 class="text-fiord-blue text-left font-weight-bold">Categories</h5>
                            <ul class="list-unstyled">
                              <li class="lead text-left" v-for="cat in cats">
                                <router-link style="text-decoration: none" :to="{ name: 'categories', params: { slug: cat.slug }}"> #{{ cat.title }} </router-link>
                              </li>
                            </ul>
                        </div>
                      </div>
                    </div>
          </div>
        </div>
    </main>
  </div>
</template>

<style>
  .user-details__bg {
    width: 100%;
    position: relative;
    max-height: 20rem;
}
</style>

<script>
// @ is an alias to /src
import axios from 'axios';
import { VueContentLoading, VclTwitch } from 'vue-content-loading';

export default {
   components: {
        VclTwitch,
        VueContentLoading,
      },

  data() {
    return {
      posts: [],
      errors: [],
      myData: null,
      cats: [],
    }
  },

  methods: {
    hitungkata(katas){
      var jumlah = katas.split(' ').length;
      // var menit = jumlah/150;
      var menit = (jumlah-(jumlah%150))/150;
      if (menit < 1) {
        return 'less than 1 minute';
      }else{
        if((jumlah%150)>0) return ''+ (menit+1) +' minutes';
        return menit+' minutes';
      }
      
    },
  },

  created() {
    
    axios.get(`https://rsuregar.id/cms/api/get_post/?slug=`+this.$route.params.slug)
    .then(response => {
      this.posts = response.data;
      console.log(this.hitungkata(this.posts.post.content)); 
      // console.log(this.hitungkata(posts.post.content));
    })
    .catch(e => {
      this.errors.push(e);
      // window.location.href = "/404";
      this.$router.push('/404')
    }),

    axios.get(`https://rsuregar.id/cms/api/get_category_index/`)
    .then(response => {
      this.cats = response.data.categories
    })
    .catch(e => {
      this.errors.push(e);
      // router.push({ name: '404'});

    }),

    setTimeout(() => {
      this.myData = 'hallo';
    }, 500);
  }
}
</script>
