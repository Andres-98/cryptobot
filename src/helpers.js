const isNumeric = (value) => {
	return !isNaN(parseFloat(value)) && isFinite(value);
};

const costBreeding = [150, 300, 450, 750, 1200, 1950, 3150];

const symbols = {
    vet: 'vechain',
    btc: 'bitcoin',
    eth: 'ethereum',
    btt: 'bittorrent-2',
    ada: 'cardano',
    bnb: 'binancecoin',
    slp: 'smooth-love-potion',
    axs: 'axie-infinity',
    trx: 'tron',
    xlm: 'stellar',
    doge: 'dogecoin',
    pvu: 'plant-vs-undead-token'
}

module.exports = { isNumeric, costBreeding, symbols };