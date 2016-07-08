function Hamming(strand1, strand2) {
  this.strand1 = strand1;
  this.strand2 = strand2;
}

Hamming.prototype.compute = function(strand1, strand2) {
  var str1 = strand1.split("");
  var str2 = strand2.split("");
  var diff = 0;
  for (var i = 0; i < str1.length; i++) {
    for (var i = 0; i < str2.length; i++) {
      if (str1[i] !== str2[i]) {
        diff ++;
      }
    }
  }
  return diff;
}

module.exports = Hamming;
