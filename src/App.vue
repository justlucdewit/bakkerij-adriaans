<template>
  <div id="app">
    <Header
      logo="logo.png"
      :navLinks="[]"
      :linkWidth="78"
    />

    <OverlayPopup ref="orderCount">
      <div class="order-count-wrapper">
        <div class="order-count-announcement">
          U staat op het punt om '{{ activeProduct.name }}'
          toe te voegen aan uw winkelmand
        </div>

        <div class="order-count-counter">
          <span style="margin-right: 20px;">Hoeveelheid: {{ productCount }}</span>
          
          <button class="btn cancle" @mousedown="minusDown = true" @mouseup="minusDown = false">-</button>
          <button class="btn cancle" @mousedown="plusDown = true" @mouseup="plusDown = false">+</button>
        </div>

        <span>
          <button class="btn cancle" style="margin-right: 20px;" @click="$refs.orderCount.show = false">
            ANNULEER
          </button>

          <button class="btn confirm" @click="addProductsToBasket">
            TOEVOEGEN € {{ (productCount * activeProduct.price).toFixed(2) }}
          </button>
        </span>
      </div>
    </OverlayPopup>

    <OverlayPopup ref="basketView">
      <div class="content-wrapper">
        <div class="content">
          <div class="order-count-wrapper">
            <div class="order-count-announcement">
              Winkelmand • <span class="price">€ {{ basketTotal.toFixed(2) }}</span>
            </div>
            <table class="basket-list">
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Aantal</th>
                  <th>Prijs totaal</th>
                </tr>
              </thead>

              <tbody>
                <tr v-for="(entry, index) in Object.entries(basket)" :key="index">
                  <td>
                    {{ entry[0] }}
                  </td>
                  <td>
                    {{ entry[1].count }}
                  </td>
                  <td>
                    € {{ (entry[1].count * entry[1].price).toFixed(2) }}
                  </td>
                </tr>
              </tbody>
            </table>

            <span>
              <button class="btn confirm" style="margin-right: 20px;" @click="$refs.basketView.show = false">
                VERDER WINKELEN
              </button>

              <button class="btn confirm" @click="$refs.basketView.show = false;$refs.orderPlacer.show = true">
                BESTELLEN € {{ basketTotal.toFixed(2) }}
              </button>
            </span>
          </div>
        </div>
      </div>
    </OverlayPopup>

    <OverlayPopup ref="orderPlacer">
      <div class="content-wrapper">
        <div class="content">
          <div class="order-count-wrapper">
            <div class="order-count-announcement">
              Bestellen
            </div>

            <div style="margin-bottom: 40px">
              Kies Uw methode om te bestellen:
            </div>

            <div class="order-methods">
              <a :href="`https://api.whatsapp.com/send?phone=31610184265&app=DWWSite&text=${GetOrderMessage()}`" target="_blank" class="order-method-card">
                <unicon :name="'whatsapp'" />
              </a>
              <a :href="`mailto:dewitworstenbrood@hotmail.com?subject=bestelling&body=${GetOrderMessage()}`" target="_blank" class="order-method-card">
                <unicon :name="'envelope'" />
              </a>
              <span class="order-method-card">
                <unicon :name="'phone'" />
              </span>
              <a href="http://m.me/De-Wit-Worstenbrood-100184555272377/" target="_blank" class="order-method-card">
                <unicon :name="'facebook'" />
              </a>
            </div>

            <span style="margin-top: 40px">
              <button class="btn cancle" style="margin-right: 20px;" @click="$refs.orderPlacer.show = false">
                TERUG
              </button>
            </span>
          </div>
        </div>
      </div>
    </OverlayPopup>

    <div style="margin: 50px;flex-grow: 1;">
      <div class="content-wrapper">
        <div class="content">
          <span class="center" style="padding: 20px 0px">
            <h1>De Wit Worstenbrood</h1>
            <h3 style="margin-top: -30px;">Un worstenbroodje van De Wit is er een mi pit! 🔥</h3>

            <p>
              Begonnen als experiment, altijd al eens zelf worstenbrood
              willen bakken. De afgelopen periode de stap toch maar gezet.
            </p>

            <p>
              Een worstenbroodje waar pit in zit is het resultaat. Een
              worstje met een mix van diverse kruiden/specerijen. Een
              goed gevuld en lekker worstenbroodje van 90-95 gram.
            </p>

            <p>
              Heb jij ze al geproefd? Laat weten wat je er van vond.
            </p>

            <p>
              Wil je bestellen, neem maar contact op via een persoonlijk
              bericht. Afhalen na afspraak in Zijtaart.
            </p>
          </span>

          <br><br><br>

          <div>
            <OrderList :products=products @order="orderItem" />
          </div>

          <button class="btn confirm" @click="$refs.basketView.show = true" v-if="Object.entries(basket).length > 0">
            BEKIJK WINKELMAND
          </button>
        </div>
      </div>
    </div>

    <Footer :socials="socials"
            image="logo-small.png" />
    
  </div>
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import OverlayPopup from '@/components/OverlayPopup'
import OrderList from '@/components/OrderList'

