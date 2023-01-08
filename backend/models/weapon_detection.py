import cv2
import torch
from io import BytesIO
import numpy as np
from PIL import Image
from firebase_connection import firebase_connection
from datetime import date, datetime
import time
# Initialize the FirebaseWrapper class

def score_frame(frame, mode):
    frame = Image.fromarray(frame)
    results = model(frame)
    labels = results.xyxy[0][:, -1].numpy()
    bounding_boxes = results.xyxy[0][:, :-1].numpy()
    return labels, bounding_boxes

def plot_bounding_boxes(frame, labels, bounding_boxes):
    for i in range(len(labels)):
        label = labels[i]
        bounding_box = bounding_boxes[i]
        x1, y1, x2, y2 = bounding_box
        cv2.rectangle(frame, (x1, y1), (x2, y2), (0, 255, 0), 2)
        cv2.putText(frame, labels[label], (x1, y1 - 10), cv2.FONT_HERSHEY_SIMPLEX, 0.9, (36, 255, 12), 2)
    return frame
    
fc = firebase_connection()
labels = {0: "Knife", 1:"Gun"}
model = torch.hub.load("yolov5", 'custom', path="yolov5s.pt", source='local') 
model.conf = 0.6
# model.conf = 0.05
model.eval()

# image = cv2.imread("gun-test.jpg")

#use webcam
print("Starting webcam...")
cap = cv2.VideoCapture(0)

while True:
    ret, frame = cap.read()
    if not ret:
        print("failed to grab frame")
        break
    #convert frame to PIL image
    frame = cv2.cvtColor(frame, cv2.COLOR_BGR2RGB)
    output = model(frame)
    output.render()

    for img in output.render():
        img = cv2.cvtColor(frame, cv2.COLOR_RGB2BGR)
        cv2.imshow("frame", img)
        if cv2.waitKey(1) == ord("q"):
            break


    
# use webcam and plot bounding boxes on screen through opencv




# output = model(image)
# print(output)
# #get the label NAME of what is detected
# output.show()

# if output is None:
#   print("No weapons detected")
# else:
#     current_day = date.today()
#     current_time = datetime.now().strftime("%H:%M:%S")
#     weapon = str(output)
#     weapon = 'pistol' if 'pistol' in weapon else 'knife'
#     print(weapon)
#     # boxes = output.xyxy[0][:, :-1].numpy() # get the bounding boxes
#     # convert output to numpy array
#     image = np.array(output.render()) # this is the image with bounding boxes and labels
#     fc.save_image(image=image, weapon_type=weapon,location='DICE', time=str(current_time), date=str(current_day))
#     #sleep for 10 minutes
#     time.sleep(600)
#     #convert to cv2