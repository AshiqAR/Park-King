import csv
import json

# Assuming your CSV file is named 'locations.csv'
csv_file = 'places.csv'

# Initialize an empty dictionary to store the data
data = {}
arr = []

# Read the CSV file and convert it to a dictionary
with open(csv_file, 'r') as file:
    csv_reader = csv.reader(file)
    for idx, row in enumerate(csv_reader):
        data[idx] = {
            "city": row[0],
            "pincode": row[1],
            "district": row[2]
        }
        arr.append(row[0].replace(" ", "").lower())

json_data = json.dumps(data, indent=4)

# Write the dictionary to locations.json
with open('locations.json', 'w') as json_file:
    json_file.write(json_data)

print("Conversion to JSON complete. JSON file created.")

# Write the arr array as an array of strings to arr_output.txt
with open('arr_output.txt', 'w') as arr_file:
    arr_file.write(json.dumps(arr))

print("arr array written as an array of strings to arr_output.txt.")
