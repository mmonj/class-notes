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

2. Create a closure `make_counter` that accepts an integer keyword argument `start` (default: `0`). It should maintain an internal integer state `count`, initialized with the value of `start`.

   `make_counter` should return a tuple of three functions:

   - `increment`: Accepts an integer keyword argument `amount` (default: `1`). Increases `count` by `amount` and returns the updated value.

   - `reset`: Resets `count` to its initial state and returns the updated value.

   - `undo`: Reverts `count` to its previous value before the last operation and returns it. If `undo` is called multiple times beyond the stored history, `count` remains at `start`.

   **Example:**

   ```python
   increment, reset, undo = make_counter(10)
   print(increment(4))  # Output: 14
   print(increment(-1))  # Output: 13
   print(reset()) # Output: 10

   print(undo()) # Output: 13
   print(undo()) # Output: 14
   print(undo()) # Output: 10 (No more `undo` history after this point. Any further calls to `undo` results in `count` simply remaining at its original value)

   print(undo()) # Output: 10
   print(undo()) # Output: 10

   ```

   &nbsp;

3. Consider the following scenario:

   ```python
   a = [1, 2, 3]
   b = a
   del a[1]
   print(b)
   ```

   a. Determine if modifying `a` affects `b`. Why or why not?

   b. What line 3 instead read `del a`. Would this have an effect on `b`? Why or why not?

   &nbsp;

4. Given a list of integers, write a function `remove_every_nth_element(lst: list[int], n: int)` that removes every n-th element from the list without creating a new list. Use the `del` keyword.

   **Example:**

   ```python
   mylist = [1, 2, 3, 4, 5, 6]
   remove_every_nth_element(mylist, 2)
   print(mylist)
   # Expected Output: [1, 3, 5]
   ```

   &nbsp;

5. Write a recursive function `flatten(mylist: list) -> list` that takes a deeply nested list (e.g., `[[1, [2, 3]], 4, [5, [6, 7]]]`) and returns a flattened list.

   **Example:**

   ```python
   nested_list = [[1, [2, 3]], 4, [5, [6, 7]]]
   flat_list = flatten(nested_list)
   print(flat_list)
   # Expected Output: [1, 2, 3, 4, 5, 6, 7]
   ```

   &nbsp;

6. Write a function `is_palindrome(s: str) -> bool` that checks whether a given string is a palindrome. The function should ignore case differences.

   **Example:**

   ```python
   print(is_palindrome("Madam"))  # Output: True
   print(is_palindrome("Hello"))  # Output: False
   ```

   &nbsp;

7. Write a function `prime_factors(n: int) -> list[int]` that returns all prime factors of a given integer `n`.

   **Example:**

   ```python
   print(prime_factors(28))  # Output: [2, 2, 7]
   ```

   &nbsp;

8. Write a function `transpose(matrix: list[list[int]]) -> list[list[int]]` that takes a square and returns its transpose.

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

9. Write a function `min_coin_change(coins: list[int], amount: int) -> int` that returns the minimum number of coins needed to make up the given amount. If it's not possible, return `-1`.

   The argument `coins` is a list of integers, where each integer represents the denomination of coin you have available.

   **Example:**

   ```python
   print(min_coin_change([1, 5, 10, 25], 7))  # Output: 3
   print(min_coin_change([1, 5, 10, 25], 6))   # Output: 2
   print(min_coin_change([5, 10, 25], 6))   # Output: -1
   ```

   &nbsp;
