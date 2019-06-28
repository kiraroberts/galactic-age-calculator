import { today } from '../src/sample-class.js'

describe ("date", function () {

  it('should return the current date', function() {
    expect(today()).toEqual(28);
  });
});
