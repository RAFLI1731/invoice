<template>
    <h4 style="text-align: center;" class="text-teal">Invoice Penjualan</h4>
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
    <!-- <div class="scrooll ">
        <div class="q-gutter-y-md row text-white" style="margin-left: 5%; margin-right: 5%;margin-top:2%; background-color: black; text align: center; max-width: 200%;">
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
    </div> -->
    <!-- Tambah Kolom -->
    <div class="q-pa-md">
    <q-table
      title="Treats"
      :rows="rows"
      :columns="columns"
      row-key="name"
      binary-state-sort
    >
      <template v-slot:body="props">
        <q-tr :props="props">
          <q-td key="name" :props="props">
            {{ props.row.name }}
            <q-popup-edit v-model="props.row.name">
              <q-input v-model="props.row.name" dense autofocus counter />
            </q-popup-edit>
          </q-td>
          <q-td key="deskripsi" :props="props">
            {{ props.row.deskripsi }}
            <q-popup-edit v-model="props.row.calories" title="Update calories" buttons>
              <q-input type="number" v-model="props.row.deskripsi" dense autofocus />
            </q-popup-edit>
          </q-td>
          <q-td key="kuantitas" :props="props">
            <div class="text-pre-wrap">{{ props.row.kuantitas }}</div>
            <q-popup-edit v-model="props.row.fat">
              <q-input type="textarea" v-model="props.row.kuantitas" dense autofocus />
            </q-popup-edit>
          </q-td>
          <q-td key="harga" :props="props">
            {{ props.row.carbs }}
            <q-popup-edit v-model="props.row.harga" title="Update carbs" buttons persistent>
              <q-input type="number" v-model="props.row.harga" dense autofocus hint="Use buttons to close" />
            </q-popup-edit>
          </q-td>
          <q-td key="diskon" :props="props">{{ props.row.diskon }}</q-td>
          <q-td key="pajak" :props="props">{{ props.row.pajak }}</q-td>
          <q-td key="jumlah" :props="props">{{ props.row.jumlah }}</q-td>
        </q-tr>
      </template>
    </q-table>
    <div class="row" style="margin-left: 5%; margin-right: 5%; margin-top: 5%">
        <q-btn :disable="loading" color="white" text-color="white" icon="add" label="Tambah Baris Baru" class="col-4 bg-teal" flat style="border-radius: 15px;" @click="addRow"/>
        <q-btn class="col-4 bg-teal" flat color="white" :disable="loading" icon="remove" label="Hapus Baris" @click="removeRow" style="border-radius: 15px;"/>
    </div>
  </div>
</template>
<style scoped>
.scrooll {
  overflow-y: scroll; /* Show vertical scrollbar */
  overflow-x: scroll; /* Show horizontal scrollbar */
}
</style>
<script>
import { ref } from 'vue'
const columns = [
  {
    name: 'name',
    required: true,
    label: 'Nama Product',
    align: 'left',
    field: row => row.name,
    format: val => `${val}`,
    sortable: true
  },
  { name: 'deskripsi', align: 'center', label: 'Deskripsi', field: 'deskripsi', sortable: true },
  { name: 'kuantitas', label: 'Kuantitas', field: 'kuantitas', sortable: true },
  { name: 'harga', label: 'Harga', field: 'harga' },
  { name: 'diskon', label: 'Diskon (%)', field: 'diskon' },
  { name: 'pajak', label: 'Pajak', field: 'pajak' },
  { name: 'jumlah', label: 'Jumlah', field: 'jumlah', sortable: true, sort: (a, b) => parseInt(a, 10) - parseInt(b, 10) }
]

const originalRows = [
  {
    name: '',
    deskripsi: '',
    kuantitas: 0,
    harga: 0,
    diskon: 0,
    pajak: 0,
    jumlah: 0
  }
]
export default {
  setup () {
    const progress = ref(1)
    const loading = ref(false)
    const filter = ref('')
    const rowCount = ref(10)
    const rows = ref([...originalRows])
    return {
      loading,
      filter,
      rowCount,
      columns,
      rows,
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
      },
      addRow () {
        loading.value = true
        setTimeout(() => {
          const
            index = Math.floor(Math.random() * (rows.value.length + 1)),
            row = originalRows[Math.floor(Math.random() * originalRows.length)]

          if (rows.value.length === 0) {
            rowCount.value = 0
          }

          row.id = ++rowCount.value
          const newRow = { ...row } // extend({}, row, { name: `${row.name} (${row.__count})` })
          rows.value = [...rows.value.slice(0, index), newRow, ...rows.value.slice(index)]
          loading.value = false
        }, 500)
      },
      removeRow () {
        loading.value = true
        setTimeout(() => {
          const index = Math.floor(Math.random() * rows.value.length)
          rows.value = [...rows.value.slice(0, index), ...rows.value.slice(index + 1)]
          loading.value = false
        }, 500)
      }
    }
  }
}
</script>
