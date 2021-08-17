const CoinGecko = require('coingecko-api');
const CoinGeckoClient = new CoinGecko();

const { isNumeric, costBreeding, symbols } = require('./helpers');

const callApi = async (coin, currency) => {

    const resp = await CoinGeckoClient.simple.price({
        ids: [coin],
        vs_currencies: currency
    });

    return resp.data;
};

const getData = async (data) => {
    const messageArray = data.split(" ");
    const symbolCoin = messageArray[0].replace('/', '');
    const coin = symbols[symbolCoin];
    if(messageArray.length === 3){
        const valCoin = parseFloat(messageArray[1]);
        const porcent = parseInt(messageArray[2]);
        if(isNumeric(valCoin) && isNumeric(porcent) && porcent > 0 && porcent <= 100){
            const data =  await callApi(coin, ['usd'])
            const value = valCoin*(porcent/100);
            return `${value} ${symbolCoin.toUpperCase()}  = ${value*data[coin].usd} USD`;
        }else{
            return "Comando Invalido";
        };
    }else if(messageArray.length === 2){
        const valCoin = parseFloat(messageArray[1]);
        if(isNumeric(valCoin)){
            const data =  await callApi(coin, ['usd']);
            return `${valCoin} ${symbolCoin.toUpperCase()} = ${valCoin*data[coin].usd} USD`;
        }else{
            return "Comando invalido";
        };
    }else{
        const data =  await callApi(coin, ['usd', 'eur']);
        return `${symbolCoin.toUpperCase()} price: \n${data[coin].usd} USD \n${data[coin].eur} EUR`
    };
};
 

const usdToCrypto = async (data) => {
    try {
        const messageArray = data.split(" ");
        if (messageArray.length > 2){
            const valOne = messageArray[1];
            const symbol = messageArray[2].toLocaleLowerCase();
            const currency = symbols[symbol];
            if(isNumeric(valOne) && currency){
                const data =  await callApi(currency, ['usd'])
                return `${valOne} USD = ${valOne/data[currency].usd} ${symbol.toUpperCase()}`;
            }else{
                return "Comando invalido";
            };
        }else{
            return "Comando invalido";
        };
    } catch (error) {
        return "Comando invalido";
    };
};

const prices = async () => {
    try {
        const resp = await CoinGeckoClient.simple.price({
            ids: ["smooth-love-potion", "axie-infinity", "bitcoin", "ethereum"],
            vs_currencies: ['eur', 'usd'],
        });

        const { data } = resp;
        
        return `SLP: \n${data["smooth-love-potion"].usd} USD \n${data["smooth-love-potion"].eur} EUR 
        \nAXS: \n${data["axie-infinity"].usd} USD \n${data["axie-infinity"].eur} EUR
        \nBTC: \n${data.bitcoin.usd} USD \n${data.bitcoin.eur} EUR
        \nETH: \n${data.ethereum.usd} USD \n${data.ethereum.eur} EUR`;

    } catch (error) {
        return "Comando invalido";
    };
};

const breeding = async (data) => {
    try {
        const messageArray = data.split(" ");
        if (messageArray.length > 2){
            const valOne = messageArray[1];
            const valTwo = messageArray[2];
            if(isNumeric(valOne) && valOne >= 0 && valOne < 7 
                && isNumeric(valTwo) && valTwo >= 0 && valTwo < 7){
                const resp = await CoinGeckoClient.simple.price({
                    ids: ["smooth-love-potion", "axie-infinity"],
                    vs_currencies: ['usd'],
                });
                const { data } = resp;
                return `${(costBreeding[valOne] + costBreeding[valTwo])
                    * data["smooth-love-potion"].usd
                    + 2*data["axie-infinity"].usd} USD`;
            }else{
                return "Comando invalido";
            };
        }else{
            return "Comando invalido";
        };
    } catch (error) {
        return "Comando invalido";
    };
};

module.exports = { getData, breeding, usdToCrypto, prices };