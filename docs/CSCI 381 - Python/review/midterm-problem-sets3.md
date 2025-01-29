# Python Problem Sets 3: Basic Data Types, Operators, String Formatting, Short-Circuit Evaluation

1. What is the output of the following code? Explain why.

   ```python
   x = True and "Hello"
   y = False and "Hello"
   print(x)
   print(y)
   ```

   &nbsp;

2. What will be printed and why?

   ```python
   result = None or [] or "python" or 42
   print(result)
   ```

   &nbsp;

3. What are the outputs of the following expressions?

   ```python
   >>> True and 6
   >>> 6 or False
   >>> (7 > 5) * 6
   >>> (7 < 5) * 6
   >>> type(1) == type(4 / 4)
   ```

   &nbsp;

4. Predict the output of this short-circuit evaluation.

   ```python
   x = 10
   y = 5
   result = x > y and x < 20
   print(result)
   ```

   &nbsp;

5. Is there a difference between these two lines of code? Would they result in an runtime error?

   ```python
   x = (a = 5)
   ```

   ```python
   x = a = 5
   ```

   &nbsp;

6. What is the value of `a` after the second assignment?

   ```python
   >>> print(a := 10)
   >>> a = 20
   >>> print(a := a + 5)
   ```

   &nbsp;

7. What is the output of this code? Explain the difference between the two approaches. Any errors?

   ```python
   # Approach 1
   print(a = 7)

   # Approach 2
   print(a := 7)
   ```

   &nbsp;

8. Identify and fix the error in this code. Can you fix this by adding just one more character?

   ```python
   while input_str = input("Enter text: "):
       print(input_str)
   ```

   &nbsp;

9. Explain the difference between the `//` operator and `int` for division truncation.

   ```python
   >>> 2.9 // 1
   >>> int(2.9 / 1)
   >>> -2.9 // 1
   >>> int(-2.9 / 1)
   ```

   &nbsp;

10. What will be the type and value of each result?

    ```python
    a = 5 / 2
    b = 5 // 2
    c = int(5 / 2)
    ```

    &nbsp;

11. What's the output of this code? Explain the formatting specifiers:

    ```python
    num = 12345.6789
    print(format(num, '15,.2f'))
    print(format(num, '15.2e'))
    ```

    &nbsp;

12. What's wrong with this f-string formatting? Fix it:

    ```python
    value = 42
    print(f"{value:10d}")
    print(f"{value:10f}")
    ```

    &nbsp;

13. Compare the output of these three formatting approaches:

    ```python
    num = 123.456
    # Method 1
    print("{:.2f}".format(num))
    # Method 2
    print(format(num, '.2f'))
    # Method 3
    print(f"{num:.2f}")
    ```

    &nbsp;

14. What will this code output? Explain the alignment:

    ```python
    text = "Python"
    print(format(text, '^20s'))
    print(format(text, '>20s'))
    print(format(text, '<20s'))
    ```

    &nbsp;

15. What's the difference between these two expressions?

    ```python
    x = 123.456
    print(f"{x=:.2f}")
    print(f"{x:.2f}")
    ```

    &nbsp;

16. Swap two variables without using a temporary variable

    &nbsp;

17. What are the results of rounding these numbers? Why?

    ```python
    >>> round(1.7)
    >>> round(2.5)
    >>> round(1.5)
    >>> round(2.6)
    ```

    &nbsp;

18. Explain the output of these expressions:

    ```python
    print(bool('False'))
    print(bool(''))
    print(bool(0.0))
    print(bool([]))
    ```

    &nbsp;

19. What will the output be?

    ```python
    print("{} {} {}".format("seven", "eight", "nine"))
    ```

    &nbsp;

20. What will the output be?

    ```python
    print("{0} is the first, {1} is the second, and {0} is the first again".format("one", "two"))
    ```

    &nbsp;

21. What will the output be?

    ```python
    print("{0}, {val1}, and {1}.".format("the penguin borrowed a ladder", "the kangaroo came by for a smoke", val1="the otter mugged me"))
    ```

    &nbsp;

22. What will the output be?

    ```python
    print("{1} {0} {val1}".format("the penguin borrowed a ladder", "the kangaroo came by for a smoke", val1="the otter mugged me"))
    ```

    &nbsp;
