enum.js
=======

What
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

