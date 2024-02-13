import React from "react";
import { Text, View } from "react-native";
import RepositoryList from "./RepositoryList";
import AppBar from "./AppBar";
import { Navigate, Route, Routes} from "react-router-native";
import LogIn from "../pages/LogIn";

const Main = () => {
    return (
        <View style={{flex: 1}}>
            <AppBar />
            <Routes>
                <Route path="/" element={<RepositoryList/>}/>
                <Route path="/signin" element={<LogIn/>}/>
                <Route path="*" element={<Navigate to='/'/>}/>
            </Routes>
        </View>
    );
}

export default Main