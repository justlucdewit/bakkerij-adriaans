<template>
  <div id="app">
    <Header
      logo="logo.png"
      :navLinks="navlinks"
      :linkWidth="78"
    />

    <div style="margin: 50px;flex-grow: 1;">
      <router-view />
    </div>

    <Footer :socials="socials"
            image="logo-small.png" />
    
  </div>
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default {
  components: {
    Header,
    Footer
  },

  data: () => ({
    navlinks: [
      {
        name: "Home",
        to: "/"
      },
      {
        name: "lijst",
        to: "/bestellijst"
      },
      {
        name: "Contact",
        to: "/contact"
      },
    ],

    socials: [
      {
        type: 'facebook',
        link: 'https://www.facebook.com/De-Wit-Worstenbrood-100184555272377/',
        name: 'testtest'
      },
      {
        type: 'at',
        link: 'mailto:dewitworstenbrood@hotmail.com',
        name: 'testtest'
      },
      {
        type: 'phone',
        link: 'tel:31610184265',
        name: 'testtest'
      },
      {
        type: 'whatsapp',
        link: 'https://api.whatsapp.com/send?phone=31610184265&app=DWWSite&text=Hallo, ik zou graag <aantal> <product> willen afhalen, wanneer kan ik ze komen ophalen?',
        name: 'testtest'
      }
    ]
  })
}
</script>


<style lang="scss">
@import "@/components/style.scss";
</style>
