<template>
    <div class="products-wrapper">
        <div class="products">
            <input type="text" class="form-control" placeholder="zoeken..." />
            <ProductList :products="products" />
        </div>
    </div>
</template>

<script>
import DoubleSection from "@/components/DoubleSection"
import ProductList from "@/components/ProductList"
import RMS from "@/rms_connector"

export default {
    components: {
        DoubleSection,
        ProductList
    },

    data: () => ({
        products: []
    }),

    async mounted() {
        this.products = await RMS.getProductList()
    }
}
</script>

<style scoped lang="scss">
.products-wrapper {
  text-align: center;

  .products {
    width: 80vw;
    text-align: left;
    max-width: 700px;
    display: inline-block;
  }
}
</style>