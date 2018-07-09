<template>
  <div id="app">
    <div class="header" />
    <div class="main">
      <div class="side-menu" />
      <div class="grid-wrapper">
        <c-grid
          ref="grid"
          :data="data"
          :frozen-col-count="1">
          <c-grid-column
            :width="50"
            field="check"
            column-type="check"
            action="check" />
          <c-grid-column
            field="personid"
            width= "85"
          >
            ID
          </c-grid-column>
          <c-grid-column-group
            caption="Name">
            <c-grid-input-column
              field= "fname"
              width= "20%"
              min-width="150"
            >
              First Name
            </c-grid-input-column>
            <c-grid-input-column
              field="lname"
              width= "20%"
              min-width="150"
            >
              Last Name
            </c-grid-input-column>
          </c-grid-column-group>
          <c-grid-button-column
            caption="SHOW REC"
            width="120"
            @click="onClickRecord"
          />
        </c-grid>
      </div>
      <div class="pr" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
  },
  data () {
    const data = new Array(100).fill(null).map((_, i) => ({
      personid: i,
      fname: `fname${i}`,
      lname: `lname${i}`
    }))
    return {
      data
    }
  },
  computed: {
  },
  mounted () {
  },
  methods: {
    onClickRecord (rec) {
      alert(JSON.stringify(rec))
    }
  }
}
</script>

<style>
  #app {
    display: flex;
    flex-direction: column;
    height: 100vh;
  }
  .header {
    height: 50px;
    background: #ffeeee;
  }
  .main {
    display: flex;
    flex: 1;
  }
  .main .side-menu {
    width: 100px;
    background: #eeeeff;
  }
  .main .grid-wrapper {
    height: 100%;
    flex: 1;
  }
  .main .pr {
    width: 100px;
    background: #eeffee;
  }
</style>
