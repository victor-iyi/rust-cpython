initSidebarItems({"enum":[["PyStringData","Enum of possible Python string representations."]],"fn":[["prepare_freethreaded_python","Prepares the use of Python in a free-threaded context."]],"macro":[["py_argparse","This macro is used to parse a parameter list into a set of variables."],["py_class","Defines new python extension class. A `py_class!` macro invocation generates code that declares a new Python class. Additionally, it generates a Rust struct of the same name, which allows accessing instances of that Python class from Rust."],["py_exception","Defines a new exception type."],["py_fn","Creates a Python callable object that invokes a Rust function."],["py_module_initializer","Expands to an `extern \"C\"` function that allows Python to load the rust code as a Python extension module."],["pyobject_newtype",""]],"mod":[["argparse","This module contains logic for parsing a python argument list. See also the macros `py_argparse!`, `py_fn!` and `py_method!`."],["buffer",""],["exc","This module contains the python exception types."],["oldstyle","This module contains support for old-style classes. Only available in Python 2.x."],["py_class",""]],"struct":[["GILGuard","RAII type that represents the Global Interpreter Lock acquisition."],["GILProtected","Mutex-like wrapper object for data that is protected by the Python GIL."],["NoArgs","An empty struct that represents the empty argument list. Corresponds to the empty tuple `()` in Python."],["PyBool","Represents a Python `bool`."],["PyBytes","Represents a Python byte string. Corresponds to `str` in Python 2, and `bytes` in Python 3."],["PyDict","Represents a Python `dict`."],["PyErr","Represents a Python exception that was raised."],["PyFloat","Represents a Python `float` object."],["PyInt","Represents a Python `int` object."],["PyIterator","A python iterator object."],["PyList","Represents a Python `list`."],["PyLong","In Python 2.x, represents a Python `long` object. In Python 3.x, represents a Python `int` object. Both `PyInt` and `PyLong` refer to the same type on Python 3.x."],["PyModule","Represents a Python module object."],["PyObject","Represents a reference to a Python object."],["PySequence","Represents a reference to a python object supporting the sequence protocol."],["PyString","Represents a Python string. Corresponds to `basestring` in Python 2, and `str` in Python 3."],["PyTuple","Represents a Python tuple object."],["PyType","Represents a reference to a Python type object."],["PyUnicode","Represents a Python unicode string. Corresponds to `unicode` in Python 2, and `str` in Python 3."],["Python","Marker type that indicates that the GIL is currently held."],["PythonObjectDowncastError",""]],"trait":[["FromPyObject","FromPyObject is implemented by various types that can be extracted from a Python object."],["ObjectProtocol","Trait that contains methods "],["PyClone",""],["PyDrop",""],["PythonObject","Trait implemented by all Python object types."],["PythonObjectWithCheckedDowncast","Trait implemented by Python object types that allow a checked downcast."],["PythonObjectWithTypeObject","Trait implemented by Python object types that have a corresponding type object."],["RefFromPyObject",""],["ToPyObject","Conversion trait that allows various objects to be converted into Python objects."]],"type":[["PyResult","Represents the result of a Python call."],["Py_hash_t",""],["Py_ssize_t",""]]});