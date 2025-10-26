import React from "react";
import { Container, Typography, Link } from "@mui/material";
import { styled } from "@mui/material/styles";

const FooterWrapper = styled("footer")(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  padding: theme.spacing(6, 0),
  marginTop: "auto",
  background: "linear-gradient(to right, #090558ff, #7c4949ff)",
  borderTop: `1px solid ${theme.palette.divider}`,
  boxShadow: "0px -1px 10px rgba(0, 0, 0, 0.1)",
  textAlign: "center",
}));



const FooterText = styled(Typography)({
  marginTop: "16px",
  fontFamily: "'Poppins', sans-serif",
  fontWeight: 500,
  color:"white",
});

const Footer = () => {
  return (
    <FooterWrapper>
      <Container maxWidth="lg">
        <FooterText variant="body2" color="textSecondary">
          &copy; 2025 PlaceVerse. All rights reserved.
        </FooterText>
      </Container>
    </FooterWrapper>
  );
};

export default Footer;
