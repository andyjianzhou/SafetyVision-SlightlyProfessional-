import cv2
import torch

# Configure the pyrebase client
config = {
  "apiKey": "your-api-key",
  "authDomain": "your-project-id.firebaseapp.com",
  "databaseURL": "https://your-project-id.firebaseio.com",
  "storageBucket": "your-project-id.appspot.com",
  "serviceAccount": "/path/to/serviceAccount.json"
}
# firebase = pyrebase.initialize_app(config)
# db = firebase.database()

# Load the model
# model = yolov5.load_model('weights.pt')
#load custom model weight
model = torch.hub.load("yolov5", 'custom', path="yolov5s.pt", source='local') 

# Open the webcam or video file
cap = cv2.VideoCapture(0)  # use 0 for webcam, or file path for video file

# Capture and process frames
while True:
    # Capture a single frame
    ret, frame = cap.read()
    
    # Run the frame through the model
    predictions = model(frame)
    
    # Extract the bounding boxes and class labels
    boxes = predictions.xyxy[0][:, :4].numpy()
    labels = predictions.xyxy[0][:, 5].numpy()

    
    # Send the data to Firebase
    # db.child("predictions").push({
    #     "boxes": boxes.tolist(),  # convert numpy array to list
    #     "labels": labels.tolist()
    # })
    
    # Display the frame (optional)
    cv2.imshow('frame', frame)
    
    # Break the loop if the user presses 'q'
    if cv2.waitKey(1) & 0xFF == ord('q'):
        break

# Release the capture
cap.release()
cv2.destroyAllWindows()