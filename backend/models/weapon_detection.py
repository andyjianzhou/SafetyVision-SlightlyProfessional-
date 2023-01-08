import cv2
import torch
from io import BytesIO
import numpy as np
from PIL import Image
from firebase_connection import firebase_connection
from datetime import date, datetime
import time
# Initialize the FirebaseWrapper class
fc = firebase_connection()
labels = {0: "Knife", 1:"Gun"}
model = torch.hub.load("yolov5", 'custom', path="yolov5s.pt", source='local') 
model.conf = 0.30
# model.conf = 0.05
model.iou = 0.45
model.eval()

image = cv2.imread("gun-test.jpg")
output = model(image)
#get the label NAME of what is detected
output.show()

if not output:
  print("No weapons detected")
else:
    current_day = date.today()
    current_time = datetime.now().strftime("%H:%M:%S")
    weapon = str(output)
    weapon = 'pistol' if 'pistol' in weapon else 'knife'
    print(weapon)
    # boxes = output.xyxy[0][:, :-1].numpy() # get the bounding boxes
    # convert output to numpy array
    image = np.array(output.render()) # this is the image with bounding boxes and labels
    fc.save_image(image=image, weapon_type=weapon,location='DICE', time=str(current_time), date=str(current_day))
    #sleep for 10 minutes
    time.sleep(600)
    #convert to cv2