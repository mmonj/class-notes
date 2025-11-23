# Midterm Review: Python Problem Sets 3

1. Is there a difference between these two lines of code? Would they result in an runtime error?

   ```python
   x = (a = 5)
   ```

   ```python
   x = a = 5
   ```

   &nbsp;

2. What is the value of `a` after the second assignment?

   ```python
   >>> print(a := 10)
   >>> a = 20
   >>> print(a := a + 5)
   ```

   &nbsp;

3. What is the output of this code? Explain the difference between the two approaches. Any errors?

   ```python
   # Approach 1
   print(a = 7)

   # Approach 2
   print(a := 7)
   ```

   &nbsp;

4. Identify and fix the error in this code. Can you fix this by adding just one more character?

   ```python
   while input_str = input("Enter text: "):
       print(input_str)
   ```

   &nbsp;

5. Explain the difference between the `//` operator and `int` for division truncation.

   ```python
   >>> 2.9 // 1
   >>> int(2.9 / 1)
   >>> -2.9 // 1
   >>> int(-2.9 / 1)
   ```

   &nbsp;

6. What will be the type and value of each result?

   ```python
   a = 5 / 2
   b = 5 // 2
   c = int(5 / 2)
   ```

   &nbsp;

7. Explain the output of these expressions:

   ```python
   print(bool('False'))
   print(bool(''))
   print(bool(0.0))
   print(bool([]))
   ```

   &nbsp;

8. What will the output be?

   ```python
   print("{} {} {}".format("seven", "eight", "nine"))
   ```

   &nbsp;

9. What will the output be?

   ```python
   print("{0} is the first, {1} is the second, and {0} is the first again".format("one", "two"))
   ```

   &nbsp;

10. What will the output be?

    ```python
    print("{0}, {val1}, and {1}.".format("the penguin borrowed a ladder", "the kangaroo came by for a smoke", val1="the otter mugged me"))
    ```

    &nbsp;

11. What will the output be?

    ```python
    print("{1} {0} {val1}".format("the penguin borrowed a ladder", "the kangaroo came by for a smoke", val1="the otter mugged me"))
    ```

    &nbsp;
