# Python Async Functions

Projet d'introduction à la programmation asynchrone en Python avec `asyncio`.

## Concepts couverts

- Coroutines avec `async def`
- Attente asynchrone avec `await`
- Boucle d'événements (`asyncio.run`)
- Génération de nombres aléatoires flottants

## Fichiers

| Fichier | Description |
|--------|-------------|
| `0-basic_async_syntax.py` | Coroutine `wait_random` — attend un délai aléatoire |

## Utilisation

```python
import asyncio
from 0-basic_async_syntax import wait_random  # via __import__

# Attendre un délai aléatoire entre 0 et 10s (défaut)
asyncio.run(wait_random())

# Attendre un délai aléatoire entre 0 et 5s
asyncio.run(wait_random(5))
```

## Prérequis

- Python 3.7+
- Module `asyncio` (bibliothèque standard)
- Module `random` (bibliothèque standard)
