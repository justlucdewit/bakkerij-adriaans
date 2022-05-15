import axios from 'axios'

const rms_settings = {
    socials: {
        facebook: 'BakkerijAdriaans',
        email: 'bakkerijadriaans@gmail.com',
        tel: '0624939954',
    },
    server_url: 'localhost:5000',
    company_id: 2
}

const cache = {}

const cache_result = async (name, getter) => {
    if (cache[name]) {
        return cache[name]
    } else {
        cache[name] = await getter()
        return cache[name]
    }
}

// /api/open/{companyId}/general/get-info
const getCompanyInfo = () => cache_result('getCompanyInfo', async () => {
    const url = `http://${rms_settings.server_url}/api/open/${rms_settings.company_id}/general/get-info`
    const response = await axios.get(url)
    response.data.socials = rms_settings.socials
    return response.data
})

// api/open/{companyId}/products/all
const getProductList = () => cache_result('getCompanyProducts', async () => {
    const url = `http://${rms_settings.server_url}/api/open/${rms_settings.company_id}/products/all`
    const response = await axios.get(url)
    return response.data
})

export default {
    getCompanyInfo,
    getProductList
}