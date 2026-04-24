#!/usr/bin/env python3
"""
Module that lists all documents in a MongoDB collection
"""


def list_all(mongo_collection):
    """
    Lists all documents in a MongoDB collection.
    
    Args:
        mongo_collection: pymongo collection object
    
    Returns:
        A list of all documents in the collection.
        Returns an empty list if no document in the collection
    """
    return list(mongo_collection.find())


if __name__ == "__main__":
    pass
