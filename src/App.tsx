import React, {FC} from 'react';
import {AppRouter} from "./components/AppRouter";
import {Navbar} from "./components/Navbar";
import {Layout} from "antd";
import './App.css';

const App: FC = () => {
    return (
        <Layout>
            <Navbar/>
            <Layout.Content>
                <AppRouter/>
            </Layout.Content>
        </Layout>
    );
};

export default App;
