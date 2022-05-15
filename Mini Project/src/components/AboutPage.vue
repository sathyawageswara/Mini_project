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
            <v-btn router-link="/">Home</v-btn>
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
    <template>
      <v-app>
        <v-parallax height="1000" dark src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg">
          <v-row align="center" justify="center">
            <v-col class="text-center" cols="12">
              <h1 class="text-h4 font-weight-thin mb-4">Campsite</h1>
              <h4 class="subheading text-center">
                Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. Mauris cursus commodo interdum. Praesent ut risus eget metus luctus accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim a sit amet dui.
                Duis commodo vitae velit et faucibus. Morbi vehicula lacinia malesuada. Nulla placerat augue vel ipsum ultrices, cursus iaculis dui sollicitudin. Vestibulum eu ipsum vel diam elementum tempor vel ut orci. Orci varius natoque
                penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              </h4>
            </v-col>
          </v-row>
        </v-parallax>
        <v-spacer></v-spacer>
        <v-footer dark padless>
          <v-card flat tile class="indigo lighten-1 white--text text-center">
            <v-card-text>
              <v-btn v-for="icon in icons" :key="icon" class="mx-4 white--text" icon>
                <v-icon size="24px">
                  {{ icon }}
                </v-icon>
              </v-btn>
            </v-card-text>

            <v-card-text class="white--text pt-0">
              Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. Mauris cursus commodo interdum. Praesent ut risus eget metus luctus accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim a sit amet dui.
              Duis commodo vitae velit et faucibus. Morbi vehicula lacinia malesuada. Nulla placerat augue vel ipsum ultrices, cursus iaculis dui sollicitudin. Vestibulum eu ipsum vel diam elementum tempor vel ut orci. Orci varius natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            </v-card-text>

            <v-divider></v-divider>

            <v-card-text class="white--text"> {{ new Date().getFullYear() }} — <strong>Vuetify</strong> </v-card-text>
          </v-card>
        </v-footer>
      </v-app>
    </template>
  </v-card>
</template>
<script>
export default {
  name: 'AboutPage',
  data: () => ({
    drawer: false,
    group: null,
    icons: ['mdi-facebook', 'mdi-twitter', 'mdi-linkedin', 'mdi-instagram'],
  }),
};
</script>

<style></style>
