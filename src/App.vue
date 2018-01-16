<template>
  <div id="app">
    <img src="./assets/logo.png">
    <!-- <HelloWorld/> -->
      <v-app id="inspire">
        <v-container fluid grid-list-md>

  <v-data-table
    v-bind:headers="headers"
    v-bind:items="items"
    v-bind:search="search"
    v-model="selected"
    item-key="model"
    class="elevation-1"
          select-all

  >
    <template slot="headerCell" slot-scope="props">
      <v-tooltip bottom>
        <span slot="activator">
          {{ props.header.text }}
        </span>
        <span>
          {{ props.header.text }}
        </span>
      </v-tooltip>
    </template>
    <template slot="items" slot-scope="props">
      <td>
        <v-checkbox
          primary
          hide-details
          v-model="props.selected"
          :disabled="selected.length >= maxCompare  && selected.indexOf(props.item) == -1"
        ></v-checkbox>
      </td>
      <td class="text-xs-right">{{ props.item.model }}</td>
      <td class="text-xs-right">{{ props.item.price }}</td>
      <td class="text-xs-right">{{ props.item.year }}</td>
      <td class="text-xs-right">{{ props.item.maker }}</td>
      <td class="text-xs-right">{{ props.item.engine_type }}</td>
    </template>
  </v-data-table>
        </v-container>
<v-container fluid grid-list-md>
      <v-data-iterator
        content-tag="v-layout"
        row wrap
        :items="selected"
      >
        <v-flex slot="item" slot-scope="props" xs12 sm6 md4 lg3>
          <v-card>
            <v-card-title><h4>{{ props.item.model }}</h4></v-card-title>
            <v-divider></v-divider>
            <v-list dense>
              <v-list-tile>
                <v-list-tile-content>Price:</v-list-tile-content>
                <v-list-tile-content class="align-end">{{ props.item.price }}</v-list-tile-content>
              </v-list-tile>
              <v-list-tile>
                <v-list-tile-content>Year:</v-list-tile-content>
                <v-list-tile-content class="align-end">{{ props.item.year }}</v-list-tile-content>
              </v-list-tile>
              <v-list-tile>
                <v-list-tile-content>Maker:</v-list-tile-content>
                <v-list-tile-content class="align-end">{{ props.item.maker }}</v-list-tile-content>
              </v-list-tile>
              <v-list-tile>
                <v-list-tile-content>Engine Type:</v-list-tile-content>
                <v-list-tile-content class="align-end">{{ props.item.engine_type }}</v-list-tile-content>
              </v-list-tile>
            </v-list>
          </v-card>
        </v-flex>
      </v-data-iterator>
    </v-container>
    </v-app>
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld'
import carsService from './services/cars'
export default {
  name: 'App',
  data () {
    return {
        maxCompare: 3,
        search: '',
        selected: [],
        headers: [
          { text: 'Model', value: 'model' },
          { text: 'Price', value: 'price' },
          { text: 'Year', value: 'year' },
          { text: 'Maker', value: 'maker' },
          { text: 'Engine Type', value: 'engine_type' }

        ],
        items: [],
      }
  },
  mounted: function () {
    this.init();
  },
  methods: {
    init (){
      let self = this;
      carsService.getCars()
      .then(res => {
        self.items = res.data;
      })
    },
    change (v,s,d){
      console.log(v);
      return ;
    }

  },
  computed: {
    verify (){
      if (this.selected.length > 3){
        return true;
      }
      return false;
    },

  }
  // components: {
  //   HelloWorld
  // }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
