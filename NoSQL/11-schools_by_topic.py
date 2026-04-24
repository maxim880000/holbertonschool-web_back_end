#!/usr/bin/env python3
""" module pour trouver les ecole par topic dans mongo """


def schools_by_topic(mongo_collection, topic):
    """ retourne la liste des ecole qui on un topic spesifik
    mongo_collection cest lobje collection pymongo
    topic cest le topic a chercher """
    return list(mongo_collection.find({"topics": topic}))
