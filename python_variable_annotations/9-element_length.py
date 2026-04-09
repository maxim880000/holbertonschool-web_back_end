#!/usr/bin/env python3
"""duck type iterable"""

from typing import Iterable, Sequence, List, Tuple


def element_length(lst: Iterable[Sequence]) -> List[Tuple[Sequence, int]]:
    """return list of tuples with element and its length"""
    return [(i, len(i)) for i in lst]
