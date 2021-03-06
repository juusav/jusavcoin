import axios from "axios";

export const getCoins = async (pageNumber = 1) => {
  try {
    const r = await axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=${pageNumber}&sparkline=false&price_change_percentage=24h`)
    return r.data;
  } catch (e) {
    console.log(e)
  }
}

export const getDetailCoinData = async (coinId) => {
  try {
    const r = await axios.get(
      `https://api.coingecko.com/api/v3/coins/${coinId}?localization=false&tickers=true&community_data=false&developer_data=false&sparkline=false`
    );
    return r.data;
  } catch (e) {
    console.log(e);
  }
};

export const getCoinMarketChart = async (coinId) => {
  try {
    const r = await axios.get(
      `https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=eur&days=1&interval=minutely`
    );
    return r.data;
  } catch (e) {
    console.log(e);
  }
};

export const getWatchlistedCoins = async (pageNumber = 1, coinIds) => {
  try {
    const r = await axios.get(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&ids=${coinIds}&order=market_cap_desc&per_page=50&page=${pageNumber}&sparkline=false&price_change_percentage=24h`
    );
    return r.data;
  } catch (e) {
    console.log(e);
  }
};

export const getAllCoins = async () => {
  try {
    const r = await axios.get("https://api.coingecko.com/api/v3/coins/list?include_platform=false");
    return r.data;
  } catch (e) {
    console.log(e);
  }
};
