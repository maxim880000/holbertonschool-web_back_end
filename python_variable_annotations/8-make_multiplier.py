#!/usr/bin/env python3
"""make multiplier function"""

from typing import Callable


def make_multiplier(multiplier: float) -> Callable[[float], float]:
    """return function that multiplies float by multiplier"""
    def multiply(x: float) -> float:
        """multiply x by multiplier"""
        return x * multiplier
    return multiply
