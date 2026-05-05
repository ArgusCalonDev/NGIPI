import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        caraMenjadiSuksesInstan: resolve(__dirname, 'cara-menjadi-sukses-instan.html'),
        hariIniKebuangBerapa: resolve(__dirname, 'hari-ini-kebuang-berapa.html'),
        info: resolve(__dirname, 'info.html'),
        ngeMimpi: resolve(__dirname, 'nge-mimpi.html'),
        pembuatKeputusan: resolve(__dirname, 'pembuat-keputusan.html'),
        realLogin: resolve(__dirname, 'real-login.html'),
        searchEngine: resolve(__dirname, 'search-engine.html'),
        tombolRandom: resolve(__dirname, 'tombol-random.html'),
        generatorAlasanTelat: resolve(__dirname, 'generator-alasan-telat.html'),
        tunggu60Detik: resolve(__dirname, 'tunggu-60-detik.html'),
        pendeteksiOverthinking: resolve(__dirname, 'pendeteksi-overthinking.html'),
        kalkulator: resolve(__dirname, 'kalkulator.html'),
        klik1000Kali: resolve(__dirname, 'klik-1000-kali.html'),
        janganDipencet: resolve(__dirname, 'jangan-dipencet.html')
      },
    },
  },
})
