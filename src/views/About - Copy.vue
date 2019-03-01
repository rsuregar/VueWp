<template>
  <div class="about">
    <main class="main-content-container container-fluid py-3">
        <div class="container">
          <div class="row justify-content-center">
                    <div class="col-md-6">
                    <!-- User Details Card -->
                     <vcl-twitch v-if="!myData"
                      :speed="2">
                  </vcl-twitch>
                        <div v-else class="card card-small user-details">
                          <div class="card-header p-0">
                            <div class="user-details__bg">
                              <img src="https://designrevision.com/demo/shards-dashboards/images/user-profile/up-user-details-background.jpg" alt="User Details Background Image">
                            </div>
                          </div>
                          <div class="card-body p-0">
                            <div class="user-details__avatar mx-auto">
                              <img src="okemat.jpg" height="100px" width="100px" alt="User Avatar">
                            </div>
                            <h4 class="text-center m-0 mt-2">Rahmat Suregar</h4>
                            <p class="text-center text-light m-0 mb-2">I'm a design focused engineer.</p>
                            <ul class="user-details__social user-details__social--primary d-table mx-auto mb-2">
                              <li class="mx-1"><a href="https://www.facebook.com/rsuregar"><i class="fab fa-facebook-f"></i></a></li>
                              <li class="mx-1"><a href="https://twitter.com/rsuregar"><i class="fab fa-twitter"></i></a></li>
                              <li class="mx-1"><a href="https://www.github.com/rsuregar"><i class="fab fa-github"></i></a></li>
                            </ul>
                            <p class="mb-2 mt-4 lead"><router-link to="/"> Homepage </router-link></p>
                            <div class="user-details__user-data border-top border-bottom p-4">
                              <div class="row mb-3">
                                <div class="col w-50">
                                  <span>Email</span>
                                  <span>rsuregar@gmail.com</span>
                                </div>
                                <div class="col w-50">
                                  <span>Location</span>
                                  <span>Remote</span>
                                </div>
                              </div>
                              <div class="row">
                                <div class="col w-50">
                                  <span>Phone</span>
                                  <span>+62 85342 116212</span>
                                </div>
                                <div class="col w-50">
                                  <span>Telegram</span>
                                  <span>rsuregar</span>
                                </div>
                              </div>
                            </div>
                            <div class="user-details__tags p-4">
                              <span class="badge badge-pill badge-light  text-uppercase mb-2 border">User Experience</span>
                              <span class="badge badge-pill badge-danger  text-uppercase mb-2 border">Laravel</span>
                              <span class="badge badge-pill badge-warning  text-uppercase mb-2 border">Vue JS</span>
                              <span class="badge badge-pill badge-dark  text-uppercase mb-2 border">HTML & CSS</span>
                              <span class="badge badge-pill badge-primary  text-uppercase mb-2 border">Bootstrap 4</span>
                            </div>
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
import axios from 'axios';
import { VclTwitch } from 'vue-content-loading';

export default {
   components: {
        VclTwitch,
      },

  data() {
    return {
      myData: null,
    }
  },

  created() {

    setTimeout(() => {
      this.myData = 'hallo';
    }, 500);
  }
}
</script>
