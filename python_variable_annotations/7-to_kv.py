#!/usr/bin/env python3
"""string and int/float to tuple"""

from typing import Union, Tuple


def to_kv(k: str, v: Union[int, float]) -> Tuple[str, float]:
    """return tuple of string and square of int/float"""
    return (k, v ** 2)
