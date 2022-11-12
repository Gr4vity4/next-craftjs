import { useEditor, Element } from "@craftjs/core";
import { Box, Typography, Grid, Button as MaterialButton } from "@material-ui/core";
import React from "react";

// import { Button } from "./user/Button";
import { Card } from "./user/Card";
import { Container } from "./user/Container";
import { Text } from "./user/Text";
import { Button } from "./user/Button";

export const Toolbox = () => {
  const { connectors } = useEditor();

  return (
    <Box px={2} py={2}>
      <Grid container direction="column" alignItems="center" justify="center" spacing={1}>
        <Box pb={2}>
          <Typography>Drag to add</Typography>
        </Box>
        <Grid container direction="column" item>
          <MaterialButton ref={(ref) => connectors.create(ref, <Button />)} variant="contained" data-cy="toolbox-button">
            Button
          </MaterialButton>
        </Grid>
        <Grid container direction="column" item>
          <MaterialButton ref={(ref) => connectors.create(ref, <Text text="Hi world" />)} variant="contained" data-cy="toolbox-text">
            Text
          </MaterialButton>
        </Grid>
      </Grid>
    </Box>
  );
};
