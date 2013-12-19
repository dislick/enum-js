enum.js
=======

What's this?
----

enum.js provides enumerable datatypes in pure JavaScript. It ensures type safety and gives you useful methods for your enums.

API
---

### Constructor

```
new Enum(enumNames, [options])
```

```
var Days = new Enum([ 'Monday', 'Tuesday', 'Wednesday' ], { finalize: false });
```

```
var Days = new Enum([ 'Monday', 'Tuesday', 'Wednesday' ], { startIndex: 1 });
```

### enum.toString

```
Days.Monday.toString();
```

Returns a string representation of the enum.

### enum.toOrdinal

```
Days.Monday.toOrdinal();
```

Returns the ordinal value of the enum.

### getByName

```
Days.getByName('Monday');
```

Get the reference enum by a string.

### getByOrdinal

```
Days.getByOrdinal(0);
```

Get the reference enum by a its ordinal value.

### getNames

```
Days.getNames();
```

Returns all available enums as strings. You won't get any references with this method, just pure strings.


Customization
-------------

### finalize

Datatype: `Boolean`
Default: `true`

```
var enumerableObject = new Enum([], { finalize: false });
```

Finalizes your enum object so it is write protected. Ensures type safety.

### startIndex

Datatype: `Number`
Default: `0`

```
var enumerableObject = new Enum([], { startIndex: 1 });
```

Will start the ordinal values from startIndex