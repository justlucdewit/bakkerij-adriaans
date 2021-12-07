<template>
  <div class="home-wrapper">
    <div class="home">
      <span class="center" style="padding: 20px 0px">
        <h1 style="margin-bottom: -20px">De Wit Worstenbrood</h1>
        <h3 style="margin-bottom: 50px">Un worstenbroodje van De Wit is er een mi pit! 🔥</h3>
      </span>

      <DoubleSection>
        <p slot="left">
          Begonnen als experiment, altijd al eens zelf worstenbrood willen bakken.
          De afgelopen periode de stap toch maar gezet.<br /><br />

          Een worstenbroodje waar pit in zit is het resultaat.
          Een worstje met een mix van diverse kruiden/specerijen.
          Een goed gevuld en lekker worstenbroodje van 90-95 gram.<br /><br />

          Heb jij ze al geproefd?
          Laat weten wat je er van vond.<br /><br />

          Wil je bestellen, neem maar contact op via een persoonlijk bericht.
          Afhalen na afspraak in Zijtaart.
        </p>
        <p slot="right" class="front-image-wrapper">
          <img src="@/assets/products/products_all1.jpg" class="front-image"/>
        </p>
      </DoubleSection>
    </div>
  </div>
</template>

<script>
import DoubleSection from "@/components/DoubleSection"

export default {
  name: 'Home',

  components: {
    DoubleSection
  }
}
</script>

<style scoped lang="scss">
.home-wrapper {
  text-align: center;

  .home {
    max-width: 800px;
    display: inline-block;
    text-align: left;

    .center {
      text-align: center;
    }

    .front-image-wrapper {
      text-align: center;
      margin-top: 50px;

      .front-image {
        width: 300px;
        opacity: 0.6;
        transform: rotate(-20deg);
        border-radius: 30px;
      }
    }
  }
}
</style>
