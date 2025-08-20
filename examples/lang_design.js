[package --init--]
base packagename;

[accessModifier - pub (anywhere), pri(inside class), default(onlyinpackage)]

[var --init--]
#keyword : <outer_scope >{pub , pri ,default} <inner_scope> {stat, const} <name> :? <type> = <value>

pub static a:? int = 100;
static b:? str = 100;


[comment --init]
#single
--multiple
  comment --

[data types]
#primitive
int,float, byte, long, double, char,bool,short

#nonprimitive
str

[typecasting]
d:? str = a; #autometic cast
d:? str = (int) a;

[operator]
#arithmatic
  +,-,*,/,%,++,--,** (e^x), // (floor div always int),+x,-x,~x (bitwise not),
#comaprsion
  ==, !==, >, <, >=, <= 
#bitwise
  &,|, ~ (bit not), ^ (xor), 
#assignment
  =,+=,-=,*=,/=,%=,**=, //=, ??= (maybe operator) like a ??= 10; if assign if a is null,
#logic
  &&, ||, !

[
  

