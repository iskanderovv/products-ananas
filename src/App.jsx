import { useEffect, useState } from "react";
import { Box } from "@mui/material";
import Products from "./components/products/Products";
import axiosBase from "./api";

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const response = await axiosBase("/products");
      setData(response.data.products);
    };
    loadData();
  }, []);

  return (
    <Box>
      <Products products={data} />
    </Box>
  );
};

export default App;
