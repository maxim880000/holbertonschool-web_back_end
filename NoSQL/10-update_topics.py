#!/usr/bin/env python3
""" module pour changer les topic dune ecole dans mongo """


def update_topics(mongo_collection, name, topics):
    """ met a jour tou les topic dune ecole avec le nom donner
    mongo_collection cest lobje collection pymongo
    name cest le nom de lecole a modifier
    topics cest la liste des topic a mettre """
    mongo_collection.update_many(
        {"name": name},
        {"$set": {"topics": topics}}
    )
