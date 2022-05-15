<template>
  <v-card class="mx-auto overflow-hidden" height="800">
    <v-app-bar color="deep-purple" dark>
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>

      <v-toolbar-title>Camping</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn text rounded router-link to="/Login">Login</v-btn>
      <v-btn text rounded router-link to="/About">About</v-btn>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list nav dense>
        <v-list-item-group v-model="group" active-class="deep-purple--text text--accent-4">
          <v-list-item>
            <v-list-item-icon> <v-icon>mdi-home</v-icon> </v-list-item-icon>
            <v-btn router-link="/">home</v-btn>
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
  name: 'AboutPage',
  data: () => ({
    drawer: false,
    group: null,
  }),
};
</script>

<style></style>
