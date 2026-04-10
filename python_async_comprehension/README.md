# Python Async Comprehension

Projet sur les générateurs asynchrones et les compréhensions asynchrones en Python avec `asyncio`.

## Concepts couverts

- Générateurs asynchrones avec `async def` + `yield`
- Compréhensions asynchrones avec `async for`
- Attente asynchrone avec `await asyncio.sleep()`
- Annotations de types pour générateurs (`Generator`, `List`)

## Fichiers

| Fichier | Description |
|--------|-------------|
| `0-async_generator.py` | Coroutine `async_generator` — yield 10 floats aléatoires |

## Utilisation

```python
import asyncio

async_generator = __import__('0-async_generator').async_generator

async def main():
    result = []
    async for i in async_generator():
        result.append(i)
    print(result)

asyncio.run(main())
```

## Prérequis

- Python 3.7+
- Module `asyncio` (bibliothèque standard)
- Module `random` (bibliothèque standard)
