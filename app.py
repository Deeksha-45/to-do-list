from flask import Flask, request, jsonify
from flask_pymongo import PyMongo

app = Flask(__name__)
app.config['MONGO_URI'] = 'mongodb+srv://deekshareddy1001:deeksha1001@cluster0.hrpkh49.mongodb.net/?retryWrites=true&w=majority'
mongo = PyMongo(app)

# Create a new to-do item
@app.route('/todos', methods=['POST'])
def create_todo():
    todo = request.json
    todo_id = mongo.db.todos.insert_one(todo).inserted_id
    return jsonify(str(todo_id))

# Update an existing to-do item
@app.route('/todos/<todo_id>', methods=['PUT'])
def update_todo(todo_id):
    updated_todo = request.json
    result = mongo.db.todos.update_one({'_id': ObjectId(todo_id)}, {'$set': updated_todo})
    if result.modified_count > 0:
        return jsonify({'message': 'Todo updated successfully'})
    else:
        return jsonify({'message': 'Todo not found'})

# Delete a to-do item
@app.route('/todos/<todo_id>', methods=['DELETE'])
def delete_todo(todo_id):
    result = mongo.db.todos.delete_one({'_id': ObjectId(todo_id)})
    if result.deleted_count > 0:
        return jsonify({'message': 'Todo deleted successfully'})
    else:
        return jsonify({'message': 'Todo not found'})

# Fetch all to-do items
@app.route('/todos', methods=['GET'])
def get_todos():
    todos = list(mongo.db.todos.find())
    return jsonify(todos)

if __name__ == '__main__':
    app.run(debug=True)
