export const REGEX = {
  NAME: /^([a-zA-ZÀ-ÿ\u00f1\u00d1]|\s){0,20}$/,
  NAME_ON_BLUR: /^([a-zA-ZÀ-ÿ\u00f1\u00d1]|\s){3,20}$/,
  DNI: /^[0-9]{0,8}$/,
  DNI_ON_BLUR: /^[0-9]{8}$/,
};
