[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/Bi-S25fM)
# Reverse Insertion Sort

Consider the code for insertion sort we covered in class:

```javascript
function insertionSort(arr) {
  for(var i = 1; i < arr.length; i++) {
    var val = arr[i];
    var j;
    for(j = i; j > 0 && arr[j-1] > val; j--) {
      arr[j] = arr[j-1];
    }
    arr[j] = val;
  }
  return arr;
}
```

Change this function such that it works from the end of the array rather than
the beginning, `insertionSortReverse()` -- only the direction of
iterating over the elements is reversed, the array is still sorted the same way
(ascending). Add your code in `code.js`. Test your new function; I've provided
some basic testing code that uses [jsverify](https://jsverify.github.io/) in
`code.test.js`.

## Average-Case Time Complexity of Insertion Sort

In the lectures, we covered that insertion sort has best-case time complexity of
$\Theta(n)$ and worst-case time complexity of $\Theta(n^2)$. What is the
average-case time complexity ($\Theta$)?

Hint: Think about what happens in each iteration of the loop, and how often the
loop is executed. Keep in mind that for asymptotic analysis we don't care about
constant factors.

Describe your reasoning and the conclusion you've come to. Your reasoning is
most important -- you can easily find the answer, but you need to demonstrate
that you've understood the concept. Add your answer to this markdown file.

### Answer

If the best case of insertion sort is a "pre-sorted" array, and the worst case is a reverse sorted array, the average case would naturally have to fall inbetween the two. To be more specific, the input array will not be pre-sorted but it also will not be reverse sorted.

The best case would be whenever the nested for loop doesn't have to run whatsoever, hence pre-sorted. Thus, the function will simply have to parse through the array "$n$" times and be done.

On the other hand, a reverse sorted array will require the inner loop to parse through the entire length of the array to check each element, and then parse through the entire array **again** in order to get the last element sorted. Therefore, it will have to parse through the entire array twice, or "$n \times n =  n^2$" times. 

Knowing that the average case has to land in-between those two outcomes, we can first discern how it could work in practice to help us derive the asymptotic $\Theta$ bound. 

Let's suppose that in the average case, the inner for-loop has to parse precisely half of the array. The time taken would be represented as "$\frac{n}{2}$" since "$n$" represents the arbitrary size of the input array. Moreover, since the inner loop only ever initiates as the outer loop is running, we would need to add a leading coefficient of "$n$" to the time function of the inner loop. 

$$n(\frac{n}{2}) = \frac{n^2}{2}$$

Of course, we need to generalize that example, but before I do too much theoretical work I would like to point out that regardless of the denominator, the numerator will remain the same. Asymptotically speaking, anytime the inner for-loop is initiated even once, the numerator will always become $n^2$.

$$ \begin{align}
\mathrm{T}(n) & = n(\frac{n}{\text{any constant from 1 to } n}) \\
\implies \mathrm{T}(n) & = \frac{n^2}{\text{any constant from 1 to } n} \\
\implies \mathrm{T}(n) & \in \Theta(n^2)
\end{align}
$$

No matter what the denominator may be, it can never be greater than or equal to the numerator of $n^2$, which means that the average case would have to be $\Theta(n^2)$ for insertion sort. This unfortunately means that the average case is equivalent to the worst case for this algorithm on an asymptotic scale.