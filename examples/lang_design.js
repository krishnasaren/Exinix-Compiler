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

#mybe fun NullSafety
  var name: str = null; --> remove null keyword
  int name ??= 0;
  int length = name.length() ---> NullException

[array]
#Member/arraylist
name: mem[str] = ["",""]
name: mem[int] = [1,2,3,5]
name: mem[str,int, model] = [1,"",2.36] //acept multiple type both primitive and non primitive

order,changebale,duplicate allow, can access by index,multiple type, 
method- > add(at last), get(pos),set(),size()


#Collection/tuples
name: coll[str] = ("s","hrish")
name: coll[int] = (1,2,4)
name : coll[int,str] = ("jd","ddd",25)
order, unchangable (immutable) but can added, duplicate allow,can access by index,multiple types

#set
name : set[str] = {"int", "ddhd"}
name  :set[int]= {1,2,5,4}
name : set[int,str,model] = {1,""}
unorder, unchangeble(immutable) but can added, duplicate not allow, can't access by index,multiple type

#map
name : map[str,str] = {
  "hey":"val",
  1 : "d",
  

}
order,changeaable, dupli not allowd, access by key,multitype, can adde



#set
  part of hashset,treeset,linkedhashset
#map (dict)
  part of hashmap,treemap,linkedhashmap


#pointer & reference

var name : ptr = a


[enum are special class type here everything is predefined]
#enum type cant be initiated
enum level{
  EASY,HARD,
    OR
  EASY("ob"); ob is the value of consturecture when i call it like Level.Easy.val || Level.Easy.getValue() #output -ob
  private string final val;
  
  Level(String val){
       this.value = val;

  }
    public String getValue(){
        return this.value;
    }


}

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



#errorHandling
  attempt{
  }failed (e:Error,IOError){
  
  }failed (e:ArithmaticError){
  
  }passed(){
    --if atempt--
  
  }fallback{
      --default-pass/fail
  
  }

#interface pure-abstract
effect/guard keyword
interface should be public,private (inner class /interface)

shared Network{
  var a : int = 10 # implicitly public, static, final
  fn dis();  
  fn dis(a:str, b:int);
  effect inNetwork{
    fn dis(a:str)
  }

  [suported Modifier]
  class - public 
  constructure - not allowed
  var- always public static final
  method - > default , pub (must not have a body),private (must have body , act as helper ),protected (no allowed reason this is nt extends to child class its impliments so it can hold subclass why why useless protected)
  
  


}

normal clas > abstract > enum|interface

implement : imply





#abstract class [Similar to normal Class but with more function]
[access Modifier]
var - pub,pri, protected
method : pub, pri, protected,abs (No Body)
construct - public, protected,private ok but if private then can't extends resaon you need constructure in super then you have to call , but private cant call in another class
cls -normal{
    abs => '-' symbol abstract class
}

#outerclass innerclass

cls outer{
  cls inner{
  }

}
var obj : outer = Outer()
var obj2 : Outer.inner = Outer().inner() #without static
var obj2 : Outer.inner = Outer.inner() #with static

class outer{
  protected int x = 10;
  protected static class inner{
    protected int y = 100;
  }
  protected class normal{
    protected int z = 4;
  }
}

class Main {
  Outer outer = new Outer();
  Outer.inner = new Outer.inner() |
  Outer.normal = new Outer().new normal() | new outer.normal() ok but cant new Outer.normal() | new Outer().normal()
  

}
class main extends outer{
  void dis(){
    this.x = 45; ok allowded this is object itself of current class means main, which have extends outer also (superclass) ,
    this.inner = not allowde
    Outer.normal = this.new normal() ok
  }
}


#const var and 
const nm : str = "dd"
cls imu normal{
  #imu -keyword for final class not extends

}

fn async call(a:str,b:str)->str{
  

}







  

    
  

  

  

