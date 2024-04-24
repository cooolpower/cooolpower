import { style } from "@vanilla-extract/css";

const toggleClose =
  "data:image/svg+xml;charset=utf-8,%3Csvg width='30' height='30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M15 2.5a12.5 12.5 0 100 25 12.5 12.5 0 000-25zm0 23.75a11.25 11.25 0 110-22.5 11.25 11.25 0 010 22.5z' fill='%23D2D2D2'/%3E%3Cpath d='M17.713 13.313l-2.688 2.675-2.687-2.675a.619.619 0 10-.875.875l3.125 3.125a.588.588 0 00.438.187.613.613 0 00.437-.187l3.125-3.125a.619.619 0 00-.875-.875z' fill='%23D2D2D2'/%3E%3C/svg%3E";
const toggleOpen =
  "data:image/svg+xml;charset=utf-8,%3Csvg width='30' height='30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M15 27.5a12.5 12.5 0 100-25 12.5 12.5 0 000 25zm0-23.75a11.25 11.25 0 110 22.5 11.25 11.25 0 010-22.5z' fill='%23222'/%3E%3Cpath d='M12.287 16.687l2.688-2.675 2.687 2.675a.619.619 0 10.875-.875l-3.125-3.125a.588.588 0 00-.438-.187.613.613 0 00-.437.187l-3.125 3.125a.619.619 0 00.875.875z' fill='%23222'/%3E%3C/svg%3E";

export const blind = style({
  position: "absolute",
  top: "-5000em",
  width: 0,
  height: 0,
  overflow: "hidden",
  lineHeight: 0,
  fontSize: 0,
});
export const filter = style({
  display: "flex",
  flexDirection: "column",
  width: 1280,
  margin: "56px auto 0px",
});

export const filterBox = style({
  position: "absolute",
  width: 600,
  top: 52,
  left: 0,
  border: "1px solid #d2d2d2",
  backgroundColor: "#fff",
  height: "fit-content",
  borderRadius: 8,
  zIndex: 99,
  boxSizing: "border-box",
  display: "none",
  boxShadow: "2px 2px 10px 0 rgba(0,0,0,.05)",
});
export const filterBoxOpen = style({
  position: "absolute",
  width: 600,
  top: 52,
  left: 0,
  border: "1px solid #d2d2d2",
  backgroundColor: "#fff",
  height: "fit-content",
  borderRadius: 8,
  zIndex: 99,
  boxSizing: "border-box",
  display: "block",
  boxShadow: "2px 2px 10px 0 rgba(0,0,0,.05)",
});
export const filterBoxUl = style({
  display: "flex",
  alignItems: "center",
  flexWrap: "wrap",
  gap: 8,
  padding: "32px 24px 32px 32px",
});
export const filterBoxLi = style({
  width: 120,
  listStyleType: "none",
});
export const filterBoxButton = style({
  border: "1px solid #e8e8e8",
  color: "#6a6a6a",
  background: "#f8f8f8",
  padding: "13px 0",
  fontSize: "14px",
  letterSpacing: 0,
  lineHeight: "22px",
  borderRadius: "4px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
});
export const filterBoxButtonActive = style({
  border: "1px solid #171717",
  color: "#171717",
  background: "#ffffff",
  padding: "13px 0",
  fontSize: "14px",
  letterSpacing: 0,
  lineHeight: "22px",
  borderRadius: "4px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
});

export const title = style({
  display: "flex",
  position: "relative",
});

export const titleText = style({
  fontSize: "28px",
  color: "#171717",
  letterSpacing: "-.5px",
  lineHeight: "36px",
  fontWeight: 700,
  display: "flex",
  alignItems: "center",

  "::after": {
    content: "",
    display: "block",
    width: "1px",
    height: "20px",
    backgroundColor: "#e8e8e8",
    margin: "0 16px",
  },
});
export const jobBox = style({});
export const selectJob = style({
  display: "flex",
  alignItems: "center",
  background: "none",
  border: "none",
  color: "#b8b8b8",
  cursor: "pointer",
  fontSize: "24px",
  letterSpacing: "-.5px",
  lineHeight: "36px",

  "::after": {
    content: "",
    display: "block",
    width: "30px",
    height: "30px",
    backgroundImage: 'url("' + toggleClose + '")',
    backgroundRepeat: "no-repeat",
    backgroundPosition: "50%",
    backgroundSize: "100%",
    marginLeft: "8px",
  },
});

export const selectJobOpen = style({
  display: "flex",
  alignItems: "center",
  background: "none",
  border: "none",
  color: "#222222",
  cursor: "pointer",
  fontSize: "24px",
  letterSpacing: "-.5px",
  lineHeight: "36px",

  "::after": {
    content: "",
    display: "block",
    width: "30px",
    height: "30px",
    backgroundImage: 'url("' + toggleOpen + '")',
    backgroundRepeat: "no-repeat",
    backgroundPosition: "50%",
    backgroundSize: "100%",
    marginLeft: "8px",
  },
});

export const options = style({
  display: "flex",
  width: 1280,
  margin: "24px auto 0px",
  justifyContent: "space-between",
});

export const optionsWrap = style({
  display: "flex",
  gap: "12px"
});

export const searchWrap = style({
  display: "flex",
});

export const searchInputWrap = style({
  width: "300px",
  height: "48px",
  border: "1px solid #d2d2d2",
  position: "relative",
  borderRadius: "8px",
});

export const searchInput = style({
  display: "block",
  padding: "0 58px 0 10px",
  height: "100%",
  width: "100%",
  boxSizing: "border-box",
  color: "#333",
  marginLeft: 0,
  borderRadius: "8px",
  fontSize: "15px",
  border: "none",
  letterSpacing: 0,
});

export const searchButton = style({

});

export const optionsButtonWrap = style({
});

export const optionsButton = style({
  padding: "12px 24px",
  borderRadius: "8px",
  border: "1px solid #d2d2d2",
  backgroundColor: "transparent",
  display: "flex",
  alignItems: "center",
  color: "#6a6a6a",
  fontSize: "16px",
  letterSpacing: 0,
  lineHeight: "22px"
});

export const devButtonAll = style({});
export const active = style({});
export const buttonBox = style({
  display: "flex",
  justifyContent: "center",
  padding: "32px 0",
  borderRadius: "0 0 8px 8px",
  borderTop: "1px solid #e8e8e8",
  backgroundColor: "#fff",
  gap: "8px",
});
export const resetFilter = style({
  border: "1px solid #d2d2d2",
  width: "90px",
  height: "42px",
  paddingTop: "2px",
  fontWeight: 500,
  fontSize: "16px",
  letterSpacing: 0,
  color: "#171717",
  borderRadius: "8px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});
export const submitFilter = style({
  border: "1px solid #d2d2d2",
  width: "120px",
  height: "42px",
  paddingTop: "2px",
  fontWeight: 500,
  fontSize: "16px",
  letterSpacing: 0,
  color: "#fff",
  backgroundColor: "#003ecb",
  borderRadius: "8px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});
