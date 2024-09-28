import { AppContext } from "../App";
import Layout from "../components/Layout";
import Paragraph from "../components/Parag";
import ClassComponent from "../components/ClassComp";
import { useContext } from "react";

export default function About() {
    const data = useContext(AppContext);

    return (
        <Layout>
            <div className="w-full pt-20 px-8">
            <Paragraph body="This is About page" classes="w-full text-center font-bold text-2xl"/>
            {data.state.user &&(
            <div className="">
            <p>Your name is {data.state.user.name}</p>
            <p>Your email is {data.state.user.email}</p>
            </div>
            )}
            <ClassComponent/>
        </div>
        </Layout>
    );
}