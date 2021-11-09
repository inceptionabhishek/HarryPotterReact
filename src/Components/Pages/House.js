import {
  Box,
  Typography,
  useMediaQuery,
  Button,
  Grid
} from "@material-ui/core";
import { Link } from "react-router-dom";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import HomeIcon from "@material-ui/icons/Home";
import PersonIcon from "@material-ui/icons/Person";

const House = () => {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  return (
    <div>
      <Box py={20} textAlign="center">
        <Typography variant="h2">House</Typography>
      </Box>
    </div>
  );
};
export default House;
