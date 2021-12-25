const sizes = {
  mobileXS: `360px`,
  mobileS: `380px`,
  mobile: `475px`,
  tablet: `850px`,
  tabletL: `1300px`,
  laptop: `1799px`,
  desktop: `1800px`,
};

export const device = {
  mobileXS: `(max-width: ${sizes.mobileXS})`,
  mobileS: `(max-width: ${sizes.mobileS})`,
  mobile: `(max-width: ${sizes.mobile})`,
  tablet: `(max-width: ${sizes.tablet})`,
  tabletL: `(max-width: ${sizes.tabletL})`,
  laptop: `(max-width: ${sizes.laptop})`,
  desktop: `(min-width: ${sizes.desktop})`,
};

export default device;
