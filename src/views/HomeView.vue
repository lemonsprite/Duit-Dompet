<template>
  <div class="hero">
    <div class="'stats">
      <div class="bg-abu-muda text-white p-8">
        <h1 class="text-center text-2xl font-bold tracking-widest mb-5">RINGKASAN DATA</h1>
        <div class="grid grid-cols-1 md:grid-cols-4 gap-5">
          <MiniBanner title="Saldo Dompet" nominal="200000" icon="M6 3C4.346 3 3 4.346 3 6L3 19C3 20.103 3.897 21 5 21L19 21C20.103 21 21 20.103 21 19L21 9C21 7.897 20.103 7 19 7L9 7L8 7L6 7C5.448 7 5 6.551 5 6C5 5.449 5.448 5 6 5L20 5L20 3L6 3 z M 5 8.8164062C5.3143909 8.9285627 5.6476094 9 6 9L8 9L9 9L19 9L19 19L5 19L5 8.8164062 z M 16 13C15.448 13 15 13.448 15 14C15 14.552 15.448 15 16 15C16.552 15 17 14.552 17 14C17 13.448 16.552 13 16 13 z" />
          <MiniBanner title="Uang Hari Ini" nominal="200000" icon="M3 3C2.448 3 2 3.448 2 4L2 14C2 14.552 2.448 15 3 15L21 15C21.552 15 22 14.552 22 14L22 4C22 3.448 21.552 3 21 3L3 3 z M 4.9121094 5L19.087891 5 A 1.5 1.5 0 0 0 20 5.9121094L20 12.087891 A 1.5 1.5 0 0 0 19.087891 13L4.9121094 13 A 1.5 1.5 0 0 0 4 12.087891L4 5.9121094 A 1.5 1.5 0 0 0 4.9121094 5 z M 12 6 A 3 3 0 0 0 9 9 A 3 3 0 0 0 12 12 A 3 3 0 0 0 15 9 A 3 3 0 0 0 12 6 z M 7 8C6.448 8 6 8.447 6 9C6 9.553 6.448 10 7 10C7.552 10 8 9.553 8 9C8 8.447 7.552 8 7 8 z M 17 8C16.448 8 16 8.447 16 9C16 9.553 16.448 10 17 10C17.552 10 18 9.553 18 9C18 8.447 17.552 8 17 8 z M 3.9902344 17L19.228516 20.96875C19.763516 21.10775 20.308266 20.785953 20.447266 20.251953L21.294922 17L19.228516 17L18.992188 17.900391C18.543187 17.939391 18.137766 18.178781 17.884766 18.550781L11.927734 17L3.9902344 17 z" />
          <MiniBanner title="Pemasukan Bulan Ini" nominal="200000" icon="M7 3L8.7929688 4.7929688L3 10.585938L4.4140625 12L10.207031 6.2070312L12 8L12 3L7 3 z M 18 3L18 21L21 21L21 3L18 3 z M 13 11L13 21L16 21L16 11L13 11 z M 8 15L8 21L11 21L11 15L8 15 z M 3 17L3 21L6 21L6 17L3 17 z" />
          <MiniBanner title="Pengeluaran Bulan Ini" nominal="200000" icon="M3 3L3 21L6 21L6 3L3 3 z M 13.414062 3L12 4.4140625L17.792969 10.207031L16 12L21 12L21 7L19.207031 8.7929688L13.414062 3 z M 8 11L8 21L11 21L11 11L8 11 z M 13 15L13 21L16 21L16 15L13 15 z M 18 17L18 21L21 21L21 17L18 17 z" />
        </div>
      </div>
    </div>
    <div class="splitter bg-cover bg-no-repeat bg-bottom" />
  </div>
  <div class="px-8 mt-10">
    <h1 class="ds leading-relaxed text-oranye-muda uppercase text-2xl text-center mb-5 font-semibold">OVERVIEW</h1>
    <div class="grid grid-cols-1 md:grid-cols-12 gap-5">
      <div class="relative md:col-span-7 p-5">
        <h2 class="text-xl font-semibold leading-loose">Visualisasi Keuangan Mingguan</h2>
        <apexchart width="100%" height="300" type="line" :options="options" :series="series"></apexchart>
      </div>
      <div class="md:col-span-5 mb-20 md:mb-0">
        <h2 class="text-center mb-5 text-xl font-semibold leading-loose">Visualisasi Keuangan Mingguan</h2>
        <apexchart width="100%" height="300" type="donut" :options="options2" :series="series2"></apexchart>
      </div>
      <!--  -->
    </div>
  </div>
