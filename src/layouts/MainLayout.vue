<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar class="bg-teal">
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      class="bg-teal"
    >
    <q-list bordered class="rounded-borders" >
      <q-expansion-item
            class="bg-teal-5 text-white"
            expand-separator
            icon="description"
            label="Invoicing"
          >
            <q-card class="bg-teal text-white">
              <q-item class="q-ml-md" clickable active-class="active" v-ripple exact :to="{ name: 'pembelian'}">
                  <q-item-section avatar>
                  </q-item-section>
                  <q-item-section >
                    <q-item-label>Permintaan</q-item-label>
                  </q-item-section>
                </q-item>
                <q-item class="q-ml-md" clickable active-class="active" v-ripple exact :to="{ name: 'penjualan'}">
                  <q-item-section avatar>
                  </q-item-section>
                  <q-item-section >
                    <q-item-label>Penjualan</q-item-label>
                  </q-item-section>
                </q-item>
            </q-card>
          </q-expansion-item>
      <q-expansion-item
            class="bg-teal-5 text-white"
            expand-separator
            icon="description"
            label="Statistik Penjualan"
          >
            <q-card class="bg-teal text-white">
              <q-item class="q-ml-md" clickable active-class="active" v-ripple exact :to="{ name: 'pembelian'}">
                  <q-item-section avatar>
                  </q-item-section>
                  <q-item-section >
                    <q-item-label>DiagramChart</q-item-label>
                  </q-item-section>
                </q-item>
                <q-item class="q-ml-md" clickable active-class="active" v-ripple exact :to="{ name: 'penjualan'}">
                  <q-item-section avatar>
                  </q-item-section>
                  <q-item-section >
                    <q-item-label>Penjualan</q-item-label>
                  </q-item-section>
                </q-item>
            </q-card>
          </q-expansion-item>
    </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({

  setup () {
    const leftDrawerOpen = ref(false)

    return {
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
})
</script>
