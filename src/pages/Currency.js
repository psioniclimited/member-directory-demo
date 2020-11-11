import React, { useState, useEffect } from "react";
import axios from "axios";
import CoinService from "../services/CoinService";
import Controls from "../components/controls/Controls";
import {
  Paper,
  makeStyles,
  TableBody,
  TableRow,
  TableCell,
  Toolbar,
  InputAdornment,
} from "@material-ui/core";
import useTable from "../components/useTable";
import { Search } from "@material-ui/icons";

const headCells = [
  { id: "id", label: "#" },
  { id: "image", label: "Image" },
  { id: "name", label: "Name" },
  { id: "symbol", label: "Symbol" },
  { id: "current_price", label: "Current Price" },
  { id: "market_cap", label: "Market Capital" },
  { id: "price_change_percentage_24h", label: "Percentage" },
];

export default function Currency() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");
  const [filterFn, setFilterFn] = useState({
    fn: (items) => {
      return items;
    },
  });

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=30&page=1&sparkline=false"
      )
      .then((res) => {
        setCoins(res.data);
        console.log(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const {
    TblContainer,
    TblHeader,
    TblPagination,
    recordsAfterPaginatingAndSorting,
  } = useTable(coins, headCells, filterFn);

  const handleSearch = (e) => {
    let target = e.target;
    setFilterFn({
      fn: (items) => {
        if (target.values == "") return items;
        else return items.filter((x) => x.fullName.includes(target.value));
      },
    });
  };

  // const handleChange = (e) => {
  //   setSearch(e.target.value);
  // };

  // const filteredCoins = coins.filter(coin =>
  //   coin.name.toLowerCase().includes(search.toLowerCase())
  // );

  return (
    // <div className="coin-app">
    //   <div className="coin-search">
    //     <h1 className="coin-text">Search a currency</h1>
    //     <form>
    //       <input
    //         type="text"
    //         placeholder="Search"
    //         className="coin-input"
    //         onChange={handleChange}
    //       />
    //     </form>
    //   </div>
    //   {filteredCoins.map((coin) => {
    //     return (
    //       <CoinService
    //         key={coin.id}
    //         name={coin.name}
    //         image={coin.image}
    //         symbol={coin.symbol}
    //         price={coin.current_price}
    //         volume={coin.market_cap}
    //         priceChange={coin.price_change_percentage_24h}
    //       />
    //     );
    //   })}
    // </div>
    <Paper>
      <Toolbar>
        <Controls.Input
          label="Search Member"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Search />
              </InputAdornment>
            ),
          }}
          onChange={handleSearch}
        />
      </Toolbar>
      <TblContainer>
        <TblHeader />
        <TableBody>
          {recordsAfterPaginatingAndSorting().map((item) => (
            <TableRow key={item.id}>
              <TableCell>{item.name}</TableCell>
              <TableCell>{item.symbol}</TableCell>
              <TableCell>{item.current_price}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </TblContainer>
      <TblPagination />
    </Paper>
  );
}
