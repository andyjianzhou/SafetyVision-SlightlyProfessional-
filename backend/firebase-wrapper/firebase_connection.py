from json import JSONEncoder
import json
import firebase_admin
from firebase_admin import db
import numpy as np


class NumpyArrayEncoder(JSONEncoder):
    def default(self, obj):
        if isinstance(obj, np.ndarray):
            return obj.tolist()
        return JSONEncoder.default(self, obj)


class firebase_connection:
    def __init__(self):
        self.__cred_obj = firebase_admin.credentials.Certificate('safetyvision-huh.json')
        self.__default_app = firebase_admin.initialize_app(self.__cred_obj, {
            'databaseURL': 'https://safetyvision-huh-default-rtdb.firebaseio.com/'
        })
        self.__ref = db.reference('/')

    def save_image(self, image, weapon_type=None, time=None, date=None, location=None):
        """
        :param image: This is the image np object
        :param weapon_type: This is the weapontype as a string
        :param time: This is the time as a string
        :param date: This is the date as a string
        :param location: This is the string object
        :return: None
        """

        childref = self.__ref.child('images')
        image_json = {
            'image': image,
            'time': time,
            'date': date,
            'location': location,
            'weapon_type': weapon_type,
            'new':1
        }
        encoded_image_json = json.dumps(image_json, cls=NumpyArrayEncoder)
        childref.push(encoded_image_json)

    def get_new_data(self):
        childref = self.__ref.child('images')
        snapshot = childref.order_by_child('new').equal_to(1).get()
        for k,v in snapshot.items():
            print(v)

if __name__ == '__main__':
    fc = firebase_connection()
    # for i in range(5):
    #     fc.save_image(image=np.array([[1,2,3,4],[1,2,4,5]]))
    fc.get_new_data()