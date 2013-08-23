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

### enum.toString

```
Days.Monday.toString();
```

Returns a string representation of the enum.

### getByName

```
Days.getByName('Monday');
```

Get the reference enum by a string.

### getNames

```
Days.getNames();
```

Returns all available enums as strings. You won't get any references with this method, just pure strings.