#!/usr/bin/env python3
"""Module pour créer des asyncio.Task."""

import asyncio

wait_random = __import__('0-basic_async_syntax').wait_random


def task_wait_random(max_delay: int) -> asyncio.Task:
    """Return an asyncio.Task for wait_random(max_delay).

    Args:
        max_delay: maximum delay passed to wait_random

    Returns:
        asyncio.Task wrapping wait_random
    """
    return asyncio.ensure_future(wait_random(max_delay))
