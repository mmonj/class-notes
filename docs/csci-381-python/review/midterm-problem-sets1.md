# Midterm Review: Python Problem Sets 1

1. Write a function `generate_matrix(n: int, m: int) -> list[list[int]]` that generates an `n × m` matrix where each element is the sum of its row and column indices.

   Return the matrix as a list of lists.

   **Example:**

   ```python
   matrix = generate_matrix(3, 3)
   print(matrix)
   # Expected Output:
   # [[0, 1, 2], [1, 2, 3], [2, 3, 4]]
   ```

   &nbsp;

2. Write a function `compose(*funcs)` that accepts a variable number of function references and returns a closure. The closure should compose the functions (i.e., apply them in sequence from right to left).

   Example usage:

   ```python
   def add_one(x):
      return x + 1

   def triple(x):
      return 3 * x

   def square(x):
      return x * x

   composed = compose(square, add_one)
   print(composed(3))  # Output: 16

   print(compose(square, add_one, triple)(3))  # Output: 100
   ```

   &nbsp;

3. Create a closure `make_counter` that maintains an internal count state, initialized with the value of `start`. `make_counter` should accept an integer keyword argument `start` (default: `0`)

   `make_counter` should return a tuple of three functions:

   - `adjust`: Accepts an integer keyword argument `amount` (default: `1`). It will adjust the count state by the given `amount` and return the updated value.

   - `reset`: Resets the count state to its initial state and returns the updated value.

   - `undo`: Reverts the count state to its previous value before the last operation and returns it. If `undo` is called multiple times beyond the stored history, the count state remains at `start`.

   **Example:**

   ```python
   adjust, reset, undo = make_counter(10)
   print(adjust(4))  # Output: 14
   print(adjust(-8))  # Output: 6
   print(adjust())  # Output: 7
   print(adjust())  # Output: 8
   print(undo()) # Output: 7
   print(undo()) # Output: 6

   print(reset()) # Output: 10

   # (No more `undo` history after this point. Any further calls to `undo`
   # should result in the internal count state simply remaining at its original value)

   print(undo()) # Output: 10
   print(undo()) # Output: 10

   ```

   &nbsp;

4. Consider the following scenario:

   ```python
   a = [1, 2, 3]
   b = a
   del a[1]
   ```

   a. Determine if modifying `a` in the above manner affects `b`. Why or why not?

   b. What if line 3 instead read `del a`. Would this have an effect on `b`? Why or why not?

   &nbsp;

5. Given a list of integers, write a function `remove_every_nth_element(elements: list[int], n: int)` that removes every n-th element from the list without creating a new list. Use the `del` keyword.

   **Example:**

   ```python
   mylist = [1, 2, 3, 4, 5, 6]
   remove_every_nth_element(mylist, 2)
   print(mylist)
   # Expected Output: [1, 3, 5]
   ```

   &nbsp;

6. Write a recursive function `flatten(mylist: list) -> list` that takes a deeply nested list (e.g., `[[1, [2, 3]], 4, [5, [6, 7]]]`) and returns a flattened list.

   **Example:**

   ```python
   nested_list = [[1, [2, 3]], 4, [5, [6, 7]]]
   flat_list = flatten(nested_list)
   print(flat_list)
   # Expected Output: [1, 2, 3, 4, 5, 6, 7]
   ```

   &nbsp;

7. Write a function `is_palindrome(s: str) -> bool` that checks whether a given string is a palindrome. The function should ignore case differences.

   **Example:**

   ```python
   print(is_palindrome("Madam"))  # Output: True
   print(is_palindrome("Hello"))  # Output: False
   ```

   &nbsp;

8. Write a function `prime_factors(n: int) -> list[int]` that returns all prime factors of a given integer `n`.

   **Example:**

   ```python
   print(prime_factors(28))  # Output: [2, 2, 7]
   ```

   &nbsp;

9. Write a function `transpose(matrix: list[list[int]]) -> list[list[int]]` that takes a square matrix and returns its transpose.

   **Example:**

   ```python
   matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
   transposed = transpose(matrix)
   print(transposed)
   # Expected Output:
   # [[1, 4, 7],
   #  [2, 5, 8],
   #  [3, 6, 9]]
   ```

   &nbsp;

10. Write a function `merge_sorted_lists(list1: list[int], list2: list[int]) -> list[int]` that merges two sorted lists into a single sorted list without using the built-in `sorted()` function.

    **Example:**

    ```python
    result = merge_sorted_lists([1, 3, 5], [2, 4, 6])
    print(result)
    # Expected Output: [1, 2, 3, 4, 5, 6]
    ```

    &nbsp;

11. Write a function `rotate_list(items: list, k: int) -> list` that rotates the list `k` positions to the right, returning a new list without modifying the original.

    **Example:**

    ```python
    elements = [1, 2, 3, 4, 5]
    rotated = rotate_list(elements, 2)
    print(rotated) # Expected Output: [4, 5, 1, 2, 3]
    print(elements) # Expected Output: [1, 2, 3, 4, 5] (unchanged)
    ```

    &nbsp;
