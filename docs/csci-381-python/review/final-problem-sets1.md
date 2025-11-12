# Final Review: Problem Sets 1

1. Given the following Python code:

   ```python
    from functools import wraps

    def function_logger(func):
        counter = 0

        @wraps(func)
        def wrapper(*args, **kwargs):
            nonlocal counter

            counter += 1
            result = func(*args, **kwargs)

            print(f"The function {func.__name__} has run {counter} times")

            return result
        return wrapper


    @function_logger
    def count_generator():
        i = 0
        while True:
            yield i
            i += 1


    @function_logger
    def do_nothing() -> None:
        pass


    gen = count_generator()
    for _ in range(5):
        print(next(gen))

    for _ in range(5):
        do_nothing()
   ```

   **a.** How many times will the output `The function count_generator has run n times` be printed?

   **b.** How many times will the output `The function do_nothing has run n times` be printed?

   &nbsp;

2. Write a coroutine function that yields Fibonacci numbers indefinitely, but allows resetting its state via `send()`. The coroutine will receive any integer value as a sentinel for resetting its state.

   ```python
    fib_gen = fibonacci_generator()

    # Generate some numbers
    print(next(fib_gen))  # 0
    print(next(fib_gen))  # 1
    print(next(fib_gen))  # 1
    print(next(fib_gen))  # 2
    print(next(fib_gen))  # 3

    # Reset the sequence
    print(fib_gen.send(0))  # 0

    # Start over
    print(next(fib_gen))  # 1
    print(next(fib_gen))  # 1
   ```

   &nbsp;

3. What will be the output of the following code?

   ```python
   def decorator(func):
       return lambda: (x for x in range(5))

   @decorator
   def gen():
       for x in range(3):
           yield x

   print(sum(gen()))

   ```

   &nbsp;

4. Determine the output of this nested generator comprehension:

   ```python
   print(sum(x for x in (y for y in range(3))))
   ```

   &nbsp;

5. Is there a syntax error in this code? If not, determine the output:

   ```python
   gen = ((x * y,) for x in range(2) for y in range(2))
   print(list(gen))
   ```

   &nbsp;

6. Predict the output of the following code involving multiple decorators:

   ```python
    def dec1(func):
        return lambda x: func(x) * 10


    def dec2(func):
        return lambda x: -func(x)


    def dec3(func):
        return lambda x: func(x) + 5


    @dec1
    @dec2
    @dec3
    def number(n):
        return n


    print(number(5))
   ```

   &nbsp;

7. Trace the following nested generator expression. What is the output of the print statements?

   ```python
   gen = ((x, y, z) for x in 'abc' for y in '123' for z in [True, False])
   print(next(gen))
   print(next(gen))
   print(next(gen))
   ```

   &nbsp;

8. What is the output of the following code? If we want the output to be the opposite, what do we have to change about the code?

   ```python
   data = {
       "name": "General Kenobi",
       "lines": {
           "hello there": 1,
           "this is where the fun begins": 0,
       }
   }
   new_data = data.copy()
   new_data["lines"]["hello there"] = 2
   print(data == new_data)
   ```

   &nbsp;

9. What is the output?

   ```python
   d1 = {'a': 1, 'b': 2}
   d2 = {'b': 3, 'c': 4}

   d2 = {**d1, **d2}
   print(d2)
   ```

   &nbsp;

10. Write a function `create_memo` that accepts a function reference `func` as an argument. `create_memo` should:

    - Cache the result of `func` for each unique input.
    - Return the cached result if the same input is provided again, without recalculating the result.

    **Example Usage:**

    ```python
    def expensive_calculation(x):
        print(f"Calculating for {x}...")
        return x * x

    calc = create_memo(expensive_calculation)
    print(calc(5))  # Output: Calculating for 5... 25
    print(calc(5))  # Output: 25 (cached)
    print(calc(7))  # Output: Calculating for 7... 49
    print(calc(5))  # Output: 25 (cached)
    print(calc(7))  # Output: 49 (cached)
    ```

    &nbsp;

11. The file `poem.txt` contains several lines of text. Write a function that opens the file, reads all lines, and prints only the lines that contain more than 30 characters.

    **a.** Modify your function to return a list of all words (separated by whitespace) that appear more than once in the file.

    **b.** Write a function that counts the number of lines that start with a vowel (a, e, i, o, u, case-insensitive).

    &nbsp;

12. Write a function that takes a filename and returns the number of unique words in the file (case-insensitive, ignore punctuation).

    **a.** Modify your function to also return the 5 most common words and their counts.

    **b.** Write a generator function that yields each sentence (ending with a period, exclamation mark, or question mark) from the file, one at a time.
