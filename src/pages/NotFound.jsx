import Layout from "../components/Layout"

export const NotFound = () =>{
    return(
        <Layout>
            <div className=" absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2">
                <h1 className="capitalize text-red-700 text-center text-2xl font-bold">
                   Error! Page not found!
                </h1>
            </div>
        </Layout>
    )
}