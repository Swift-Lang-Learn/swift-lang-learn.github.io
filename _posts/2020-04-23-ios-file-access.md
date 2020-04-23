---
layout: post
title: iOS File Access
description: Accessing the file system and files on an iOS device.
date:   2020-04-23 08:52:43 -0500
read_time: true
thumbnail: 
  path: /images/iphonefiles.jpg
categories: [jekyll, update]
---
In this post, we will get familiar with how to enable iOS applications to access data on local file systems.  By this we mean displaying data that is stored within the application’s bundle directory to the user.

What is a bundle?  An iOS applicaiton is made up of code, icons and several other types of content - all of this content is stored on disk on the iPhone in a directory - this directory with all of its contents organized within specifically defined sub-directories is called a bundle.

Let’s say our application’s job is to display a handful of pictures stored in the application bundle to the user.  There are 3 things the application needs (note the order):

1. an interface to the iPhone’s filesystem
2. the path to the bundle directory
3. the names of the files that are to be displayed

### File System Interface
The `FileManager` Class gives you a convenient interface to the file system.  Instantiate a new `FileManager` object to open the interface:

{% highlight swift %}
let fm = FileManager.default
{% endhighlight %}

The `fm` instance can now be used to examine the contents of the file system and make changes to it if needed.  If you’re curious, the object returned by FileManager.default will look something like this:  `<NSFileManager: 0x600003cf8000>\n`.

### Bundle Directory Path
Any executable can use a bundle object to locate resources, either inside an application’s bundle or in a known bundle located somewhere else, but, you can’t use a bundle object to locate files in other parts of the file system.

To use a bundle object:

1. create a bundle object for the bundle directory you want to access
2. use the methods of the bundle object to access the needed files

Create the bundle object:

{% highlight swift %}
let path = Bundle.main.resourcePath!
{% endhighlight %}

`resourcePath` returns an optional String - a file path, i.e., `/path/to/directory`.  String is optional because not all bundles have a resource path.  If you’re wondering why we’re writing such high-risk code (force unwrapping the optional String), it’s because it’s not actually risky at all in this case - this is iOS and iOS main bundles will *always* have a resource path.

Use bundle object methods:

{% highlight swift %}
let items = try! fm.contentsOfDirectory(atPath: path)
{% endhighlight %}

This method returns an array of Strings - items in the path, i.e., filenames, dirs, symlinks.  Note that this does a shallow search of the directory which means symlinks and sub-directories will not be traversed.  It will return files beginning with a leading dot, i.e., `.viminfo`, but does not return `.` or `..` or resource forks (files beginning with `._`).  The order of the file names returned is completely undefined and so unpredictable.  The reason we must use the keyword `try` is because `contentsOfDirectory` is a throwing function:

{% highlight swift %}
func contentsOfDirectory(atPath path: String) throws -> [String]
{% endhighlight %}

The reason we’re using `try!` and risking a crash of our application if there is nothing in the resource path is the same as above; there really is no risk.  If our resource path truly did return a `nil`, there would be something fundamentally broken and our application would be the least of what the user would be facing.  So unless there are major problem with the user’s device, the returned resource path will always have a value.

All together, our code to get ready to access elements from the file system is this:

{% highlight swift %}
let fm = FileManager.default
let path = Bundle.main.resourcePath!
let items = try! fm.contentsOfDirectory(atPath: path)
{% endhighlight %}

You will use this often so this is something useful to memorize.

After this, you would write the code to filter and store the names of the files you needed into a variable for later use.
