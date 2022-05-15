<template>
    <div class="footer">
        <DoubleSection>
            <template #left>
                <span id="image-and-version">
                    <div>
                        <img v-if="image"
                            style="width: 200px; padding: 20px 20px 20px 0px"
                            :src="require('@/assets/' + image)"
                            alt="footer image" />
                    </div>
                    <div>
                        v{{ version }}
                    </div>
                </span>
            </template>

            <template #right>
                <span id='socials'>
                    <a v-for="social in socials"
                    rel="noopener"
                    :key="social.type"
                    :href="social.link"
                    target="_blank">
                    
                        <div class="social">
                            <unicon :name="social.type" />
                            {{ social.name }}
                        </div>
                    </a>
                </span>
            </template>
        </DoubleSection>
    </div>
</template>

<script>
import DoubleSection from "@/components/DoubleSection";
import { version } from '@/../package'

export default {
    components: {
        DoubleSection
    },

    props: {
        socials: {
            type: Array,
            default: () => []
        },

        image: {
            type: String,
            default: null
        }
    },

    data: () => ({
        version
    })
}
</script>


<style scoped lang="scss">
@import "./style.scss";

.footer {
    background: $color-bg-standard;
    width: 100vw;
    padding: 20px;
    display: flex;
    justify-content: space-around;

    #socials {
        display: inline-block;

        a {
            color: black;
            text-decoration: none;
        }

        .social {
            display: flex;
            padding: 5px 20px;

            .unicon {
                margin-right: 20px;
            }

            &:hover {
                background: rgba(0, 0, 0, 0.1);
            }
        }
    }

    #image-and-version {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        img {
            
        }
    }
}
</style>