</template>

<script>

import MiniBanner from "@/components/miniBanner.vue"
export default {
  components: {
    MiniBanner
  },
  methods: {
    getLastWeek(num) {
      const namaBulan = ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul", "Agt", "Sep", "Okt", "Nov", "Des"];

      const today = new Date()
      var lastWeek = new Date(today.getFullYear(), today.getMonth(), today.getDate() - (7 * num));
      return lastWeek.getUTCDate().toString() + ", " + namaBulan[lastWeek.getMonth()];
    },
    getKemarin(num) {
      const today = new Date()
      let x = new Date(today.getFullYear(), today.getMonth(), today.getDate() - num);
      return x;
    },
    dateMonth(num) {
      const namaHari = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
      return namaHari[this.getKemarin(num).getDay()] + " (" + this.getKemarin(num).getDate() + "/" + (this.getKemarin(num).getMonth() + 1) + ")";
    }
  },
  data: function () {

    return {
      options: {
        chart: {
          type: 'line',
          zoom: {
            enabled: false
          },
          height: 300,
        },
        yaxis: {
          labels: {
            formatter: function (v) {
              var x = v / 1000;
              if (x < 1000000)
                return x + ' RB';
              else if (x >= 1000000 && x < 1000000000)
                return x + ' JT';
              else if (x >= 1000000000)
                return x + ' M';
            }
          }
        },
        xaxis: {
          categories: [
            this.getLastWeek(5),
            this.getLastWeek(4),
            this.getLastWeek(3),
            this.getLastWeek(2),
            this.getLastWeek(1)
          ]
        },
        tooltip: {
          enabled: true
        },
        stroke: {
          curve: 'smooth',
          colors: [
            '#090c14'
          ]
        }
      },
      series: [{
        name: 'Saldo',
        data: [
          25000,
          200000,
          120000,
          50000,
          90000
        ]
      }],
      options2: {
        labels: ["Pemasukan", "Pengeluaran"],
        colors: ['#00bc50', '#FF4560'],
        plotOptions: {
          pie: {
            donut: {
              labels: {
                show: true,
                name: {
                  show: true,
                },
                value: {
                  show: true,
                  formatter: function (value) {
                    if (value < 1000000) {
                      var x = value / 1000;
                      return x + ' RB';
                    }
                    else if (value >= 1000000 && value < 1000000000) {
                      var x = value / 1000000;
                      return x + ' JT';
                    }
                    else if (value >= 1000000000) {
                      var x = value / 1000000000;
                      return x + ' M';
                    }
                  }
                }
              },
            }
          }
        },
        legend: {
          show: false
        },
        dataLabels: {
          enabled: true,
        },

        stroke: {
          show: true,
          width: 1,
          colors: ['#fff']
        },
        xaxis: {
          categories: [
            this.dateMonth(1),
            this.dateMonth(2),
            this.dateMonth(3),
            this.dateMonth(4),
            this.dateMonth(5),
            this.dateMonth(6),
            this.dateMonth(7)
          ],
          labels: {
            formatter: function (value) {
              if (value < 1000000) {
                var x = value / 1000;
                return x + ' RB';
              }
              else if (value >= 1000000 && value < 1000000000) {
                var x = value / 1000000;
                return x + ' JT';
              }
              else if (value >= 1000000000) {
                var x = value / 1000000000;
                return x + ' M';
              }
            },
          }
        },
      },
      series2:  [2000000, 5000000],
    }
  }
}
</script>

<style>
.splitter {
  background-image: url("@/assets/img/bg.png");
  height: 80px;
}
</style>