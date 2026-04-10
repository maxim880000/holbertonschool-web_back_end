#!/usr/bin/env python3
"""Module for async generator"""
import asyncio
import random


async def async_generator():
    """Coroutine that loops 10 times with async sleep"""
    for _ in range(10):
        await asyncio.sleep(1)
