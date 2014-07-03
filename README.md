enum.js
=======

What's this?
----

enum.js provides enumerable datatypes in pure JavaScript. It ensures type safety and gives you useful methods for your enums.

API
---

### Constructor

You can create enums using an array of enum names (Strings).

```
new Enum(enumNames, [options])
```

```
var Days = new Enum([ 'Monday', 'Tuesday', 'Wednesday' ], { finalize: false });
```

```
var Days = new Enum([ 'Monday', 'Tuesday', 'Wednesday' ], { startIndex: 1 });
```

Sometimes you want the enum to have a friendly textual representation which is different from it's name.
For those cases, the enum array can be an array of objects, which have 2 properties - name & text.

```
new Enum(enumObjects, [options])
```

```
var Foo = new Enum([ { name: 'Bar', text: 'Bar text' }, { name: 'Baz', text: 'Baz text' } ]);
```

### enum.toString

```
Days.Monday.toString();
```

Returns a string representation of the enum name.

### enum.toText

```
Days.Monday.toText();
```

Returns the textual representation of the enum. If the enum was created with an Array of names (Strings), the text will
equal the name. If the enum was created with an Array of objects, it will equal the text value passed.

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

### contains

```
Days.contains('Monday');
```

Returns true if the Enum contains the the enum name passed.

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

Will start the ordinal values from startIndex.