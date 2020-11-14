import axios from "axios";

export const getCoins = async () => {
  const response = axios
    .get(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=30&page=1&sparkline=false"
    )
    .then(({ data }) => data)
    .catch((error) => console.log(error));

  return response;
};
