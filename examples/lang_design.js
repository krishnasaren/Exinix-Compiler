[package --init--]
base packagename;

[accessModifier]
#class
  public - normal no annotion --> cls myClass{} --> access anywhere
  private - $ ----> class $hiddenClass{} --> outer cls can't insider class can be private , accible inside class itself
  final - const keyword -> class _finalClass{} --> cant be extends

#attrib/method/construct
  [public -n o annotions]
  var name : int = 10;
  fn display(){}
  construct(a:str,b:int){state.name, }
  

[var --init--]
#keyword : <outer_scope >{pub , pri ,default} <inner_scope> {stat, const} <name> :? <type> = <value>

var static a: int = 100;
var b : str = 100;


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

[array]
#List
name: List[str] = ["",""]
name: List[int] = [1,2,3,5]
name: List[str,int, model] = [1,"",2.36] //acept multiple type

order,changebale,duplicate allow, can access by index
method- > add(at last), get(pos),set(),size()


#Set
name: Set(str) = {"s","hrish"}
name: Set(int) = 
unorder, unchangable, duplicate not allow

#set
  part of hashset,treeset,linkedhashset
#map (dict)
  part of hashmap,treemap,linkedhashmap

[flow control --init-- ]

if (a > b) {
  
}

if (a>b) {
}else{
}

if(a > b) {
}elif(conditon){
}else{
}

#ternary 
  va:? bool = (condition) ? True : False

#switch
  select(Object){
    option 1:
        break;
    option 2:
        break;
    default:

}
#while 
while(expression){
}

#do..while
do {
}while();

#for
for (assign once, condition chekeverytime, acrion everytime ){
}

#break loop
  break; 
#next
  next;

#lambda_function
  public c = (args) => :?int {action}
  void
  call -> c (args)

#function

  fn display (a:str,b:str) ->int{
    return 1;
  
  }

  var ab = display(a,b);

#classObject
  imu cls MyClass{
    var x : int; #public
    var @name :str; #protected
    var $age : int; #private
    
    __construct__(name : str, age :int){
          __self__.name = name;
          this.age = age;
    }
    fn $show(a:str, b:str){
    }

  }

  final myObj = MyClass();
  Obj cl = MyClass<str, int>()

#classwithTypes
  cls mClass<T,Q,V>{
    var p: T;
    var r : Q;
    var s:V;
    __construct__(p:T,q:Q,r:V){
      this.p = p;
      thi
    }

    
  }


  

    
  

  

  

