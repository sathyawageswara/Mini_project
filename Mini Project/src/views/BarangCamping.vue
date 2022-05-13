<template>
  <v-card class="mx-auto overflow-hidden" height="400">
    <v-app-bar color="deep-purple" dark>
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>

      <v-toolbar-title>Camping</v-toolbar-title>
    </v-app-bar>
    <v-img lazy-src="foto3.jpg" max-height="1500" max-width="1520" src="foto3.jpg"></v-img>
    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list nav dense>
        <v-list-item-group v-model="group" active-class="deep-purple--text text--accent-4">
          <v-list-item>
            <v-list-item-icon> <v-icon>mdi-home</v-icon> </v-list-item-icon>
            <v-btn router-link to="/">home</v-btn>
          </v-list-item>
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-cart</v-icon>
            </v-list-item-icon>
            <v-btn router-link to="/Tenda">Tenda</v-btn>
          </v-list-item>
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-cart</v-icon>
            </v-list-item-icon>
            <v-btn router-link to="/BarangCamping">Barang camping</v-btn>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </v-card>
</template>
<script>
export default {
  name: 'BarangCamping',
  data: () => ({
    drawer: false,
    group: null,
  }),
};
</script>

<style></style>
