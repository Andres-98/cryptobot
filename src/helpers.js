
const costBreeding = [150, 300, 450, 750, 1200, 1950, 3150];

const isNumeric = (value) => {
	return !isNaN(parseFloat(value)) && isFinite(value);
};

const symbols = {
    ada: 'cardano',
    axs: 'axie-infinity',
    bnb: 'binancecoin',
    btc: 'bitcoin',
    btt: 'bittorrent-2',
    doge: 'dogecoin',
    dot: 'polkadot',
    eth: 'ethereum',
    pvu: 'plant-vs-undead-token',
    slp: 'smooth-love-potion',
    trx: 'tron',
    vet: 'vechain',
    xlm: 'stellar',
    xrp: 'ripple'
};

const getSymbols = () => {
    const keys = Object.keys(symbols);
    let message = '';
    for(let key of keys){
        message += `\n/${key}`;
    };
    return message;
};

module.exports = { isNumeric, costBreeding, symbols, getSymbols };