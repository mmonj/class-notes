# Final Review: Problem Sets 2

For each of the following questions, you will define a lambda function that returns the stated desired result. You are not allowed to create and use helper functions.

1. Write a lambda function `transform_strings` that accepts a list of strings and returns a new list where each string is reversed if its length is even, otherwise it should be converted to uppercase.

   **Example Usage:**

   ```python
   transform_strings = # define your lambda here
   print(transform_strings(["hello", "world", "python", "is", "fun"]))
   # Expected Output: ['HELLO', 'WORLD', 'nohtyp', 'si', 'FUN']
   ```

   &nbsp;

2. Write a lambda function `filter_and_transform` that accepts a list of integers and returns a new list where:

   - All odd numbers are squared.
   - All even numbers are doubled.
   - The returned list should not contain numbers less than 10.

   ```python
   print(filter_and_transform([5, 12, 8, 15, 3, 20]))
   # Expected Output: [25, 24, 16, 225, 40]
   ```

   &nbsp;

3. Write a lambda function `count_vowels` that accepts a string and returns the count of vowels (a, e, i, o, u) in the string.

   ```python
   print(count_vowels("Hello, World!"))
   # Expected Output: 3
   ```

   &nbsp;

4. Write a lambda function `filter_dict` that accepts a dictionary and returns a new dictionary containing only key-value pairs where the key's paired value is greater than a given threshold.

   **Example Usage:**

   ```python
   print(filter_dict({'apple': 10, 'dog': 2, 'banana': 7}, 4))
   # Expected Output: {'apple': 10, 'banana': 7}
   ```

   &nbsp;

5. Write a lambda function `common_elements` that accepts two lists and returns the sorted intersection of the two lists.

   **Example Usage:**

   ```python
   print(common_elements([1, 2, 3, 4], [3, 4, 5, 6]))
   # Expected Output: [3, 4]
   ```

   &nbsp;

6. Write a lambda function `alternate_case` that accepts a string and returns a new string where characters at even indices are uppercase and odd indices are lowercase.

   **Example Usage:**

   ```python
   print(alternate_case("python"))
   # Expected Output: "PyThOn"
   ```

   &nbsp;
