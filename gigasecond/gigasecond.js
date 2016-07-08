function Gigasecond(birthDate) {
  this.birthDate = birthDate;
  this.date = function () {
    return new Date(this.birthDate.getTime() + 1000000000000);
  }
};

module.exports = Gigasecond;