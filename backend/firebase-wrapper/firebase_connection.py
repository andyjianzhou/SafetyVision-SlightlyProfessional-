from json import JSONEncoder
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
            'image': np.array2string(image,precision=3,separator=','),
            'time': time,
            'date': date,
            'location': location,
            'weapon_type': weapon_type,
            'new':1
        }
        # encoded_image_json = json.dumps(image_json, cls=NumpyArrayEncoder)
        childref.push(image_json)

    def get_new_data(self):
        childref = self.__ref.child('images')
        snapshot = childref.order_by_child('new').equal_to(1).get()
        # Set all new to 0 and convert image
        for k,v in snapshot.items():
            keychildref = childref.child(k)
            v['new'] = 0
            keychildref.update(v)
            snapshot[k]['image'] = eval('np.array(' + v['image'] + ')')

        return snapshot

    def user_auth(self,username,password):
        childref = self.__ref.child('users')
        pass

    def create_user(self,username,password):
        """
        Function to create user
        :param username: string
        :param password: string
        :return: True if successful else false
        """
        childref = self.__ref.child('users')
        if not childref.child(username).get():
            childref.child(username).set(password)
            return True
        return False

if __name__ == '__main__':
    fc = firebase_connection()

    # Test to add image
    # for i in range(5):
    #     fc.save_image(image=np.array([[1.02,2,3,4],[1,2,4,5]]))

    # Test to get new data
    # print(fc.get_new_data())

    print(fc.create_user('hd','hd'))