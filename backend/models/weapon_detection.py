import cv2
import torch
from io import BytesIO
import numpy as np
from PIL import Image
import os
import sys 

sys.path.insert(0, 'C:/Users/YOLO4/OneDrive/Desktop/SafetyVision-huh-/backend/firebase_wrapper')

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
  
  
  





# Open the webcam or video file
# cap = cv2.VideoCapture(0)  # use 0 for webcam, or file path for video file

# # Capture and process frames
# while True:
#     # Capture a single frame
#     ret, frame = cap.read()
    
#     # Run the frame through the model
#     predictions = model(frame)
    
#     # Extract the bounding boxes and class labels
#     boxes = predictions.xyxy[0][:, :4].numpy()
#     labels = predictions.xyxy[0][:, 5].numpy()
    
#     # Draw bounding boxes and labels on the frame then save it as a numpy array
#     frame = predictions.render()
#     frame = frame[:, :, ::-1].copy()
#     fire_connection.save_image(frame, labels, time=None, date=None, location=None)
    
    
#     # Display the frame (optional)
#     cv2.imshow('frame', frame)
    
#     # Break the loop if the user presses 'q'
#     if cv2.waitKey(1) & 0xFF == ord('q'):
#         break

# # Release the capture
# cap.release()
# cv2.destroyAllWindows()