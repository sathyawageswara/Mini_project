<template>
  <v-card class="mx-auto overflow-hidden" height="800">
    <v-app-bar color="deep-purple" dark>
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>

      <v-toolbar-title>Rent Campsite</v-toolbar-title>
    </v-app-bar>
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
    <v-app>
      <v-data-table :headers="headers" :items="nama" sort-by="Ukuran" class="elevation-1">
        <template v-slot:top>
          <v-toolbar flat>
            <v-toolbar-title>Tenda</v-toolbar-title>
            <v-divider class="mx-4" inset vertical></v-divider>
            <v-spacer></v-spacer>
            <v-dialog v-model="dialog" max-width="500px">
              <template v-slot:activator="{ on, attrs }">
                <v-btn color="primary" dark class="mb-2" v-bind="attrs" v-on="on"> New Item </v-btn>
              </template>
              <v-card>
                <v-card-title>
                  <span class="text-h5">{{ formTitle }}</span>
                </v-card-title>

                <v-card-text>
                  <v-container>
                    <v-row>
                      <v-col cols="12" sm="6" md="4">
                        <v-text-field v-model="editedItem.name" label="Name"></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6" md="4">
                        <v-text-field v-model="editedItem.size" label="Ukuran"></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6" md="4">
                        <v-text-field v-model="editedItem.price" label="Harga"></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6" md="4">
                        <v-text-field v-model="editedItem.Jumlah" label="Jumlah"></v-text-field>
                      </v-col>
                    </v-row>
                  </v-container>
                </v-card-text>

                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="blue darken-1" text @click="close"> Cancel </v-btn>
                  <v-btn color="blue darken-1" text @click="save"> Save </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
            <v-dialog v-model="dialogDelete" max-width="500px">
              <v-card>
                <v-card-title class="text-h5">Are you sure you want to delete this item?</v-card-title>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="blue darken-1" text @click="closeDelete">Cancel</v-btn>
                  <v-btn color="blue darken-1" text @click="deleteItemConfirm">OK</v-btn>
                  <v-spacer></v-spacer>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </v-toolbar>
        </template>
        <template v-slot:[`item.actions`]="{ item }">
          <v-icon small class="mr-2" @click="editItem(item)"> mdi-pencil </v-icon>
          <v-icon small @click="deleteItem(item)"> mdi-delete </v-icon>
        </template>
        <template v-slot:no-data>
          <v-btn color="primary" @click="initialize"> Reset </v-btn>
        </template>
      </v-data-table>
    </v-app>
  </v-card>
</template>

<script>
export default {
  name: 'TendaCamp',
  data: () => ({
    drawer: false,
    group: null,
    dialog: false,
    dialogDelete: false,
    headers: [
      {
        text: 'List Tenda',
        align: 'start',
        sortable: false,
        value: 'name',
      },
      { text: 'Ukuran (cm)', value: 'size' },
      { text: 'Harga (Rp)', value: 'price' },
      { text: 'Jumlah', value: 'Jumlah' },
      { text: 'Actions', value: 'actions', sortable: false },
    ],
    nama: [],
    editedIndex: -1,
    editedItem: {
      Name: '',
      size: 0,
      price: 0,
      jumlah: 0,
    },
    defaultItem: {
      Name: '',
      size: '',
      price: 0,
      jumlah: 0,
    },
  }),
  computed: {
    formTitle() {
      return this.editedIndex === -1 ? 'New Item' : 'Edit Item';
    },
  },
  watch: {
    dialog(val) {
      val || this.close();
    },
    dialogDelete(val) {
      val || this.closeDelete();
    },
  },
  created() {
    this.initialize();
  },
  methods: {
    initialize() {
      this.nama = [
        {
          name: 'Tenda dome',
          size: '120 x 240 x 360',
          price: 1000000,
          Jumlah: 20,
        },
        {
          name: 'Tenda istana',
          size: '120 x 240 x 360',
          price: 1000000,
          Jumlah: 20,
        },
        {
          name: 'Tenda kecil',
          size: '120 x 240 x 360',
          price: 1000000,
          Jumlah: 20,
        },
        {
          name: 'Tenda xl',
          size: '120 x 240 x 360',
          price: 1000000,
          Jumlah: 20,
        },
      ];
    },
    editItem(item) {
      this.editedIndex = this.nama.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },
    deleteItem(item) {
      this.editedIndex = this.nama.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialogDelete = true;
    },
    deleteItemConfirm() {
      this.nama.splice(this.editedIndex, 1);
      this.closeDelete();
    },
    close() {
      this.dialog = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },
    closeDelete() {
      this.dialogDelete = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },
    save() {
      if (this.editedIndex > -1) {
        Object.assign(this.nama[this.editedIndex], this.editedItem);
      } else {
        this.nama.push(this.editedItem);
      }
      this.close();
    },
  },
};
</script>

<style></style>
