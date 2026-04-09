#!/usr/bin/env python3
"""Module pour exécuter plusieurs coroutines en parallèle."""

import asyncio
from typing import List

wait_random = __import__('0-basic_async_syntax').wait_random


async def wait_n(n: int, max_delay: int) -> List[float]:
    """Spawn wait_random n times with max_delay and return sorted delays.

    Args:
        n: number of times to spawn wait_random
        max_delay: maximum delay passed to wait_random

    Returns:
        List of delays in ascending order
    """
    tasks = [asyncio.ensure_future(wait_random(max_delay)) for _ in range(n)]
    delays = []
    for coro in asyncio.as_completed(tasks):
        delay = await coro
        delays.append(delay)
    return delays
