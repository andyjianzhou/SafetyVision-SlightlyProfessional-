import firebase_admin
from flask_mail import Mail, Message
from flask import Flask, request, jsonify
from firebase_admin import auth, credentials, db
from mailchimp3 import MailChimpClient

# Initialize the Flask app
app = Flask(__name__)
mail = Mail(app)
client = MailChimpClient(mc_api='30948dc1e674a758d520c240546cbe78-us21')
list_id = 'e70e1bdce4'


# Initialize the Firebase Admin SDK with a service account JSON file
cred = credentials.Certificate("C:/Users/rocky/OneDrive/Desktop/safetyvision-huh.json")
firebase_admin.initialize_app(cred, {
    'databaseURL': 'https://safetyvision-huh-default-rtdb.firebaseio.com/'
})

app.config['MAIL_SERVER'] = 'sth.example.com'
app.config['MAIL_PORT'] = 465
app.config['MAIL_USE_SSL'] = True
# lower the security setting for Flask-Mail
app.config['MAIL_USE_TLS'] = False
app.config['MAIL_USERNAME'] = 'user@example.com'
app.config['MAIL_PASSWORD'] = 'password'


@app.route('/')
def home():
    # Retrieve data from Firebase
    data = db.reference('data').get()
    return jsonify(data)


@app.route('/login', methods=['POST'])
def login():
    username = request.form['username']
    password = request.form['password']

    # Check the username and password against Firebase
    try:
        user = auth.get_user_by_email(username)
        if auth.verify_id_token(user.uid, password):
            return 'Login successful'
        else:
            return 'Invalid password'
    except auth.ErrorInfo:
        return 'Invalid username'


@app.route('/send')
def send_email():
    msg = Message('Hello', sender='user@example.com', recipients=[''])
    msg.body = 'This is a test email sent from Flask-Mail'
    mail.send(msg)
    return 'Email sent'


@app.route('/submit', methods=['POST'])
def subscribe():
    # Get the email address from the request data
    email = request.form['email']

    return email
    

if __name__ == '__main__':
    app.run(debug=True)
