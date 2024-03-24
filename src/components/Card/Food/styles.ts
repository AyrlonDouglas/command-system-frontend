import { styled, Unstable_Grid2 as Grid, Box, BoxProps } from "@mui/material";

export const ImageFood = styled(Box)<BoxProps & { imagepath: string }>(({ theme, imagepath }) => ({
	backgroundImage: `${imagepath ? `url(${imagepath})` : "none"}`,
	height: "100%",
	width: "100%",
	backgroundSize: "cover",
	backgroundPosition: "center",
	borderRadius: theme.shape.borderRadius - 2,
}));

export const GridContainer = styled(Grid)(({ theme }) => ({
	background: theme.palette.background.paper,
	borderRadius: theme.shape.borderRadius,
	// height: "100%",
	height: "5.5rem ",
}));
