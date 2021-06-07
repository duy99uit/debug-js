function quadraticEquation(a, b, c) {
  document.writeln("a = " + a + " b = " + b + " c = " + c);
  function delta() {
    return b * b - 4 * a * c;
  }
  var delta = delta();
  console.log(delta)
  if (delta < 0) {
    document.writeln("delta < 0. Can't solve");
  }
  if (delta == 0) {
    document.writeln("delta = 0; x = " + -b / (2 * a));
  }
  if (delta > 0) {
      var x1 =(-b + Math.sqrt(delta)) / (2 * a) ;
      var x2 = (-b - Math.sqrt(delta)) / (2 * a);
    document.writeln(
      "delta > 0; x1 = " + x1
         +
        " x2 = " + x2
        
    );
  }
}
quadraticEquation(0, 0, 0);
