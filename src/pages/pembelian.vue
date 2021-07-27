<template>
    <h4 style="text-align: center;" class="text-teal">Invoice Pembelian</h4>
    <!-- INFO PELANGGAN -->
    <div>
      <h5 style="margin-left: 5%;" class="text-primary">Info Pelanggan</h5>
    </div>
    <div class="q-gutter-y-md row" style="margin-left: 5%; margin-right: 5%">
      <q-input stack-label :dense="dense" color="teal" v-model="text" label="No. Invoice" class="col"></q-input>
      <q-input stack-label :dense="dense" color="teal" v-model="date" type="date" label="Tgl. Invoice" class="col" style="margin-left: 5%"></q-input>
    </div>
    <div class="q-gutter-y-md row" style="margin-left: 5%; margin-right: 5%; margin-top: 2%">
      <q-input stack-label :dense="dense" color="teal" label="Salesperson" class="col" hint="No Sales Person"></q-input>
      <q-input stack-label :dense="dense" color="teal" v-model="date" type="date" label="Tgl. Jatuh Tempo" class="col" style="margin-left: 5%"></q-input>
    </div>
    <div class="q-gutter-y-md row" style="margin-left: 5%; margin-right: 5%; margin-top: 2%; max-width: 43%">
      <q-input stack-label :dense="dense" color="teal" label="Nama Pelanggan" class="col" hint="No Sales Person"></q-input>
    </div>
          <!-- INFO PERUSAHAAN -->
    <div>
      <h5 style="margin-left: 5%;" class="text-primary">Info Perusahaan</h5>
    </div>
    <div class="q-gutter-y-md row" style="margin-left: 5%; margin-right: 5%">
      <q-input stack-label :dense="dense" color="teal" v-model="text" label="Nama Perusahaan" class="col"></q-input>
      <q-input stack-label :dense="dense" color="teal" v-model="date" label="Alamat Perusahaan" class="col" style="margin-left: 5%"></q-input>
    </div>
    <div class="q-gutter-y-md row" style="margin-left: 5%; margin-right: 5%; margin-top: 2%">
      <q-input stack-label :dense="dense" color="teal" label="No Handphone" class="col"></q-input>
      <q-input stack-label :dense="dense" color="teal" v-model="date" label="Email" class="col" style="margin-left: 5%"></q-input>
    </div>
    <div>
      <h5 style="margin-left: 5%;" class="text-primary">Data Product</h5>
    </div>
    <div class="q-gutter-y-md row text-white" style="margin-left: 5%; margin-right: 5%;margin-top:2%; background-color: black; text align: center;">
      <label class="col-1"></label>
      <label class="col">Product</label>
      <label class="col">Deskripsi</label>
      <label class="col">Kuantitas</label>
      <label class="col">Harga</label>
      <label class="col">Diskon</label>
      <label class="col">Pajak</label>
      <label class="col">Jumlah</label>
    </div>
    <div class="q-gutter-y-md row" style="margin-left: 5%; margin-right: 5%;">
      <q-input stack-label :dense="dense" color="teal"  label="" class="col-1" disable></q-input>
      <q-input stack-label :dense="dense" color="teal" v-model="namaProduct" label="Nama Product" class="col">{{ text }}</q-input>
      <q-input stack-label :dense="dense" color="teal" v-model="Deskripsi" label="Deskripsi" class="col">{{ text }}</q-input>
      <q-input stack-label :dense="dense" color="teal" v-model="Kuantitas" label="Kuantitas" class="col">{{ text }}</q-input>
      <q-input stack-label :dense="dense" color="teal" v-model="Harga" label="Harga" class="col">{{ text }}</q-input>
      <q-input stack-label :dense="dense" color="teal" v-model="Diskon" label="Diskon(%)" class="col">{{ text }}</q-input>
      <q-input stack-label :dense="dense" color="teal" v-model="Pajak" label="Pajak" class="col">{{ text }}</q-input>
      <q-input stack-label :dense="dense" color="teal" v-model="Jumlah" label="Jumlah" class="col" >{{ text }}</q-input>
    </div>
    <div style="margin-bottom: 10%">
    </div>
        <div class="q-pa-md">
          <q-btn class="q-mb-md" color="primary" label="Regenerate layout" @click="onClick" />

          <div class="column example-container">
            <div class="flex-break hidden"></div>
            <div class="flex-break"></div>
            <div class="flex-break"></div>
            <div class="flex-break"></div>

            <div v-for="(cell, i) in cells" :key="i" class="example-cell" tabindex="0">
              <div>
                <div v-for="(text, j) in cell" :key="j">
                  {{ text }}
                </div>
              </div>
            </div>
          </div>
  </div>
</template>
<style lang="sass" scoped>
.flex-break
  flex: 1 0 100% !important
  width: 0 !important

$x: 4

@for $i from 1 through ($x - 1)
  .example-container > div:nth-child(#{$x}n + #{$i})
    order: #{$i}

.example-container > div:nth-child(#{$x}n)
  order: #{$x}

.example-container
  height: 700px

  .example-cell
    width: 25%
    padding: 1px

    > div
      padding: 4px 8px
      box-shadow: inset 0 0 0 2px $grey-6
</style>
<script>
import { ref } from 'vue'
const generateCells = () => Array(24).fill(null).map((_, cell) => (
  Array(2 + Math.ceil(3 * Math.random())).fill(null).map((_, text) => `Cell ${cell + 1} - ${text + 1}`)
))

export default {
  setup () {
    const cells = ref(generateCells())
    const progress = ref(1)
    return {
      cells,
      onClick () {
        cells.value = generateCells()
      },
      text: ref(''),
      namaProduct: ref(''),
      Deskripsi: ref(''),
      Kuantitas: ref(''),
      Harga: ref(''),
      Diskon: ref(''),
      Pajak: ref(''),
      Jumlah: ref(''),
      date: ref(''),
      dense: ref(false),
      progress,
      randomize () {
        progress.value = Math.random()
      }
    }
  }
}
</script>
