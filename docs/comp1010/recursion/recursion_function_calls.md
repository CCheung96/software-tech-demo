---
title: Function Calls
custom-title: What Happens During a Function Call
permalink: /comp1010/recursion/function-calls
parent: Recursion
grand_parent: COMP1010
nav_order: 1
---

- TOC
{:toc}

<!-- Assumed Knowledge -->
{% capture topic_prereq %}
  * [Functions]({{ site.baseurl }}/comp1000/functions)
{% endcapture %}
<!-- Learning Outcomes -->
{% capture topic_outcomes %}
  * Better understand the concept of parameter passing.
  * Familiarize yourself with standard terminology - *formal paramters* vs. *actual parameters*.
  * Understand the control flow and memory transactions during a function call.
  * Understand the concept of *Call Stack*.
{% endcapture %}

{% include prereq_outcomes.html prereq=topic_prereq outcomes=topic_outcomes %}



# Why this page is important?

Many times, we struggle to understand a concept, but do not realiZe that the actual issue is in one of the prerequisite concepts. This is especially true for recursion. An satisfactory understanding of how functions work is essential for a satisfactory understanding of recursion.

Take this example (contributed by Daniel Sutantyo), and determine the output of the program (the value displayed):

```java
public class Client {
  public static void main(String[] args) {
    int n = 17;
    update(n);
    System.out.println(n);
  }

  int update(int n){
    return n+12;
  }
}
```

<details class="solution" markdown="1"><summary>Explanation</summary>
Congratulations if your answer is 17. 

If your answer was 29, read on. Note the `n` inside the `main` method and the `n` inside the `update` method are physically different variables in memory. The value returned by the `update` method is ignored by the `main` method, and the `n` inside `main` remains unchanged.
</details>

The point of the above exercise is not to make you feel bad, but rather to emphasize that before you jump into recursion, you will greatly benefit from having a strong foundation, which you can, if you study this page sincerely.

# Formal parameters vs. actual parameters

- *Formal parameter* is the name used for the variable in the function definition.
- *Actual parameter* is the value copied into the formal parameter during a function call.

Consider the following example:

```java
public class FormalVsActual {
	public static int square(int n) { //n is the "formal parameter"
		int result = n * n;
		return result;
	}

	public static void main(String[] args) {
		int a = 5;
		int b = square(a); //whatever is inside the brackets is the "actual parameter"
	}
}
```

In the above example,

- Formal parameter in function `square` is `n`.
- Actual parameter in the function call `square(a)` is `a` (5).
- If the function call was `square(d/20 + e/9)`, the actual parameter would be `d/4 + e/9` (100/20 + 36/9 = 9).

# What happens during a function call?

Before we can truly conquer recursion, it's critical to understand what happens when a function is called. Consider the following example:

```java
public static void main(String[] args) {
	int ax = 1, ay = 3;
	int bx = 6, by = 5;
	double d = distance(ax, ay, bx, by);
	System.out.println("Distance: "+d);
}

public static double distance(int x1, int y1, int x2, int y2) {
	int s1 = square(x2-x1);
	int s2 = square(y2-y1);
	int sumSquares = s1 + s2;
	double result = Math.sqrt(sumSquares);
	return result;
}

public static int square(int num) {
	int answer = num * num;
	return answer;
}
```

### STEP 1: main function is invoked by JVM

<img src="{{ site.baseurl }}/assets/comp1010/recursion/recursion_function_call/callStack1.png" alt=""/>

function call is placed on the stack. Note that parameter is `null` because we typically do not pass any arguments to main, at least in this unit.

### STEP 2: main function calls `distance` with parameters 1, 3, 6 and 5.

<img src="{{ site.baseurl }}/assets/comp1010/recursion/recursion_function_call/callStack2.png" alt=""/>

Another entry is made for the call to `distance` and placed on the call stack.

### STEP 3: `distance` calls `square` with parameter `5`

<img src="{{ site.baseurl }}/assets/comp1010/recursion/recursion_function_call/callStack3.png" alt=""/>

A third entry is made for the call to `square` and placed on the stack.

### STEP 4: `square` returns 25 to `distance`

<img src="{{ site.baseurl }}/assets/comp1010/recursion/recursion_function_call/callStack4.png" alt=""/>

Entry for `square` is taken off the stack. `distance` becomes the active function.

### STEP 5: `distance` calls `square` with parameter `2`

<img src="{{ site.baseurl }}/assets/comp1010/recursion/recursion_function_call/callStack5.png" alt=""/>

A third entry is made for the call to `square` and placed on the stack.

### STEP 6: `square` returns 4 to `distance`

<img src="{{ site.baseurl }}/assets/comp1010/recursion/recursion_function_call/callStack6.png" alt=""/>

Entry for `square` is taken off the stack. `distance` becomes the active function.

### STEP 7: `distance` calls `Math.sqrt` with parameter `29`

<img src="{{ site.baseurl }}/assets/comp1010/recursion/recursion_function_call/callStack7.png" alt=""/>

A third entry is made for the call to `Math.sqrt` and placed on the stack.

### STEP 8: `Math.sqrt` returns 5.38516 to `distance`

<img src="{{ site.baseurl }}/assets/comp1010/recursion/recursion_function_call/callStack8.png" alt=""/>

Entry for `square` is taken off the stack. `distance` becomes the active function.

### STEP 9: `distance` returns 5.38516 to `main`

<img src="{{ site.baseurl }}/assets/comp1010/recursion/recursion_function_call/callStack9.png" alt=""/>

Entry for `distance` is taken off the stack. `main` becomes the active function.

### STEP 10: `main` terminates

Entry for `main` is taken off the stack. Call stack is now empty. Program has now finished execution.

## Summary of control flow

<img src="{{ site.baseurl }}/assets/comp1010/recursion/recursion_function_call/controlFlow.png" alt=""/>
<!--<iframe src="https://giphy.com/embed/Az1CJ2MEjmsp2" width="480" height="221" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/bare-barren-Az1CJ2MEjmsp2">via GIPHY</a></p>-->

# Relevant MQ Video

{% include youtube.html id="8ob2ha_sFXM" %}
