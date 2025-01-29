# Python Problem Sets 2: Arguments and Functions

1. Given the following code, what will be the output?

   ```python
   def func(*args, **kwargs):
       print(args)
       print(kwargs)

   func(1, 2, 3, a=4, b=5)
   ```

   &nbsp;

2. Analyze the following code and explain the output:

   ```python
   def func(a, *args, b):
       print(a, args, b)

   func(1, 2, 3, 4)
   ```

   &nbsp;

3. Determine whether the following function definition is valid. If not, explain why:

   ```python
   def func(a, b, /, c, *, d):
       return a + b + c + d
   ```

   &nbsp;

4. Is there an error in any of the calls to `func`? Why? If not, what is the output for each call to `func`?

   ```python
   def func(a, /, b, *, c):
       return a + b + c

   func(1, 2, 3)
   func(a=1, b=3, c=3)
   func(1, b=2, c=3)
   ```

   &nbsp;

5. Analyze the following code and explain the behavior:

   ```python
   def func(a, b, /):
       return a + b

   print(func(1, 2))
   print(func(a=1, b=2))
   ```

   &nbsp;

6. Determine if the following function works as expected. Explain:

   ```python
   def func(*, a, b):
       return a * b

   print(func(a=3, b=4))
   print(func(3, 4))
   ```

   &nbsp;

7. Given the following function, what will be the output of each call? Explain:

   ```python
   def func(a, b, /, c, *, d):
       return a, b, c, d

   print(func(1, 2, 3, d=4))
   print(func(1, b=2, c=3, d=4))
   ```

   &nbsp;

8. What is the output of the following code? Explain:

   ```python
   def func(x, y=10):
       return x * y

   print(func(5))
   print(func(5, 20))
   ```

   &nbsp;

9. Does the following function definition contain any errors? If so, describe them:

   ```python
   def func(a=1, b):
       return a + b
   ```

   &nbsp;

10. Explain the behavior of the following code. Is there any potential pitfall associated with having a keyword argument being assigned a mutable value as a default?

    ```python
    def func(a, mylist=[]):
        mylist.append(a)
        return mylist

    print(func(1))
    print(func(2))
    ```

    &nbsp;
