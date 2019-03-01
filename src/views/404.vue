<template>
  <div class="about">
    <main class="main-content-container container-fluid py-5">
        <div class="container pt-5">
          <div class="row justify-content-center">
                    <div class="col-md-6">
                    <!-- User Details Card -->
                        <div class="card card-small user-details">
                          <div class="card-header p-0">
                            <div class="user-details__bg">
                              <img src="/404.jpg" alt="User Details Background Image">
                            </div>
                          </div>
                          <div class="card-body p-0">
                            <div class="user-details__avatar mx-auto">
                              <img src="https://image.flaticon.com/icons/svg/1413/1413284.svg" height="100px" width="100px" alt="User Avatar">
                            </div>
                            <h4 class="text-center m-0 mt-2">Ooups</h4>
                            <p class="text-center text-light m-0 mb-2">Page not found</p>
                           
                            <p class="mb-4 mt-2 lead"><router-link to="/"> Homepage </router-link></p>
                          </div>
                        </div>
                        <!-- End User Details Card -->
                    </div>
          </div>
        </div>
    </main>

  </div>
</template>


<script>
// @ is an alias to /src


export default {


  data() {
    return {
      myData: null,
    }
  },

  metaInfo: {
    title: 'Oups 404',
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
}
</script>
