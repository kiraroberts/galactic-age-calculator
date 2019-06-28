import { today } from '../src/sample-class.js'
import { currentDate } from '../src/sample-class.js'

describe ("date", function () {

  it('should return the current day', function() {
    expect(today()).toEqual(28);
  });

  it('should return full date', function() {
    expect(currentDate()).toBe("June 28, 2019");
  });

});
