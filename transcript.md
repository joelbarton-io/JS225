welcome to this video a father would be
time to have a look at something which
is not related to you one of the ongoing
series right now but something which I
see being asked rather often in the
comments and questions are you to me
everywhere a common source of errors the
difference between primitive and
reference types in JavaScript now what
is both and how does it work
that is what we'll take a look at in
this video and that might explain why
the last time you copied a JavaScript
object and then changed it somewhere
else your copied object was messed up
too so let's have a look at what these
are and how they work as I just said we
have primitive values and we got
reference values or types of JavaScript
you might be aware that javascript is a
dynamically typed language and we don't
have strong typing's which means we
don't define types at the point of time
we declare a variable we just have our
name equals and then some value a string
for example but we do have these types
we do have strings where you have
numbers we just don't explicitly declare
which type of values a variable may hold
but we do have types and primitive
values or types are strings boolean's
numbers undefined now and if we also
count es6 in although the symbol now
these are primitive types and what does
that mean how do you primitive types
work let's take a closer look before we
have a look at reference values to take
a closer look i'm simply on jsbin comm
and I make sure that I only have two
JavaScript and the developer console
open now let's have a look at such a
very simple type I'm going to create a
new variable with the Guara keywords I'm
using ES five-year and I'll name it name
and I want to store my name in there max
now of course their file log name to the
console and we can log it either by
hitting run year or simply hitting ctrl
+ Enter we see max and that shouldn't be
too surprising now if I cry
a new variable second name and I assign
name as a value what do you expect to
see if I now print second name well
let's find out by hitting ctrl enter or
first let's clear it now it's run what
we see max twice now for both console
logs we see max and that makes sense we
assigned name as a value for second name
and since name was max second name also
is max those kind of what we would have
expected right now it becomes
interesting if we change name here Q
let's say Chris now if we log second
name again what do you expect to see
keep in mind
second name is assigned name as a value
so name is assigned as a value for
second name I should say now we changed
name and now I do log second name to the
console what do you expect to see here
well that's clear and then hit run we
see max three times so even though I
changed name to Chris since I log second
name here second name still is max
because that's the super important thing
a string and name just is of type string
since the assignor string is a primitive
value and primitive values are copied by
value you could say so if I assign name
as a value for second name it actually
just takes the content of name the value
max and copies it and kind of paste it
as a value for second name so now we
have cue names which are at this point
of time are equal in our memory and when
I reassign name - Chris well then only
one of these two things in memory is
chris the other one second name still is
max that was a lot of talking about
something which probably was obvious to
you but it is important to understand
this to understand what reference types
are and how they work I will show you
how reference type work before we go on
to the slide
let's create a new variable here I will
name it person and it will be a
JavaScript object now this object may
have a age let's say 28 and it may also
have a name property which is not
related to this name variable here at
all that name property could also be max
and of course we could also have more
properties here like hobbies which could
be an array and this array could hold
sports and cooking maybe now if I lock
that person here let's see what happens
if I clear and hit run well we see the
object with hobbiest name and so on so
we simply log what we created here not
that amazing let's create a new variable
second person and let's assign person as
a value let's now log second person so
this new variable to the console if I
clear this and hit run we see this being
logged queue so this statement here
stems from this console.log statement
and it clearly is the same person we
created here no wonder because we copied
it right we assign the value of person
as a value to second person and
therefore as we already learned up there
with Chris and Max we copied the value
so here's the thing we should expect if
I change the name of the person solve
this original object here to Chris now
and now I again log second person
following the logic we saw up here for
the name which was a string we would now
expect to still see our original object
where the name is max now since I'm
talking like this you can probably
imagine that if I hit run now well we
see a new object with Chris instead of
Max now keep in mind we change the name
of person not of second person and I do
log second person here not first so
adieu locked object which wasn't changed
and yet we see the changed name so
what's happening here well that simply
happens because objects in JavaScript
just like arrays
which basically our objects are
reference types let's take a closer look
this is where we left to slide with our
primitive values now before we come to
the reference values it's important to
understand where the primitive values
are stored where the actual data is
stored it has to be stored somewhere in
our memory and it is stored on the stack
now the stack as the name implies simply
is a stack of data you could say in your
memory and this is a type of memory
which can be accessed really quick and
which is very limited too it doesn't
hold that much information it doesn't
have that much space but due to the
nature it is built or due to how it
works it is very fast now reference
types objects and as I said arrays which
again are just objects kind of are
stored on the heap now the heap is a
different kind of place in memory
unlike the stack the heap takes a little
bit longer to be accessed but therefore
it is able to hold much more information
it's not as short living as the stack
you could say and this type of memory is
perfect for bigger amounts of data or
data which changes frequently or
dynamically that's a stack and to heap
and it is this memory management which
kind of dictates the behavior we saw
before in the console let's understand
how to stack works the stack holds as
the name implies a stack of data let's
say we already have some random number
and some random text in there now we
create a new variable first name max
therefore we store this string max
somewhere in memory or not somewhere
actually on top of the stack and we
basically know that this variable well
is accessing this part of the stack this
entry
now if we assign this first name
variable as a value to a new variable
let's name it full name then a new entry
is pushed on top of the stack and we
know that this variable is referring to
the topmost entry now so this is how we
manage the stack or how data gets
managed on the stack with you have our
different data pieces and our variables
know which position is stack they are
referring to you could say
and remember the stack is limited in
space and therefore it is perfect for
well that's where the name comes from
primitive values like strings numbers
which are in too complex which don't
take up too much space let's take a look
at the heat the heat works like this the
green are just to heat that's a place in
memory where elements are not stored on
top of each other it's not managed like
a stack it's managed randomly you could
say but therefore each element has its
own address and we still have to stack
of course it's not a or solution we have
different types of memory which are able
to work together as you will see we now
create a new object the employee one
which is an object the following happens
element is created in the heap which
stores the actual object but we do have
a pointer on the stack which stores the
reference the address to this object in
the heap and the variable simply stores
the pointer and that's the interesting
thing the variable doesn't know the
address of the place in memory where our
object is stored that's the difference
to the previous approach but the
variable knows where the pointer lies on
the stack it knows the position of the
pointer on the second the pointer in
turn simply stores the address of the
object in the heap now if we create a
new variable employee queue and we store
employee 1 as a value this creates a new
pointer on the stack but and that is now
the key thing this pointer points to the
same place in memory as the first
pointer did so therefore unlike the
previous example where we managed
primitive types on the stack if we
assign the value to a new variable the
actual value the object here is not
copied the object still is the same it's
only one place in memory but we do get a
new pointer pointing to the same place
and it's two different pointers which
are stored in two different variables
but pointing to the same value now if we
go back to chase bin this is what
explains where we see Chris here because
when we assign
as a value to second person the only
thing we copied was the pointer but we
still only had one place in memory
therefore if I change this place a
memory or change something about it the
name here this gets changed for all the
objects all the variables pointing to
that place therefore also second person
and I hope this is clear now why in this
case when working with objects and again
the same is true for arrays if we change
it in one place it gets changed
everywhere and every variable which
points to the same place whereas when we
work with primitive types strings
boolean's and so on we get real copies
now here are two important things I want
to highlight if we create a new variable
let's name it third-person because I'm
very creative and this actually has the
same value as the first person here so I
just copied the object here in code and
I could have typed that manually of
course and we now log third person here
and clear doesn't hit run the third
person still has max and that is even
true if I were to change or words you
create that right after the first person
here so third person is created right
after the first person year is created
and then we change the name of person
and if I now hit clear and run again
third person still has the name of Max
and that's important this of course is a
different place in memory because yet
technically we know it it's the same
object that does hold the same values
but from a technical perspective if you
understand how code works that gets
executed at runtime of course your
computer your browser doesn't know that
these objects do hold the same content
and even if the browser would recognize
that it would still create two different
objects at two different places on the
heap because we're not copying any
pointers here we have a brand new object
so whenever we create a new object or a
new array be that with the off
literal notation he like here with the
colleague braces or with the new keyword
we get a new place in heap it's only
that when we assign values like here
where we store an old variable in a new
one that we copy a pointer if we create
a new object as here it always gets a
new place in the heap so that's
important to understand just because it
looks identical here it doesn't make it
identical still two different objects
two different places in the heap that's
the first important extra takeaway I
wanted to add the other one is what if
you really wanted to copy an object so
here where we have persons of name
equals Chris and then we influenced our
second person because we assigned it
here what if we really wanted to copy
the person object here well we can do
this by setting second person and I'm
just going to comment this out here so
that we have a brand new variable
assignment so I can set second person
equal to person to copy the pointer as
you learned it but if you want to create
a brand new object you can do this with
the Bolton JavaScript object object and
there the assign method which takes two
arguments the first one is an empty
object the second one is the one you
want to copy that's a little trick
object a sign is a built in method
provided by JavaScript which allows you
to create a new object and merge it with
an existing one actually object design
allows you to merge two objects into the
first one and here since I pass an empty
object that's the first argument which
is the to be merged in object it creates
a new one this one and merges the person
object into it so it basically takes all
the properties of the person object and
merges it into second prizm now if we do
this and we hit run you see that we got
max all over the place because now the
fact that we overwrite a name and your
regional person object doesn't influence
second person because you to using
object assign we really copied it we
created a new object and then copied the
property
of the old one there still is a god Cher
you see that hobbies array in our object
now if I not only change the name here
personal name but I also change the
hobbies let's say I push a new hobby on
this array reading maybe if I now it
clear and then run now you see that it
again got changed here so here we're
logging second person we again see that
we get reading in this array even though
I just told you that we now created a
new object and copied all the properties
and that is the issue remember that I
told you that arrays are also reference
types object assigned doesn't create a
deep clone it doesn't create new objects
of the properties it just creates a new
object and copies the existing
properties now since hobbies is an array
and an array is a reference type it
didn't create a new array and merge the
old array into it it just took the old
array so it took the pointer to the old
array and merge that into our new object
so even though we have a new object the
properties if they are reference types
still are the old ones so we still have
the old array in the new object it's
really getting confusing now right but I
hope that this still makes sense arrays
are reference types so even though we
created a real copy of the object we
didn't create one of the arrays element
here deal arrays property now there is
no super trivial solution to that there
of course workarounds you could manually
copy all the properties you could use a
third-party library like lodash which
offers you a clone deep function which
does just that it allows you to deeply
clone a value which means clone not just
the object and then copy the properties
but also really clone the properties to
create new properties you could do that
a link can be found in the video
description
but it's super important to be aware of
this behavior and oftentimes it might
not be an issue if it is well have a
look at low - for example to find a
quick and easy solution to that almost
done one last thing what if you wanted
to copy an array in a well way of
creating a real copy just like with
object assigned for an object how would
you do that for an array well if you
wanted to do that let me do that here at
the very end let's say we have a new
variable my hobbies then you could say
equals person hobbies and that would be
well just copying the pointer right the
issue we already know so if I now log my
hobbies here and I hit run we see sports
cooking and reading but we'll see the
very same thing if I do this before
pushing the new value on person dot
hobbies so if it wouldn't create a
pointer if it would really create a real
copy well we would expect to not see
reading because we copy person hobbies
before we push reading on it but of
course what you will see is that if we
hit run we see reading on the array
again because it is a reference type now
if we want to copy the real array we
could do this for example by using slice
the slice method is a built-in method
offered by JavaScript which allows us to
take a slice off the array and if you
don't pass any arguments it will just
take the full array and we'll create a
new array based on that slice so it will
create a new array and again they don't
pass any arguments take all the elements
of the old array and put them into the
new one therefore if you now clear this
a final time and hit run again now we
only see sports and cooking because we
copied the array before we pushed
reading on it we made a real we created
a real copy and not just copy it's the
pointer and therefore now we have the
array and look like at the point of time
we did copy it your helps probably
steaming now a lot of copying around a
lot of console.log statements so I hope
my point was clear but the
different of reference and primitive
types how you copy only the pointer if
you assign a value which is a reference
type and how you can still force the
behavior of copying well making a real
copy creating a new object or array with
object assign or slice and then again
still with the issue of not having a
deep copy in the case of both ways
actually slice an object assign which
can be fixed with for example libraries
like low - that's a little video about
primitive and reference types and I hope
it was helpful and could clear up some
of the confusion and hopefully at least
point you in the right direction of
fixing this issue the next time you
encounter some strange behavior when
passing objects or arrays around in your