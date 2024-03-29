import React from "react";
import {Text, FlatList} from "react-native";
import repositories from "../data/repositories";
import RepositoryItem from "./RepositoryItem";

const RepositoryList = () => {
    return (
        <FlatList 
            data={repositories}
            ItemSeparatorComponent={() => <Text> </Text>}
            renderItem={({item}) => (
                <RepositoryItem props={{...item}}/>
            )}
        />
    )
}



export default RepositoryList;