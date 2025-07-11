---
title: Array of Objects
permalink: /comp1010/classes/array-of-objects
parent: Classes
grand_parent: COMP1010
nav_order: 5
---

- TOC
{:toc}

<!-- Assumed Knowledge -->
{% capture topic_prereq %}
  * [Classes as Types]({{ site.baseurl }}/comp1010/classes/types)
  * [Copying objects]({{ site.baseurl }}/comp1010/classes/copies)
  * [Instance methods]({{ site.baseurl }}/comp1010/classes/methods)

{% endcapture %}
<!-- Learning Outcomes -->
{% capture topic_outcomes %}

  * Creating and operating on an array of objects.

{% endcapture %}

{% include prereq_outcomes.html prereq=topic_prereq outcomes=topic_outcomes %}



## Class under consideration

We will use the following class for this discussion:

```java
public class Rectangle {
	public double width, height;

	public Rectangle(double w, double h) {
		width = w;
		height = h;
	}

	public String toString() {
		return width + " by " + height;
	}
}
```

## Creating an array of objects

#### STEP 1 - Instantiate the array

```java
public class Client {
	public static void main(String[] args) {
		Rectangle[] blocks = new Rectangle[5];
	}
}
```

You can go through each item of the array and display it.

```java
for(int i=0; i < blocks.length; i++) {
	System.out.println(blocks[i]);
}
```

You'll get the following output:

```
null
null
null
null
null
```

The memory diagram for the current state of the array is

<img src="{{ site.baseurl }}/assets/comp1010/classes/classes_array_of_objects/array-of-objects-figure0.png" alt=""/>

Each item of the array is a `Rectangle` reference, and initialised to the default value (which, for objects, is `null`).

At this point, none of the items of the array refer to an instance of type Rectangle. This is checked using `instanceof` operation. So the following would display `Does not refer to Rectangle instance`.


```java
if(blocks[0] instanceof Rectangle) {
	System.out.println("Refers to Rectangle instance");
}
else {
	System.out.println("Does not refer to Rectangle instance");
}
```

Any attempt to access an instance variable or instance method on any of the items of the array will throw a `NullPointerException`.

```java
blocks[0].width = 5; // NullPointerException
String str = blocks[0].toString(); // NullPointerException
```

### Hence...

#### STEP 2 - Instantiating each object

```java
for(int i=0; i < blocks.length; i++) {
	blocks[i] = new Rectangle(i+1, i*2); // instantiate item at index i
	System.out.println(blocks[i]); // display it
}
```

<img src="{{ site.baseurl }}/assets/comp1010/classes/classes_array_of_objects/array-of-objects-figure1.png" alt=""/>

This time, you will get the following output:

```
1.0 by 0.0
2.0 by 2.0
3.0 by 4.0
4.0 by 6.0
5.0 by 8.0
```

## Exercise: Creating (filtered) deep copy of an object array

Consider the array `source` populated as:

```java
Rectangle[] source = new Rectangle[20];
for(int i=0; i < source.length; i++) {
	double randWidth = 1 + rand.nextInt(5);
	double randHeight = 1 + rand.nextInt(5);
	source[i] = new Rectangle(randWidth, randHeight);
}
```

Create a second array containing Rectangles that have an area of 10 or more.

#### STEP 1: Count the number of rectangles with area of 10 or more

```java
int count = 0;
for(int i=0; i < source.length; i++) {
	if(source[i].area() >= 10) {
		count++;
	}
}
```

#### STEP 2: Create an array of required size

```java
Rectangle[] bigRectangles = new Rectangle[count];
```

#### STEP 3: Populate the array

```java
int destIndex = 0;
for(int i=0; i < source.length; i++) {
	if(source[i].area() >= 10) {
		bigRectangles[destIndex] = source[i];
		destIndex++;
	}
}
```

> ## Given an array `data` of `Rectangle` objects, create an array `wider` with those rectangles whose width is more than their height
>> ## SOLUTION
```java
int count = 0;
for(int i=0; i < data.length; i++) {
	if(data[i].width > data[i].height) {
		count++;
	}
}
Rectangle[] wider = new Rectangle[count];
int destIndex = 0;
for(int i=0; i < data.length; i++) {
	if(data[i].width > data[i].height) {
		wider[destIndex] = data[i];
		destIndex++;
	}
}
```

You can also access an instance variable or instance method on any of the items of the array.

```java
blocks[0].width = 5; // change the width of the first item to 5
int h = blocks[3].height; // store height of fourth item into h
```

The complete code for `Rectangle` and `ArrayOfObjects` is provided in [ArrayOfObjects.java]({{ site.baseurl }}/assets/comp1010/classes/classes_array_of_objects/ArrayOfObjects.java).

## Relevant MQ Video

{% include youtube.html id="cRt5ra62MuI" %}