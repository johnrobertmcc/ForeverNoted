import React from "react";
import ReactDOM from "react-dom";
import configureStore from './store/store';
import Root from "./components/root";
import { logIn, logOut, signUp } from './actions/session_actions';


document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");
   
    let store;
    if (window.currentUser) {
        const preloadedState = {
            entities: {
                users: { [window.currentUser.id]: window.currentUser }
            },
            session: { id: window.currentUser.id }
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    }

    // window.addEventListener('scroll', () => {
    //     // console.log('scrolled');
    //     const scrolled = window.scrollY;
    //     const scrollable = document.documentElement.scrollHeight - window.innerHeight;

    //     console.log(scrollable);

    //     if (Math.ceil(scrolled) === scrollable) {
    //         alert('bottom')
    //     }
    // });


    // const el = document.querySelector(".sidebar");

    // el.addEventListener('mousedown', mousedown);

    // const resizer = document.querySelector(".resizer");

    // let currentResizer;

    // resizer.addEventListener('mousedown', mousedown);

    // function mousedown(e) {
    //     currentResizer = e.target;

    //     window.addEventListener('mousemove', mousemove);
    //     window.addEventListener('mouseup', mouseup);

    //     let prevX = e.clientX; //shows where is mouse on x axis --2
    //     let prevY = e.clientY; //shows where is mouse on x axis --2

    //     function mousemove(e) {
    //         const rect = el.getBoundingClientRect();

    //         el.style.width = rect.width - (prevX - e.clientX) + 'px';
    //         el.style.height = rect.height - (prevY - e.clientY) + 'px';
            
    //         prevX = e.clientX;
    //         prevY = e.clientY;

    //     }

    //     function mouseup() { //release the mouse
    //         window.removeEventListener("mousemove", mousemove);
    //         window.removeEventListener('mouseup', mouseup);
    //     }
    // }



  
    window.store = store;
    window.logIn = logIn;
    window.logOut = logOut;
    window.signUp = signUp;
    // window.store = store;
    window.getState = store.getState;
    window.dispatch = store.dispatch;

    ReactDOM.render(<Root store={store} />, root);

});