export default {
  components: {
    Header,
    Footer,
    OrderList,
    OverlayPopup
  },

  mounted() {
    setInterval(() => {
      if (this.plusDown)
        this.productCount += 1
      if (this.minusDown && this.productCount > 1)
        this.productCount -= 1
    }, 100)
  },

  methods: {
    orderItem(productId) {
      this.productCount = 1;
      this.activeProduct = this.products[productId];
      this.$refs.orderCount.show = true;
    },

    addProductsToBasket() {
      const match = this.basket[this.activeProduct.name]

      if (!match)
        this.basket[this.activeProduct.name] = {
          count: this.productCount,
          price: this.activeProduct.price
        }
      else
        match.count += this.productCount

      this.$refs.orderCount.show = false;
      this.$refs.basketView.show = true;
      this.calcBasketTotal()
    },

    calcBasketTotal() {
      const basketProducts = Object.entries(this.basket).map(x => x[1]);
      this.basketTotal = basketProducts.reduce((acc, curr) => acc += curr.price * curr.count, 0)
    },

    GetOrderMessage() {
      let message = `Beste John, ik zou graag een bestelling willen plaatsen voor de Wit worstenbroodjes. %0A%0ADe dingen die ik zou willen bestellen zijn:%0A`;

      console.log('aaa', this.basket)

      Object.entries(this.basket).forEach(product => {
        console.log('aaa', product)
        message += `${product[1].count}x ${product[0]} %0A`
      })

      message += `%0ADat wordt dan in totaal ${this.basketTotal.toFixed(2)} euro`

      return message
    }
  },

  data: () => ({
    minusDown: false,
    plusDown: false,
    basketTotal: 0,

    activeProduct: {},
    basket: {
    },
    productCount: 1,
    products: [
      {
        image: 'products/worstenbroodje.jpg',
        name: 'Worstenbroodjes',
        description: [
            "Deze pittige worstenbroodjes zijn vers gebakken uit de oven, en handgemaakt door een hobbybakker. Ze zijn in te vrienzen, en hand gekruid.",
            "hou je niet van pittig? dan kun je ook in de bestelling aangeven dat je het worstenbroodje wat milder wilt hebben."
        ],
        weight: '90 - 95 gram',
        price: 1,
      },
      {
        image: 'products/worstenbroodje-klein.png',
        name: 'Worstenbroodjes  (klein)',
        description: [
            "Deze worstenbroodjes zijn de kleinere variant van onze standaard pittige worstenbroodjes, ze zijn ongeveer de helft in gewicht, en dus ook de helft goedkoper.",
            "hou je niet van pittig? dan kun je ook in de bestelling aangeven dat je het worstenbroodje wat milder wilt hebben."
        ],
        weight: '40 - 45 gram',
        price: 0.5,
      },
      {
        image: 'products/worstenbol.jpg',
        name: 'Worstenbollen',
        description: [
            "Deze worstenbroodjes zijn de bol vormige variant van onze standaard pittige worstenbroodjes, ze zijn ongeveer de helft in gewicht, en dus ook de helft goedkoper.",
            "hou je niet van pittig? dan kun je ook in de bestelling aangeven dat je het worstenbroodje wat milder wilt hebben."
        ],
        weight: '40 - 45 gram',
        price: 0.5,
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
        link: 'mailto:dewitworstenbrood@hotmail.com',
        name: 'dewitworstenbrood@hotmail.com'
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

.content-wrapper {
  text-align: center;

  .content {
    max-width: 800px;
    display: inline-block;
    text-align: left;
  }
}

.order-count-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  align-items: center;
  padding: 20px;

  button {
    font-size: 12px;
    margin-left: 20px;
  }

  input {
    width: 100px;
  }

  .order-count-counter {
    margin-bottom: 40px;
  }

  .order-count-announcement {
    text-align: center;
    font-weight: bold;
    font-size: large;
    margin-bottom: 40px;
  }

  .order-methods {
    display: grid;
    grid-template-columns: 1fr 1fr;
    row-gap: 40px;
    column-gap: 40px;

    .order-method-card {
      background: #eee;
      text-align: center;
      height: 100px;
      width: 100px;
      display: flex;
      justify-content: center;
      align-items: center;
      
      &:hover {
        opacity: 0.6;
        cursor: pointer;
      }

      svg {
        height: 50px;
        width: 50px;
      }
    }
  }

  .basket-list {
    margin-bottom: 40px;
  }
}

.price {
  color: green;
}
</style>
