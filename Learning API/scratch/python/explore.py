# install Twilo helper library
    # good that activated bc want to download package using PIP (Acute Recursive Algorithm of PIP install packages)
    # "pip install twilio"

from twilio.rest import Client

# make new client- instantiate using accountSID/authToken
client = Client(
    "ACd2e29d1edd672529a6ffe2959dc3cdf7", 
    "7336bfe53c7f0c001f11ef857a1f9c63"
)

# print call log (to show similarities/differences between the libraries)
# Python version = synchronous 
    # so can iterate through list of messages
for msg in client.messages.list():
    # print(msg.body)
    # msg = object (has methods- e.x. delete it)
    print(f"Deleting {msg.body}")
    msg.delete()

# send new message (abstracting away fact that posting to messages sub-resource under my account)
    # abstraction also gives us instance variables that represent our resources
msg = client.messages.create(
    to="+12482693697",
    from_="+19362592060",
        # from = keyword from python -> use "from_"
    body="Hello from Python",
)

print(f"Created a new message: {msg.sid}")