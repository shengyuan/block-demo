Blockly.JavaScript["demo_1"] = function (block) {
  // TODO: Assemble JavaScript into code variable.
  var code = "window.demo__.demo1();\n";
  return code;
};

Blockly.JavaScript["demo_2"] = function (block) {
  // TODO: Assemble JavaScript into code variable.
  var code = "window.demo__.demo2();\n";
  return code;
};

Blockly.JavaScript["demo_3"] = function (block) {
  var value_data = Blockly.JavaScript.valueToCode(
    block,
    "data",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  // TODO: Assemble JavaScript into code variable.
  var code = `window.demo__.demo3(${value_data})`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};
