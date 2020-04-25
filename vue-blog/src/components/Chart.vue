<template>
  <div id="app" class="main">
        <div class="container">
            <h2 class="aboutH2">
                Kim bu İlteriş Keskin?
            </h2>
            <!-- <p class="aboutP">
                Kim bu İlteriş Keskin?
            </p> -->
            <div class=chart>
                <trend
                    :data="[0, 2, 5, 9, 5, 10, 3, 5, 0, 0, 1, 8, 2, 9, 0]"
                    :gradient="['#fff']"
                    auto-draw
                    smooth
                    >
                </trend>
            </div>
        </div>
  </div>
</template>

<script>
  export default {
    name: "Chart"
  }
</script>

<style scoped>
  .main {
    margin-bottom: calc(15% + 10px);
  }
    
    .chart {
        width: 200px;
    }

  .aboutH2 {
    font-weight: 900;
    margin-bottom: 20px;
    color: #f2f2f2;
  }

  .aboutP {
    color: #d1cec9;
  }

  .aboutHr {
    border: 1px solid #d1cec9;;
  }
</style>
