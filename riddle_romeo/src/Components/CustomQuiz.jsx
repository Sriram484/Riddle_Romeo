import "../Assets/CSS/CustomQuiz.css"
import React from 'react'
import { useState } from 'react';



const CustomQuiz = () => {
  return (
   <div className="CustomQuiz">
        <div className="CustomQuiz_Head">
            <h2>Let's Quiz Our Way to Romance</h2>
        </div>

        <div className="CustomQuiz_Body">
            <table>
                <tr>
                    <td>
                        <label htmlFor="Genre">Choose your Genre</label>
                        <select name="Genre" type="text">
                            {
                                
                            }
                        </select>
                    </td>
                </tr>
                <tr>
                    <td>
                        <label htmlFor="Level">Choose your Level</label>
                        <input name="Level" type="text"/>
                    </td>
                </tr>
                <tr>
                    <td>
                        <label htmlFor="Questions">Choose number of Questions</label>
                        <input name="Questions" type="text"/>
                    </td>
                </tr>
                <tr>
                    <td>
                        <label htmlFor="Type">Choose question Type</label>
                        <input name="Type" type="text"/>
                    </td>
                </tr>
            </table>
        </div>


   </div>
  )
}

export default CustomQuiz
