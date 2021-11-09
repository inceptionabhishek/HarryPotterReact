import { Box, Typography, useMediaQuery, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import PersonIcon from "@material-ui/icons/Person";

const Staffs = () => {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  return (
    <div>
      <Box py={20} textAlign="center">
        <Typography variant="h2">Staffs</Typography>
      </Box>
    </div>
  );
};
export default Staffs;
