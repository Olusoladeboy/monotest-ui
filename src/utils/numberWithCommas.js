const numberWithCommas = value =>
  value.toString().replace(/\B(?=(?=\d*)(\d{3})+(?!\d))/g, ', ');

export default numberWithCommas;
