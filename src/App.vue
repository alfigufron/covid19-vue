<template>
  <div id="app">
    <div class="container">
      <Heading/>
      <hr>
      <div class="body-content text-center">
        <GlobalInfo/>
        <hr>
        <IndonesiaInfo/>
        <hr>
        <Country/>
      </div>
      <Footer/>
    </div>
  </div>
</template>

<script>
import {
  Heading,
  GlobalInfo,
  IndonesiaInfo,
  Country,
  Footer
} from './components'
import moment from 'moment';

moment.locale('id');

export default {
  name: 'App',
  components: {
    Heading,
    GlobalInfo,
    IndonesiaInfo,
    Country,
    Footer
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap');

#app {
  font-family: 'Open Sans', sans-serif!important;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body {
  background-color: #edf7fa!important;
}

.url-link {
  color: #c70d3a;
  opacity: 0.7;
}

.url-link:hover {
  color: #c70d3a;
  opacity: 1;
}

.body-content .info {
  padding: 200px 0;
}

.body-content .info h3 {
  font-weight: 600;
}

.body-content .info .last-update {
  font-size: 14px;
  padding: 10px 0;
}

.body-content .info .row {
  padding-bottom: 20px;
}

.body-content .info .row .col-md-4 .card-body {
  background-color: white;
  border-radius: 11px 11px 11px 11px;
  -moz-border-radius: 11px 11px 11px 11px;
  -webkit-border-radius: 11px 11px 11px 11px;
  border: 0px solid #000000;
  -webkit-box-shadow: 7px 7px 21px 3px rgba(0,0,0,0.04);
  -moz-box-shadow: 7px 7px 21px 3px rgba(0,0,0,0.04);
  box-shadow: 7px 7px 21px 3px rgba(0,0,0,0.04);
}

.body-content .info .row .col-md-4 .card-positive {
  border-left: 8px solid #ffdc34;
}

.body-content .info .row .col-md-4 .card-recover {
  border-left: 8px solid #4dd599;
}

.body-content .info .row .col-md-4 .card-death {
  border-left: 8px solid #c70d3a;
}

.body-content .info .row .col-md-4 .card-body img {
  width: 100%;
  max-width: 60px;
  height: auto;
  margin-bottom: 10px;
}

.body-content .info .row .col-md-4 .card-body .card-title {
  font-weight: 700;
}

.body-content .info .row .col-md-4 .card-body .positive {
  color: #ffdc34;
}

.body-content .info .row .col-md-4 .card-body .recover {
  color: #4dd599;
}

.body-content .info .row .col-md-4 .card-body .death {
  color: #c70d3a;
}

.body-content .info .row .col-md-4 .card-body .card-text {
  font-weight: 600;
}

/* Dekstop */
@media only screen and (min-width: 1200px) {

  .header-content {
    padding: 110px 0!important;
  }

  .footer {
    margin-top: 80px;
  }

  .body-content .info {
    padding: 90px 0!important;
  }

}

@media only screen and (min-width: 600px) {
  .header-content {
    padding: 210px 0;
  }

  .body-content {
    padding: 90px 0;
  }

  .body-content .info {
    padding: 40px 0;
  }

  .body-content .info .row .col-md-4 {
    margin: 20px 0;
  }
}

/* Mobile */
@media only screen and (max-width: 600px) {

  .header-content {
    padding: 210px 0;
  }

  .body-content {
    padding: 90px 0;
  }

  .body-content .info {
    padding: 40px 0;
  }

  .body-content .info .row .col-md-4 {
    margin: 20px 0;
  }

}

/* Transition */
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

</style>
