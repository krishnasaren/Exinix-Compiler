[package --init--]
base packagename

[special Note]
; not needed to end the syntax its optional

variable and class name rules
1.var and class name are case sensitive
2.must be start with alphabet
3. allowed A-Z a-z 0-9 and _ only
3.starting nameshould be letter or _ can't be number and symbol except_
4. no black space allowed
5.reserved keyword not allowed here


[accessModifier]

#access-modifiers
public -> no extra symbol just simple,private -> $,protected-> @ [both for class and method/var/etc]
non-accessmodifiers
final -> !! (class) and const keyword for variale
static -> static //explicitly needed to define
var static name = 10
cls static !!$nmae{
  
}

#class
  public - normal no annotion --> cls myClass{} --> access anywhere
  private - $ ----> cls $hiddenClass{} --> outer cls can't insider class can be private , accssible inside class itself
  protected -@ -->accessible only within extends (sub)class
  final  - !! -> const keyword for variable -> cls !!finalClass{} --> cant be extends

[outer class modifier]
#allowed
1.public - > cls myClass{} //its access modifier control access-level
2.final -> cls !myclass{} //non-access modifier only gives functionality not controll access level
#not allowed
1.private -> $
2.static -> static
3.protected -> @



#attrib/method/construct
  [public -n o annotions]
  var name = 10
  var name : int = 10 #for typecast
  fn display():str{} //method can be void reture so keyword void
  construct(a,b){this.name = a}

#comment
  // -> single comment
  /*multiline comment*/


[data types]
#primitive
int,float, byte, long, double, char,bool,short

#nonprimitive
ptr,str,array,mem,coll,set,map
  

[var --init--]

const is for constant , not changeable
var name:type = value // type,value is optional, this is for priitive types data types variable
var name:supporttype = nonprimitive(value) // supporttype and value is optional

var name //just declaration
name = 145

var static a: int = 100 //for static variable not belongs to objects ,belong to class so predefine the value is most improntant 
var static a = 10 //without type declare
var b : int = 100 //with type declare
var b = "string" //inline str
var b = str("string") //with the help of str non primitive data class

var c = &a //pointer by default &<varname>
var c : ptr = &a //pointer declare with specify datatypes

var c = ptr(a) //with the help of ptr non primitive datatypes

const pi = 3.14 //consttant variable declare
const pi : float = 3.14 //constat with specify datatype

#typecasting
var a = 100
var b : float = a
  


[comment --init]
#single
--multiple
  comment --




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

  

#maybe operator NullSafety
  var name: int = null; --> remove null keyword
  int name ?? = 0; // maybe operator ??: if name == null then 0 is assign to variable
  

[array]

var ar1 = []
var ar2 : int = [] //with datatypes
var v3 = [[1,2,3],[4,5,6]] //multidimentional arrays (2,3)
v3[0][1] = 4 //changes the data

some psecial case allowded here
var jagged = [[1,2],[3,4,5]] // this is allowed here jagged array

some rules of array :
1.array has fixed length/capacity
2.it can not be added/removed
3. can be changed with index no

#Member/same as python list but has some difference
var name  = mem() //acept multiple type both primitive and non primitive accept all types
var name : str = mem() //aceppt only str data types
var name : str,int = mem() // acept only str,int

order,changebale,duplicate allow, can access by index,multiple type, 
method- > add(at last), get(pos),set(pos),size()


#Collection/tuples
var name = coll() //acept multiple type both primitive and non primitive accept all types
var name  :str = coll() // accept only str
var name  :str,int = coll() // accept only str,int
order, unchangable (immutable) but can added, duplicate allow,can access by index,multiple types allowed

#set
var name = set() ////acept multiple type both primitive and non primitive accept all types
var name : str,int = set() //accept only str,int

unorder, unchangeble(immutable) but can added, duplicate not allow, can't access by index,multiple type allowed

#map
var name = map({"key","val"})// inline declaration in map class it accept set means mapobject can only accept set object as constructure
var name :<str,int> = map() // accept key as only str and value as only int
order,changeaable, dupli not allowd, access by key,multitype, can adde





#typedef type define
typedef str as String
typedef str  : String
typedef oldOne : newOne 


  


