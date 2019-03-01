<template>
  <div class="about">
    <main class="main-content-container container-fluid py-3">
        <div class="container">
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
                            <h4 class="text-center m-0 mt-2">Oooups</h4>
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
