const assert = require("assert");
const { reverseWordOrder } = require("./index");

const testCases = [
  {input: "Mary had a little lamb", expected: 'lamb little a had Mary'},
  {input: "Mary   had a little  lamb", expected: 'lamb   little a had  Mary'},
  {input: "Mary, had a little lamb", expected: 'lamb, little a had Mary'},
  {input: "  Mary   had a little lamb   ", expected: '  lamb   little a had Mary   '},
  {input: "  -    ", expected: '  -    '},
];

describe("reverseWordOrder Function", function() {
  it("should reverse word order in sentence", function() {
    const testCase = testCases[0];
    assert.equal(reverseWordOrder(testCase.input), testCase.expected);
  });
  it("should preserve extra spaces between words after reverse", function() {
    const testCase = testCases[1];
    assert.equal(reverseWordOrder(testCase.input), testCase.expected);
  });
  it("should preserve punctuation", function() {
    const testCase = testCases[2];
    assert.equal(reverseWordOrder(testCase.input), testCase.expected);
  });
  it("should preserve spaces at the begnning and at the end after reverse", function() {
    const testCase = testCases[3];
    assert.equal(reverseWordOrder(testCase.input), testCase.expected);
  });
  it("should return same string if there's no words", function() {
    const testCase = testCases[4];
    assert.equal(reverseWordOrder(testCase.input), testCase.expected);
  });
});