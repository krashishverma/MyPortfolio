// Use a simple approach with CSS variables instead of @next/font
// This will avoid the font loading issues

// Define CSS variable names for consistency
export const fontVariables = {
  inter: '--font-inter',
  circularLight: '--font-circular-light',
  circularNormal: '--font-circular-normal',
  circularMedium: '--font-circular-medium',
  circularBold: '--font-circular-bold',
  cascadia: '--font-cascadia',
};

// Create className objects that mimic the @next/font API
export const inter = {
  variable: fontVariables.inter,
  className: '',
  style: { fontFamily: `var(${fontVariables.inter})` }
};

export const circularLight = {
  variable: fontVariables.circularLight,
  className: '',
  style: { fontFamily: `var(${fontVariables.circularLight})` }
};

export const circularNormal = {
  variable: fontVariables.circularNormal,
  className: '',
  style: { fontFamily: `var(${fontVariables.circularNormal})` }
};

export const circularMedium = {
  variable: fontVariables.circularMedium,
  className: '',
  style: { fontFamily: `var(${fontVariables.circularMedium})` }
};

export const circularBold = {
  variable: fontVariables.circularBold,
  className: '',
  style: { fontFamily: `var(${fontVariables.circularBold})` }
};

export const cascadia = {
  variable: fontVariables.cascadia,
  className: '',
  style: { fontFamily: `var(${fontVariables.cascadia})` }
};
