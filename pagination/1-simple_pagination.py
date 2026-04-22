#!/usr/bin/env python3
"""Module pagination d'une db de prénoms"""

import csv
import math
from typing import List


def index_range(page: int, page_size: int) -> tuple:
    """
    Retourne un tuple debut fin
        page: numéro de page (indexé à partir de 1)
        page_size: nombre d'éléments par page
        return
        Tuple de (index_début, index_fin)
    """
    debut = (page - 1) * page_size
    return (debut, debut + page_size)


class Server:
    """Classe serveur pour paginer une db de prénoms"""

    DATA_FILE = "Popular_Baby_Names.csv"

    def __init__(self):
        """Initialise le serveur avec un dataset vide"""
        self.__dataset = None

    def dataset(self) -> List[List]:
        """Retourne le dataset mis en cache"""
        if self.__dataset is None:
            with open(self.DATA_FILE) as f:
                reader = csv.reader(f)
                dataset = [row for row in reader]
            self.__dataset = dataset[1:]

        return self.__dataset

    def get_page(self, page: int = 1, page_size: int = 10) -> List[List]:
        """
        Retourne une page du dataset selon les paramètres de pagination
            page: numéro de page 1
            page_size: nombre d'éléments par page 10

            retur
            Liste des lignes correspondant à la page demandée
            ou une liste vide si les paramètres sont hors limites
        """
        assert isinstance(page, int) and page > 0
        assert isinstance(page_size, int) and page_size > 0

        debut, fin = index_range(page, page_size)
        dataset = self.dataset()

        if debut >= len(dataset):
            return []

        return dataset[debut:fin]
