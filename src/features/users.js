import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice( {
    name: "users",
    initialState: {
        value: {
            allUsr: [],
            currentUser: null,
            messages: []
        }   
    },
    reducers: {
        addUser: ({value}, {payload}) => {
            const user = {
                username: payload.username,
                password: payload.password1,
                image: "https://content.invisioncic.com/b305525/monthly_2020_12/large.darkelf_male.jpg.f221674a9b05df83abb1dd58e6a9a00a.thumb.jpg.8881a3ee7ad18aac99449c66764df82c.jpg"
            }
            value.allUsr.push(user)
        },
       updateImage: ({value}, {payload}) => {
        const {index, current} = payload
        value.allUsr[index] = current
        value.currentUser = current
       },
       updatePassword: ({value}, {payload}) => {
        const {index, current} = payload
        value.allUsr[index] = current
        value.currentUser = current
       },
       getCurrentUser: ({value}, {payload}) => {
        value.currentUser = payload
       },
       addMsg:({value}, {payload}) => {
        const message = {
                message: payload.message
            }
            value.messages.push(message)
       }
    }
})

export const {addUser, updateImage, getCurrentUser, updatePassword, addMsg} = userSlice.actions

export default userSlice.reducer