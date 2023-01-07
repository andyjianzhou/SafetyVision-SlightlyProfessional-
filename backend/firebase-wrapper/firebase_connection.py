import firebase_admin
from firebase_admin import db

class firebase_connection:
    def __init__(self):
        self.__cred_obj = firebase_admin.credentials.Certificate('safetyvision-huh.json')
        self.__default_app = firebase_admin.initialize_app(self.__cred_obj, {
	        'databaseURL':'https://safetyvision-huh-default-rtdb.firebaseio.com/'
	    })
        self.__ref = db.reference('/')

    def save_image(self,image,time=None,date=None,location=None):
        """
        :param image: This is the image object
        :param time: This is the time as a string
        :param date: This is the date as a string
        :param location: This is the location object
        :return: None
        """

        childref = self.__ref.child('images')
        image_json = {
            'image':'xyz',
            'time':time,
            'date':date,
            'location':location
        }
        childref.push(image_json)

if __name__ == '__main__':
    fc = firebase_connection()
    fc.save_image('xyz')