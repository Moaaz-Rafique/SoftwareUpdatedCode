const { createSlice } = require("@reduxjs/toolkit");

const LoginSlice =createSlice({
    name:"Login",
    initialState:{
        dummyData:"Testting......"
    },
    reducers:{
        add(state,action){},
        del(state,action){},
    }
});

export {add,del} = LoginSlice.actions;

export default LoginSlice.reducer