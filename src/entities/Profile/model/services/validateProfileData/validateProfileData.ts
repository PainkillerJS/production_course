import { type ProfileType, ValidateProfileError } from '../../types';

export const validateProfileData = (data?: ProfileType) => {
  if (!data) {
    return [ValidateProfileError.NO_DATA];
  }

  const { name, surname, age, country } = data;

  const errors: ValidateProfileError[] = [];

  if (!name || !surname) {
    errors.push(ValidateProfileError.INCORRECT_USER_DATA);
  }

  if (!age || !Number.isInteger(age)) {
    errors.push(ValidateProfileError.INCORRECT_AGE);
  }

  if (!country) {
    errors.push(ValidateProfileError.INCORRECT_COUNTRY);
  }

  return errors;
};
