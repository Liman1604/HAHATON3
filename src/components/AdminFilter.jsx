import {
    Button,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    Slider,
    TextField,
  } from "@mui/material";
  import React, { useContext, useState } from "react";
  import { useNavigate } from "react-router-dom";
  import { ClientContext } from "../context/ClientProvider";
  // import { ClientContext } from "../context/ClientProvider
  
  const FiltersBlock = () => {
    const search = new URLSearchParams(window.location.search);
    const navigate = useNavigate();
    const { getProducts } = useContext(ClientContext);
    const [searchValue, setSearchValue] = useState(search.get("q") || "");
    const [typeValue, setTypeValue] = useState(search.get("type") || "");
    const filterProdusts = (key, value) => {
      search.set(key, value);
      let newPath = `${window.location.pathname}?${search.toString()}`;
      navigate(newPath);
      setSearchValue(search.get("q") || "");
      setTypeValue(search.get("type") || "");
      getProducts();
    };
    const resetFilter = () => {
      navigate("/admin-product");
      setSearchValue("");
      setTypeValue('')
      getProducts();
    };
    return (
      <div className="filter-block">
        <div>
          <TextField
           style={{backgroundColor:'white',borderRadius:'10px'}}
            value={searchValue}
            onChange={(e) => filterProdusts("q", e.target.value)}
            variant="outlined"
            label="Живой поиск..."
          />
        </div>
        <div>
          <FormControl  style={{backgroundColor:'white',borderRadius:'10px'}} fullWidth>
            <InputLabel id="type-select">Тип</InputLabel>
            <Select
              value={typeValue}
              onChange={(e) => filterProdusts("type", e.target.value)}
              labelId="type-select"
              label="Выберите тип"
            >
              <MenuItem value="Копчённая">Копчённые</MenuItem>
              <MenuItem value="Варённая">Варённые</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div>
          <Button onClick={resetFilter} variant="contained" color="success">
            Сбросить
          </Button>
        </div>
      </div>
    );
  };
  
  export default FiltersBlock;
  