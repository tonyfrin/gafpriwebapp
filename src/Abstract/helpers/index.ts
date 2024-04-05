export const addClass = (element: string, className: string): void => {
    const input = document.getElementById(element);
  
    if (input && input.classList && !input.classList.contains(className)) {
      input.classList.add(className);
    }
  };
  
  export const removeClass = (element: string, className: string): void => {
    const input = document.getElementById(element);
  
    if (input && input.classList && input.classList.contains(className)) {
      input.classList.remove(className);
    }
};

export function validationHidden(value: string, validate: RegExp): boolean {
    return validate.test(value);
}


export const validationInput = (
    value: string,
    match: RegExp,
    required = false
): boolean => {
    const valid = validationHidden(value, match);
  
    if (required && (!valid || !value)) {
      return false;
    }
  
    if (value && valid) {
      return true;
    }
  
    if (!required && !value) {
      return true;
    }

    return false;
};



export type GeneralValidationButtonNextProps = {
  validations: boolean[];
  inputId: string;
};

export const generalValidationButtonNext = ({
  validations,
  inputId,
}: GeneralValidationButtonNextProps): boolean => {
  const isAllValid = validations.every((validation) => validation);

  if (isAllValid) {
    removeClass(inputId, 'gs-disabled');
  } else {
    addClass(inputId, 'gs-disabled');
  }

  return isAllValid;
};