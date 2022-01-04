import React from 'react'
import styled from 'styled-components';
import Analytics from './Analytics';
import Earnings from './Earnings';
import FAQ from './FAQ';
import Navbar from './Navbar';
import Profile from './Profile';
import Transfers from './Transfers';

export default function Dashboard() {
    return (
        <Section>
            <Navbar />
            <div className="grid">
                <div className="row__one">
                    <Analytics />
                    <FAQ />
                </div>
                <div className="row__two">
                    <Earnings />
                    <Transfers />
                    <Profile />
                </div>
            </div>
        </Section>
    );
}

const Section = styled.section`
    margin-left: 18vw;
    padding: 2rem;
    height: 100%;
`;