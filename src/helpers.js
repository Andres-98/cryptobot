
const costBreeding = [150, 300, 450, 750, 1200, 1950, 3150];

const isNumeric = (value) => {
	return !isNaN(parseFloat(value)) && isFinite(value);
};

const symbols = {
    vet: 'vechain',
    btc: 'bitcoin',
    eth: 'ethereum',
    btt: 'bittorrent-2',
    ada: 'cardano',
    bnb: 'binancecoin',
    trx: 'tron',
    xlm: 'stellar',
    dot: 'polkadot',
    xrp: 'ripple',
    slp: 'smooth-love-potion',
    axs: 'axie-infinity',
    pvu: 'plant-vs-undead-token',
    doge: 'dogecoin'
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