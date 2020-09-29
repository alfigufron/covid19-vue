<template>
  <div class="info">
    <div data-aos="zoom-out-up">
      <h3 class="title">Data Berdasarkan Negara</h3>

      <div class="row justify-content-center">
        <div class="col-md-4">
          <v-select
            :options="optionsCountry"
            v-model="countrySelected"
            @input="setCountrySelected"
            label="name"
            :reduce="name => name.iso2"
            placeholder="Pilih Negera"
          />
        </div>
      </div>

      <div class="data">
        <p class="last-update text-muted">
          Update Terakhir : 
          <span>{{ this.detailCountry.lastUpdated }}</span>
        </p>
    </div>

      <div class="row">

          <div class="col-md-4" data-aos="zoom-in" data-aos-delay="200">
            <div class="card-body card-positive">
              <img src="./../assets/images/sick-people.png" alt="sick-people-icon">
              <h3 class="card-title positive">
                <animated-number
                  :value="this.detailCountry.confirmed"
                  :formatValue="numberFormatter"
                  :duration="800"
                >
                </animated-number>
              </h3>
              <p class="card-text">Positif</p>
            </div>
          </div>

          <div class="col-md-4" data-aos="zoom-in" data-aos-delay="400">
            <div class="card-body card-recover">
              <img src="./../assets/images/fun-people.png" alt="fun-people-icon">
              <h3 class="card-title recover">
                <animated-number
                  :value="this.detailCountry.recovered"
                  :formatValue="numberFormatter"
                  :duration="800"
                >
                </animated-number>
              </h3>
              <p class="card-text">Sembuh</p>
            </div>
          </div>

          <div class="col-md-4" data-aos="zoom-in" data-aos-delay="600">
            <div class="card-body card-death">
              <img src="./../assets/images/sad-people.png" alt="sad-people-icon">
              <h3 class="card-title death">
                <animated-number
                  :value="this.detailCountry.deaths"
                  :formatValue="numberFormatter"
                  :duration="800"
                >
                </animated-number>
              </h3>
              <p class="card-text">Meninggal Dunia</p>
            </div>
          </div>

      </div>
    </div>

  </div>
</template>

<script>
import axios from 'axios';
import moment from 'moment';
import AnimatedNumber from 'animated-number-vue';

export default {
  name: 'Country',
  components: { AnimatedNumber },

  data: () => ({
    baseEndpoint: "https://covid19.mathdro.id/api/countries/",
    countrySelected: "",
    optionsCountry: [],
    detailCountry: {
      confirmed: 0,
      deaths: 0,
      recovered: 0,
      lastUpdated: "",
    }
  }),

  methods: {
    async getProvince() {
      let res = await axios.get(this.baseEndpoint);

      res.data.countries.forEach((item) => {
        let countryObj = {
          name: item.name,
          iso2: item.iso2
        };

        this.optionsCountry.push(countryObj);
      });
    },

    async setCountrySelected(val) {
      let res = await axios.get(this.baseEndpoint+val);
      
      this.detailCountry.confirmed = res.data.confirmed.value;
      this.detailCountry.deaths = res.data.deaths.value;
      this.detailCountry.recovered = res.data.recovered.value
      this.detailCountry.lastUpdated = this.dateFormatter(
        res.data.lastUpdated
      );
    },

    dateFormatter(datetime) {
      return moment(datetime).format('dddd, D MMMM YYYY');
    },

    numberFormatter(val) {
      return Number(val.toFixed(0)).toLocaleString();
    },
  },

  created() {
    this.getProvince();
  }
}
</script>

<style scoped>
.title {
  padding-bottom: 24px;
  font-weight: 600;
}

.data {
  padding-top: 20px;
}
</style>