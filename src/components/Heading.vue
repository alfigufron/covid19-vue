<template>
  <div class="heading">
    <div data-aos="zoom-in-down">
      <div class="header-content text-center">
        <img src="./../assets/images/virus-icon.png" class="img-fluid" alt="virus-icon">
        <h1 class="mt-4">COVID-19 Info</h1>
        <h5 class="mt-4">Informasi tentang COVID-19 di Indonesia dan Global</h5>
        <p class="source-data text-muted">
          Sumber data berasal dari API 
          <a href="https://github.com/mathdroid/covid-19-api" class="url-link" target="_blank">Mathdroid</a>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Heading'
}
</script>

<style scoped>
.header-content {
  height: 100vh;
  padding: 240px 0;
}

.header-content img {
  width: 100%;
  max-width: 140px;
  height: auto;
}

.header-content h1 {
  font-family: 'Noto Sans SC', sans-serif!important;
  font-weight: bold;
}

.header-content .source-data {
  padding: 20px 0;
}
</style>