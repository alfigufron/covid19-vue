<template>
  <div class="info">
    <div data-aos="zoom-out-up">
      <h3 class="title">Indonesia</h3>        
      <p class="last-update text-muted">
        Update Terakhir : 
        <span>{{ this.local.lastUpdated | dateFormatter }}</span>
      </p>
    </div>

    <div class="row d-flex flex-wrap-reverse">

      <div class="col-md-4" data-aos="fade-right" data-aos-delay="200">
        <div class="card-body card-positive">
          <img src="./../assets/images/sick-people.png" alt="sick-people-icon">
          <h3 class="card-title positive">
            {{ this.local.confirmed | numberFormatter }}
          </h3>
          <p class="card-text">Positif</p>
        </div>
      </div>

      <div class="col-md-4" data-aos="fade-right" data-aos-delay="400">
        <div class="card-body card-recover">
          <img src="./../assets/images/fun-people.png" alt="fun-people-icon">
          <h3 class="card-title recover">
            {{ this.local.recovered | numberFormatter }}
          </h3>
          <p class="card-text">Sembuh</p>
        </div>
      </div>

      <div class="col-md-4" data-aos="fade-right" data-aos-delay="600">
        <div class="card-body card-death">
          <img src="./../assets/images/sad-people.png" alt="sad-people-icon">
          <h3 class="card-title death">
            {{ this.local.deaths | numberFormatter }}
          </h3>
          <p class="card-text">Meninggal Dunia</p>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import axios from 'axios';
import moment from 'moment';

export default {
  name: 'IndonesiaInfo',

  data: () => ({
    baseEndpoint: "https://covid19.mathdro.id/api/countries/ID",
    local: {
      confirmed: 0,
      deaths: 0,
      recovered: 0,
      lastUpdated: "",
    }
  }),

  methods: {
    async getLocalData() {
      const res = await axios.get(this.baseEndpoint);

      this.local.confirmed = res.data.confirmed.value;
      this.local.deaths = res.data.deaths.value;
      this.local.recovered = res.data.recovered.value;
      this.local.lastUpdated = res.data.lastUpdate;
    }
  },

  filters: {
    numberFormatter(val) {
      return Number(val).toLocaleString();
    },

    dateFormatter(datetime) {
      return moment(datetime).format('dddd, D MMMM YYYY');
    }
  },

  created() {
    this.getLocalData();
  }
}
</script>