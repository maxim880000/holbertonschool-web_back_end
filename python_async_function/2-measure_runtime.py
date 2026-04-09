#!/usr/bin/env python3
"""Module pour mesurer le temps d'exécution de wait_n."""

import asyncio
import time

wait_n = __import__('1-concurrent_coroutines').wait_n


def measure_time(n: int, max_delay: int) -> float:
    """Measure total execution time for wait_n(n, max_delay) and return total_time / n.

    Args:
        n: number of coroutines to spawn
        max_delay: maximum delay passed to wait_n

    Returns:
        Average time per coroutine (float)
    """
    start = time.perf_counter()
    asyncio.run(wait_n(n, max_delay))
    return (time.perf_counter() - start) / n
