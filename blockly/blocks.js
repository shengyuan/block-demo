Blockly.Blocks["demo_1"] = {
  init: function () {
    this.appendDummyInput().appendField("demo block");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip("");
    this.setHelpUrl("");
  },
};

Blockly.Blocks["demo_2"] = {
  init: function () {
    this.appendDummyInput().appendField("demo2 block");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip("");
    this.setHelpUrl("");
  },
};

Blockly.Blocks["demo_3"] = {
  init: function () {
    this.appendDummyInput().appendField(Blockly.Msg.YOUR_PREFIX_GET_DATA);
    this.appendValueInput("data").setCheck("String");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(120);
    this.setTooltip("");
    this.setHelpUrl("");
  },
};
