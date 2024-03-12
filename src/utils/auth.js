// src/utils/auth.js
const CryptoJS = require('crypto-js');
const axios = require('axios');

const API_KEY = process.env.API_KEY;
const API_SECRET = process.env.API_SECRET;
const AUTH_URL = 'https://authservice.priaid.ch/login';

async function getAuthToken() {
    const computedHash = CryptoJS.HmacMD5(AUTH_URL, API_SECRET);
    const computedHashString = computedHash.toString(CryptoJS.enc.Base64);

    try {
        const response = await axios.post(AUTH_URL, {}, {
            headers: {
                'Authorization': `Bearer ${API_KEY}:${computedHashString}`
            }
        });
        return response.data.Token;
    } catch (error) {
        console.error('Error fetching auth token:', error);
        return null;
    }
}

module.exports = {
    getAuthToken
};
