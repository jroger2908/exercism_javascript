function DnaTranscriber () {
  var dnaRna = {'G': 'C', 'C': 'G', 'T': 'A', 'A': 'U'}

  this.toRna = function (dna) {
    dnaArray = dna.split("");
    rnaArray = [];
    for (var i = 0; i < dnaArray.length; i++) {
      rnaArray.push(dnaRna[dnaArray[i]]);
    }
    return rnaArray.join("");
  };
};

module.exports = DnaTranscriber;