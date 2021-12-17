import React from 'react';
import Search from "./search";

function Body(props) {
    return (
        <section className={'bg-black ml-24 py-4 space-y-8 md:max-w-6xl flex-grow md:mr-2.5'}>
            {/*flexGrow take up as much space as possible*/}
            <Search/>
        </section>
    );
}

export default Body;