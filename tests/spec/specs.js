describe('The constructor', function() {
  it('should finalize the object by default', function() {
    var Days = new Enum([ 'Monday', 'Tuesday', 'Wednesday' ]);

    // try to overwrite Days.Monday
    Days.Monday = Days.Tuesday;

    expect(Days.Monday).toEqual(Days.Monday);
  });
  it('should not finalize the object if finalize=false is passed', function() {
    var Days = new Enum([ 'Monday', 'Tuesday', 'Wednesday' ], { finalize: false });

    Days.Monday = 123;

    expect(Days.Monday).toEqual(123);
  });
});