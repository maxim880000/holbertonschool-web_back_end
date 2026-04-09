# Python Variable Annotations

Python 3 type annotations project — covers basic and complex type hints using the `typing` module.

## Tasks

### 0. Basic annotations - add
`0-add.py` — Function `add(a: float, b: float) -> float` returns the sum of two floats.

### 1. Basic annotations - concat
`1-concat.py` — Function `concat(str1: str, str2: str) -> str` returns the concatenation of two strings.

### 2. Basic annotations - floor
`2-floor.py` — Function `floor(n: float) -> int` returns the floor of a float using `math.floor`.

### 3. Basic annotations - to string
`3-to_str.py` — Function `to_str(n: float) -> str` returns the string representation of a float.

### 4. Define variables
`4-define_variables.py` — Annotated variables: `a: int`, `pi: float`, `i_understand_annotations: bool`, `school: str`.

### 5. Complex types - list of floats
`5-sum_list.py` — Function `sum_list(input_list: List[float]) -> float` returns the sum of a list of floats.

### 6. Complex types - mixed list
`6-sum_mixed_list.py` — Function `sum_mixed_list(mxd_lst: List[Union[int, float]]) -> float` returns the sum of a mixed list.

### 7. Complex types - string and int/float to tuple
`7-to_kv.py` — Function `to_kv(k: str, v: Union[int, float]) -> Tuple[str, float]` returns a tuple of the string and the square of v.

### 8. Complex types - functions
`8-make_multiplier.py` — Function `make_multiplier(multiplier: float) -> Callable[[float], float]` returns a multiplier function.

### 9. Let's duck type an iterable object
`9-element_length.py` — Function `element_length(lst: Iterable[Sequence]) -> List[Tuple[Sequence, int]]` returns a list of tuples with each element and its length.

## Repository

- GitHub: `holbertonschool-web_back_end`
- Directory: `python_variable_annotations`
