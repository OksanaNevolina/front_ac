import React from 'react';
import {Header} from "../header/Header";
import {MainContent} from "../mainAC/MainContent";
import {CourseInfo} from "../сourseInfo/CourseInfo";



const MainLayout = () => {
    return (
        <div>
            <div>
                <Header/>
                <MainContent/>
                <CourseInfo/>

            </div>
        </div>

    );
};
export {MainLayout};

