<template>
  <div>
    <OverlayPopup ref="orderCount">
      <div class="order-count-wrapper">
        <div class="order-count-announcement">
          U staat op het punt om '{{ activeProduct.name }}'
          toe te voegen aan uw winkelmand
        </div>

        <div class="order-count-counter">
          <span style="margin-right: 20px;">Hoeveelheid: </span>
          
          <input type="number" v-model="productCount" />
        </div>

        <div class="order-count-counter">
          <span style="margin-right: 20px;">Minder pittig: </span>
          
          <input type="checkbox" v-model="lessSpicy" />
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
              <span>Ophaal datum&nbsp;&nbsp;&nbsp;</span>
              <input v-model="pickupDate" type="date" style="width: 120px; margin-bottom: 20px;" />
            </span>



            <span>
              <button :class="{'btn confirm': true }" style="margin-right: 20px;" @click="$refs.basketView.show = false">
                VERDER WINKELEN
              </button>

              <button :disabled="pickupDate === ''" :class="{'btn confirm': true, 'disabled': pickupDate === ''}" @click="$refs.basketView.show = false;$refs.orderPlacer.show = true">
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
              <a rel="noopener" :href="`https://api.whatsapp.com/send?phone=31610184265&app=DWWSite&text=${GetOrderMessage()}`" target="_blank" class="order-method-card">
                <unicon :name="'whatsapp'" />
              </a>
              <a rel="noopener" :href="`mailto:john@dewitworstenbrood.nl?subject=bestelling&body=${GetOrderMessage()}`" target="_blank" class="order-method-card">
                <unicon :name="'envelope'" />
              </a>
              <!--
              <span class="order-method-card">
                <unicon :name="'phone'" />
              </span>
              <a href="http://m.me/De-Wit-Worstenbrood-100184555272377/" target="_blank" class="order-method-card">
                <unicon :name="'facebook'" />
              </a>
              -->
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
            <h3 style="margin-top: -30px;">Un worstenbroodje van De Wit is er inne mi pit! 🔥</h3>

            <p>
              Begonnen als experiment, altijd al eens zelf worstenbrood willen bakken en eind 2020 gestart mede door alle beperkingen door de Corona. Na veel testen en proberen uitgekomen bij een worstenbroodje wat door veel mensen als erg lekker werd bestempeld.  
            </p>

            <p>
              Een worstenbroodje waar pit in zit is uiteindelijk het resultaat. Een worstje met een mix van diverse kruiden/specerijen. Een goed gevuld en lekker worstenbroodje van 90-95 gram. We hebben ook een milde variant waar maar ¼ deel sambal in zit.  
            </p>

            <p>
              <ul>
                <li>
                  Wij bakken alle bestelde worstenbroodjes vers, we bakken dus niet vooruit.
                </li>
                
                <li>
                  Opgehaalde broodjes kunnen dus altijd ingevroren worden.
                </li>

                <li>
                  Natuurlijk zijn alle worstenbroodjes hand gemaakt.
                </li>

                <li>
                  We hebben eventueel worstenbroodjes uit de vriezer voor als u te laat heeft besteld en toch nog op korte termijn wil genieten van een lekker worstenbroodje van de Wit.
                </li>

                <li>
                  We gebruiken half om half ongekruid gehakt. 
                </li>

                <li>
                  We hebben een eigen kruiden en sausjes mengsel wat we aan het gehakt toevoegen. 
                </li>

                <li>
                  Het brood wat om het gehakt zit is ook erg rijk van smaak. 
                </li>
              </ul>
            </p>

            <p>
              Heb jij ze al geproefd, laat dan even een beoordeling achter op onze facebookpagina.  
            </p>

            <p>
              Wil je bestellen, scroll dan naar beneden en maak je keuze en verstuur hem dan per mail of per whatsapp .   Afhalen na afspraak in Zijtaart maar kunt een voorkeur aangeven bij je bestelling wij nemen dan contact met je op. 
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
  </div>
</template>

<script>
import OverlayPopup from '@/components/OverlayPopup'
import OrderList from '@/components/OrderList'

export default {
  components: {
    OrderList,
    OverlayPopup
  },

  methods: {
    orderItem(productId) {
      this.productCount = 1;
      this.lessSpicy = false;
      this.activeProduct = JSON.parse(JSON.stringify(this.products[productId]));
      this.$refs.orderCount.show = true;
    },

    addProductsToBasket() {
      if (this.lessSpicy) {
        this.activeProduct.name += ' (minder pittig)';
      }

      const match = this.basket[this.activeProduct.name]

      if (!match)
        this.basket[this.activeProduct.name] = {
          count: this.productCount,
          price: this.activeProduct.price
        }
      else
        match.count = Number(match.count) + Number(this.productCount);

      this.$refs.orderCount.show = false;
      this.$refs.basketView.show = true;
      this.calcBasketTotal()
    },

    calcBasketTotal() {
      const basketProducts = Object.entries(this.basket).map(x => x[1]);
      this.basketTotal = basketProducts.reduce((acc, curr) => acc += curr.price * curr.count, 0)
    },

    GetOrderMessage() {
      let message = `Beste John, ik zou graag een bestelling willen plaatsen bij de Wit worstenbroodjes. %0A%0AIk zou graag het volgende willen bestellen:%0A`;

      Object.entries(this.basket).forEach(product => {
        message += `${product[1].count}x ${product[0]} %0A`
      })

      message += `%0ADat wordt dan in totaal ${this.basketTotal.toFixed(2)} euro, en ik zou de bestelling graag af willen halen op ${this.pickupDate}`

      return message
    }
  },

  data: () => ({
    basketTotal: 0,
    lessSpicy: false,
    pickupDate: '',
    activeProduct: {},
    basket: {
    },
    productCount: 1,
    products: [
      {
        image: 'products/worstenbroodje.jpg',
        name: 'Worstenbroodjes',
        description: [
            "Normaal standaard worstenbroodje zijn altijd vers gebakken uit de oven, en handgemaakt door een hobbybakker.   Ze zijn in te vriezen als u ze heeft opgehaald.",
            "Houd je niet van pittig bestel dan de mildere versie."
        ],
        weight: '90 - 95 gram',
        price: 1,
      },
      {
        image: 'products/worstenbroodje-klein.png',
        name: 'Worstenbroodjes klein',
        description: [
            "Deze worstenbroodjes zijn de kleinere variant van onze standaard worstenbroodjes, ze zijn ongeveer de helft in gewicht, en dus ook de helft goedkoper. Ze zijn in te vriezen als u ze heeft opgehaald.",
            "Houd je niet van pittig bestel dan de mildere versie."
        ],
        weight: '40 - 45 gram',
        price: 0.5,
      },
      {
        image: 'products/worstenbol.jpg',
        name: 'Witbollen',
        description: [
            "Deze worstenbroodjes zijn de bol vormige variant van onze standaard pittige worstenbroodjes, ze zijn ongeveer de helft in gewicht, en dus ook de helft goedkoper.",
            "hou je niet van pittig? dan kun je ook in de bestelling aangeven dat je het worstenbroodje wat milder wilt hebben."
        ],
        weight: '40 - 45 gram',
        price: 0.5,
      },
      {
        image: 'products/worstenbrood-xxxl.png',
        name: 'Worstenbrood XXXL',
        description: [
            "Op verzoek maken we ook XXXL worstenbroodjes. Deze worstenbroodjes zijn rond de 200 gram dus bijna een maaltijd. Leuk om cadeau te geven.",
            "Het is ook mogelijk om er een cijfer in te laten bakken."
        ],
        weight: '200 gram',
        price: 2.5,
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
