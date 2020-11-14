import React, { useState, useEffect } from "react";
import axios from "axios";
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
  { id: "image", label: "Image", disableSorting: true },
  { id: "name", label: "Name", disableSorting: true },
  { id: "symbol", label: "Symbol", disableSorting: true },
  { id: "current_price", label: "Current Price" },
  { id: "market_cap", label: "Market Capital" },
  { id: "price_change_percentage_24h", label: "Percentage" },
];

export default function Currency() {
  const [records, setRecords] = useState([]);
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
        setRecords(res.data);
        console.log(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const {
    TblContainer,
    TblHeader,
    TblPagination,
    recordsAfterPaginatingAndSorting,
  } = useTable(records, headCells, filterFn);

  const handleSearch = (e) => {
    let target = e.target;
    setFilterFn({
      fn: (items) => {
        if (target.values == "") return items;
        else return items.filter((x) => x.name.toLowerCase().includes(target.value.toLowerCase()));
      },
    });
  };

  return (
    <Paper>
      <Toolbar>
        <Controls.Input
          label="Search Coin"
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
              <TableCell>
                <img src={item.image} alt="crypto" />
              </TableCell>
              <TableCell>{item.name}</TableCell>
              <TableCell>{item.symbol}</TableCell>
              <TableCell>{item.current_price}</TableCell>
              <TableCell>{item.market_cap}</TableCell>
              <TableCell>{item.price_change_percentage_24h}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </TblContainer>
      <TblPagination />
    </Paper>
  );
}
