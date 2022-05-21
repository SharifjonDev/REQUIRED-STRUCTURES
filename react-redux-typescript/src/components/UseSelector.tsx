/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { UseTypedSelectorHook } from "../hooks/TypedUseSelectorHook";
import { UserDispatch } from "../hooks/useDispatch";
import { Container } from "@mui/system";
import Grid from "@mui/material/Grid";

const UseSelector: React.FC = () => {
  const { loading, data, error } = UseTypedSelectorHook((state) => state.data);
  const { FetchData } = UserDispatch();

  useEffect(() => {
    FetchData();
  }, []);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          {data.map((data) => (
            <div key={data.id}>{data.name}</div>
          ))}
        </Grid>
        <Grid item xs={2}>
          {data.map((data) => (
            <div key={data.id}>{data.name}</div>
          ))}
        </Grid>
      </Grid>
    </Container>
  );
};

export default UseSelector;
