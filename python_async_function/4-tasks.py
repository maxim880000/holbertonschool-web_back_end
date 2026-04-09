#!/usr/bin/env python3
"""Module pour exécuter plusieurs tasks en parallèle."""

import asyncio
from typing import List

task_wait_random = __import__('3-tasks').task_wait_random


async def task_wait_n(n: int, max_delay: int) -> List[float]:
    """Spawn task_wait_random n times with max_delay and return sorted delays.

    Args:
        n: number of tasks to spawn
        max_delay: maximum delay passed to task_wait_random

    Returns:
        List of delays in ascending order
    """
    tasks = [task_wait_random(max_delay) for _ in range(n)]
    delays = []
    for task in asyncio.as_completed(tasks):
        delay = await task
        delays.append(delay)
    return delays
