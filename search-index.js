var searchIndex = {};
searchIndex["toml"] = {"doc":"A [TOML]-parsing library","items":[[0,"value","toml","Definition of a TOML value",null,null],[3,"Datetime","toml::value","A parsed TOML datetime value",null,null],[3,"DatetimeParseError","","Error returned from parsing a `Datetime` in the `FromStr` implementation.",null,null],[4,"Value","","Representation of a TOML value.",null,null],[13,"String","","Represents a TOML string",0,null],[13,"Integer","","Represents a TOML integer",0,null],[13,"Float","","Represents a TOML float",0,null],[13,"Boolean","","Represents a TOML boolean",0,null],[13,"Datetime","","Represents a TOML datetime",0,null],[13,"Array","","Represents a TOML array",0,null],[13,"Table","","Represents a TOML table",0,null],[6,"Array","","Type representing a TOML array, payload of the `Value::Array` variant",null,null],[6,"Table","","Type representing a TOML table, payload of the `Value::Table` variant",null,null],[8,"Index","","Types that can be used to index a `toml::Value`",null,null],[11,"eq","","",0,{"inputs":[{"name":"self"},{"name":"value"}],"output":{"name":"bool"}}],[11,"ne","","",0,{"inputs":[{"name":"self"},{"name":"value"}],"output":{"name":"bool"}}],[11,"clone","","",0,{"inputs":[{"name":"self"}],"output":{"name":"value"}}],[11,"fmt","","",0,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"try_from","","Convert a `T` into `toml::Value` which is an enum that can represent any valid TOML data.",0,{"inputs":[{"name":"t"}],"output":{"name":"result"}}],[11,"try_into","","Interpret a `toml::Value` as an instance of type `T`.",0,{"inputs":[{"name":"self"}],"output":{"name":"result"}}],[11,"get","","Index into a TOML array or map. A string index can be used to access a value in a map, and a usize index can be used to access an element of an array.",0,{"inputs":[{"name":"self"},{"name":"i"}],"output":{"name":"option"}}],[11,"get_mut","","Mutably index into a TOML array or map. A string index can be used to access a value in a map, and a usize index can be used to access an element of an array.",0,{"inputs":[{"name":"self"},{"name":"i"}],"output":{"name":"option"}}],[11,"as_integer","","Extracts the integer value if it is an integer.",0,{"inputs":[{"name":"self"}],"output":{"name":"option"}}],[11,"is_integer","","Tests whether this value is an integer.",0,{"inputs":[{"name":"self"}],"output":{"name":"bool"}}],[11,"as_float","","Extracts the float value if it is a float.",0,{"inputs":[{"name":"self"}],"output":{"name":"option"}}],[11,"is_float","","Tests whether this value is a float.",0,{"inputs":[{"name":"self"}],"output":{"name":"bool"}}],[11,"as_bool","","Extracts the boolean value if it is a boolean.",0,{"inputs":[{"name":"self"}],"output":{"name":"option"}}],[11,"is_bool","","Tests whether this value is a boolean.",0,{"inputs":[{"name":"self"}],"output":{"name":"bool"}}],[11,"as_str","","Extracts the string of this value if it is a string.",0,{"inputs":[{"name":"self"}],"output":{"name":"option"}}],[11,"is_str","","Tests if this value is a string.",0,{"inputs":[{"name":"self"}],"output":{"name":"bool"}}],[11,"as_datetime","","Extracts the datetime value if it is a datetime.",0,{"inputs":[{"name":"self"}],"output":{"name":"option"}}],[11,"is_datetime","","Tests whether this value is a datetime.",0,{"inputs":[{"name":"self"}],"output":{"name":"bool"}}],[11,"as_array","","Extracts the array value if it is an array.",0,{"inputs":[{"name":"self"}],"output":{"name":"option"}}],[11,"as_array_mut","","Extracts the array value if it is an array.",0,{"inputs":[{"name":"self"}],"output":{"name":"option"}}],[11,"is_array","","Tests whether this value is an array.",0,{"inputs":[{"name":"self"}],"output":{"name":"bool"}}],[11,"as_table","","Extracts the table value if it is a table.",0,{"inputs":[{"name":"self"}],"output":{"name":"option"}}],[11,"as_table_mut","","Extracts the table value if it is a table.",0,{"inputs":[{"name":"self"}],"output":{"name":"option"}}],[11,"is_table","","Tests whether this value is a table.",0,{"inputs":[{"name":"self"}],"output":{"name":"bool"}}],[11,"same_type","","Tests whether this and another value have the same type.",0,{"inputs":[{"name":"self"},{"name":"value"}],"output":{"name":"bool"}}],[11,"type_str","","Returns a human-readable representation of the type of this value.",0,{"inputs":[{"name":"self"}],"output":{"name":"str"}}],[11,"index","","",0,{"inputs":[{"name":"self"},{"name":"i"}],"output":{"name":"value"}}],[11,"index_mut","","",0,{"inputs":[{"name":"self"},{"name":"i"}],"output":{"name":"value"}}],[11,"from","","",0,{"inputs":[{"name":"str"}],"output":{"name":"value"}}],[11,"from","","",0,{"inputs":[{"name":"vec"}],"output":{"name":"value"}}],[11,"from","","",0,{"inputs":[{"name":"btreemap"}],"output":{"name":"value"}}],[11,"from","","",0,{"inputs":[{"name":"hashmap"}],"output":{"name":"value"}}],[11,"from","","",0,{"inputs":[{"name":"string"}],"output":{"name":"value"}}],[11,"from","","",0,{"inputs":[{"name":"i64"}],"output":{"name":"value"}}],[11,"from","","",0,{"inputs":[{"name":"i32"}],"output":{"name":"value"}}],[11,"from","","",0,{"inputs":[{"name":"i8"}],"output":{"name":"value"}}],[11,"from","","",0,{"inputs":[{"name":"u8"}],"output":{"name":"value"}}],[11,"from","","",0,{"inputs":[{"name":"u32"}],"output":{"name":"value"}}],[11,"from","","",0,{"inputs":[{"name":"f64"}],"output":{"name":"value"}}],[11,"from","","",0,{"inputs":[{"name":"f32"}],"output":{"name":"value"}}],[11,"from","","",0,{"inputs":[{"name":"bool"}],"output":{"name":"value"}}],[11,"from","","",0,{"inputs":[{"name":"datetime"}],"output":{"name":"value"}}],[11,"fmt","","",0,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"from_str","","",0,{"inputs":[{"name":"str"}],"output":{"name":"result"}}],[11,"serialize","","",0,{"inputs":[{"name":"self"},{"name":"s"}],"output":{"name":"result"}}],[11,"deserialize","","",0,{"inputs":[{"name":"d"}],"output":{"name":"result"}}],[11,"deserialize_any","","",0,{"inputs":[{"name":"self"},{"name":"v"}],"output":{"name":"result"}}],[11,"deserialize_enum","","",0,null],[11,"deserialize_option","","",0,{"inputs":[{"name":"self"},{"name":"v"}],"output":{"name":"result"}}],[11,"deserialize_newtype_struct","","",0,{"inputs":[{"name":"self"},{"name":"str"},{"name":"v"}],"output":{"name":"result"}}],[11,"deserialize_bool","","",0,{"inputs":[{"name":"self"},{"name":"v"}],"output":{"name":"result"}}],[11,"deserialize_u8","","",0,{"inputs":[{"name":"self"},{"name":"v"}],"output":{"name":"result"}}],[11,"deserialize_u16","","",0,{"inputs":[{"name":"self"},{"name":"v"}],"output":{"name":"result"}}],[11,"deserialize_u32","","",0,{"inputs":[{"name":"self"},{"name":"v"}],"output":{"name":"result"}}],[11,"deserialize_u64","","",0,{"inputs":[{"name":"self"},{"name":"v"}],"output":{"name":"result"}}],[11,"deserialize_i8","","",0,{"inputs":[{"name":"self"},{"name":"v"}],"output":{"name":"result"}}],[11,"deserialize_i16","","",0,{"inputs":[{"name":"self"},{"name":"v"}],"output":{"name":"result"}}],[11,"deserialize_i32","","",0,{"inputs":[{"name":"self"},{"name":"v"}],"output":{"name":"result"}}],[11,"deserialize_i64","","",0,{"inputs":[{"name":"self"},{"name":"v"}],"output":{"name":"result"}}],[11,"deserialize_f32","","",0,{"inputs":[{"name":"self"},{"name":"v"}],"output":{"name":"result"}}],[11,"deserialize_f64","","",0,{"inputs":[{"name":"self"},{"name":"v"}],"output":{"name":"result"}}],[11,"deserialize_char","","",0,{"inputs":[{"name":"self"},{"name":"v"}],"output":{"name":"result"}}],[11,"deserialize_str","","",0,{"inputs":[{"name":"self"},{"name":"v"}],"output":{"name":"result"}}],[11,"deserialize_string","","",0,{"inputs":[{"name":"self"},{"name":"v"}],"output":{"name":"result"}}],[11,"deserialize_unit","","",0,{"inputs":[{"name":"self"},{"name":"v"}],"output":{"name":"result"}}],[11,"deserialize_seq","","",0,{"inputs":[{"name":"self"},{"name":"v"}],"output":{"name":"result"}}],[11,"deserialize_bytes","","",0,{"inputs":[{"name":"self"},{"name":"v"}],"output":{"name":"result"}}],[11,"deserialize_byte_buf","","",0,{"inputs":[{"name":"self"},{"name":"v"}],"output":{"name":"result"}}],[11,"deserialize_map","","",0,{"inputs":[{"name":"self"},{"name":"v"}],"output":{"name":"result"}}],[11,"deserialize_unit_struct","","",0,{"inputs":[{"name":"self"},{"name":"str"},{"name":"v"}],"output":{"name":"result"}}],[11,"deserialize_tuple_struct","","",0,{"inputs":[{"name":"self"},{"name":"str"},{"name":"usize"},{"name":"v"}],"output":{"name":"result"}}],[11,"deserialize_struct","","",0,null],[11,"deserialize_tuple","","",0,{"inputs":[{"name":"self"},{"name":"usize"},{"name":"v"}],"output":{"name":"result"}}],[11,"deserialize_ignored_any","","",0,{"inputs":[{"name":"self"},{"name":"v"}],"output":{"name":"result"}}],[11,"deserialize_identifier","","",0,{"inputs":[{"name":"self"},{"name":"v"}],"output":{"name":"result"}}],[11,"into_deserializer","","",0,{"inputs":[{"name":"self"}],"output":{"name":"self"}}],[11,"eq","","",1,{"inputs":[{"name":"self"},{"name":"datetime"}],"output":{"name":"bool"}}],[11,"ne","","",1,{"inputs":[{"name":"self"},{"name":"datetime"}],"output":{"name":"bool"}}],[11,"clone","","",1,{"inputs":[{"name":"self"}],"output":{"name":"datetime"}}],[11,"fmt","","",2,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"clone","","",2,{"inputs":[{"name":"self"}],"output":{"name":"datetimeparseerror"}}],[11,"fmt","","",1,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"fmt","","",1,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"from_str","","",1,{"inputs":[{"name":"str"}],"output":{"name":"result"}}],[11,"serialize","","",1,{"inputs":[{"name":"self"},{"name":"s"}],"output":{"name":"result"}}],[11,"deserialize","","",1,{"inputs":[{"name":"d"}],"output":{"name":"result"}}],[11,"fmt","","",2,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"description","","",2,{"inputs":[{"name":"self"}],"output":{"name":"str"}}],[0,"ser","toml","Serializing Rust structures into TOML.",null,null],[3,"Serializer","toml::ser","Serialization implementation for TOML.",null,null],[4,"Error","","Errors that can occur when serializing a type.",null,null],[13,"UnsupportedType","","Indicates that a Rust type was requested to be serialized but it was not supported.",3,null],[13,"KeyNotString","","The key of all TOML maps must be strings, but serialization was attempted where the key of a map was not a string.",3,null],[13,"ArrayMixedType","","Arrays in TOML must have a homogenous type, but a heterogeneous array was emitted.",3,null],[13,"ValueAfterTable","","All values in a TOML table must be emitted before further tables are emitted. If a value is emitted after a table then this error is generated.",3,null],[13,"DateInvalid","","A serialized date was invalid.",3,null],[13,"NumberInvalid","","A serialized number was invalid.",3,null],[13,"UnsupportedNone","","None was attempted to be serialized, but it's not supported.",3,null],[13,"Custom","","A custom error which could be generated when serializing a particular type.",3,null],[5,"to_vec","","Serialize the given data structure as a TOML byte vector.",null,{"inputs":[{"name":"t"}],"output":{"name":"result"}}],[5,"to_string","","Serialize the given data structure as a String of TOML.",null,{"inputs":[{"name":"t"}],"output":{"name":"result"}}],[5,"to_string_pretty","","Serialize the given data structure as a \"pretty\" String of TOML.",null,{"inputs":[{"name":"t"}],"output":{"name":"result"}}],[5,"tables_last","","Convenience function to serialize items in a map in an order valid with TOML.",null,{"inputs":[{"name":"i"},{"name":"s"}],"output":{"name":"result"}}],[11,"fmt","","",3,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"eq","","",3,{"inputs":[{"name":"self"},{"name":"error"}],"output":{"name":"bool"}}],[11,"ne","","",3,{"inputs":[{"name":"self"},{"name":"error"}],"output":{"name":"bool"}}],[11,"clone","","",3,{"inputs":[{"name":"self"}],"output":{"name":"error"}}],[11,"new","","Creates a new serializer which will emit TOML into the buffer provided.",4,{"inputs":[{"name":"string"}],"output":{"name":"serializer"}}],[11,"pretty","","Instantiate a \"pretty\" formatter",4,{"inputs":[{"name":"string"}],"output":{"name":"serializer"}}],[11,"pretty_string","","Enable or Disable pretty strings",4,{"inputs":[{"name":"self"},{"name":"bool"}],"output":{"name":"self"}}],[11,"pretty_string_literal","","Enable or Disable Literal strings for pretty strings",4,{"inputs":[{"name":"self"},{"name":"bool"}],"output":{"name":"self"}}],[11,"pretty_array","","Enable or Disable pretty arrays",4,{"inputs":[{"name":"self"},{"name":"bool"}],"output":{"name":"self"}}],[11,"pretty_array_indent","","Set the indent for pretty arrays",4,{"inputs":[{"name":"self"},{"name":"usize"}],"output":{"name":"self"}}],[11,"pretty_array_trailing_comma","","Specify whether to use a trailing comma when serializing pretty arrays",4,{"inputs":[{"name":"self"},{"name":"bool"}],"output":{"name":"self"}}],[11,"fmt","","",3,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"description","","",3,{"inputs":[{"name":"self"}],"output":{"name":"str"}}],[11,"custom","","",3,{"inputs":[{"name":"t"}],"output":{"name":"error"}}],[0,"de","toml","Deserializing TOML into Rust structures.",null,null],[3,"Error","toml::de","Errors that can occur when deserializing a type.",null,null],[3,"Deserializer","","Deserialization implementation for TOML.",null,null],[5,"from_slice","","Deserializes a byte slice into a type.",null,null],[5,"from_str","","Deserializes a string into a type.",null,{"inputs":[{"name":"str"}],"output":{"name":"result"}}],[11,"fmt","","",5,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"clone","","",5,{"inputs":[{"name":"self"}],"output":{"name":"error"}}],[11,"new","","Creates a new deserializer which will be deserializing the string provided.",6,{"inputs":[{"name":"str"}],"output":{"name":"deserializer"}}],[11,"end","","The `Deserializer::end` method should be called after a value has been fully deserialized.  This allows the `Deserializer` to validate that the input stream is at the end or that it only has trailing whitespace/comments.",6,{"inputs":[{"name":"self"}],"output":{"name":"result"}}],[11,"set_require_newline_after_table","","Historical versions of toml-rs accidentally allowed a newline after a table definition, but the TOML spec requires a newline after a table definition header.",6,{"inputs":[{"name":"self"},{"name":"bool"}],"output":null}],[11,"line_col","","Produces a (line, column) pair of the position of the error if available",5,{"inputs":[{"name":"self"}],"output":{"name":"option"}}],[11,"fmt","","",5,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"description","","",5,{"inputs":[{"name":"self"}],"output":{"name":"str"}}],[11,"custom","","",5,{"inputs":[{"name":"t"}],"output":{"name":"error"}}]],"paths":[[4,"Value"],[3,"Datetime"],[3,"DatetimeParseError"],[4,"Error"],[3,"Serializer"],[3,"Error"],[3,"Deserializer"]]};
initSearch(searchIndex);
