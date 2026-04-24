#!/usr/bin/env python3
""" module pour inserer un dokument dans une kolection mongo """


def insert_school(mongo_collection, **kwargs):
    """ inserr un dokument dans la kolection avec les kwargs donner
    retourne le id du noveau dokument kree """
    result = mongo_collection.insert_one(kwargs)
    return result.inserted_id
