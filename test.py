#@author P.I.A. Cumaranathunga
#Topic: How to call python script from javascript and pass data between them

# importing sys module and json module
import sys
import json

# capturing the arg data sends when running the python file
arg_data = sys.argv[1]

# converting that ard data to a python dictionary
converted_arg_data = json.loads(arg_data)

# modifying the dictionary
converted_arg_data["name"] = converted_arg_data["name"] + " edited by python"

# convert the dictionary to a json string
json_data = json.dumps(converted_arg_data)

# output the json string so that js will capture it
print('Hi, I am from python ' + json_data)

# use json.loads(str) -> convert json string to dictionary
# use json.dumps(collection) -> convert collection to json string