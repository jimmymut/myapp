import { UserContext } from "../App";
import Layout from "../components/Layout";
import Paragraph from "../components/Parag";
import ClassComponent from "./ClassComp";
import { useContext } from "react";

export default function About() {
    const data = useContext(UserContext);
   
    return (
        <Layout>
            <div className="w-full h-screen bg-green-600">
            <Paragraph body="This is About page"/>
            <p>Name: {data.name}</p>
            <p>Name: {data.email}</p>
            <ClassComponent/>
        </div>
        </Layout>
    );
}