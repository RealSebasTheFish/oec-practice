import requests

headerData = {
    "Content-Type": "application/json"
}

dataData = {
    "name": "sdf"
}

response = requests.get("http://localhost:3000/getuser/", headers=headerData, json=dataData)

data = response.json()

if not data["username"] == "":
    print(data["username"])
else:
    print("Not found")

