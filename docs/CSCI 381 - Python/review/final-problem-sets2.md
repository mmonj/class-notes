# Final Review: Problem Sets 2

For each of the following questions, you will define a lambda function that returns the stated desired result. You are not allowed to create and use helper functions.

1. Write a lambda function `longest_word` that takes a string and returns the longest word.

   **Example Usage:**

   ```python
   longest_word = # define your lambda here
   print(longest_word("The quick brown fox jumps over the lazy dog"))
   # Expected Output: "jumps"
   ```

   &nbsp;

2. Write a lambda function `transform_strings` that takes a list of strings and returns a new list where each string is reversed if its length is even, otherwise it should be converted to uppercase.

   **Example Usage:**

   ```python
   transform_strings = # define your lambda here
   print(transform_strings(["hello", "world", "python", "is", "fun"]))
   # Expected Output: ['HELLO', 'WORLD', 'nohtyp', 'si', 'FUN']
   ```

   &nbsp;

3. Write a lambda function `sum_digits` that takes a string and returns the sum of all digits found in the string.

   **Example Usage:**

   ```python
   print(sum_digits("a1b2c3"))
   # Expected Output: 6
   ```

   &nbsp;

4. Write a lambda function filter_and_transform that takes a list of integers and returns a new list where:

   - All odd numbers are squared.
   - All even numbers are doubled.
   - The returned list should not contain numbers less than 10.

   ```python
   print(filter_and_transform([5, 12, 8, 15, 3, 20]))
   # Expected Output: [25, 24, 16, 225, 40]
   ```

   &nbsp;

5. Write a lambda function count_vowels that takes a string and returns the count of vowels (a, e, i, o, u) in the string.

   ```python
   print(count_vowels("Hello, World!"))
   # Expected Output: 3
   ```

   &nbsp;

6. Write a lambda function `filter_dict` that takes a dictionary and returns a new dictionary containing only key-value pairs where the key's length is greater than a given threshold.

   **Example Usage:**

   ```python
   print(filter_dict({'apple': 10, 'dog': 5, 'banana': 7}, 4))
   # Expected Output: {'apple': 10, 'banana': 7}
   ```

   &nbsp;

7. Write a lambda function `common_elements` that takes two lists and returns the sorted intersection of the two lists.

   **Example Usage:**

   ```python
   print(common_elements([1, 2, 3, 4], [3, 4, 5, 6]))
   # Expected Output: [3, 4]
   ```

   &nbsp;

8. Write a lambda function `alternate_case` that takes a string and returns a new string where characters at even indices are uppercase and odd indices are lowercase.

   **Example Usage:**

   ```python
   print(alternate_case("python"))
   # Expected Output: "PyThOn"
   ```

   &nbsp;

9. Write a lambda function `sum_squared_diff` that takes two lists of numbers of the same length and returns the sum of the squared differences between corresponding elements.

   **Example Usage:**

   ```python
   print(sum_squared_diff([1, 2, 3], [3, 2, 1]))
   # Expected Output: 8
   # (3 - 1)**2 + (2 - 2)**2 + (1 - 3)**2 = 8
   ```

   &nbsp;

10. Write a lambda function `filter_primes` that takes a list of numbers and returns a list of primes.

    Hint: The `all()` builtin may be useful here.

    **Example Usage:**

    ```python
    print(filter_primes([2, 3, 4, 5, 6, 7, 8, 9, 10]))
    # Expected Output: [2, 3, 5, 7]
    ```

    &nbsp;
