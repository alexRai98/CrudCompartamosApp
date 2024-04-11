import {FieldNameEnum} from '../constans/Constans.ts';
import {REGEX} from '../constans/regex.ts';

export const getRegex = (fieldName: FieldNameEnum) => {
  switch (fieldName) {
    case FieldNameEnum.NAME:
      return REGEX.NAME;
    case FieldNameEnum.DOCUMENT:
      return REGEX.DNI;
    default:
      return /\w*/;
  }
};

export const getRegexOnBlur = (fieldName: FieldNameEnum) => {
  switch (fieldName) {
    case FieldNameEnum.NAME:
      return REGEX.NAME_ON_BLUR;
    case FieldNameEnum.DOCUMENT:
      return REGEX.DNI_ON_BLUR;
    default:
      return /\w*/;
  }
};
