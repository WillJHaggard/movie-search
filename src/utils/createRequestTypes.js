const REQUEST = "REQUEST";
const SUCCESS = "SUCCESS";
const FAILURE = "FAILURE";
const ERROR = "ERROR";

// shorthand function to make repetitive typing of action-types quicker
export default function createRequestTypes(base) {
  return [REQUEST, SUCCESS, FAILURE, ERROR].reduce(
    (acc, type) => {
      acc[type] = `${base}_${type}`;
      return acc;
    },
    {}
  );
}
