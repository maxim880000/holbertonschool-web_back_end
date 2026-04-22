#!/usr/bin/env python3
"""module fontion index_range"""


def index_range(page: int, page_sizes: int) -> tuple:
    """
    return un tuple avex deux index celui du debut et de la fin

        page: numéro de page (commence a 1)
        page_size: nombre d'éléments par page

    Retourne:
        Tuple de (index_début, index_fin)
    """
    debut = (page - 1) * page_sizes
    return (debut, debut + page_sizes)