[enum are special class type here everything is predefined]
#enum type cant be initiated
enum constants are public, static and final
enum Level{
  EASY,HARD,
    OR
  EASY("ob"); ob is the value of consturecture when i call it like Level.Easy.val || Level.Easy.getValue() #output -ob
  const $value //by default this is final can't be chhaged
  
  __construct__(val){
       __its__.value = val;

  }
    fn getValue(){
        return its.value;
    }


}

[flow control --init-- ]

if (a > b) {
  
}

if (a>b) {
}else{
}

if(a > b) {
}else if(conditon){
}else{
}

#ternary operation
  var name: bool = (condition) ? True : False
  var bame = (conditons) > True:False

#switch
  select(Object){
    option 1:
        break
    option 2:
        break
    default:

}
#while 
while(expression){
}

#do..while
do {
}while();

#for
for (assign once, condition chekeverytime, acrion everytime){
}

#break loop
  break
#next/continue
  next

#lambda_function
  var name = (args) : str => action //keep in mind lambda function need explicit return type its mandatory without {}
  var name : int = (args) : float => action ///here return type is float but i typast it directly into int
  var name : int = (args): float => {if(args){return 10.2}else{return 20.3}} //with {} and return statement

#function return type mandatory and fn keyword needed

  fn display (a,b):int{
    return 1;
  
  }
  fn display(A,b){} //return nothing void not return anything
  fn display(a,b):void{} //same as return null

  var ab = display(a,b)

[OOP]
#classObject
cls MyClass{
    var x : int; #public
    var @name :str; #protected
    var $age : int; #private
    
    __construct__(name : str, age :int){
          its.name = name;
          its.age = age;
    }
    fn $show(a:str, b:str){
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

#interface pure-abstract immutable class
with guard keyword
interface should be public,private (inner class /interface)

imu Network{
  var a : int = 10 # implicitly public, static, final
  fn dis() 
  fn dis(a, b)
  imu inNetwork{
    fn dis(a)
  }

  [suported Modifier]
  class - public 
  constructure - not allowed
  var- always public static final
  method - > default , pub (must not have a body),private (must have body , act as helper ),protected (no allowed reason this is nt extends to child class its impliments so it can hold subclass why why useless protected)
  
  


}

normal clas > abstract > enum|interface

implement of immutable/interface class-> with __guard__
cls sub : sup{

  __guard__(imu1,imu2){
    //their methods and variable, and work with multiple interface
  }
  var interface : imutype = __guard__(imu1){
    can work with only one
    
  }
}





#abstract class [Similar to normal Class but with more function] or mutable class act as abstract class keyword mut
[access Modifier]
var - pub,pri, protected
method : pub, pri, protected,abs (No Body)
construct - public, protected,private ok but if private then can't extends resaon you need constructure in super then you have to call , but private cant call in another class
mut normal{
    
}

[normal Class]
#outerclass innerclass

cls outer{
  cls inner{
  }

}
#object creation
var obj : outer = Outer() //with specify reference type create object
var obj = Outer() // without specify reference type
var obj2 : Outer.inner = Outer().inner() #without static
var obj2 : Outer.inner = Outer.inner() #with static

static keyword defined as ---> static
cls outer{
  var @x = 10
  cls static @inner{
    var @y = 100
  }
  cls @normal{
    var @z = 4
  }
}

cls Main {
  var outer = Outer()
  var inner = Outer.inner() //direct static class inside Outer Class
  var normal = Outer().normal()
  

}
cls main : outer{
  void __dis(){
    its.x = 45; ok allowded this is object itself of current class means main, which have extends outer also (superclass) ,
    
  }
}


[final class that can be extended ]
cls !normal{
  

}

[async function]
fn async call(a,b)->str{
  

}


keyword and annotion
public -> 
private -> $
proteted -> @
extends -> :
static -> static
final -> !!

some keywords :
int,float,bool,char, byte, long, double,short,ptr,str,array,mem,coll,set,map,async,cls,await,if,else,do,while,for,select,option,base,const,var,
typedef,imu,mut,break,next,attempt,failed,passed,fallback,enum,use,return,volatile,synchronized,void,fn,transient,raise,from,as,assert,static,default,its;

special method/class
__construct__,__its__,__guard__


  






  

    
  

  

  

