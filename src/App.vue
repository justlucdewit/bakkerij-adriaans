<template>
  <div id="app">
    <Header
      :logo="companyInfo.companyLogo"
      :navLinks="navLinks"
      :linkWidth="78"
    />

    <div style="margin: 50px; flex-grow: 1">
      <router-view />
    </div>

    <Footer :socials="companyInfo.socials"
            :image="companyInfo.companyLogo" />
    
  </div>
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'

import RMS from './rms_connector'

export default {
  components: {
    Header,
    Footer
  },

  async mounted() {
    this.companyInfo = await RMS.getCompanyInfo()
    document.title = this.companyInfo.companyName
  },

  data: () => ({
    companyInfo: {},
    navLinks: [
      {
        name: 'Home',
        to: '/home'
      },
      {
        name: 'Producten',
        to: '/producten'
      }
    ],

    socials: [
      {
        type: 'facebook',
        link: 'https://www.facebook.com/De-Wit-Worstenbrood-100184555272377/',
        name: 'De Wit Worstenbrood'
      },
      {
        type: 'at',
        link: 'mailto:john@dewitworstenbrood.nl',
        name: 'john@dewitworstenbrood.nl'
      },
      {
        type: 'phone',
        link: 'tel:31610184265',
        name: '31610184265'
      },
      {
        type: 'whatsapp',
        link: 'https://api.whatsapp.com/send?phone=31610184265&app=DWWSite&text=Hallo, ik zou graag <aantal> <product> willen afhalen, wanneer kan ik ze komen ophalen?',
        name: '31610184265'
      }
    ]
  })
}
</script>


<style lang="scss">
@import "@/components/style.scss";
</style>
