describe('The constructor', function () {
    it('should finalize the object by default', function () {
        var Days = new Enum([ 'Monday', 'Tuesday', 'Wednesday' ]);

        // try to overwrite Days.Monday
        Days.Monday = Days.Tuesday;

        expect(Days.Monday).toEqual(Days.Monday);
    });
    it('should not finalize the object if finalize=false is passed', function () {
        var Days = new Enum([ 'Monday', 'Tuesday', 'Wednesday' ], { finalize: false });
        Days.Monday = 123;

        expect(Days.Monday).toEqual(123);
    });
    it('should start the ordinal values from 0 by default', function () {
        var Days = new Enum([ 'Monday', 'Tuesday', 'Wednesday' ]);

        expect(Days.Monday.toOrdinal()).toEqual(0);
        expect(Days.Wednesday.toOrdinal()).toEqual(2);
    });
    it('should start the ordinal values from startIndex if it is passed', function () {
        var startIndex = 2;
        var Days = new Enum([ 'Monday', 'Tuesday', 'Wednesday' ], { startIndex: startIndex });

        expect(Days.Monday.toOrdinal()).toEqual(startIndex);
        expect(Days.Wednesday.toOrdinal()).toEqual(startIndex + 2);
    });
});

describe('The toString() method', function () {
    it('should return the name of the enum as a string', function () {
        var Days = new Enum([ 'Monday', 'Tuesday', 'Wednesday' ]);
        var output = Days.Monday.toString();

        expect(output).toEqual('Monday');
    });

    it('should not return the actual reference', function () {
        var Days = new Enum([ 'Monday', 'Tuesday', 'Wednesday' ]);
        var output = Days.Monday.toString();

        expect(output === Days.Monday).toBe(false);
    });
});

describe('The toOrdinal() method', function () {
    it('should return the ordinal value of the enum as an Number', function () {
        var Days = new Enum([ 'Monday', 'Tuesday', 'Wednesday' ]);
        var output = Days.Monday.toOrdinal();

        expect(output).toEqual(0);
    });

    it('should not return the actual reference', function () {
        var Days = new Enum([ 'Monday', 'Tuesday', 'Wednesday' ]);
        var output = Days.Monday.toOrdinal();

        expect(output === Days.Monday).toBe(false);
    });
});

describe('The getByName() method', function () {
    it('should return the actual reference by a string', function () {
        var Days = new Enum([ 'Monday', 'Tuesday', 'Wednesday' ]);
        var output = Days.getByName('Monday');

        expect(output).toEqual(Days.Monday);
    });
});

describe('The getByOrdinal() method', function () {
    it('should return the actual reference by the ordinal value', function () {
        var Days = new Enum([ 'Monday', 'Tuesday', 'Wednesday' ]);
        var output = Days.getByOrdinal(0);

        expect(output).toEqual(Days.Monday);
    });
});

describe('The getNames() method', function () {
    it('should return the initial array', function () {
        var enumArray = [ 'Monday', 'Tuesday', 'Wednesday' ];
        var Days = new Enum(enumArray);

        expect(Days.getNames()).toEqual(enumArray);
    });
});