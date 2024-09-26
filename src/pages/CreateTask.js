import React from 'react'

export default function CreateTask() {
  return (
    <div>
        <h1>Task Management System</h1>
        <table>
            <tr>
                <td>Task</td>
                <td><input type ="text" name ="taskname"/></td>
            </tr>

            <tr>
                <td>Task Description</td>
                <td><input type ="text" name ="taskdesc"/></td>
            </tr>

            <tr>
                <td></td>
                <td><input type ="submit" value ="Add Task"/></td>
            </tr>
        </table>
    </div>
  )
}

