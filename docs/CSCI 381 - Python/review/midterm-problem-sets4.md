# Midterm Review: Python Problem Sets 4

1. Write a function that sorts a list of tuples by their second element in ascending order.

   ```python
   def sort_by_second(data: list[tuple]) -> list[tuple]:
       # Your code here
   ```

   Example usage:

   ```python
   data = [("a", 3), ("b", 1), ("c", 2)]
   print(sort_by_second(data))  # Output: [("b", 1), ("c", 2), ("a", 3)]
   ```

   &nbsp;

2. Create a list comprehension to generate all numbers divisible by 3 in a given range eg. 1 to 100 inclusive.

   ```python
   def generate_divisible_by_3(lowerbound: int, upperbound: int) -> list[int]:
       # Your return statement here
   ```

   Example usage:

   ```python
   print(generate_divisible_by_3(1, 12))  # Output: [3, 6, 9, 12]
   ```

   &nbsp;

3. Write a function that extracts and reverses a slice of a list (start to end indices inclusive).

   ```python
   def reverse_slice(lst: list[int], start: int, end: int) -> list[int]:
       # Your code here
   ```

   Example usage:

   ```python
   lst = [10, 20, 30, 40, 50]
   print(reverse_slice(lst, 1, 3))  # Output: [40, 30, 20]
   ```

   &nbsp;

4. Write a Python function `apply_transformation` that accepts a list of integers and a lambda function to transform each element in the list. The function should return a new list where each element is transformed according to the lambda function. The lambda function itself is one that accepts an integer value and returns the transformed value.

   Your function should have the following signature:

   ```python
   def apply_transformation(numbers: list[int], transform_function: Callable) -> list:
       # Your code here
   ```

   Example usage:

   ```python
    my_list = [1, 2, 3]
    number_doubler_lambda = ... # create your lambda here
    number_squarer_lambda = ... # create your lambda here

    doubled_nums = apply_transformation(my_list, number_doubler_lambda)
    squared_nums = apply_transformation(my_list, number_squarer_lambda)

    print(doubled_nums) # outputs: [2, 4, 6]
    print(squared_nums) # outputs: [1, 4, 9]

   ```

   &nbsp;

5. Write an expression that sorts a list of integers based on their right-most digit.

   Example:

   ```python
   mylist =  [5, 4, 21, 20, 39]
   # Your expression here
   print(mylist) # output: [20, 21, 4, 5, 39]
   ```

   &nbsp;

6. What is the output of this code, and why?

   ```python
   def func(x=[1,2,3]):
       x.append(4)
       return x

   print(func())
   print(func([5,6,7]))
   print(func())
   ```

   &nbsp;

7. What happens when you run this code?

   ```python
   lst = [1, 2, 3, 4, 5]
   lst[1:4:2] = [10, 20]
   print(lst)
   ```

   &nbsp;

8. What is the output of this code?

   ```python
   d = [4, 1, 6]
   lst = [*d, *sorted(d)]
   print(lst)
   ```

   &nbsp;

9. What is printed and why?

   ```python
   lst = [1, 2, 3, 4, 5]
   new_lst = lst[::-1][:3][::-1]
   print(new_lst)
   ```

   &nbsp;

10. What is the output of this code?

    ```python
    def create_multipliers():
        multipliers = []
        for i in range(3):
            def multiplier(x, i=i):
                return x * i
            multipliers.append(multiplier)
        return multipliers

    funcs = create_multipliers()
    print([f(2) for f in funcs])
    ```

    &nbsp;

11. What does this code print?

    ```python
    items = [(4, 444), (1, 11), (3, 3333)]
    sorted_items = sorted(sorted(items, key=lambda x: x[1]), key=lambda x: x[0])
    print(sorted_items)
    ```

    &nbsp;

12. What's the output of this code?

    ```python
    items = [11, 22, 33, 44, 55]
    counts = [1, 2, 3, 4, 5]
    result = [(items[i], counts[i]) for i in range(len(sorted(items, reverse=True)))]
    print(result)
    ```

    &nbsp;

13. What's printed and why?

    ```python
    def func(items, value):
        items.append(value)
        return items

    numbers = [1, 2, 3]
    print(func(numbers[:], 4))
    print(numbers)
    ```

    &nbsp;

14. What's printed?

    ```python
    mylist = [1, 2, 3, 4, 5]
    mylist[1:4] = sorted(mylist[1:4], reverse=True)
    print(mylist)
    ```

    &nbsp;

15. What's the output of this code?

    ```python
    nums1 = list(range(5))
    nums2 = sorted(nums1, reverse=True)[::-1]
    print(nums1)
    print(nums2)
    ```

    &nbsp;
