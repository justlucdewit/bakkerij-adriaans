<template>
  <div class="order-list">
    <div v-for="(product, index) in products" :key="index">
        <DoubleSection>
            <p slot="left" class="product-image-wrapper">
            <img :src="require('@/assets/' + product.image)" class="product-image"/>
            </p>

            <div slot="right" class="product-info">
                <div class="title">
                    {{ product.name }}
                </div>

                <div class="weight">
                    {{ product.weight }} • <span class="price">€ {{ product.price.toFixed(2) }}</span> per stuk
                </div>

                <div v-for="(paragraph, index) in product.description" :key="index">
                    {{ paragraph }}
                </div>

                <div>
                    <button class="btn" @click="$emit('order', index)">BESTELLEN € {{ product.price.toFixed(2) }} </button>
                </div>

                
            </div>
        </DoubleSection>

        <br />
        <hr style="color: white"/>
        <br /><br /><br />
    </div>
    
  </div>
</template>

<script>
import DoubleSection from "@/components/DoubleSection"

export default {
    props: {
        products: {
            type: Array,
            required: true
        }
    },

    components: {
        DoubleSection
    }
}
</script>

<style scoped lang="scss">
.product-image-wrapper {
    text-align: center;
    
    .product-image {
        width: 100%;
        border-radius: 20px;
        filter: drop-shadow(0px 5px 4px #00000060);
    }
}

.product-info {
    div {
        padding-top: 20px;

        &.title {
            font-weight: bold;
            font-size: x-large;
        }
    }

    button {
        background: orange;
        font-weight: bold;
        color: white;
        border-radius: 8px;

        &:hover {
            background: rgb(209, 178, 121);
            cursor: pointer;
        }
    }

    .price {
        color: green;
        font-weight: bold;
    }

    .weight {
        color: gray;
        margin-top: -20px;
    }
    
}

</style>