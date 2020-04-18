---
layout: post
title:  Collections+
description: Storing groups of items under a single value.
date:   2019-03-03 09:40:43 -0500
read_time: true
thumbnail: 
  path: /images/cardstack.jpg
categories: [jekyll, update]
---
Swift provides ways of storing groups of items under a single value. There are several ways of doing this and each method is different from the other so the one you decide to use will depend upon what you’re trying to accomplish.  You have the option of using arrays, sets, dictionaries, tuples or enums.  Now [officially](https://docs.swift.org/swift-book/LanguageGuide/CollectionTypes.html), tuples and enums are not collection types but since they also allow you to group values, I’m going to include them here.

### Arrays
An Array is a list of values, in a specific order and you access each value using its numerical position in the list - the first numerical position is 0, not 1.  All values must be of the same type in an array. For example, you cannot have a single array that contains both integers and strings.  Actually, that's not true.  If you really do want an array of mixed types, you have to explicitly declare it as type "Any."

To declare an array with values:

{% highlight swift %}
var shoppingList = [“Figs”, “Carrots”, “Juice”, “Ice Cream“, “Butter”]

let mixedTypeArray: Any = ["George", "Andrew", 45, 33.09]
// must declare type "Any" for mixed type array
{% endhighlight %}

`shoppingList[1]` would contain the value `Carrots`.

Here are different ways to declare an empty array:

{% highlight swift %}
var list = [String]()
 var anotherList: [String] = []
 var results = Array<Int>()
{% endhighlight %}


### Sets
A Set is a list of values in no particular order and each value must be unique. If you insist on adding a duplicate value to the set, Swift will just ignore the duplicate as if it doesn’t exist. Since sets are unordered, you cannot access the values using a numerical position as you would in an array.  A set can only contain values of a single type.

To declare an empty set:

{% highlight swift %}
var mySet: Set<Int>
{% endhighlight %}

To declare a set with initial values:

{% highlight swift %}
var mySet: Set<Int> = [1, 2, 3, 4, 5]
{% endhighlight %}


### Dictionaries
A Dictionary is a list of values in no particular order but has keys that you define to associate with each value, in other words, an unordered collection of pairs - you access the values using the keys instead of numerical positions.  Keys in the dictionary must be unique, but different keys may point to the same value.  All keys must be of the same type and all values must be of the same type.

To declare an empty dictionary:

{% highlight swift %}
var myDictionary: [String: Int] = [:]
{% endhighlight %}

<figure>
	<img src="/images/CollectionTypes_intro_2x.png" alt="Collection Types" width="730" height="300">
        <figcaption><a href="https://docs.swift.org/swift-book/LanguageGuide/CollectionTypes.html" title="Swift 5 - Collection Types">Swift 5 - Collection Types</a></figcaption>
</figure>

### Tuples
Tuples are fixed in size once they have been created and you can attach names (keys) to each item. You can read items using numerical positions (starts with 0) or by using the names you defined.  Tuples may also mix values of different types so, for example, you can define a tuple that contains a string value, a bool value and an integer value.

To declare an empty tuple:

{% highlight swift %}
var coordinates: (Int, Int)
{% endhighlight %}

To give it values:

{% highlight swift %}
var coordinates: (Int, Int) = (5, 7)
{% endhighlight %}

You can shorten it to:

{% highlight swift %}
var coordinates = (5, 7)
{% endhighlight %}

To give each value a key:

{% highlight swift %}
var coordinates = (x: 5, y: 7)
{% endhighlight %}


### Enums
Enumerations, or enums for short, allow you to define a data type for a group of related values.  For example, you can define an enum called `seasons` which contains the values `Winter`, `Spring`, `Summer` and `Autumn`.  enums group related values and allow you to document which values are legal to use.  This makes your code more readable and less prone to the introduction of errors because if you misspell a value that was defined by an enum, the compiler will immediately flag an error.  Note again, enums are types.  You can attach raw values to enums so they can be created from integers or strings, or you can add associated values to store additional information about each case.

You can create an enum like this:

{% highlight swift %}
enum Weekdays {
	case Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday
}
{% endhighlight %}

Or:

{% highlight swift %}
enum Weekdays {
	case Sunday
	case Monday
	case Tuesday
	case Wednesday
	case Thursday
	case Friday
	case Saturday
}
{% endhighlight %}

Hopefully I’ve been able to make clear how each of the above are similar and how they are different from each other.

