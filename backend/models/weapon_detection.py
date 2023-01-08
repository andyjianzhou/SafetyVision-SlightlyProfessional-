import cv2
import torch
from io import BytesIO
import numpy as np
from PIL import Image
import os
import sys 

sys.path.insert(0, 'SafetyVision-huh-/backend/firebase_wrapper')

from firebase_connection import firebase_connection

# Initialize the FirebaseWrapper class
fc = firebase_connection()

model = torch.hub.load("yolov5", 'custom', path="yolov5s.pt", source='local') 
# model.conf = 0.25
model.conf = 0.05
# model.iou = 0.45
model.eval()

image = cv2.imread("gas-gun.jpg")
output = model(image)
if not output:
  print("No weapons detected")
else:
  # convert output to numpy array
  image = np.array(output.render()) # this is the image with bounding boxes and labels
  #convert to cv2