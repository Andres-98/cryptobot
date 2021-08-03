const isNumeric = (value) => {
	return !isNaN(parseFloat(value)) && isFinite(value);
};

const costBreeding = [150, 300, 450, 750, 1200, 1950, 3150];

const symbols = {
    vet: 'vechain',
    btc: 'bitcoin',
    eth: 'ethereum',
    btt: 'bittorrent',
    ada: 'cardano',
    bnb: 'binance-coin',
    slp: 'smooth-love-potion',
    axs: 'axie-infinity'
}

module.exports = { isNumeric, costBreeding, symbols };