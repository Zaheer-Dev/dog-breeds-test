import { CircularProgress } from "@mui/material";
import { Box } from "@mui/system";
import React, { Suspense } from "react";

export const withLazyComponent = (LazyComponent) => {
  return (props) => (
    <Suspense
      fallback={
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <CircularProgress />
        </Box>
      }
    >
      <LazyComponent {...props} />
    </Suspense>
  );
};
