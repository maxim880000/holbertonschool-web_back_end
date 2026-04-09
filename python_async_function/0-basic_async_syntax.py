#!/usr/bin/env python3
"""Module de base pour la syntaxe async en Python."""

import asyncio
import random


async def wait_random(max_delay: int = 10) -> float:
    """Attend un délai aléatoire entre 0 et max_delay secondes.

    Args:
        max_delay: délai maximum en secondes

    Returns:
        Le délai aléatoire attendu (float)
    """
    # Générer un nombre flottant aléatoire entre 0 et max_delay
    delay = random.uniform(0, max_delay)

    # Attendre de façon asynchrone sans bloquer la boucle d'événements
    await asyncio.sleep(delay)

    return delay
