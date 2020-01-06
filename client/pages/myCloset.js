import React from "react";
import Nav from "../components/nav";
import fetch from "isomorphic-unfetch";
import Styled from "styled-components";
import Layout from "../components/Layout";

const ImagesContainer = Styled.div`
display: flex;
flex-direction: row;
`;

const Closet = props => {
    console.log("props are", props)
    return (
        <>
        <Layout>
                <Nav />
                <h1 className="closet">My Closet</h1>
                <ImagesContainer>
                <ul>
                    {props.clothes.map((items, id) => (
                            <img className="image" src={items.picture} />
                    ))}
                </ul>
                </ImagesContainer>
            </Layout>
                <style jsx>{`
                .image{
                    border-radius: 50%;
                }
                .closet{
                    text-align: center;
                    font-size: 36px;
                }
                `}</style>
        </>
    )

}

Closet.getInitialProps = async function() {

    const res = await fetch(`http://localhost:3001/closet`);
    const data = await res.json();

    return {
        clothes: data
    }
}

export default Closet;