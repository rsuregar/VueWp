<template>
  <div class="read">
    <main class="main-content-container container-fluid pt-5 pb-4">
        <div class="container">
          <div class="page-header row no-gutters py-4">
              <div class="col-12 col-sm-4 text-center text-sm-left mb-0">
                <span class="text-uppercase page-subtitle">hi, I am RAHMAT SUREGAR</span>
                <h3 class="page-title"><a href="/" style="text-decoration: none;" class="text-danger">Home</a> • <router-link to="/about" style="text-decoration: none;" class="text-danger">About</router-link> • <router-link to="/404" style="text-decoration: none;" class="text-danger">Works</router-link></h3>
              </div>
            </div>
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

                        <div v-else class="card card-small user-details mt-2">
                          <div class="card-header p-0">
                            <div class="user-details__bg">
                              <img v-if="posts.post.thumbnail_images" :src="posts.post.thumbnail_images.medium_large.url" alt="User Details Background Image">
                              <img v-else src="/nopic.jpeg" alt="User Details Background Image">
                            </div>
                          </div>
                          <div class="card-body p-0">
                            <div class="user-details__avatar mx-auto">
                              <img  src="/okemat.jpg" class="rounded-circle" style="height: 100px" alt="User Avatar">
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
                            <div class="pl-4 pr-4">
                            <section style="font-size: 16px; color: #3D5170" class="text-left m-0 mt-3 mb-2" v-html="posts.post.content"></section>
                            </div>
                            
                            <div class="user-details__tags p-4 text-right">
                              Tags:
                              <span v-for="tag in posts.post.tags" :key="tag.id" class="badge badge-pill badge-sm badge-light  text-uppercase mb-2 border">#{{ tag.title }}</span>
                            </div>
                          </div>
                          <div class="comments mt-2 pl-3 pt-2 border-top pr-3">
                          <vue-disqus shortname="rsuregar" url="https://rsuregar.id"></vue-disqus>
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
                              <li class="lead text-left" v-for="cat in cats" :key="cat.id">
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
import { VueContentLoading } from 'vue-content-loading';

export default {
  
   components: {
        VueContentLoading,
      },
  // props:[title],
  data() {
    return {
      posts: [],
      errors: [],
      myData: null,
      cats: [],
      title: '',
      description: '',
      image: ''

    }
  },

  metaInfo () {
      return {
        title: this.title,
        titleTemplate: '%s ← Rsuregar.id',
        links: [
          {'rel': 'canonical', 
          'href': window.location.href, 
        }
        ],
        meta: [
        //Defaults
        {
          'http-equiv': 'Content-Type',
          'content': 'text/html; charset=utf-8',
          'vmid': 'Content-Type'
        },
        {
          'name': 'description',
          'content': this.potongtext(),
          'vmid': 'description'
        },
        {
          'name': 'author',
          'content': 'Rahmat Suregar - Rsuregar.id',
          'vmid': 'author'
        },
        {
          'name': 'keywords',
          'content': 'Rahmat Suregar, Rsuregar.id, rsuregar, rsuregar.com, Rahmat Muhammad, Muhammad Rahmat, Suregar',
          'vmid': 'keywords'
        },
        //Google SEO
          {
            'itemprop': 'name',
            'content': this.title,
            'template': chunk => `${chunk} - Rsuregar.id`, //or as string template: '%s - My page',
            'vmid': 'name'
          },
          {
            'itemprop': 'image',
            'content': this.image,
            'vmid': 'image'
          },
          {
            'itemprop': 'description',
            'content': this.potongtext(),
            'template': chunk => `${chunk} - Rsuregar.id`, //or as string template: '%s - My page',
            'vmid': 'description'
          },
          //facebook SEO
          {
            'property': 'og:title',
            'content': this.title,
            'template': chunk => `${chunk} - Rsuregar.id`, //or as string template: '%s - My page',
            'vmid': 'og:title'
          },
          {
            'property': 'og:type',
            'content': 'website',
            'vmid': 'og:type'
          },
          {
            'property': 'og:url',
            'content': window.location.href,
            'vmid': 'og:url'
          },
          {
            'property': 'og:site_name',
            'content': window.location.origin,
            'vmid': 'og:site_name'
          },
          {
            'property': 'og:image',
            'content': this.image,
            'vmid': 'og:image'
          },
          {
            'property': 'og:description',
            'content': this.potongtext(),
            'template': chunk => `${chunk} - Rsuregar.id`, //or as string template: '%s - My page',
            'vmid': 'og:description'
          },
          //Twitter SEO
          {
          'name': 'twitter:card', 
          'content': 'summary',
          'vmid': 'twitter:card'
          },
          {
            'name': 'twitter:site', 
            'content': window.location.href, 
            'vmid': 'twitter:site'
          },
          {
            'name': 'twitter:title', 
            'content': this.title,
            'template': chunk => `${chunk} - Rsuregar.id`,
            'vmid':'twitter:title',
          },
          {
            'name': 'twitter:description', 
            'content': this.potongtext(),
            'template': chunk => `${chunk} - Rsuregar.id`,
            'vmid':'twitter:description',
          },
    // Your twitter handle, if you have one.
        {
          'name': 'twitter:creator', 
          'content': '@rsuregar',
          'vmid':'twitter:creator',
        },
        {
          'name': 'twitter:image:src', 
          'content': this.image, 
          'vmid':'twitter:image:src',
        },
        ]
      }
    },


  methods: {
        hitungkata(katas){
      var jumlah = katas.split(' ').length;
      var menit = (jumlah-(jumlah%150))/150;
      if (menit < 1) {
        return 'less than 1 minute';
      }else{
        if((jumlah%150)>0) return ''+ (menit+1) +' minutes';
        return menit+' minutes';
      }
      
    },

    potongtext(){
    let body = this.stripTags(this.description);
    // console.log(body);
    return body.length > 200 ? body.substring(0, 200) + '...' : body; 
  },

  stripTags(text){
      return text.replace(/<\/?[a-z][a-z0-9]*[^<>]*>/ig, "");
    },
  },

  created() {
    
    axios.get(`https://rsuregar.id/cms/api/get_post/?slug=`+this.$route.params.slug)
    .then(response => {
      this.posts = response.data;
      this.title = this.posts.post.title;
      this.description = this.posts.post.excerpt;
      this.image = this.posts.post.thumbnail;

    })
    .catch(e => {
      this.errors.push(e);
      this.$router.push('/404')
    }),

    axios.get(`https://rsuregar.id/cms/api/get_category_index/`)
    .then(response => {
      this.cats = response.data.categories
    })
    .catch(e => {
      this.errors.push(e);

    }),

    setTimeout(() => {
      this.myData = 'hallo';
    }, 500);
  }
}
</script>
