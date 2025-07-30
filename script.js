function isSameType(value1, value2) {
  //your js code here
	function parse(val) {
    if (val === "NaN") return NaN;

    const num = Number(val);
    return isNaN(num) ? val : num;
  }

  const v1 = parse(value1);
  const v2 = parse(value2);

  // Special case: NaN and NaN
  if (typeof v1 === "number" && typeof v2 === "number") {
    if (isNaN(v1) && isNaN(v2)) return true;
  }

  return typeof v1 === typeof v
}

// do not change the code below.
let value1 = prompt("Enter Start of the Range.");
let value2 = prompt("Enter End Of the Range.");
alert(isSameType(value1, value2));
